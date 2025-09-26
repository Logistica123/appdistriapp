import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../../interfaces/Order';
import {Geoposition} from '@ionic-native/geolocation';
import {AlertController, IonReorderGroup, LoadingController, ModalController} from '@ionic/angular';
import {LocationService} from '../../../services/v1/location.service';
import {GeolocationService} from '../../../services/v1/geolocation.service';
import {Router} from '@angular/router';
import {OrderService} from '../../../services/v1/order.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {FormControl} from '@angular/forms';
import {DeliveryMapPage} from '../../delivery-map/delivery-map.page';
import {ToastComponent} from '../../../components/toast/toast.component';
import {JourneyDetailPage} from '../journey-detail/journey-detail.page';
import {JourneyFormPage} from '../journey-form/journey-form.page';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.page.html',
  styleUrls: ['./journey-list.page.scss'],
})
export class JourneyListPage implements OnInit, AfterViewInit {
  orders: Order[] = [];
  dateFC = new FormControl();
  date = new Date();
  driverPosition: Geoposition;
  @ViewChild(IonReorderGroup, {static: true}) reorderGroup: IonReorderGroup;
  loading = true;
  optimizingOrders = false;

  constructor(private modalController: ModalController,
              private locationService: LocationService,
              private alertController: AlertController,
              private loadingController: LoadingController,
              private geolocation: Geolocation,
              private toastComponent: ToastComponent,
              private geolocationService: GeolocationService,
              private router: Router,
              private orderService: OrderService) {
  }

  ngOnInit() {
    //
  }

  ngAfterViewInit() {
    this.date = new Date();
    this.dateFC.setValue(this.date.toISOString());
    this.getOrdersByDate();
  }

  doReorder(ev: any) {
    this.swapArrayElement(ev.detail.from, ev.detail.to);
    ev.detail.complete();
  }

  swapArrayElement(from: number, to: number) {
    const temp = this.orders[from];
    this.orders[from] = this.orders[to];
    this.orders[to] = temp;
  }

  async addLocation() {
    const modal = await this.modalController.create({
      component: JourneyFormPage
    });
    await modal.present();
    const {data} = await modal.onDidDismiss();
    if (data?.hasNewOrder) {
      this.getOrdersByDate();
    }
  }

  async viewOrderDetail(order: Order) {
    const modal = await this.modalController.create({
      component: JourneyDetailPage,
      componentProps: {order},
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data?.success) {
      //
    }
  }

  getOrdersByDate() {
    console.log('getting orders by date...');
    this.orders = [];
    this.loading = true;
    const day = this.date.getDate();
    const month = this.date.getMonth() + 1;
    const year = this.date.getFullYear();
    this.orderService.getOrdersByDate('journey', day, month, year)
      .subscribe((response: any) => {
        this.orders = response.orders;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  onDateChange(event) {
    this.date = new Date(event.detail.value);
    this.getOrdersByDate();
  }

  async showMap() {
    if (this.orders.length <= 0) {
      const alert = await this.alertController.create({
        message: 'No tienes paquetes pendientes por entregar',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const modal = await this.modalController.create({
        component: DeliveryMapPage,
        componentProps: {orders: this.orders}
      });

      await modal.present();

      const {data} = await modal.onDidDismiss();
      this.getOrdersByDate();
    }
  }

  checkDriverPosition() {
    console.log(this.geolocationService.getDriverPosition());
    this.driverPosition = this.geolocationService.getDriverPosition();
    if (!(this.driverPosition?.coords?.latitude && this.driverPosition?.coords?.longitude)) {
      this.geolocationService.getCurrentPosition().then((driverPosition: any) => {
        this.driverPosition = driverPosition;

        if (!(this.driverPosition?.coords?.latitude && this.driverPosition?.coords?.longitude)) {
          this.toastComponent.presentToast(
            `No se pudo obtener ubicación actual. Por favor concede los permisos
          para que la aplicación pueda utilizar el GPS de su dispositivo móvil`,
            'middle',
            3500
          );
          return false;
        } else {
          return true;
        }
      });
    } else {
      return true;
    }
  }

  checkUndeliveredOrders() {
    const undeliveredOrders = this.orders.filter(order => order.status !== 'delivered');

    if (undeliveredOrders.length <= 0) {
      this.toastComponent.presentToast(
        `No hay paquetes pendientes por entregar`,
        'middle',
        3500
      );
    }

    return undeliveredOrders;
  }


  async optimizeOrders() {
    const undeliveredOrders = this.checkUndeliveredOrders();

    if (this.checkDriverPosition() && undeliveredOrders.length > 0) {
      const body = {
        lat: this.driverPosition.coords.latitude,
        lng: this.driverPosition.coords.longitude,
        orders_ids: undeliveredOrders.map(order => order.id),
      };
      console.log(body);
      this.optimizingOrders = true;
      this.orderService.optimizeOrders(body)
        .subscribe((response: any) => {
          this.orders = response.orders;
          this.optimizingOrders = false;
          this.toastComponent.presentToast(
            `Ruta optimizada`,
            'bottom',
            3500
          );
        }, error => {
          this.optimizingOrders = false;
        });
    }
  }

  async presentDeleteOrderAlertConfirm(order: Order) {
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
            this.deleteOrder(order);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteOrder(order: Order) {
    this.orderService.deleteOrder(order)
      .subscribe((response: any) => {
        this.getOrdersByDate();
      });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getOrdersByDate();
      event.target.complete();
    }, 2000);
  }
}
