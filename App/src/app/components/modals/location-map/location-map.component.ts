import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {environment} from '../../../../environments/environment';

declare var google;
declare var mqgl;

declare var L;

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss'],
})
export class LocationMapComponent implements OnInit, AfterViewInit {
  @Input() lat: number;
  @Input() lng: number;
  map: any;
  @ViewChild('map', {static: true}) locationMap: ElementRef;
  marker = new google.maps.Marker();

  constructor(private modalController: ModalController,
              private alertController: AlertController) {
  }

  ngOnInit() {
    // window.setTimeout(() => {
    //   // this.initMap();
    //   this.loadMap();
    // }, 1000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // this.loadMap();
      this.initMap();
    }, 5000);
  }

  initMap() {
    this.map = new google.maps.Map(this.locationMap.nativeElement, {
      zoom: 14,
      center: {lat: this.lat, lng: this.lng},
    });

    this.marker = new google.maps.Marker({
      position: {lat: this.lat, lng: this.lng},
      map: this.map,
      draggable: true
    });
  }

  loadMap() {
    // -27.418518, lng: -58.984111??
    // L.mapquest.key = 'L81mEjtgKZDwKMwAsl6YInvGu3IvXXtS';

// 'map' refers to a <div> element with the ID map
//     L.mapquest.map('map', {
//       center: [37.7749, -122.4194],
//       layers: L.mapquest.tileLayer('map'),
//       zoom: 12
//     });

    // const map = new mqgl.Map('map', 'L81mEjtgKZDwKMwAsl6YInvGu3IvXXtS', {
    //   center: [-27.431845, -58.998901],
    //   zoom: 13,
    //   pitch: 60,
    //   bearing: 20
    // });
    L.mapquest.key = 'L81mEjtgKZDwKMwAsl6YInvGu3IvXXtS';
    const map = L.mapquest.map('map', {
      center: [40.7128, -74.0059],
      layers: L.mapquest.tileLayer('map'),
      zoom: 14,
      zoomControl: false
    });

    const directionsControl = L.mapquest.directionsControl({
      className: '',
      directions: {
        options: {
          timeOverage: 25,
          doReverseGeocode: false,
          locale: 'es_AR'
        }
      },
      directionsLayer: {
        startMarker: {
          title: 'Drag to change location',
          draggable: true,
          icon: 'marker-start',
          iconOptions: {
            size: 'sm'
          }
        },
        endMarker: {
          draggable: true,
          title: 'Drag to change location',
          icon: 'marker-end',
          iconOptions: {
            size: 'sm'
          }
        },
        viaMarker: {
          title: 'Drag to change route'
        },
        routeRibbon: {
          showTraffic: true
        },
        alternateRouteRibbon: {
          showTraffic: true
        },
        paddingTopLeft: [450, 20],
        paddingBottomRight: [180, 20],
      },
      startInput: {
        compactResults: true,
        disabled: false,
        location: {},
        placeholderText: 'Starting point or click on the map...',
        geolocation: {
          enabled: true
        },
        clearTitle: 'Remove starting point'
      },
      endInput: {
        compactResults: true,
        disabled: false,
        location: {},
        placeholderText: 'Destination',
        geolocation: {
          enabled: true
        },
        clearTitle: 'Remove this destination'
      },
      addDestinationButton: {
        enabled: true,
        maxLocations: 10,
      },
      routeTypeButtons: {
        enabled: true,
      },
      reverseButton: {
        enabled: true,
      },
      optionsButton: {
        enabled: true,
      },
      routeSummary: {
        enabled: true,
        compactResults: false,
      },
      narrativeControl: {
        enabled: true,
        compactResults: false,
        interactive: true,
      }
    }).addTo(map);

    // map.load(() => {
    //   setTimeout(() => {
    //     map.map.flyTo({speed: 0.5, zoom: 15, pitch: 60, bearing: 180, center: [-27.431845, -58.998901]});
    //   }, 10000);
    // });

    // const map = new mqgl.Map('map', 'L81mEjtgKZDwKMwAsl6YInvGu3IvXXtS', {
    //   center: [-27.431845, -58.998901],
    //   zoom: 13,
    //   pitch: 60,
    //   bearing: 0,
    //   rotation: 90
    // });
    //
    // this.mapElement = map.load(() => {
    //   setTimeout(() => {
    //     map.map.flyTo({speed: 0.5, zoom: 15, pitch: 60, bearing: 180, center: [-27.431845, -58.998901]});
    //   }, 2000);
    // });

    // const marker = new mqgl.Marker([-27.431845, -58.998901], {
    //   icon: map.mapquest.icons.marker(),
    //   draggable: false
    // }).bindPopup('Denver, CO').addTo(map);
    // const map = new mqgl.Map('locationMap', environment.mapquest.key, {
    //   center: [this.lat, this.lng],
    //   zoom: 13,
    //   pitch: 60,
    //   bearing: 0
    // });
    //
    // map.load(() => {
    //   setTimeout(() => {
    //     map.map.flyTo({speed: 0.5, zoom: 15, pitch: 60, bearing: 180, center: [this.lat, this.lng]});
    //     map.icons.marker.add({lng: this.lat, lat: this.lng}, 'blue-sm.png');
    //   }, 2000);
    // });


    // const marker = new mqgl.Marker([this.lat, this.lng], {
    //   icon: map.mapquest.icons.marker(),
    //   draggable: false
    // }).bindPopup('Denver, CO').addTo(map);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '¿Desea confirmar la ubicación?',
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
            this.storeLocation();
          }
        }
      ]
    });

    await alert.present();
  }

  storeLocation() {
    this.modalController.dismiss({
      success: true,
      lat: this.marker.getPosition().lat(),
      lng: this.marker.getPosition().lng(),
    });
  }

  //
  // updateLocationCoords(lat, lng) {
  //   this.loadingSpinnerComponent.presentLoadingSpinner().then(() => {
  //     const body = {
  //       lat: +lat,
  //       lng: +lng
  //     };
  //     this.locationService.updateLocationCoords(this.location.id, body)
  //       .subscribe((response: any) => {
  //         this.locationService.setUpdatedLocations(true);
  //       }, error => {
  //         this.loadingSpinnerComponent.dismissLoadingSpinner();
  //       }, () => {
  //         this.loadingSpinnerComponent.dismissLoadingSpinner();
  //       });
  //   });
  // }

}
