import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationControlListPage } from './operation-control-list.page';

const routes: Routes = [
  {
    path: '',
    component: OperationControlListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationControlListPageRoutingModule {}
