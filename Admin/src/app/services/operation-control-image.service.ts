import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { OperationControlImage } from '../models/OperationControlImage';

@Injectable({
  providedIn: 'root'
})
export class OperationControlImageService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getOperationControlImage(operationControlImage: OperationControlImage) {
    return this.http.get(`${this.API_URL}${this.V1}operation-control-images/${operationControlImage.id}/image`);
  }

}
