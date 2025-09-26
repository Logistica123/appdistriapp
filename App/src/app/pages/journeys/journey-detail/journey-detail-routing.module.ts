import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyDetailPage } from './journey-detail.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyDetailPageRoutingModule {}
