import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationControlFormPage } from './operation-control-form.page';

const routes: Routes = [
  {
    path: '',
    component: OperationControlFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationControlFormPageRoutingModule {}
