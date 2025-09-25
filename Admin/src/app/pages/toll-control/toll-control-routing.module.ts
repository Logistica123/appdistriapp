import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TollControlListComponent } from './toll-control-list/toll-control-list.component';

const routes: Routes = [
  {
    path: '',
    component: TollControlListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TollControlRoutingModule {
}
