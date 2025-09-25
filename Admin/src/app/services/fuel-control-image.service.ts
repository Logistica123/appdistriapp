import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FuelControlImage } from '../models/FuelControlImage';

@Injectable({
  providedIn: 'root'
})
export class FuelControlImageService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getFuelControlImage(fuelControlImage: FuelControlImage) {
    return this.http.get(`${this.API_URL}${this.V1}fuel-control-images/${fuelControlImage.id}/image`);
  }

}
