import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Driver} from '../../../interfaces/Driver';
import {DriverService} from '../../../services/v1/driver.service';
import {ModalController} from '@ionic/angular';

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
      company: ['', Validators.required],
      car_make: ['', Validators.required],
      car_model: ['', Validators.required],
      tonnage: ['', Validators.required],
      license_plate: ['', Validators.required],
      cost_per_km: ['', Validators.required],
      cost_per_hour: ['', Validators.required],
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
      .subscribe((response: any) => {
        this.dismiss(true);
      });
  }

  setDriver() {
    this.form.controls.phone_number.setValue(this.driver.phone_number);
    this.form.controls.city.setValue(this.driver.city);
    this.form.controls.company.setValue(this.driver.company);
    this.form.controls.car_make.setValue(this.driver.car_make);
    this.form.controls.car_model.setValue(this.driver.car_model);
    this.form.controls.tonnage.setValue(this.driver.tonnage);
    this.form.controls.license_plate.setValue(this.driver.license_plate);
    this.form.controls.cost_per_hour.setValue(this.driver.cost_per_hour);
    this.form.controls.cost_per_km.setValue(this.driver.cost_per_km);
  }

  setBody() {
    return {
      city: this.form.value.city,
      phone_number: this.form.value.phone_number,
      company: this.form.value.company,
      car_make: this.form.value.car_make,
      car_model: this.form.value.car_model,
      tonnage: this.form.value.tonnage,
      license_plate: this.form.value.license_plate,
      cost_per_hour: this.form.value.cost_per_hour,
      cost_per_km: this.form.value.cost_per_km,
    };
  }

  dismiss(success) {
    this.modalController.dismiss({success});
  }

}
