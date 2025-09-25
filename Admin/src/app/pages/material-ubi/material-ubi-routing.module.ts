import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialUbiListComponent } from './material-ubi-list/material-ubi-list.component';


const routes: Routes = [
  {
    path: '',
    component: MaterialUbiListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialUbiRoutingModule {
}
