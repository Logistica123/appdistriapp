import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FuelControlFormPageRoutingModule} from './fuel-control-form-routing.module';

import {FuelControlFormPage} from './fuel-control-form.page';
import {ComponentsModule} from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FuelControlFormPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FuelControlFormPage],
  entryComponents: [
    FuelControlFormPage
  ]
})
export class FuelControlFormPageModule {
}
