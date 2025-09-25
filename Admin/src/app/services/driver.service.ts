import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Driver } from '../models/Driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getDrivers() {
    return this.http.get(`${this.API_URL}${this.V1}drivers`);
  }

  getDriverScores() {
    return this.http.get(`${this.API_URL}${this.V1}drivers/ranking`);
  }

  getDriversLastLocation() {
    return this.http.get(`${this.API_URL}${this.V1}drivers/driver-location`);
  }

  getDriverLocationsByDate(driver: Driver, date) {
    return this.http.get(`${this.API_URL}${this.V1}driver-locations/drivers/${driver.id}/${date}`);
  }

  getDriversCount() {
    return this.http.get(`${this.API_URL}${this.V1}drivers/count`);
  }

  storeDriver(body) {
    return this.http.post(`${this.API_URL}${this.V1}drivers`, body);
  }

  updateDriver(driver: Driver, body) {
    return this.http.put(`${this.API_URL}${this.V1}drivers/${driver.id}`, body);
  }

  updateDriverStatus(driver: Driver, body) {
    return this.http.put(`${this.API_URL}${this.V1}drivers/${driver.id}/status`, body);
  }

  resetPassword(driver: Driver) {
    return this.http.put(`${this.API_URL}${this.V1}drivers/${driver.id}/password`, null);
  }

  deleteDriver(driver: Driver) {
    return this.http.delete(`${this.API_URL}${this.V1}drivers/${driver.id}`);
  }

  updateDriverFirebaseUID(driver: Driver, body) {
    return this.http.put(`${this.API_URL}${this.V1}drivers/${driver.id}/firebase-uid`, body);
  }

  assignCompanyToDriver(driver: Driver, body) {
    return this.http.put(`${this.API_URL}${this.V1}drivers/${driver.id}/company`, body);
  }

  updateDriverValues(driver: Driver, body) {
    return this.http.put(`${this.API_URL}${this.V1}drivers/${driver.id}/values`, body);
  }
}
