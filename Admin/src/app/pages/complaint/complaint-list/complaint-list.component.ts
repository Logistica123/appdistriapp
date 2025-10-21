import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComplaintService } from '../../../services/complaint.service';
import { Complaint } from '../../../models/Complaint';
import { COMPLAINT_TYPE_LABELS } from '../../../constants/complaint-types';

type ComplaintTypeLabels = typeof COMPLAINT_TYPE_LABELS;

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent implements OnInit {
  complaints: Complaint[] = [];
  displayedColumns = ['type', 'subject', 'message', 'status', 'driver', 'created_at', 'actions'];
  loading = false;
  filterForm: FormGroup;
  readonly typeLabels = COMPLAINT_TYPE_LABELS;

  constructor(private complaintService: ComplaintService,
              private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      status: ['']
    });
  }

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints() {
    this.loading = true;
    const status = this.filterForm.value.status || undefined;
    this.complaintService.list(status).subscribe({
      next: (response: any) => {
        this.complaints = response.complaints || [];
      },
      complete: () => this.loading = false,
      error: () => this.loading = false
    });
  }

  applyFilter() {
    this.loadComplaints();
  }

  updateStatus(complaint: Complaint, status: string) {
    this.complaintService.updateStatus(complaint.id, { status }).subscribe(() => {
      complaint.status = status as Complaint['status'];
    });
  }

  getTypeLabel(type?: string | null): string {
    if (!type) {
      return 'Sin tipo';
    }
    return this.typeLabels[type as keyof ComplaintTypeLabels] ?? 'Sin tipo';
  }
}
