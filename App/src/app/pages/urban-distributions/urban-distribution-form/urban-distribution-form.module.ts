import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {UrbanDistributionFormPageRoutingModule} from './urban-distribution-form-routing.module';

import {UrbanDistributionFormPage} from './urban-distribution-form.page';
import {PopoverSelectDateComponent} from '../popover-select-date/popover-select-date.component';
import {OrderDatePipe} from '../order-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UrbanDistributionFormPageRoutingModule,
  ],
  declarations: [
    UrbanDistributionFormPage,
    PopoverSelectDateComponent,
    OrderDatePipe
  ]
})
export class UrbanDistributionFormPageModule {
}
