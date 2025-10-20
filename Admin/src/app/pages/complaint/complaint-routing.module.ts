import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';

const routes: Routes = [
  {
    path: '',
    component: ComplaintListComponent,
    data: {
      title: 'Reclamos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintRoutingModule {}
