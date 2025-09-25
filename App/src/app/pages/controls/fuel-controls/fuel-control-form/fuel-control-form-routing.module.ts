import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelControlFormPage } from './fuel-control-form.page';

const routes: Routes = [
  {
    path: '',
    component: FuelControlFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuelControlFormPageRoutingModule {}
