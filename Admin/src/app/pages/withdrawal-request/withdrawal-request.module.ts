import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawalRequestRoutingModule } from './withdrawal-request-routing.module';
import { WithdrawalRequestListComponent } from './withdrawal-request-list/withdrawal-request-list.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [WithdrawalRequestListComponent],
  imports: [
    CommonModule,
    WithdrawalRequestRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class WithdrawalRequestModule {
}
