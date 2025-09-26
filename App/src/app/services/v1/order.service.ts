import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Order} from '../../interfaces/Order';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  private currentOrder$ = new BehaviorSubject<Order>(null);
  private currentOrders$ = new BehaviorSubject<Order[]>(null);

  ordersUpdated$ = new BehaviorSubject<boolean>(false);

  // private currentOrdersToDeliverSource = new BehaviorSubject<Order[]>(null);
  // currentOrdersToDeliver = this.currentOrdersToDeliverSource.asObservable();

  // private ordersUpdated = new BehaviorSubject<boolean>(false);
  // currentOrders = this.ordersUpdated.asObservable();

  // private order = new BehaviorSubject<Order>(null);
  // currentOrder = this.order.asObservable();

  constructor(private http: HttpClient) {
  }

  // getOrders(type) {
  //   return this.http.get(`${this.API_URL}${this.V1}orders/${type}`);
  // }

  updateOrder(order: Order, body) {
    return this.http.put(`${this.API_URL}${this.V1}orders/${order.id}`, body);
  }

  //
  // getTodayOrders(type) {
  //   return this.http.get(`${this.API_URL}${this.V1}orders/today/${type}`);
  // }


  //
  // getTodayOptimizedOrders(type) {
  //   return this.http.get(`${this.API_URL}${this.V1}orders/today/optimized/${type}`);
  // }
  //
  // getOrdersByDeliveryOrder(type) {
  //   return this.http.get(`${this.API_URL}${this.V1}orders/delivery-order/type/${type}`);
  // }
  //
  // getCurrentOrder() {
  //   return this.http.get(`${this.API_URL}${this.V1}orders/current-order`);
  // }


  // updateCurrentOrdersToDeliver(orders: Order[]) {
  //   this.currentOrdersToDeliverSource.next(orders);
  // }

  // updateCurrentOrder(order: Order) {
  //   this.order.next(order);
  // }

  // setUpdatedOrders(updated: boolean) {
  //   this.ordersUpdated.next(updated);
  // }

  /////
  store(body) {
    return this.http.post(`${this.API_URL}${this.V1}orders`, body);
  }

  getOrdersByDate(type, day, month, year) {
    return this.http.get(`${this.API_URL}${this.V1}orders/type/${type}/day/${day}/month/${month}/year/${year}`);
  }

  setOrderStatus(order: Order, body) {
    return this.http.put(`${this.API_URL}${this.V1}orders/${order.id}/status`, body);
  }

  setNotDeliveredOrder(order: Order, body) {
    return this.http.put(`${this.API_URL}${this.V1}orders/${order.id}/not-delivered`, body);
  }

  setDeliveredOrder(order: Order, body) {
    return this.http.put(`${this.API_URL}${this.V1}orders/${order.id}/delivered`, body);
  }

  optimizeOrders(body) {
    return this.http.post(`${this.API_URL}${this.V1}orders/optimize`, body);
  }

  deleteOrder(order: Order) {
    return this.http.delete(`${this.API_URL}${this.V1}orders/${order.id}`);
  }

  setDeliveryOrderToOrders(body) {
    return this.http.put(`${this.API_URL}${this.V1}orders/delivery-order`, body);
  }

  // Observables
  getCurrentOrder$(): Observable<Order> {
    return this.currentOrder$.asObservable();
  }

  setCurrentOrder$(order: Order) {
    this.currentOrder$.next(order);
  }

  getCurrentOrders$(): Observable<Order[]> {
    return this.currentOrders$.asObservable();
  }

  setCurrentOrders$(orders: Order[]) {
    this.currentOrders$.next(orders);
  }

  setOrdersUpdated$(ordersUpdated: boolean) {
    this.ordersUpdated$.next(ordersUpdated);
  }

  getOrdersUpdated$(): Observable<boolean> {
    return this.ordersUpdated$.asObservable();
  }
}
