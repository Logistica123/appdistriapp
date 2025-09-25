import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Branch } from '../../../models/Branch';
import { BranchService } from '../../../services/branch.service';
import { CompanyService } from '../../../services/company.service';
import { Company } from '../../../models/Company';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  form: FormGroup;
  branch: Branch;
  buttonText = 'Aceptar';
  edit = false;
  submitting = false;
  loading = false;
  companies: Company[] = [];

  constructor(private formBuilder: FormBuilder,
              private branchService: BranchService,
              private companyService: CompanyService,
              public dialogRef: MatDialogRef<BranchFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.formBuilder.group({
      company_id: ['', Validators.required],
      name: ['', Validators.required],
      hour_rate: [''],
      km_rate: [''],
      package_rate: [''],
      fixed_hours: [6],
      plus_km: [100],
      type: [100],
    });

    if (data) {
      this.edit = true;
      this.buttonText = 'Editar';
      this.branch = data.branch;
    }
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.loading = true;
    this.companyService.getCompanies()
      .subscribe((response: any) => {
        this.companies = response.companies;
        if (this.edit) {
          this.setForm();
        }
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  submit() {
    if (!this.edit) {
      this.store();
    } else {
      this.update();
    }
  }

  store() {
    this.submitting = true;
    const body = this.setBody();
    this.branchService.store(body)
      .subscribe((response: any) => {
        this.submitting = false;
        this.close(true);
      }, error => {
        this.submitting = false;
      });
  }

  update() {
    this.submitting = true;
    const body = this.setBody();
    this.branchService.update(this.branch, body)
      .subscribe((response: any) => {
        this.submitting = false;
        this.dialogRef.close({success: true});
      }, error => {
        this.submitting = false;
      });
  }

  setForm() {
    console.log(this.branch);
    this.form.controls.company_id.setValue(this.branch.company.id);
    this.form.controls.name.setValue(this.branch.name);
    this.form.controls.hour_rate.setValue(this.branch.hour_rate);
    this.form.controls.km_rate.setValue(this.branch.km_rate);
    this.form.controls.package_rate.setValue(this.branch.package_rate);
    this.form.controls.package_rate.setValue(this.branch.company.id);
    this.form.controls.fixed_hours.setValue(this.branch.fixed_hours);
    this.form.controls.plus_km.setValue(this.branch.plus_km);
    this.form.controls.type.setValue(this.branch.type.toString());
  }

  setBody() {
    return {
      name: this.form.value.name,
      hour_rate: this.form.value.hour_rate,
      km_rate: this.form.value.km_rate,
      package_rate: this.form.value.package_rate,
      plus_km: this.form.value.plus_km,
      fixed_hours: this.form.value.fixed_hours,
      company_id: this.form.value.company_id,
      type: this.form.value.type,
    };
  }

  public close(success): void {
    this.dialogRef.close({success});
  }
}

