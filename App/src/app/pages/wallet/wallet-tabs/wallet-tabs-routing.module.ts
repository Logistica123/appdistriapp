import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WalletTabsPage} from './wallet-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTabsPage,
    children: [
      {
        path: 'wallet-transaction-list',
        loadChildren: () => import('../wallet-transaction-list/wallet-transaction-list.module')
          .then(m => m.WalletTransactionListPageModule)
      },
      {
        path: 'wallet-withdrawal-request-list',
        loadChildren: () => import('../wallet-withdrawal-request-list/wallet-withdrawal-request-list.module')
          .then(m => m.WalletWithdrawalRequestListPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTabsPageRoutingModule {
}
