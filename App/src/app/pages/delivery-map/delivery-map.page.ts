import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../../services/v1/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../interfaces/Order';
import {GeolocationService} from '../../services/v1/geolocation.service';
import {IonTabs, ModalController, PopoverController} from '@ionic/angular';
import {DeliverOrderComponent} from '../../components/modals/deliver-order/deliver-order.component';
import {CallNumberService} from '../../services/utils/call-number.service';
import {NotDeliveredComponent} from '../../components/modals/not-delivered/not-delivered.component';
import {Geoposition} from '@ionic-native/geolocation';
import {Circle, Environment, GoogleMap, GoogleMapOptions, GoogleMaps, ILatLng, Marker} from '@ionic-native/google-maps';
import {DeliveryPrioritySelectComponent} from '../../components/popovers/delivery-priority-select/delivery-priority-select.component';
import {Driver} from '../../interfaces/Driver';
import {DriverService} from '../../services/v1/driver.service';
import {Subscription} from 'rxjs';

declare var google;

@Component({
  selector: 'app-delivery-map',
  templateUrl: './delivery-map.page.html',
  styleUrls: ['./delivery-map.page.scss'],
})
export class DeliveryMapPage implements OnInit, AfterViewInit, OnDestroy {
  orders: Order[];
  nearbyOrders: Order[];
  driverPosition: Geoposition;
  currentOrder: Order;
  selectedOrder: Order;
  currentOrderIndex = 0;
  driverGeolocationSubscription: any;
  driverProfileSubscription: any;
  driverProfileRequestSubscription: Subscription;
  currentOrdersSubscription: any;
  notDeliveringOrder = false;
  deliveringOrder = false;
  skipping = false;
  radius = 1500;
  showAllMarkersFlag = false;
  type: string;
  markersOrders: Order[] = [];
  ordersOptimized = false;
  showCelebration = false;
  initialOrdersCount = 0;
  completedOrdersCount = 0;
  savedClientsCount = 0;
  startTime = Date.now();
  soundEnabled = true;
  confettiPieces = Array.from({length: 50}, (_, index) => index);
  celebrationSummary = {completed: 0, total: 0, saved: 0, duration: ''};
  private driverProfile: Driver | null = null;
  private requestedDriverProfile = false;
  savedStartPosition: Geoposition | null = null;
  latestGpsPosition: Geoposition | null = null;
  useSavedStartLocation = false;
  private startSourceManuallySelected = false;

  // @ViewChild('deliveryMap', {static: true}) mapElement: ElementRef;
  // map: GoogleMap;
  // driverMarker: Marker;
  // markers: Marker[] = [];
  // circle: Circle;

  constructor(private orderService: OrderService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private callNumberService: CallNumberService,
              private modalController: ModalController,
              private popoverController: PopoverController,
              private geolocationService: GeolocationService,
              private driverService: DriverService) {
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
  }

  ngOnInit() {
    //
  }

  ngAfterViewInit() {
    this.currentOrdersSubscription = this.orderService.getCurrentOrders$()
      .subscribe(orders => {
        if (!orders) {
          return;
        }
        this.orders = orders;
        if (this.initialOrdersCount === 0 && this.orders?.length) {
          this.initialOrdersCount = this.orders.length;
          this.startTime = Date.now();
          this.completedOrdersCount = 0;
          this.savedClientsCount = 0;
        }
        if (this.initialOrdersCount > 0) {
          this.completedOrdersCount = this.initialOrdersCount - (this.orders?.length || 0);
          if (this.completedOrdersCount < 0) {
            this.completedOrdersCount = 0;
          }
        }
        this.ordersOptimized = false;
        console.log(this.orders);
        this.tryOptimizeOrders();
        this.currentOrder = this.orders[this.currentOrderIndex];
        this.selectedOrder = this.currentOrder;
        console.log(this.currentOrder);
        this.findNearbyMarkers();
      });

    this.checkWatchLocationsSubscription();

    this.driverPosition = this.geolocationService.getDriverPosition();
    if (this.driverPosition) {
      this.latestGpsPosition = this.driverPosition;
    }
    this.applyDriverStartLocationFallback();
    this.driverGeolocationSubscription = this.geolocationService.driverPosition$
      .subscribe(driverPosition => {
        if (driverPosition) {
          this.latestGpsPosition = driverPosition;
          if (!this.useSavedStartLocation) {
            this.driverPosition = driverPosition;
            this.tryOptimizeOrders();
          }
        }
      });

    this.driverProfileSubscription = this.driverService.getDriver$()
      .subscribe(driver => {
        if (driver) {
          this.applyDriverStartLocationFallback(driver);
        }
      });

    this.driverProfile = this.driverService.getDriverSnapshot();
    if (this.driverProfile) {
      this.applyDriverStartLocationFallback(this.driverProfile);
    } else if (!this.requestedDriverProfile) {
      this.requestedDriverProfile = true;
      this.driverProfileRequestSubscription = this.driverService.getProfile().subscribe();
    }
  }

  ngOnDestroy(): void {
    if (this.driverGeolocationSubscription) {
      this.driverGeolocationSubscription.unsubscribe();
    }

    if (this.currentOrdersSubscription) {
      this.currentOrdersSubscription.unsubscribe();
    }

    if (this.driverProfileSubscription) {
      this.driverProfileSubscription.unsubscribe();
    }

    if (this.driverProfileRequestSubscription) {
      this.driverProfileRequestSubscription.unsubscribe();
    }
  }


  checkWatchLocationsSubscription() {
    console.log(this.geolocationService.checkWatchLocationsSubscription());
    if (!this.geolocationService.checkWatchLocationsSubscription()) {
      this.geolocationService.watchPosition();
    }
  }

  viewDeliveryOrderMap() {
    // this.showAllMarkers = !this.showAllMarkers;
    // this.nearbyOrders = this.orders;
    this.router.navigateByUrl('all-orders-map');
  }

  selectOrder(ev) {
    this.selectedOrder = ev;
    console.log(this.selectedOrder);
  }

  async deliverOrder() {
    const modal = await this.modalController.create({
      component: DeliverOrderComponent,
      componentProps: {order: this.selectedOrder},
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data?.success) {
      if (data?.saveClient) {
        this.savedClientsCount += 1;
      }
      this.selectedOrder.status = 'delivered';
      this.selectedOrder.status_es = 'entregada';
      this.goToNextOrder(true);
    }
  }

  async showNotDeliverOptions() {
    const modal = await this.modalController.create({
      component: NotDeliveredComponent,
      cssClass: 'modal-not-deliver-options',
      componentProps: {order: this.selectedOrder},
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data?.success) {
      this.selectedOrder.status = 'not-delivered';
      this.selectedOrder.status_es = 'no entregada';
      this.skip();
    }
  }

  async showDeliveryOrderOptions() {
    const popover = await this.popoverController.create({
      component: DeliveryPrioritySelectComponent,
      componentProps: {length: this.orders.length},
    });
    await popover.present();
    const {data} = await popover.onDidDismiss();
    console.log(data);
  }

  callNumber(order: Order) {
    this.callNumberService.call(order.phone);
  }

  navigateBack() {
    this.type === 'urban-distribution'
      ? this.router.navigateByUrl('urban-distribution-list')
      : this.router.navigateByUrl('journey-list');
  }

  skip() {
    this.goToNextOrder(false);
  }

  private tryOptimizeOrders() {
    if (this.ordersOptimized) {
      return;
    }

    if (!this.orders || this.orders.length === 0) {
      return;
    }

    if (!this.driverPosition || !this.driverPosition.coords) {
      this.applyDriverStartLocationFallback();
      return;
    }

    if (!(window as any).google || !google.maps?.geometry?.spherical) {
      return;
    }

    const optimized = this.getOptimizedOrderSequence();
    if (optimized.length === this.orders.length) {
      this.orders = optimized;
      this.currentOrderIndex = 0;
      this.currentOrder = this.orders[this.currentOrderIndex];
      this.selectedOrder = this.currentOrder;
      this.ordersOptimized = true;
    }
  }

  private goToNextOrder(removeCurrent: boolean) {
    if (!this.orders || this.orders.length === 0) {
      return;
    }

    const currentId = this.selectedOrder?.id;
    if (removeCurrent && currentId) {
      const index = this.orders.findIndex(order => order.id === currentId);
      if (index !== -1) {
        this.orders.splice(index, 1);
        if (index <= this.currentOrderIndex && this.currentOrderIndex > 0) {
          this.currentOrderIndex--;
        }
      }
    } else {
      this.currentOrderIndex = (this.currentOrderIndex + 1) % this.orders.length;
    }

    if (this.orders.length === 0) {
      this.orderService.setCurrentOrders$(this.orders.slice());
      this.currentOrder = null;
      this.selectedOrder = null;
      this.markersOrders = [];
      this.triggerCelebration();
      return;
    }

    if (this.currentOrderIndex >= this.orders.length) {
      this.currentOrderIndex = 0;
    }

    this.currentOrder = this.orders[this.currentOrderIndex];
    this.selectedOrder = this.currentOrder;
    this.findNearbyMarkers();
    this.orderService.setCurrentOrders$(this.orders.slice());
  }

  finishDeliveries() {
    this.showCelebration = false;
    this.navigateBack();
  }

  private triggerCelebration() {
    this.celebrationSummary = {
      completed: this.completedOrdersCount,
      total: this.initialOrdersCount,
      saved: this.savedClientsCount,
      duration: this.formatDuration(Date.now() - this.startTime)
    };
    this.showCelebration = true;
    this.playCelebrationSound();
  }

  private playCelebrationSound() {
    if (!this.soundEnabled) {
      return;
    }
    try {
      const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) {
        return;
      }
      const ctx = new AudioContext();
      const endTime = ctx.currentTime + 1.8;

      const melody = [
        {freq: 523.25, start: 0, duration: 0.25},
        {freq: 659.25, start: 0.15, duration: 0.25},
        {freq: 783.99, start: 0.3, duration: 0.3},
        {freq: 1046.5, start: 0.6, duration: 0.4},
        {freq: 880.0, start: 1.0, duration: 0.5}
      ];

      melody.forEach(note => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = note.freq;
        const startTime = ctx.currentTime + note.start;
        const stopTime = startTime + note.duration;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.5, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, stopTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(stopTime);
      });

      ctx.close && setTimeout(() => ctx.close(), (endTime - ctx.currentTime) * 1000);
    } catch (error) {
      console.warn('Celebration sound not supported', error);
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
  }

  handleStartSourceChange(source: string) {
    const target = source === 'saved' ? 'saved' : 'gps';
    this.startSourceManuallySelected = true;
    if (target === 'saved') {
      if (!this.savedStartPosition) {
        return;
      }
      this.useSavedStartLocation = true;
      this.driverPosition = this.savedStartPosition;
      this.geolocationService.setDriverPosition$(this.savedStartPosition);
      this.tryOptimizeOrders();
      return;
    }

    this.useSavedStartLocation = false;
    if (this.latestGpsPosition) {
      this.driverPosition = this.latestGpsPosition;
      this.geolocationService.setDriverPosition$(this.latestGpsPosition);
      this.tryOptimizeOrders();
    }
  }

  async shareCompletion() {
    const message = `¡Ruta completada! ${this.completedOrdersCount}/${this.initialOrdersCount} entregas finalizadas en ${this.celebrationSummary.duration}.`;
    try {
      if ((navigator as any).share) {
        await (navigator as any).share({
          title: 'DistriApp',
          text: message
        });
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(message);
        window.alert('Resumen copiado al portapapeles');
      } else {
        window.alert(message);
      }
    } catch (error) {
      console.warn('No se pudo compartir el resumen', error);
    }
  }

  private formatDuration(ms: number): string {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    if (minutes === 0) {
      return `${seconds}s`;
    }
    return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
  }

  private getOptimizedOrderSequence(): Order[] {
    const remaining = [...this.orders];
    const optimized: Order[] = [];
    const currentCoords = this.driverPosition?.coords;
    if (!currentCoords) {
      return remaining;
    }
    let currentPoint = new google.maps.LatLng(currentCoords.latitude, currentCoords.longitude);

    while (remaining.length > 0) {
      let nearestIdx = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      remaining.forEach((order, index) => {
        if (!order?.location?.lat || !order?.location?.lng) {
          return;
        }
        const orderPoint = new google.maps.LatLng(+order.location.lat, +order.location.lng);
        const distance = google.maps.geometry.spherical.computeDistanceBetween(currentPoint, orderPoint);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIdx = index;
        }
      });

      const nextOrder = remaining.splice(nearestIdx, 1)[0];
      optimized.push(nextOrder);
      currentPoint = new google.maps.LatLng(+nextOrder.location.lat, +nextOrder.location.lng);
    }

    return optimized;
  }

  private applyDriverStartLocationFallback(driver?: Driver) {
    if (driver) {
      this.driverProfile = driver;
    } else if (!this.driverProfile) {
      this.driverProfile = this.driverService.getDriverSnapshot() || null;
    }

    const targetDriver = driver || this.driverProfile;
    if (!targetDriver) {
      return;
    }

    const lat = this.toNumber(targetDriver.start_lat);
    const lng = this.toNumber(targetDriver.start_lng);
    if (lat === null || lng === null) {
      this.savedStartPosition = null;
      return;
    }

    this.savedStartPosition = this.createGeoposition(lat, lng);

    if (!this.startSourceManuallySelected) {
      this.useSavedStartLocation = true;
    }

    if (this.useSavedStartLocation || !this.driverPosition) {
      this.driverPosition = this.savedStartPosition;
      this.geolocationService.setDriverPosition$(this.savedStartPosition);
      this.tryOptimizeOrders();
    }
  }

  private createGeoposition(lat: number, lng: number): Geoposition {
    return {
      coords: {
        latitude: lat,
        longitude: lng,
        accuracy: 100,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null
      } as Geoposition['coords'],
      timestamp: Date.now()
    };
  }

  private toNumber(value: any): number | null {
    if (value === null || value === undefined || value === '') {
      return null;
    }
    const parsed = Number(value);
    return isNaN(parsed) ? null : parsed;
  }

  findNearbyMarkers() {
    console.log('finding nearby orders...');
    const anotherOrders = this.orders.filter(order => order.id !== +this.currentOrder.id);

    const circle = new google.maps.Circle({
      strokeColor: 'black',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: 'blue',
      fillOpacity: 0.35,
      center: new google.maps.LatLng(+this.currentOrder.location.lat, +this.currentOrder.location.lng),
      radius: this.radius
    });

    this.nearbyOrders = anotherOrders.filter(order =>
      google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(+order.location.lat, +order.location.lng),
        circle.getCenter()) <= this.radius
    );
    this.updateMarkersOrders();
  }

  toggleAllMarkers() {
    this.showAllMarkersFlag = !this.showAllMarkersFlag;
    this.updateMarkersOrders();
  }

  updateMarkersOrders() {
    this.showAllMarkersFlag ? this.showAllMarkers() : this.hideAllMarkers();
  }

  showAllMarkers() {
    console.log(this.nearbyOrders);
    this.markersOrders = this.orders.filter(order => order.id !== this.currentOrder.id);
  }

  hideAllMarkers() {
    console.log(this.nearbyOrders);
    this.markersOrders = [];
  }
}
