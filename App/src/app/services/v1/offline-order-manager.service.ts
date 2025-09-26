import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Storage} from '@ionic/storage';
import {OrderOfflineManagerService} from './order-offline-manager.service';
import {ToastController} from '@ionic/angular';
import {HTTP} from '@ionic-native/http/ngx';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Order} from '../../interfaces/Order';

const STORAGE_REQ_KEY = 'distriappreqs';

interface StoredRequest {
  method: string;
  body: any;
  time: number;
  id: string;
  attempts: number;
  type: 'request' | 'file';
  action: string;
  file?: string;
  authToken?: string;
  pUid?: string;
  pId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class OfflineOrderManagerService {
  private uploadedReqsP$ = new BehaviorSubject<number>(0);
  private sendingReqs$ = new BehaviorSubject<boolean>(false);

  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  constructor(private storage: Storage,
              private orderOfflineManagerService: OrderOfflineManagerService,
              private toastController: ToastController,
              private http: HTTP,
              private httpClient: HttpClient) {
  }

  storeRequest(type, method, body, pUid: string, action, pId = null, file = null, authToken = null): Promise<any> {
    return new Promise((resolve, reject) => {
      // const toast = this.toastController.create({
      //   message: `Your data is stored locally because you seem to be offline.`,
      //   duration: 3000,
      //   position: 'bottom'
      // });
      // toast.then(t => t.present());

      const storedRequest: StoredRequest = {
        method,
        body,
        time: new Date().getTime(),
        id: Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '').substr(0, 5)
          + (Math.floor(Math.random() * 90 + 10)),
        attempts: 0,
        type: 'request',
        action,
        file,
        authToken,
        pUid,
        pId
      };
      console.log('storing request in localstorage', storedRequest);

      this.storage.get(STORAGE_REQ_KEY)
        .then(storedOperations => {
          if (storedOperations?.length > 0) {
            storedOperations.push(storedRequest);
          } else {
            storedOperations = [];
            storedOperations.push(storedRequest);
          }
          this.storage.set(STORAGE_REQ_KEY, storedOperations)
            .then(() => {
              resolve(storedRequest);
            }).catch(err => {
            reject();
          });
        }).catch(err => {
        reject();
      });
    });
  }

  checkStoredRequests(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log('checking stored requests...');
      this.storage.get(STORAGE_REQ_KEY).then(storedRequests => {
        if (storedRequests?.length > 0) {
          console.log('********************************');
          console.log('Estas son todas las stored requests que tengo...');
          console.log('********************************');
          console.log(storedRequests);
          console.log('------------------------------------fin de log');
          this.sendStoredRequests(storedRequests);
          console.log('YA FINALICE EL ENVIO DE REQUESTS GUARDADOS...!!');
        } else {
          console.log('empty storage...');
        }
      });
    });
  }

  async sendStoredRequests(storedRequest: StoredRequest[]) {
    this.setSendingReqs$(true);

    const processedRequestsIds: string[] = [];

    let uploadedP = Math.round(processedRequestsIds.length / storedRequest.length);
    this.setUploadedP$(uploadedP);

    for (const op of storedRequest) {
      await this.sendRequest(op).then(res => {
        processedRequestsIds.push(op.id);
        uploadedP = processedRequestsIds.length / storedRequest.length;
        this.setUploadedP$(uploadedP);
      }).catch(err => {
        console.log('ERROR', op.id + ': ' + op.attempts);
        op.attempts = op.attempts + 1;
      });
    }

    setTimeout(() => {
      console.log('now!!');
      console.log(processedRequestsIds);
      storedRequest = storedRequest.filter(sr =>
        processedRequestsIds.indexOf(sr.id) <= -1 && sr.attempts <= 2);

      return this.storage.set(STORAGE_REQ_KEY, storedRequest);
    }, 500);

    this.setSendingReqs$(false);
  }

  sendRequest(storedRequest: StoredRequest): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.orderOfflineManagerService.getLocalOrderId(storedRequest.pUid)
        .then((order: Order) => {
          console.log('order', order);
          if (storedRequest.type === 'request') {
            setTimeout(() => {
              console.log('Sending request to server: ', storedRequest);
              // resolve(true);
              // Math.floor(Math.random() * 90 + 10) < 50 ? resolve(true) : reject(true);
              this.makeHttpClientRequest(storedRequest, order).then(res => {
                console.log(res);
                resolve(res);
              }).catch(err => {
                reject(err);
              });
            }, 500);
          } else {
            console.log('IS A FILEEEEE!!!!!');
            this.uploadFile(storedRequest, order).then(res => {
              console.log(res);
              resolve(res);
            }).catch(err => {
              reject(err);
            });
          }
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

  uploadFile(storedRequest: StoredRequest, order: Order): Promise<any> {
    return new Promise((resolve, reject) => {
      alert('about to upload file...');
      const uri = encodeURI(this.getUrl(storedRequest, order));
      alert('uri');
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + storedRequest.authToken
      };
      this.http.uploadFile(uri, storedRequest.body, headers, encodeURI(storedRequest.file), 'file')
        .then((data) => {
          alert(JSON.stringify(data));
          resolve(true);
        }).catch(err => {
        reject(err);
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

  // observables
  setSendingReqs$(sendingReq: boolean) {
    this.sendingReqs$.next(sendingReq);
  }

  getSendingReqs$(): Observable<boolean> {
    return this.sendingReqs$.asObservable();
  }

  getUploadedP$(): Observable<number> {
    return this.uploadedReqsP$.asObservable();
  }

  setUploadedP$(uploadedP: number) {
    this.uploadedReqsP$.next(uploadedP);
  }
}
