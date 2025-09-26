import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TransactionListComponent, TransactionFormComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class TransactionModule {
}
