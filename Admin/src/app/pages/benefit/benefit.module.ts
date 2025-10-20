import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenefitRoutingModule } from './benefit-routing.module';
import { BenefitListComponent } from './benefit-list/benefit-list.component';
import { BenefitFormComponent } from './benefit-form/benefit-form.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    BenefitListComponent,
    BenefitFormComponent
  ],
  imports: [
    CommonModule,
    BenefitRoutingModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [
    BenefitFormComponent
  ]
})
export class BenefitModule { }
