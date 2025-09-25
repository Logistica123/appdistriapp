import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryOrderMapPage } from './delivery-order-map.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryOrderMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryOrderMapPageRoutingModule {}
