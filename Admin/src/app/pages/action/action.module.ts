import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionRoutingModule } from './action-routing.module';
import { ActionListComponent } from './action-list/action-list.component';
import { ActionFormComponent } from './action-form/action-form.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ActionListComponent, ActionFormComponent],
  imports: [
    CommonModule,
    ActionRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ActionModule { }
