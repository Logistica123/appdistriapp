import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LiquidationListPageRoutingModule } from './liquidation-list-routing.module';
import { LiquidationListPage } from './liquidation-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiquidationListPageRoutingModule
  ],
  declarations: [LiquidationListPage]
})
export class LiquidationListPageModule {}
