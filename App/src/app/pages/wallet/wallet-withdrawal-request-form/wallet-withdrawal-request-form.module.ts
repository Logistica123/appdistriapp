import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WalletWithdrawalRequestFormPageRoutingModule} from './wallet-withdrawal-request-form-routing.module';

import {WalletWithdrawalRequestFormPage} from './wallet-withdrawal-request-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    WalletWithdrawalRequestFormPageRoutingModule
  ],
  declarations: [WalletWithdrawalRequestFormPage]
})
export class WalletWithdrawalRequestFormPageModule {
}
