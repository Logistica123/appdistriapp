import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadedDocumentListComponent } from './uploaded-document-list/uploaded-document-list.component';

const routes: Routes = [
  {
    path: '',
    component: UploadedDocumentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadedDocumentRoutingModule {
}
