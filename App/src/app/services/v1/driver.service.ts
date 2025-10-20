import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Driver} from '../../interfaces/Driver';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';
  private driver$ = new BehaviorSubject<Driver>(null);

  constructor(private http: HttpClient) {
  }

  getProfile() {
    return this.http.get(`${this.API_URL}${this.V1}drivers/profile`).pipe(
      tap((response: any) => {
        if (response?.driver) {
          this.setDriver$(response.driver);
        }
      })
    );
  }

  getProfileImage() {
    return this.http.get(`${this.API_URL}${this.V1}drivers/profile/image`, {responseType: 'blob'});
  }

  getDriverProfileImage(driver: Driver) {
    return this.http.get(`${this.API_URL}${this.V1}drivers/${driver.id}/profile-image`, {responseType: 'blob'});
  }

  updateProfile(body) {
    return this.http.put(`${this.API_URL}${this.V1}drivers/profile`, body);
  }

  updatePhoneNumber(body) {
    return this.http.put(`${this.API_URL}${this.V1}drivers/phone-number`, body);
  }

  updatePassword(body) {
    return this.http.put(`${this.API_URL}${this.V1}drivers/password`, body);
  }

  updateContractor(body) {
    return this.http.put(`${this.API_URL}${this.V1}drivers/contractor`, body);
  }

  updatePaymentMethods(body) {
    return this.http.put(`${this.API_URL}${this.V1}drivers/payment-methods`, body);
  }

  getPaymentMethods() {
    return this.http.get(`${this.API_URL}${this.V1}drivers/payment-methods`);
  }

  getRanking() {
    return this.http.get(`${this.API_URL}${this.V1}drivers/ranking`);
  }

  /***********************************************************
   * Observables
   ***********************************************************/
  getDriver$(): Observable<Driver> {
      return this.driver$.asObservable();
    // console.log('getting driver observable');
    // console.log(this.driver$.getValue());
    // if (this.driver$.getValue() === null) {
    //   console.log('IS ZERO');
    //   return this.http.get(`${this.API_URL}${this.V1}drivers/profile`)
    //     .pipe(map((response: any) => response.driver),
    //       tap({
    //         next: val => {
    //           this.setDriver$(val);
    //         }
    //       })
    //     );
    // }
    // console.log('FROM CACHE!');
    // return this.driver$.asObservable();
  }

  setDriver$(driver: Driver) {
    console.log('setting new driver...');
    this.driver$.next(driver);
  }
}
