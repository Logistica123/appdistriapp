import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OperationControl } from '../../../models/OperationControl';
import { OperationControlImageService } from '../../../services/operation-control-image.service';
import { OperationControlImage } from '../../../models/OperationControlImage';

@Component({
  selector: 'app-operation-control-detail',
  templateUrl: './operation-control-detail.component.html',
  styleUrls: ['./operation-control-detail.component.css']
})
export class OperationControlDetailComponent implements OnInit {
  operationControl: OperationControl;
  imageObject: any[] = [];
  allImagesLoaded = false;
  imagesLoaded = 0;
  imagesCount: number;

  constructor(public dialogRef: MatDialogRef<OperationControlDetailComponent>,
              private operationControlImageService: OperationControlImageService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.operationControl = data.operationControl;
      this.imagesCount = this.operationControl.operation_control_images.length;
    }
  }

  ngOnInit() {
    this.operationControl.operation_control_images.map(operationControlImage => {
      this.getOperationControlImage(operationControlImage);
    });
  }

  getOperationControlImage(operationControlImage: OperationControlImage) {
    this.operationControlImageService.getOperationControlImage(operationControlImage)
      .subscribe((response: any) => {
        this.imageObject.push({
          image: 'data:image/jpeg;base64,' + response.base64,
          thumbImage: 'data:image/jpeg;base64,' + response.base64,
          alt: 'Control Operaciones',
          title: 'Control Operaciones'
        });
        this.imagesLoaded++;
        if (this.imagesLoaded === this.imagesCount) {
          this.allImagesLoaded = true;
        }
      });
  }

}
