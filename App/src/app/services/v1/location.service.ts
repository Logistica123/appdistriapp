import {Injectable, NgZone} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Location} from '../../interfaces/Location';
import {map, tap} from 'rxjs/operators';
import {NetworkService} from '../utils/network.service';
import {Storage} from '@ionic/storage';

declare var google;

const STORAGE_REQ_KEY = 'distriapplocations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  private locations$ = new BehaviorSubject<Location[]>([]);
  lastUpdateTime = Date.now();
  // minFrequency = 1800000; // milliseconds
  minFrequency = 10000; // milliseconds

  constructor(public http: HttpClient,
              private networkService: NetworkService,
              private storage: Storage) {
    //
  }

  getLocations() {
    return this.http.get(`${this.API_URL}${this.V1}locations`);
  }

  getLocationsByKeyword(keyword) {
    return this.http.get(`${this.API_URL}${this.V1}locations/keyword/${keyword}`);
  }

  storeLocation(body) {
    return this.http.post(`${this.API_URL}${this.V1}locations`, body)
      .pipe(map((response: any) => response.locations),
        tap({
          next: val => {
            console.log('on next');
            this.setLocations$(val);
          }
        })
      );
  }

  updateLocationCoords(locationId, body) {
    const url = `${this.API_URL}${this.V1}locations/${locationId}/coords`;
    return this.http.put(url, body);
  }

  geocodeAddress(body) {
    return this.http.post(`${this.API_URL}${this.V1}locations/geocode-address`, body);
  }

  /***********************************************************
   * Observables
   ***********************************************************/
  getLocations$(): Observable<Location[]> {
    console.log(Date.now() - this.lastUpdateTime > this.minFrequency);
    console.log(Date.now());
    console.log(this.lastUpdateTime);
    console.log(Date.now() - this.lastUpdateTime);
    if (this.locations$.getValue().length <= 0) {
      console.log('IS ZERO');
      console.log(this.lastUpdateTime);
      return this.http.get(`${this.API_URL}${this.V1}locations`)
        .pipe(map((response: any) => response.locations),
          tap({
            next: val => {
              console.log('on next');
              this.setLocations$(val);
            }
          })
        );
    } else if (Date.now() - this.lastUpdateTime > this.minFrequency) {
      console.log('NOT IS ZERO, CHECKING NETWORK STATUS: ', this.networkService.getCurrentNetworkStatus());
      if (this.networkService.getCurrentNetworkStatus()) {
        console.log('IS ONLINE');
        return this.http.get(`${this.API_URL}${this.V1}locations`)
          .pipe(map((response: any) => response.locations),
            tap({
              next: val => {
                console.log('on next');
                this.setLocations$(val);
              }
            })
          );
      } else {
        console.log('IS OFFLINE');
        this.storage.get(STORAGE_REQ_KEY)
          .then(locations => {
            console.log('GOT LOCATIONS FROM STORAGE: ', locations);
            return new Observable(observer => {
              observer.next(locations);
              return observer;
            });
          });
      }
    }
    console.log('RETURNING FROM CACHE!');
    return this.locations$.asObservable();
  }

  setLocations$(locations: Location[]) {
    console.log('setting new data...');
    this.lastUpdateTime = Date.now();
    this.storage.set(STORAGE_REQ_KEY, locations);
    this.locations$.next(locations);
  }
}
