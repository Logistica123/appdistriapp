import { Component, Inject, OnInit } from '@angular/core';
import { Order } from '../../../models/Order';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-journey-detail',
  templateUrl: './journey-detail.component.html',
  styleUrls: ['./journey-detail.component.css']
})
export class JourneyDetailComponent implements OnInit {
  order: Order;

  constructor(public dialogRef: MatDialogRef<JourneyDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.order = data.order;
    }
  }

  ngOnInit() {
  }

}
