import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {UrbanDistributionListPageRoutingModule} from './urban-distribution-list-routing.module';

import {UrbanDistributionListPage} from './urban-distribution-list.page';
import {UrbanDistributionOrderItemComponent} from '../urban-distribution-order-item/urban-distribution-order-item.component';
import {ComponentsModule} from '../../../components/components.module';
import {PopoverItemOptionsComponent} from '../popover-item-options/popover-item-options.component';
import {UrbanDistributionIndicatorsComponent} from '../urban-distribution-indicators/urban-distribution-indicators.component';
import {RouteClosureFormComponent} from '../../route-closures/route-closure-form/route-closure-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UrbanDistributionListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    UrbanDistributionListPage,
    UrbanDistributionOrderItemComponent,
    PopoverItemOptionsComponent,
    UrbanDistributionIndicatorsComponent,
    RouteClosureFormComponent
  ]
})
export class UrbanDistributionListPageModule {
}
