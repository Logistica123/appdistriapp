import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DriverService} from '../../../services/v1/driver.service';
import {LoadingSpinnerComponent} from '../../loading-spinner/loading-spinner.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-update-phone-number',
  templateUrl: './update-phone-number.component.html',
  styleUrls: ['./update-phone-number.component.scss'],
})
export class UpdatePhoneNumberComponent implements OnInit {
  phoneNumberForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private modalController: ModalController,
              private loadingSpinnerComponent: LoadingSpinnerComponent,
              private driverService: DriverService) {
    this.phoneNumberForm = this.formBuilder.group({
      phoneNumber: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm() {
    this.loadingSpinnerComponent.presentLoadingSpinner().then(() => {
      const body = {
        phone_number: this.phoneNumberForm.value.phoneNumber
      };

      this.driverService.updatePhoneNumber(body)
        .subscribe((response: any) => {

        }, error => {
          this.loadingSpinnerComponent.dismissLoadingSpinner();
        }, () => {
          this.loadingSpinnerComponent.dismissLoadingSpinner().then(() => {
            this.modalController.dismiss({success: true});
          });
        });
    });
  }

}
