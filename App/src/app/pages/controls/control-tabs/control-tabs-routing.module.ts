import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ControlTabsPage} from './control-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: ControlTabsPage,
    children: [
      {
        path: 'operation-control',
        loadChildren: () => import('../operation-controls/operation-control-list/operation-control-list.module')
          .then(m => m.OperationControlListPageModule)
      },
      {
        path: 'fuel-control',
        loadChildren: () => import('../fuel-controls/fuel-control-list/fuel-control-list.module')
          .then(m => m.FuelControlListPageModule)
      },
      {
        path: 'toll-control',
        loadChildren: () => import('../toll-controls/toll-control-list/toll-control-list.module')
          .then(m => m.TollControlListPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlTabsPageRoutingModule {
}
