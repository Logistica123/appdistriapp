import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrbanDistributionDetailPage } from './urban-distribution-detail.page';

const routes: Routes = [
  {
    path: '',
    component: UrbanDistributionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrbanDistributionDetailPageRoutingModule {}
