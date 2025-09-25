import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePaymentPageRoutingModule } from './profile-payment-routing.module';

import { ProfilePaymentPage } from './profile-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePaymentPageRoutingModule
  ],
  declarations: [ProfilePaymentPage]
})
export class ProfilePaymentPageModule {}
