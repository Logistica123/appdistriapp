import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DocumentFileFormPageRoutingModule} from './document-file-form-routing.module';

import {DocumentFileFormPage} from './document-file-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DocumentFileFormPageRoutingModule
  ],
  declarations: [DocumentFileFormPage]
})
export class DocumentFileFormPageModule {
}
