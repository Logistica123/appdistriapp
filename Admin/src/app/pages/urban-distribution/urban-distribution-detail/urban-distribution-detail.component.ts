import { Component, Inject, OnInit } from '@angular/core';
import { Order } from '../../../models/Order';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OperationControlImage } from '../../../models/OperationControlImage';
import { DeliveryImage } from '../../../models/DeliveryImage';
import { DeliveryImageService } from '../../../services/delivery-image.service';

@Component({
  selector: 'app-urban-distribution-detail',
  templateUrl: './urban-distribution-detail.component.html',
  styleUrls: ['./urban-distribution-detail.component.css']
})
export class UrbanDistributionDetailComponent implements OnInit {
  order: Order;
  imageObject: any[] = [];
  allImagesLoaded = false;
  imagesLoaded = 0;
  imagesCount: number;

  constructor(public dialogRef: MatDialogRef<UrbanDistributionDetailComponent>,
              private deliveryImageService: DeliveryImageService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.order = data.order;
      this.imagesCount = this.order.delivery_images.length;
    }
  }

  ngOnInit() {
    this.order.delivery_images.map(deliveryImage => {
      this.getDeliveryImage(deliveryImage);
    });
  }

  getDeliveryImage(deliveryImage: DeliveryImage) {
    this.deliveryImageService.getDeliveryImage(deliveryImage)
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
