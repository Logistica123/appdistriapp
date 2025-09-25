import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../../../models/Company';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  companyForm: FormGroup;
  buttonText = 'Aceptar';
  edit = false;
  company: Company;

  constructor(private formBuilder: FormBuilder,
              private companyService: CompanyService,
              public dialogRef: MatDialogRef<CompanyFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required]
    });

    if (data) {
      this.edit = true;
      this.buttonText = 'Editar';
      this.company = data.company;
      this.setCompanyForm();
    }
  }

  ngOnInit() {
  }

  submit() {
    if (!this.edit) {
      this.storeCompany();
    } else {
      this.updateCompany();
    }
  }

  storeCompany() {
    const body = this.setBody();
    this.companyService.storeCompany(body)
      .subscribe((response: any) => {
        this.dialogRef.close({success: true});
      }, error => {

      }, () => {

      });
  }

  updateCompany() {
    const body = this.setBody();
    this.companyService.updateCompany(this.company, body)
      .subscribe((response: any) => {
        this.dialogRef.close({success: true});
      }, error => {

      }, () => {

      });
  }

  setCompanyForm() {
    this.companyForm.controls.name.setValue(this.company.name);
  }

  setBody() {
    return {
      name: this.companyForm.value.name,
    };
  }

  public close(): void {
    this.dialogRef.close({success: false});
  }

}
