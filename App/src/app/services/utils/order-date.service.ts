import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDateService {
  private orderDate$ = new BehaviorSubject<string>('today');

  constructor() {
  }

  getOrderDate$(): Observable<string> {
    return this.orderDate$.asObservable();
  }

  setOrderDate$(date: string) {
    console.log('setting order date', date);
    this.orderDate$.next(date);
  }
}
