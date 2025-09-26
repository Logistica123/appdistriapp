import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../interfaces/Order';
import {AlertController} from '@ionic/angular';
import {Geoposition} from '@ionic-native/geolocation';
import {UpdateLocationRequestService} from '../../services/v1/update-location-request.service';
import {GeolocationService} from '../../services/v1/geolocation.service';
import {ModeService} from '../../services/utils/mode.service';

declare var google;

@Component({
  selector: 'app-order-detail-map',
  templateUrl: './order-detail-map.component.html',
  styleUrls: ['./order-detail-map.component.scss'],
})
export class OrderDetailMapComponent implements OnInit, AfterViewInit {
  @Input() order: Order;
  @ViewChild('orderDetailMap', {static: true}) mapElement: ElementRef;
  driverPosition: Geoposition;
  map: any;
  marker = new google.maps.Marker();
  zoom = 14;
  showButton = false;
  currentMode: any;

  constructor(private alertController: AlertController,
              private geolocationService: GeolocationService,
              private modeService: ModeService,
              private updateLocationRequestService: UpdateLocationRequestService) {
  }

  ngOnInit() {
    this.currentMode = this.modeService.getCurrentModeStatus();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
    }, 1000);
  }

  initMap() {
    const position = new google.maps.LatLng(+this.order.location.lat, +this.order.location.lng);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: this.zoom,
      center: position
    });

    this.marker = new google.maps.Marker({
      position,
      map: this.map,
      draggable: true
    });

    this.marker.addListener('dragend', event => {
      const self = this;
      self.presentAlertConfirm(event.latLng.lat(), event.latLng.lng());
    });

    this.showButton = true;
  }

  async presentAlertConfirm(lat, lng) {
    const alert = await this.alertController.create({
      header: '¿Desea solicitar al administrador actualizar la ubicación?',
      // header: '¿Desea actualizar la ubicación?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // this.setOriginalLocationsCoords();
          }
        }, {
          text: 'Sí',
          handler: () => {
            this.updateLocationRequest(lat, lng);
            // this.updateLocation(lat, lng);
          }
        }
      ]
    });

    await alert.present();
  }

  setOriginalLocationsCoords() {
    const lat = this.order.location.lat;
    const lng = this.order.location.lng;
    const position = new google.maps.LatLng(lat, lng);
    this.marker.setPosition(position);
    this.map.setCenter(position);
    this.map.setZoom(this.zoom);
  }

  getCurrentDriverPosition() {
    this.driverPosition = this.geolocationService.getDriverPosition();
    const lat = this.driverPosition.coords.latitude;
    const lng = this.driverPosition.coords.longitude;
    const position = new google.maps.LatLng(lat, lng);
    this.marker.setPosition(position);
    this.map.setCenter(position);
    this.map.setZoom(this.zoom);

    this.presentAlertConfirm(lat, lng);
  }

  updateLocation(lat, lng) {
    // this.loadingSpinnerComponent.presentLoadingSpinner('Actualizando ubicación').then(() => {
    //   const body = {
    //     lat: +lat,
    //     lng: +lng,
    //   };
    //   this.locationService.updateLocationCoords(this.order.location.id, body)
    //     .subscribe((response: any) => {
    //       this.orderService.setUpdatedOrders(true);
    //     }, error => {
    //       this.loadingSpinnerComponent.dismissLoadingSpinner();
    //     }, () => {
    //       this.loadingSpinnerComponent.dismissLoadingSpinner();
    //     });
    // });
  }

  updateLocationRequest(lat, lng) {
    const body = {
      lat: +lat,
      lng: +lng,
      location_id: this.order.location.id
    };
    this.updateLocationRequestService.store(body)
      .subscribe((response: any) => {
        // this.locationService.setUpdatedLocations(true);
      }, error => {
        //
      }, () => {
        //
      });
  }

}
