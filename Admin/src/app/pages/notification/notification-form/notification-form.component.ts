import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../../services/notification.service';
import { FormControl } from '@angular/forms';
import { Driver } from '../../../models/Driver';
import { DriverService } from '../../../services/driver.service';

@Component({
  selector: 'app-notification-form',
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.css']
})
export class NotificationFormComponent implements OnInit {
  messageFormControl = new FormControl();
  driversFormControl = new FormControl();
  drivers: Driver[] = [];

  constructor(public dialogRef: MatDialogRef<NotificationFormComponent>,
              private notificationService: NotificationService,
              private driverService: DriverService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.getDrivers();
  }

  getDrivers() {
    this.driverService.getDrivers()
      .subscribe((response: any) => {
        this.drivers = response.drivers;
        this.drivers = this.drivers.filter(driver => driver.last_device);
      });
  }

  send() {
    const body = {
      drivers: this.driversFormControl.value,
      message: this.messageFormControl.value
    };
    console.log(body);
    this.notificationService.sendNotification(body)
      .subscribe((response: any) => {

      });
  }

  cancel() {
    this.dialogRef.close({success: false});
  }

}
