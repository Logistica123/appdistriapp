import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getTransactions(month, year) {
    return this.http.get(`${this.API_URL}${this.V1}transactions/month/${month}/year/${year}`);
  }

  storeTransaction(body) {
    return this.http.post(`${this.API_URL}${this.V1}transactions`, body);
  }

  downloadReport(month, year, time) {
    return this.http.get(`${this.API_URL}${this.V1}transactions/download/${month}/${year}/${time}`, {responseType: 'blob'});
  }
}
