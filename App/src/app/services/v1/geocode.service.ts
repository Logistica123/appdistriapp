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

  mapQuestGeocode(addressToGeocode, country, preferredCity?: string): Promise<{lat: number; lng: number}> {
    return new Promise((resolve, reject) => {
      const address = `${addressToGeocode},${country}`;
      this.geocodeMapQuestAddress(address)
        .subscribe((response: any) => {
          const locations = response?.results?.[0]?.locations || [];
          if (!locations.length) {
            reject();
            return;
          }

          const normalizedPreferredCity = this.normalizeCityName(preferredCity);
          const byPreferredCity = normalizedPreferredCity
            ? locations.filter(location => this.matchesPreferredCity(location, normalizedPreferredCity))
            : [];

          const candidates = byPreferredCity.length ? byPreferredCity : locations;
          const bestLocation = this.pickBestLocation(candidates);

          if (!bestLocation || !bestLocation.latLng) {
            reject('NO_LOCATION_MATCH');
            return;
          }

          if (normalizedPreferredCity && !this.matchesPreferredCity(bestLocation, normalizedPreferredCity)) {
            reject('CITY_MISMATCH');
            return;
          }

          const quality = (bestLocation.geocodeQuality || '').toUpperCase();
          const allowedQualities = ['POINT', 'ADDRESS'];
          if (!allowedQualities.includes(quality)) {
            reject('LOW_QUALITY_MATCH');
            return;
          }

          const {lat, lng} = bestLocation.latLng;
          if (typeof lat !== 'number' || typeof lng !== 'number') {
            reject('INVALID_COORDS');
            return;
          }

          if (!this.isWithinCityBounds(lat, lng, normalizedPreferredCity)) {
            reject('CITY_OUT_OF_BOUNDS');
            return;
          }

          resolve({lat, lng});
        }, error => {
          reject(error);
        });
    });
  }

  GMGeocodeAddress(addressToGeocode, country, preferredCity?: string): Promise<{lat: number; lng: number}> {
    return new Promise((resolve, reject) => {
      const self = this;
      const address = `${addressToGeocode},${country}`;
      if (typeof google === 'undefined' || !google.maps || !google.maps.Geocoder) {
        reject('GOOGLE_GEOCODER_UNAVAILABLE');
        return;
      }
      const geocoder = new google.maps.Geocoder();
      // tslint:disable-next-line:only-arrow-functions
      geocoder.geocode({address}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          self.ngZone.run(() => {
            self.results = results;
            const normalizedPreferredCity = this.normalizeCityName(preferredCity);
            const targetResult = this.pickGoogleResult(results, normalizedPreferredCity);

            if (!targetResult) {
              reject('GOOGLE_CITY_MISMATCH');
              return;
            }

            const lat = targetResult.geometry.location.lat();
            const lng = targetResult.geometry.location.lng();

            if (!this.isWithinCityBounds(lat, lng, normalizedPreferredCity)) {
              reject('CITY_OUT_OF_BOUNDS');
              return;
            }
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
    const encodedAddress = encodeURIComponent(address);
    const url = `${endpoint}?key=${key}&location=${encodedAddress}&thumbMaps=false&boundingBox=-21.357261,-74.723118,-57.6807156,-41.57098356&maxResults=5`;
    return this.http.get(url);
  }

  private pickBestLocation(locations: any[]) {
    if (!Array.isArray(locations) || locations.length === 0) {
      return null;
    }

    const qualityScore = (quality: string): number => {
      const normalizedQuality = (quality || '').toUpperCase();
      switch (normalizedQuality) {
        case 'POINT':
          return 5;
        case 'ADDRESS':
          return 4;
        case 'STREET':
          return 3;
        case 'INTERSECTION':
          return 2;
        case 'ZIP':
          return 1;
        default:
          return 0;
      }
    };

    return [...locations].sort((a, b) => qualityScore(b?.geocodeQuality) - qualityScore(a?.geocodeQuality))[0];
  }

  private normalizeCityName(value?: string): string {
    if (!value) {
      return '';
    }

    const text = value.toString();
    const normalized = typeof text.normalize === 'function' ? text.normalize('NFD') : text;

    return normalized
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ciudad de\s+/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private matchesPreferredCity(location: any, normalizedCity: string): boolean {
    if (!normalizedCity) {
      return false;
    }

    const candidates = [location?.adminArea5, location?.adminArea4, location?.adminArea3];
    return candidates.some(value => {
      const normalizedValue = this.normalizeCityName(value);
      return this.areCityNamesEquivalent(normalizedValue, normalizedCity);
    });
  }

  private areCityNamesEquivalent(cityA: string, cityB: string): boolean {
    if (!cityA || !cityB) {
      return false;
    }

    if (cityA === cityB) {
      return true;
    }

    return cityA.includes(cityB) || cityB.includes(cityA);
  }

  private pickGoogleResult(results: google.maps.GeocoderResult[], normalizedPreferredCity: string) {
    if (!Array.isArray(results) || results.length === 0) {
      return null;
    }

    if (!normalizedPreferredCity) {
      return results[0];
    }

    const matchingResult = results.find(result => {
      const googleCity = this.normalizeCityName(this.extractCityFromGoogleResult(result));
      return googleCity && this.areCityNamesEquivalent(googleCity, normalizedPreferredCity);
    });

    return matchingResult || null;
  }

  private extractCityFromGoogleResult(result: google.maps.GeocoderResult): string {
    if (!result || !result.address_components) {
      return '';
    }

    const preferredTypes = ['locality', 'administrative_area_level_3', 'administrative_area_level_2'];

    for (const type of preferredTypes) {
      const component = result.address_components.find(addressComponent => addressComponent.types.includes(type));
      if (component?.long_name) {
        return component.long_name;
      }
    }

    return '';
  }

  private isWithinCityBounds(lat: number, lng: number, normalizedCity: string): boolean {
    const constraint = this.getCityConstraint(normalizedCity);
    if (!constraint) {
      return true;
    }

    const distance = this.haversineDistanceKm(lat, lng, constraint.lat, constraint.lng);
    return distance <= constraint.radiusKm;
  }

  private getCityConstraint(normalizedCity: string) {
    if (!normalizedCity) {
      return null;
    }

    const constraints = {
      corrientes: {lat: -27.469134, lng: -58.830222, radiusKm: 35}
    };

    return constraints[normalizedCity] || null;
  }

  private haversineDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
}
