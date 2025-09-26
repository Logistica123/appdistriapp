import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProfileTransportPageRoutingModule} from './profile-transport-routing.module';

import {ProfileTransportPage} from './profile-transport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfileTransportPageRoutingModule
  ],
  declarations: [ProfileTransportPage]
})
export class ProfileTransportPageModule {
}
