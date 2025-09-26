import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ControlTabsPageRoutingModule} from './control-tabs-routing.module';

import {ControlTabsPage} from './control-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlTabsPageRoutingModule
  ],
  declarations: [
    ControlTabsPage
  ]
})
export class ControlTabsPageModule {
}
