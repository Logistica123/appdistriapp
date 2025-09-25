import {Injectable, NgZone} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Geolocation, GeolocationOptions, Geoposition, PositionError} from '@ionic-native/geolocation/ngx';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  driverPosition$ = new BehaviorSubject<Geoposition>(null);
  watchPositionSubscription: any;

  lastUpdateTime = Date.now();
  minFrequency = 180000; // milliseconds

  geolocationOptions: GeolocationOptions = {
    enableHighAccuracy: true,
    timeout: 10000
  };

  constructor(public http: HttpClient,
              private geolocation: Geolocation,
              public zone: NgZone) {
  }

  storeDriverGeoposition(body) {
    return this.http.post(`${this.API_URL}${this.V1}driver-geopositions`, body);
  }

  getDriverPosition$(): Observable<Geoposition> {
    return this.driverPosition$.asObservable();
  }

  setDriverPosition$(position: Geoposition) {
    console.log('setting new driver position');
    this.driverPosition$.next(position);
  }

  getDriverPosition() {
    return this.driverPosition$.getValue();
  }

  getCurrentPosition() {
    return this.geolocation.getCurrentPosition(this.geolocationOptions)
      .then((position: Geoposition) => {
        if (position && position.coords) {
          this.setDriverPosition$(position);
        }
      }).catch((error) => {
        console.log('Error getting location', error);
      });
  }

  watchPosition() {
    console.log('watching position');
    this.watchPositionSubscription = this.geolocation.watchPosition(this.geolocationOptions)
      .subscribe((position: Geoposition) => {
        this.zone.run(() => {
          console.log('got new position');
          if (position && position.coords) {
            this.setDriverPosition$(position);
            if (this.lastUpdateTime && Date.now() - this.lastUpdateTime < this.minFrequency) {
              // ignoring position
            } else {
              this.setDriverPositionBody(position);
            }
          }
        });
      });
  }

  stopWatchingPosition() {
    console.log('stopping watching position');
    if (this.watchPositionSubscription) {
      this.watchPositionSubscription.unsubscribe();
    }
  }

  checkWatchLocationsSubscription() {
    return this.watchPositionSubscription;
  }

  setDriverPositionBody(position) {
    const body = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy,
      altitude: position.coords.altitude,
      altitude_accuracy: position.coords.altitudeAccuracy,
      heading: position.coords.heading,
      speed: position.coords.speed
    };

    this.storeDriverGeoposition(body)
      .subscribe(
        response => {
          this.lastUpdateTime = Date.now();
        });
  }

  logDirectionsRouteRequest() {
    return this.http.post(`${this.API_URL}${this.V1}directions-route-request`, null);
  }
}
