import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TollControlListPageRoutingModule} from './toll-control-list-routing.module';

import {TollControlListPage} from './toll-control-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TollControlListPageRoutingModule
  ],
  declarations: [TollControlListPage]
})
export class TollControlListPageModule {
}
