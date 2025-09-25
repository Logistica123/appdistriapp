import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletWithdrawalRequestFormPage } from './wallet-withdrawal-request-form.page';

const routes: Routes = [
  {
    path: '',
    component: WalletWithdrawalRequestFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletWithdrawalRequestFormPageRoutingModule {}
