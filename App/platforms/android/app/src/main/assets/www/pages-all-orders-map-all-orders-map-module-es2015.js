(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-orders-map-all-orders-map-module"],{

/***/ "Eyzd":
/*!***********************************************************************!*\
  !*** ./src/app/pages/all-orders-map/all-orders-map-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AllOrdersMapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrdersMapPageRoutingModule", function() { return AllOrdersMapPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _all_orders_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-orders-map.page */ "fqJu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _all_orders_map_page__WEBPACK_IMPORTED_MODULE_1__["AllOrdersMapPage"]
    }
];
class AllOrdersMapPageRoutingModule {
}
AllOrdersMapPageRoutingModule.ɵfac = function AllOrdersMapPageRoutingModule_Factory(t) { return new (t || AllOrdersMapPageRoutingModule)(); };
AllOrdersMapPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AllOrdersMapPageRoutingModule });
AllOrdersMapPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AllOrdersMapPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "F1/z":
/*!***************************************************************!*\
  !*** ./src/app/pages/all-orders-map/all-orders-map.module.ts ***!
  \***************************************************************/
/*! exports provided: AllOrdersMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrdersMapPageModule", function() { return AllOrdersMapPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _all_orders_map_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-orders-map-routing.module */ "Eyzd");
/* harmony import */ var _all_orders_map_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-orders-map.page */ "fqJu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AllOrdersMapPageModule {
}
AllOrdersMapPageModule.ɵfac = function AllOrdersMapPageModule_Factory(t) { return new (t || AllOrdersMapPageModule)(); };
AllOrdersMapPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AllOrdersMapPageModule });
AllOrdersMapPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _all_orders_map_routing_module__WEBPACK_IMPORTED_MODULE_3__["AllOrdersMapPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AllOrdersMapPageModule, { declarations: [_all_orders_map_page__WEBPACK_IMPORTED_MODULE_4__["AllOrdersMapPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _all_orders_map_routing_module__WEBPACK_IMPORTED_MODULE_3__["AllOrdersMapPageRoutingModule"]] }); })();


/***/ }),

/***/ "fqJu":
/*!*************************************************************!*\
  !*** ./src/app/pages/all-orders-map/all-orders-map.page.ts ***!
  \*************************************************************/
/*! exports provided: AllOrdersMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrdersMapPage", function() { return AllOrdersMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/v1/order.service */ "EXzW");
/* harmony import */ var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/v1/geolocation.service */ "3Cxn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-maps */ "tBOM");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");











const _c0 = ["allOrdersMap"];
class AllOrdersMapPage {
    constructor(orderService, router, geolocationService) {
        this.orderService = orderService;
        this.router = router;
        this.geolocationService = geolocationService;
        this.htmlInfoWindow = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["HtmlInfoWindow"]();
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
                }
                else {
                    this.setDriverMarker();
                }
            }
        });
        this.checkWatchLocationsSubscription();
        this.driverPosition = this.geolocationService.getDriverPosition();
    }
    ngOnDestroy() {
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
        _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["Environment"].setEnv({
            API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCQ5AidfjBOg7VI2sgkbpnKHPBGAoLQ15w',
            API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCQ5AidfjBOg7VI2sgkbpnKHPBGAoLQ15w'
        });
        const mapOptions = {
            camera: {
                target: {
                    lat: +this.orders[0].location.lat,
                    lng: +this.orders[0].location.lng
                },
                zoom: 15,
                tilt: 30
            }
        };
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMaps"].create('allOrdersMap', mapOptions);
        const center = {
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
            const driverMarkerPosition = {
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
            const driverPosition = {
                lat: this.driverPosition.coords.latitude,
                lng: this.driverPosition.coords.longitude
            };
            this.driverMarker.setPosition(driverPosition);
        }
    }
    setAllOrdersMarkers() {
        var e_1, _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let i = 1;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"])(this.orders), _c; _c = yield _b.next(), !_c.done;) {
                    const order = _c.value;
                    this.setOrderMarker(order, i);
                    i++;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            setTimeout(() => {
                this.setBounds();
            }, 1000);
        });
    }
    setBounds() {
        const points = [];
        this.orders.map(order => {
            const position = {
                lat: +order.location.lat, lng: +order.location.lng
            };
            points.push(position);
        });
        if (this.driverMarker) {
            const driverPosition = {
                lat: this.driverMarker.getPosition().lat, lng: this.driverMarker.getPosition().lng
            };
            points.push(driverPosition);
        }
        const bounds = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["LatLngBounds"](points);
        this.map.moveCamera({
            target: bounds
        });
    }
    setOrderMarker(order, i) {
        console.log(order);
        return new Promise((resolve, reject) => {
            const url = this.getMarkerUrl(order);
            const position = { lat: +order.location.lat, lng: +order.location.lng };
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
                marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsEvent"].MARKER_CLICK).subscribe((m) => {
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
    setInfoWindowContent(order, i) {
        const frame = document.createElement('div');
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
        });
    }
    getMarkerUrl(order) {
        if (order.status === 'not-delivered') {
            // return 'https://maps.google.com/mapfiles/ms/icons/red.png';
            return './assets/markers/red.png';
        }
        else if (order.status === 'pending') {
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
AllOrdersMapPage.ɵfac = function AllOrdersMapPage_Factory(t) { return new (t || AllOrdersMapPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"])); };
AllOrdersMapPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AllOrdersMapPage, selectors: [["app-all-orders-map"]], viewQuery: function AllOrdersMapPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, decls: 10, vars: 0, consts: [["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["id", "allOrdersMap"], ["allOrdersMap", ""]], template: function AllOrdersMapPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AllOrdersMapPage_Template_ion_button_click_3_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D3rdenes a entregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\n#allOrdersMap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FsbC1vcmRlcnMtbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiYWxsLW9yZGVycy1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1ncmFkaWVudCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG5cbiNhbGxPcmRlcnNNYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiJdfQ== */"] });


/***/ })

}]);