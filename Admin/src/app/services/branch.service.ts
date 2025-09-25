import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Branch } from '../models/Branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getBranches() {
    return this.http.get(`${this.API_URL}${this.V1}branches`);
  }

  store(body) {
    return this.http.post(`${this.API_URL}${this.V1}branches`, body);
  }

  update(branch: Branch, body) {
    return this.http.put(`${this.API_URL}${this.V1}branches/${branch.id}`, body);
  }

  delete(branch: Branch) {
    return this.http.delete(`${this.API_URL}${this.V1}branches/${branch.id}`);
  }
}
