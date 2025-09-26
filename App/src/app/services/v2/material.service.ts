import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  API_URL = environment.API_URL;
  V2 = 'v2/app/';

  constructor(private http: HttpClient) {
  }

  getMaterials() {
    return this.http.get(`${this.API_URL}${this.V2}materials`);
  }
}
