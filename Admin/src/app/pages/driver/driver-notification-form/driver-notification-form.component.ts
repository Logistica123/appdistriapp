import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Driver } from '../../../models/Driver';
import { NotificationService } from '../../../services/notification.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-driver-notification-form',
  templateUrl: './driver-notification-form.component.html',
  styleUrls: ['./driver-notification-form.component.css']
})
export class DriverNotificationFormComponent implements OnInit {
  driver: Driver;
  messageFormControl = new FormControl();

  constructor(public dialogRef: MatDialogRef<DriverNotificationFormComponent>,
              private notificationService: NotificationService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.driver = data.driver;
    }
  }

  ngOnInit() {
  }

  send() {
    const driversIdsArray: number[] = [];
    driversIdsArray.push(this.driver.id);
    const body = {
      drivers: driversIdsArray,
      message: this.messageFormControl.value
    };
    console.log(body);
    this.notificationService.sendNotification( body)
      .subscribe((response: any) => {
        this.dialogRef.close({success: true});
      }, error => {

      }, () => {

      });
  }

  cancel() {
    this.dialogRef.close({success: false});
  }

  public close(): void {
    this.dialogRef.close({success: false});
  }

}
