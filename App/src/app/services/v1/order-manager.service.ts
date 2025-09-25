import {Injectable} from '@angular/core';
import {Order} from '../../interfaces/Order';
import {BehaviorSubject, from, Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {OrderOfflineManagerService} from './order-offline-manager.service';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {OfflineOrderManagerService} from './offline-order-manager.service';
import {ModeService} from '../utils/mode.service';
import {ModeStatus} from '../../interfaces/ModeStatus';
import {HttpUploadFileService} from '../utils/http-upload-file.service';

@Injectable({
  providedIn: 'root'
})
export class OrderManagerService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  private orders$ = new BehaviorSubject<Order[]>([]);

  constructor(
    private orderOfflineManagerService: OrderOfflineManagerService,
    // private networkService: NetworkService,
    private httpUploadFileService: HttpUploadFileService,
    private modeService: ModeService,
    private httpClient: HttpClient,
    private offlineOrderManagerService: OfflineOrderManagerService) {
  }

  setNotDeliveredOrder(order: Order, body): Observable<any> {
    if (this.modeService.getCurrentModeStatus() === ModeStatus.Offline) {
      return new Observable((observer: any) => {
        this.orderOfflineManagerService.getLocalOrderId(order.uid)
          .then((localOrder: Order) => {
            console.log(localOrder);
            Promise.all([
              this.orderOfflineManagerService.setNotDeliveredOrder(order, body),
              this.offlineOrderManagerService.storeRequest('request', 'PUT', body, localOrder.uid, 'not-delivered')
            ]).then(values => {
              observer.next({success: true});
            }).catch(err => {
              observer.error(err);
            });
          }).catch(err => {
          observer.error(err);
        });
      });
    } else {
      const url = `${this.API_URL}${this.V1}orders/${order.id}/not-delivered`;
      return this.httpClient.put(url, body).pipe(
        catchError(err => {
          throw new Error(err);
        })
      );
    }
  }

  setDeliveredOrder(order: Order, body): Observable<any> {
    console.log(this.modeService.getCurrentModeStatus());
    if (this.modeService.getCurrentModeStatus() === ModeStatus.Offline) {
      return new Observable((observer: any) => {
        this.orderOfflineManagerService.getLocalOrderId(order.uid)
          .then((localOrder: Order) => {
            console.log(localOrder);
            Promise.all([
              this.orderOfflineManagerService.setDeliveredOrder(order),
              this.offlineOrderManagerService.storeRequest('request', 'PUT', body, localOrder.uid, 'delivered')
            ]).then(values => {
              observer.next({success: true});
            }).catch(err => {
              observer.error(err);
            });
          }).catch(err => {
          observer.error(err);
        });
      });
    } else {
      const url = `${this.API_URL}${this.V1}orders/${order.id}/delivered`;
      return this.httpClient.put(url, body).pipe(
        catchError(err => {
          throw new Error(err);
        })
      );
    }
  }

  deleteOrder(order: Order): Observable<any> {
    if (this.modeService.getCurrentModeStatus() === ModeStatus.Offline) {
      return new Observable((observer: any) => {
        this.orderOfflineManagerService.deleteOrder(order).then(() => {
          observer.next({success: true});
        }).catch(err => {
          observer.error(err);
        });
      });
    } else {
      const url = `${this.API_URL}${this.V1}orders/${order.id}`;
      return this.httpClient.delete(url).pipe(
        catchError(err => {
          // this.offlineManager.storeRequest(url, 'PUT', data);
          throw new Error(err);
        })
      );
    }
  }

  updateOrder(order: Order, body): Observable<any> {
    if (this.modeService.getCurrentModeStatus() === ModeStatus.Offline) {
      return new Observable((observer: any) => {
        this.orderOfflineManagerService.getLocalOrderId(order.uid)
          .then((localOrder: Order) => {
            console.log(localOrder);
            Promise.all([
              this.orderOfflineManagerService.updateOrder(order, body),
              this.offlineOrderManagerService.storeRequest('request', 'PUT', body, localOrder.uid, 'update')
            ]).then(values => {
              observer.next({success: true});
            }).catch(err => {
              observer.error(err);
            });
          }).catch(err => {
          observer.error(err);
        });
      });
    } else {
      const url = `${this.API_URL}${this.V1}orders/${order.id}`;
      return this.httpClient.put(url, body).pipe(
        catchError(err => {
          // this.offlineManager.storeRequest(url, 'PUT', data);
          throw new Error(err);
        })
      );
    }
  }

  storeLocation(body): Observable<any> {
    console.log('attempting to store location');
    const url = `${this.API_URL}${this.V1}locations`;
    if (this.modeService.getCurrentModeStatus() === ModeStatus.Offline) {
      return new Observable((observer: any) => {
        this.orderOfflineManagerService.storeLocation(body)
          .then(order => {
            console.log(order);
            this.offlineOrderManagerService.storeRequest('request', 'POST', body, order.uid, 'store-location')
              .then(request => {
                console.log(request);
                observer.next();
              }).catch(err => {
              observer.error(err);
            });
          }).catch(err => {
          observer.error(err);
        });
      });
    } else {
      return this.httpClient.post(url, body).pipe(
        catchError(err => {
          throw new Error(err);
        })
      );
    }
  }

  store(body): Observable<any> {
    if (this.modeService.getCurrentModeStatus() === ModeStatus.Offline) {
      return new Observable((observer: any) => {
        this.orderOfflineManagerService.storeOrder(body)
          .then(order => {
            console.log(order);
            this.offlineOrderManagerService.storeRequest('request', 'POST', body, order.uid, 'store')
              .then(request => {
                console.log(request);
                observer.next();
              }).catch(err => {
              observer.error(err);
            });
          }).catch(err => {
          observer.error(err);
        });
      });
    } else {
      const url = `${this.API_URL}${this.V1}orders`;
      return this.httpClient.post(url, body).pipe(
        catchError(err => {
          throw new Error(err);
        })
      );
    }
  }

  uploadFile(order: Order, body, file, authToken): Observable<any> {
    if (this.modeService.getCurrentModeStatus() === ModeStatus.Offline) {
      return new Observable((observer: any) => {
        this.orderOfflineManagerService.getLocalOrderId(order.uid)
          .then((localOrder: Order) => {
            console.log(localOrder);
            Promise.all([
              this.orderOfflineManagerService.updateOrder(order, body),
              this.offlineOrderManagerService.storeRequest('file', 'POST', body, localOrder.uid, 'upload-file', null, file, authToken)
            ]).then(values => {
              observer.next({success: true});
            }).catch(err => {
              observer.error(err);
            });
          }).catch(err => {
          observer.error(err);
        });
      });
    } else {
      return of(this.httpUploadFileService.uploadFile('delivery-images', file, authToken, body))
        .pipe(
          catchError(err => {
            throw new Error(err);
          })
        );
    }
  }

  getOrdersByDate(type, day, month, year) {
    console.log(`*****GETTING ORDERS BY DATE ${type} ${day} ${month} ${year}`);
    console.log(this.modeService.getCurrentModeStatus());
    if (this.modeService.getCurrentModeStatus() === ModeStatus.Offline) {
      return from(this.orderOfflineManagerService.getOrders());
    } else {
      const url = `${this.API_URL}${this.V1}orders/type/${type}/day/${day}/month/${month}/year/${year}`;
      return this.httpClient.get(url).pipe(
        map((response: any) => response.orders),
        tap({
          next: val => {
            console.log('on next');
            console.log(val);
            this.orderOfflineManagerService.deleteOrdersInStorage()
              .finally(() => {
                return val;
              });
          }
        }),
        catchError(err => {
          console.log(err);
          throw new Error(err);
        })
      );
    }
  }

  storeOrdersInLocalStorage(orders: Order[]): Promise<Order[]> {
    return new Promise((resolve, reject) => {
      this.orderOfflineManagerService.storeOrdersInStorage(orders)
        .then(storedOrders => {
          resolve(storedOrders);
        }).catch(err => {
        reject(err);
      });
    });
  }

  // observables
  setOrders$(orders: Order[]) {
    console.log('setting orders observable', orders);
    this.orders$.next(orders);
  }

  getOrders$(): Observable<Order[]> {
    return this.orders$.asObservable();
  }
}
