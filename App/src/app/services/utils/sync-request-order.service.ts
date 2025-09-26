import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {BehaviorSubject, Observable} from 'rxjs';
import {StoredRequest} from '../../interfaces/StoredRequest';
import {HttpClient} from '@angular/common/http';
import {Order} from '../../interfaces/Order';
import {OrderOfflineManagerService} from '../v1/order-offline-manager.service';
import {environment} from '../../../environments/environment';

const STORAGE_REQ_KEY_ORDERS = 'distriapporders';
const STORAGE_REQ_KEY_REQS = 'distriappreqs';

@Injectable({
  providedIn: 'root'
})
export class SyncRequestOrderService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';
  private uploadedP$ = new BehaviorSubject<number>(0);
  private completedSync$ = new BehaviorSubject<boolean>(false);

  constructor(private storage: Storage,
              private orderOfflineManagerService: OrderOfflineManagerService,
              private httpClient: HttpClient) {
  }

  setUploadedP$(uploadedP) {
    this.uploadedP$.next(uploadedP);
  }

  getUploadedP$(): Observable<number> {
    return this.uploadedP$.asObservable();
  }

  setCompletedSync$(completedSync) {
    this.completedSync$.next(completedSync);
  }

  getCompletedSync$(): Observable<boolean> {
    return this.completedSync$.asObservable();
  }

  // is a fact that stored requests length > 0
  async syncStoredOrdersRequests(storedRequests: StoredRequest[]) {
    const processedRequestsIds = [];
    let uploadedP = 0;
    for (const storedRequest of storedRequests) {
      await this.sendRequest(storedRequest).then(res => {
        console.log('got res', res);
        processedRequestsIds.push(storedRequest.id);
        uploadedP = processedRequestsIds.length / storedRequests.length;
        this.setUploadedP$(uploadedP);
      }).catch(err => {
        console.log(`ERROR: ${err}`, storedRequest.id + ': ' + storedRequest.attempts);
        storedRequest.attempts = storedRequest.attempts + 1;
      });
    }

    setTimeout(() => {
      console.log('inside timeout...');
      console.log('aquí debo eliminar los requests y las órdenes del localstorage');
      console.log(storedRequests.length, processedRequestsIds.length);

      console.log(processedRequestsIds);
      console.log(storedRequests);
      const filteredRequests = storedRequests.filter(sq =>
        processedRequestsIds.indexOf(sq.id) <= -1);
      console.log(`filtered requests...`, filteredRequests);

      this.storage.set(STORAGE_REQ_KEY_REQS, filteredRequests)
        .then(() => {
          this.setCompletedSync$(true);
        });
    }, 3000);
  }

  sendRequest(storedRequest: StoredRequest): Promise<boolean> {
    console.log(`attempting to send stored request: ${JSON.stringify(storedRequest)}`);
    return new Promise((resolve, reject) => {
      this.orderOfflineManagerService.getLocalOrderId(storedRequest.pUid)
        .then((order: Order) => {
          console.log('order', order);
          if (storedRequest.type === 'request') {
            console.log('Sending request to server: ', storedRequest);
            // resolve(true);
            // Math.floor(Math.random() * 90 + 10) < 50 ? resolve(true) : reject(true);
            this.makeHttpClientRequest(storedRequest, order).then(res => {
              console.log(res);
              resolve(res);
            }).catch(err => {
              reject(err);
            });
          } else {
            //   console.log('IS A FILEEEEE!!!!!');
            //   // this.uploadFile(storedRequest, order).then(res => {
            //   //   console.log(res);
            //   //   resolve(res);
            //   // }).catch(err => {
            //   //   reject(err);
            //   // });
            //   resolve(true);
          }
        })
        .catch(err => {
          resolve(true);
        });
    });
  }

  makeHttpClientRequest(storedRequest: StoredRequest, order: Order): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = this.getUrl(storedRequest, order);
      console.log('sending request to url: ', url);
      this.httpClient.request(storedRequest.method, url, {body: storedRequest.body})
        .subscribe((res: any) => {
          if (res && res.order) {
            this.orderOfflineManagerService.updateLocalOrderId(res.order.id, storedRequest.pUid)
              .then(localOrder => {
                console.log(localOrder);
                resolve(res);
              }).catch(err => {
              reject(err);
            });
          } else {
            resolve(res);
          }
        }, error => {
          reject(error);
        });
    });
  }

  getUrl(storedRequest: StoredRequest, order: Order) {
    console.log(storedRequest.action);
    let url = '';
    switch (storedRequest.action) {
      case 'store':
        url = `${this.API_URL}${this.V1}orders`;
        break;
      case 'store-location':
        url = `${this.API_URL}${this.V1}locations`;
        break;
      case 'update':
        url = `${this.API_URL}${this.V1}orders/${order.id}`;
        break;
      case 'delete':
        url = `${this.API_URL}${this.V1}orders/${order.id}`;
        break;
      case 'delivered':
        url = `${this.API_URL}${this.V1}orders/${order.id}/delivered-offline`;
        break;
      case 'not-delivered':
        url = `${this.API_URL}${this.V1}orders/${order.id}/not-delivered`;
        break;
      case 'upload-file':
        url = `${this.API_URL}${this.V1}delivery-images`;
        break;
    }
    return url;
  }
}
