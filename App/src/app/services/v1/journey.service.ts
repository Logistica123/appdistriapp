import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Journey} from '../../interfaces/Journey';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  constructor(private http: HttpClient) {
  }

  getTodayJourney() {
    return this.http.get(`${this.API_URL}${this.V1}journeys`);
  }

  store(body) {
    return this.http.post(`${this.API_URL}${this.V1}journeys`, body);
  }

  updateTodayJourneyStatus(body) {
    return this.http.put(`${this.API_URL}${this.V1}journeys/finish`, body);
  }
}
