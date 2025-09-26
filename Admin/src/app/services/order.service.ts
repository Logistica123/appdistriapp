import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getOrders(type) {
    return this.http.get(`${this.API_URL}${this.V1}orders/type/${type}`);
  }

  getOrdersByDate(type, month, year) {
    return this.http.get(`${this.API_URL}${this.V1}orders/type/${type}/month/${month}/year/${year}`);
  }

  getOrdersByDateRange(type, startDate, endDate) {
    return this.http.get(`${this.API_URL}${this.V1}orders/type/${type}/from/${startDate}/to/${endDate}`);
  }
}
