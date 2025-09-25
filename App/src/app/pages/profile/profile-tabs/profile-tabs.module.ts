import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileTabsPageRoutingModule } from './profile-tabs-routing.module';

import { ProfileTabsPage } from './profile-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileTabsPageRoutingModule
  ],
  declarations: [ProfileTabsPage]
})
export class ProfileTabsPageModule {}
