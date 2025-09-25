import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReminderListPage } from './reminder-list.page';

const routes: Routes = [
  {
    path: '',
    component: ReminderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReminderListPageRoutingModule {}
