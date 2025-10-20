import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Benefit } from '../models/Benefit';

@Injectable({
  providedIn: 'root'
})
export class BenefitService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) { }

  list(params: Record<string, any> = {}) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
        httpParams = httpParams.append(key, params[key]);
      }
    });

    return this.http.get(`${this.API_URL}${this.V1}benefits`, { params: httpParams });
  }

  show(id: number) {
    return this.http.get(`${this.API_URL}${this.V1}benefits/${id}`);
  }

  create(data: FormData) {
    return this.http.post(`${this.API_URL}${this.V1}benefits`, data);
  }

  update(benefit: Benefit, data: FormData) {
    data.append('_method', 'PUT');
    return this.http.post(`${this.API_URL}${this.V1}benefits/${benefit.id}`, data);
  }

  delete(benefit: Benefit) {
    return this.http.delete(`${this.API_URL}${this.V1}benefits/${benefit.id}`);
  }
}
