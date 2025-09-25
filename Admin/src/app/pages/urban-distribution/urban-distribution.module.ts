import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrbanDistributionRoutingModule } from './urban-distribution-routing.module';
import { UrbanDistributionDetailComponent } from './urban-distribution-detail/urban-distribution-detail.component';
import { UrbanDistributionListComponent } from './urban-distribution-list/urban-distribution-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [UrbanDistributionDetailComponent, UrbanDistributionListComponent],
  imports: [
    CommonModule,
    UrbanDistributionRoutingModule,
    SharedModule,
    MaterialModule,
    NgImageSliderModule,
  ],
  entryComponents: [
    UrbanDistributionDetailComponent
  ]
})
export class UrbanDistributionModule {
}
