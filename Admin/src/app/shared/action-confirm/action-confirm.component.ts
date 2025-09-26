import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-action-confirm',
  templateUrl: './action-confirm.component.html',
  styleUrls: ['./action-confirm.component.css']
})
export class ActionConfirmComponent implements OnInit {
  message: 'Por favor, confirme la acción';

  constructor(public dialogRef: MatDialogRef<ActionConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.message = data.message;
    }
  }

  ngOnInit() {
  }

  confirm() {
    this.dialogRef.close({success: true});
  }

  cancel() {
    this.dialogRef.close({success: false});
  }

}
