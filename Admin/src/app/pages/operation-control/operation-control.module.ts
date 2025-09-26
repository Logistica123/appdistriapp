import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationControlRoutingModule } from './operation-control-routing.module';
import { OperationControlListComponent } from './operation-control-list/operation-control-list.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { OperationControlDetailComponent } from './operation-control-detail/operation-control-detail.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { OperationControlCreditsComponent } from './operation-control-credits/operation-control-credits.component';
import { CalculateValueComponent } from './calculate-value/calculate-value.component';
import { OperationControlEditComponent } from './operation-control-edit/operation-control-edit.component';

@NgModule({
  declarations: [
    OperationControlListComponent,
    OperationControlDetailComponent,
    OperationControlCreditsComponent,
    CalculateValueComponent,
    OperationControlEditComponent
  ],
  imports: [
    CommonModule,
    OperationControlRoutingModule,
    MaterialModule,
    SharedModule,
    NgImageSliderModule
  ],
  entryComponents: [
    OperationControlDetailComponent,
    OperationControlCreditsComponent,
    CalculateValueComponent,
    OperationControlEditComponent
  ]
})
export class OperationControlModule {
}
