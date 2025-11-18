import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {NavController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {Device} from '@ionic-native/device/ngx';
import {FCM} from 'cordova-plugin-fcm-with-dependecy-updated/ionic';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  constructor(private device: Device,
              private router: Router,
              private navController: NavController,
              private http: HttpClient,
              private platform: Platform) {
  }

  storeDevice() {
    if (!this.isNativePlatform()) {
      return;
    }

    const body = {
      uuid: this.device.uuid,
      model: this.device.model,
      platform: this.device.platform,
      version: this.device.version
    };
    this.http.post(`${this.API_URL}${this.V1}devices`, body)
      .subscribe((response: any) => {
        this.getFCMToken();
      });
  }

  storeFCMToken(token) {
    const body = {
      uuid: this.device.uuid,
      fcm_token: token
    };
    return this.http.put(`${this.API_URL}${this.V1}devices/fcm-token`, body);
  }

  getFCMToken() {
    if (!this.isNativePlatform() || !FCM || typeof FCM.getToken !== 'function') {
      return;
    }

    FCM.getToken().then(token => {
      this.storeFCMToken(token)
        .subscribe((response: any) => {
          //
        }, err => {
          //
        });
    }).catch(err => {
      //
    });
  }

  private isNativePlatform(): boolean {
    return this.platform.is('cordova') || this.platform.is('hybrid');
  }
}
