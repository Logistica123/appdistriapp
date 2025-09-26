import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DeliveryImage } from '../models/DeliveryImage';

@Injectable({
  providedIn: 'root'
})
export class DeliveryImageService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getDeliveryImage(deliveryImage: DeliveryImage) {
    return this.http.get(`${this.API_URL}${this.V1}delivery-images/${deliveryImage.id}/image`);
  }
}
