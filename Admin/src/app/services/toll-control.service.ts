import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TollControlService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getTollControls(month, year) {
    return this.http.get(`${this.API_URL}${this.V1}toll-controls/month/${month}/year/${year}`);
  }

  downloadReport(month, year, time) {
    return this.http.get(`${this.API_URL}${this.V1}toll-controls/download/${month}/${year}/${time}`, {responseType: 'blob'});
  }
}
