import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileTransportPage } from './profile-transport.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileTransportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileTransportPageRoutingModule {}
