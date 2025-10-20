import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {Driver} from '../../../interfaces/Driver';
import {DriverService} from '../../../services/v1/driver.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.page.html',
  styleUrls: ['./profile-form.page.scss'],
})
export class ProfileFormPage implements OnInit {
  form: FormGroup;
  @Input() driver: Driver;
  showInputErrorMessage = false;

  constructor(private formBuilder: FormBuilder,
              private modalController: ModalController,
              private driverService: DriverService) {
    this.form = this.formBuilder.group({
      city: ['', Validators.required],
      phone_number: ['', Validators.required],
      bank_cbu: ['', Validators.pattern('^(\\s*|\\d{22})$')],
      bank_owner_is_driver: [true],
      bank_holder_name: ['', Validators.maxLength(255)],
      company: [''],
      license_plate: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.setDriver();
  }

  submit() {
    if (this.form.valid) {
      this.showInputErrorMessage = false;
      this.updateProfile();
    } else {
      this.showInputErrorMessage = true;
    }
  }

  updateProfile() {
    const body = this.setBody();
    this.driverService.updateProfile(body)
      .subscribe(() => {
        this.dismiss(true);
      });
  }

  setDriver() {
    this.form.controls.phone_number.setValue(this.driver.phone_number);
    this.form.controls.city.setValue(this.driver.city);
    this.form.controls.company.setValue(this.driver.company);
    this.form.controls.bank_cbu.setValue(this.driver.bank_cbu || '');
    this.form.controls.bank_owner_is_driver.setValue(this.driver.bank_owner_is_driver !== undefined ? this.driver.bank_owner_is_driver : true);
    this.form.controls.bank_holder_name.setValue(this.driver.bank_holder_name || '');
    this.form.controls.license_plate.setValue(this.driver.license_plate);
  }

  setBody() {
    return {
      city: this.form.value.city,
      phone_number: this.form.value.phone_number,
      company: this.form.value.company,
      license_plate: this.form.value.license_plate,
      bank_cbu: this.form.value.bank_cbu ? this.form.value.bank_cbu.replace(/\s+/g, '') : null,
      bank_owner_is_driver: this.form.value.bank_owner_is_driver,
      bank_holder_name: this.form.value.bank_owner_is_driver ? null : (this.form.value.bank_holder_name ? this.form.value.bank_holder_name.trim() : null),
    };
  }

  dismiss(success) {
    this.modalController.dismiss({success});
  }

  onBankOwnerToggle(event: any) {
    if (event?.detail?.checked) {
      this.form.controls.bank_holder_name.setValue('');
    }
  }

}

