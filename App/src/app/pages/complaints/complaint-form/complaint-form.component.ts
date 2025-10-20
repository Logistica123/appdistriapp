import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ComplaintService } from '../../../services/v1/complaint.service';
import { COMPLAINT_TYPE_OPTIONS } from '../../../constants/complaint-types';

@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.scss']
})
export class ComplaintFormComponent {
  form: FormGroup;
  submitting = false;
  readonly complaintTypes = COMPLAINT_TYPE_OPTIONS;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private complaintService: ComplaintService
  ) {
    this.form = this.formBuilder.group({
      type: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  dismiss(success = false) {
    this.modalController.dismiss({ success });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.complaintService.create(this.form.value).subscribe({
      next: () => this.dismiss(true),
      error: () => {
        this.submitting = false;
      },
      complete: () => {
        this.submitting = false;
      }
    });
  }
}
