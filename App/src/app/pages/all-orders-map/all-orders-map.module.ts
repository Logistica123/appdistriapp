import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllOrdersMapPageRoutingModule } from './all-orders-map-routing.module';

import { AllOrdersMapPage } from './all-orders-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllOrdersMapPageRoutingModule
  ],
  declarations: [AllOrdersMapPage]
})
export class AllOrdersMapPageModule {}
