import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class InsuranceRequestService {
  private readonly API_URL = environment.API_URL;
  private readonly V1 = 'v1/admin/';

  constructor(private http: HttpClient) {}

  list(status?: string) {
    let params = new HttpParams();
    if (status) {
      params = params.set('status', status);
    }

    return this.http.get(`${this.API_URL}${this.V1}insurance-requests`, { params });
  }
}
