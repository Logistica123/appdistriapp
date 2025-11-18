(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-journeys-journey-list-journey-list-module"],{

/***/ "dgk+":
/*!******************************************************************!*\
  !*** ./src/app/pages/journeys/journey-list/journey-list.page.ts ***!
  \******************************************************************/
/*! exports provided: JourneyListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyListPage", function() { return JourneyListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/toast/toast.component */ "COqc");
/* harmony import */ var _delivery_map_delivery_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../delivery-map/delivery-map.page */ "qM3D");
/* harmony import */ var _journey_detail_journey_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../journey-detail/journey-detail.page */ "qGJ6");
/* harmony import */ var _journey_form_journey_form_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../journey-form/journey-form.page */ "RV/N");
/* harmony import */ var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/v1/driver.service */ "rTgA");
/* harmony import */ var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/v1/geolocation.service */ "3Cxn");
/* harmony import */ var _services_v1_location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/v1/location.service */ "fRX6");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/v1/order.service */ "EXzW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
























function JourneyListPage_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No tienes viajes pendientes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function JourneyListPage_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-progress-bar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function JourneyListPage_ion_item_sliding_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item-sliding");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function JourneyListPage_ion_item_sliding_17_Template_ion_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10); const order_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r9.viewOrderDetail(order_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ion-badge", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](22, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "ion-reorder", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ion-item-options");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "ion-item-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function JourneyListPage_ion_item_sliding_17_Template_ion_item_option_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10); const order_r7 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r11.presentDeleteOrderAlertConfirm(order_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](26, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 6, order_r7.location.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](16, 8, order_r7.location.address), ". ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](17, 10, order_r7.location.city), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("color", order_r7.status === "delivered" ? "primary" : order_r7.status === "skipped" ? "warning" : "danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](22, 12, order_r7.status_es), " ");
} }
function JourneyListPage_ion_icon_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-icon", 28);
} }
function JourneyListPage_ion_spinner_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-spinner", 29);
} }
function JourneyListPage_ion_label_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Optimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function JourneyListPage_ion_label_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Optimizando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
class JourneyListPage {
    constructor(modalController, locationService, alertController, loadingController, geolocation, toastComponent, geolocationService, driverService, router, orderService) {
        this.modalController = modalController;
        this.locationService = locationService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.geolocation = geolocation;
        this.toastComponent = toastComponent;
        this.geolocationService = geolocationService;
        this.driverService = driverService;
        this.router = router;
        this.orderService = orderService;
        this.orders = [];
        this.dateFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.date = new Date();
        this.loading = true;
        this.optimizingOrders = false;
    }
    ngOnInit() {
        this.driverSubscription = this.driverService.getDriver$()
            .subscribe(driver => {
            if (driver) {
                this.driver = driver;
            }
            else {
                this.driverService.getProfile().subscribe((response) => {
                    this.driver = response.driver;
                });
            }
        });
    }
    ngAfterViewInit() {
        this.date = new Date();
        this.dateFC.setValue(this.date.toISOString());
        this.getOrdersByDate();
    }
    ngOnDestroy() {
        if (this.driverSubscription) {
            this.driverSubscription.unsubscribe();
        }
    }
    doReorder(ev) {
        this.swapArrayElement(ev.detail.from, ev.detail.to);
        ev.detail.complete();
    }
    swapArrayElement(from, to) {
        const temp = this.orders[from];
        this.orders[from] = this.orders[to];
        this.orders[to] = temp;
    }
    addLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _journey_form_journey_form_page__WEBPACK_IMPORTED_MODULE_8__["JourneyFormPage"]
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data === null || data === void 0 ? void 0 : data.hasNewOrder) {
                this.getOrdersByDate();
            }
        });
    }
    viewOrderDetail(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _journey_detail_journey_detail_page__WEBPACK_IMPORTED_MODULE_7__["JourneyDetailPage"],
                componentProps: { order },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data === null || data === void 0 ? void 0 : data.success) {
                //
            }
        });
    }
    getOrdersByDate() {
        console.log('getting orders by date...');
        this.orders = [];
        this.loading = true;
        const day = this.date.getDate();
        const month = this.date.getMonth() + 1;
        const year = this.date.getFullYear();
        this.orderService.getOrdersByDate('journey', day, month, year)
            .subscribe((response) => {
            this.orders = response.orders;
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }
    onDateChange(event) {
        this.date = new Date(event.detail.value);
        this.getOrdersByDate();
    }
    showMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.orders.length <= 0) {
                const alert = yield this.alertController.create({
                    message: 'No tienes paquetes pendientes por entregar',
                    buttons: ['OK']
                });
                yield alert.present();
            }
            else {
                const modal = yield this.modalController.create({
                    component: _delivery_map_delivery_map_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryMapPage"],
                    componentProps: { orders: this.orders }
                });
                yield modal.present();
                const { data } = yield modal.onDidDismiss();
                this.getOrdersByDate();
            }
        });
    }
    checkDriverPosition() {
        var _a, _b, _c, _d;
        console.log(this.geolocationService.getDriverPosition());
        this.driverPosition = this.geolocationService.getDriverPosition();
        if (!(((_b = (_a = this.driverPosition) === null || _a === void 0 ? void 0 : _a.coords) === null || _b === void 0 ? void 0 : _b.latitude) && ((_d = (_c = this.driverPosition) === null || _c === void 0 ? void 0 : _c.coords) === null || _d === void 0 ? void 0 : _d.longitude))) {
            this.geolocationService.getCurrentPosition().then((driverPosition) => {
                var _a, _b, _c, _d;
                this.driverPosition = driverPosition;
                if (!(((_b = (_a = this.driverPosition) === null || _a === void 0 ? void 0 : _a.coords) === null || _b === void 0 ? void 0 : _b.latitude) && ((_d = (_c = this.driverPosition) === null || _c === void 0 ? void 0 : _c.coords) === null || _d === void 0 ? void 0 : _d.longitude))) {
                    this.toastComponent.presentToast(`No se pudo obtener ubicación actual. Por favor concede los permisos
          para que la aplicación pueda utilizar el GPS de su dispositivo móvil`, 'middle', 3500);
                    return false;
                }
                else {
                    return true;
                }
            });
        }
        else {
            return true;
        }
    }
    checkUndeliveredOrders() {
        const undeliveredOrders = this.orders.filter(order => order.status !== 'delivered');
        if (undeliveredOrders.length <= 0) {
            this.toastComponent.presentToast(`No hay paquetes pendientes por entregar`, 'middle', 3500);
        }
        return undeliveredOrders;
    }
    optimizeOrders() {
        var _a, _b, _c, _d, _e, _f;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const undeliveredOrders = this.checkUndeliveredOrders();
            let originLat = (_a = this.driver) === null || _a === void 0 ? void 0 : _a.start_lat;
            let originLng = (_b = this.driver) === null || _b === void 0 ? void 0 : _b.start_lng;
            if ((originLat === undefined || originLat === null) || (originLng === undefined || originLng === null)) {
                if (!this.checkDriverPosition()) {
                    return;
                }
                originLat = (_d = (_c = this.driverPosition) === null || _c === void 0 ? void 0 : _c.coords) === null || _d === void 0 ? void 0 : _d.latitude;
                originLng = (_f = (_e = this.driverPosition) === null || _e === void 0 ? void 0 : _e.coords) === null || _f === void 0 ? void 0 : _f.longitude;
            }
            if (undeliveredOrders.length > 0 && originLat !== undefined && originLat !== null && originLng !== undefined && originLng !== null) {
                const lat = Number(originLat);
                const lng = Number(originLng);
                const body = {
                    lat,
                    lng,
                    orders_ids: undeliveredOrders.map(order => order.id),
                };
                console.log(body);
                this.optimizingOrders = true;
                this.orderService.optimizeOrders(body)
                    .subscribe((response) => {
                    this.orders = response.orders;
                    this.optimizingOrders = false;
                    this.toastComponent.presentToast(`Ruta optimizada`, 'bottom', 3500);
                }, error => {
                    this.optimizingOrders = false;
                });
            }
            else if (undeliveredOrders.length > 0) {
                this.toastComponent.presentToast('No se pudo determinar tu punto de partida. Configúralo en tu perfil o habilita el GPS.', 'middle', 3500);
            }
        });
    }
    presentDeleteOrderAlertConfirm(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Desea eliminar esta ubicación de su hoja de ruta?',
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
                            this.deleteOrder(order);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteOrder(order) {
        this.orderService.deleteOrder(order)
            .subscribe((response) => {
            this.getOrdersByDate();
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            this.getOrdersByDate();
            event.target.complete();
        }, 2000);
    }
}
JourneyListPage.ɵfac = function JourneyListPage_Factory(t) { return new (t || JourneyListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_location_service__WEBPACK_IMPORTED_MODULE_11__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_5__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_10__["GeolocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_9__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"])); };
JourneyListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: JourneyListPage, selectors: [["app-journey-list"]], viewQuery: function JourneyListPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonReorderGroup"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.reorderGroup = _t.first);
    } }, decls: 31, vars: 8, consts: [["slot", "start"], ["autoHide", "false"], ["lines", "none", 1, "custom-date-item"], ["displayFormat", "DD MMMM YYYY", "placeholder", "Seleccione fecha", "doneText", "ok", "cancelText", "cancelar", "monthNames", "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre", "monthShortNames", "ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic", "dayNames", "domingo, lunes, martes, mi\u00E9rcoles, jueves, viernes, s\u00E1bado, domingo", "dayShortNames", "dom, lun, mar, mi\u00E9, jue, vie, s\u00E1b, dom", 3, "formControl", "ionChange"], [1, "ion-text-center", "ion-padding-bottom"], [1, "custom-button", 3, "click"], ["slot", "fixed", 3, "ionRefresh"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["disabled", "false", 3, "ionItemReorder"], [4, "ngFor", "ngForOf"], ["slot", "bottom", 1, "app-tab-bar"], [3, "click"], ["name", "navigate-circle"], ["name", "filter", 4, "ngIf"], ["name", "bubbles", 4, "ngIf"], [4, "ngIf"], [1, "ion-padding", "ion-text-center"], ["type", "indeterminate"], ["size", "1"], ["name", "pin", "color", "dark"], ["size", "9"], ["size", "2"], ["color", "primary"], [1, "ion-text-wrap"], [3, "color"], ["slot", "end"], ["color", "light", 3, "click"], ["slot", "end", "name", "trash"], ["name", "filter"], ["name", "bubbles"]], template: function JourneyListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-menu-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "VIAJES");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-datetime", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function JourneyListPage_Template_ion_datetime_ionChange_8_listener($event) { return ctx.onDateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function JourneyListPage_Template_ion_button_click_10_listener() { return ctx.addLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, " AGREGAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-refresher", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionRefresh", function JourneyListPage_Template_ion_refresher_ionRefresh_12_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, JourneyListPage_p_14_Template, 3, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, JourneyListPage_div_15_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ion-reorder-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionItemReorder", function JourneyListPage_Template_ion_reorder_group_ionItemReorder_16_listener($event) { return ctx.doReorder($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, JourneyListPage_ion_item_sliding_17_Template, 28, 14, "ion-item-sliding", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ion-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "ion-tab-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "ion-tab-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function JourneyListPage_Template_ion_tab_button_click_22_listener() { return ctx.showMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Comenzar");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ion-tab-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function JourneyListPage_Template_ion_tab_button_click_26_listener() { return ctx.optimizeOrders(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, JourneyListPage_ion_icon_27_Template, 1, 0, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, JourneyListPage_ion_spinner_28_Template, 1, 0, "ion-spinner", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, JourneyListPage_ion_label_29_Template, 2, 0, "ion-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, JourneyListPage_ion_label_30_Template, 2, 0, "ion-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formControl", ctx.dateFC);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.orders.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.optimizingOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.optimizingOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.optimizingOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.optimizingOrders);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonReorderGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonReorder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["UpperCasePipe"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-item-option[_ngcontent-%COMP%] {\n  --background: white;\n  --color: #000;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n.theme-dark[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: linear-gradient(180deg, #09152a 0%, #040a16 100%);\n}\n\n.theme-dark[_nghost-%COMP%]   ion-item-option[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-item-option[_ngcontent-%COMP%] {\n  --background: rgba(20, 36, 62, 0.92);\n  --color: #e6ecf9;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3VyYmFuLWRpc3RyaWJ1dGlvbi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vam91cm5leS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURHRTtFQUNFLCtEQUFBO0FDQUo7O0FER0U7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0FDREo7O0FBOUJBO0VBQ0UseUJBQUE7QUFpQ0Y7O0FBOUJBO0VBQ0UsV0FBQTtBQWlDRiIsImZpbGUiOiJqb3VybmV5LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9ybS1ncm91cCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pb24taXRlbS1vcHRpb24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMDAwO1xufVxuXG4uY3VzdG9tLWRhdGUtaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzA5MTUyYSAwJSwgIzA0MGExNiAxMDAlKTtcbiAgfVxuXG4gIGlvbi1pdGVtLW9wdGlvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIwLCAzNiwgNjIsIDAuOTIpO1xuICAgIC0tY29sb3I6ICNlNmVjZjk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS91cmJhbi1kaXN0cmlidXRpb24uc2Nzc1wiO1xuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "kOqg":
/*!****************************************************************************!*\
  !*** ./src/app/pages/journeys/journey-list/journey-list-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: JourneyListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyListPageRoutingModule", function() { return JourneyListPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _journey_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./journey-list.page */ "dgk+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _journey_list_page__WEBPACK_IMPORTED_MODULE_1__["JourneyListPage"]
    }
];
class JourneyListPageRoutingModule {
}
JourneyListPageRoutingModule.ɵfac = function JourneyListPageRoutingModule_Factory(t) { return new (t || JourneyListPageRoutingModule)(); };
JourneyListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: JourneyListPageRoutingModule });
JourneyListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JourneyListPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "mHeH":
/*!********************************************************************!*\
  !*** ./src/app/pages/journeys/journey-list/journey-list.module.ts ***!
  \********************************************************************/
/*! exports provided: JourneyListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyListPageModule", function() { return JourneyListPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _journey_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journey-list-routing.module */ "kOqg");
/* harmony import */ var _journey_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./journey-list.page */ "dgk+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class JourneyListPageModule {
}
JourneyListPageModule.ɵfac = function JourneyListPageModule_Factory(t) { return new (t || JourneyListPageModule)(); };
JourneyListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: JourneyListPageModule });
JourneyListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _journey_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["JourneyListPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](JourneyListPageModule, { declarations: [_journey_list_page__WEBPACK_IMPORTED_MODULE_4__["JourneyListPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _journey_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["JourneyListPageRoutingModule"]] }); })();


/***/ })

}]);