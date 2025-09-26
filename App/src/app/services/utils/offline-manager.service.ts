import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ToastController} from '@ionic/angular';
import {OrderOfflineManagerService} from '../v1/order-offline-manager.service';
import {environment} from '../../../environments/environment';
import {HTTP} from '@ionic-native/http/ngx';

const STORAGE_REQ_KEY = 'distriappreqs';

interface StoredRequest {
  url: string;
  method: string;
  body: any;
  time: number;
  id: string;
  attempts: number;
  type: 'request' | 'file';
  file?: string;
  authToken?: string;
  pUid?: string;
  pId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class OfflineManagerServiceBKP {
  private uploadedReqsP$ = new BehaviorSubject<number>(0);
  private sendingReqs$ = new BehaviorSubject<boolean>(false);

  constructor(private storage: Storage,
              private orderOfflineManager: OrderOfflineManagerService,
              private toastController: ToastController,
              private http: HTTP,
              private httpClient: HttpClient) {
  }

  storeRequest(type, url, method, body, pUid: string, pId = null, file = null, authToken = null): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log('storing request in localstorage...');
      // const toast = this.toastController.create({
      //   message: `Your data is stored locally because you seem to be offline.`,
      //   duration: 3000,
      //   position: 'bottom'
      // });
      // toast.then(t => t.present());

      const storedRequest: StoredRequest = {
        url,
        method,
        body,
        time: new Date().getTime(),
        id: Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '').substr(0, 5)
          + (Math.floor(Math.random() * 90 + 10)),
        attempts: 0,
        type: 'request',
        file,
        authToken,
        pUid,
        pId
      };

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
            reject(true);
          });
        }).catch(err => {
        reject(true);
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
      if (storedRequest.type === 'request') {
        setTimeout(() => {
          console.log('IS A REQUESTTTTTT!!!!!');
          console.log(storedRequest);
          console.log(storedRequest.body);
          // resolve(true);
          // Math.floor(Math.random() * 90 + 10) < 50 ? resolve(true) : reject(true);
          this.httpClient.request(storedRequest.method, storedRequest.url, {body: storedRequest.body})
            .subscribe((res: any) => {
              if (res && res.order) {
                this.orderOfflineManager.updateLocalOrderId(res.order.id, storedRequest.id)
                  .then(localOrder => {
                    console.log(localOrder);
                    resolve(true);
                  }).catch(err => {
                  reject();
                });
              } else {
                resolve(true);
              }
            }, error => {
              reject();
            });
        }, 100);
      } else {
        setTimeout(() => {
          console.log('IS A FILEEEEE!!!!!');
          resolve(true);
          Math.floor(Math.random() * 90 + 10) < 50 ? resolve(true) : reject(true);
        }, 5000);

        // const uri = encodeURI(`${environment.API_URL}v1/${storedRequest.url}`);
        // const headers = {
        //   'Content-Type': 'multipart/form-data',
        //   Authorization: 'Bearer ' + storedRequest.authToken
        // };
        // this.http.uploadFile(uri, storedRequest.body, headers, encodeURI(storedRequest.file), 'file')
        //   .then((data) => {
        //     resolve(true);
        //   }).catch(err => {
        //   reject(err);
        // });
      }
    });
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
