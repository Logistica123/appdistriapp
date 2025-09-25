import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {OrderService} from '../../../services/v1/order.service';
import {Order} from '../../../interfaces/Order';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';
import SlidingMarker from 'marker-animate-unobtrusive';
import {
  Circle,
  Environment,
  GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsEvent,
  HtmlInfoWindow,
  ILatLng, Marker
} from '@ionic-native/google-maps';

declare var google;

@Component({
  selector: 'app-delivery-order-map',
  templateUrl: './delivery-order-map.component.html',
  styleUrls: ['./delivery-order-map.component.scss'],
})
export class DeliveryOrderMapComponent implements OnInit, AfterViewInit {
  @Input() type: string;
  @Input() orders: Order[] = [];
  @Input() currentOrder: Order;
  selectedOrder: Order;
  map: GoogleMap;
  @ViewChild('deliveryOrderMarkersMap', {static: true}) mapElement: ElementRef;
  watchLocationObservable: any;
  driverMarker: google.maps.Marker;
  markers: Marker[] = [];
  radius = 2500;
  circle: Circle;
  htmlInfoWindow = new HtmlInfoWindow();

  constructor(private navParams: NavParams,
              private modalController: ModalController,
              private geolocation: Geolocation,
              private orderService: OrderService) {
    this.type = this.navParams.get('type');
  }

  ngOnInit() {
    // this.getOptimizedOrders();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadMap();
    }, 2500);
  }

  ionViewWillLeave() {
    if (this.watchLocationObservable) {
      this.watchLocationObservable.unsubscribe();
    }
  }

  watchLocation() {
    this.watchLocationObservable = this.geolocation.watchPosition({enableHighAccuracy: true})
      .subscribe((position: Geoposition) => {
        console.log('got in modal ***__');
        if (position && position.coords && position.coords.accuracy <= 50) {
          const driverPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          // const driverPosition = new google.maps.LatLng(-27.497737, -58.828180);
          this.driverMarker.setPosition(driverPosition);
          // this.map.setCenter(driverPosition);
        } else {
          alert('No se pudo obtener ubicación actual del conductor. Por favor habilite el GPS en su dispositivo móvil');
        }
      });
  }

  getCurrentDriverPosition() {
    this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then(position => {
      if (position && position.coords && position.coords.accuracy <= 50) {
        const driverPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        // const driverPosition = new google.maps.LatLng(-27.497737, -58.828180);
        this.driverMarker = new google.maps.Marker({
          icon: 'assets/markers/gps.png',
          position: driverPosition,
          map: this.map,
        });
        // this.map.setCenter(driverPosition);
        this.watchLocation();
      } else {
        alert('No se pudo obtener ubicación actual del conductor. Por favor habilite el GPS en su dispositivo móvil');
      }
    });
  }

  // getOptimizedOrders() {
  //   this.orderService.getTodayOptimizedOrders(this.type)
  //     .subscribe((response: any) => {
  //       this.orders = response.orders;
  //       // this.initMap();
  //       this.loadMap();
  //     }, error => {
  //
  //     }, () => {
  //
  //     });
  // }

  loadMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDARGsWcTV9y4JU_921nPc-KO2K_oiCCNo',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDARGsWcTV9y4JU_921nPc-KO2K_oiCCNo'
    });

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: +this.currentOrder.location.lat,
          lng: +this.currentOrder.location.lng
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('deliveryOrderMarkersMap', mapOptions);

    const center: ILatLng = {lat: +this.currentOrder.location.lat, lng: +this.currentOrder.location.lng};

    this.map.moveCamera({
      target: center
    });

    this.circle = this.map.addCircleSync({
      center,
      radius: this.radius,
      strokeColor: 'rgba(250, 250, 250, 0.8)',
      strokeWidth: 0,
      fillColor: 'rgba(250, 250, 250, 0.8)',
      visible: false
    });
    this.addCurrentOrderMarker();
    // this.selectedOrder = this.currentOrder;
    this.findNearbyMarkers();
    // this.addMarkers();
    // this.getCurrentDriverPosition();
  }

  addCurrentOrderMarker() {
    const position: ILatLng = {lat: +this.currentOrder.location.lat, lng: +this.currentOrder.location.lng};
    this.map.addMarker({
      icon: 'red',
      animation: 'DROP',
      position
    }).then(marker => {
      // this.markers.push(marker);
      this.circle.setCenter(position);

      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((m) => {
        this.selectedOrder = this.currentOrder;
        this.htmlInfoWindow.close();
        this.setInfoWindowContent(this.selectedOrder);
        this.htmlInfoWindow.open(marker);
      });
    });
  }

  // initMap() {
  //   setTimeout(() => {
  //     const lat = +this.orders[0].location.lat;
  //     const lng = +this.orders[0].location.lng;
  //     const center = new google.maps.LatLng(lat, lng);
  //     this.map = new google.maps.Map(this.mapElement.nativeElement, {
  //       zoom: 12,
  //       center
  //     });
  //     this.addMarkers();
  //     this.getCurrentDriverPosition();
  //   }, 1000);
  // }

  // addMarkers() {
  //   let i = 1;
  //   const colors = [
  //     'yellow', 'green', 'blue'
  //   ];
  //   this.orders.map(order => {
  //     const contentString = `<h4>${order.location.name}</h4><p>${order.location.full_address}</p>`;
  //     const infoWindow = new google.maps.InfoWindow({
  //       content: contentString
  //     });
  //
  //     const random = Math.floor(Math.random() * 3) + 1;
  //     let url = 'http://maps.google.com/mapfiles/ms/icons/';
  //     url += colors[random - 1] + '-dot.png';
  //
  //     const marker = new google.maps.Marker({
  //       position: new google.maps.LatLng(+order.location.lat, +order.location.lng),
  //       map: this.map,
  //       label: {
  //         text: i.toString(),
  //         color: 'black',
  //         fontSize: '24px'
  //       },
  //       icon: {
  //         url
  //       }
  //       // icon: order.status === 'delivered' ? 'assets/markers/location-delivered.png' : 'assets/markers/location.png'
  //     });
  //
  //     marker.addListener('click', () => {
  //       infoWindow.open(this.map, marker);
  //     });
  //
  //     this.markers.push(marker);
  //     i++;
  //   });
  // }

  removeAllMarkers() {
    this.markers.map(marker => {
      marker.remove();
    });
    this.markers = [];
  }

  viewAllMarkers() {
    this.removeAllMarkers();
    this.circle.setVisible(false);
    const anotherOrders = this.orders.filter(order =>
      order.id !== this.currentOrder.id && order.status !== 'delivered');

    anotherOrders.map(order => {
      const position: ILatLng = {lat: +order.location.lat, lng: +order.location.lng};
      this.map.addMarker({
        icon: 'blue',
        animation: 'DROP',
        position
      }).then(marker => {
        this.markers.push(marker);
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((m) => {
          this.selectedOrder = order;
          this.htmlInfoWindow.close();
          this.setInfoWindowContent(order);
          this.htmlInfoWindow.open(marker);
        });
      });
    });
  }

  showMarkersByNumber(min, max) {
    // this.markers.map(marker => {
    //   marker.setMap(null);
    // });
    // this.markers = [];
    // const colors = [
    //   'yellow', 'green', 'blue'
    // ];
    //
    // for (let i = min - 1; i <= max - 1; i++) {
    //   const order = this.orders[i];
    //   if (order) {
    //     const contentString = `<h4>${order.location.name}</h4><p>${order.location.full_address}</p>`;
    //     const infoWindow = new google.maps.InfoWindow({
    //       content: contentString
    //     });
    //
    //     const random = Math.floor(Math.random() * 3) + 1;
    //     let url = 'http://maps.google.com/mapfiles/ms/icons/';
    //     url += colors[random - 1] + '-dot.png';
    //
    //     const marker = new google.maps.Marker({
    //       position: new google.maps.LatLng(+order.location.lat, +order.location.lng),
    //       map: this.map,
    //       label: {
    //         text: (i + 1).toString(),
    //         color: 'black',
    //         fontSize: '24px'
    //       },
    //       icon: {
    //         url
    //       }
    //       // icon: order.status === 'delivered' ? 'assets/markers/location-delivered.png' : 'assets/markers/location.png'
    //     });
    //
    //     marker.addListener('click', () => {
    //       infoWindow.open(this.map, marker);
    //     });
    //
    //     this.markers.push(marker);
    //   }
    // }
  }

  findNearbyMarkers() {
    this.removeAllMarkers();
    const anotherOrders = this.orders.filter(order =>
      order.id !== this.currentOrder.id && order.status !== 'delivered');

    const circle = new google.maps.Circle({
      strokeColor: 'black',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: 'blue',
      fillOpacity: 0.35,
      center: new google.maps.LatLng(+this.currentOrder.location.lat, +this.currentOrder.location.lng),
      radius: this.radius
    });

    const ordersInRadius = anotherOrders.filter(order =>
      google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(+order.location.lat, +order.location.lng),
        circle.getCenter()) <= this.radius
    );

    ordersInRadius.map(order => {
      const position: ILatLng = {lat: +order.location.lat, lng: +order.location.lng};
      this.map.addMarker({
        icon: 'blue',
        animation: 'DROP',
        position
      }).then(marker => {
        this.markers.push(marker);
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((m) => {
          this.selectedOrder = order;
          this.htmlInfoWindow.close();
          this.setInfoWindowContent(order);
          this.htmlInfoWindow.open(marker);
        });
      });
    });
    this.circle.setVisible(true);
    this.map.moveCamera({
      target: this.circle.getBounds()
    });
  }

  setInfoWindowContent(order: Order) {
    const frame: HTMLElement = document.createElement('div');
    // frame.className = 'map-info-window';
    frame.innerHTML = [
      `<h6 style="margin: 0; padding: 0">${order.location.address}</h6>`,

      `<p style="margin: 0; padding: 0">${order.receiver}</p>`,

      `<p style="margin: 0; padding: 0">${order.description}</p>`,

      '<span class="close-iw" style="top: 5px; right: 5px; position: absolute">' +
      '&times' +
      '</span>',
    ].join('');
    frame.getElementsByClassName('close-iw')[0].addEventListener('click', () => {
      this.htmlInfoWindow.close();
    });
    this.htmlInfoWindow.setContent(frame, {
      width: '200px',
      // height: '330px'
    });

    frame.classList.add('map-info-window');
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
