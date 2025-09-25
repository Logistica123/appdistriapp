import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingListComponent } from './ranking-list/ranking-list.component';

const routes: Routes = [
  {
    path: '',
    component: RankingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
