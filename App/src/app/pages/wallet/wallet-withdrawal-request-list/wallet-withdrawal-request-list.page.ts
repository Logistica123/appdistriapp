import { Component, OnInit } from '@angular/core';
import {WithdrawalRequest} from '../../../interfaces/WithdrawalRequest';
import {WithdrawalRequestService} from '../../../services/v1/withdrawal-request.service';
import {ModalController} from '@ionic/angular';
import {WalletWithdrawalRequestFormPage} from '../wallet-withdrawal-request-form/wallet-withdrawal-request-form.page';

@Component({
  selector: 'app-wallet-withdrawal-request-list',
  templateUrl: './wallet-withdrawal-request-list.page.html',
  styleUrls: ['./wallet-withdrawal-request-list.page.scss'],
})
export class WalletWithdrawalRequestListPage implements OnInit {
  withdrawalRequests: WithdrawalRequest[] = [];
  loading = true;

  constructor(private withdrawalRequestService: WithdrawalRequestService,
              private modalController: ModalController) {
  }

  ngOnInit() {
    this.getWithdrawalRequest();
  }

  getWithdrawalRequest() {
    this.loading = true;
    this.withdrawalRequestService.getWithdrawalRequests()
      .subscribe((response: any) => {
        this.withdrawalRequests = response.withdrawal_requests;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  async addWithdrawalRequest() {
    const modal = await this.modalController.create({
      component: WalletWithdrawalRequestFormPage,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data?.success) {
      this.getWithdrawalRequest();
    }
  }

}
