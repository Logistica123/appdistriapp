import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { BranchListComponent } from './branch-list/branch-list.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { BranchFormComponent } from './branch-form/branch-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BranchListComponent, BranchFormComponent],
  imports: [
    CommonModule,
    BranchRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    BranchFormComponent
  ]
})
export class BranchModule {
}
