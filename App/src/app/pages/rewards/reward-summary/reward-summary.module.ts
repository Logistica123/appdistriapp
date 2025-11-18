import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {RewardSummaryPageRoutingModule} from './reward-summary-routing.module';
import {RewardSummaryPage} from './reward-summary.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RewardSummaryPageRoutingModule],
  declarations: [RewardSummaryPage]
})
export class RewardSummaryPageModule {}
