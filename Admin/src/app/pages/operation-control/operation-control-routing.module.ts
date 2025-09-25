import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationControlListComponent } from './operation-control-list/operation-control-list.component';

const routes: Routes = [
  {
    path: '',
    component: OperationControlListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationControlRoutingModule {
}
