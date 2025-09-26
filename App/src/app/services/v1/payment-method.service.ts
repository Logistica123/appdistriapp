import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {PaymentMethod} from '../../interfaces/PaymentMethod';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';
  private paymentMethods$ = new BehaviorSubject<PaymentMethod[]>([]);

  constructor(private http: HttpClient) {
  }

  /***********************************************************
   * Observables
   ***********************************************************/
  getPaymentMethods$(): Observable<PaymentMethod[]> {
    if (this.paymentMethods$.getValue().length <= 0) {
      console.log('IS ZERO');
      return this.http.get(`${this.API_URL}${this.V1}payment-methods`)
        .pipe(map((response: any) => response.payment_methods),
          tap({
            next: val => {
              console.log('on next');
              this.setPaymentMethods$(val);
            }
          })
        );
    }
    console.log('FROM CACHE!');
    return this.paymentMethods$.asObservable();
  }

  setPaymentMethods$(paymentMethods: PaymentMethod[]) {
    console.log('setting new data...');
    this.paymentMethods$.next(paymentMethods);
  }
}
