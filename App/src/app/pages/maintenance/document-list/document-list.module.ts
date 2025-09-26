import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DocumentListPageRoutingModule} from './document-list-routing.module';

import {DocumentListPage} from './document-list.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DocumentListPage]
})
export class DocumentListPageModule {
}
