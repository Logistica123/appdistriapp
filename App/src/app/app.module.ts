import {ErrorHandler, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {IonicStorageModule} from '@ionic/storage';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './services/v1/interceptor.service';

import {Geolocation} from '@ionic-native/geolocation/ngx';
import {File} from '@ionic-native/file/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {Device} from '@ionic-native/device/ngx';
import {LaunchNavigator} from '@ionic-native/launch-navigator/ngx';
import {ComponentsModule} from './components/components.module';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {environment} from '../environments/environment';
import {GoogleMaps} from '@ionic-native/google-maps';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {HTTP} from '@ionic-native/http/ngx';
import {CallNumber} from '@ionic-native/call-number/ngx';
import {PopoverServiceDetailsComponent} from './popover-service-details/popover-service-details.component';
import {LocationAccuracy} from '@ionic-native/location-accuracy/ngx';
import {FCM} from '@ionic-native/fcm/ngx';
import {Network} from '@ionic-native/network/ngx';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {AppRate} from '@ionic-native/app-rate/ngx';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import esAR from '@angular/common/locales/es-AR';
import {registerLocaleData} from '@angular/common';

registerLocaleData(esAR);

import {BugsnagErrorHandler} from '@bugsnag/plugin-angular';
import Bugsnag from '@bugsnag/js';

Bugsnag.start({apiKey: 'b2884e3735c06c44351c66d3148a690b'});

export function errorHandlerFactory() {
  return new BugsnagErrorHandler();
}

@NgModule({
  declarations: [AppComponent, PopoverServiceDetailsComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({
      backButtonText: ''
    }),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ComponentsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: ErrorHandler, useFactory: errorHandlerFactory},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {provide: LOCALE_ID, useValue: 'es-AR'},
    AppRate,
    BarcodeScanner,
    CallNumber,
    Camera,
    Device,
    FCM,
    File,
    FileChooser,
    FileOpener,
    FilePath,
    Geolocation,
    GoogleMaps,
    HTTP,
    ImagePicker,
    LaunchNavigator,
    LocationAccuracy,
    Network
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
