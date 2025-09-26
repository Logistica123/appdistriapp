import {Component, Input, OnInit} from '@angular/core';
import {LoadingSpinnerComponent} from '../../../components/loading-spinner/loading-spinner.component';
import {Router} from '@angular/router';
import {AlertController, ModalController} from '@ionic/angular';
import {OrderService} from '../../../services/v1/order.service';
import {Order} from '../../../interfaces/Order';
import {ModalEditAddressComponent} from '../modal-edit-address/modal-edit-address.component';
import {OrderManagerService} from '../../../services/v1/order-manager.service';

@Component({
  selector: 'app-urban-distribution-detail',
  templateUrl: './urban-distribution-detail.page.html',
  styleUrls: ['./urban-distribution-detail.page.scss'],
})
export class UrbanDistributionDetailPage implements OnInit {
  @Input() order: Order;

  constructor(private orderService: OrderService,
              private orderManagerService: OrderManagerService,
              private modalController: ModalController,
              private loadingSpinnerComponent: LoadingSpinnerComponent,
              private router: Router,
              private alertController: AlertController) {
  }

  ngOnInit() {
    //
  }

  async presentDeleteLocationAlertConfirm() {
    const alert = await this.alertController.create({
      header: '¿Desea eliminar esta ubicación de su hoja de ruta?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //
          }
        }, {
          text: 'Sí',
          handler: () => {
            this.deleteOrder();
          }
        }
      ]
    });

    await alert.present();
  }

  deleteOrder() {
    this.orderManagerService.deleteOrder(this.order)
      .subscribe((response: any) => {
        this.dismiss(true);
      }, error => {
        //
      }, () => {
        //
      });
  }

  async editAddress() {
    console.log(this.order.location);
    const modal = await this.modalController.create({
      component: ModalEditAddressComponent,
      componentProps: {order: this.order}
    });
    await modal.present();
    const {data} = await modal.onDidDismiss();
    console.log(data);
  }

  dismiss(success) {
    this.modalController.dismiss({success});
  }
}
