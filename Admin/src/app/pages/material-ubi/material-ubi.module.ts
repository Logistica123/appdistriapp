import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUbiRoutingModule } from './material-ubi-routing.module';
import { MaterialUbiListComponent } from './material-ubi-list/material-ubi-list.component';
import { MaterialUbiEditComponent } from './material-ubi-edit/material-ubi-edit.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [MaterialUbiListComponent, MaterialUbiEditComponent],
  imports: [
    CommonModule,
    MaterialUbiRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class MaterialUbiModule {
}
