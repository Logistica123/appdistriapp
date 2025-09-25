import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Order} from '../../interfaces/Order';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  // type: this.type,
  // orders: this.orders,
  // currentOrder: this.currentOrder

  orders = new BehaviorSubject<Order[]>([]);
  currentOrder = new BehaviorSubject<Order>(null);

  constructor() {
  }
}
