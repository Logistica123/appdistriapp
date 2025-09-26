import { Component, Inject, OnInit } from '@angular/core';
import { OperationControl } from '../../../models/OperationControl';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-operation-control-credits',
  templateUrl: './operation-control-credits.component.html',
  styleUrls: ['./operation-control-credits.component.css']
})
export class OperationControlCreditsComponent implements OnInit {
  operationControl: OperationControl;

  constructor(public dialogRef: MatDialogRef<OperationControlCreditsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.operationControl = data.operationControl;
    }
  }

  ngOnInit() {
    console.log(this.operationControl);
  }

}
