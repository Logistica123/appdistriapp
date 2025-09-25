import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JourneyRoutingModule } from './journey-routing.module';
import { JourneyListComponent } from './journey-list/journey-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { JourneyDetailComponent } from './journey-detail/journey-detail.component';

@NgModule({
  declarations: [JourneyListComponent, JourneyDetailComponent],
  imports: [
    CommonModule,
    JourneyRoutingModule,
    SharedModule,
    MaterialModule
  ],
  entryComponents: [
    JourneyDetailComponent
  ]
})
export class JourneyModule { }
