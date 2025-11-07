import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {ToastComponent} from '../../components/toast/toast.component';
import {LoadingController, NavController} from '@ionic/angular';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {EMPTY, from, Observable, throwError} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  isLoading = false;

  constructor(private storage: Storage,
              private toastComponent: ToastComponent,
              public loadingCtrl: LoadingController,
              private navController: NavController) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.storage.get('auth_token'))
      .pipe(
        switchMap(token => {
          if (token) {
            const isFormData = request.body instanceof FormData;
            const headers: Record<string, string> = {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            };

            if (!isFormData) {
              headers['Content-Type'] = 'application/json';
            }

            request = request.clone({ setHeaders: headers });
          }
          if (!environment.production) {
            console.log(request.url);
            console.log(request.method);
          }
          // if (!(request.url.includes('./assets')
          //   || request.url.includes('driver-geopositions') && request.method === 'POST')
          //   || (request.url.includes('drivers/profile/image') && request.method === 'GET')
          //   || (request.url.includes('drivers/profile') && request.method === 'GET')
          //   || (request.url.includes('drivers/ranking') && request.method === 'GET')
          //   || (request.url.includes('devices') && request.method === 'POST')
          //   || (request.url.includes('devices/fcm-token') && request.method === 'POST')
          //   || (request.url.includes('fuel-controls') && request.method === 'GET')
          //   || (request.url.includes('locations') && request.method === 'GET')
          //   || (request.url.includes('locations') && request.method === 'POST')
          //   || (request.url.includes('orders') && request.method === 'POST')
          //   || (request.url.includes('orders/type/') && request.method === 'GET')
          //   || (request.url.includes('orders/optimize') && request.method === 'POST')
          //   || (request.url.includes('operation-controls') && request.method === 'GET')
          //   || (request.url.includes('payment-methods') && request.method === 'GET')
          //   || (request.url.includes('profile-image') && request.method === 'GET')
          //   || (request.url.includes('reminders') && request.method === 'GET')
          //   || (request.url.includes('routes') && request.url.includes('locations') && request.method === 'POST')
          //   || (request.url.includes('toll-controls') && request.method === 'GET')
          // ) {
          const isApiRequest = request.url.startsWith(environment.API_URL);

          if (
            (request.url.includes('auth/sign-in') && request.method === 'POST')
          ) {
            console.log('presenting loading...');
            console.log(request.url);
            console.log(request.method);
            this.presentLoading();
          }
          return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                this.dismissLoading().then(() => {
                  //
                }).catch(err => {
                  console.log(err);
                });
                if (!environment.production) {
                  console.log(event.body);
                }
                if (event.body.custom_message) {
                  this.toastComponent.presentToast(event.body.custom_message, 'bottom');
                }
              }
              return event;
            }),
            catchError((error: HttpErrorResponse) => {
              this.dismissLoading().then(() => {
                //
              }).catch(err => {
                if (!environment.production) {
                  console.error(err);
                }
              });
              console.log('ERROR');
              if (!environment.production) {
                console.error(error);
              }
              if (error.status === 401 && isApiRequest) {
                this.navController.navigateRoot('login').then(() => {
                  if (error.error.custom_message) {
                    this.toastComponent.presentToast(error.error.custom_message, 'bottom');
                  } else {
                    this.toastComponent.presentToast('Por favor inicie sesión', 'bottom');
                  }
                });
              } else {
                if (error.url.indexOf('driver-locations') > 0) {
                  // driver location could not be stored
                } else {
                  if (error.error.custom_message) {
                    this.toastComponent.presentToast(error.error.custom_message, 'bottom');
                  } else {
                    if (!request.url.includes('http://www.mapquestapi.com/geocoding/v1/address')) {
                      this.toastComponent.presentToast('Ocurrió un error', 'bottom');
                    }
                    // alert(JSON.stringify(error));
                  }
                }

              }
              return throwError(error);
              // return EMPTY;
            })
          );
        })
      );
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      duration: 60000,
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => console.log());
        }
      });
    });
  }

  // Cierre del loading
  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }
}
