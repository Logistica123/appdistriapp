import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RewardSummaryPage} from './reward-summary.page';

const routes: Routes = [{path: '', component: RewardSummaryPage}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class RewardSummaryPageRoutingModule {}
