import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiquidationListComponent } from './liquidation-list/liquidation-list.component';

const routes: Routes = [
  {
    path: '',
    component: LiquidationListComponent,
    data: {
      title: 'Liquidaciones'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquidationRoutingModule {}
