import { Component, Inject, OnInit } from '@angular/core';
import { FuelControl } from '../../../models/FuelControl';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FuelControlImageService } from '../../../services/fuel-control-image.service';
import { FuelControlImage } from '../../../models/FuelControlImage';

@Component({
  selector: 'app-fuel-control-image',
  templateUrl: './fuel-control-image.component.html',
  styleUrls: ['./fuel-control-image.component.css']
})
export class FuelControlImageComponent implements OnInit {
  fuelControl: FuelControl;
  imageObject: any[] = [];
  allImagesLoaded = false;
  imagesLoaded = 0;
  imagesCount: number;

  constructor(public dialogRef: MatDialogRef<FuelControlImageComponent>,
              private fuelControlImageService: FuelControlImageService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.fuelControl) {
      this.fuelControl = data.fuelControl;
      this.imagesCount = this.fuelControl.fuel_control_images.length;
    }
  }

  ngOnInit() {
    this.fuelControl.fuel_control_images.map(fuelControlImage => {
      this.getFuelControlImage(fuelControlImage);
    });
  }

  getFuelControlImage(fuelControlImage: FuelControlImage) {
    this.fuelControlImageService.getFuelControlImage(fuelControlImage)
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
