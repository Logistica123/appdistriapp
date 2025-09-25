import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TollControlFormPageRoutingModule} from './toll-control-form-routing.module';

import {TollControlFormPage} from './toll-control-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TollControlFormPageRoutingModule
  ],
  declarations: [TollControlFormPage]
})
export class TollControlFormPageModule {
}
