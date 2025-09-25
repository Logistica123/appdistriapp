import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Action } from '../models/Action';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getActions() {
    return this.http.get(`${this.API_URL}${this.V1}actions`);
  }

  updateActionCredits(action: Action) {
    return this.http.get(`${this.API_URL}${this.V1}drivers/ranking`);
  }
}
