import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OperationControlListPageRoutingModule} from './operation-control-list-routing.module';

import {OperationControlListPage} from './operation-control-list.page';
import {OperationControlFormPageModule} from '../operation-control-form/operation-control-form.module';
import {SharedControlModule} from "../../shared-control/shared-control.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OperationControlListPageRoutingModule,
    OperationControlFormPageModule,
    SharedControlModule
  ],
  declarations: [OperationControlListPage]
})
export class OperationControlListPageModule {
}
