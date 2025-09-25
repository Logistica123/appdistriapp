import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentFormPage } from './document-form.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentFormPageRoutingModule {}
