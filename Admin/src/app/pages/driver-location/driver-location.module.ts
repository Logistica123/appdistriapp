import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverLocationRoutingModule } from './driver-location-routing.module';
import { DriverLocationComponent } from './driver-location/driver-location.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DriverLocationComponent],
  imports: [
    CommonModule,
    DriverLocationRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class DriverLocationModule {
}
