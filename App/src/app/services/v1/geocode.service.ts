import {Injectable, NgZone} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {
  results: any;

  constructor(private ngZone: NgZone,
              private http: HttpClient) {
  }

  mapQuestGeocode(addressToGeocode, country): Promise<{lat: number; lng: number}> {
    return new Promise((resolve, reject) => {
      const address = `${addressToGeocode},${country}`;
      this.geocodeMapQuestAddress(address)
        .subscribe((response: any) => {
          const data = response;
          if (data.results && data.results.length > 0) {
            if (data.results[0].locations && data.results[0].locations.length > 0) {
              if (data.results[0].locations[0].latLng) {
                const lat = data.results[0].locations[0].latLng.lat;
                const lng = data.results[0].locations[0].latLng.lng;
            resolve({lat, lng});
          }
            }
          } else {
            reject();
          }
        }, error => {
          reject(error);
        });
    });
  }

  GMGeocodeAddress(addressToGeocode, country): Promise<{lat: number; lng: number}> {
    return new Promise((resolve, reject) => {
      const self = this;
      const address = `${addressToGeocode},${country}`;
      const geocoder = new google.maps.Geocoder();
      // tslint:disable-next-line:only-arrow-functions
      geocoder.geocode({address}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          self.ngZone.run(() => {
            self.results = results;
            const lat = results[0].geometry.location.lat();
            const lng = results[0].geometry.location.lng();
            resolve({lat, lng});
          });
        } else {
          reject(status);
          // alert('Geocode was not successful for the following reason: ' + status);
          if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
            // self.toastComponent.presentToast('El API de Google Maps no encontró resultados');
          }
        }
      });
    });
  }

  geocodeMapQuestAddress(address) {
    const key = environment.mapquest.key;
    const endpoint = 'http://www.mapquestapi.com/geocoding/v1/address';
    const url = `${endpoint}?key=${key}&location=${address}&thumbMaps=false&boundingBox=-21.357261,-74.723118,-57.6807156,-41.57098356&maxResults=1`;
    return this.http.get(`${url}`);
  }
}
