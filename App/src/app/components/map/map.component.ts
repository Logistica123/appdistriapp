import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {Order} from '../../interfaces/Order';
import {Geoposition} from '@ionic-native/geolocation';
import {
  Circle,
  Environment, GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsEvent, HtmlInfoWindow,
  ILatLng,
  LatLngBounds,
  Marker, Polyline
} from '@ionic-native/google-maps';
import {Step} from '../../interfaces/Step';
import {GeolocationService} from '../../services/v1/geolocation.service';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() currentOrder: Order;
  @Input() nearbyOrders: Order[];
  @Input() markersOrders: Order[];
  @Input() driverPosition: Geoposition;
  @Input() radius: number;

  @Output() deliverOrderEvent = new EventEmitter();
  @Output() notDeliverOrderEvent = new EventEmitter();
  @Output() updateDeliveryOrderEvent = new EventEmitter();
  @Output() selectOrderEvent = new EventEmitter<Order>();

  @ViewChild('distriAppMap', {static: true}) mapElement: ElementRef;
  map: GoogleMap;
  driverMarker: Marker;
  markers: Marker[] = [];
  circle: Circle;
  htmlInfoWindow = new HtmlInfoWindow();
  polyline: Polyline;
  jsPolyline: any;

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
  calculatingRoute = false;
  steps: Step[] = [];

  mapLoaded = false;

  constructor(private geolocationService: GeolocationService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
    }, 2500);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.map && this.driverMarker && this.driverPosition) {
      console.log('****GOT NEW DRIVER POSITION');
      this.updateDriverMarkerPosition();
    }

    if (this.map && this.driverMarker) {
      if (changes.currentOrder?.currentValue?.id !== changes.currentOrder?.previousValue?.id) {
        console.log('****GOT NEW CURRENT ORDER');
        this.setCurrentOrderMarker();
        if (this.polyline) {
          this.polyline.remove();
        }
      }
    }

    console.log(changes);
    console.log(changes.markersOrders);
    if (changes.markersOrders) {
      this.setOthersOrdersMarkers();
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
          lat: +this.currentOrder.location.lat,
          lng: +this.currentOrder.location.lng
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create(this.mapElement.nativeElement, mapOptions);

    const center: ILatLng = {lat: +this.currentOrder.location.lat, lng: +this.currentOrder.location.lng};

    this.map.moveCamera({
      target: center
    });

    this.circle = this.map.addCircleSync({
      center,
      radius: this.radius,
      strokeColor: 'rgba(250, 250, 250, 0.5)',
      strokeWidth: 1,
      fillColor: 'rgba(250, 250, 250, 0.6)',
      visible: false
    });

    this.setDriverMarker();
  }

  updateDriverMarkerPosition() {
    const driverPosition: ILatLng = {
      lat: this.driverPosition.coords.latitude,
      lng: this.driverPosition.coords.longitude
    };
    this.driverMarker.setPosition(driverPosition);

    if (this.jsPolyline) {
      const currentDriverPosition = new google.maps.LatLng(this.driverPosition.coords.latitude, this.driverPosition.coords.longitude);
      const isLocationOnEdge = google.maps.geometry.poly.isLocationOnEdge(currentDriverPosition, this.jsPolyline, 0.0005);
      if (!isLocationOnEdge && !this.calculatingRoute) {
        this.polyline.remove();
        this.calculateAndDisplayRoute();
      } else {
        console.log('NOT calculating route! - *******');
      }
    }
  }

  setDriverMarker() {
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
      this.setCurrentOrderMarker();
    });
  }

  setCurrentOrderMarker() {
    this.circle.setVisible(false);
    this.removeAllMarkers();
    const currentOrderPosition: ILatLng = {
      lat: +this.currentOrder.location.lat,
      lng: +this.currentOrder.location.lng,
    };

    const url = this.getMarkerUrl(this.currentOrder);

    this.map.addMarker({
      icon: {
        url
      },
      animation: 'DROP',
      position: currentOrderPosition
    }).then(marker => {
      this.markers.push(marker);

      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.selectOrder(this.currentOrder);
        this.htmlInfoWindow.close();
        this.setInfoWindowContent(this.currentOrder);
        this.htmlInfoWindow.open(marker);
      });

      const bounds: LatLngBounds = new LatLngBounds([
        {lat: +this.currentOrder.location.lat, lng: +this.currentOrder.location.lng},
        {lat: this.driverMarker.getPosition().lat, lng: this.driverMarker.getPosition().lng}
      ]);
      this.map.moveCamera({
        target: bounds
      });
      this.circle.setCenter(currentOrderPosition);
      this.circle.setVisible(true);
      this.setNearbyOrderMarkers();
      this.calculateAndDisplayRoute();
    });
  }

  setNearbyOrderMarkers() {
    this.nearbyOrders.map(order => {
      const url = this.getMarkerUrl(order);
      const position: ILatLng = {lat: +order.location.lat, lng: +order.location.lng};
      this.map.addMarker({
        icon: {
          url
        },
        animation: 'DROP',
        position
      }).then(marker => {
        this.markers.push(marker);

        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((m) => {
          this.selectOrder(order);
          this.htmlInfoWindow.close();
          this.setInfoWindowContent(order);
          this.htmlInfoWindow.open(marker);
        });
      });
    });
  }

  viewAllMarkers() {
    this.circle.setVisible(false);
    this.removeAllMarkers();
    this.setNearbyOrderMarkers();
  }

  setInfoWindowContent(order: Order) {
    const frame: HTMLElement = document.createElement('div');
    // frame.className = 'map-info-window';
    frame.innerHTML = [
      `<h6 style="margin: 0; padding: 0">${order.location.address}</h6>`,
      `<p style="margin: 0; padding: 0">${order.receiver} (${order.phone})</p>`,
      `<p style="margin: 0; padding: 0">${order.description ? order.description : '-'}</p>`,
      `<h6 style="margin: 0; padding: 0; text-align: center; text-decoration: underline" class="update-delivery-order-button-iw">Cambiar orden</h6>`,

      `<div style="width: 100%; display: flex; padding: 10px;">` +
      `<div style="width: 50%; text-align: center">` +
      '<button class="deliver-order-button-iw" ' +
      'style="padding: 5px 10px; margin: 0 auto; background: transparent; color: black; border: 1px solid gray; border-radius: 10px; min-height: 35px; outline: none">' +
      'Entregar' +
      '</button>' +
      '</div>' +

      `<div style="width: 50%; text-align: center">` +
      '<button class="not-deliver-order-button-iw" ' +
      'style="padding: 5px 10px; margin: 0 auto; background: transparent; color: black; border: 1px solid gray; border-radius: 10px; min-height: 35px; outline: none">' +
      'No entregado' +
      '</button>' +
      '</div>' +

      '</div>',

      '<span class="close-iw" style="top: 5px; right: 5px; position: absolute">' +
      '&times' +
      '</span>',
    ].join('');
    frame.getElementsByClassName('deliver-order-button-iw')[0].addEventListener('click', () => {
      this.deliverOrder();
    });
    frame.getElementsByClassName('not-deliver-order-button-iw')[0].addEventListener('click', () => {
      this.notDeliverOrder();
    });
    frame.getElementsByClassName('update-delivery-order-button-iw')[0].addEventListener('click', () => {
      this.updateDeliveryOrder();
    });
    frame.getElementsByClassName('close-iw')[0].addEventListener('click', () => {
      this.htmlInfoWindow.close();
    });
    this.htmlInfoWindow.setContent(frame, {
      width: '200px',
      // height: '330px'
    });
  }

  calculateAndDisplayRoute() {
    console.log('--**--calculating route...');
    const origin = new google.maps.LatLng(+this.driverPosition.coords.latitude, +this.driverPosition.coords.longitude);
    const destination = new google.maps.LatLng(+this.currentOrder.location.lat, +this.currentOrder.location.lng);
    this.calculatingRoute = true;
    const that = this;
    this.directionsService.route({
      origin,
      destination,
      travelMode: google.maps.TravelMode.DRIVING
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
        this.showSteps(response);
      } else {
        alert('No se pudo obtener las direcciones desde el API de Google. Intente nuevamente');
      }
    });

    setTimeout(() => {
      this.calculatingRoute = false;
    }, 15000);

    this.geolocationService.logDirectionsRouteRequest().subscribe();
  }

  showSteps(directionResult) {
    const polyline = new google.maps.Polyline({
      path: [],
      strokeColor: '#0000FF',
      strokeWeight: 6
    });
    const bounds = new google.maps.LatLngBounds();

    const points = [];
    const legs = directionResult.routes[0].legs;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < legs.length; i++) {
      // tslint:disable-next-line:no-shadowed-variable
      const steps = legs[i].steps;
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < steps.length; j++) {
        const nextSegment = steps[j].path;
        // tslint:disable-next-line:prefer-for-of
        for (let k = 0; k < nextSegment.length; k++) {
          const point: ILatLng = {lat: nextSegment[k].lat(), lng: nextSegment[k].lng()};
          points.push(point);
          polyline.getPath().push(nextSegment[k]);
          bounds.extend(nextSegment[k]);
        }
      }
    }

    const steps = directionResult.routes[0].legs[0].steps;
    steps.map(routeStep => {
      const step: Step = {
        instructions: routeStep.instructions,
        distance: routeStep.distance.text
      };
      this.steps.push(step);
    });

    const newRoute = directionResult.routes[0].legs;
    const times = [];

    newRoute.map(leg => {
      times.push({
        distance: leg.distance.value,
        duration: leg.duration.value
      });
    });

    this.jsPolyline = polyline;
    this.setPolyline(points);
  }

  setPolyline(polyline) {
    this.map.addPolyline({
      points: polyline,
      color: '#0000FF',
      geodesic: true,
      width: 4
    }).then((p: Polyline) => {
      this.polyline = p;
    });
  }

  setOthersOrdersMarkers() {
    console.log(this.markersOrders);
    console.log(this.markers);
  }

  removeAllMarkers() {
    this.markers.map(marker => {
      marker.remove();
    });
    this.markers = [];
    console.log(this.markers);
  }

  deliverOrder() {
    this.deliverOrderEvent.emit();
  }

  notDeliverOrder() {
    this.notDeliverOrderEvent.emit();
  }

  updateDeliveryOrder() {
    this.updateDeliveryOrderEvent.emit();
  }

  selectOrder(order: Order) {
    this.selectOrderEvent.emit(order);
  }

  getMarkerUrl(order: Order) {
    if (order.flag_color === '#FF4051') {
      // return 'https://maps.google.com/mapfiles/ms/icons/red.png';
      return './assets/markers/red.png';
    } else if (order.flag_color === '#ffd700') {
      // return 'https://maps.google.com/mapfiles/ms/icons/yellow.png';
      return './assets/markers/yellow.png';
    }
    // return 'https://maps.google.com/mapfiles/ms/icons/green.png';
    return './assets/markers/green.png';
  }
}
