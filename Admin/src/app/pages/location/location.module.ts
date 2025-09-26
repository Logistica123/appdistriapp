import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationListComponent } from './location-list/location-list.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocationUpdateRequestComponent } from './location-update-request/location-update-request.component';
import { LocationFormComponent } from './location-form/location-form.component';

@NgModule({
  declarations: [LocationListComponent, LocationDetailComponent, LocationUpdateRequestComponent, LocationFormComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [
    LocationDetailComponent,
    LocationFormComponent,
    LocationUpdateRequestComponent
  ]
})
export class LocationModule {
}
