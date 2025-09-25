import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Location } from '../models/Location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getLocations() {
    return this.http.get(`${this.API_URL}${this.V1}locations`);
  }

  updateLocationCoords(location: Location, body) {
    return this.http.put(`${this.API_URL}${this.V1}locations/${location.id}/coords`, body);
  }

  updateLocation(location: Location, body) {
    return this.http.put(`${this.API_URL}${this.V1}locations/${location.id}`, body);
  }

  getLocationsCount() {
    return this.http.get(`${this.API_URL}${this.V1}locations/count`);
  }
}
