import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrbanDistributionListComponent } from './urban-distribution-list/urban-distribution-list.component';

const routes: Routes = [
  {
    path: '',
    component: UrbanDistributionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrbanDistributionRoutingModule {
}
