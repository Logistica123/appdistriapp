import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletWithdrawalRequestListPage } from './wallet-withdrawal-request-list.page';

const routes: Routes = [
  {
    path: '',
    component: WalletWithdrawalRequestListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletWithdrawalRequestListPageRoutingModule {}
