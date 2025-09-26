import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  constructor(public http: HttpClient) { }

  getNotifications() {
    return this.http.get(`${this.API_URL}${this.V1}notifications`);
  }
}
