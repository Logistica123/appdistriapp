import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Driver } from '../../models/Driver';
import { DriverService } from '../../services/driver.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-driver-values-dialog',
  templateUrl: './edit-driver-values-dialog.component.html',
  styleUrls: ['./edit-driver-values-dialog.component.css']
})
export class EditDriverValuesDialogComponent implements OnInit {
  driverForm: FormGroup;
  driver: Driver;

  constructor(private formBuilder: FormBuilder,
              private driverService: DriverService,
              public dialogRef: MatDialogRef<EditDriverValuesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.driverForm = this.formBuilder.group({
      cost_per_km: ['', Validators.required],
      cost_per_hour: ['', Validators.required],
    });

    if (data?.driver) {
      this.driver = data.driver;
      this.setDriverForm();

      console.log(this.driver);
    }
  }

  ngOnInit() {
  }

  updateDriverValues() {
    const body = this.setBody();
    console.log(body);
    // this.driverService.updateDriverValues(this.driver, body)
    //   .subscribe((response: any) => {
    //     this.close(true);
    //   }, error => {
    //
    //   }, () => {
    //
    //   });
  }

  setDriverForm() {
    setTimeout(() => {
      this.driverForm.controls.cost_per_km.setValue(this.driver.cost_per_km);
      this.driverForm.controls.cost_per_hour.setValue(this.driver.cost_per_hour);

      console.log(this.driverForm.controls.cost_per_km.value);
    }, 1000);
  }

  setBody() {
    return {
      cost_per_km: this.driverForm.value.cost_per_km,
      cost_per_hour: this.driverForm.value.cost_per_hour,
    };
  }

  public close(success): void {
    this.dialogRef.close({success});
  }
}
