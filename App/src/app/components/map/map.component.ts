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
import {Platform} from '@ionic/angular';

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
  @Input() orders: Order[] = [];
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
  htmlInfoWindow: HtmlInfoWindow | null = null;
  polyline: Polyline;
  jsPolyline: any;

  usingNativeMaps = false;

  webMap: google.maps.Map;
  webDriverMarker: google.maps.Marker;
  webMarkers: google.maps.Marker[] = [];
  webCircle: google.maps.Circle;
  webPolyline: google.maps.Polyline;
  webInfoWindow: google.maps.InfoWindow | null = null;

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
  calculatingRoute = false;
  steps: Step[] = [];

  mapLoaded = false;

  constructor(private geolocationService: GeolocationService,
              private platform: Platform) {
    this.usingNativeMaps = this.platform.is('hybrid');

    if (this.usingNativeMaps) {
      try {
        this.htmlInfoWindow = new HtmlInfoWindow();
      } catch (error) {
        console.warn('HtmlInfoWindow not available in this platform', error);
        this.htmlInfoWindow = null;
      }
    } else {
      try {
        this.webInfoWindow = new google.maps.InfoWindow();
      } catch (error) {
        console.warn('Google Maps InfoWindow not available', error);
        this.webInfoWindow = null;
      }
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.tryInitMap();
    }, 500);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.tryInitMap();

    if ((this.map && this.driverMarker && this.driverPosition) ||
      (!this.usingNativeMaps && this.webMap && this.webDriverMarker && this.driverPosition)) {
      console.log('****GOT NEW DRIVER POSITION');
      this.updateDriverMarkerPosition();
    }

    if ((this.map && this.driverMarker) || (!this.usingNativeMaps && this.webMap && this.webDriverMarker)) {
      if (changes.currentOrder?.currentValue?.id !== changes.currentOrder?.previousValue?.id) {
        console.log('****GOT NEW CURRENT ORDER');
        this.setCurrentOrderMarker();
        if (this.polyline) {
          this.polyline.remove();
        }
        if (this.webPolyline) {
          this.webPolyline.setMap(null);
        }
      }
    }

    console.log(changes);
    console.log(changes.markersOrders);
    if (changes.orders) {
      this.setCurrentOrderMarker();
    }
    if (changes.markersOrders) {
      this.setOthersOrdersMarkers();
    }
  }

  private tryInitMap() {
    if (this.mapLoaded) {
      return;
    }

    if (!this.driverPosition || !this.driverPosition.coords || !this.currentOrder?.location?.lat || !this.currentOrder?.location?.lng) {
      return;
    }

    this.initMap();
    this.mapLoaded = true;
  }

  initMap() {
    if (!this.driverPosition || !this.driverPosition.coords) {
      console.warn('Driver position is not available yet. Map initialization postponed.');
      this.mapLoaded = false;
      return;
    }

    if (this.usingNativeMaps) {
      Environment.setEnv({
        API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCQ5AidfjBOg7VI2sgkbpnKHPBGAoLQ15w',
        API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCQ5AidfjBOg7VI2sgkbpnKHPBGAoLQ15w'
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
    } else {
      const center = new google.maps.LatLng(+this.currentOrder.location.lat, +this.currentOrder.location.lng);
      this.webMap = new google.maps.Map(this.mapElement.nativeElement, {
        center,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      this.webCircle = new google.maps.Circle({
        center,
        radius: this.radius,
        strokeColor: 'rgba(250, 250, 250, 0.5)',
        strokeWeight: 1,
        fillColor: 'rgba(250, 250, 250, 0.6)',
        map: this.webMap,
        visible: false
      });

      this.setDriverMarker();
    }
  }

  updateDriverMarkerPosition() {
    if (!this.driverPosition || !this.driverPosition.coords) {
      return;
    }

    if (this.usingNativeMaps && this.driverMarker) {
      const driverPosition: ILatLng = {
        lat: this.driverPosition.coords.latitude,
        lng: this.driverPosition.coords.longitude
      };
      this.driverMarker.setPosition(driverPosition);
    } else if (!this.usingNativeMaps && this.webDriverMarker) {
      this.webDriverMarker.setPosition({
        lat: this.driverPosition.coords.latitude,
        lng: this.driverPosition.coords.longitude
      });
    }

    if (this.jsPolyline) {
      const currentDriverPosition = new google.maps.LatLng(this.driverPosition.coords.latitude, this.driverPosition.coords.longitude);
      const isLocationOnEdge = google.maps.geometry.poly.isLocationOnEdge(currentDriverPosition, this.jsPolyline, 0.0005);
      if (!isLocationOnEdge && !this.calculatingRoute) {
        if (this.usingNativeMaps && this.polyline) {
          this.polyline.remove();
        }
        if (!this.usingNativeMaps && this.webPolyline) {
          this.webPolyline.setMap(null);
        }
        this.calculateAndDisplayRoute();
      } else {
        console.log('NOT calculating route! - *******');
      }
    }
  }

  setDriverMarker() {
    if (!this.driverPosition || !this.driverPosition.coords) {
      return;
    }

    const driverLatLng = {
      lat: this.driverPosition.coords.latitude,
      lng: this.driverPosition.coords.longitude
    };

    if (this.usingNativeMaps) {
      const driverMarkerPosition: ILatLng = driverLatLng;

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
    } else {
      if (this.webDriverMarker) {
        this.webDriverMarker.setPosition(driverLatLng);
      } else {
        this.webDriverMarker = new google.maps.Marker({
          position: driverLatLng,
          map: this.webMap,
          icon: {
            url: './assets/images/navigation_dot.png'
          }
        });
      }
      this.setCurrentOrderMarker();
    }
  }

  setCurrentOrderMarker() {
    if (this.usingNativeMaps && !this.map) {
      return;
    }
    if (!this.usingNativeMaps && !this.webMap) {
      return;
    }

    this.removeAllMarkers();

    const orderLat = +this.currentOrder.location.lat;
    const orderLng = +this.currentOrder.location.lng;
    const url = this.getMarkerUrl(this.currentOrder);

    const markerLabel = this.getMarkerLabel(this.currentOrder);

    if (this.usingNativeMaps) {
      const currentOrderPosition: ILatLng = {lat: orderLat, lng: orderLng};

      this.circle.setVisible(false);

      const markerOptions: any = {
        icon: {
          url
        },
        animation: 'DROP',
        position: currentOrderPosition
      };
      if (markerLabel) {
        markerOptions.label = markerLabel;
      }

      this.map.addMarker(markerOptions).then(marker => {
        this.markers.push(marker);

        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.selectOrder(this.currentOrder);
          if (this.htmlInfoWindow) {
            this.htmlInfoWindow.close();
            this.setInfoWindowContent(this.currentOrder);
            this.htmlInfoWindow.open(marker);
          }
        });

        const bounds: LatLngBounds = new LatLngBounds([
          {lat: orderLat, lng: orderLng},
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
    } else {
      if (!this.webMap) {
        return;
      }

      const currentOrderPosition = new google.maps.LatLng(orderLat, orderLng);
      const markerOptions: google.maps.MarkerOptions = {
        position: currentOrderPosition,
        map: this.webMap,
        icon: {url}
      };
      if (markerLabel) {
        markerOptions.label = {
          text: markerLabel,
          color: '#ffffff',
          fontWeight: 'bold'
        } as google.maps.MarkerLabel;
      }
      const marker = new google.maps.Marker(markerOptions);
      this.webMarkers.push(marker);

      marker.addListener('click', () => {
        this.selectOrder(this.currentOrder);
        if (this.webInfoWindow) {
          this.setInfoWindowContent(this.currentOrder);
          this.webInfoWindow.open(this.webMap, marker);
        }
      });

      if (this.webDriverMarker) {
        const bounds = new google.maps.LatLngBounds();
        bounds.extend(currentOrderPosition);
        bounds.extend(this.webDriverMarker.getPosition());
        this.webMap.fitBounds(bounds);
      } else {
        this.webMap.setCenter(currentOrderPosition);
      }

      if (this.webCircle) {
        this.webCircle.setCenter(currentOrderPosition);
        this.webCircle.setVisible(true);
      }

      this.setNearbyOrderMarkers();
      this.calculateAndDisplayRoute();
    }
  }

  setNearbyOrderMarkers() {
    if (this.usingNativeMaps && !this.map) {
      return;
    }
    if (!this.usingNativeMaps && !this.webMap) {
      return;
    }

    this.nearbyOrders.map(order => {
      const url = this.getMarkerUrl(order);
      const lat = +order.location.lat;
      const lng = +order.location.lng;

      const label = this.getMarkerLabel(order);

      if (this.usingNativeMaps) {
        const position: ILatLng = {lat, lng};
        const markerOptions: any = {
          icon: {
            url
          },
          animation: 'DROP',
          position
        };
        if (label) {
          markerOptions.label = label;
        }
        this.map.addMarker(markerOptions).then(marker => {
          this.markers.push(marker);

          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            this.selectOrder(order);
            if (this.htmlInfoWindow) {
              this.htmlInfoWindow.close();
              this.setInfoWindowContent(order);
              this.htmlInfoWindow.open(marker);
            }
          });
        });
      } else if (this.webMap) {
        const position = new google.maps.LatLng(lat, lng);
        const markerOptions: google.maps.MarkerOptions = {
          position,
          map: this.webMap,
          icon: {url}
        };
        if (label) {
          markerOptions.label = {
            text: label,
            color: '#ffffff',
            fontWeight: 'bold'
          } as google.maps.MarkerLabel;
        }
        const marker = new google.maps.Marker(markerOptions);

        marker.addListener('click', () => {
          this.selectOrder(order);
          if (this.webInfoWindow) {
            this.setInfoWindowContent(order);
            this.webInfoWindow.open(this.webMap, marker);
          }
        });

        this.webMarkers.push(marker);
      }
    });
  }

  viewAllMarkers() {
    if (this.usingNativeMaps && this.circle) {
      this.circle.setVisible(false);
    }
    if (!this.usingNativeMaps && this.webCircle) {
      this.webCircle.setVisible(false);
    }
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
      if (this.htmlInfoWindow) {
        this.htmlInfoWindow.close();
      }
      if (this.webInfoWindow) {
        this.webInfoWindow.close();
      }
    });
    if (this.htmlInfoWindow) {
      this.htmlInfoWindow.setContent(frame, {
        width: '200px',
        // height: '330px'
      });
    }
    if (this.webInfoWindow) {
      this.webInfoWindow.setContent(frame);
    }
  }

  calculateAndDisplayRoute() {
    console.log('--**--calculating route...');
    const origin = new google.maps.LatLng(+this.driverPosition.coords.latitude, +this.driverPosition.coords.longitude);

    const orderedStops = (this.orders && this.orders.length > 0)
      ? this.orders
      : [this.currentOrder];

    const destinationOrder = orderedStops[orderedStops.length - 1];
    const destination = new google.maps.LatLng(+destinationOrder.location.lat, +destinationOrder.location.lng);

    const waypoints = orderedStops.slice(0, orderedStops.length - 1)
      .filter(order => order && order.location)
      .map(order => ({
        location: new google.maps.LatLng(+order.location.lat, +order.location.lng),
        stopover: true
      }));
    this.calculatingRoute = true;
    const that = this;
    this.directionsService.route({
      origin,
      destination,
      waypoints,
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
    if (this.usingNativeMaps) {
      this.map.addPolyline({
        points: polyline,
        color: '#0000FF',
        geodesic: true,
        width: 4
      }).then((p: Polyline) => {
        this.polyline = p;
      });
    } else if (this.webMap) {
      if (this.webPolyline) {
        this.webPolyline.setMap(null);
      }
      this.webPolyline = new google.maps.Polyline({
        path: polyline,
        strokeColor: '#0000FF',
        strokeOpacity: 1,
        strokeWeight: 4,
        map: this.webMap
      });
    }
  }

  setOthersOrdersMarkers() {
    console.log(this.markersOrders);
    console.log(this.markers);
  }

  removeAllMarkers() {
    if (this.usingNativeMaps) {
      this.markers.map(marker => {
        marker.remove();
      });
      this.markers = [];
    } else {
      this.webMarkers.map(marker => marker.setMap(null));
      this.webMarkers = [];
    }
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

  private getMarkerLabel(order: Order): string {
    if (!order || !this.orders || this.orders.length === 0) {
      return '';
    }

    const byId = this.orders.findIndex(o => o?.id === order?.id && o?.id != null);
    if (byId !== -1) {
      return (byId + 1).toString();
    }

    const byUid = this.orders.findIndex(o => o?.uid === order?.uid);
    return byUid !== -1 ? (byUid + 1).toString() : '';
  }
}
