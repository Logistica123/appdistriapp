import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FuelControlListPageRoutingModule} from './fuel-control-list-routing.module';

import {FuelControlListPage} from './fuel-control-list.page';
import {FuelControlFormPage} from '../fuel-control-form/fuel-control-form.page';
import {FuelControlFormPageModule} from '../fuel-control-form/fuel-control-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FuelControlListPageRoutingModule,
    FuelControlFormPageModule
  ],
  declarations: [FuelControlListPage],
})
export class FuelControlListPageModule {
}
