import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptor } from './services/interceptor.service';
import { SharedModule } from './shared/shared.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgImageSliderModule } from 'ng-image-slider';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
// import * as firebase from 'firebase';
// firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,
    NgImageSliderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PrivacyPolicyComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-AR'
    },
    {
      provide: LOCALE_ID,
      useValue: 'es-AR'
    },
  ]
})
export class AppModule {
}
