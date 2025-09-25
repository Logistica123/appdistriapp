import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrbanDistributionListPage } from './urban-distribution-list.page';

const routes: Routes = [
  {
    path: '',
    component: UrbanDistributionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrbanDistributionListPageRoutingModule {}
