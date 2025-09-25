import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelControlRoutingModule } from './fuel-control-routing.module';
import { FuelControlListComponent } from './fuel-control-list/fuel-control-list.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { FuelControlImageComponent } from './fuel-control-image/fuel-control-image.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [FuelControlListComponent, FuelControlImageComponent],
  imports: [
    CommonModule,
    FuelControlRoutingModule,
    MaterialModule,
    SharedModule,
    NgImageSliderModule
  ],
  entryComponents: [
    FuelControlImageComponent
  ]
})
export class FuelControlModule {
}
