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
  currentOrdersSubscription: any;
  notDeliveringOrder = false;
  deliveringOrder = false;
  skipping = false;
  radius = 1500;
  showAllMarkersFlag = false;
  type: string;
  markersOrders: Order[] = [];
  ordersOptimized = false;

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
              private geolocationService: GeolocationService) {
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
  }

  ngOnInit() {
    //
  }

  ngAfterViewInit() {
    this.currentOrdersSubscription = this.orderService.getCurrentOrders$()
      .subscribe(orders => {
        this.orders = orders;
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
    this.driverGeolocationSubscription = this.geolocationService.driverPosition$
      .subscribe(driverPosition => {
        if (driverPosition) {
          this.driverPosition = driverPosition;
          this.tryOptimizeOrders();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.driverGeolocationSubscription) {
      this.driverGeolocationSubscription.unsubscribe();
    }

    if (this.currentOrdersSubscription) {
      this.currentOrdersSubscription.unsubscribe();
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
      this.selectedOrder.status = 'delivered';
      this.selectedOrder.status_es = 'entregada';
      this.skip();
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
    this.currentOrderIndex + 1 >= this.orders.length
      ? this.currentOrderIndex = 0
      : this.currentOrderIndex++;

    this.currentOrder = this.orders[this.currentOrderIndex];
    this.selectedOrder = this.currentOrder;
    this.findNearbyMarkers();
  }

  private tryOptimizeOrders() {
    if (this.ordersOptimized) {
      return;
    }

    if (!this.orders || this.orders.length === 0) {
      return;
    }

    if (!this.driverPosition || !this.driverPosition.coords) {
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

  private getOptimizedOrderSequence(): Order[] {
    const remaining = [...this.orders];
    const optimized: Order[] = [];
    let currentPoint = new google.maps.LatLng(this.driverPosition.coords.latitude, this.driverPosition.coords.longitude);

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
