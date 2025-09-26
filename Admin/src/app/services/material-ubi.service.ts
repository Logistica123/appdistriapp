import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MaterialUbi } from '../models/MaterialUbi';

@Injectable({
  providedIn: 'root'
})
export class MaterialUbiService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getMaterialUbis() {
    return this.http.get(`${this.API_URL}${this.V1}material-ubis`);
  }

  updateMaterialUbiValue(materialUbi: MaterialUbi, body) {
    return this.http.put(`${this.API_URL}${this.V1}material-ubis/${materialUbi.id}`, body);
  }
}
