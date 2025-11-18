(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-delivery-order-map-delivery-order-map-module"],{

/***/ "DKCL":
/*!*************************************************!*\
  !*** ./src/app/services/v1/delivery.service.ts ***!
  \*************************************************/
/*! exports provided: DeliveryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryService", function() { return DeliveryService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DeliveryService {
    constructor() {
        // type: this.type,
        // orders: this.orders,
        // currentOrder: this.currentOrder
        this.orders = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.currentOrder = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
}
DeliveryService.ɵfac = function DeliveryService_Factory(t) { return new (t || DeliveryService)(); };
DeliveryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeliveryService, factory: DeliveryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "GJSH":
/*!***********************************************************************!*\
  !*** ./src/app/pages/delivery-order-map/delivery-order-map.module.ts ***!
  \***********************************************************************/
/*! exports provided: DeliveryOrderMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOrderMapPageModule", function() { return DeliveryOrderMapPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _delivery_order_map_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery-order-map-routing.module */ "zc+D");
/* harmony import */ var _delivery_order_map_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delivery-order-map.page */ "GvAp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class DeliveryOrderMapPageModule {
}
DeliveryOrderMapPageModule.ɵfac = function DeliveryOrderMapPageModule_Factory(t) { return new (t || DeliveryOrderMapPageModule)(); };
DeliveryOrderMapPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DeliveryOrderMapPageModule });
DeliveryOrderMapPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _delivery_order_map_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeliveryOrderMapPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DeliveryOrderMapPageModule, { declarations: [_delivery_order_map_page__WEBPACK_IMPORTED_MODULE_4__["DeliveryOrderMapPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _delivery_order_map_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeliveryOrderMapPageRoutingModule"]] }); })();


/***/ }),

/***/ "GvAp":
/*!*********************************************************************!*\
  !*** ./src/app/pages/delivery-order-map/delivery-order-map.page.ts ***!
  \*********************************************************************/
/*! exports provided: DeliveryOrderMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOrderMapPage", function() { return DeliveryOrderMapPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/v1/order.service */ "EXzW");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps */ "tBOM");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _services_v1_delivery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/v1/delivery.service */ "DKCL");











const _c0 = ["deliveryOrderMarkersMap"];
class DeliveryOrderMapPage {
    constructor(modalController, geolocation, deliveryService, orderService) {
        this.modalController = modalController;
        this.geolocation = geolocation;
        this.deliveryService = deliveryService;
        this.orderService = orderService;
        this.orders = [];
        this.markers = [];
        this.radius = 250;
        this.htmlInfoWindow = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["HtmlInfoWindow"]();
    }
    ngOnInit() {
        console.log('delivery-order-map...!');
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.deliveryService.currentOrder.subscribe(currentOrder => {
                if (currentOrder) {
                    this.currentOrder = currentOrder;
                    this.deliveryService.orders.subscribe(orders => {
                        if (orders.length > 0) {
                            this.orders = orders;
                            this.loadMap();
                        }
                    });
                }
            });
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
    loadMap() {
        _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["Environment"].setEnv({
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
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"].create('deliveryOrderMarkersMap', mapOptions);
        const center = { lat: +this.currentOrder.location.lat, lng: +this.currentOrder.location.lng };
        this.map.moveCamera({
            target: center
        });
        this.circle = this.map.addCircleSync({
            center,
            radius: this.radius,
            strokeColor: 'rgba(250, 250, 250, 0.6)',
            strokeWidth: 0,
            fillColor: 'rgba(250, 250, 250, 0.6)',
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
            marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK).subscribe((m) => {
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
        const bounds = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["LatLngBounds"]([
            { lat: +this.currentOrder.location.lat, lng: +this.currentOrder.location.lng }
        ]);
        anotherOrders.map(order => {
            const position = { lat: +order.location.lat, lng: +order.location.lng };
            bounds.extend(position);
            this.map.addMarker({
                icon: 'blue',
                animation: 'DROP',
                position
            }).then(marker => {
                this.markers.push(marker);
                marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK).subscribe((m) => {
                    this.selectedOrder = order;
                    this.htmlInfoWindow.close();
                    this.setInfoWindowContent(order);
                    this.htmlInfoWindow.open(marker);
                });
            });
        });
        this.map.moveCamera({
            target: bounds
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
        const bounds = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["LatLngBounds"]([
            { lat: +this.currentOrder.location.lat, lng: +this.currentOrder.location.lng }
        ]);
        ordersInRadius.map(order => {
            const position = { lat: +order.location.lat, lng: +order.location.lng };
            bounds.extend(position);
            this.map.addMarker({
                icon: 'blue',
                animation: 'DROP',
                position
            }).then(marker => {
                this.markers.push(marker);
                marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK).subscribe((m) => {
                    this.selectedOrder = order;
                    this.htmlInfoWindow.close();
                    this.setInfoWindowContent(order);
                    this.htmlInfoWindow.open(marker);
                });
            });
        });
        this.circle.setVisible(true);
        this.map.moveCamera({
            target: bounds
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
DeliveryOrderMapPage.ɵfac = function DeliveryOrderMapPage_Factory(t) { return new (t || DeliveryOrderMapPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_v1_delivery_service__WEBPACK_IMPORTED_MODULE_5__["DeliveryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"])); };
DeliveryOrderMapPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeliveryOrderMapPage, selectors: [["app-delivery-order-map"]], viewQuery: function DeliveryOrderMapPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, decls: 13, vars: 0, consts: [["color", "primary"], ["name", "close", "slot", "icon-only"], ["id", "deliveryOrderMarkersMap"], ["deliveryOrderMarkersMap", ""], ["color", "primary", "size", "full", "shape", "round", 3, "click"]], template: function DeliveryOrderMapPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryOrderMapPage_Template_ion_button_click_9_listener() { return ctx.viewAllMarkers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ver todos los pendientes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryOrderMapPage_Template_ion_button_click_11_listener() { return ctx.findNearbyMarkers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Ver pendientes cercanos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"]], styles: ["#deliveryOrderMarkersMap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 2em;\n  top: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RlbGl2ZXJ5LW9yZGVyLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJkZWxpdmVyeS1vcmRlci1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RlbGl2ZXJ5T3JkZXJNYXJrZXJzTWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "zc+D":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/delivery-order-map/delivery-order-map-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DeliveryOrderMapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOrderMapPageRoutingModule", function() { return DeliveryOrderMapPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delivery_order_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-order-map.page */ "GvAp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _delivery_order_map_page__WEBPACK_IMPORTED_MODULE_1__["DeliveryOrderMapPage"]
    }
];
class DeliveryOrderMapPageRoutingModule {
}
DeliveryOrderMapPageRoutingModule.ɵfac = function DeliveryOrderMapPageRoutingModule_Factory(t) { return new (t || DeliveryOrderMapPageRoutingModule)(); };
DeliveryOrderMapPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DeliveryOrderMapPageRoutingModule });
DeliveryOrderMapPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DeliveryOrderMapPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);