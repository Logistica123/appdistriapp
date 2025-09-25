import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationFormComponent } from './notification-form/notification-form.component';

@NgModule({
  declarations: [NotificationListComponent, NotificationFormComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [
    NotificationFormComponent
  ]
})
export class NotificationModule {
}
