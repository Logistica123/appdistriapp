import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  constructor(private http: HttpClient,
              private storage: Storage) {
  }

  signIn(body) {
    return this.http.post(`${this.API_URL}${this.V1}auth/sign-in`, body);
  }

  getAuthToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.storage.get('auth_token')
        .then(authToken => {
          resolve(authToken);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
