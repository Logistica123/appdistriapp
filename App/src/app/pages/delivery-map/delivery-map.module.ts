import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DeliveryMapPageRoutingModule} from './delivery-map-routing.module';

import {DeliveryMapPage} from './delivery-map.page';
import {ComponentsModule} from '../../components/components.module';
import {DeliveryPrioritySelectComponent} from '../../components/popovers/delivery-priority-select/delivery-priority-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryMapPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DeliveryMapPage, DeliveryPrioritySelectComponent]
})
export class DeliveryMapPageModule {
}
