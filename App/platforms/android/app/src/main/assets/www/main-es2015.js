(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+mL1":
/*!**************************************************************************************!*\
  !*** ./src/app/components/modals/delivery-order-map/delivery-order-map.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DeliveryOrderMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOrderMapComponent", function() { return DeliveryOrderMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/v1/order.service */ "EXzW");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-maps */ "tBOM");









const _c0 = ["deliveryOrderMarkersMap"];
class DeliveryOrderMapComponent {
    constructor(navParams, modalController, geolocation, orderService) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.geolocation = geolocation;
        this.orderService = orderService;
        this.orders = [];
        this.markers = [];
        this.radius = 2500;
        this.htmlInfoWindow = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__["HtmlInfoWindow"]();
        this.type = this.navParams.get('type');
    }
    ngOnInit() {
        // this.getOptimizedOrders();
    }
    ngAfterViewInit() {
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
        this.watchLocationObservable = this.geolocation.watchPosition({ enableHighAccuracy: true })
            .subscribe((position) => {
            console.log('got in modal ***__');
            if (position && position.coords && position.coords.accuracy <= 50) {
                const driverPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                // const driverPosition = new google.maps.LatLng(-27.497737, -58.828180);
                this.driverMarker.setPosition(driverPosition);
                // this.map.setCenter(driverPosition);
            }
            else {
                alert('No se pudo obtener ubicación actual del conductor. Por favor habilite el GPS en su dispositivo móvil');
            }
        });
    }
    getCurrentDriverPosition() {
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(position => {
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
            }
            else {
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
        _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__["Environment"].setEnv({
            API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCQ5AidfjBOg7VI2sgkbpnKHPBGAoLQ15w',
            API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCQ5AidfjBOg7VI2sgkbpnKHPBGAoLQ15w'
        });
        const mapOptions = {
            camera: {
                target: {
                    lat: +this.currentOrder.location.lat,
                    lng: +this.currentOrder.location.lng
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMaps"].create('deliveryOrderMarkersMap', mapOptions);
        const center = { lat: +this.currentOrder.location.lat, lng: +this.currentOrder.location.lng };
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
        const position = { lat: +this.currentOrder.location.lat, lng: +this.currentOrder.location.lng };
        this.map.addMarker({
            icon: 'red',
            animation: 'DROP',
            position
        }).then(marker => {
            // this.markers.push(marker);
            this.circle.setCenter(position);
            marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsEvent"].MARKER_CLICK).subscribe((m) => {
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
        const anotherOrders = this.orders.filter(order => order.id !== this.currentOrder.id && order.status !== 'delivered');
        anotherOrders.map(order => {
            const position = { lat: +order.location.lat, lng: +order.location.lng };
            this.map.addMarker({
                icon: 'blue',
                animation: 'DROP',
                position
            }).then(marker => {
                this.markers.push(marker);
                marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsEvent"].MARKER_CLICK).subscribe((m) => {
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
        const anotherOrders = this.orders.filter(order => order.id !== this.currentOrder.id && order.status !== 'delivered');
        const circle = new google.maps.Circle({
            strokeColor: 'black',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.35,
            center: new google.maps.LatLng(+this.currentOrder.location.lat, +this.currentOrder.location.lng),
            radius: this.radius
        });
        const ordersInRadius = anotherOrders.filter(order => google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(+order.location.lat, +order.location.lng), circle.getCenter()) <= this.radius);
        ordersInRadius.map(order => {
            const position = { lat: +order.location.lat, lng: +order.location.lng };
            this.map.addMarker({
                icon: 'blue',
                animation: 'DROP',
                position
            }).then(marker => {
                this.markers.push(marker);
                marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsEvent"].MARKER_CLICK).subscribe((m) => {
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
    setInfoWindowContent(order) {
        const frame = document.createElement('div');
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
        });
        frame.classList.add('map-info-window');
    }
    dismiss() {
        this.modalController.dismiss();
    }
}
DeliveryOrderMapComponent.ɵfac = function DeliveryOrderMapComponent_Factory(t) { return new (t || DeliveryOrderMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"])); };
DeliveryOrderMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeliveryOrderMapComponent, selectors: [["app-delivery-order-map"]], viewQuery: function DeliveryOrderMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, inputs: { type: "type", orders: "orders", currentOrder: "currentOrder" }, decls: 13, vars: 0, consts: [["slot", "end"], ["name", "close", 3, "click"], ["id", "deliveryOrderMarkersMap"], ["deliveryOrderMarkersMap", ""], ["color", "primary", "size", "full", "shape", "round", 3, "click"]], template: function DeliveryOrderMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryOrderMapComponent_Template_ion_icon_click_3_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryOrderMapComponent_Template_ion_button_click_9_listener() { return ctx.viewAllMarkers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ver todos los pendientes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryOrderMapComponent_Template_ion_button_click_11_listener() { return ctx.findNearbyMarkers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Ver pendientes cercanos a m\u00ED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], styles: ["#deliveryOrderMarkersMap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70vh;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 2em;\n  top: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RlbGl2ZXJ5LW9yZGVyLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImRlbGl2ZXJ5LW9yZGVyLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZWxpdmVyeU9yZGVyTWFya2Vyc01hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwdmg7XG59XG5cbmlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDJlbTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "+uyP":
/*!***************************************************************************!*\
  !*** ./src/app/components/order-detail-map/order-detail-map.component.ts ***!
  \***************************************************************************/
/*! exports provided: OrderDetailMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailMapComponent", function() { return OrderDetailMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_v1_update_location_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/v1/update-location-request.service */ "Lkif");
/* harmony import */ var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/v1/geolocation.service */ "3Cxn");
/* harmony import */ var _services_utils_mode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils/mode.service */ "Wmen");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");












const _c0 = ["orderDetailMap"];
function OrderDetailMapComponent_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderDetailMapComponent_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.getCurrentDriverPosition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " MARCAR UBICACI\u00D3N CON MIS COORDENADAS ACTUALES\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class OrderDetailMapComponent {
    constructor(alertController, geolocationService, modeService, updateLocationRequestService) {
        this.alertController = alertController;
        this.geolocationService = geolocationService;
        this.modeService = modeService;
        this.updateLocationRequestService = updateLocationRequestService;
        this.marker = new google.maps.Marker();
        this.zoom = 14;
        this.showButton = false;
    }
    ngOnInit() {
        this.currentMode = this.modeService.getCurrentModeStatus();
    }
    ngAfterViewInit() {
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
    presentAlertConfirm(lat, lng) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
            yield alert.present();
        });
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
            .subscribe((response) => {
            // this.locationService.setUpdatedLocations(true);
        }, error => {
            //
        }, () => {
            //
        });
    }
}
OrderDetailMapComponent.ɵfac = function OrderDetailMapComponent_Factory(t) { return new (t || OrderDetailMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_4__["GeolocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_utils_mode_service__WEBPACK_IMPORTED_MODULE_5__["ModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_update_location_request_service__WEBPACK_IMPORTED_MODULE_3__["UpdateLocationRequestService"])); };
OrderDetailMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrderDetailMapComponent, selectors: [["app-order-detail-map"]], viewQuery: function OrderDetailMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, inputs: { order: "order" }, decls: 3, vars: 1, consts: [["id", "orderDetailMap"], ["orderDetailMap", ""], ["size", "full", "shape", "round", "class", "ion-text-wrap", 3, "click", 4, "ngIf"], ["size", "full", "shape", "round", 1, "ion-text-wrap", 3, "click"]], template: function OrderDetailMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrderDetailMapComponent_ion_button_2_Template, 2, 0, "ion-button", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showButton && ctx.currentMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], styles: ["#orderDetailMap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVyLWRldGFpbC1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6Im9yZGVyLWRldGFpbC1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjb3JkZXJEZXRhaWxNYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHZoO1xufVxuIl19 */"] });


/***/ }),

/***/ "/DmI":
/*!**************************************************************!*\
  !*** ./src/app/services/v1/order-offline-manager.service.ts ***!
  \**************************************************************/
/*! exports provided: OrderOfflineManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderOfflineManagerService", function() { return OrderOfflineManagerService; });
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const STORAGE_REQ_KEY_ORDERS = 'distriapporders';
const STORAGE_REQ_KEY_REQS = 'distriappreqs';
class OrderOfflineManagerService {
    constructor(storage) {
        this.storage = storage;
        this.defaultLat = -27.4862341;
        this.defaultLng = -58.8624276;
    }
    storeLocation(body) {
        console.log(body);
        const address = body.address
            ? body.address
            : `${body.b} ${body.v} ${body.s} ${body.m} ${body.c}`;
        const location = {
            uid: this.generateId(),
            name: address,
            b: body.b,
            v: body.v,
            s: body.s,
            m: body.m,
            c: body.c,
            address,
            city: body.city,
            lat: this.defaultLat,
            lng: this.defaultLng,
            full_address: `${address}, ${body.city}`,
            api_geocoded: false,
            saved_client: false
        };
        const order = {
            uid: this.generateId(),
            status: 'pending',
            status_es: 'pendiente',
            receiver: body.company_name,
            description: body.details,
            phone: body.phone,
            date: body.date,
            location_id: body.location_id,
            not_delivered_motive: '',
            not_delivered_description: '',
            type: body.type,
            flag_color: body.flag_color,
            location
        };
        return this.storage.get(STORAGE_REQ_KEY_ORDERS).then(orders => {
            if ((orders === null || orders === void 0 ? void 0 : orders.length) > 0) {
                orders.push(order);
            }
            else {
                orders = [];
                orders.push(order);
            }
            return this.storage.set(STORAGE_REQ_KEY_ORDERS, orders);
        });
    }
    storeOrder(body) {
        return new Promise((resolve, reject) => {
            const location = {
                uid: this.generateId(),
                name: body.location_name,
                b: body.b,
                v: body.v,
                s: body.s,
                m: body.m,
                c: body.c,
                address: body.location_address,
                city: body.location_city,
                lat: body.location_lat,
                lng: body.location_lng,
                full_address: `${body.location_name}, ${body.location_address}, ${body.location_city}`,
                saved_client: body.saved_client
            };
            const order = {
                uid: this.generateId(),
                status: 'pending',
                status_es: 'pendiente',
                receiver: body.company_name,
                description: body.details,
                phone: body.phone,
                date: body.date,
                location_id: body.location_id,
                not_delivered_motive: '',
                not_delivered_description: '',
                type: body.type,
                flag_color: body.flag_color,
                location
            };
            this.storage.get(STORAGE_REQ_KEY_ORDERS)
                .then(orders => {
                if ((orders === null || orders === void 0 ? void 0 : orders.length) > 0) {
                    orders.push(order);
                }
                else {
                    orders = [];
                    orders.push(order);
                }
                this.storage.set(STORAGE_REQ_KEY_ORDERS, orders)
                    .then(() => {
                    resolve(order);
                }).catch(err => {
                    reject();
                });
            }).catch(err => {
                reject();
            });
        });
    }
    deleteOrder(order) {
        return new Promise((resolve, reject) => {
            this.storage.get(STORAGE_REQ_KEY_ORDERS).then(orders => {
                console.log(orders);
                if ((orders === null || orders === void 0 ? void 0 : orders.length) > 0) {
                    // eliminamos la orden de localstorage
                    const filteredOrders = orders.filter(storedOrder => storedOrder.uid !== order.uid);
                    console.log(filteredOrders);
                    this.storage.set(STORAGE_REQ_KEY_ORDERS, filteredOrders)
                        .then(() => {
                        // eliminamos el request...
                        this.storage.get(STORAGE_REQ_KEY_REQS).then(requests => {
                            const filteredRequests = requests.filter(storedReq => storedReq.pUid !== order.uid);
                            console.log(filteredRequests);
                            this.storage.set(STORAGE_REQ_KEY_REQS, filteredRequests)
                                .then(() => {
                                resolve(true);
                            });
                        });
                    });
                }
            });
        });
    }
    updateOrder(order, body) {
        return new Promise((resolve, reject) => {
            this.storage.get(STORAGE_REQ_KEY_ORDERS).then(orders => {
                console.log(orders);
                if ((orders === null || orders === void 0 ? void 0 : orders.length) > 0) {
                    const orderToUpdateIndex = orders.map(storedOrder => {
                        return storedOrder.uid;
                    }).indexOf(order.uid);
                    if (orderToUpdateIndex > -1) {
                        orders[orderToUpdateIndex].receiver = body.receiver;
                        orders[orderToUpdateIndex].description = body.description;
                        orders[orderToUpdateIndex].phone = body.phone;
                        orders[orderToUpdateIndex].city = body.city;
                        orders[orderToUpdateIndex].address = body.address;
                        orders[orderToUpdateIndex].b = body.b;
                        orders[orderToUpdateIndex].v = body.v;
                        orders[orderToUpdateIndex].s = body.s;
                        orders[orderToUpdateIndex].m = body.m;
                        orders[orderToUpdateIndex].c = body.c;
                    }
                    this.storage.set(STORAGE_REQ_KEY_ORDERS, orders)
                        .then(() => {
                        resolve(true);
                    });
                }
            });
        });
    }
    setDeliveredOrder(order) {
        return new Promise((resolve, reject) => {
            this.storage.get(STORAGE_REQ_KEY_ORDERS).then(orders => {
                console.log(orders);
                if ((orders === null || orders === void 0 ? void 0 : orders.length) > 0) {
                    const orderToUpdateIndex = orders.map(storedOrder => {
                        return storedOrder.uid;
                    }).indexOf(order.uid);
                    if (orderToUpdateIndex > -1) {
                        orders[orderToUpdateIndex].status = 'delivered';
                        orders[orderToUpdateIndex].status_es = 'entregada';
                    }
                    this.storage.set(STORAGE_REQ_KEY_ORDERS, orders)
                        .then(() => {
                        resolve(true);
                    });
                }
            });
        });
    }
    setNotDeliveredOrder(order, body) {
        return new Promise((resolve, reject) => {
            this.storage.get(STORAGE_REQ_KEY_ORDERS).then(orders => {
                console.log(orders);
                if ((orders === null || orders === void 0 ? void 0 : orders.length) > 0) {
                    const orderToUpdateIndex = orders.map(storedOrder => {
                        return storedOrder.uid;
                    }).indexOf(order.uid);
                    if (orderToUpdateIndex > -1) {
                        console.log(orders[orderToUpdateIndex]);
                        orders[orderToUpdateIndex].status = 'not-delivered';
                        orders[orderToUpdateIndex].status_es = 'no entregada';
                        orders[orderToUpdateIndex].not_delivered_motive = body.not_delivered_motive;
                        orders[orderToUpdateIndex].not_delivered_description = body.not_delivered_description;
                        orders[orderToUpdateIndex].name = body.location_name;
                        orders[orderToUpdateIndex].location.name = body.location_address;
                        orders[orderToUpdateIndex].location.address = body.location_address;
                        orders[orderToUpdateIndex].location.b = body.b;
                        orders[orderToUpdateIndex].location.v = body.v;
                        orders[orderToUpdateIndex].location.s = body.s;
                        orders[orderToUpdateIndex].location.m = body.m;
                        orders[orderToUpdateIndex].location.c = body.c;
                        orders[orderToUpdateIndex].save_client = body.save_client;
                    }
                    this.storage.set(STORAGE_REQ_KEY_ORDERS, orders)
                        .then(() => {
                        resolve(true);
                    });
                }
            });
        });
    }
    getOrders() {
        return this.storage.get(STORAGE_REQ_KEY_ORDERS).then(orders => {
            console.log(orders);
            if ((orders === null || orders === void 0 ? void 0 : orders.length) > 0) {
                return orders;
            }
            else {
                return [];
            }
        });
    }
    getLocalOrderId(orderUid) {
        console.log('GETTING LOCAL ORDER by orderUid', orderUid);
        return new Promise((resolve, reject) => {
            this.storage.get(STORAGE_REQ_KEY_ORDERS)
                .then(orders => {
                console.log(orders);
                if ((orders === null || orders === void 0 ? void 0 : orders.length) > 0) {
                    const filteredOrder = orders.filter(order => order.uid === orderUid)[0];
                    console.log('filtered order: ', filteredOrder);
                    if (filteredOrder) {
                        resolve(filteredOrder);
                    }
                }
                reject('local order not found');
            }).catch(err => {
                reject(err);
            });
        });
    }
    storeOrdersInStorage(orders) {
        return new Promise((resolve, reject) => {
            this.storage.set(STORAGE_REQ_KEY_ORDERS, orders)
                .then(() => {
                resolve(orders);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    deleteOrdersInStorage() {
        return new Promise((resolve, reject) => {
            this.storage.set(STORAGE_REQ_KEY_ORDERS, [])
                .then(() => {
                resolve(true);
            }).catch(err => {
                reject(err);
            });
        });
    }
    updateLocalOrderId(orderId, orderUid) {
        console.log('UPDATING LOCAL ORDER ID');
        return new Promise((resolve, reject) => {
            this.storage.get(STORAGE_REQ_KEY_ORDERS)
                .then(orders => {
                if ((orders === null || orders === void 0 ? void 0 : orders.length) > 0) {
                    const index = orders.map(order => {
                        return order.uid;
                    }).indexOf(orderUid);
                    console.log(index);
                    if (index > -1) {
                        orders[index].id = orderId;
                    }
                    this.storage.set(STORAGE_REQ_KEY_ORDERS, orders)
                        .then(() => {
                        resolve(orders[index]);
                    }).catch(err => {
                        reject(err);
                    });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }
    generateId() {
        return Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '').substr(0, 5)
            + (Math.floor(Math.random() * 90 + 10));
    }
}
OrderOfflineManagerService.ɵfac = function OrderOfflineManagerService_Factory(t) { return new (t || OrderOfflineManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_0__["Storage"])); };
OrderOfflineManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderOfflineManagerService, factory: OrderOfflineManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pancho/appruteo1/App/src/main.ts */"zUnb");


/***/ }),

/***/ "0AvR":
/*!****************************************************************************!*\
  !*** ./src/app/components/modals/deliver-order/deliver-order.component.ts ***!
  \****************************************************************************/
/*! exports provided: DeliverOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverOrderComponent", function() { return DeliverOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../toast/toast.component */ "COqc");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/utils/http-upload-file.service */ "DDL3");
/* harmony import */ var _services_utils_camera_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/utils/camera.service */ "uHbY");
/* harmony import */ var _services_v1_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/v1/auth.service */ "HNOL");
/* harmony import */ var _image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../image-detail/image-detail.component */ "mdCS");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/v1/order.service */ "EXzW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/v1/geolocation.service */ "3Cxn");
/* harmony import */ var _services_v1_order_manager_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/v1/order-manager.service */ "7zG+");
/* harmony import */ var _services_v1_offline_order_manager_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/v1/offline-order-manager.service */ "a/TO");
/* harmony import */ var _services_utils_mode_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/utils/mode.service */ "Wmen");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
































function DeliverOrderComponent_ion_col_18_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DeliverOrderComponent_ion_col_18_ion_icon_2_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r8.deleteImage(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function DeliverOrderComponent_ion_col_18_ion_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ion-icon", 19);
} }
function DeliverOrderComponent_ion_col_18_ion_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ion-progress-bar", 20);
} }
function DeliverOrderComponent_ion_col_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DeliverOrderComponent_ion_col_18_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12); const file_r3 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r11.viewImage(file_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, DeliverOrderComponent_ion_col_18_ion_icon_2_Template, 1, 0, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, DeliverOrderComponent_ion_col_18_ion_icon_3_Template, 1, 0, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, DeliverOrderComponent_ion_col_18_ion_progress_bar_4_Template, 1, 0, "ion-progress-bar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", ctx_r0.sanitizer.bypassSecurityTrustUrl(file_r3.src), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.uploadedFilesIndexes.indexOf(i_r4) <= -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.uploadedFilesIndexes.indexOf(i_r4) > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.uploadingFileIndex === i_r4);
} }
function DeliverOrderComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DeliverOrderComponent_div_19_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r13.takePicture(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, " Tomar foto DNI ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.submitting);
} }
function DeliverOrderComponent_ion_progress_bar_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ion-progress-bar", 22);
} }
class DeliverOrderComponent {
    constructor(authService, storage, sanitizer, orderManagerService, orderService, cameraService, geolocationService, httpUploadFileService, offlineOrderManagerService, loadingController, modalController, toastComponent, modeService, barcodeScanner) {
        this.authService = authService;
        this.storage = storage;
        this.sanitizer = sanitizer;
        this.orderManagerService = orderManagerService;
        this.orderService = orderService;
        this.cameraService = cameraService;
        this.geolocationService = geolocationService;
        this.httpUploadFileService = httpUploadFileService;
        this.offlineOrderManagerService = offlineOrderManagerService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.toastComponent = toastComponent;
        this.modeService = modeService;
        this.barcodeScanner = barcodeScanner;
        this.files = [];
        this.submitting = false;
        this.uploadedFilesIndexes = [];
        this.uploadingErrorFilesIndexes = [];
        this.saveClientFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
    }
    ngOnInit() {
        this.checkWatchLocationsSubscription();
        this.storage.get('auth_token').then(authToken => {
            this.authToken = authToken;
        });
        this.currentMode = this.modeService.getCurrentModeStatus();
        console.log(this.currentMode);
    }
    checkWatchLocationsSubscription() {
        if (!this.geolocationService.checkWatchLocationsSubscription()) {
            this.geolocationService.watchPosition();
        }
    }
    takePicture() {
        this.cameraService.takePicture().then((cameraPhotoFile) => {
            this.files.push(cameraPhotoFile);
        }).catch(err => {
            this.toastComponent.presentToast(`No se pudo acceder a la cámara (error: ${err})`, 'middle', 3000);
        });
    }
    uploadFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let i = 0;
            this.uploadingFileIndex = i;
            for (const file of this.files) {
                yield this.uploadFile(file.file)
                    .then(() => {
                    this.uploadedFilesIndexes.push(i);
                })
                    .catch(err => {
                    this.uploadingErrorFilesIndexes.push(i);
                }).finally(() => {
                    i++;
                    this.uploadingFileIndex = i;
                });
            }
        });
    }
    uploadFile(file) {
        return new Promise((resolve, reject) => {
            const body = {
                order_id: this.order.id.toString()
            };
            // this.httpUploadFileService.uploadFile('delivery-images', file, this.authToken, body)
            this.orderManagerService.uploadFile(this.order, body, file, this.authToken)
                .subscribe(() => {
                resolve(true);
            }, error => {
                reject(error);
                this.toastComponent.presentToast('No se pudo carga la imagen de entrega. Intente nuevamente', 'medium', 2500);
            });
        });
    }
    viewImage(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_9__["ImageDetailComponent"],
                componentProps: { file }
            });
            yield modal.present();
        });
    }
    dismiss(result) {
        console.log('clicking dismiss');
        if (result.success) {
            this.order.status = 'delivered';
            this.order.status_es = 'entregada';
            this.orderService.setOrdersUpdated$(true);
        }
        this.modalController.dismiss(result);
    }
    submit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.submitting) {
                return;
            }
            this.submitting = true;
            this.uploadedFilesIndexes = [];
            this.uploadingErrorFilesIndexes = [];
            try {
                yield this.uploadFiles();
                yield this.ensureDriverPosition();
                const coords = ((_a = this.driverPosition) === null || _a === void 0 ? void 0 : _a.coords) || null;
                const saveClient = !!this.saveClientFC.value;
                if (saveClient && !coords) {
                    if (saveClient) {
                        this.toastComponent.presentToast('No se pudo obtener tu ubicación actual. Habilita el GPS para guardar el cliente.', 'middle', 3500);
                        this.submitting = false;
                        return;
                    }
                }
                const body = {
                    status: 'delivered',
                    save_client: saveClient
                };
                if (coords) {
                    body.lat = coords.latitude;
                    body.lng = coords.longitude;
                }
                this.orderManagerService.setDeliveredOrder(this.order, body)
                    .subscribe({
                    next: () => {
                        this.submitting = false;
                        this.dismiss({ success: true, saveClient });
                    },
                    error: (error) => {
                        var _a, _b;
                        console.error('Error setting delivered order', error);
                        this.submitting = false;
                        const message = ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.custom_message) || ((_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message)
                            || 'No se pudo registrar la entrega. Intenta nuevamente.';
                        this.toastComponent.presentToast(message, 'bottom', 3500);
                    }
                });
            }
            catch (err) {
                console.error('Error during delivery submission', err);
                this.submitting = false;
                if (err === null || err === void 0 ? void 0 : err.message) {
                    this.toastComponent.presentToast(err.message, 'middle', 3500);
                }
            }
        });
    }
    deleteImage(i) {
        this.files.splice(i, 1);
    }
    ensureDriverPosition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.driverPosition = this.geolocationService.getDriverPosition();
            if (this.driverPosition && this.driverPosition.coords) {
                return;
            }
            try {
                yield this.geolocationService.getCurrentPosition();
                this.driverPosition = this.geolocationService.getDriverPosition();
            }
            catch (error) {
                console.error('Unable to obtain driver position', error);
            }
        });
    }
}
DeliverOrderComponent.ɵfac = function DeliverOrderComponent_Factory(t) { return new (t || DeliverOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_v1_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_v1_order_manager_service__WEBPACK_IMPORTED_MODULE_13__["OrderManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_utils_camera_service__WEBPACK_IMPORTED_MODULE_7__["CameraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_12__["GeolocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_6__["HttpUploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_v1_offline_order_manager_service__WEBPACK_IMPORTED_MODULE_14__["OfflineOrderManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_utils_mode_service__WEBPACK_IMPORTED_MODULE_15__["ModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_1__["BarcodeScanner"])); };
DeliverOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: DeliverOrderComponent, selectors: [["app-deliver-order"]], inputs: { order: "order" }, decls: 29, vars: 9, consts: [["slot", "end"], [3, "click"], ["name", "close", "slot", "icon-only"], [1, "ion-padding"], [1, "ion-text-center"], [1, "ion-no-margin"], ["size", "6", 4, "ngFor", "ngForOf"], ["class", "ion-text-center", 4, "ngIf"], ["type", "indeterminate", "class", "ion-padding-horizontal", 4, "ngIf"], [1, "ion-text-center", "ion-padding-horizontal"], ["lines", "none"], ["color", "primary", 3, "formControl"], [1, "custom-button", "ion-margin-bottom", 3, "disabled", "click"], ["size", "6"], ["alt", "control-image", 1, "control-image", 3, "src", "click"], ["name", "trash", "class", "delete-icon", 3, "click", 4, "ngIf"], ["name", "checkmark", "class", "checkmark-icon", "color", "success", 4, "ngIf"], ["type", "indeterminate", 4, "ngIf"], ["name", "trash", 1, "delete-icon", 3, "click"], ["name", "checkmark", "color", "success", 1, "checkmark-icon"], ["type", "indeterminate"], [1, "custom-secondary-button", 3, "disabled", "click"], ["type", "indeterminate", 1, "ion-padding-horizontal"]], template: function DeliverOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DeliverOrderComponent_Template_ion_button_click_3_listener() { return ctx.dismiss({ success: false }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, " Entregar orden ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, DeliverOrderComponent_ion_col_18_Template, 5, 4, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, DeliverOrderComponent_div_19_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, DeliverOrderComponent_ion_progress_bar_21_Template, 1, 0, "ion-progress-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "ion-toolbar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "ion-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, "Guardar cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](26, "ion-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "ion-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DeliverOrderComponent_Template_ion_button_click_27_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, " Entregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.order.location.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", ctx.order.receiver, " (", ctx.order.phone, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.order.description ? ctx.order.description : " -");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.currentMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formControl", ctx.saveClientFC);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx.submitting);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonProgressBar"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #0d1e38 !important;\n  --color: #ffffff !important;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vZGVsaXZlci1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QUFiQTtFQUNFLGdDQUFBO0VBQ0EsMkJBQUE7QUFnQkY7O0FBYkE7RUFDRSx5QkFBQTtBQWdCRiIsImZpbGUiOiJkZWxpdmVyLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9ybS1ncm91cCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzXCI7XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMwZDFlMzggIWltcG9ydGFudDtcbiAgLS1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "0ivp":
/*!**************************************************!*\
  !*** ./src/app/services/utils/pusher.service.ts ***!
  \**************************************************/
/*! exports provided: PusherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherService", function() { return PusherService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PusherService {
    constructor(http) {
        this.http = http;
        //
    }
    init(authToken) {
        this.pusher = new Pusher(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].pusher.key, {
            cluster: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].pusher.cluster,
            forceTLS: false,
            authEndpoint: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].pusher.authEndpoint,
            auth: {
                params: {},
                headers: {
                    Authorization: 'Bearer ' + authToken,
                    Accept: 'application/json'
                }
            }
        });
        return this.pusher;
    }
}
PusherService.ɵfac = function PusherService_Factory(t) { return new (t || PusherService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PusherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PusherService, factory: PusherService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "29Iw":
/*!****************************************************************************!*\
  !*** ./src/app/components/modals/document-form/document-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: DocumentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFormComponent", function() { return DocumentFormComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_utils_camera_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/utils/camera.service */ "uHbY");
/* harmony import */ var _services_utils_image_picker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/utils/image-picker.service */ "FtwJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");










function DocumentFormComponent_ion_select_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-select-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", document_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", document_r1.name, " ");
} }
class DocumentFormComponent {
    constructor(modalController, imagePickerService, navParams, cameraService) {
        this.modalController = modalController;
        this.imagePickerService = imagePickerService;
        this.navParams = navParams;
        this.cameraService = cameraService;
        this.documents = [];
        this.documentFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.documents = navParams.get('documents');
    }
    ngOnInit() {
    }
    takePicture() {
        this.cameraService.takePicture();
    }
    pickImages() {
        // this.imagePickerService.pickImages();
    }
    submit() {
        this.modalController.dismiss({ document: this.documentFormControl.value, success: true });
    }
}
DocumentFormComponent.ɵfac = function DocumentFormComponent_Factory(t) { return new (t || DocumentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_utils_image_picker_service__WEBPACK_IMPORTED_MODULE_2__["ImagePickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_utils_camera_service__WEBPACK_IMPORTED_MODULE_1__["CameraService"])); };
DocumentFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DocumentFormComponent, selectors: [["app-document-form"]], inputs: { documents: "documents" }, decls: 25, vars: 2, consts: [[1, "ion-margin"], ["placeholder", "Seleccione", "okText", "Ok", "cancelText", "Cancelar", 3, "formControl"], ["class", "ion-text-wrap", 3, "value", 4, "ngFor", "ngForOf"], ["tappable", "", 1, "first-item", "item-section", 3, "click"], ["size", "2"], ["name", "camera"], ["size", "10", 1, "item-text"], ["tappable", "", 1, "item", "item-section", 3, "click"], ["name", "images"], ["color", "light", "size", "full", "shape", "round", 3, "click"], [1, "ion-text-wrap", 3, "value"]], template: function DocumentFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "TIPO");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DocumentFormComponent_ion_select_option_6_Template, 2, 2, "ion-select-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentFormComponent_Template_div_click_7_listener() { return ctx.takePicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " AGREGAR FOTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentFormComponent_Template_div_click_14_listener() { return ctx.pickImages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " AGREGAR DESDE GALER\u00CDA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentFormComponent_Template_ion_button_click_23_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " ACEPTAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.documentFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.documents);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSelectOption"]], styles: [".first-item[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.item-section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 2em !important;\n}\n\n.item-text[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\nion-select[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RvY3VtZW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxnQkFBQTtBQURGOztBQVFBO0VBQ0UseUJBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7QUFMRiIsImZpbGUiOiJkb2N1bWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LWl0ZW0ge1xuICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pdGVtIHtcbiAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5pdGVtLXNlY3Rpb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS10ZXh0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ "34vB":
/*!**************************************************************************!*\
  !*** ./src/app/components/modals/location-map/location-map.component.ts ***!
  \**************************************************************************/
/*! exports provided: LocationMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationMapComponent", function() { return LocationMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





const _c0 = ["map"];
class LocationMapComponent {
    constructor(modalController, alertController) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.marker = new google.maps.Marker();
    }
    ngOnInit() {
        // window.setTimeout(() => {
        //   // this.initMap();
        //   this.loadMap();
        // }, 1000);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            // this.loadMap();
            this.initMap();
        }, 5000);
    }
    initMap() {
        this.map = new google.maps.Map(this.locationMap.nativeElement, {
            zoom: 14,
            center: { lat: this.lat, lng: this.lng },
        });
        this.marker = new google.maps.Marker({
            position: { lat: this.lat, lng: this.lng },
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
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
            yield alert.present();
        });
    }
    storeLocation() {
        this.modalController.dismiss({
            success: true,
            lat: this.marker.getPosition().lat(),
            lng: this.marker.getPosition().lng(),
        });
    }
}
LocationMapComponent.ɵfac = function LocationMapComponent_Factory(t) { return new (t || LocationMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"])); };
LocationMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LocationMapComponent, selectors: [["app-location-map"]], viewQuery: function LocationMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.locationMap = _t.first);
    } }, inputs: { lat: "lat", lng: "lng" }, decls: 4, vars: 0, consts: [["id", "map"], ["map", ""], ["size", "full", "color", "primary", "shape", "round", 3, "click"]], template: function LocationMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocationMapComponent_Template_ion_button_click_2_listener() { return ctx.presentAlertConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " CONFIRMAR UBICACI\u00D3N\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], styles: ["#map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvY2F0aW9uLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBSkYiLCJmaWxlIjoibG9jYXRpb24tbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8jbG9jYXRpb25NYXAge1xuLy8gIHdpZHRoOiAxMDAlO1xuLy8gIGhlaWdodDogMTAwdmg7XG4vL31cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuIl19 */"] });


/***/ }),

/***/ "3Cxn":
/*!****************************************************!*\
  !*** ./src/app/services/v1/geolocation.service.ts ***!
  \****************************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");








class GeolocationService {
    constructor(http, geolocation, zone) {
        this.http = http;
        this.geolocation = geolocation;
        this.zone = zone;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL;
        this.V1 = 'v1/app/';
        this.driverPosition$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.lastUpdateTime = Date.now();
        this.minFrequency = 180000; // milliseconds
        this.geolocationOptions = {
            enableHighAccuracy: true,
            timeout: 10000
        };
    }
    storeDriverGeoposition(body) {
        return this.http.post(`${this.API_URL}${this.V1}driver-geopositions`, body);
    }
    getDriverPosition$() {
        return this.driverPosition$.asObservable();
    }
    setDriverPosition$(position) {
        console.log('setting new driver position');
        this.driverPosition$.next(position);
    }
    getDriverPosition() {
        return this.driverPosition$.getValue();
    }
    getCurrentPosition() {
        return this.geolocation.getCurrentPosition(this.geolocationOptions)
            .then((position) => {
            if (position && position.coords) {
                this.setDriverPosition$(position);
            }
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    watchPosition() {
        console.log('watching position');
        this.watchPositionSubscription = this.geolocation.watchPosition(this.geolocationOptions)
            .subscribe((position) => {
            this.zone.run(() => {
                console.log('got new position');
                if (position && position.coords) {
                    this.setDriverPosition$(position);
                    if (this.lastUpdateTime && Date.now() - this.lastUpdateTime < this.minFrequency) {
                        // ignoring position
                    }
                    else {
                        this.setDriverPositionBody(position);
                    }
                }
            });
        });
    }
    stopWatchingPosition() {
        console.log('stopping watching position');
        if (this.watchPositionSubscription) {
            this.watchPositionSubscription.unsubscribe();
        }
    }
    checkWatchLocationsSubscription() {
        return this.watchPositionSubscription;
    }
    setDriverPositionBody(position) {
        const body = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            altitude_accuracy: position.coords.altitudeAccuracy,
            heading: position.coords.heading,
            speed: position.coords.speed
        };
        this.storeDriverGeoposition(body)
            .subscribe(response => {
            this.lastUpdateTime = Date.now();
        });
    }
    logDirectionsRouteRequest() {
        return this.http.post(`${this.API_URL}${this.V1}directions-route-request`, null);
    }
}
GeolocationService.ɵfac = function GeolocationService_Factory(t) { return new (t || GeolocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
GeolocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeolocationService, factory: GeolocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7zG+":
/*!******************************************************!*\
  !*** ./src/app/services/v1/order-manager.service.ts ***!
  \******************************************************/
/*! exports provided: OrderManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManagerService", function() { return OrderManagerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _order_offline_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-offline-manager.service */ "/DmI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _offline_order_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offline-order-manager.service */ "a/TO");
/* harmony import */ var _utils_mode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mode.service */ "Wmen");
/* harmony import */ var _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../interfaces/ModeStatus */ "iK7v");
/* harmony import */ var _utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/http-upload-file.service */ "DDL3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");















class OrderManagerService {
    constructor(orderOfflineManagerService, 
    // private networkService: NetworkService,
    httpUploadFileService, modeService, httpClient, offlineOrderManagerService) {
        this.orderOfflineManagerService = orderOfflineManagerService;
        this.httpUploadFileService = httpUploadFileService;
        this.modeService = modeService;
        this.httpClient = httpClient;
        this.offlineOrderManagerService = offlineOrderManagerService;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL;
        this.V1 = 'v1/app/';
        this.orders$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    setNotDeliveredOrder(order, body) {
        if (this.modeService.getCurrentModeStatus() === _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_7__["ModeStatus"].Offline) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
                this.orderOfflineManagerService.getLocalOrderId(order.uid)
                    .then((localOrder) => {
                    console.log(localOrder);
                    Promise.all([
                        this.orderOfflineManagerService.setNotDeliveredOrder(order, body),
                        this.offlineOrderManagerService.storeRequest('request', 'PUT', body, localOrder.uid, 'not-delivered')
                    ]).then(values => {
                        observer.next({ success: true });
                    }).catch(err => {
                        observer.error(err);
                    });
                }).catch(err => {
                    observer.error(err);
                });
            });
        }
        else {
            const url = `${this.API_URL}${this.V1}orders/${order.id}/not-delivered`;
            return this.httpClient.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
                throw new Error(err);
            }));
        }
    }
    setDeliveredOrder(order, body) {
        console.log(this.modeService.getCurrentModeStatus());
        if (this.modeService.getCurrentModeStatus() === _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_7__["ModeStatus"].Offline) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
                this.orderOfflineManagerService.getLocalOrderId(order.uid)
                    .then((localOrder) => {
                    console.log(localOrder);
                    Promise.all([
                        this.orderOfflineManagerService.setDeliveredOrder(order),
                        this.offlineOrderManagerService.storeRequest('request', 'PUT', body, localOrder.uid, 'delivered')
                    ]).then(values => {
                        observer.next({ success: true });
                    }).catch(err => {
                        observer.error(err);
                    });
                }).catch(err => {
                    observer.error(err);
                });
            });
        }
        else {
            const url = `${this.API_URL}${this.V1}orders/${order.id}/delivered`;
            return this.httpClient.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
                throw new Error(err);
            }));
        }
    }
    deleteOrder(order) {
        if (this.modeService.getCurrentModeStatus() === _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_7__["ModeStatus"].Offline) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
                this.orderOfflineManagerService.deleteOrder(order).then(() => {
                    observer.next({ success: true });
                }).catch(err => {
                    observer.error(err);
                });
            });
        }
        else {
            const url = `${this.API_URL}${this.V1}orders/${order.id}`;
            return this.httpClient.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
                // this.offlineManager.storeRequest(url, 'PUT', data);
                throw new Error(err);
            }));
        }
    }
    updateOrder(order, body) {
        if (this.modeService.getCurrentModeStatus() === _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_7__["ModeStatus"].Offline) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
                this.orderOfflineManagerService.getLocalOrderId(order.uid)
                    .then((localOrder) => {
                    console.log(localOrder);
                    Promise.all([
                        this.orderOfflineManagerService.updateOrder(order, body),
                        this.offlineOrderManagerService.storeRequest('request', 'PUT', body, localOrder.uid, 'update')
                    ]).then(values => {
                        observer.next({ success: true });
                    }).catch(err => {
                        observer.error(err);
                    });
                }).catch(err => {
                    observer.error(err);
                });
            });
        }
        else {
            const url = `${this.API_URL}${this.V1}orders/${order.id}`;
            return this.httpClient.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
                // this.offlineManager.storeRequest(url, 'PUT', data);
                throw new Error(err);
            }));
        }
    }
    storeLocation(body) {
        console.log('attempting to store location');
        const url = `${this.API_URL}${this.V1}locations`;
        if (this.modeService.getCurrentModeStatus() === _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_7__["ModeStatus"].Offline) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
                this.orderOfflineManagerService.storeLocation(body)
                    .then(order => {
                    console.log(order);
                    this.offlineOrderManagerService.storeRequest('request', 'POST', body, order.uid, 'store-location')
                        .then(request => {
                        console.log(request);
                        observer.next();
                    }).catch(err => {
                        observer.error(err);
                    });
                }).catch(err => {
                    observer.error(err);
                });
            });
        }
        else {
            return this.httpClient.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
                throw new Error(err);
            }));
        }
    }
    store(body) {
        if (this.modeService.getCurrentModeStatus() === _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_7__["ModeStatus"].Offline) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
                this.orderOfflineManagerService.storeOrder(body)
                    .then(order => {
                    console.log(order);
                    this.offlineOrderManagerService.storeRequest('request', 'POST', body, order.uid, 'store')
                        .then(request => {
                        console.log(request);
                        observer.next();
                    }).catch(err => {
                        observer.error(err);
                    });
                }).catch(err => {
                    observer.error(err);
                });
            });
        }
        else {
            const url = `${this.API_URL}${this.V1}orders`;
            return this.httpClient.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
                throw new Error(err);
            }));
        }
    }
    uploadFile(order, body, file, authToken) {
        if (this.modeService.getCurrentModeStatus() === _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_7__["ModeStatus"].Offline) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
                this.orderOfflineManagerService.getLocalOrderId(order.uid)
                    .then((localOrder) => {
                    console.log(localOrder);
                    Promise.all([
                        this.orderOfflineManagerService.updateOrder(order, body),
                        this.offlineOrderManagerService.storeRequest('file', 'POST', body, localOrder.uid, 'upload-file', null, file, authToken)
                    ]).then(values => {
                        observer.next({ success: true });
                    }).catch(err => {
                        observer.error(err);
                    });
                }).catch(err => {
                    observer.error(err);
                });
            });
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.httpUploadFileService.uploadFile('delivery-images', file, authToken, body))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
                throw new Error(err);
            }));
        }
    }
    getOrdersByDate(type, day, month, year) {
        console.log(`*****GETTING ORDERS BY DATE ${type} ${day} ${month} ${year}`);
        console.log(this.modeService.getCurrentModeStatus());
        if (this.modeService.getCurrentModeStatus() === _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_7__["ModeStatus"].Offline) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.orderOfflineManagerService.getOrders());
        }
        else {
            const url = `${this.API_URL}${this.V1}orders/type/${type}/day/${day}/month/${month}/year/${year}`;
            return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => response.orders), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])({
                next: val => {
                    console.log('on next');
                    console.log(val);
                    this.orderOfflineManagerService.deleteOrdersInStorage()
                        .finally(() => {
                        return val;
                    });
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
                console.log(err);
                throw new Error(err);
            }));
        }
    }
    storeOrdersInLocalStorage(orders) {
        return new Promise((resolve, reject) => {
            this.orderOfflineManagerService.storeOrdersInStorage(orders)
                .then(storedOrders => {
                resolve(storedOrders);
            }).catch(err => {
                reject(err);
            });
        });
    }
    // observables
    setOrders$(orders) {
        console.log('setting orders observable', orders);
        this.orders$.next(orders);
    }
    getOrders$() {
        return this.orders$.asObservable();
    }
}
OrderManagerService.ɵfac = function OrderManagerService_Factory(t) { return new (t || OrderManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_order_offline_manager_service__WEBPACK_IMPORTED_MODULE_2__["OrderOfflineManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_8__["HttpUploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_utils_mode_service__WEBPACK_IMPORTED_MODULE_6__["ModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_offline_order_manager_service__WEBPACK_IMPORTED_MODULE_5__["OfflineOrderManagerService"])); };
OrderManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: OrderManagerService, factory: OrderManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: 'http://127.0.0.1:8000/api/',
    PERSONAL_API_URL: 'http://127.0.0.1:8001/api/',
    firebaseConfig: {
        apiKey: 'AIzaSyDw54VQaZ91JdVUw7_p98c_lTxa8Pt5Icw',
        authDomain: 'distriapp-2021.firebaseapp.com',
        projectId: 'distriapp-2021',
        storageBucket: 'distriapp-2021.appspot.com',
        messagingSenderId: '396718208421',
        appId: '1:396718208421:web:a7a2f7c51a3cd98f5f644c',
        measurementId: 'G-1TCZ2SCEM2'
    },
    mapquest: {
        key: 'L81mEjtgKZDwKMwAsl6YInvGu3IvXXtS'
    },
    pusher: {
        key: '70177c7279134eac5800',
        cluster: 'us2',
        authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth'
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "COqc":
/*!*****************************************************!*\
  !*** ./src/app/components/toast/toast.component.ts ***!
  \*****************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ToastComponent {
    constructor(toastController) {
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    presentToast(message, position, duration = 2000, color = 'dark') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration,
                position,
                color
            });
            yield toast.present();
        });
    }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"])); };
ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ToastComponent, selectors: [["app-toast"]], decls: 0, vars: 0, template: function ToastComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2FzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Cjz0":
/*!************************************************!*\
  !*** ./src/app/interfaces/ConnectionStatus.ts ***!
  \************************************************/
/*! exports provided: ConnectionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionStatus", function() { return ConnectionStatus; });
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus["Offline"] = 0] = "Offline";
    ConnectionStatus[ConnectionStatus["Online"] = 1] = "Online";
})(ConnectionStatus || (ConnectionStatus = {}));


/***/ }),

/***/ "DDL3":
/*!************************************************************!*\
  !*** ./src/app/services/utils/http-upload-file.service.ts ***!
  \************************************************************/
/*! exports provided: HttpUploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUploadFileService", function() { return HttpUploadFileService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "te5A");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");










class HttpUploadFileService {
    constructor(http, fileOpener, storage, file) {
        this.http = http;
        this.fileOpener = fileOpener;
        this.storage = storage;
        this.file = file;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.V1 = 'v1/app/';
    }
    uploadFile(url, file, authToken, body) {
        const uri = encodeURI(`${this.API_URL}${this.V1}${url}`);
        const headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + authToken
        };
        return new Promise((resolve, reject) => {
            this.http.uploadFile(uri, body, headers, encodeURI(file), 'file')
                .then((data) => {
                resolve(true);
            }).catch(err => {
                reject(err);
            });
        });
    }
    downloadFile(url, body, authToken, filename, mime) {
        const uri = encodeURI(`${this.API_URL}${this.V1}${url}`);
        const headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + authToken
        };
        const filePath = this.file.dataDirectory + filename.split(' ').join('_');
        // for iOS use this.file.documentsDirectory
        return new Promise((resolve, reject) => {
            this.http.downloadFile(uri, body, headers, filePath)
                .then((data) => {
                this.fileOpener.open(filePath, mime)
                    .then(() => {
                    resolve(true);
                })
                    .catch(err => {
                    reject(err);
                });
            }).catch(err => {
                reject(err);
            });
        });
    }
}
HttpUploadFileService.ɵfac = function HttpUploadFileService_Factory(t) { return new (t || HttpUploadFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__["HTTP"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__["FileOpener"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"])); };
HttpUploadFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: HttpUploadFileService, factory: HttpUploadFileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EXzW":
/*!**********************************************!*\
  !*** ./src/app/services/v1/order.service.ts ***!
  \**********************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class OrderService {
    // private currentOrdersToDeliverSource = new BehaviorSubject<Order[]>(null);
    // currentOrdersToDeliver = this.currentOrdersToDeliverSource.asObservable();
    // private ordersUpdated = new BehaviorSubject<boolean>(false);
    // currentOrders = this.ordersUpdated.asObservable();
    // private order = new BehaviorSubject<Order>(null);
    // currentOrder = this.order.asObservable();
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.V1 = 'v1/app/';
        this.currentOrder$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.currentOrders$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.ordersUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    // getOrders(type) {
    //   return this.http.get(`${this.API_URL}${this.V1}orders/${type}`);
    // }
    updateOrder(order, body) {
        return this.http.put(`${this.API_URL}${this.V1}orders/${order.id}`, body);
    }
    //
    // getTodayOrders(type) {
    //   return this.http.get(`${this.API_URL}${this.V1}orders/today/${type}`);
    // }
    //
    // getTodayOptimizedOrders(type) {
    //   return this.http.get(`${this.API_URL}${this.V1}orders/today/optimized/${type}`);
    // }
    //
    // getOrdersByDeliveryOrder(type) {
    //   return this.http.get(`${this.API_URL}${this.V1}orders/delivery-order/type/${type}`);
    // }
    //
    // getCurrentOrder() {
    //   return this.http.get(`${this.API_URL}${this.V1}orders/current-order`);
    // }
    // updateCurrentOrdersToDeliver(orders: Order[]) {
    //   this.currentOrdersToDeliverSource.next(orders);
    // }
    // updateCurrentOrder(order: Order) {
    //   this.order.next(order);
    // }
    // setUpdatedOrders(updated: boolean) {
    //   this.ordersUpdated.next(updated);
    // }
    /////
    store(body) {
        return this.http.post(`${this.API_URL}${this.V1}orders`, body);
    }
    getOrdersByDate(type, day, month, year) {
        return this.http.get(`${this.API_URL}${this.V1}orders/type/${type}/day/${day}/month/${month}/year/${year}`);
    }
    setOrderStatus(order, body) {
        return this.http.put(`${this.API_URL}${this.V1}orders/${order.id}/status`, body);
    }
    setNotDeliveredOrder(order, body) {
        return this.http.put(`${this.API_URL}${this.V1}orders/${order.id}/not-delivered`, body);
    }
    setDeliveredOrder(order, body) {
        return this.http.put(`${this.API_URL}${this.V1}orders/${order.id}/delivered`, body);
    }
    optimizeOrders(body) {
        return this.http.post(`${this.API_URL}${this.V1}orders/optimize`, body);
    }
    deleteOrder(order) {
        return this.http.delete(`${this.API_URL}${this.V1}orders/${order.id}`);
    }
    setDeliveryOrderToOrders(body) {
        return this.http.put(`${this.API_URL}${this.V1}orders/delivery-order`, body);
    }
    // Observables
    getCurrentOrder$() {
        return this.currentOrder$.asObservable();
    }
    setCurrentOrder$(order) {
        this.currentOrder$.next(order);
    }
    getCurrentOrders$() {
        return this.currentOrders$.asObservable();
    }
    setCurrentOrders$(orders) {
        this.currentOrders$.next(orders);
    }
    setOrdersUpdated$(ordersUpdated) {
        this.ordersUpdated$.next(ordersUpdated);
    }
    getOrdersUpdated$() {
        return this.ordersUpdated$.asObservable();
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EZtS":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/google-maps */ "tBOM");
/* harmony import */ var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/v1/geolocation.service */ "3Cxn");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







const _c0 = ["distriAppMap"];
class MapComponent {
    constructor(geolocationService, platform) {
        this.geolocationService = geolocationService;
        this.platform = platform;
        this.orders = [];
        this.deliverOrderEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notDeliverOrderEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateDeliveryOrderEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectOrderEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.markers = [];
        this.htmlInfoWindow = null;
        this.usingNativeMaps = false;
        this.webMarkers = [];
        this.webInfoWindow = null;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        this.calculatingRoute = false;
        this.steps = [];
        this.mapLoaded = false;
        this.usingNativeMaps = this.platform.is('hybrid');
        if (this.usingNativeMaps) {
            try {
                this.htmlInfoWindow = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_1__["HtmlInfoWindow"]();
            }
            catch (error) {
                console.warn('HtmlInfoWindow not available in this platform', error);
                this.htmlInfoWindow = null;
            }
        }
        else {
            try {
                this.webInfoWindow = new google.maps.InfoWindow();
            }
            catch (error) {
                console.warn('Google Maps InfoWindow not available', error);
                this.webInfoWindow = null;
            }
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.tryInitMap();
        }, 500);
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        this.tryInitMap();
        if ((this.map && this.driverMarker && this.driverPosition) ||
            (!this.usingNativeMaps && this.webMap && this.webDriverMarker && this.driverPosition)) {
            console.log('****GOT NEW DRIVER POSITION');
            this.updateDriverMarkerPosition();
        }
        if ((this.map && this.driverMarker) || (!this.usingNativeMaps && this.webMap && this.webDriverMarker)) {
            if (((_b = (_a = changes.currentOrder) === null || _a === void 0 ? void 0 : _a.currentValue) === null || _b === void 0 ? void 0 : _b.id) !== ((_d = (_c = changes.currentOrder) === null || _c === void 0 ? void 0 : _c.previousValue) === null || _d === void 0 ? void 0 : _d.id)) {
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
    tryInitMap() {
        var _a, _b, _c, _d;
        if (this.mapLoaded) {
            return;
        }
        if (!this.driverPosition || !this.driverPosition.coords || !((_b = (_a = this.currentOrder) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.lat) || !((_d = (_c = this.currentOrder) === null || _c === void 0 ? void 0 : _c.location) === null || _d === void 0 ? void 0 : _d.lng)) {
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
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_1__["Environment"].setEnv({
                API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCQ5AidfjBOg7VI2sgkbpnKHPBGAoLQ15w',
                API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCQ5AidfjBOg7VI2sgkbpnKHPBGAoLQ15w'
            });
            const mapOptions = {
                camera: {
                    target: {
                        lat: +this.currentOrder.location.lat,
                        lng: +this.currentOrder.location.lng
                    },
                    zoom: 18,
                    tilt: 30
                }
            };
            this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMaps"].create(this.mapElement.nativeElement, mapOptions);
            const center = { lat: +this.currentOrder.location.lat, lng: +this.currentOrder.location.lng };
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
        else {
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
            const driverPosition = {
                lat: this.driverPosition.coords.latitude,
                lng: this.driverPosition.coords.longitude
            };
            this.driverMarker.setPosition(driverPosition);
        }
        else if (!this.usingNativeMaps && this.webDriverMarker) {
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
            }
            else {
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
            const driverMarkerPosition = driverLatLng;
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
        else {
            if (this.webDriverMarker) {
                this.webDriverMarker.setPosition(driverLatLng);
            }
            else {
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
            const currentOrderPosition = { lat: orderLat, lng: orderLng };
            this.circle.setVisible(false);
            const markerOptions = {
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
                marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsEvent"].MARKER_CLICK).subscribe(() => {
                    this.selectOrder(this.currentOrder);
                    if (this.htmlInfoWindow) {
                        this.htmlInfoWindow.close();
                        this.setInfoWindowContent(this.currentOrder);
                        this.htmlInfoWindow.open(marker);
                    }
                });
                const bounds = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_1__["LatLngBounds"]([
                    { lat: orderLat, lng: orderLng },
                    { lat: this.driverMarker.getPosition().lat, lng: this.driverMarker.getPosition().lng }
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
        else {
            if (!this.webMap) {
                return;
            }
            const currentOrderPosition = new google.maps.LatLng(orderLat, orderLng);
            const markerOptions = {
                position: currentOrderPosition,
                map: this.webMap,
                icon: { url }
            };
            if (markerLabel) {
                markerOptions.label = {
                    text: markerLabel,
                    color: '#ffffff',
                    fontWeight: 'bold'
                };
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
            }
            else {
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
                const position = { lat, lng };
                const markerOptions = {
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
                    marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsEvent"].MARKER_CLICK).subscribe(() => {
                        this.selectOrder(order);
                        if (this.htmlInfoWindow) {
                            this.htmlInfoWindow.close();
                            this.setInfoWindowContent(order);
                            this.htmlInfoWindow.open(marker);
                        }
                    });
                });
            }
            else if (this.webMap) {
                const position = new google.maps.LatLng(lat, lng);
                const markerOptions = {
                    position,
                    map: this.webMap,
                    icon: { url }
                };
                if (label) {
                    markerOptions.label = {
                        text: label,
                        color: '#ffffff',
                        fontWeight: 'bold'
                    };
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
    setInfoWindowContent(order) {
        const frame = document.createElement('div');
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
            }
            else {
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
                    const point = { lat: nextSegment[k].lat(), lng: nextSegment[k].lng() };
                    points.push(point);
                    polyline.getPath().push(nextSegment[k]);
                    bounds.extend(nextSegment[k]);
                }
            }
        }
        const steps = directionResult.routes[0].legs[0].steps;
        steps.map(routeStep => {
            const step = {
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
            }).then((p) => {
                this.polyline = p;
            });
        }
        else if (this.webMap) {
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
        }
        else {
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
    selectOrder(order) {
        this.selectOrderEvent.emit(order);
    }
    getMarkerUrl(order) {
        if (order.flag_color === '#FF4051') {
            // return 'https://maps.google.com/mapfiles/ms/icons/red.png';
            return './assets/markers/red.png';
        }
        else if (order.flag_color === '#ffd700') {
            // return 'https://maps.google.com/mapfiles/ms/icons/yellow.png';
            return './assets/markers/yellow.png';
        }
        // return 'https://maps.google.com/mapfiles/ms/icons/green.png';
        return './assets/markers/green.png';
    }
    getMarkerLabel(order) {
        if (!order || !this.orders || this.orders.length === 0) {
            return '';
        }
        const byId = this.orders.findIndex(o => (o === null || o === void 0 ? void 0 : o.id) === (order === null || order === void 0 ? void 0 : order.id) && (o === null || o === void 0 ? void 0 : o.id) != null);
        if (byId !== -1) {
            return (byId + 1).toString();
        }
        const byUid = this.orders.findIndex(o => (o === null || o === void 0 ? void 0 : o.uid) === (order === null || order === void 0 ? void 0 : order.uid));
        return byUid !== -1 ? (byUid + 1).toString() : '';
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, inputs: { currentOrder: "currentOrder", nearbyOrders: "nearbyOrders", markersOrders: "markersOrders", driverPosition: "driverPosition", orders: "orders", radius: "radius" }, outputs: { deliverOrderEvent: "deliverOrderEvent", notDeliverOrderEvent: "notDeliverOrderEvent", updateDeliveryOrderEvent: "updateDeliveryOrderEvent", selectOrderEvent: "selectOrderEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["id", "distriAppMap"], ["distriAppMap", ""]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n#distriAppMap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2Rpc3RyaUFwcE1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ "FtwJ":
/*!********************************************************!*\
  !*** ./src/app/services/utils/image-picker.service.ts ***!
  \********************************************************/
/*! exports provided: ImagePickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePickerService", function() { return ImagePickerService; });
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ImagePickerService {
    constructor(imagePicker, file) {
        this.imagePicker = imagePicker;
        this.file = file;
        this.files = [];
        this.filesSrc = [];
        this.filenames = [];
    }
    pickImages(imagePickerOptions) {
        return new Promise((resolve, reject) => {
            this.imagePicker.getPictures(imagePickerOptions).then((results) => {
                results.map(result => {
                    this.files = [];
                    this.filesSrc = [];
                    this.filenames = [];
                    this.files.push(result);
                    const filename = result.substring(result.lastIndexOf('/') + 1);
                    const path = result.substring(0, result.lastIndexOf('/') + 1);
                    this.file.readAsDataURL(path, filename).then(res => this.filesSrc.push(res));
                    this.filenames.push(filename);
                    const dataArray = [
                        this.files,
                        this.filesSrc,
                        this.filenames
                    ];
                    resolve(dataArray);
                });
            }, (err) => {
                reject(err);
            });
        });
    }
}
ImagePickerService.ɵfac = function ImagePickerService_Factory(t) { return new (t || ImagePickerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_0__["ImagePicker"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__["File"])); };
ImagePickerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ImagePickerService, factory: ImagePickerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "GMw2":
/*!********************************************************************************!*\
  !*** ./src/app/components/modals/update-password/update-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: UpdatePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordComponent", function() { return UpdatePasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v1/driver.service */ "rTgA");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../loading-spinner/loading-spinner.component */ "nk+c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");









class UpdatePasswordComponent {
    constructor(formBuilder, driverService, loadingSpinnerComponent, modalController) {
        this.formBuilder = formBuilder;
        this.driverService = driverService;
        this.loadingSpinnerComponent = loadingSpinnerComponent;
        this.modalController = modalController;
        this.updatePasswordForm = this.formBuilder.group({
            oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            passwordConfirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    submitForm() {
        const body = {
            old_password: this.updatePasswordForm.value.oldPassword,
            password: this.updatePasswordForm.value.password,
            password_confirmation: this.updatePasswordForm.value.passwordConfirmation,
        };
        this.driverService.updatePassword(body)
            .subscribe((response) => {
            //
        }, error => {
            //
        }, () => {
            this.modalController.dismiss({ success: true });
        });
    }
}
UpdatePasswordComponent.ɵfac = function UpdatePasswordComponent_Factory(t) { return new (t || UpdatePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"])); };
UpdatePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UpdatePasswordComponent, selectors: [["app-update-password"]], decls: 18, vars: 2, consts: [[1, "ion-padding", "ion-margin-top"], [3, "formGroup"], [1, "form-group"], ["type", "password", "formControlName", "oldPassword"], ["position", "floating"], ["type", "password", "formControlName", "password"], ["type", "password", "formControlName", "passwordConfirmation"], ["color", "primary", "shape", "round", "size", "full", 3, "disabled", "click"]], template: function UpdatePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Contrase\u00F1a actual");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Confirmar contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UpdatePasswordComponent_Template_ion_button_click_16_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " ACEPTAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.updatePasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.updatePasswordForm.valid);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "GtHp":
/*!****************************************************************************************!*\
  !*** ./src/app/components/modals/document-image-view/document-image-view.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DocumentImageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentImageViewComponent", function() { return DocumentImageViewComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DocumentImageViewComponent {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.image = navParams.get('image');
    }
    ngOnInit() {
        //
    }
    dismiss() {
        this.modalController.dismiss();
    }
}
DocumentImageViewComponent.ɵfac = function DocumentImageViewComponent_Factory(t) { return new (t || DocumentImageViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavParams"])); };
DocumentImageViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DocumentImageViewComponent, selectors: [["app-document-image-view"]], inputs: { image: "image" }, decls: 11, vars: 1, consts: [["slot", "end"], ["name", "close", 3, "click"], ["size", "12"], ["alt", "", "width", "100%", "height", "400", 2, "object-fit", "contain", 3, "src"]], template: function DocumentImageViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentImageViewComponent_Template_ion_icon_click_3_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "DETALLE DE IMAGEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC1pbWFnZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "GtaL":
/*!******************************************************************************!*\
  !*** ./src/app/popover-service-details/popover-service-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: PopoverServiceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverServiceDetailsComponent", function() { return PopoverServiceDetailsComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PopoverServiceDetailsComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() { }
    dismiss(success) {
        this.popoverController.dismiss({ success });
    }
}
PopoverServiceDetailsComponent.ɵfac = function PopoverServiceDetailsComponent_Factory(t) { return new (t || PopoverServiceDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["PopoverController"])); };
PopoverServiceDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopoverServiceDetailsComponent, selectors: [["app-popover-service-details"]], inputs: { service: "service" }, decls: 7, vars: 1, consts: [[3, "click"]], template: function PopoverServiceDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Aceptar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopoverServiceDetailsComponent_Template_ion_button_click_5_listener() { return ctx.dismiss(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.service.description, " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLXNlcnZpY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "HNOL":
/*!*********************************************!*\
  !*** ./src/app/services/v1/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AuthService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.V1 = 'v1/app/';
    }
    signIn(body) {
        return this.http.post(`${this.API_URL}${this.V1}auth/sign-in`, body);
    }
    getAuthToken() {
        return new Promise((resolve, reject) => {
            this.storage.get('auth_token')
                .then(authToken => {
                resolve(authToken);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "I40L":
/*!************************************************!*\
  !*** ./src/app/services/utils/sync.service.ts ***!
  \************************************************/
/*! exports provided: SyncService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncService", function() { return SyncService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/toast/toast.component */ "COqc");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _sync_request_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sync-request-order.service */ "y4Sp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");









const STORAGE_REQ_KEY_ORDERS = 'distriapporders';
const STORAGE_REQ_KEY_REQS = 'distriappreqs';
class SyncService {
    constructor(toastComponent, syncRequestOrderService, storage) {
        this.toastComponent = toastComponent;
        this.syncRequestOrderService = syncRequestOrderService;
        this.storage = storage;
        this.syncing$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.syncingError$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.syncRequestOrderService.getCompletedSync$()
            .subscribe(completedSync => {
            console.log(`completedSync: ${completedSync}`);
            if (completedSync) {
                this.checkIfAllSynced();
            }
        });
    }
    sync() {
        console.log('syncing...');
        this.setSyncing$(true);
        this.storage.get(STORAGE_REQ_KEY_REQS)
            .then(storedReqs => {
            if (storedReqs) {
                this.syncRequestOrderService.syncStoredOrdersRequests(storedReqs)
                    .then(res => {
                    // this.checkIfAllSynced();
                    // this.setSyncing$(false);
                })
                    .catch(err => {
                    console.log(err);
                });
            }
            else {
                console.log('nothing to be sent');
                this.setSyncing$(false);
            }
        })
            .catch(err => {
            console.log(err);
            this.setSyncing$(false);
        });
    }
    checkIfAllSynced() {
        console.log('checking if all synced...');
        this.storage.get(STORAGE_REQ_KEY_REQS)
            .then(storedReqs => {
            console.log(`checking stored requests:`, storedReqs);
            console.log((storedReqs === null || storedReqs === void 0 ? void 0 : storedReqs.length) > 0);
            if ((storedReqs === null || storedReqs === void 0 ? void 0 : storedReqs.length) > 0) {
                console.log('Ocurrió un error...');
                this.setSyncingError$(true);
            }
            else {
                this.deleteOrdersFromLocalStorage();
            }
        });
    }
    deleteOrdersFromLocalStorage() {
        console.log('deleting from local storage...');
        this.storage.remove(STORAGE_REQ_KEY_ORDERS)
            .then(() => {
            this.setSyncingError$(false);
            this.setSyncing$(false);
        });
    }
    deleteRequestsFromLocalStorage() {
        this.storage.remove(STORAGE_REQ_KEY_REQS);
    }
    abortSync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('aborting sync...');
            yield this.deleteRequestsFromLocalStorage();
            this.deleteOrdersFromLocalStorage();
        });
    }
    getSyncing$() {
        return this.syncing$.asObservable();
    }
    setSyncing$(syncing) {
        this.syncing$.next(syncing);
    }
    getSyncingError$() {
        return this.syncingError$.asObservable();
    }
    setSyncingError$(syncing) {
        this.syncingError$.next(syncing);
    }
    presentSyncedToast() {
        this.toastComponent.presentToast('Sincronización finalizada', 'bottom', 2000, 'success');
    }
}
SyncService.ɵfac = function SyncService_Factory(t) { return new (t || SyncService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_sync_request_order_service__WEBPACK_IMPORTED_MODULE_4__["SyncRequestOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"])); };
SyncService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SyncService, factory: SyncService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KDgl":
/*!***************************************************!*\
  !*** ./src/app/services/utils/network.service.ts ***!
  \***************************************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _interfaces_ConnectionStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/ConnectionStatus */ "Cjz0");
/* harmony import */ var _v1_offline_order_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../v1/offline-order-manager.service */ "a/TO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







class NetworkService {
    constructor(network, offlineManagerService) {
        this.network = network;
        this.offlineManagerService = offlineManagerService;
        this.networkStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_interfaces_ConnectionStatus__WEBPACK_IMPORTED_MODULE_2__["ConnectionStatus"].Offline);
    }
    initializeNetworkEvents() {
        console.log('initializing network events');
        console.log('current network status', this.network.type);
        this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            if (this.networkStatus$.getValue() === _interfaces_ConnectionStatus__WEBPACK_IMPORTED_MODULE_2__["ConnectionStatus"].Online) {
                console.log('WE ARE OFFLINE');
                this.updateNetworkStatus(_interfaces_ConnectionStatus__WEBPACK_IMPORTED_MODULE_2__["ConnectionStatus"].Offline);
            }
        });
        this.connectSubscription = this.network.onConnect().subscribe(() => {
            if (this.networkStatus$.getValue() === _interfaces_ConnectionStatus__WEBPACK_IMPORTED_MODULE_2__["ConnectionStatus"].Offline) {
                console.log('WE ARE ONLINE');
                this.updateNetworkStatus(_interfaces_ConnectionStatus__WEBPACK_IMPORTED_MODULE_2__["ConnectionStatus"].Online);
            }
        });
    }
    updateNetworkStatus(status) {
        this.networkStatus$.next(status);
        if (status === _interfaces_ConnectionStatus__WEBPACK_IMPORTED_MODULE_2__["ConnectionStatus"].Online) {
            this.sendRequests();
        }
    }
    sendRequests() {
        console.log('trying to send all requests...');
        this.offlineManagerService.checkStoredRequests();
    }
    getNetworkStatus$() {
        return this.networkStatus$.asObservable();
    }
    getCurrentNetworkStatus() {
        return this.networkStatus$.getValue();
    }
    stopNetworkEvents() {
        if (this.connectSubscription) {
            this.connectSubscription.unsubscribe();
        }
        if (this.disconnectSubscription) {
            this.disconnectSubscription.unsubscribe();
        }
    }
}
NetworkService.ɵfac = function NetworkService_Factory(t) { return new (t || NetworkService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__["Network"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_v1_offline_order_manager_service__WEBPACK_IMPORTED_MODULE_3__["OfflineOrderManagerService"])); };
NetworkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NetworkService, factory: NetworkService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Lkif":
/*!****************************************************************!*\
  !*** ./src/app/services/v1/update-location-request.service.ts ***!
  \****************************************************************/
/*! exports provided: UpdateLocationRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLocationRequestService", function() { return UpdateLocationRequestService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UpdateLocationRequestService {
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL;
        this.V1 = 'v1/app/';
    }
    store(body) {
        return this.http.post(`${this.API_URL}${this.V1}update-location-requests`, body);
    }
}
UpdateLocationRequestService.ɵfac = function UpdateLocationRequestService_Factory(t) { return new (t || UpdateLocationRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UpdateLocationRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpdateLocationRequestService, factory: UpdateLocationRequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NPVU":
/*!****************************************************!*\
  !*** ./src/app/services/v1/interceptor.service.ts ***!
  \****************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/toast/toast.component */ "COqc");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");












class InterceptorService {
    constructor(storage, toastComponent, loadingCtrl, navController) {
        this.storage = storage;
        this.toastComponent = toastComponent;
        this.loadingCtrl = loadingCtrl;
        this.navController = navController;
        this.isLoading = false;
    }
    intercept(request, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.storage.get('auth_token'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(token => {
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Accept: `application/json`,
                        'Content-Type': `application/json`,
                        Authorization: `Bearer ${token}`
                    }
                });
            }
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
                console.log(request.url);
                console.log(request.method);
            }
            // if (!(request.url.includes('./assets')
            //   || request.url.includes('driver-geopositions') && request.method === 'POST')
            //   || (request.url.includes('drivers/profile/image') && request.method === 'GET')
            //   || (request.url.includes('drivers/profile') && request.method === 'GET')
            //   || (request.url.includes('drivers/ranking') && request.method === 'GET')
            //   || (request.url.includes('devices') && request.method === 'POST')
            //   || (request.url.includes('devices/fcm-token') && request.method === 'POST')
            //   || (request.url.includes('fuel-controls') && request.method === 'GET')
            //   || (request.url.includes('locations') && request.method === 'GET')
            //   || (request.url.includes('locations') && request.method === 'POST')
            //   || (request.url.includes('orders') && request.method === 'POST')
            //   || (request.url.includes('orders/type/') && request.method === 'GET')
            //   || (request.url.includes('orders/optimize') && request.method === 'POST')
            //   || (request.url.includes('operation-controls') && request.method === 'GET')
            //   || (request.url.includes('payment-methods') && request.method === 'GET')
            //   || (request.url.includes('profile-image') && request.method === 'GET')
            //   || (request.url.includes('reminders') && request.method === 'GET')
            //   || (request.url.includes('routes') && request.url.includes('locations') && request.method === 'POST')
            //   || (request.url.includes('toll-controls') && request.method === 'GET')
            // ) {
            const isApiRequest = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL);
            if ((request.url.includes('auth/sign-in') && request.method === 'POST')) {
                console.log('presenting loading...');
                console.log(request.url);
                console.log(request.method);
                this.presentLoading();
            }
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((event) => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                    this.dismissLoading().then(() => {
                        //
                    }).catch(err => {
                        console.log(err);
                    });
                    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
                        console.log(event.body);
                    }
                    if (event.body.custom_message) {
                        this.toastComponent.presentToast(event.body.custom_message, 'bottom');
                    }
                }
                return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error) => {
                this.dismissLoading().then(() => {
                    //
                }).catch(err => {
                    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
                        console.error(err);
                    }
                });
                console.log('ERROR');
                if (!_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
                    console.error(error);
                }
                if (error.status === 401 && isApiRequest) {
                    this.navController.navigateRoot('login').then(() => {
                        if (error.error.custom_message) {
                            this.toastComponent.presentToast(error.error.custom_message, 'bottom');
                        }
                        else {
                            this.toastComponent.presentToast('Por favor inicie sesión', 'bottom');
                        }
                    });
                }
                else {
                    if (error.url.indexOf('driver-locations') > 0) {
                        // driver location could not be stored
                    }
                    else {
                        if (error.error.custom_message) {
                            this.toastComponent.presentToast(error.error.custom_message, 'bottom');
                        }
                        else {
                            if (!request.url.includes('http://www.mapquestapi.com/geocoding/v1/address')) {
                                this.toastComponent.presentToast('Ocurrió un error', 'bottom');
                            }
                            // alert(JSON.stringify(error));
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
                // return EMPTY;
            }));
        }));
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl.create({
                cssClass: 'custom-loading',
                duration: 60000,
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log());
                    }
                });
            });
        });
    }
    // Cierre del loading
    dismissLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
    }
}
InterceptorService.ɵfac = function InterceptorService_Factory(t) { return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"])); };
InterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: InterceptorService, factory: InterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NQre":
/*!***********************************************!*\
  !*** ./src/app/services/v1/device.service.ts ***!
  \***********************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic */ "VFkC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");











class DeviceService {
    constructor(device, router, navController, http) {
        this.device = device;
        this.router = router;
        this.navController = navController;
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.V1 = 'v1/app/';
    }
    storeDevice() {
        const body = {
            uuid: this.device.uuid,
            model: this.device.model,
            platform: this.device.platform,
            version: this.device.version
        };
        this.http.post(`${this.API_URL}${this.V1}devices`, body)
            .subscribe((response) => {
            this.getFCMToken();
        });
    }
    storeFCMToken(token) {
        const body = {
            uuid: this.device.uuid,
            fcm_token: token
        };
        return this.http.put(`${this.API_URL}${this.V1}devices/fcm-token`, body);
    }
    getFCMToken() {
        cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_5__["FCM"].getToken().then(token => {
            this.storeFCMToken(token)
                .subscribe((response) => {
                //
            }, err => {
                //
            });
        }).catch(err => {
            //
        });
    }
}
DeviceService.ɵfac = function DeviceService_Factory(t) { return new (t || DeviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DeviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DeviceService, factory: DeviceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/v1/driver.service */ "rTgA");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_utils_pusher_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/utils/pusher.service */ "0ivp");
/* harmony import */ var _services_v1_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/v1/auth.service */ "HNOL");
/* harmony import */ var _services_v1_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/v1/service.service */ "czkZ");
/* harmony import */ var _services_v1_device_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/v1/device.service */ "NQre");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic */ "VFkC");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/toast/toast.component */ "COqc");
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ "k0k6");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/theme.service */ "WPWp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");








// import {PopoverServiceDetailsComponent} from './popover-service-details/popover-service-details.component';























const _c0 = ["fabButtonAnim"];
function AppComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_9_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_9_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Gasific\u00E1 cada recorrido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.driver && ctx_r0.driver.has_profile_img && ctx_r0.showProfileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.showProfileImage || !ctx_r0.driver.has_profile_img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.driver.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.driver.email);
} }
function AppComponent_ion_menu_toggle_18_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.subtitle);
} }
function AppComponent_ion_menu_toggle_18_ion_badge_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.badge);
} }
const _c1 = function (a0) { return [a0]; };
function AppComponent_ion_menu_toggle_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-menu-toggle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_ion_menu_toggle_18_span_7_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_ion_menu_toggle_18_ion_badge_8_Template, 2, 1, "ion-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerDirection", "root")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, p_r4.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", p_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", p_r4.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", p_r4.badge);
} }
class AppComponent {
    constructor(platform, splashScreen, statusBar, authService, driverService, toastComponent, popoverController, animationController, pusherService, deviceService, serviceService, domSanitizer, router, appRate, themeService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.driverService = driverService;
        this.toastComponent = toastComponent;
        this.popoverController = popoverController;
        this.animationController = animationController;
        this.pusherService = pusherService;
        this.deviceService = deviceService;
        this.serviceService = serviceService;
        this.domSanitizer = domSanitizer;
        this.router = router;
        this.appRate = appRate;
        this.themeService = themeService;
        this.showProfileImage = false;
        this.activeService = false;
        this.currentTheme = 'theme-light';
        this.themeToggleLabels = {
            'theme-light': 'Modo oscuro',
            'theme-dark': 'Modo claro'
        };
        this.themeToggleIcons = {
            'theme-light': 'moon-outline',
            'theme-dark': 'sunny-outline'
        };
        // appPages = [];
        this.appPages = [
            {
                title: 'Distribución urbana',
                url: '/urban-distribution-list',
                icon: 'navigate-outline',
                subtitle: 'Entregas del día'
            },
            {
                title: 'Viajes',
                url: '/journey-list',
                icon: 'trail-sign-outline',
                subtitle: 'Planificá rutas'
            },
            {
                title: 'Controles',
                url: '/control-tabs/operation-control',
                icon: 'settings-outline',
                subtitle: 'Controles operativos'
            },
            {
                title: 'Billetera',
                url: '/wallet-transaction-list',
                icon: 'wallet-outline',
                subtitle: 'Movimientos de billetera'
            },
            {
                title: 'Ranking',
                url: '/ranking',
                icon: 'podium-outline',
                subtitle: 'Tu ranking'
            },
            {
                title: 'Mantenimiento',
                url: '/document-list',
                icon: 'construct-outline',
                subtitle: 'Documentos & vencim.'
            },
            {
                title: 'Recordatorios',
                url: '/reminder-list',
                icon: 'calendar-outline',
                subtitle: 'Recordatorios'
            },
            {
                title: 'Notificaciones',
                url: '/notification-list',
                icon: 'megaphone-outline',
                subtitle: 'Alertas'
            },
            {
                title: 'Beneficios',
                url: '/benefits',
                icon: 'sparkles-outline',
                subtitle: 'Promos exclusivas',
                badge: 'Nuevo'
            },
            {
                title: 'Reclamos',
                url: '/complaint-list',
                icon: 'chatbubble-ellipses-outline',
                subtitle: 'Reclamos'
            },
            {
                title: 'Liquidaciones',
                url: '/liquidation-list',
                icon: 'receipt-outline',
                subtitle: 'Liquidaciones'
            },
            {
                title: 'Proponer mejoras',
                url: '/suggestion-form',
                icon: 'bulb-outline',
                subtitle: 'Mejoras'
            },
            {
                title: 'Perfil',
                url: '/profile/profile-data',
                icon: 'id-card-outline',
                subtitle: 'Tus datos'
            },
            {
                title: 'Ayuda',
                url: '/help',
                icon: 'help-buoy-outline',
                subtitle: 'Ayuda y soporte'
            }
        ];
        this.currentTheme = this.themeService.initializeTheme();
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
            // this.listenForPusherEvents();
            // this.createAnimation();
            this.driverService.getDriver$()
                .subscribe(driver => {
                console.log('************************************');
                console.log('GOT DRIVER******************');
                console.log('************************************');
                console.log('************************************');
                if (driver) {
                    // this.appPages = [];
                    this.showProfileImage = false;
                    this.driver = driver;
                    if (this.driver.has_profile_img) {
                        this.getProfileImage();
                    }
                    // this.driver.admin_created ? this.pushAllPages() : this.pushLimitedPages();
                }
            });
            this.initAppRate();
            this.getFCMNotifications();
        });
    }
    ngOnInit() {
        // this.pushAllPages();
    }
    ngOnDestroy() {
        // if (this.driverSubscription) {
        //     this.driverSubscription.unsubscribe();
        // }
    }
    toggleTheme() {
        this.currentTheme = this.themeService.toggleTheme(this.currentTheme);
    }
    pushAllPages() {
        this.appPages.push({
            title: 'Distribución urbana',
            url: '/urban-distribution-list',
            icon: 'trail-sign-outline'
        });
        this.appPages.push({
            title: 'Viajes',
            url: '/journey-list',
            icon: 'map-outline'
        });
        this.appPages.push({
            title: 'Controles',
            url: '/control-tabs/operation-control',
            icon: 'options-outline'
        });
        this.appPages.push({
            title: 'Billetera',
            url: '/wallet-transaction-list',
            icon: 'wallet-outline'
        });
        this.appPages.push({
            title: 'Ranking',
            url: '/ranking',
            icon: 'trophy-outline'
        });
        this.appPages.push({
            title: 'Mantenimiento',
            url: '/document-list',
            icon: 'construct-outline'
        });
        this.appPages.push({
            title: 'Recordatorios',
            url: '/reminder-list',
            icon: 'alarm-outline'
        });
        this.appPages.push({
            title: 'Notificaciones',
            url: '/notification-list',
            icon: 'notifications-outline'
        });
        this.appPages.push({
            title: 'Seguros',
            url: '/insurance',
            icon: 'shield-checkmark-outline'
        });
        this.appPages.push({
            title: 'Proponer mejoras',
            url: '/suggestion-form',
            icon: 'bulb-outline'
        });
        this.appPages.push({
            title: 'Perfil',
            url: '/profile/profile-data',
            icon: 'person-circle-outline'
        });
        this.appPages.push({
            title: 'Ayuda',
            url: '/help',
            icon: 'help-circle-outline'
        });
    }
    pushLimitedPages() {
        this.appPages.push({
            title: 'Distribución urbana',
            url: '/urban-distribution-list',
            icon: 'assets/icons/menu/distribucion.svg'
        });
        this.appPages.push({
            title: 'Viajes',
            url: '/journey-list',
            icon: 'assets/icons/menu/viajes.svg'
        });
        this.appPages.push({
            title: 'Controles',
            url: '/control-tabs/operation-control',
            icon: 'assets/icons/menu/mantenimiento.svg'
        });
        this.appPages.push({
            title: 'Mantenimiento',
            url: '/document-list',
            icon: 'assets/icons/menu/mantenimiento.svg'
        });
        this.appPages.push({
            title: 'Recordatorios',
            url: '/reminder-list',
            icon: 'assets/icons/menu/notificaciones.svg'
        });
        this.appPages.push({
            title: 'Seguros',
            url: '/insurance',
            icon: 'assets/icons/menu/notificaciones.svg'
        });
        this.appPages.push({
            title: 'Proponer mejoras',
            url: '/suggestion-form',
            icon: 'assets/icons/menu/proponermejoras.svg'
        });
        this.appPages.push({
            title: 'Perfil',
            url: '/profile/profile-data',
            icon: 'assets/icons/menu/proponermejoras.svg'
        });
        this.appPages.push({
            title: 'Ayuda',
            url: '/help',
            icon: 'assets/icons/menu/ayuda.svg'
        });
    }
    getProfileImage() {
        this.driverService.getProfileImage()
            .subscribe((blob) => {
            const objectURL = URL.createObjectURL(blob);
            this.profileImg = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
            this.showProfileImage = true;
        });
    }
    createAnimation() {
        // setTimeout(() => {
        //   this.anim = this.animationController.create('myAnim');
        //   this.anim
        //     .addElement(this.fabButton.nativeElement)
        //     .duration(1000)
        //     .easing('ease-out')
        //     .fromTo('opacity', 1, 0.5)
        //     .iterations(Infinity);
        // }, 2000);
    }
    showPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const popover = await this.popoverController.create({
            //   component: PopoverServiceDetailsComponent,
            //   componentProps: {service: this.service},
            //   event: ev
            // });
            // await popover.present();
            // const {data} = await popover.onWillDismiss();
            // console.log(data);
            // if (!data?.success) {
            //   this.anim.stop();
            //   this.activeService = false;
            // }
        });
    }
    listenForPusherEvents() {
        // this.authService.getAuthToken().then(authToken => {
        //   const pusher = this.pusherService.init(authToken);
        //   console.log(pusher);
        //   // const channelName = `private-admin.${localStorage.getItem('adminPusherId')}.service.created`;
        //   const channelName = `private-admin.1.service.created`;
        //   const channel = pusher.subscribe(channelName);
        //   console.log(channel);
        //   channel.bind('ServiceCreated', (data) => {
        //     console.log('GOT DATA FROM PUSHER!!!!!');
        //     console.log(data);
        //     if (data?.service) {
        //       this.service = data.service;
        //       console.log(this.service);
        //       this.activeService = true;
        //       this.anim.play();
        //     }
        //   });
        // });
    }
    getFCMNotifications() {
        cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_12__["FCM"].requestPushPermission().then(() => {
        });
        cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_12__["FCM"].onTokenRefresh().subscribe(token => {
            this.deviceService.storeFCMToken(token)
                .subscribe((response) => {
                //
            }, err => {
                //
            });
        });
        cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_12__["FCM"].onNotification().subscribe(data => {
            if (data.wasTapped) {
                // app is closed - Received in background
                // alert(JSON.stringify(data.body));
            }
            else {
                // app is open - Received in foreground
                // alert(JSON.stringify(data));
                this.toastComponent.presentToast(data.body, 'top', 3500);
            }
        });
    }
    initAppRate() {
        // or, override the whole preferences object
        this.appRate.preferences = {
            usesUntilPrompt: 3,
            storeAppURL: {
                android: 'market://details?id=com.palmariusdev.distriapp',
            }
        };
        this.appRate.promptForRating(false);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_6__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_13__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_utils_pusher_service__WEBPACK_IMPORTED_MODULE_8__["PusherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_device_service__WEBPACK_IMPORTED_MODULE_11__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_service_service__WEBPACK_IMPORTED_MODULE_10__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_14__["AppRate"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_15__["ThemeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fabButton = _t.first);
    } }, decls: 26, vars: 5, consts: [["contentId", "main-content", "when", "(min-width: 1400px)"], ["contentId", "main-content", "type", "overlay"], ["translucent", "false", 1, "menu-header"], [1, "menu-header__inner"], ["src", "assets/logo-empresa.png", "alt", "Distribuci\u00F3n Urbana", 1, "menu-header__logo"], [1, "menu-content"], ["class", "profile-card", "routerLink", "../profile/profile-data", 4, "ngIf"], [1, "theme-toggle"], ["size", "small", 1, "theme-toggle__button", 3, "click"], ["slot", "start", 3, "name"], [1, "menu-section"], [1, "menu-section__label"], [1, "menu-list"], ["auto-hide", "false", 4, "ngFor", "ngForOf"], ["lines", "none", "routerLink", "/logout", 3, "routerDirection"], ["color", "light", "slot", "start", "src", "assets/icons/menu/cerrar-sesion.svg"], ["id", "main-content"], ["routerLink", "../profile/profile-data", 1, "profile-card"], ["class", "profile-card__avatar", 4, "ngIf"], ["class", "profile-card__avatar placeholder", 4, "ngIf"], [1, "profile-card__info"], [1, "profile-card__name"], [1, "profile-card__email"], [1, "profile-card__tagline"], [1, "profile-card__avatar"], ["alt", "profile_img", 3, "src"], [1, "profile-card__avatar", "placeholder"], ["name", "person-circle-outline"], ["auto-hide", "false"], ["lines", "none", "detail", "false", "routerLinkActive", "is-active", 1, "menu-item", 3, "routerDirection", "routerLink"], [1, "menu-item__content"], ["slot", "start", 1, "menu-item__icon", 3, "name"], [1, "menu-item__text"], [1, "menu-item__title"], ["class", "menu-item__subtitle", 4, "ngIf"], ["color", "light", 4, "ngIf"], [1, "menu-item__subtitle"], ["color", "light"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-split-pane", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-menu-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppComponent_div_9_Template, 10, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_ion_button_click_11_listener() { return ctx.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Panel de control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AppComponent_ion_menu_toggle_18_Template, 9, 8, "ion-menu-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-item-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-menu-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Cerrar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-router-outlet", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.driver);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx.themeToggleIcons[ctx.currentTheme]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.themeToggleLabels[ctx.currentTheme], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.appPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerDirection", "root");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSplitPane"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonMenu"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonMenuToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBadge"]], styles: [".alert-ios[_ngcontent-%COMP%]   .alert-radio-label[_ngcontent-%COMP%] {\n  white-space: pre-line !important;\n}\n\n.alert-md[_ngcontent-%COMP%]   .alert-radio-label[_ngcontent-%COMP%] {\n  white-space: pre-line !important;\n}\n\n.alert-wp[_ngcontent-%COMP%]   .alert-radio-label[_ngcontent-%COMP%] {\n  white-space: pre-line !important;\n}\n\n.fab-button-anim[_ngcontent-%COMP%] {\n  top: 70px;\n  right: 20px;\n  position: absolute;\n  z-index: 100;\n}\n\n.menu-header[_ngcontent-%COMP%] {\n  --background: var(--app-toolbar-gradient);\n  background: var(--app-toolbar-gradient);\n  padding: 2px 16px 8px;\n}\n\n.menu-header__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  min-height: 74px;\n  margin-top: -18px;\n}\n\n.menu-header__logo[_ngcontent-%COMP%] {\n  max-width: 96%;\n  width: auto;\n  max-height: 150px;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: center top;\n     object-position: center top;\n  margin-top: -10px;\n}\n\nion-menu[_ngcontent-%COMP%] {\n  --ion-background-color: var(--menu-background);\n  --width: 320px;\n}\n\nion-menu[_ngcontent-%COMP%]::part(container) {\n  width: 320px;\n  max-width: 320px;\n  height: 100%;\n  margin: 0;\n}\n\nion-split-pane[_ngcontent-%COMP%] {\n  --side-width: 320px;\n  --side-max-width: 320px;\n  --side-min-width: 320px;\n}\n\nion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--menu-background);\n  color: var(--menu-title-color);\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\nion-menu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 100%;\n}\n\nion-menu[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: var(--menu-title-color);\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  min-height: 50px;\n  --border-width: 0;\n  --border-radius: 0;\n}\n\nion-menu[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:hover {\n  --background: var(--menu-item-hover-bg);\n}\n\nion-menu[_ngcontent-%COMP%]   ion-item.ion-focused[_ngcontent-%COMP%], ion-menu[_ngcontent-%COMP%]   ion-item.ion-activated[_ngcontent-%COMP%] {\n  --background: var(--menu-item-active-bg);\n}\n\nion-menu[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--menu-divider-background);\n  --color: var(--menu-divider-color);\n}\n\n.menu-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 12px 12px 18px;\n  gap: 14px;\n}\n\n.theme-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 6px 8px 0;\n}\n\n.theme-toggle__button[_ngcontent-%COMP%] {\n  --border-radius: 999px;\n  --padding-start: 22px;\n  --padding-end: 24px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --border-color: var(--theme-toggle-border-color);\n  --border-width: 1px;\n  --background: var(--theme-toggle-background);\n  --background-hover: var(--theme-toggle-hover-background);\n  --background-activated: var(--theme-toggle-active-background);\n  --color: var(--theme-toggle-text-color);\n  --box-shadow: var(--theme-toggle-shadow);\n  --ripple-color: rgba(255, 255, 255, 0.2);\n  min-height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-width: 148px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin: 0;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n\n.theme-toggle__button[_ngcontent-%COMP%]:hover, .theme-toggle__button[_ngcontent-%COMP%]:focus {\n  transform: translateY(-1px);\n}\n\n.theme-toggle__button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.theme-toggle__button[_ngcontent-%COMP%]::part(native) {\n  padding: 0;\n}\n\n.theme-toggle__button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.profile-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 14px;\n  padding: 12px;\n  background: var(--profile-card-gradient);\n  box-shadow: var(--profile-card-shadow);\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  text-align: left;\n}\n\n.profile-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 28px rgba(5, 21, 40, 0.3);\n}\n\n.profile-card__avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  overflow: hidden;\n  background: var(--profile-card-avatar-background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.profile-card__avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.profile-card__avatar.placeholder[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 42px;\n  color: var(--profile-card-placeholder-color);\n}\n\n.profile-card__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  color: var(--menu-title-color);\n}\n\n.profile-card__name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.96rem;\n  line-height: 1.2;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  color: var(--menu-title-color);\n}\n\n.profile-card__email[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.74rem;\n  opacity: 0.75;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--menu-subtitle-color);\n}\n\n.profile-card__tagline[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.54rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--menu-subtitle-color);\n}\n\n.menu-section__label[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 0.68rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--menu-subtitle-color);\n}\n\n.menu-list[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  background: var(--menu-surface);\n  backdrop-filter: blur(10px);\n  box-shadow: inset 0 1px 0 var(--menu-surface-border);\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  margin: 4px 8px;\n  border-radius: 12px;\n  transition: background 0.25s ease, transform 0.2s ease;\n  --padding-start: 12px;\n  --inner-padding-end: 12px;\n  min-height: 48px;\n}\n\n.menu-item[_ngcontent-%COMP%]::part(native) {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 0 6px;\n}\n\n.menu-item[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 8px;\n}\n\n.menu-item[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 8px;\n}\n\n.menu-item__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 0 4px;\n}\n\n.menu-item__icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 10px;\n  background: var(--menu-icon-gradient);\n  border: 1px solid var(--menu-icon-border-color);\n  box-shadow: inset 0 1px 0 var(--menu-icon-highlight-color), 0 4px 10px var(--menu-icon-shadow-color);\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 0.25s ease, transform 0.25s ease;\n  text-align: center;\n}\n\n.menu-item__icon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(circle at 20% 20%, var(--menu-icon-overlay-color), transparent 60%);\n  opacity: 0.7;\n  transition: opacity 0.25s ease;\n}\n\n.menu-item__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n.menu-item__icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: auto;\n  font-size: 16px;\n  color: var(--menu-icon-color);\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));\n  margin: 0;\n}\n\n.menu-item__title[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  font-size: 0.9rem;\n  line-height: 1.1;\n  letter-spacing: 0.02em;\n  color: var(--menu-title-color);\n}\n\n.menu-item__subtitle[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.58rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--menu-subtitle-color);\n  margin-top: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.menu-item[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  --background: var(--menu-badge-background);\n  --color: var(--menu-badge-color);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-left: auto;\n  font-size: 0.55rem;\n  padding: 2px 5px;\n}\n\n.menu-item.is-active[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:hover, .menu-item[_ngcontent-%COMP%]:focus {\n  transform: translateX(3px);\n}\n\n.menu-item.is-active[_ngcontent-%COMP%] {\n  --background: var(--menu-item-active-bg);\n}\n\n.menu-item[_ngcontent-%COMP%]:hover, .menu-item[_ngcontent-%COMP%]:focus {\n  --background: var(--menu-item-hover-bg);\n}\n\n.menu-item.is-active[_ngcontent-%COMP%]   .menu-item__icon[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:hover   .menu-item__icon[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:focus   .menu-item__icon[_ngcontent-%COMP%] {\n  background: var(--menu-icon-active-gradient);\n  transform: scale(1.06);\n}\n\n.menu-item.is-active[_ngcontent-%COMP%]   .menu-item__icon[_ngcontent-%COMP%]::after, .menu-item[_ngcontent-%COMP%]:hover   .menu-item__icon[_ngcontent-%COMP%]::after, .menu-item[_ngcontent-%COMP%]:focus   .menu-item__icon[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n\n.menu-item.is-active[_ngcontent-%COMP%]   .menu-item__title[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:hover   .menu-item__title[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:focus   .menu-item__title[_ngcontent-%COMP%] {\n  color: var(--menu-item-active-title-color);\n}\n\n.menu-item.is-active[_ngcontent-%COMP%]   .menu-item__subtitle[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:hover   .menu-item__subtitle[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:focus   .menu-item__subtitle[_ngcontent-%COMP%] {\n  color: var(--menu-item-active-subtitle-color);\n}\n\n.menu-item.is-active[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:hover   ion-badge[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:focus   ion-badge[_ngcontent-%COMP%] {\n  --background: var(--menu-badge-active-background);\n}\n\n.menu-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\nion-item-divider[_ngcontent-%COMP%] {\n  margin: 0 18px;\n  border-radius: 10px;\n  --background: var(--menu-divider-background);\n  --color: var(--menu-divider-color);\n}\n\n@media (max-width: 420px) {\n  .menu-content[_ngcontent-%COMP%] {\n    padding: 14px 12px 22px;\n    gap: 18px;\n  }\n\n  .profile-card[_ngcontent-%COMP%] {\n    padding: 14px;\n    border-radius: 14px;\n    gap: 14px;\n  }\n\n  .profile-card__avatar[_ngcontent-%COMP%] {\n    width: 52px;\n    height: 52px;\n  }\n\n  .profile-card__avatar.placeholder[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n    font-size: 44px;\n  }\n\n  .profile-card__name[_ngcontent-%COMP%] {\n    font-size: 0.94rem;\n  }\n\n  .profile-card__email[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n\n  .profile-card__tagline[_ngcontent-%COMP%] {\n    font-size: 0.58rem;\n    letter-spacing: 0.07em;\n  }\n\n  .menu-item[_ngcontent-%COMP%] {\n    margin: 3px 8px;\n    --padding-start: 10px;\n    min-height: 48px;\n  }\n\n  .menu-item__title[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n\n  .menu-item__subtitle[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    letter-spacing: 0.1em;\n  }\n\n  ion-item-divider[_ngcontent-%COMP%] {\n    margin: 0 14px;\n  }\n}\n\n@media (max-width: 768px) {\n  ion-menu[_ngcontent-%COMP%] {\n    --width: 86vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSw4QkFBQTtLQUFBLDJCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLDhDQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7QUFDRjs7QUFFQTs7RUFFRSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UsNENBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHdEQUFBO0VBQ0EsNkRBQUE7RUFDQSx1Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLHVEQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsdURBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLDRDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvREFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esb0dBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLCtGQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtEQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTs7O0VBR0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsdUNBQUE7QUFDRjs7QUFFQTs7O0VBR0UsNENBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBOzs7RUFHRSxVQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLDBDQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLDZDQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLGlEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsU0FBQTtFQUNGOztFQUVBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtFQUNGOztFQUVBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFDRjs7RUFFQTtJQUNFLGVBQUE7RUFDRjs7RUFFQTtJQUNFLGtCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBQTtFQUNGOztFQUVBO0lBQ0Usa0JBQUE7SUFDQSxzQkFBQTtFQUNGOztFQUVBO0lBQ0UsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7RUFDRjs7RUFFQTtJQUNFLGlCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxpQkFBQTtJQUNBLHFCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxjQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWlvcyAuYWxlcnQtcmFkaW8tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbn1cblxuLmFsZXJ0LW1kIC5hbGVydC1yYWRpby1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufVxuXG4uYWxlcnQtd3AgLmFsZXJ0LXJhZGlvLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cbi5mYWItYnV0dG9uLWFuaW0ge1xuICB0b3A6IDcwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLm1lbnUtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtdG9vbGJhci1ncmFkaWVudCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC10b29sYmFyLWdyYWRpZW50KTtcbiAgcGFkZGluZzogMnB4IDE2cHggOHB4O1xufVxuXG4ubWVudS1oZWFkZXJfX2lubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDc0cHg7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xufVxuXG4ubWVudS1oZWFkZXJfX2xvZ28ge1xuICBtYXgtd2lkdGg6IDk2JTtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbmlvbi1tZW51IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrZ3JvdW5kKTtcbiAgLS13aWR0aDogMzIwcHg7XG59XG5cbmlvbi1tZW51OjpwYXJ0KGNvbnRhaW5lcikge1xuICB3aWR0aDogMzIwcHg7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tc3BsaXQtcGFuZSB7XG4gIC0tc2lkZS13aWR0aDogMzIwcHg7XG4gIC0tc2lkZS1tYXgtd2lkdGg6IDMyMHB4O1xuICAtLXNpZGUtbWluLXdpZHRoOiAzMjBweDtcbn1cblxuaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLW1lbnUtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1tZW51LXRpdGxlLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5pb24tbWVudSBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLW1lbnUgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB2YXIoLS1tZW51LXRpdGxlLWNvbG9yKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICAtLWJvcmRlci13aWR0aDogMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pb24tbWVudSBpb24taXRlbTpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbWVudS1pdGVtLWhvdmVyLWJnKTtcbn1cblxuaW9uLW1lbnUgaW9uLWl0ZW0uaW9uLWZvY3VzZWQsXG5pb24tbWVudSBpb24taXRlbS5pb24tYWN0aXZhdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1tZW51LWl0ZW0tYWN0aXZlLWJnKTtcbn1cblxuaW9uLW1lbnUgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbWVudS1kaXZpZGVyLWJhY2tncm91bmQpO1xuICAtLWNvbG9yOiB2YXIoLS1tZW51LWRpdmlkZXItY29sb3IpO1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTJweCAxMnB4IDE4cHg7XG4gIGdhcDogMTRweDtcbn1cblxuLnRoZW1lLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDZweCA4cHggMDtcbn1cblxuLnRoZW1lLXRvZ2dsZV9fYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMnB4O1xuICAtLXBhZGRpbmctZW5kOiAyNHB4O1xuICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLXRvZ2dsZS1ib3JkZXItY29sb3IpO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXRvZ2dsZS1iYWNrZ3JvdW5kKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS10aGVtZS10b2dnbGUtaG92ZXItYmFja2dyb3VuZCk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLXRoZW1lLXRvZ2dsZS1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0tY29sb3I6IHZhcigtLXRoZW1lLXRvZ2dsZS10ZXh0LWNvbG9yKTtcbiAgLS1ib3gtc2hhZG93OiB2YXIoLS10aGVtZS10b2dnbGUtc2hhZG93KTtcbiAgLS1yaXBwbGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgbWluLWhlaWdodDogNDRweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWluLXdpZHRoOiAxNDhweDtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE4cyBlYXNlLCBib3gtc2hhZG93IDAuMThzIGVhc2U7XG59XG5cbi50aGVtZS10b2dnbGVfX2J1dHRvbjpob3Zlcixcbi50aGVtZS10b2dnbGVfX2J1dHRvbjpmb2N1cyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLnRoZW1lLXRvZ2dsZV9fYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLnRoZW1lLXRvZ2dsZV9fYnV0dG9uOjpwYXJ0KG5hdGl2ZSkge1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGhlbWUtdG9nZ2xlX19idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5wcm9maWxlLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByb2ZpbGUtY2FyZC1ncmFkaWVudCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXByb2ZpbGUtY2FyZC1zaGFkb3cpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLCBib3gtc2hhZG93IDAuMjVzIGVhc2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wcm9maWxlLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gIGJveC1zaGFkb3c6IDAgMTZweCAyOHB4IHJnYmEoNSwgMjEsIDQwLCAwLjMpO1xufVxuXG4ucHJvZmlsZS1jYXJkX19hdmF0YXIge1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcm9maWxlLWNhcmQtYXZhdGFyLWJhY2tncm91bmQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5wcm9maWxlLWNhcmRfX2F2YXRhciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnByb2ZpbGUtY2FyZF9fYXZhdGFyLnBsYWNlaG9sZGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBjb2xvcjogdmFyKC0tcHJvZmlsZS1jYXJkLXBsYWNlaG9sZGVyLWNvbG9yKTtcbn1cblxuLnByb2ZpbGUtY2FyZF9faW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xuICBjb2xvcjogdmFyKC0tbWVudS10aXRsZS1jb2xvcik7XG59XG5cbi5wcm9maWxlLWNhcmRfX25hbWUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLW1lbnUtdGl0bGUtY29sb3IpO1xufVxuXG4ucHJvZmlsZS1jYXJkX19lbWFpbCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjc0cmVtO1xuICBvcGFjaXR5OiAwLjc1O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6IHZhcigtLW1lbnUtc3VidGl0bGUtY29sb3IpO1xufVxuXG4ucHJvZmlsZS1jYXJkX190YWdsaW5lIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGZvbnQtc2l6ZTogMC41NHJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgY29sb3I6IHZhcigtLW1lbnUtc3VidGl0bGUtY29sb3IpO1xufVxuXG4ubWVudS1zZWN0aW9uX19sYWJlbCB7XG4gIG1hcmdpbjogMCAwIDVweDtcbiAgZm9udC1zaXplOiAwLjY4cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tbWVudS1zdWJ0aXRsZS1jb2xvcik7XG59XG5cbi5tZW51LWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LXN1cmZhY2UpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgdmFyKC0tbWVudS1zdXJmYWNlLWJvcmRlcik7XG59XG5cbi5tZW51LWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNXMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMnB4O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xufVxuXG4ubWVudS1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCA2cHg7XG59XG5cbi5tZW51LWl0ZW06Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm1lbnUtaXRlbTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5tZW51LWl0ZW1fX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDRweDtcbn1cblxuLm1lbnUtaXRlbV9faWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtaWNvbi1ncmFkaWVudCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lbnUtaWNvbi1ib3JkZXItY29sb3IpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHZhcigtLW1lbnUtaWNvbi1oaWdobGlnaHQtY29sb3IpLCAwIDRweCAxMHB4IHZhcigtLW1lbnUtaWNvbi1zaGFkb3ctY29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cyBlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWVudS1pdGVtX19pY29uOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSAyMCUsIHZhcigtLW1lbnUtaWNvbi1vdmVybGF5LWNvbG9yKSwgdHJhbnNwYXJlbnQgNjAlKTtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2U7XG59XG5cbi5tZW51LWl0ZW1fX3RleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMSAxIGF1dG87XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLm1lbnUtaXRlbV9faWNvbiBpb24taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tbWVudS1pY29uLWNvbG9yKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjM1KSk7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1lbnUtaXRlbV9fdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGNvbG9yOiB2YXIoLS1tZW51LXRpdGxlLWNvbG9yKTtcbn1cblxuLm1lbnUtaXRlbV9fc3VidGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjU4cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tbWVudS1zdWJ0aXRsZS1jb2xvcik7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5tZW51LWl0ZW0gaW9uLWJhZGdlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1tZW51LWJhZGdlLWJhY2tncm91bmQpO1xuICAtLWNvbG9yOiB2YXIoLS1tZW51LWJhZGdlLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMC41NXJlbTtcbiAgcGFkZGluZzogMnB4IDVweDtcbn1cblxuLm1lbnUtaXRlbS5pcy1hY3RpdmUsXG4ubWVudS1pdGVtOmhvdmVyLFxuLm1lbnUtaXRlbTpmb2N1cyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xufVxuXG4ubWVudS1pdGVtLmlzLWFjdGl2ZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbWVudS1pdGVtLWFjdGl2ZS1iZyk7XG59XG5cbi5tZW51LWl0ZW06aG92ZXIsXG4ubWVudS1pdGVtOmZvY3VzIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1tZW51LWl0ZW0taG92ZXItYmcpO1xufVxuXG4ubWVudS1pdGVtLmlzLWFjdGl2ZSAubWVudS1pdGVtX19pY29uLFxuLm1lbnUtaXRlbTpob3ZlciAubWVudS1pdGVtX19pY29uLFxuLm1lbnUtaXRlbTpmb2N1cyAubWVudS1pdGVtX19pY29uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWVudS1pY29uLWFjdGl2ZS1ncmFkaWVudCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XG59XG5cbi5tZW51LWl0ZW0uaXMtYWN0aXZlIC5tZW51LWl0ZW1fX2ljb246OmFmdGVyLFxuLm1lbnUtaXRlbTpob3ZlciAubWVudS1pdGVtX19pY29uOjphZnRlcixcbi5tZW51LWl0ZW06Zm9jdXMgLm1lbnUtaXRlbV9faWNvbjo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubWVudS1pdGVtLmlzLWFjdGl2ZSAubWVudS1pdGVtX190aXRsZSxcbi5tZW51LWl0ZW06aG92ZXIgLm1lbnUtaXRlbV9fdGl0bGUsXG4ubWVudS1pdGVtOmZvY3VzIC5tZW51LWl0ZW1fX3RpdGxlIHtcbiAgY29sb3I6IHZhcigtLW1lbnUtaXRlbS1hY3RpdmUtdGl0bGUtY29sb3IpO1xufVxuXG4ubWVudS1pdGVtLmlzLWFjdGl2ZSAubWVudS1pdGVtX19zdWJ0aXRsZSxcbi5tZW51LWl0ZW06aG92ZXIgLm1lbnUtaXRlbV9fc3VidGl0bGUsXG4ubWVudS1pdGVtOmZvY3VzIC5tZW51LWl0ZW1fX3N1YnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLW1lbnUtaXRlbS1hY3RpdmUtc3VidGl0bGUtY29sb3IpO1xufVxuXG4ubWVudS1pdGVtLmlzLWFjdGl2ZSBpb24tYmFkZ2UsXG4ubWVudS1pdGVtOmhvdmVyIGlvbi1iYWRnZSxcbi5tZW51LWl0ZW06Zm9jdXMgaW9uLWJhZGdlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1tZW51LWJhZGdlLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbn1cblxuLm1lbnUtaXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5pb24taXRlbS1kaXZpZGVyIHtcbiAgbWFyZ2luOiAwIDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbWVudS1kaXZpZGVyLWJhY2tncm91bmQpO1xuICAtLWNvbG9yOiB2YXIoLS1tZW51LWRpdmlkZXItY29sb3IpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLm1lbnUtY29udGVudCB7XG4gICAgcGFkZGluZzogMTRweCAxMnB4IDIycHg7XG4gICAgZ2FwOiAxOHB4O1xuICB9XG5cbiAgLnByb2ZpbGUtY2FyZCB7XG4gICAgcGFkZGluZzogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGdhcDogMTRweDtcbiAgfVxuXG4gIC5wcm9maWxlLWNhcmRfX2F2YXRhciB7XG4gICAgd2lkdGg6IDUycHg7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICB9XG5cbiAgLnByb2ZpbGUtY2FyZF9fYXZhdGFyLnBsYWNlaG9sZGVyIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gIH1cblxuICAucHJvZmlsZS1jYXJkX19uYW1lIHtcbiAgICBmb250LXNpemU6IDAuOTRyZW07XG4gIH1cblxuICAucHJvZmlsZS1jYXJkX19lbWFpbCB7XG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICB9XG5cbiAgLnByb2ZpbGUtY2FyZF9fdGFnbGluZSB7XG4gICAgZm9udC1zaXplOiAwLjU4cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XG4gIH1cblxuICAubWVudS1pdGVtIHtcbiAgICBtYXJnaW46IDNweCA4cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIH1cblxuICAubWVudS1pdGVtX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cblxuICAubWVudS1pdGVtX19zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB9XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgbWFyZ2luOiAwIDE0cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1tZW51IHtcbiAgICAtLXdpZHRoOiA4NnZ3O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "TEvH":
/*!****************************************************************************************!*\
  !*** ./src/app/components/modals/update-phone-number/update-phone-number.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UpdatePhoneNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePhoneNumberComponent", function() { return UpdatePhoneNumberComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v1/driver.service */ "rTgA");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../loading-spinner/loading-spinner.component */ "nk+c");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");









class UpdatePhoneNumberComponent {
    constructor(formBuilder, modalController, loadingSpinnerComponent, driverService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.loadingSpinnerComponent = loadingSpinnerComponent;
        this.driverService = driverService;
        this.phoneNumberForm = this.formBuilder.group({
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    submitForm() {
        this.loadingSpinnerComponent.presentLoadingSpinner().then(() => {
            const body = {
                phone_number: this.phoneNumberForm.value.phoneNumber
            };
            this.driverService.updatePhoneNumber(body)
                .subscribe((response) => {
            }, error => {
                this.loadingSpinnerComponent.dismissLoadingSpinner();
            }, () => {
                this.loadingSpinnerComponent.dismissLoadingSpinner().then(() => {
                    this.modalController.dismiss({ success: true });
                });
            });
        });
    }
}
UpdatePhoneNumberComponent.ɵfac = function UpdatePhoneNumberComponent_Factory(t) { return new (t || UpdatePhoneNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"])); };
UpdatePhoneNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UpdatePhoneNumberComponent, selectors: [["app-update-phone-number"]], decls: 10, vars: 2, consts: [[1, "ion-padding", "ion-margin-top"], [3, "formGroup"], ["position", "floating"], ["formControlName", "phoneNumber"], ["size", "full", "shape", "round", 3, "disabled", "click"]], template: function UpdatePhoneNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "N\u00FAmero de tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UpdatePhoneNumberComponent_Template_ion_button_click_8_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " ACEPTAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.phoneNumberForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.phoneNumberForm.valid);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "WPWp":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const THEME_STORAGE_KEY = 'app-theme';
class ThemeService {
    constructor() {
        this.availableThemes = ['theme-light', 'theme-dark'];
        this.defaultTheme = this.availableThemes[0];
    }
    initializeTheme() {
        const storedTheme = this.readStoredTheme();
        const theme = storedTheme !== null && storedTheme !== void 0 ? storedTheme : this.defaultTheme;
        this.applyTheme(theme);
        if (!storedTheme) {
            this.persistTheme(theme);
        }
        return theme;
    }
    toggleTheme(current) {
        const next = current === this.availableThemes[0] ? this.availableThemes[1] : this.availableThemes[0];
        this.applyTheme(next);
        this.persistTheme(next);
        return next;
    }
    applyTheme(theme) {
        if (!this.canAccessDom()) {
            return;
        }
        const doc = document;
        const targets = [
            doc.documentElement.classList,
            doc.body.classList
        ];
        const ionApp = doc.querySelector('ion-app');
        if (ionApp) {
            targets.push(ionApp.classList);
        }
        const appRoot = doc.querySelector('app-root');
        if (appRoot) {
            targets.push(appRoot.classList);
        }
        this.availableThemes.forEach(t => targets.forEach(cls => cls.remove(t)));
        targets.forEach(cls => cls.add(theme));
        if (typeof console !== 'undefined') {
            console.log('[ThemeService] applied theme', theme, targets.map(t => Array.from(t)));
        }
    }
    readStoredTheme() {
        if (!this.canUseStorage()) {
            return null;
        }
        try {
            const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
            return this.isValidTheme(stored) ? stored : null;
        }
        catch (error) {
            if (typeof console !== 'undefined') {
                console.warn('[ThemeService] unable to read stored theme', error);
            }
            return null;
        }
    }
    persistTheme(theme) {
        if (!this.canUseStorage()) {
            return;
        }
        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, theme);
        }
        catch (error) {
            if (typeof console !== 'undefined') {
                console.warn('[ThemeService] unable to persist theme', error);
            }
        }
    }
    canUseStorage() {
        return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
    }
    canAccessDom() {
        return typeof document !== 'undefined';
    }
    isValidTheme(theme) {
        return !!theme && this.availableThemes.includes(theme);
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WdDh":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/modals/document-file-image-detail/document-file-image-detail.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DocumentFileImageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFileImageDetailComponent", function() { return DocumentFileImageDetailComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DocumentFileImageDetailComponent_ion_col_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const documentFile_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", documentFile_r1.file_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class DocumentFileImageDetailComponent {
    constructor(navParams, modalController) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.documentFiles = [];
        this.documentFiles = this.navParams.get('documentFiles');
    }
    ngOnInit() {
    }
}
DocumentFileImageDetailComponent.ɵfac = function DocumentFileImageDetailComponent_Factory(t) { return new (t || DocumentFileImageDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"])); };
DocumentFileImageDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DocumentFileImageDetailComponent, selectors: [["app-document-file-image-detail"]], inputs: { documentFiles: "documentFiles" }, decls: 4, vars: 1, consts: [["size", "6", 4, "ngFor", "ngForOf"], ["size", "6"], ["alt", "", "width", "100%", "height", "100", 2, "object-fit", "contain", 3, "src"]], template: function DocumentFileImageDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DocumentFileImageDetailComponent_ion_col_3_Template, 2, 1, "ion-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.documentFiles);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC1maWxlLWltYWdlLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Wmen":
/*!************************************************!*\
  !*** ./src/app/services/utils/mode.service.ts ***!
  \************************************************/
/*! exports provided: ModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeService", function() { return ModeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/ModeStatus */ "iK7v");
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sync.service */ "I40L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ModeService {
    constructor(syncService) {
        this.syncService = syncService;
        this.modeStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](_interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_1__["ModeStatus"].Online);
    }
    updateModeStatus(status) {
        this.modeStatus$.next(status);
        // if (status === ModeStatus.Online) {
        //   this.syncService.sync();
        // }
    }
    getModeStatus$() {
        return this.modeStatus$.asObservable();
    }
    getCurrentModeStatus() {
        return this.modeStatus$.getValue();
    }
}
ModeService.ɵfac = function ModeService_Factory(t) { return new (t || ModeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_sync_service__WEBPACK_IMPORTED_MODULE_2__["SyncService"])); };
ModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ModeService, factory: ModeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: errorHandlerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorHandlerFactory", function() { return errorHandlerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_v1_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/v1/interceptor.service */ "NPVU");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "fGQ8");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/google-maps */ "tBOM");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _popover_service_details_popover_service_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./popover-service-details/popover-service-details.component */ "GtaL");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "92l+");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "XqOP");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "RzHS");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "te5A");
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ "k0k6");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/locales/es-AR */ "ATIY");
/* harmony import */ var _angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bugsnag_plugin_angular__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @bugsnag/plugin-angular */ "/Lpy");
/* harmony import */ var _bugsnag_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @bugsnag/js */ "NTr2");
/* harmony import */ var _bugsnag_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_bugsnag_js__WEBPACK_IMPORTED_MODULE_37__);










































Object(_angular_common__WEBPACK_IMPORTED_MODULE_35__["registerLocaleData"])(_angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_34___default.a);
_bugsnag_js__WEBPACK_IMPORTED_MODULE_37___default.a.start({ apiKey: 'b2884e3735c06c44351c66d3148a690b' });
function errorHandlerFactory() {
    return new _bugsnag_plugin_angular__WEBPACK_IMPORTED_MODULE_36__["BugsnagErrorHandler"]();
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"],
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"] },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useFactory: errorHandlerFactory },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _services_v1_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["InterceptorService"],
            multi: true
        },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'es-AR' },
        _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_30__["AppRate"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_20__["BarcodeScanner"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_22__["CallNumber"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_25__["FCM"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"],
        _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_27__["FileChooser"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_29__["FileOpener"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_28__["FilePath"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"],
        _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_19__["GoogleMaps"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_21__["HTTP"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_17__["ImagePicker"],
        _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_15__["LaunchNavigator"],
        _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_24__["LocationAccuracy"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_26__["Network"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot({
                backButtonText: ''
            }),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_31__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_32__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_33__["AngularFirestoreModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_16__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _popover_service_details_popover_service_details_component__WEBPACK_IMPORTED_MODULE_23__["PopoverServiceDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_31__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_32__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_33__["AngularFirestoreModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_16__["ComponentsModule"]] }); })();


/***/ }),

/***/ "a/TO":
/*!**************************************************************!*\
  !*** ./src/app/services/v1/offline-order-manager.service.ts ***!
  \**************************************************************/
/*! exports provided: OfflineOrderManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineOrderManagerService", function() { return OfflineOrderManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _order_offline_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-offline-manager.service */ "/DmI");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");














const STORAGE_REQ_KEY = 'distriappreqs';
class OfflineOrderManagerService {
    constructor(storage, orderOfflineManagerService, toastController, http, httpClient) {
        this.storage = storage;
        this.orderOfflineManagerService = orderOfflineManagerService;
        this.toastController = toastController;
        this.http = http;
        this.httpClient = httpClient;
        this.uploadedReqsP$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.sendingReqs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL;
        this.V1 = 'v1/app/';
    }
    storeRequest(type, method, body, pUid, action, pId = null, file = null, authToken = null) {
        return new Promise((resolve, reject) => {
            // const toast = this.toastController.create({
            //   message: `Your data is stored locally because you seem to be offline.`,
            //   duration: 3000,
            //   position: 'bottom'
            // });
            // toast.then(t => t.present());
            const storedRequest = {
                method,
                body,
                time: new Date().getTime(),
                id: Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, '').substr(0, 5)
                    + (Math.floor(Math.random() * 90 + 10)),
                attempts: 0,
                type: 'request',
                action,
                file,
                authToken,
                pUid,
                pId
            };
            console.log('storing request in localstorage', storedRequest);
            this.storage.get(STORAGE_REQ_KEY)
                .then(storedOperations => {
                if ((storedOperations === null || storedOperations === void 0 ? void 0 : storedOperations.length) > 0) {
                    storedOperations.push(storedRequest);
                }
                else {
                    storedOperations = [];
                    storedOperations.push(storedRequest);
                }
                this.storage.set(STORAGE_REQ_KEY, storedOperations)
                    .then(() => {
                    resolve(storedRequest);
                }).catch(err => {
                    reject();
                });
            }).catch(err => {
                reject();
            });
        });
    }
    checkStoredRequests() {
        return new Promise((resolve, reject) => {
            console.log('checking stored requests...');
            this.storage.get(STORAGE_REQ_KEY).then(storedRequests => {
                if ((storedRequests === null || storedRequests === void 0 ? void 0 : storedRequests.length) > 0) {
                    console.log('********************************');
                    console.log('Estas son todas las stored requests que tengo...');
                    console.log('********************************');
                    console.log(storedRequests);
                    console.log('------------------------------------fin de log');
                    this.sendStoredRequests(storedRequests);
                    console.log('YA FINALICE EL ENVIO DE REQUESTS GUARDADOS...!!');
                }
                else {
                    console.log('empty storage...');
                }
            });
        });
    }
    sendStoredRequests(storedRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.setSendingReqs$(true);
            const processedRequestsIds = [];
            let uploadedP = Math.round(processedRequestsIds.length / storedRequest.length);
            this.setUploadedP$(uploadedP);
            for (const op of storedRequest) {
                yield this.sendRequest(op).then(res => {
                    processedRequestsIds.push(op.id);
                    uploadedP = processedRequestsIds.length / storedRequest.length;
                    this.setUploadedP$(uploadedP);
                }).catch(err => {
                    console.log('ERROR', op.id + ': ' + op.attempts);
                    op.attempts = op.attempts + 1;
                });
            }
            setTimeout(() => {
                console.log('now!!');
                console.log(processedRequestsIds);
                storedRequest = storedRequest.filter(sr => processedRequestsIds.indexOf(sr.id) <= -1 && sr.attempts <= 2);
                return this.storage.set(STORAGE_REQ_KEY, storedRequest);
            }, 500);
            this.setSendingReqs$(false);
        });
    }
    sendRequest(storedRequest) {
        return new Promise((resolve, reject) => {
            this.orderOfflineManagerService.getLocalOrderId(storedRequest.pUid)
                .then((order) => {
                console.log('order', order);
                if (storedRequest.type === 'request') {
                    setTimeout(() => {
                        console.log('Sending request to server: ', storedRequest);
                        // resolve(true);
                        // Math.floor(Math.random() * 90 + 10) < 50 ? resolve(true) : reject(true);
                        this.makeHttpClientRequest(storedRequest, order).then(res => {
                            console.log(res);
                            resolve(res);
                        }).catch(err => {
                            reject(err);
                        });
                    }, 500);
                }
                else {
                    console.log('IS A FILEEEEE!!!!!');
                    this.uploadFile(storedRequest, order).then(res => {
                        console.log(res);
                        resolve(res);
                    }).catch(err => {
                        reject(err);
                    });
                }
            });
        });
    }
    makeHttpClientRequest(storedRequest, order) {
        return new Promise((resolve, reject) => {
            const url = this.getUrl(storedRequest, order);
            console.log('sending request to url: ', url);
            this.httpClient.request(storedRequest.method, url, { body: storedRequest.body })
                .subscribe((res) => {
                if (res && res.order) {
                    this.orderOfflineManagerService.updateLocalOrderId(res.order.id, storedRequest.pUid)
                        .then(localOrder => {
                        console.log(localOrder);
                        resolve(res);
                    }).catch(err => {
                        reject(err);
                    });
                }
                else {
                    resolve(res);
                }
            }, error => {
                reject(error);
            });
        });
    }
    uploadFile(storedRequest, order) {
        return new Promise((resolve, reject) => {
            alert('about to upload file...');
            const uri = encodeURI(this.getUrl(storedRequest, order));
            alert('uri');
            const headers = {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + storedRequest.authToken
            };
            this.http.uploadFile(uri, storedRequest.body, headers, encodeURI(storedRequest.file), 'file')
                .then((data) => {
                alert(JSON.stringify(data));
                resolve(true);
            }).catch(err => {
                reject(err);
            });
        });
    }
    getUrl(storedRequest, order) {
        console.log(storedRequest.action);
        let url = '';
        switch (storedRequest.action) {
            case 'store':
                url = `${this.API_URL}${this.V1}orders`;
                break;
            case 'store-location':
                url = `${this.API_URL}${this.V1}locations`;
                break;
            case 'update':
                url = `${this.API_URL}${this.V1}orders/${order.id}`;
                break;
            case 'delete':
                url = `${this.API_URL}${this.V1}orders/${order.id}`;
                break;
            case 'delivered':
                url = `${this.API_URL}${this.V1}orders/${order.id}/delivered-offline`;
                break;
            case 'not-delivered':
                url = `${this.API_URL}${this.V1}orders/${order.id}/not-delivered`;
                break;
            case 'upload-file':
                url = `${this.API_URL}${this.V1}delivery-images`;
                break;
        }
        return url;
    }
    // observables
    setSendingReqs$(sendingReq) {
        this.sendingReqs$.next(sendingReq);
    }
    getSendingReqs$() {
        return this.sendingReqs$.asObservable();
    }
    getUploadedP$() {
        return this.uploadedReqsP$.asObservable();
    }
    setUploadedP$(uploadedP) {
        this.uploadedReqsP$.next(uploadedP);
    }
}
OfflineOrderManagerService.ɵfac = function OfflineOrderManagerService_Factory(t) { return new (t || OfflineOrderManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_order_offline_manager_service__WEBPACK_IMPORTED_MODULE_3__["OrderOfflineManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
OfflineOrderManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: OfflineOrderManagerService, factory: OfflineOrderManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ctBK":
/*!****************************************************************************!*\
  !*** ./src/app/components/modals/location-form/location-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: LocationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFormComponent", function() { return LocationFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_v1_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v1/location.service */ "fRX6");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");







class LocationFormComponent {
    constructor(formBuilder, modalController, locationService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.locationService = locationService;
        this.locationForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    addLocation() {
        const body = this.setBody();
        this.locationService.storeLocation(body)
            .subscribe((response) => {
            this.modalController.dismiss({ success: true });
        });
    }
    setBody() {
        return {
            name: this.locationForm.value.name,
            address: this.locationForm.value.address
        };
    }
}
LocationFormComponent.ɵfac = function LocationFormComponent_Factory(t) { return new (t || LocationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_v1_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"])); };
LocationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LocationFormComponent, selectors: [["app-location-form"]], decls: 14, vars: 2, consts: [[1, "ion-padding"], [3, "formGroup"], ["position", "floating"], ["formControlName", "name"], ["rows", "5", "formControlName", "address"], ["color", "primary", "size", "full", "shape", "round", 3, "disabled", "click"]], template: function LocationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LocationFormComponent_Template_ion_button_click_12_listener() { return ctx.addLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " AGREGAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.locationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.locationForm.valid);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "czkZ":
/*!************************************************!*\
  !*** ./src/app/services/v1/service.service.ts ***!
  \************************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ServiceService {
    constructor() { }
}
ServiceService.ɵfac = function ServiceService_Factory(t) { return new (t || ServiceService)(); };
ServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceService, factory: ServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fRX6":
/*!*************************************************!*\
  !*** ./src/app/services/v1/location.service.ts ***!
  \*************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/network.service */ "KDgl");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");










const STORAGE_REQ_KEY = 'distriapplocations';
class LocationService {
    constructor(http, networkService, storage) {
        this.http = http;
        this.networkService = networkService;
        this.storage = storage;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.V1 = 'v1/app/';
        this.locations$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.lastUpdateTime = Date.now();
        // minFrequency = 1800000; // milliseconds
        this.minFrequency = 10000; // milliseconds
        //
    }
    getLocations() {
        return this.http.get(`${this.API_URL}${this.V1}locations`);
    }
    getLocationsByKeyword(keyword) {
        return this.http.get(`${this.API_URL}${this.V1}locations/keyword/${keyword}`);
    }
    storeLocation(body) {
        return this.http.post(`${this.API_URL}${this.V1}locations`, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.locations), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])({
            next: val => {
                console.log('on next');
                this.setLocations$(val);
            }
        }));
    }
    updateLocationCoords(locationId, body) {
        const url = `${this.API_URL}${this.V1}locations/${locationId}/coords`;
        return this.http.put(url, body);
    }
    geocodeAddress(body) {
        return this.http.post(`${this.API_URL}${this.V1}locations/geocode-address`, body);
    }
    /***********************************************************
     * Observables
     ***********************************************************/
    getLocations$() {
        console.log(Date.now() - this.lastUpdateTime > this.minFrequency);
        console.log(Date.now());
        console.log(this.lastUpdateTime);
        console.log(Date.now() - this.lastUpdateTime);
        if (this.locations$.getValue().length <= 0) {
            console.log('IS ZERO');
            console.log(this.lastUpdateTime);
            return this.http.get(`${this.API_URL}${this.V1}locations`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.locations), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])({
                next: val => {
                    console.log('on next');
                    this.setLocations$(val);
                }
            }));
        }
        else if (Date.now() - this.lastUpdateTime > this.minFrequency) {
            console.log('NOT IS ZERO, CHECKING NETWORK STATUS: ', this.networkService.getCurrentNetworkStatus());
            if (this.networkService.getCurrentNetworkStatus()) {
                console.log('IS ONLINE');
                return this.http.get(`${this.API_URL}${this.V1}locations`)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.locations), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])({
                    next: val => {
                        console.log('on next');
                        this.setLocations$(val);
                    }
                }));
            }
            else {
                console.log('IS OFFLINE');
                this.storage.get(STORAGE_REQ_KEY)
                    .then(locations => {
                    console.log('GOT LOCATIONS FROM STORAGE: ', locations);
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                        observer.next(locations);
                        return observer;
                    });
                });
            }
        }
        console.log('RETURNING FROM CACHE!');
        return this.locations$.asObservable();
    }
    setLocations$(locations) {
        console.log('setting new data...');
        this.lastUpdateTime = Date.now();
        this.storage.set(STORAGE_REQ_KEY, locations);
        this.locations$.next(locations);
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_utils_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"])); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "iK7v":
/*!******************************************!*\
  !*** ./src/app/interfaces/ModeStatus.ts ***!
  \******************************************/
/*! exports provided: ModeStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeStatus", function() { return ModeStatus; });
var ModeStatus;
(function (ModeStatus) {
    ModeStatus[ModeStatus["Offline"] = 0] = "Offline";
    ModeStatus[ModeStatus["Online"] = 1] = "Online";
})(ModeStatus || (ModeStatus = {}));


/***/ }),

/***/ "igBE":
/*!****************************************************************************!*\
  !*** ./src/app/components/modals/not-delivered/not-delivered.component.ts ***!
  \****************************************************************************/
/*! exports provided: NotDeliveredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotDeliveredComponent", function() { return NotDeliveredComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/v1/order.service */ "EXzW");
/* harmony import */ var _services_v1_order_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/v1/order-manager.service */ "7zG+");
/* harmony import */ var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/v1/geolocation.service */ "3Cxn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");












function NotDeliveredComponent_ion_item_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "textarea", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r0.textareaFC);
} }
function NotDeliveredComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Nombre establecimiento o barrio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Barrio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-col", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Viv");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-col", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-col", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Mz");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ion-col", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Casa");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.form);
} }
function NotDeliveredComponent_ion_progress_bar_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-progress-bar", 34);
} }
class NotDeliveredComponent {
    constructor(modalController, orderManagerService, formBuilder, geolocationService, orderService) {
        this.modalController = modalController;
        this.orderManagerService = orderManagerService;
        this.formBuilder = formBuilder;
        this.geolocationService = geolocationService;
        this.orderService = orderService;
        this.optionFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.showTextarea = false;
        this.showLocationFields = false;
        this.textareaFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.submitting = false;
        this.saveClientFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.form = this.formBuilder.group({
            locationName: [''],
            locationAddress: [''],
            b: [''],
            v: [''],
            s: [''],
            m: [''],
            c: [''],
        });
    }
    ngOnInit() {
        this.checkWatchLocationsSubscription();
        this.form.controls.locationName.setValue(this.order.location.name);
        this.form.controls.locationAddress.setValue(this.order.location.address);
        this.form.controls.b.setValue(this.order.location.b);
        this.form.controls.v.setValue(this.order.location.v);
        this.form.controls.s.setValue(this.order.location.s);
        this.form.controls.m.setValue(this.order.location.m);
        this.form.controls.c.setValue(this.order.location.c);
    }
    checkWatchLocationsSubscription() {
        if (!this.geolocationService.checkWatchLocationsSubscription()) {
            this.geolocationService.watchPosition();
        }
    }
    submit() {
        this.submitting = true;
        this.driverPosition = this.geolocationService.getDriverPosition();
        const body = {
            not_delivered_motive: this.optionFC.value,
            not_delivered_description: this.textareaFC.value,
            location_name: this.form.value.locationName,
            location_address: this.form.value.locationAddress,
            b: this.form.value.b,
            v: this.form.value.v,
            s: this.form.value.s,
            m: this.form.value.m,
            c: this.form.value.c,
            save_client: this.saveClientFC.value,
            lat: this.driverPosition.coords.latitude,
            lng: this.driverPosition.coords.longitude
        };
        this.orderManagerService.setNotDeliveredOrder(this.order, body)
            .subscribe((response) => {
            console.log(response);
            this.submitting = false;
            this.dismiss(true);
        }, error => {
            this.submitting = false;
        });
    }
    onOptionChange(ev) {
        if (ev.detail.value === 'otros') {
            this.showTextarea = true;
            this.showLocationFields = false;
        }
        else if (ev.detail.value === 'nueva dirección') {
            this.showTextarea = false;
            this.showLocationFields = true;
        }
    }
    dismiss(success) {
        if (success) {
            this.order.status = 'not-delivered';
            this.order.status_es = 'no entregada';
            this.orderService.setOrdersUpdated$(true);
        }
        this.modalController.dismiss({ success });
    }
}
NotDeliveredComponent.ɵfac = function NotDeliveredComponent_Factory(t) { return new (t || NotDeliveredComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_v1_order_manager_service__WEBPACK_IMPORTED_MODULE_3__["OrderManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_4__["GeolocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"])); };
NotDeliveredComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NotDeliveredComponent, selectors: [["app-not-delivered"]], inputs: { order: "order" }, decls: 63, vars: 10, consts: [[1, "ion-no-border"], ["slot", "end"], ["name", "close", 1, "font-2em", 3, "click"], [1, "ion-text-center", "ion-padding-top"], [1, "ion-no-margin"], ["lines", "none"], ["color", "primary", 3, "formControl"], [3, "formControl", "ionChange"], ["slot", "start", "value", "direcci\u00F3n insuficiente"], ["slot", "start", "value", "direcci\u00F3n inexistente"], ["slot", "start", "value", "rechazado"], ["slot", "start", "value", "se mud\u00F3"], ["slot", "start", "value", "falleci\u00F3"], ["slot", "start", "value", "cerrado"], ["slot", "start", "value", "direcci\u00F3n inaccesible"], ["slot", "start", "value", "otros"], ["lines", "none", 4, "ngIf"], ["slot", "start", "value", "nueva direcci\u00F3n"], [4, "ngIf"], ["type", "indeterminate", "class", "ion-padding-horizontal", 4, "ngIf"], [1, "ion-text-center", "ion-margin-bottom"], [1, "custom-button", 3, "disabled", "click"], ["placeholder", "Indique el motivo", 3, "formControl"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "locationName"], ["type", "text", "formControlName", "locationAddress"], ["size", "4"], ["type", "text", "formControlName", "b"], ["size", "2"], ["type", "text", "formControlName", "v"], ["type", "text", "formControlName", "s"], ["type", "text", "formControlName", "m"], ["type", "text", "formControlName", "c"], ["type", "indeterminate", 1, "ion-padding-horizontal"]], template: function NotDeliveredComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotDeliveredComponent_Template_ion_icon_click_3_listener() { return ctx.dismiss(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Seleccione ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Guardar cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ion-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-radio-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function NotDeliveredComponent_Template_ion_radio_group_ionChange_20_listener($event) { return ctx.onOptionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Direcci\u00F3n Insuficiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "ion-radio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Direcci\u00F3n Inexistente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "ion-radio", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Rechazado");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "ion-radio", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Se mud\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "ion-radio", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Falleci\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "ion-radio", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Cerrado/se dej\u00F3 aviso de visita");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "ion-radio", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Direcci\u00F3n inaccesible");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "ion-radio", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Otros motivos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "ion-radio", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, NotDeliveredComponent_ion_item_53_Template, 3, 1, "ion-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Nueva direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "ion-radio", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, NotDeliveredComponent_div_58_Template, 32, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, NotDeliveredComponent_ion_progress_bar_59_Template, 1, 0, "ion-progress-bar", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "ion-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotDeliveredComponent_Template_ion_button_click_61_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, " Aceptar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.order.location.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx.order.receiver, " (", ctx.order.phone, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.order.description ? ctx.order.description : " -");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.saveClientFC);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.optionFC);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showTextarea);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showLocationFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.submitting);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["RadioValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonProgressBar"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-list[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm90LWRlbGl2ZXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QUFiQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7QUFnQkYiLCJmaWxlIjoibm90LWRlbGl2ZXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWdyYWRpZW50KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9jdXN0b20tdGhlbWUuc2Nzc1wiO1xuXG5pb24tbGlzdCwgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast/toast.component */ "COqc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _modals_location_form_location_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/location-form/location-form.component */ "ctBK");
/* harmony import */ var _modals_document_form_document_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/document-form/document-form.component */ "29Iw");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "nk+c");
/* harmony import */ var _modals_update_phone_number_update_phone_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/update-phone-number/update-phone-number.component */ "TEvH");
/* harmony import */ var _modals_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/update-password/update-password.component */ "GMw2");
/* harmony import */ var _modals_document_image_view_document_image_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/document-image-view/document-image-view.component */ "GtHp");
/* harmony import */ var _modals_document_file_image_detail_document_file_image_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/document-file-image-detail/document-file-image-detail.component */ "WdDh");
/* harmony import */ var _modals_location_map_location_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/location-map/location-map.component */ "34vB");
/* harmony import */ var _modals_delivery_order_map_delivery_order_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/delivery-order-map/delivery-order-map.component */ "+mL1");
/* harmony import */ var _modals_edit_urban_distribution_edit_urban_distribution_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/edit-urban-distribution/edit-urban-distribution.component */ "lfWt");
/* harmony import */ var _modals_image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/image-detail/image-detail.component */ "mdCS");
/* harmony import */ var _modals_not_delivered_not_delivered_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/not-delivered/not-delivered.component */ "igBE");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./map/map.component */ "EZtS");
/* harmony import */ var _modals_deliver_order_deliver_order_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modals/deliver-order/deliver-order.component */ "0AvR");
/* harmony import */ var _order_detail_map_order_detail_map_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order-detail-map/order-detail-map.component */ "+uyP");
/* harmony import */ var _modals_sync_data_loading_sync_data_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modals/sync-data-loading/sync-data-loading.component */ "tyly");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [
        _toast_toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"],
        _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerComponent"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_modals_deliver_order_deliver_order_component__WEBPACK_IMPORTED_MODULE_17__["DeliverOrderComponent"],
        _modals_delivery_order_map_delivery_order_map_component__WEBPACK_IMPORTED_MODULE_12__["DeliveryOrderMapComponent"],
        _modals_document_form_document_form_component__WEBPACK_IMPORTED_MODULE_5__["DocumentFormComponent"],
        _modals_document_image_view_document_image_view_component__WEBPACK_IMPORTED_MODULE_9__["DocumentImageViewComponent"],
        _modals_document_file_image_detail_document_file_image_detail_component__WEBPACK_IMPORTED_MODULE_10__["DocumentFileImageDetailComponent"],
        _modals_edit_urban_distribution_edit_urban_distribution_component__WEBPACK_IMPORTED_MODULE_13__["EditUrbanDistributionComponent"],
        _modals_image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_14__["ImageDetailComponent"],
        _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerComponent"],
        _modals_location_form_location_form_component__WEBPACK_IMPORTED_MODULE_4__["LocationFormComponent"],
        _modals_location_map_location_map_component__WEBPACK_IMPORTED_MODULE_11__["LocationMapComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"],
        _modals_not_delivered_not_delivered_component__WEBPACK_IMPORTED_MODULE_15__["NotDeliveredComponent"],
        _order_detail_map_order_detail_map_component__WEBPACK_IMPORTED_MODULE_18__["OrderDetailMapComponent"],
        _modals_sync_data_loading_sync_data_loading_component__WEBPACK_IMPORTED_MODULE_19__["SyncDataLoadingComponent"],
        _modals_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePasswordComponent"],
        _modals_update_phone_number_update_phone_number_component__WEBPACK_IMPORTED_MODULE_7__["UpdatePhoneNumberComponent"],
        _toast_toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]], exports: [_modals_delivery_order_map_delivery_order_map_component__WEBPACK_IMPORTED_MODULE_12__["DeliveryOrderMapComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"],
        _order_detail_map_order_detail_map_component__WEBPACK_IMPORTED_MODULE_18__["OrderDetailMapComponent"],
        _toast_toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"]] }); })();


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lfWt":
/*!************************************************************************************************!*\
  !*** ./src/app/components/modals/edit-urban-distribution/edit-urban-distribution.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditUrbanDistributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUrbanDistributionComponent", function() { return EditUrbanDistributionComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/v1/order.service */ "EXzW");
/* harmony import */ var _services_v1_order_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/v1/order-manager.service */ "7zG+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");










function EditUrbanDistributionComponent_ion_spinner_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-spinner");
} }
function EditUrbanDistributionComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Aceptar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class EditUrbanDistributionComponent {
    constructor(modalController, orderService, orderManagerService, formBuilder) {
        this.modalController = modalController;
        this.orderService = orderService;
        this.orderManagerService = orderManagerService;
        this.formBuilder = formBuilder;
        this.submitting = false;
        this.form = this.formBuilder.group({
            company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            details: [''],
            city: [''],
            address: [''],
            phone: [''],
            b: [''],
            v: [''],
            s: [''],
            m: [''],
            c: [''],
        });
    }
    ngOnInit() {
        this.form.controls.company_name.setValue(this.order.receiver);
        this.form.controls.details.setValue(this.order.description);
        this.form.controls.phone.setValue(this.order.phone);
        this.form.controls.city.setValue(this.order.location.city);
        this.form.controls.address.setValue(this.order.location.address);
        this.form.controls.b.setValue(this.order.location.b);
        this.form.controls.v.setValue(this.order.location.v);
        this.form.controls.s.setValue(this.order.location.s);
        this.form.controls.m.setValue(this.order.location.m);
        this.form.controls.c.setValue(this.order.location.c);
        console.log(this.order);
    }
    submit() {
        this.submitting = true;
        const body = {
            receiver: this.form.value.company_name,
            description: this.form.value.details,
            phone: this.form.value.phone,
            city: this.form.value.city,
            address: this.form.value.address,
            b: this.form.value.b,
            v: this.form.value.v,
            s: this.form.value.s,
            m: this.form.value.m,
            c: this.form.value.c,
        };
        this.orderManagerService.updateOrder(this.order, body)
            .subscribe((response) => {
            this.submitting = false;
            this.dismiss(true);
            this.modalController.dismiss({ success: true });
        }, error => {
            this.submitting = false;
        });
    }
    dismiss(success) {
        this.modalController.dismiss({ success });
    }
}
EditUrbanDistributionComponent.ɵfac = function EditUrbanDistributionComponent_Factory(t) { return new (t || EditUrbanDistributionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_v1_order_manager_service__WEBPACK_IMPORTED_MODULE_3__["OrderManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
EditUrbanDistributionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditUrbanDistributionComponent, selectors: [["app-edit-urban-distribution"]], inputs: { order: "order" }, decls: 57, vars: 4, consts: [[1, "ion-no-border"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], [1, "ion-padding"], [3, "formGroup"], ["size", "4"], ["type", "text", "formControlName", "b"], ["size", "2"], ["type", "text", "formControlName", "v"], ["type", "text", "formControlName", "s"], ["type", "text", "formControlName", "m"], ["type", "text", "formControlName", "c"], ["size", "12"], ["type", "text", "formControlName", "address", "rows", "2"], ["type", "text", "formControlName", "city"], ["type", "text", "formControlName", "company_name"], ["type", "tel", "formControlName", "phone"], ["type", "text", "formControlName", "details", "rows", "3"], ["size", "full", "color", "primary", "shape", "round", 3, "disabled", "click"], [4, "ngIf"]], template: function EditUrbanDistributionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditUrbanDistributionComponent_Template_ion_button_click_3_listener() { return ctx.dismiss(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Barrio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Viv");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Sec");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Mz");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ion-col", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ion-col", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "ion-col", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Nombre/Raz\u00F3n social");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "ion-col", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "ion-col", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Detalles del paquete (opcional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "ion-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditUrbanDistributionComponent_Template_ion_button_click_54_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, EditUrbanDistributionComponent_ion_spinner_55_Template, 1, 0, "ion-spinner", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, EditUrbanDistributionComponent_span_56_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.form.valid || ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.submitting);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSpinner"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VkaXQtdXJiYW4tZGlzdHJpYnV0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFDQSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImVkaXQtdXJiYW4tZGlzdHJpYnV0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuIl19 */"] });


/***/ }),

/***/ "mdCS":
/*!**************************************************************************!*\
  !*** ./src/app/components/modals/image-detail/image-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: ImageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDetailComponent", function() { return ImageDetailComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ImageDetailComponent {
    constructor(modalController, sanitizer) {
        this.modalController = modalController;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
    }
    dismiss(success) {
        this.modalController.dismiss({ success });
    }
}
ImageDetailComponent.ɵfac = function ImageDetailComponent_Factory(t) { return new (t || ImageDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
ImageDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ImageDetailComponent, selectors: [["app-image-detail"]], inputs: { file: "file" }, decls: 6, vars: 1, consts: [[1, "ion-no-border"], ["color", "medium"], ["slot", "end"], ["name", "close", 1, "font-2em", 3, "click"], [1, "ion-padding"], [3, "src"]], template: function ImageDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageDetailComponent_Template_ion_icon_click_3_listener() { return ctx.dismiss(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.sanitizer.bypassSecurityTrustUrl(ctx.file.src), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-img[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vaW1hZ2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFDQSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBQWJBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFnQkYiLCJmaWxlIjoiaW1hZ2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9ybS1ncm91cCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzXCI7XG5cbmlvbi1pbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "nk+c":
/*!*************************************************************************!*\
  !*** ./src/app/components/loading-spinner/loading-spinner.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class LoadingSpinnerComponent {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    ngOnInit() {
    }
    presentLoadingSpinner(message = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingSpinner = yield this.loadingController.create({
                spinner: 'lines',
                cssClass: 'loading',
                message,
                duration: 60000
            });
            yield this.loadingSpinner.present();
        });
    }
    dismissLoadingSpinner() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingSpinner.dismiss();
        });
    }
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"])); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 0, vars: 0, template: function LoadingSpinnerComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "rTgA":
/*!***********************************************!*\
  !*** ./src/app/services/v1/driver.service.ts ***!
  \***********************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class DriverService {
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.V1 = 'v1/app/';
        this.driver$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getProfile() {
        return this.http.get(`${this.API_URL}${this.V1}drivers/profile`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((response) => {
            if (response === null || response === void 0 ? void 0 : response.driver) {
                this.setDriver$(response.driver);
            }
        }));
    }
    getProfileImage() {
        return this.http.get(`${this.API_URL}${this.V1}drivers/profile/image`, { responseType: 'blob' });
    }
    getDriverProfileImage(driver) {
        return this.http.get(`${this.API_URL}${this.V1}drivers/${driver.id}/profile-image`, { responseType: 'blob' });
    }
    updateProfile(body) {
        return this.http.put(`${this.API_URL}${this.V1}drivers/profile`, body);
    }
    updatePhoneNumber(body) {
        return this.http.put(`${this.API_URL}${this.V1}drivers/phone-number`, body);
    }
    updatePassword(body) {
        return this.http.put(`${this.API_URL}${this.V1}drivers/password`, body);
    }
    updateContractor(body) {
        return this.http.put(`${this.API_URL}${this.V1}drivers/contractor`, body);
    }
    updatePaymentMethods(body) {
        return this.http.put(`${this.API_URL}${this.V1}drivers/payment-methods`, body);
    }
    getPaymentMethods() {
        return this.http.get(`${this.API_URL}${this.V1}drivers/payment-methods`);
    }
    getRanking() {
        return this.http.get(`${this.API_URL}${this.V1}drivers/ranking`);
    }
    /***********************************************************
     * Observables
     ***********************************************************/
    getDriver$() {
        return this.driver$.asObservable();
        // console.log('getting driver observable');
        // console.log(this.driver$.getValue());
        // if (this.driver$.getValue() === null) {
        //   console.log('IS ZERO');
        //   return this.http.get(`${this.API_URL}${this.V1}drivers/profile`)
        //     .pipe(map((response: any) => response.driver),
        //       tap({
        //         next: val => {
        //           this.setDriver$(val);
        //         }
        //       })
        //     );
        // }
        // console.log('FROM CACHE!');
        // return this.driver$.asObservable();
    }
    setDriver$(driver) {
        console.log('setting new driver...');
        this.driver$.next(driver);
    }
}
DriverService.ɵfac = function DriverService_Factory(t) { return new (t || DriverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DriverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DriverService, factory: DriverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tyly":
/*!************************************************************************************!*\
  !*** ./src/app/components/modals/sync-data-loading/sync-data-loading.component.ts ***!
  \************************************************************************************/
/*! exports provided: SyncDataLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncDataLoadingComponent", function() { return SyncDataLoadingComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_v1_offline_order_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v1/offline-order-manager.service */ "a/TO");
/* harmony import */ var _services_utils_sync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/utils/sync.service */ "I40L");
/* harmony import */ var _services_utils_sync_request_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/utils/sync-request-order.service */ "y4Sp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");










function SyncDataLoadingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Por favor espere...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ion-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r0.uploadedP)("buffer", 1 - ctx_r0.uploadedP);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 3, ctx_r0.uploadedP * 100, "1.0-0"), "% ");
} }
function SyncDataLoadingComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ocurri\u00F3 un error sincronizando con el servidor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SyncDataLoadingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SyncDataLoadingComponent_div_3_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.retry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Reintentar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SyncDataLoadingComponent_div_3_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.abort(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Abortar sincr. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class SyncDataLoadingComponent {
    constructor(offlineOrderManagerService, syncService, syncRequestOrderService, popoverController) {
        this.offlineOrderManagerService = offlineOrderManagerService;
        this.syncService = syncService;
        this.syncRequestOrderService = syncRequestOrderService;
        this.popoverController = popoverController;
        this.loading = true;
        this.uploadedP = 0;
        this.syncingError = false;
    }
    ngOnInit() {
        this.uploadedPSubscription = this.syncRequestOrderService.getUploadedP$()
            .subscribe(uploadedP => {
            this.uploadedP = uploadedP;
        });
        this.syncingSubscription = this.syncService.getSyncing$()
            .subscribe(syncing => {
            console.log(`syncing: ${syncing}`);
            if (!syncing) {
                this.dismiss(true);
            }
        });
        this.syncErrorSubscription = this.syncService.getSyncingError$()
            .subscribe(syncingError => {
            this.syncingError = syncingError;
        });
    }
    ngOnDestroy() {
        if (this.uploadedPSubscription) {
            this.uploadedPSubscription.unsubscribe();
        }
        if (this.syncingSubscription) {
            this.syncingSubscription.unsubscribe();
        }
        if (this.syncErrorSubscription) {
            this.syncErrorSubscription.unsubscribe();
        }
        this.uploadedP = 0;
    }
    retry() {
        this.syncService.sync();
    }
    abort() {
        this.syncService.abortSync();
    }
    dismiss(success) {
        this.popoverController.dismiss({ success });
    }
}
SyncDataLoadingComponent.ɵfac = function SyncDataLoadingComponent_Factory(t) { return new (t || SyncDataLoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_v1_offline_order_manager_service__WEBPACK_IMPORTED_MODULE_1__["OfflineOrderManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_utils_sync_service__WEBPACK_IMPORTED_MODULE_2__["SyncService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_utils_sync_request_order_service__WEBPACK_IMPORTED_MODULE_3__["SyncRequestOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["PopoverController"])); };
SyncDataLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SyncDataLoadingComponent, selectors: [["app-sync-data-loading"]], decls: 4, vars: 3, consts: [[1, "ion-padding"], ["class", "ion-text-center ion-margin-vertical", 4, "ngIf"], ["class", "ion-text-center", 4, "ngIf"], ["class", "ion-margin-top", 4, "ngIf"], [1, "ion-text-center", "ion-margin-vertical"], [1, "ion-margin-top", 3, "value", "buffer"], [1, "ion-text-center"], [1, "ion-margin-top"], ["color", "primary", "expand", "block", 3, "click"], ["color", "danger", "expand", "block", 3, "click"]], template: function SyncDataLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SyncDataLoadingComponent_div_1_Template, 9, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SyncDataLoadingComponent_p_2_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SyncDataLoadingComponent_div_3_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.syncingError);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.syncingError);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["ion-progress-bar[_ngcontent-%COMP%] {\n  height: 5px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N5bmMtZGF0YS1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRiIsImZpbGUiOiJzeW5jLWRhdGEtbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4iXX0= */"] });


/***/ }),

/***/ "uHbY":
/*!**************************************************!*\
  !*** ./src/app/services/utils/camera.service.ts ***!
  \**************************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CameraService {
    constructor(camera, file) {
        this.camera = camera;
        this.file = file;
    }
    takePicture() {
        return new Promise((resolve, reject) => {
            const options = {
                quality: 50,
                destinationType: this.camera.DestinationType.FILE_URI,
                saveToPhotoAlbum: true,
                correctOrientation: true,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
            this.imageFile = '';
            this.imageSrc = '';
            this.filename = '';
            this.imagePath = '';
            this.camera.getPicture(options).then((imageData) => {
                this.imageFile = imageData;
                const filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                const path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                this.imagePath = path;
                this.file.readAsDataURL(path, filename)
                    .then(res => {
                    this.imageSrc = res;
                    this.filename = filename;
                    const cameraPhotoFile = {
                        file: this.imageFile,
                        src: this.imageSrc,
                        filename: this.filename,
                        path: this.imagePath
                    };
                    resolve(cameraPhotoFile);
                })
                    .catch(err => {
                    reject(err);
                });
            }, (err) => {
                reject(err);
            });
        });
    }
}
CameraService.ɵfac = function CameraService_Factory(t) { return new (t || CameraService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__["File"])); };
CameraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CameraService, factory: CameraService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        redirectTo: 'login',
        // redirectTo: 'urban-distribution-list',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "F4UR")).then(m => m.LoginPageModule)
    },
    {
        path: 'logout',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-logout-logout-module */ "pages-logout-logout-module").then(__webpack_require__.bind(null, /*! ./pages/logout/logout.module */ "4rJG"))
            .then(m => m.LogoutPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un"))
            .then(m => m.HomePageModule)
    },
    {
        path: 'help',
        loadChildren: () => Promise.all(/*! import() | pages-help-help-module */[__webpack_require__.e("default~firebase-auth~pages-help-help-module"), __webpack_require__.e("pages-help-help-module")]).then(__webpack_require__.bind(null, /*! ./pages/help/help.module */ "6RTz"))
            .then(m => m.HelpPageModule)
    },
    {
        path: 'complaint-list',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-complaints-complaint-list-module */ "pages-complaints-complaint-list-module").then(__webpack_require__.bind(null, /*! ./pages/complaints/complaint-list.module */ "9HFV")).then(m => m.ComplaintListPageModule)
    },
    {
        path: 'liquidation-list',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-liquidations-liquidation-list-module */ "pages-liquidations-liquidation-list-module").then(__webpack_require__.bind(null, /*! ./pages/liquidations/liquidation-list.module */ "Gflv")).then(m => m.LiquidationListPageModule)
    },
    {
        path: 'notification-list',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-notification-list-notification-list-module */ "pages-notification-list-notification-list-module").then(__webpack_require__.bind(null, /*! ./pages/notification-list/notification-list.module */ "l8XY"))
            .then(m => m.NotificationListPageModule)
    },
    {
        path: 'insurance',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-insurance-insurance-module */ "pages-insurance-insurance-module").then(__webpack_require__.bind(null, /*! ./pages/insurance/insurance.module */ "r72Y"))
            .then(m => m.InsurancePageModule)
    },
    {
        path: 'benefits',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-benefits-benefits-module */ "pages-benefits-benefits-module").then(__webpack_require__.bind(null, /*! ./pages/benefits/benefits.module */ "cr26"))
            .then(m => m.BenefitsPageModule)
    },
    {
        path: 'suggestion-form',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-suggestion-form-suggestion-form-module */ "pages-suggestion-form-suggestion-form-module").then(__webpack_require__.bind(null, /*! ./pages/suggestion-form/suggestion-form.module */ "r+7g"))
            .then(m => m.SuggestionFormPageModule)
    },
    {
        path: 'document-list',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-maintenance-document-list-document-list-module */ "pages-maintenance-document-list-document-list-module").then(__webpack_require__.bind(null, /*! ./pages/maintenance/document-list/document-list.module */ "poPZ"))
            .then(m => m.DocumentListPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-profile-profile-tabs-profile-tabs-module */ "pages-profile-profile-tabs-profile-tabs-module").then(__webpack_require__.bind(null, /*! ./pages/profile/profile-tabs/profile-tabs.module */ "Uics"))
            .then(m => m.ProfileTabsPageModule)
    },
    {
        path: 'delivery-order-map',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-delivery-order-map-delivery-order-map-module */ "pages-delivery-order-map-delivery-order-map-module").then(__webpack_require__.bind(null, /*! ./pages/delivery-order-map/delivery-order-map.module */ "GJSH"))
            .then(m => m.DeliveryOrderMapPageModule)
    },
    {
        path: 'urban-distribution-detail',
        loadChildren: () => Promise.all(/*! import() | pages-urban-distributions-urban-distribution-detail-urban-distribution-detail-module */[__webpack_require__.e("default~pages-urban-distributions-urban-distribution-detail-urban-distribution-detail-module~pages-u~a64be117"), __webpack_require__.e("pages-urban-distributions-urban-distribution-detail-urban-distribution-detail-module")]).then(__webpack_require__.bind(null, /*! ./pages/urban-distributions/urban-distribution-detail/urban-distribution-detail.module */ "vhVs"))
            .then(m => m.UrbanDistributionDetailPageModule)
    },
    {
        path: 'urban-distribution-form',
        loadChildren: () => Promise.all(/*! import() | pages-urban-distributions-urban-distribution-form-urban-distribution-form-module */[__webpack_require__.e("default~pages-urban-distributions-urban-distribution-form-urban-distribution-form-module~pages-urban~a4fc6116"), __webpack_require__.e("pages-urban-distributions-urban-distribution-form-urban-distribution-form-module")]).then(__webpack_require__.bind(null, /*! ./pages/urban-distributions/urban-distribution-form/urban-distribution-form.module */ "UELu"))
            .then(m => m.UrbanDistributionFormPageModule)
    },
    {
        path: 'urban-distribution-list',
        loadChildren: () => Promise.all(/*! import() | pages-urban-distributions-urban-distribution-list-urban-distribution-list-module */[__webpack_require__.e("default~pages-urban-distributions-urban-distribution-form-urban-distribution-form-module~pages-urban~a4fc6116"), __webpack_require__.e("default~pages-urban-distributions-urban-distribution-detail-urban-distribution-detail-module~pages-u~a64be117"), __webpack_require__.e("pages-urban-distributions-urban-distribution-list-urban-distribution-list-module")]).then(__webpack_require__.bind(null, /*! ./pages/urban-distributions/urban-distribution-list/urban-distribution-list.module */ "pKA5"))
            .then(m => m.UrbanDistributionListPageModule)
    },
    {
        path: 'journey-list',
        loadChildren: () => Promise.all(/*! import() | pages-journeys-journey-list-journey-list-module */[__webpack_require__.e("default~pages-delivery-map-delivery-map-module~pages-journeys-journey-list-journey-list-module"), __webpack_require__.e("default~pages-journeys-journey-form-journey-form-module~pages-journeys-journey-list-journey-list-module"), __webpack_require__.e("default~pages-journeys-journey-detail-journey-detail-module~pages-journeys-journey-list-journey-list-module"), __webpack_require__.e("pages-journeys-journey-list-journey-list-module")]).then(__webpack_require__.bind(null, /*! ./pages/journeys/journey-list/journey-list.module */ "mHeH"))
            .then(m => m.JourneyListPageModule)
    },
    {
        path: 'journey-form',
        loadChildren: () => Promise.all(/*! import() | pages-journeys-journey-form-journey-form-module */[__webpack_require__.e("default~pages-journeys-journey-form-journey-form-module~pages-journeys-journey-list-journey-list-module"), __webpack_require__.e("pages-journeys-journey-form-journey-form-module")]).then(__webpack_require__.bind(null, /*! ./pages/journeys/journey-form/journey-form.module */ "7EcA"))
            .then(m => m.JourneyFormPageModule)
    },
    {
        path: 'journey-detail',
        loadChildren: () => Promise.all(/*! import() | pages-journeys-journey-detail-journey-detail-module */[__webpack_require__.e("default~pages-journeys-journey-detail-journey-detail-module~pages-journeys-journey-list-journey-list-module"), __webpack_require__.e("pages-journeys-journey-detail-journey-detail-module")]).then(__webpack_require__.bind(null, /*! ./pages/journeys/journey-detail/journey-detail.module */ "uSDN"))
            .then(m => m.JourneyDetailPageModule)
    },
    // {
    //   path: 'operation-control-form',
    //   loadChildren: () => import('./pages/controls/operation-controls/operation-control-form/operation-control-form.module')
    //     .then(m => m.OperationControlFormPageModule)
    // },
    // {
    //   path: 'operation-control-list',
    //   loadChildren: () => import('./pages/controls/operation-controls/operation-control-list/operation-control-list.module')
    //     .then(m => m.OperationControlListPageModule)
    // },
    // {
    //   path: 'fuel-control-list',
    //   loadChildren: () => import('./pages/controls/fuel-controls/fuel-control-list/fuel-control-list.module')
    //     .then(m => m.FuelControlListPageModule)
    // },
    // {
    //   path: 'fuel-control-form',
    //   loadChildren: () => import('./pages/controls/fuel-controls/fuel-control-form/fuel-control-form.module')
    //     .then(m => m.FuelControlFormPageModule)
    // },
    {
        path: 'reminder-list',
        loadChildren: () => Promise.all(/*! import() | pages-reminders-reminder-list-reminder-list-module */[__webpack_require__.e("default~pages-reminders-reminder-form-reminder-form-module~pages-reminders-reminder-list-reminder-list-module"), __webpack_require__.e("pages-reminders-reminder-list-reminder-list-module")]).then(__webpack_require__.bind(null, /*! ./pages/reminders/reminder-list/reminder-list.module */ "ksxs"))
            .then(m => m.ReminderListPageModule)
    },
    {
        path: 'reminder-form',
        loadChildren: () => Promise.all(/*! import() | pages-reminders-reminder-form-reminder-form-module */[__webpack_require__.e("default~pages-reminders-reminder-form-reminder-form-module~pages-reminders-reminder-list-reminder-list-module"), __webpack_require__.e("pages-reminders-reminder-form-reminder-form-module")]).then(__webpack_require__.bind(null, /*! ./pages/reminders/reminder-form/reminder-form.module */ "hk52"))
            .then(m => m.ReminderFormPageModule)
    },
    {
        path: 'toll-control-list',
        loadChildren: () => Promise.all(/*! import() | pages-controls-toll-controls-toll-control-list-toll-control-list-module */[__webpack_require__.e("default~pages-controls-toll-controls-toll-control-form-toll-control-form-module~toll-controls-toll-c~db1b2e11"), __webpack_require__.e("toll-controls-toll-control-list-toll-control-list-module")]).then(__webpack_require__.bind(null, /*! ./pages/controls/toll-controls/toll-control-list/toll-control-list.module */ "a6+4"))
            .then(m => m.TollControlListPageModule)
    },
    {
        path: 'toll-control-form',
        loadChildren: () => Promise.all(/*! import() | pages-controls-toll-controls-toll-control-form-toll-control-form-module */[__webpack_require__.e("default~pages-controls-toll-controls-toll-control-form-toll-control-form-module~toll-controls-toll-c~db1b2e11"), __webpack_require__.e("pages-controls-toll-controls-toll-control-form-toll-control-form-module")]).then(__webpack_require__.bind(null, /*! ./pages/controls/toll-controls/toll-control-form/toll-control-form.module */ "fGtj"))
            .then(m => m.TollControlFormPageModule)
    },
    {
        path: 'profile-transport',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-profile-profile-transport-profile-transport-module */ "profile-transport-profile-transport-module").then(__webpack_require__.bind(null, /*! ./pages/profile/profile-transport/profile-transport.module */ "wg0U")).then(m => m.ProfileTransportPageModule)
    },
    {
        path: 'profile-payment',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-profile-profile-payment-profile-payment-module */ "profile-payment-profile-payment-module").then(__webpack_require__.bind(null, /*! ./pages/profile/profile-payment/profile-payment.module */ "3CG7")).then(m => m.ProfilePaymentPageModule)
    },
    {
        path: 'wallet-tabs',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-wallet-wallet-tabs-wallet-tabs-module */ "pages-wallet-wallet-tabs-wallet-tabs-module").then(__webpack_require__.bind(null, /*! ./pages/wallet/wallet-tabs/wallet-tabs.module */ "vqBG"))
            .then(m => m.WalletTabsPageModule)
    },
    {
        path: 'control-tabs',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-controls-control-tabs-control-tabs-module */ "pages-controls-control-tabs-control-tabs-module").then(__webpack_require__.bind(null, /*! ./pages/controls/control-tabs/control-tabs.module */ "pvM4"))
            .then(m => m.ControlTabsPageModule)
    },
    {
        path: 'wallet-withdrawal-request-form',
        loadChildren: () => Promise.all(/*! import() | pages-wallet-wallet-withdrawal-request-form-wallet-withdrawal-request-form-module */[__webpack_require__.e("default~pages-wallet-wallet-withdrawal-request-form-wallet-withdrawal-request-form-module~wallet-tra~7a323ccd"), __webpack_require__.e("pages-wallet-wallet-withdrawal-request-form-wallet-withdrawal-request-form-module")]).then(__webpack_require__.bind(null, /*! ./pages/wallet/wallet-withdrawal-request-form/wallet-withdrawal-request-form.module */ "dKNL"))
            .then(m => m.WalletWithdrawalRequestFormPageModule)
    },
    {
        path: 'ranking',
        loadChildren: () => Promise.all(/*! import() | pages-ranking-ranking-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-ranking-ranking-module")]).then(__webpack_require__.bind(null, /*! ./pages/ranking/ranking.module */ "97Bw"))
            .then(m => m.RankingPageModule)
    },
    {
        path: 'wallet-withdrawal-request-list',
        loadChildren: () => Promise.all(/*! import() | pages-wallet-wallet-withdrawal-request-list-wallet-withdrawal-request-list-module */[__webpack_require__.e("default~pages-wallet-wallet-withdrawal-request-form-wallet-withdrawal-request-form-module~wallet-tra~7a323ccd"), __webpack_require__.e("wallet-withdrawal-request-list-wallet-withdrawal-request-list-module")]).then(__webpack_require__.bind(null, /*! ./pages/wallet/wallet-withdrawal-request-list/wallet-withdrawal-request-list.module */ "B7Px"))
            .then(m => m.WalletWithdrawalRequestListPageModule)
    },
    {
        path: 'wallet-transaction-list',
        loadChildren: () => Promise.all(/*! import() | pages-wallet-wallet-transaction-list-wallet-transaction-list-module */[__webpack_require__.e("default~pages-wallet-wallet-withdrawal-request-form-wallet-withdrawal-request-form-module~wallet-tra~7a323ccd"), __webpack_require__.e("wallet-transaction-list-wallet-transaction-list-module")]).then(__webpack_require__.bind(null, /*! ./pages/wallet/wallet-transaction-list/wallet-transaction-list.module */ "dmRS"))
            .then(m => m.WalletTransactionListPageModule)
    },
    {
        path: 'profile-form',
        loadChildren: () => Promise.all(/*! import() | pages-profile-profile-form-profile-form-module */[__webpack_require__.e("default~pages-profile-profile-form-profile-form-module~profile-data-profile-data-module"), __webpack_require__.e("pages-profile-profile-form-profile-form-module")]).then(__webpack_require__.bind(null, /*! ./pages/profile/profile-form/profile-form.module */ "T5eD")).then(m => m.ProfileFormPageModule)
    },
    {
        path: 'delivery-map/:type',
        loadChildren: () => Promise.all(/*! import() | pages-delivery-map-delivery-map-module */[__webpack_require__.e("default~pages-delivery-map-delivery-map-module~pages-journeys-journey-list-journey-list-module"), __webpack_require__.e("pages-delivery-map-delivery-map-module")]).then(__webpack_require__.bind(null, /*! ./pages/delivery-map/delivery-map.module */ "dMZ1")).then(m => m.DeliveryMapPageModule)
    },
    {
        path: 'all-orders-map',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-all-orders-map-all-orders-map-module */ "pages-all-orders-map-all-orders-map-module").then(__webpack_require__.bind(null, /*! ./pages/all-orders-map/all-orders-map.module */ "F1/z")).then(m => m.AllOrdersMapPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | pages-register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-register-register-module")]).then(__webpack_require__.bind(null, /*! ./pages/register/register.module */ "fhSy")).then(m => m.RegisterPageModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"], relativeLinkResolution: 'legacy' })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "y4Sp":
/*!**************************************************************!*\
  !*** ./src/app/services/utils/sync-request-order.service.ts ***!
  \**************************************************************/
/*! exports provided: SyncRequestOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncRequestOrderService", function() { return SyncRequestOrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _v1_order_offline_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../v1/order-offline-manager.service */ "/DmI");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");










const STORAGE_REQ_KEY_ORDERS = 'distriapporders';
const STORAGE_REQ_KEY_REQS = 'distriappreqs';
class SyncRequestOrderService {
    constructor(storage, orderOfflineManagerService, httpClient) {
        this.storage = storage;
        this.orderOfflineManagerService = orderOfflineManagerService;
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL;
        this.V1 = 'v1/app/';
        this.uploadedP$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.completedSync$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    setUploadedP$(uploadedP) {
        this.uploadedP$.next(uploadedP);
    }
    getUploadedP$() {
        return this.uploadedP$.asObservable();
    }
    setCompletedSync$(completedSync) {
        this.completedSync$.next(completedSync);
    }
    getCompletedSync$() {
        return this.completedSync$.asObservable();
    }
    // is a fact that stored requests length > 0
    syncStoredOrdersRequests(storedRequests) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const processedRequestsIds = [];
            let uploadedP = 0;
            for (const storedRequest of storedRequests) {
                yield this.sendRequest(storedRequest).then(res => {
                    console.log('got res', res);
                    processedRequestsIds.push(storedRequest.id);
                    uploadedP = processedRequestsIds.length / storedRequests.length;
                    this.setUploadedP$(uploadedP);
                }).catch(err => {
                    console.log(`ERROR: ${err}`, storedRequest.id + ': ' + storedRequest.attempts);
                    storedRequest.attempts = storedRequest.attempts + 1;
                });
            }
            setTimeout(() => {
                console.log('inside timeout...');
                console.log('aquí debo eliminar los requests y las órdenes del localstorage');
                console.log(storedRequests.length, processedRequestsIds.length);
                console.log(processedRequestsIds);
                console.log(storedRequests);
                const filteredRequests = storedRequests.filter(sq => processedRequestsIds.indexOf(sq.id) <= -1);
                console.log(`filtered requests...`, filteredRequests);
                this.storage.set(STORAGE_REQ_KEY_REQS, filteredRequests)
                    .then(() => {
                    this.setCompletedSync$(true);
                });
            }, 3000);
        });
    }
    sendRequest(storedRequest) {
        console.log(`attempting to send stored request: ${JSON.stringify(storedRequest)}`);
        return new Promise((resolve, reject) => {
            this.orderOfflineManagerService.getLocalOrderId(storedRequest.pUid)
                .then((order) => {
                console.log('order', order);
                if (storedRequest.type === 'request') {
                    console.log('Sending request to server: ', storedRequest);
                    // resolve(true);
                    // Math.floor(Math.random() * 90 + 10) < 50 ? resolve(true) : reject(true);
                    this.makeHttpClientRequest(storedRequest, order).then(res => {
                        console.log(res);
                        resolve(res);
                    }).catch(err => {
                        reject(err);
                    });
                }
                else {
                    //   console.log('IS A FILEEEEE!!!!!');
                    //   // this.uploadFile(storedRequest, order).then(res => {
                    //   //   console.log(res);
                    //   //   resolve(res);
                    //   // }).catch(err => {
                    //   //   reject(err);
                    //   // });
                    //   resolve(true);
                }
            })
                .catch(err => {
                resolve(true);
            });
        });
    }
    makeHttpClientRequest(storedRequest, order) {
        return new Promise((resolve, reject) => {
            const url = this.getUrl(storedRequest, order);
            console.log('sending request to url: ', url);
            this.httpClient.request(storedRequest.method, url, { body: storedRequest.body })
                .subscribe((res) => {
                if (res && res.order) {
                    this.orderOfflineManagerService.updateLocalOrderId(res.order.id, storedRequest.pUid)
                        .then(localOrder => {
                        console.log(localOrder);
                        resolve(res);
                    }).catch(err => {
                        reject(err);
                    });
                }
                else {
                    resolve(res);
                }
            }, error => {
                reject(error);
            });
        });
    }
    getUrl(storedRequest, order) {
        console.log(storedRequest.action);
        let url = '';
        switch (storedRequest.action) {
            case 'store':
                url = `${this.API_URL}${this.V1}orders`;
                break;
            case 'store-location':
                url = `${this.API_URL}${this.V1}locations`;
                break;
            case 'update':
                url = `${this.API_URL}${this.V1}orders/${order.id}`;
                break;
            case 'delete':
                url = `${this.API_URL}${this.V1}orders/${order.id}`;
                break;
            case 'delivered':
                url = `${this.API_URL}${this.V1}orders/${order.id}/delivered-offline`;
                break;
            case 'not-delivered':
                url = `${this.API_URL}${this.V1}orders/${order.id}/not-delivered`;
                break;
            case 'upload-file':
                url = `${this.API_URL}${this.V1}delivery-images`;
                break;
        }
        return url;
    }
}
SyncRequestOrderService.ɵfac = function SyncRequestOrderService_Factory(t) { return new (t || SyncRequestOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_v1_order_offline_manager_service__WEBPACK_IMPORTED_MODULE_4__["OrderOfflineManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SyncRequestOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: SyncRequestOrderService, factory: SyncRequestOrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);