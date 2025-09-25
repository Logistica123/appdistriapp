import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../../services/v1/order.service';
import {Order} from '../../interfaces/Order';
import {GeolocationService} from '../../services/v1/geolocation.service';
import {Geoposition} from '@ionic-native/geolocation';
import {Router} from '@angular/router';
import {
  Environment,
  GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsEvent, HtmlInfoWindow,
  ILatLng, LatLngBounds, Marker
} from '@ionic-native/google-maps';
import {forEach} from '@angular-devkit/schematics';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-all-orders-map',
  templateUrl: './all-orders-map.page.html',
  styleUrls: ['./all-orders-map.page.scss'],
})
export class AllOrdersMapPage implements OnInit, AfterViewInit, OnDestroy {
  orders: Order[];
  currentOrdersSubscription: any;
  driverGeolocationSubscription: any;
  driverPosition: Geoposition;
  map: GoogleMap;
  @ViewChild('allOrdersMap', {static: true}) mapElement: ElementRef;
  htmlInfoWindow = new HtmlInfoWindow();
  driverMarker: Marker;

  constructor(private orderService: OrderService,
              private router: Router,
              private geolocationService: GeolocationService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.currentOrdersSubscription = this.orderService.getCurrentOrders$()
      .subscribe(orders => {
        this.orders = orders;
        console.log(this.orders);
        this.initMap();
      });

    this.driverGeolocationSubscription = this.geolocationService.driverPosition$
      .subscribe(driverPosition => {
        console.log(driverPosition);
        if (driverPosition) {
          this.driverPosition = driverPosition;
          if (this.driverMarker) {
            this.updateDriverMarkerPosition();
          } else {
            this.setDriverMarker();
          }
        }
      });

    this.checkWatchLocationsSubscription();
    this.driverPosition = this.geolocationService.getDriverPosition();
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

  initMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDARGsWcTV9y4JU_921nPc-KO2K_oiCCNo',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDARGsWcTV9y4JU_921nPc-KO2K_oiCCNo'
    });

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: +this.orders[0].location.lat,
          lng: +this.orders[0].location.lng
        },
        zoom: 15,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('allOrdersMap', mapOptions);

    const center: ILatLng = {
      lat: +this.orders[0].location.lat,
      lng: +this.orders[0].location.lng
    };

    this.map.moveCamera({
      target: center
    });

    this.setDriverMarker();
    this.setAllOrdersMarkers();
  }

  setDriverMarker() {
    if (this.driverPosition) {
      const driverMarkerPosition: ILatLng = {
        lat: this.driverPosition.coords.latitude,
        lng: this.driverPosition.coords.longitude
      };

      this.map.addMarker({
        icon: {
          url: './assets/images/navigation_dot.png'
        },
        animation: 'DROP',
        position: driverMarkerPosition,
      }).then(marker => {
        this.driverMarker = marker;
      });
    }
  }

  updateDriverMarkerPosition() {
    if (this.driverMarker) {
      const driverPosition: ILatLng = {
        lat: this.driverPosition.coords.latitude,
        lng: this.driverPosition.coords.longitude
      };
      this.driverMarker.setPosition(driverPosition);
    }
  }

  async setAllOrdersMarkers() {
    let i = 1;
    for await (const order of this.orders) {
      this.setOrderMarker(order, i);
      i++;
    }
    setTimeout(() => {
      this.setBounds();
    }, 1000);
  }

  setBounds() {
    const points: ILatLng[] = [];
    this.orders.map(order => {
      const position: ILatLng = {
        lat: +order.location.lat, lng: +order.location.lng
      };
      points.push(position);
    });
    if (this.driverMarker) {
      const driverPosition: ILatLng = {
        lat: this.driverMarker.getPosition().lat, lng: this.driverMarker.getPosition().lng
      };
      points.push(driverPosition);
    }
    const bounds: LatLngBounds = new LatLngBounds(points);
    this.map.moveCamera({
      target: bounds
    });
  }

  setOrderMarker(order, i): Promise<any> {
    console.log(order);
    return new Promise<any>((resolve, reject) => {
      const url = this.getMarkerUrl(order);
      const position: ILatLng = {lat: +order.location.lat, lng: +order.location.lng};

      this.map.addMarker({
        icon: {
          url
        },
        animation: 'DROP',
        label: {
          text: (i + 1).toString(),
          color: 'black',
          fontSize: '24px'
        },
        position,
      }).then(marker => {
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((m) => {
          this.htmlInfoWindow.close();
          this.setInfoWindowContent(order, i);
          this.htmlInfoWindow.open(marker);
        });
        resolve(marker);
      }).catch(err => {
        reject(err);
      });
    });
  }

  setInfoWindowContent(order: Order, i) {
    const frame: HTMLElement = document.createElement('div');
    frame.innerHTML = [
      `<h6 style="margin: 0; padding: 0">Entrega# ${i}</h6>`,
      `<h6 style="margin: 0; padding: 0">${order.location.address}</h6>`,
      `<p style="margin: 0; padding: 0">${order.receiver} (${order.phone})</p>`,
      `<p style="margin: 0; padding: 0">${order.description ? order.description : '-'}</p>`,

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
  }

  getMarkerUrl(order: Order) {
    if (order.status === 'not-delivered') {
      // return 'https://maps.google.com/mapfiles/ms/icons/red.png';
      return './assets/markers/red.png';
    } else if (order.status === 'pending') {
      // return 'https://maps.google.com/mapfiles/ms/icons/yellow.png';
      return './assets/markers/yellow.png';
    }
    // return 'https://maps.google.com/mapfiles/ms/icons/green.png';
    return './assets/markers/green.png';
  }

  navigateBack() {
    this.router.navigateByUrl('delivery-map/urban-distribution');
  }

}
