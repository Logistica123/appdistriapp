import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WithdrawalRequestService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  constructor(private http: HttpClient) {
  }

  getWithdrawalRequests() {
    return this.http.get(`${this.API_URL}${this.V1}withdrawal-requests`);
  }

  storeWithdrawalRequest(body) {
    return this.http.post(`${this.API_URL}${this.V1}withdrawal-requests`, body);
  }
}
