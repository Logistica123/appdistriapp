import { Component, Inject, OnInit } from '@angular/core';
import { FuelControl } from '../../../models/FuelControl';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TollControl } from '../../../models/TollControl';
import { TollControlImageService } from '../../../services/toll-control-image.service';
import { TollControlImage } from '../../../models/TollControlImage';

@Component({
  selector: 'app-toll-control-image',
  templateUrl: './toll-control-image.component.html',
  styleUrls: ['./toll-control-image.component.css']
})
export class TollControlImageComponent implements OnInit {
  tollControl: TollControl;
  imageObject: any[] = [];
  allImagesLoaded = false;
  imagesLoaded = 0;
  imagesCount: number;

  constructor(public dialogRef: MatDialogRef<TollControlImageComponent>,
              private tollControlImageService: TollControlImageService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.tollControl) {
      this.tollControl = data.tollControl;
      this.imagesCount = this.tollControl.toll_control_images.length;
    }
  }

  ngOnInit() {
    this.tollControl.toll_control_images.map(tollControlImage => {
      this.getTollControlImage(tollControlImage);
    });
  }

  getTollControlImage(tollControlImage: TollControlImage) {
    this.tollControlImageService.getTollControlImage(tollControlImage)
      .subscribe((response: any) => {
        this.imageObject.push({
          image: 'data:image/jpeg;base64,' + response.base64,
          thumbImage: 'data:image/jpeg;base64,' + response.base64,
          alt: 'Control Combustible',
          title: 'Control Combustible'
        });
        this.imagesLoaded++;
        if (this.imagesLoaded === this.imagesCount) {
          this.allImagesLoaded = true;
        }
      });
  }

}
