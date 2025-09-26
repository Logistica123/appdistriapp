import {Component, OnInit} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {PopoverAlertComponent} from '../../../popover-alert/popover-alert.component';

@Component({
  selector: 'app-control-tabs',
  templateUrl: './control-tabs.page.html',
  styleUrls: ['./control-tabs.page.scss'],
})
export class ControlTabsPage implements OnInit {
  message = '';
  constructor(private popoverController: PopoverController,
              private modalController: ModalController) {
  }

  ngOnInit() {
    console.log('control-tabs');
    // this.showModal();
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: PopoverAlertComponent,
      componentProps: {message: this.message},
      cssClass: 'modal-alert'
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    console.log(data);
    if (!data?.success) {
    }
  }
}
