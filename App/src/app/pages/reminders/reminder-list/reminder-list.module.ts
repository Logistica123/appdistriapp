import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReminderListPageRoutingModule } from './reminder-list-routing.module';

import { ReminderListPage } from './reminder-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReminderListPageRoutingModule
  ],
  declarations: [ReminderListPage]
})
export class ReminderListPageModule {}
