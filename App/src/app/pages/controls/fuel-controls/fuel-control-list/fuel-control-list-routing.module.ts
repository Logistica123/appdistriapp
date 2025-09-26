import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelControlListPage } from './fuel-control-list.page';

const routes: Routes = [
  {
    path: '',
    component: FuelControlListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuelControlListPageRoutingModule {}
