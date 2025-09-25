import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CompanyFormComponent, CompanyListComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [
    CompanyFormComponent
  ]
})
export class CompanyModule {
}
