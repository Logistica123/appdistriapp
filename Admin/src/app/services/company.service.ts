import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getCompanies() {
    return this.http.get(`${this.API_URL}${this.V1}companies`);
  }

  storeCompany(body) {
    return this.http.post(`${this.API_URL}${this.V1}companies`, body);
  }

  updateCompany(company: Company, body) {
    return this.http.put(`${this.API_URL}${this.V1}companies/${company.id}`, body);
  }

  deleteCompany(company: Company) {
    return this.http.delete(`${this.API_URL}${this.V1}companies/${company.id}`);
  }
}
