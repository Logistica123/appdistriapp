import {Component, Input, OnInit} from '@angular/core';
import {ReminderService} from '../../../services/v1/reminder.service';
import {Reminder} from '../../../interfaces/Reminder';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.page.html',
  styleUrls: ['./reminder-form.page.scss'],
})
export class ReminderFormPage implements OnInit {
  @Input() reminder: Reminder;
  form: FormGroup;
  showInputErrorMessage = false;
  submitting = false;

  constructor(private reminderService: ReminderService,
              private formBuilder: FormBuilder,
              private modalController: ModalController) {
    this.form = this.formBuilder.group({
      description: ['', Validators.required],
      date: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.reminder) {
      this.setReminder();
    } else {
      this.form.controls.type.setValue('once');
    }
  }

  submit() {
    if (this.form.valid) {
      this.showInputErrorMessage = false;
      this.reminder ? this.updateReminder() : this.storeReminder();
    } else {
      this.showInputErrorMessage = true;
    }
  }

  storeReminder() {
    this.submitting = true;
    const body = this.setBody();
    this.reminderService.storeReminder(body)
      .subscribe((response: any) => {
        this.submitting = false;
        this.form.reset();
        this.dismiss(true);
      }, error => {
        this.submitting = false;
      });
  }

  updateReminder() {
    this.submitting = true;
    const body = this.setBody();
    this.reminderService.updateReminder(this.reminder, body)
      .subscribe((response: any) => {
        this.submitting = false;
        this.form.reset();
        this.dismiss(true);
      }, error => {
        this.submitting = false;
      });
  }

  setReminder() {
    this.form.controls.description.setValue(this.reminder.description);
    this.form.controls.date.setValue(this.normalizeInputDate(this.reminder.date));
    this.form.controls.type.setValue(this.reminder.type);
  }

  dismiss(success) {
    this.modalController.dismiss({success});
  }

  setBody() {
    return {
      description: this.form.value.description,
      date: this.normalizeInputDate(this.form.value.date),
      type: this.form.value.type,
    };
  }

  private normalizeInputDate(value: string): string {
    if (!value) {
      return '';
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return value;
    }

    const parsed = new Date(value);
    if (!isNaN(parsed.getTime())) {
      const offsetDate = new Date(parsed.getTime() - parsed.getTimezoneOffset() * 60000);
      return offsetDate.toISOString().slice(0, 10);
    }

    return value;
  }


}
