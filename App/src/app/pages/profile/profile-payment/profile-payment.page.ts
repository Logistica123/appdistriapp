import {Component, OnInit} from '@angular/core';
import {PaymentMethodService} from '../../../services/v1/payment-method.service';
import {PaymentMethod} from '../../../interfaces/PaymentMethod';
import {DriverService} from '../../../services/v1/driver.service';

@Component({
  selector: 'app-profile-payment',
  templateUrl: './profile-payment.page.html',
  styleUrls: ['./profile-payment.page.scss'],
})
export class ProfilePaymentPage implements OnInit {
  paymentMethods: PaymentMethod[] = [];
  driverPaymentMethods: PaymentMethod[] = [];
  selectedPaymentMethods: number[] = [];
  loadingPaymentMethods = true;
  loadingDriverPaymentMethods = true;

  constructor(private paymentMethodService: PaymentMethodService,
              private driverService: DriverService) {
  }

  ngOnInit() {
    this.getPaymentMethods();
  }

  getPaymentMethods() {
    this.loadingPaymentMethods = true;
    this.paymentMethodService.getPaymentMethods$()
      .subscribe((response: any) => {
        this.paymentMethods = response;
        this.getDriverPaymentMethods();
        this.loadingPaymentMethods = false;
      }, error => {
        this.loadingPaymentMethods = false;
      });
  }

  getDriverPaymentMethods() {
    this.loadingDriverPaymentMethods = true;
    this.driverService.getPaymentMethods()
      .subscribe((response: any) => {
        this.driverPaymentMethods = response.payment_methods;
        this.markCheckboxes();
      }, error => {
        this.loadingDriverPaymentMethods = false;
      });
  }

  markCheckboxes() {
    this.driverPaymentMethods.map(paymentMethod => {
      const checkbox = document.getElementById('id-' + paymentMethod.id) as HTMLIonCheckboxElement;
      console.log(checkbox);
      if (checkbox) {
        checkbox.checked = true;
      }
    });
    this.loadingDriverPaymentMethods = false;
  }

  checkPaymentMethod(ev, paymentMethod: PaymentMethod) {
    if (ev.detail.checked && this.selectedPaymentMethods.indexOf(paymentMethod.id) <= -1) {
      this.selectedPaymentMethods.push(paymentMethod.id);
    }

    if (!ev.detail.checked && this.selectedPaymentMethods.indexOf(paymentMethod.id) > -1) {
      this.selectedPaymentMethods.splice(this.selectedPaymentMethods.indexOf(paymentMethod.id), 1);
    }
    console.log(this.selectedPaymentMethods);
  }

  submit() {
    console.log(this.selectedPaymentMethods);
    const body = {
      payment_methods_ids: this.selectedPaymentMethods
    };
    this.driverService.updatePaymentMethods(body)
      .subscribe((response: any) => {

      });
  }

}
