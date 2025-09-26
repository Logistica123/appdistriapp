import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Company } from '../../../models/Company';
import { CompanyService } from '../../../services/company.service';
import { DriverService } from '../../../services/driver.service';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Driver } from '../../../models/Driver';

@Component({
  selector: 'app-company-select-dialog',
  templateUrl: './company-select-dialog.component.html',
  styleUrls: ['./company-select-dialog.component.css']
})
export class CompanySelectDialogComponent implements OnInit {
  driver: Driver;
  companyFC = new FormControl();
  companies: Company[] = [];

  constructor(public dialogRef: MatDialogRef<CompanySelectDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private companyService: CompanyService,
              private driverService: DriverService) {
    if (data) {
      this.driver = data.driver;
    }
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies()
      .subscribe((response: any) => {
        this.companies = response.companies;
        if (this.companies.length > 0) {
          this.companyFC.setValue(this.companies[0].id);
        }
      });
  }

  submit() {
    const body = {
      company_id: this.companyFC.value
    };
    this.driverService.assignCompanyToDriver(this.driver, body)
      .subscribe((response: any) => {
        this.close(true);
      });
  }

  close(success) {
    this.dialogRef.close({success});
  }

}
