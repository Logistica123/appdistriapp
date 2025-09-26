import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WalletTabsPageRoutingModule} from './wallet-tabs-routing.module';

import {WalletTabsPage} from './wallet-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTabsPageRoutingModule
  ],
  declarations: [WalletTabsPage]
})
export class WalletTabsPageModule {
}
