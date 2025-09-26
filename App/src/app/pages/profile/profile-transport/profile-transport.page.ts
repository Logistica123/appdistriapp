import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DriverService} from '../../../services/v1/driver.service';
import {subscribeOn} from 'rxjs/operators';
import {Driver} from '../../../interfaces/Driver';

@Component({
  selector: 'app-profile-transport',
  templateUrl: './profile-transport.page.html',
  styleUrls: ['./profile-transport.page.scss'],
})
export class ProfileTransportPage implements OnInit {
  form: FormGroup;
  driver: Driver;
  showInputErrorMessage = false;

  constructor(private formBuilder: FormBuilder,
              private driverService: DriverService) {
    this.form = this.formBuilder.group({

    });
  }

  ngOnInit() {
    this.getDriver();
  }

  getDriver() {
    this.driverService.getDriver$()
      .subscribe((response: any) => {
        this.driver = response;
        this.setDriver();
      });
  }

  setDriver() {
    this.form.controls.car_make.setValue(this.driver.car_make);
    this.form.controls.car_model.setValue(this.driver.car_model);
    this.form.controls.tonnage.setValue(this.driver.tonnage);
    this.form.controls.license_plate.setValue(this.driver.license_plate);
  }

}
