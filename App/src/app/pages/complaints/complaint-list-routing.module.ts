import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComplaintListPage } from './complaint-list.page';

const routes: Routes = [
  {
    path: '',
    component: ComplaintListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintListPageRoutingModule {}
