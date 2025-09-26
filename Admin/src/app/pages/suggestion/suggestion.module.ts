import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionRoutingModule } from './suggestion-routing.module';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';

@NgModule({
  declarations: [SuggestionListComponent],
  imports: [
    CommonModule,
    SuggestionRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class SuggestionModule { }
