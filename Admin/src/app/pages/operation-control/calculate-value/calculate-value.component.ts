import { Component, Inject, OnInit } from '@angular/core';
import { OperationControl } from '../../../models/OperationControl';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { OperationControlService } from '../../../services/operation-control.service';
import { OperationControlImage } from '../../../models/OperationControlImage';
import { OperationControlImageService } from '../../../services/operation-control-image.service';

@Component({
  selector: 'app-calculate-value',
  templateUrl: './calculate-value.component.html',
  styleUrls: ['./calculate-value.component.css']
})
export class CalculateValueComponent implements OnInit {
  operationControl: OperationControl;
  imageObject: any[] = [];
  calculationModeFC = new FormControl();
  showMode1CalculationDetails = false;
  showMode2CalculationDetails = false;
  showMode3CalculationDetails = false;
  showMode4CalculationDetails = false;

  amount: number;

  submitting = false;

  imagesLoaded = 0;
  allImagesLoaded = false;
  imagesCount: number;

  constructor(public dialogRef: MatDialogRef<CalculateValueComponent>,
              private operationControlImageService: OperationControlImageService,
              private operationControlService: OperationControlService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.operationControl = data.operationControl;
      this.imagesCount = this.operationControl.operation_control_images.length;
      console.log(this.operationControl);
    }
  }

  ngOnInit() {
    this.calculationModeFC.valueChanges.subscribe(val => {
      console.log(val);
      if (val === '1') {
        this.calculate1();
      } else if (val === '2') {
        this.calculate2();
      } else if (val === '3') {
        this.calculate3();
      } else if (val === '4') {
        this.calculate4();
      }
    });

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

  calculate1() {
    console.log(this.operationControl);
    this.showMode1CalculationDetails = true;
    this.showMode2CalculationDetails = false;
    this.showMode3CalculationDetails = false;
    this.showMode4CalculationDetails = false;

    this.amount = this.operationControl.delivered * this.operationControl.branch.package_rate;
  }

  calculate2() {
    console.log(this.operationControl);
    this.showMode1CalculationDetails = false;
    this.showMode2CalculationDetails = true;
    this.showMode3CalculationDetails = false;
    this.showMode4CalculationDetails = false;

    this.amount = this.operationControl.hours * this.operationControl.branch.hour_rate;
  }

  calculate3() {
    console.log(this.operationControl);
    this.showMode1CalculationDetails = false;
    this.showMode2CalculationDetails = false;
    this.showMode3CalculationDetails = true;
    this.showMode4CalculationDetails = false;

    this.amount = (this.operationControl.km - this.operationControl.branch.plus_km > 0
      ? (this.operationControl.km - this.operationControl.branch.plus_km) * this.operationControl.branch.km_rate
      : 0)
      + (this.operationControl.branch.fixed_hours * this.operationControl.branch.hour_rate);
  }

  calculate4() {
    console.log(this.operationControl);
    this.showMode1CalculationDetails = false;
    this.showMode2CalculationDetails = false;
    this.showMode4CalculationDetails = false;
    this.showMode3CalculationDetails = true;

    this.amount = this.operationControl.material_ubi
      ? (this.operationControl.delivered * this.operationControl.material_ubi.value)
      : 0;
  }

  submit() {
    this.submitting = false;
    const body = this.setBody();
    this.operationControlService.updateCalculation(this.operationControl, body)
      .subscribe((response: any) => {
        this.submitting = false;
        this.close(true);
      }, error => {
        this.submitting = false;
      });
  }

  close(success) {
    this.dialogRef.close({success});
  }

  setBody() {
    return {
      amount: this.amount,
      branch_km_rate: this.operationControl.branch.km_rate,
      branch_hour_rate: this.operationControl.branch.hour_rate,
      branch_package_rate: this.operationControl.branch.package_rate,
      branch_fixed_hours: this.operationControl.branch.fixed_hours,
      branch_plus_km: this.operationControl.branch.plus_km,
      calculation_mode: this.calculationModeFC.value
    };
  }
}
