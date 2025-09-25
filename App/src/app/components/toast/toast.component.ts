import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {

  constructor(private toastController: ToastController) {
  }

  ngOnInit() {
  }

  async presentToast(message, position, duration = 2000, color = 'dark') {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
      color
    });
    await toast.present();
  }

}
