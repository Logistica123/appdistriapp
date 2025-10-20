import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InsuranceRequestService } from '../../../services/insurance-request.service';
import { InsuranceRequest } from '../../../models/InsuranceRequest';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {
  insuranceRequests: InsuranceRequest[] = [];
  displayedColumns = ['driver', 'company', 'insurance_type', 'status', 'notes', 'created_at'];
  loading = false;
  filterForm: FormGroup;

  constructor(private insuranceRequestService: InsuranceRequestService,
              private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      status: ['']
    });
  }

  ngOnInit(): void {
    this.loadInsuranceRequests();
  }

  loadInsuranceRequests() {
    this.loading = true;
    const status = this.filterForm.value.status || undefined;
    this.insuranceRequestService.list(status).subscribe({
      next: (response: any) => {
        this.insuranceRequests = response.insurance_requests || [];
      },
      error: () => {
        this.insuranceRequests = [];
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  applyFilter() {
    this.loadInsuranceRequests();
  }

  getDriverName(request: InsuranceRequest): string {
    if (!request.driver) {
      return 'Sin asignar';
    }
    return `${request.driver.name} ${request.driver.last_name}`.trim();
  }

  getCompanyName(request: InsuranceRequest): string {
    return request.driver?.driver_company?.name || 'Sin empresa';
  }
}
