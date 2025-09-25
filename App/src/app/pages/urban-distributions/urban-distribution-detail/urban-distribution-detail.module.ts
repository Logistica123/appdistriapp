import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {UrbanDistributionDetailPageRoutingModule} from './urban-distribution-detail-routing.module';

import {UrbanDistributionDetailPage} from './urban-distribution-detail.page';
import {ComponentsModule} from '../../../components/components.module';
import {ModalEditAddressComponent} from '../modal-edit-address/modal-edit-address.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UrbanDistributionDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UrbanDistributionDetailPage, ModalEditAddressComponent]
})
export class UrbanDistributionDetailPageModule {
}
