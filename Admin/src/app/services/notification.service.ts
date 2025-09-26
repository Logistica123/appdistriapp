import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../models/Driver';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getNotifications() {
    return this.http.get(`${this.API_URL}${this.V1}notifications`);
  }

  sendNotification(body) {
    return this.http.post(`${this.API_URL}${this.V1}notifications`, body);
  }

  getNotificationsCount() {
    return this.http.get(`${this.API_URL}${this.V1}notifications/count`);
  }
}
