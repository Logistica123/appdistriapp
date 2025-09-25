import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OperationControlService } from '../../../services/operation-control.service';
import { OperationControl } from '../../../models/OperationControl';
import { Material } from '../../../models/Material';
import { Ubi } from '../../../models/Ubi';

@Component({
  selector: 'app-operation-control-edit',
  templateUrl: './operation-control-edit.component.html',
  styleUrls: ['./operation-control-edit.component.css']
})
export class OperationControlEditComponent implements OnInit {
  form: FormGroup;
  operationControl: OperationControl;
  buttonText = 'Aceptar';
  edit = false;
  materials: Material[] = [];
  ubis: Ubi[] = [];

  constructor(private formBuilder: FormBuilder,
              private operationControlService: OperationControlService,
              public dialogRef: MatDialogRef<OperationControlEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.formBuilder.group({
      hours: ['', Validators.required],
      km: ['', Validators.required],
      assigned: ['', Validators.required],
      delivered: ['', Validators.required],
      material_id: ['', Validators.required],
      ubi_id: ['', Validators.required],
    });

    if (data) {
      this.edit = true;
      this.buttonText = 'Editar';
      this.operationControl = data.operationControl;
      this.materials = data.materials;
      this.ubis = data.ubis;
      this.setOperationControl();
    }
  }

  ngOnInit() {
  }

  update() {
    const body = this.setBody();
    this.operationControlService.updateOperationControl(this.operationControl, body)
      .subscribe((response: any) => {
        this.dialogRef.close({success: true});
      }, error => {

      }, () => {

      });
  }

  setOperationControl() {
    this.form.controls.hours.setValue(this.operationControl.hours);
    this.form.controls.km.setValue(this.operationControl.km);
    this.form.controls.assigned.setValue(this.operationControl.assigned);
    this.form.controls.delivered.setValue(this.operationControl.delivered);

    if (this.operationControl.material_ubi) {
      this.form.controls.material_id.setValue(this.operationControl.material_ubi.material.id);
      this.form.controls.ubi_id.setValue(this.operationControl.material_ubi.ubi.id);
    }
  }

  setBody() {
    return {
      hours: this.form.value.hours,
      km: this.form.value.km,
      assigned: this.form.value.assigned,
      delivered: this.form.value.delivered,
      material_id: this.form.value.material_id,
      ubi_id: this.form.value.ubi_id,
    };
  }

  public close(success): void {
    this.dialogRef.close({success});
  }
}
