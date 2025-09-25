import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DriverService} from '../../../services/v1/driver.service';
import {ModalController} from '@ionic/angular';
import {LoadingSpinnerComponent} from '../../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent implements OnInit {
  updatePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private driverService: DriverService,
              private loadingSpinnerComponent: LoadingSpinnerComponent,
              private modalController: ModalController) {
    this.updatePasswordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  submitForm() {
    const body = {
      old_password: this.updatePasswordForm.value.oldPassword,
      password: this.updatePasswordForm.value.password,
      password_confirmation: this.updatePasswordForm.value.passwordConfirmation,
    };

    this.driverService.updatePassword(body)
      .subscribe((response: any) => {
        //
      }, error => {
        //
      }, () => {
        this.modalController.dismiss({success: true});
      });
  }

}
