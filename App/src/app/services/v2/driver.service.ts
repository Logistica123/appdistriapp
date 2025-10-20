import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Driver} from '../../interfaces/Driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  API_URL = environment.API_URL;
  V2 = 'v2/app/';

  constructor(private http: HttpClient) {
  }

  register(body) {
    return this.http.post(`${this.API_URL}${this.V2}drivers/register`, body);
  }

  lookupByCuil(cuil: string) {
    return this.http.get(`${this.API_URL}${this.V2}drivers/lookup/${cuil}`);
  }

  getRanking() {
    return this.http.get(`${this.API_URL}${this.V2}drivers/ranking`);
  }

  getDriverProfileImage(driver: Driver) {
    return this.http.get(`${this.API_URL}${this.V2}drivers/${driver.id}/profile-image`, {responseType: 'blob'});
  }
}
