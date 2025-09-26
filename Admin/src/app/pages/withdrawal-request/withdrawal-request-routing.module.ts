import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithdrawalRequestListComponent } from './withdrawal-request-list/withdrawal-request-list.component';

const routes: Routes = [
  {
    path: '',
    component: WithdrawalRequestListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawalRequestRoutingModule {
}
