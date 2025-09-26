import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuelControlListComponent } from './fuel-control-list/fuel-control-list.component';

const routes: Routes = [
  {
    path: '',
    component: FuelControlListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelControlRoutingModule {
}
