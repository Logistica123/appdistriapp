import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateLocationRequestService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  constructor(private http: HttpClient) {
  }

  store(body) {
    return this.http.post(`${this.API_URL}${this.V1}update-location-requests`, body);
  }
}
