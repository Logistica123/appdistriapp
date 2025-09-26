import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TollControlImage } from '../models/TollControlImage';

@Injectable({
  providedIn: 'root'
})
export class TollControlImageService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getTollControlImage(tollControlImage: TollControlImage) {
    return this.http.get(`${this.API_URL}${this.V1}toll-control-images/${tollControlImage.id}/image`);
  }
}
