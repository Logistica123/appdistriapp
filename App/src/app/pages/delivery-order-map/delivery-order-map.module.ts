import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryOrderMapPageRoutingModule } from './delivery-order-map-routing.module';

import { DeliveryOrderMapPage } from './delivery-order-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DeliveryOrderMapPageRoutingModule
  ],
  declarations: [DeliveryOrderMapPage]
})
export class DeliveryOrderMapPageModule {}
