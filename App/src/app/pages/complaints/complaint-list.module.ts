import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComplaintListPageRoutingModule } from './complaint-list-routing.module';
import { ComplaintListPage } from './complaint-list.page';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComplaintListPageRoutingModule
  ],
  declarations: [ComplaintListPage, ComplaintFormComponent]
})
export class ComplaintListPageModule {}
