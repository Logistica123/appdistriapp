import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TollControlFormPage } from './toll-control-form.page';

const routes: Routes = [
  {
    path: '',
    component: TollControlFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TollControlFormPageRoutingModule {}
