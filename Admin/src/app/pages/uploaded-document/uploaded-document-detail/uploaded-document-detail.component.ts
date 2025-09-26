import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocumentFile } from '../../../models/DocumentFile';
import { DocumentFileService } from '../../../services/document-file.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-uploaded-document-detail',
  templateUrl: './uploaded-document-detail.component.html',
  styleUrls: ['./uploaded-document-detail.component.css']
})
export class UploadedDocumentDetailComponent implements OnInit {
  documentFiles: DocumentFile[] = [];

  constructor(public dialogRef: MatDialogRef<UploadedDocumentDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private documentFileService: DocumentFileService) {
    if (data) {
      this.documentFiles = data.documentFiles;
    }
  }

  ngOnInit() {

  }

  downloadFile(documentFile: DocumentFile) {
    console.log(documentFile);
    this.documentFileService.downloadDocumentFile(documentFile)
      .subscribe((response: any) => {
        const filename = `${documentFile.filename}`;
        fileSaver.saveAs(response, filename);
      });
  }

  public close(): void {
    this.dialogRef.close({success: false});
  }

}
