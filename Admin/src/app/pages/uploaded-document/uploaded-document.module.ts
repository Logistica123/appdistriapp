import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadedDocumentRoutingModule } from './uploaded-document-routing.module';
import { UploadedDocumentListComponent } from './uploaded-document-list/uploaded-document-list.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { UploadedDocumentDetailComponent } from './uploaded-document-detail/uploaded-document-detail.component';

@NgModule({
  declarations: [UploadedDocumentListComponent, UploadedDocumentDetailComponent],
  imports: [
    CommonModule,
    UploadedDocumentRoutingModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [
    UploadedDocumentDetailComponent
  ]
})
export class UploadedDocumentModule {
}
