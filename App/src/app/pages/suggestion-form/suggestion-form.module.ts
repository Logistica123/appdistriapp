import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SuggestionFormPageRoutingModule} from './suggestion-form-routing.module';

import {SuggestionFormPage} from './suggestion-form.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SuggestionFormPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SuggestionFormPage]
})
export class SuggestionFormPageModule {
}
