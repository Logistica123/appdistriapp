import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuggestionFormPage } from './suggestion-form.page';

const routes: Routes = [
  {
    path: '',
    component: SuggestionFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestionFormPageRoutingModule {}
