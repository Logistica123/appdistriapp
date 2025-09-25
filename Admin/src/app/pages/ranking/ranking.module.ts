import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [RankingListComponent],
  imports: [
    CommonModule,
    RankingRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class RankingModule { }
