import {Component, OnInit} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  loadingSpinner: any;

  constructor(private loadingController: LoadingController) {
  }

  ngOnInit() {
  }

  async presentLoadingSpinner(message = null) {
    this.loadingSpinner = await this.loadingController.create({
      spinner: 'lines',
      cssClass: 'loading',
      message,
      duration: 60000
    });
    await this.loadingSpinner.present();
  }

  async dismissLoadingSpinner() {
    await this.loadingSpinner.dismiss();
  }

}
