import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {WithdrawalRequestService} from '../../../services/v1/withdrawal-request.service';

@Component({
  selector: 'app-wallet-withdrawal-request-form',
  templateUrl: './wallet-withdrawal-request-form.page.html',
  styleUrls: ['./wallet-withdrawal-request-form.page.scss'],
})
export class WalletWithdrawalRequestFormPage implements OnInit {
  form: FormGroup;
  showInputErrorMessage = false;
  submitting = false;

  constructor(private formBuilder: FormBuilder,
              private withdrawalRequestService: WithdrawalRequestService,
              private modalController: ModalController) {
    this.form = this.formBuilder.group({
      type: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.showInputErrorMessage = false;
      this.storeWithdrawalRequest();
    } else {
      this.showInputErrorMessage = true;
    }
  }

  storeWithdrawalRequest() {
    this.submitting = true;
    const body = this.setBody();
    this.withdrawalRequestService.storeWithdrawalRequest(body)
      .subscribe((response: any) => {
        this.submitting = false;
        this.form.reset();
        this.dismiss(true);
      }, error => {
        this.submitting = false;
      });
  }

  dismiss(success) {
    this.modalController.dismiss({success});
  }

  setBody() {
    return {
      amount: this.form.value.amount,
      type: this.form.value.type
    };
  }

}
