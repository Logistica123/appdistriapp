import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../interfaces/Order';
import {OrderService} from '../../../services/v1/order.service';
import {LoadingSpinnerComponent} from '../../../components/loading-spinner/loading-spinner.component';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-journey-detail',
  templateUrl: './journey-detail.page.html',
  styleUrls: ['./journey-detail.page.scss'],
})
export class JourneyDetailPage implements OnInit {
  @Input() order: Order;

  constructor(private orderService: OrderService,
              private loadingSpinnerComponent: LoadingSpinnerComponent,
              private router: Router,
              private alertController: AlertController) {
  }

  ngOnInit() {
    this.orderService.getCurrentOrder$().subscribe(order => {
      if (!order) {
        this.router.navigateByUrl('/');
      } else {
        this.order = order;
      }
    });
  }

  async presentDeleteLocationAlertConfirm() {
    const alert = await this.alertController.create({
      header: '¿Desea eliminar esta ubicación de sus viajes?',
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

  async alertConfirm(status: string) {
    const header = status === 'delivered' ? '¿Confirma que el paquete fue entregado?'
      : '¿Desea saltar la ubicación?';
    const alert = await this.alertController.create({
      header,
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
            this.setOrderStatus(status);
          }
        }
      ]
    });

    await alert.present();
  }

  setOrderStatus(status: string) {
    const body = {
      status
    };
    this.orderService.setOrderStatus(this.order, body)
      .subscribe((response: any) => {
        this.router.navigate(['journey-list']);
      }, error => {
        //
      }, () => {
        //
      });
  }

  deleteOrder() {
    this.orderService.deleteOrder(this.order)
      .subscribe((response: any) => {
        // this.orderService.setUpdatedOrders(true);
        this.router.navigate(['journey-list']);
      }, error => {
        //
      }, () => {
        //
      });
  }
}
