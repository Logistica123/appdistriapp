import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DocumentFormPageRoutingModule} from './document-form-routing.module';

import {DocumentFormPage} from './document-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DocumentFormPageRoutingModule
  ],
  declarations: [DocumentFormPage]
})
export class DocumentFormPageModule {
}
