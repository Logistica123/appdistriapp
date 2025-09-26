import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonReorderGroup, LoadingController, ModalController, PopoverController} from '@ionic/angular';
import {OrderService} from '../../../services/v1/order.service';
import {Order} from '../../../interfaces/Order';
import {LocationService} from '../../../services/v1/location.service';
import {LoadingSpinnerComponent} from '../../../components/loading-spinner/loading-spinner.component';
import {Router} from '@angular/router';
import {GeolocationService} from '../../../services/v1/geolocation.service';
import {Geoposition} from '@ionic-native/geolocation';
import {EditUrbanDistributionComponent} from '../../../components/modals/edit-urban-distribution/edit-urban-distribution.component';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {ToastComponent} from '../../../components/toast/toast.component';
import {FormControl} from '@angular/forms';
import {UrbanDistributionFormPage} from '../urban-distribution-form/urban-distribution-form.page';
import {NetworkService} from '../../../services/utils/network.service';
import {OrderManagerService} from '../../../services/v1/order-manager.service';
import {SyncDataLoadingComponent} from '../../../components/modals/sync-data-loading/sync-data-loading.component';
import {Storage} from '@ionic/storage';
import {OfflineOrderManagerService} from '../../../services/v1/offline-order-manager.service';
import {ModeService} from '../../../services/utils/mode.service';
import {ModeStatus} from '../../../interfaces/ModeStatus';
import {SyncService} from '../../../services/utils/sync.service';
import {GeocodeService} from '../../../services/v1/geocode.service';
import * as Papa from 'papaparse';
import {toPromise} from '../../../utils/to-promise';

@Component({
  selector: 'app-urban-distribution-list',
  templateUrl: './urban-distribution-list.page.html',
  styleUrls: ['./urban-distribution-list.page.scss'],
})
export class UrbanDistributionListPage implements OnInit, AfterViewInit {
  orders: Order[] = [];
  optimizingOrders = false;
  loading = true;
  dateFC = new FormControl();
  date = new Date();
  driverPosition: Geoposition;
  driverCityFallback = 'Corrientes';
  networkModeToggleFC = new FormControl();
  deletingOrder = false;
  @ViewChild(IonReorderGroup) ionReorderGroup;
  @ViewChild('csvInput') csvInput: ElementRef<HTMLInputElement>;
  importing = false;

  constructor(private modalController: ModalController,
              private popoverController: PopoverController,
              private locationService: LocationService,
              private alertController: AlertController,
              private loadingController: LoadingController,
              private toastComponent: ToastComponent,
              private geolocation: Geolocation,
              private orderManagerService: OrderManagerService,
              private geolocationService: GeolocationService,
              private loadingSpinnerComponent: LoadingSpinnerComponent,
              private modeService: ModeService,
              private router: Router,
              private offlineOrderManagerService: OfflineOrderManagerService,
              private networkService: NetworkService,
              private storage: Storage,
              private syncService: SyncService,
              private orderService: OrderService,
              private geocodeService: GeocodeService) {
  }

  ngOnInit() {
    this.checkWatchLocationsSubscription();

    this.offlineOrderManagerService.getSendingReqs$().subscribe(sendingRequests => {
      console.log('SENDING REQ IN URBAN DISTR LIST', sendingRequests);
      if (sendingRequests) {
        this.openSyncDataLoadingPopover();
      }
    });
  }

  ngAfterViewInit() {
    this.date = new Date();
    this.dateFC.setValue(this.date.toISOString());
    this.networkModeToggleFC.setValue(1);
    this.getOrdersByDate();
  }

  checkWatchLocationsSubscription() {
    if (!this.geolocationService.checkWatchLocationsSubscription()) {
      this.geolocationService.watchPosition();
    }
  }

  getOrdersByDate() {
    this.orders = [];
    this.loading = true;
    const day = this.date.getDate();
    const month = this.date.getMonth() + 1;
    const year = this.date.getFullYear();
    this.orderManagerService.getOrdersByDate('urban-distribution', day, month, year)
      .subscribe((response: any) => {
        this.orders = response;
        this.updateDriverCityFallback();
        this.orderManagerService.setOrders$(this.orders);
        this.ionReorderGroup.complete(this.orders);
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  doReorder(ev: CustomEvent) {
    const from = ev.detail.from;
    const to = ev.detail.to;

    if (from === to) {
      ev.detail.complete(true);
      return;
    }

    const moved = this.orders.splice(from, 1)[0];
    this.orders.splice(to, 0, moved);

    ev.detail.complete(true);

    // Refleja el nuevo orden en los observables usados por el mapa y otras vistas.
    this.orderManagerService.setOrders$(this.orders);
  }

  openCsvImporter() {
    if (this.csvInput?.nativeElement) {
      this.csvInput.nativeElement.value = '';
      this.csvInput.nativeElement.click();
    }
  }

  onCsvSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files.length > 0 ? input.files[0] : null;

    if (!file) {
      return;
    }

    this.importing = true;
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (result) => {
        const rows = (result.data as any[]).filter(row => this.hasContent(row));
        await this.processCsvRows(rows);
        this.importing = false;
        if (this.csvInput?.nativeElement) {
          this.csvInput.nativeElement.value = '';
        }
      },
      error: () => {
        this.importing = false;
        this.toastComponent.presentToast('No se pudo leer el archivo CSV', 'bottom', 3500);
        if (this.csvInput?.nativeElement) {
          this.csvInput.nativeElement.value = '';
        }
      }
    });
  }

  private hasContent(row: any): boolean {
    if (!row || typeof row !== 'object') {
      return false;
    }
    return Object.keys(row).some(key => {
      const value = row[key];
      return value !== null && value !== undefined && `${value}`.trim() !== '';
    });
  }

  private async processCsvRows(rows: any[]) {
    if (!rows.length) {
      this.toastComponent.presentToast('El archivo CSV está vacío', 'bottom', 3500);
      return;
    }

    let success = 0;
    let failed = 0;

    for (const row of rows) {
      try {
        await this.importRow(row);
        success++;
      } catch (err) {
        console.error('Error importing CSV row', row, err);
        failed++;
      }
    }

    if (success > 0) {
      this.getOrdersByDate();
    }

    const message = `Importadas ${success}. ${failed > 0 ? 'Fallidas ' + failed + '.' : ''}`;
    this.toastComponent.presentToast(message, 'bottom', 4000);
  }

  private async importRow(row: any) {
    const address = (row.address || row.direccion || row.direccion || '').toString().trim();
    let city = (row.city || row.ciudad || '').toString().trim();

    if (!address) {
      throw new Error('Fila sin dirección');
    }

    if (!city) {
      city = this.extractCityFromAddress(address)
        || this.driverCityFallback
        || 'Corrientes';
    }

    let lat = parseFloat(row.lat);
    let lng = parseFloat(row.lng);

    if (isNaN(lat) || isNaN(lng)) {
      const country = (row.country || row.pais || 'Argentina').toString().trim();
      const query = `${address}, ${city}`;
      try {
        const coords = await this.geocodeService.mapQuestGeocode(query, country);
        lat = coords.lat;
        lng = coords.lng;
      } catch (error) {
        const coords = await this.geocodeService.GMGeocodeAddress(query, country);
        lat = coords.lat;
        lng = coords.lng;
      }
    }

    if (isNaN(lat) || isNaN(lng)) {
      throw new Error('No se pudieron obtener coordenadas');
    }

    const body = {
      type: 'urban-distribution',
      name: (row.location_name || row.name || address).toString().trim(),
      address,
      city,
      company_name: (row.company_name || row.receiver || '').toString().trim(),
      details: (row.details || row.description || '').toString().trim(),
      phone: (row.phone || row.telefono || '').toString().trim(),
      date: this.normalizeDate(row.date),
      locality: (row.locality || row.localidad || null) || null,
      administrative_area_level_1: (row.administrative_area_level_1 || row.provincia || null) || null,
      administrative_area_level_2: (row.administrative_area_level_2 || row.partido || null) || null,
      lat,
      lng,
      flag_color: (row.flag_color || row.color || '#FF4051').toString().trim() || '#FF4051',
      b: (row.b || row.barrio || '').toString().trim(),
      v: (row.v || row.viv || '').toString().trim(),
      s: (row.s || row.sec || '').toString().trim(),
      m: (row.m || row.mz || '').toString().trim(),
      c: (row.c || row.casa || '').toString().trim()
    };

    await toPromise(this.orderManagerService.storeLocation(body));
  }

  private normalizeDate(value: any): string {
    if (!value) {
      return this.formatDate(this.date);
    }

    const raw = value.toString().trim();
    if (!raw) {
      return this.formatDate(this.date);
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
      return raw;
    }

    if (/^\d{2}\/\d{2}\/\d{4}$/.test(raw)) {
      const [day, month, year] = raw.split('/');
      return `${year}-${month}-${day}`;
    }

    if (/^\d{2}-\d{2}-\d{4}$/.test(raw)) {
      const [day, month, year] = raw.split('-');
      return `${year}-${month}-${day}`;
    }

    return this.formatDate(this.date);
  }

  private formatDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }

  private extractCityFromAddress(address: string): string | null {
    if (!address) {
      return null;
    }

    const parts = address.split(',').map(part => part.trim()).filter(part => part.length > 0);
    if (parts.length >= 2) {
      return parts[parts.length - 1];
    }

    return null;
  }

  private updateDriverCityFallback() {
    const cityFromOrders = this.orders?.find(order => order?.location?.city)?.location?.city;
    if (cityFromOrders) {
      this.driverCityFallback = cityFromOrders;
      return;
    }

    if (!this.driverCityFallback || this.driverCityFallback.trim().length === 0) {
      this.driverCityFallback = 'Corrientes';
    }
  }

  async addLocation() {
    const modal = await this.modalController.create({
      component: UrbanDistributionFormPage,
      componentProps: {networkStatus: this.networkModeToggleFC.value ? this.networkModeToggleFC.value : false}
    });
    await modal.present();
    const {data} = await modal.onDidDismiss();
    if (data?.hasNewOrder) {
      this.getOrdersByDate();
    }
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
      this.orderService.setCurrentOrders$(this.orders);
      this.updateDriverCityFallback();
      this.router.navigateByUrl('delivery-map/urban-distribution');
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
    console.log(this.orders.length);
    const undeliveredOrders = this.orders.filter(order => order.status !== 'delivered');
    console.log(undeliveredOrders.length);

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
          console.log(response);
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

  async editOrder(order: Order) {
    const modal = await this.modalController.create({
      component: EditUrbanDistributionComponent,
      componentProps: {order},
      // cssClass: 'modal-edit-urban-distribution'
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data && data.success) {
      this.getOrdersByDate();
    }
  }

  deleteOrder(order: Order) {
    this.deletingOrder = true;
    this.orderManagerService.deleteOrder(order)
      .subscribe((response: any) => {
        this.deletingOrder = false;
        this.getOrdersByDate();
      }, error => {
        this.deletingOrder = false;
      });
  }

  deletedOrderEvent(order: Order) {
    this.orders = this.orders.filter(o => o.id !== order.id);
    // this.orderService.setOrdersUpdated$(true);
  }

  async openSyncDataLoadingPopover() {
    const popover = await this.popoverController.create({
      component: SyncDataLoadingComponent
    });

    await popover.present();
    const {data} = await popover.onDidDismiss();
    console.log(data);
    console.log('urban list dissmissssed');
    if (data?.success) {
      this.getOrdersByDate();
    }
  }

  async setModeStatus(ev) {
    const status = ev.detail.checked ? ModeStatus.Online : ModeStatus.Offline;
    this.modeService.updateModeStatus(status);

    if (status === ModeStatus.Online) { // if status changes from offline to online, then i sync with server
      console.log('debo sincronizar');
      this.openSyncDataLoadingPopover();
      this.syncService.sync();
    } else { // if status changes from online to offline, then i store current orders in localstorage
      console.log('debo guardar en localstorage');
      this.orderManagerService.storeOrdersInLocalStorage(this.orders)
        .then(orders => {
          console.log('orders in storage', orders);
        });
    }
  }

  swipeEvent(ev) {
    //
  }

  dragEvent(ev) {
    //
  }

  setDeliveryOrderToOrders() {
    const body = {
      ordersIds: this.orders.map(order => order.id)
    };
    this.orderService.setDeliveryOrderToOrders(body)
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
