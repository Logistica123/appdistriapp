import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuelControlService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getFuelControls(month, year) {
    return this.http.get(`${this.API_URL}${this.V1}fuel-controls/month/${month}/year/${year}`);
  }

  downloadReport(month, year, time) {
    return this.http.get(`${this.API_URL}${this.V1}fuel-controls/download/${month}/${year}/${time}`, {responseType: 'blob'});
  }
}
