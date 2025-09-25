import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../shared/snack-bar/snack-bar.component';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor(public router: Router,
              public snackBarComponent: SnackBarComponent) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('auth_token')
      }
    });
    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            if (!environment.production) {
              console.log('--------all looks good--------');
              console.log(event.status);
              console.log(event.body);
              console.log('--------end of response--------');
            }

            if (event.body['success'] && event.body['deleted']) {
              const message = event.body['custom_message'] ? event.body['custom_message'] : 'Ítem eliminado';
              this.snackBarComponent.openSnackBar(message);
            } else if (event.body['success'] && event.body['updated']) {
              const message = event.body['custom_message'] ? event.body['custom_message'] : 'Ítem actualizado';
              this.snackBarComponent.openSnackBar(message);
            } else if (event.body['success'] && event.body['stored']) {
              const message = event.body['custom_message'] ? event.body['custom_message'] : 'Ítem guardado';
              this.snackBarComponent.openSnackBar(message);
            }
          }
        }, error => {
          if (!environment.production) {
            console.log(HttpErrorResponse);
            console.log('--------response error--------');
            console.error('status code: ' + error.status);
            console.error(error.message);
            console.error(error.error.message);
            console.error(error.error.custom_message);
            console.log('-------- end of response error--------');
          }
          if (error.error.custom_message) {
            this.snackBarComponent.openSnackBar(error.error.custom_message);
          } else {
            this.snackBarComponent.openSnackBar();
          }
          if (error.status === 401) {
            this.router.navigateByUrl('login');
          }
        })
      );
  }
}
