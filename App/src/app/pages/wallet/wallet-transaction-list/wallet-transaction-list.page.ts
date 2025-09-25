import {Component, OnInit} from '@angular/core';
import {Transaction} from '../../../interfaces/Transaction';
import {TransactionService} from '../../../services/v2/transaction.service';
import {WalletWithdrawalRequestFormPage} from '../wallet-withdrawal-request-form/wallet-withdrawal-request-form.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-wallet-transaction-list',
  templateUrl: './wallet-transaction-list.page.html',
  styleUrls: ['./wallet-transaction-list.page.scss'],
})
export class WalletTransactionListPage implements OnInit {
  transactions: Transaction[] = [];
  loading = true;
  amount: number;

  constructor(private transactionService: TransactionService,
              private modalController: ModalController) {
  }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.loading = true;
    this.transactionService.getTransactions()
      .subscribe((response: any) => {
        this.transactions = response.transactions;
        this.amount = response.amount;
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
      this.getTransactions();
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getTransactions();
      event.target.complete();
    }, 2000);
  }

}
