import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OperationControlFormPageRoutingModule} from './operation-control-form-routing.module';

import {OperationControlFormPage} from './operation-control-form.page';
import {CustomFormsModule} from 'ng2-validation';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {ComponentsModule} from '../../../../components/components.module';
import {SharedControlModule} from "../../shared-control/shared-control.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OperationControlFormPageRoutingModule,
    CustomFormsModule,
    CurrencyMaskModule,
    ComponentsModule,
    SharedControlModule
  ],
  declarations: [OperationControlFormPage]
})
export class OperationControlFormPageModule {
}
