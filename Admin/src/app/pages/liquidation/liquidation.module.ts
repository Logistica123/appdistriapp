import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidationRoutingModule } from './liquidation-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { LiquidationListComponent } from './liquidation-list/liquidation-list.component';

@NgModule({
  declarations: [LiquidationListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    LiquidationRoutingModule
  ]
})
export class LiquidationModule {}
