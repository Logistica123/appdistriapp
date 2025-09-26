import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  signIn(credentials) {
    return this.http.post(`${this.API_URL}${this.V1}auth/sign-in`, credentials);
  }
}
