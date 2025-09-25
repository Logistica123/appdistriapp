import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TollControlListPage } from './toll-control-list.page';

const routes: Routes = [
  {
    path: '',
    component: TollControlListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TollControlListPageRoutingModule {}
