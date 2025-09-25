import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentFileFormPage } from './document-file-form.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentFileFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentFileFormPageRoutingModule {}
