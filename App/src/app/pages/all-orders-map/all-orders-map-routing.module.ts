import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllOrdersMapPage } from './all-orders-map.page';

const routes: Routes = [
  {
    path: '',
    component: AllOrdersMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllOrdersMapPageRoutingModule {}
