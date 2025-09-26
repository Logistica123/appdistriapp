import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletWithdrawalRequestListPageRoutingModule } from './wallet-withdrawal-request-list-routing.module';

import { WalletWithdrawalRequestListPage } from './wallet-withdrawal-request-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletWithdrawalRequestListPageRoutingModule
  ],
  declarations: [WalletWithdrawalRequestListPage]
})
export class WalletWithdrawalRequestListPageModule {}
