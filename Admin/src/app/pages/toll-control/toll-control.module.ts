import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TollControlRoutingModule } from './toll-control-routing.module';
import { TollControlListComponent } from './toll-control-list/toll-control-list.component';
import { TollControlImageComponent } from './toll-control-image/toll-control-image.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [TollControlListComponent, TollControlImageComponent],
  imports: [
    CommonModule,
    TollControlRoutingModule,
    MaterialModule,
    SharedModule,
    NgImageSliderModule
  ],
  entryComponents: [
    TollControlImageComponent
  ]
})
export class TollControlModule {
}
