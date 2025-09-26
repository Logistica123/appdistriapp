import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePaymentPage } from './profile-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePaymentPageRoutingModule {}
