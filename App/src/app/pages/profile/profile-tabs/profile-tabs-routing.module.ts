import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProfileTabsPage} from './profile-tabs.page';
import {ProfileDataPage} from '../profile-data/profile-data.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileTabsPage,
    children: [
      {
        path: 'profile-data',
        loadChildren: () => import('../profile-data/profile-data.module')
          .then(m => m.ProfileDataPageModule)
      },
      {
        path: 'profile-transport',
        loadChildren: () => import('../profile-transport/profile-transport.module')
          .then(m => m.ProfileTransportPageModule)
      },
      {
        path: 'profile-payment',
        loadChildren: () => import('../profile-payment/profile-payment.module')
          .then(m => m.ProfilePaymentPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileTabsPageRoutingModule {
}
