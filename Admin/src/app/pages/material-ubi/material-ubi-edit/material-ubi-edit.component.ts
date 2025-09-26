import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialUbiService } from '../../../services/material-ubi.service';
import { MaterialUbi } from '../../../models/MaterialUbi';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-material-ubi-edit',
  templateUrl: './material-ubi-edit.component.html',
  styleUrls: ['./material-ubi-edit.component.css']
})
export class MaterialUbiEditComponent implements OnInit {
  form: FormGroup;
  materialUbi: MaterialUbi;

  constructor(private materialUbiService: MaterialUbiService,
              public dialogRef: MatDialogRef<MaterialUbiEditComponent>,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.formBuilder.group({
      value: ['', Validators.required]
    });

    if (data) {
      this.materialUbi = data.materialUbi;
      this.setData();
    }
  }

  ngOnInit(): void {
  }

  setData() {
    this.form.controls.value.setValue(this.materialUbi.value);
  }

  submit() {
    const body = {
      value: this.form.value.value
    };
    this.materialUbiService.updateMaterialUbiValue(this.materialUbi, body)
      .subscribe((response: any) => {
        this.dialogRef.close({success: true});
      });
  }

  public close(): void {
    this.dialogRef.close({success: false});
  }
}
