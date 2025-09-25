import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverListComponent } from './driver-list/driver-list.component';
import { MaterialModule } from '../../material/material.module';
import { DriverFormComponent } from './driver-form/driver-form.component';
import { SharedModule } from '../../shared/shared.module';
import { DriverNotificationFormComponent } from './driver-notification-form/driver-notification-form.component';
import { CompanySelectDialogComponent } from './company-select-dialog/company-select-dialog.component';

@NgModule({
  declarations: [
    DriverListComponent,
    DriverFormComponent,
    DriverNotificationFormComponent,
    CompanySelectDialogComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [
    DriverNotificationFormComponent
  ]
})
export class DriverModule {
}
