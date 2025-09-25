import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrbanDistributionFormPage } from './urban-distribution-form.page';

const routes: Routes = [
  {
    path: '',
    component: UrbanDistributionFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrbanDistributionFormPageRoutingModule {}
