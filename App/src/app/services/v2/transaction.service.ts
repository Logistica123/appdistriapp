import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  API_URL = environment.API_URL;
  V1 = 'v2/app/';

  constructor(private http: HttpClient) {
  }

  getTransactions() {
    return this.http.get(`${this.API_URL}${this.V1}transactions`);
  }

  storeWithdrawalRequest(body) {
    return this.http.post(`${this.API_URL}${this.V1}transactions/withdrawal-request`, body);
  }
}
