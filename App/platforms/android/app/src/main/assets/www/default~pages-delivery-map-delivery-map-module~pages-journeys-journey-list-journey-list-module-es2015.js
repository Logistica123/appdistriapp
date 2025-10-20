(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-delivery-map-delivery-map-module~pages-journeys-journey-list-journey-list-module"],{

/***/ "W/WP":
/*!*******************************************************!*\
  !*** ./src/app/services/utils/call-number.service.ts ***!
  \*******************************************************/
/*! exports provided: CallNumberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallNumberService", function() { return CallNumberService; });
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CallNumberService {
    constructor(callNumber) {
        this.callNumber = callNumber;
    }
    call(phoneNumber) {
        this.callNumber.callNumber(phoneNumber, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => { });
    }
}
CallNumberService.ɵfac = function CallNumberService_Factory(t) { return new (t || CallNumberService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_0__["CallNumber"])); };
CallNumberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CallNumberService, factory: CallNumberService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kvUa":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/popovers/delivery-priority-select/delivery-priority-select.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DeliveryPrioritySelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPrioritySelectComponent", function() { return DeliveryPrioritySelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function DeliveryPrioritySelectComponent_ion_select_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-select-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1);
} }
class DeliveryPrioritySelectComponent {
    constructor() {
        this.options = [];
    }
    ngOnInit() {
        this.setOptions();
    }
    setOptions() {
        for (let i = 1; i < this.length; i++) {
            this.options.push(i);
        }
    }
    selectOption(option) {
        console.log(option.detail.value);
        console.log('selected option', option);
    }
}
DeliveryPrioritySelectComponent.ɵfac = function DeliveryPrioritySelectComponent_Factory(t) { return new (t || DeliveryPrioritySelectComponent)(); };
DeliveryPrioritySelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeliveryPrioritySelectComponent, selectors: [["app-delivery-priority-select"]], inputs: { length: "length" }, decls: 6, vars: 1, consts: [["okText", "Ok", "cancelText", "Cancelar", 3, "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DeliveryPrioritySelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Seleccione");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function DeliveryPrioritySelectComponent_Template_ion_select_ionChange_4_listener($event) { return ctx.selectOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DeliveryPrioritySelectComponent_ion_select_option_5_Template, 2, 2, "ion-select-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSelectOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyeS1wcmlvcml0eS1zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "qM3D":
/*!*********************************************************!*\
  !*** ./src/app/pages/delivery-map/delivery-map.page.ts ***!
  \*********************************************************/
/*! exports provided: DeliveryMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryMapPage", function() { return DeliveryMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/v1/order.service */ "EXzW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/v1/geolocation.service */ "3Cxn");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_modals_deliver_order_deliver_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modals/deliver-order/deliver-order.component */ "0AvR");
/* harmony import */ var _services_utils_call_number_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils/call-number.service */ "W/WP");
/* harmony import */ var _components_modals_not_delivered_not_delivered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/modals/not-delivered/not-delivered.component */ "igBE");
/* harmony import */ var _components_popovers_delivery_priority_select_delivery_priority_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/popovers/delivery-priority-select/delivery-priority-select.component */ "kvUa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/map/map.component */ "EZtS");

















function DeliveryMapPage_ion_buttons_5_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_ion_buttons_5_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r14.callNumber(ctx_r14.selectedOrder); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function DeliveryMapPage_ion_buttons_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-buttons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, DeliveryMapPage_ion_buttons_5_ion_button_3_Template, 2, 0, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_ion_buttons_5_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r16.viewDeliveryOrderMap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("href", "https://api.whatsapp.com/send/?phone=", ctx_r0.selectedOrder.phone, "&text=Hola");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.selectedOrder);
} }
function DeliveryMapPage_ion_icon_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 20);
} }
function DeliveryMapPage_ion_spinner_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-spinner", 21);
} }
function DeliveryMapPage_ion_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Entregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function DeliveryMapPage_ion_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Entregando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function DeliveryMapPage_ion_icon_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 22);
} }
function DeliveryMapPage_ion_spinner_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-spinner", 21);
} }
function DeliveryMapPage_ion_label_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No entregado");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function DeliveryMapPage_ion_label_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No entregado...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function DeliveryMapPage_ion_icon_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 23);
} }
function DeliveryMapPage_ion_spinner_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-spinner", 21);
} }
function DeliveryMapPage_ion_label_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Saltar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function DeliveryMapPage_ion_label_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Saltando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class DeliveryMapPage {
    // @ViewChild('deliveryMap', {static: true}) mapElement: ElementRef;
    // map: GoogleMap;
    // driverMarker: Marker;
    // markers: Marker[] = [];
    // circle: Circle;
    constructor(orderService, router, activatedRoute, callNumberService, modalController, popoverController, geolocationService) {
        this.orderService = orderService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.callNumberService = callNumberService;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.geolocationService = geolocationService;
        this.currentOrderIndex = 0;
        this.notDeliveringOrder = false;
        this.deliveringOrder = false;
        this.skipping = false;
        this.radius = 1500;
        this.showAllMarkersFlag = false;
        this.markersOrders = [];
        this.ordersOptimized = false;
        this.type = this.activatedRoute.snapshot.paramMap.get('type');
    }
    ngOnInit() {
        //
    }
    ngAfterViewInit() {
        this.currentOrdersSubscription = this.orderService.getCurrentOrders$()
            .subscribe(orders => {
            this.orders = orders;
            this.ordersOptimized = false;
            console.log(this.orders);
            this.tryOptimizeOrders();
            this.currentOrder = this.orders[this.currentOrderIndex];
            this.selectedOrder = this.currentOrder;
            console.log(this.currentOrder);
            this.findNearbyMarkers();
        });
        this.checkWatchLocationsSubscription();
        this.driverPosition = this.geolocationService.getDriverPosition();
        this.driverGeolocationSubscription = this.geolocationService.driverPosition$
            .subscribe(driverPosition => {
            if (driverPosition) {
                this.driverPosition = driverPosition;
                this.tryOptimizeOrders();
            }
        });
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
    viewDeliveryOrderMap() {
        // this.showAllMarkers = !this.showAllMarkers;
        // this.nearbyOrders = this.orders;
        this.router.navigateByUrl('all-orders-map');
    }
    selectOrder(ev) {
        this.selectedOrder = ev;
        console.log(this.selectedOrder);
    }
    deliverOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_deliver_order_deliver_order_component__WEBPACK_IMPORTED_MODULE_5__["DeliverOrderComponent"],
                componentProps: { order: this.selectedOrder },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data === null || data === void 0 ? void 0 : data.success) {
                this.selectedOrder.status = 'delivered';
                this.selectedOrder.status_es = 'entregada';
                this.skip();
            }
        });
    }
    showNotDeliverOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_not_delivered_not_delivered_component__WEBPACK_IMPORTED_MODULE_7__["NotDeliveredComponent"],
                cssClass: 'modal-not-deliver-options',
                componentProps: { order: this.selectedOrder },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data === null || data === void 0 ? void 0 : data.success) {
                this.selectedOrder.status = 'not-delivered';
                this.selectedOrder.status_es = 'no entregada';
                this.skip();
            }
        });
    }
    showDeliveryOrderOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_popovers_delivery_priority_select_delivery_priority_select_component__WEBPACK_IMPORTED_MODULE_8__["DeliveryPrioritySelectComponent"],
                componentProps: { length: this.orders.length },
            });
            yield popover.present();
            const { data } = yield popover.onDidDismiss();
            console.log(data);
        });
    }
    callNumber(order) {
        this.callNumberService.call(order.phone);
    }
    navigateBack() {
        this.type === 'urban-distribution'
            ? this.router.navigateByUrl('urban-distribution-list')
            : this.router.navigateByUrl('journey-list');
    }
    skip() {
        this.currentOrderIndex + 1 >= this.orders.length
            ? this.currentOrderIndex = 0
            : this.currentOrderIndex++;
        this.currentOrder = this.orders[this.currentOrderIndex];
        this.selectedOrder = this.currentOrder;
        this.findNearbyMarkers();
    }
    tryOptimizeOrders() {
        var _a, _b;
        if (this.ordersOptimized) {
            return;
        }
        if (!this.orders || this.orders.length === 0) {
            return;
        }
        if (!this.driverPosition || !this.driverPosition.coords) {
            return;
        }
        if (!window.google || !((_b = (_a = google.maps) === null || _a === void 0 ? void 0 : _a.geometry) === null || _b === void 0 ? void 0 : _b.spherical)) {
            return;
        }
        const optimized = this.getOptimizedOrderSequence();
        if (optimized.length === this.orders.length) {
            this.orders = optimized;
            this.currentOrderIndex = 0;
            this.currentOrder = this.orders[this.currentOrderIndex];
            this.selectedOrder = this.currentOrder;
            this.ordersOptimized = true;
        }
    }
    getOptimizedOrderSequence() {
        const remaining = [...this.orders];
        const optimized = [];
        let currentPoint = new google.maps.LatLng(this.driverPosition.coords.latitude, this.driverPosition.coords.longitude);
        while (remaining.length > 0) {
            let nearestIdx = 0;
            let nearestDistance = Number.POSITIVE_INFINITY;
            remaining.forEach((order, index) => {
                var _a, _b;
                if (!((_a = order === null || order === void 0 ? void 0 : order.location) === null || _a === void 0 ? void 0 : _a.lat) || !((_b = order === null || order === void 0 ? void 0 : order.location) === null || _b === void 0 ? void 0 : _b.lng)) {
                    return;
                }
                const orderPoint = new google.maps.LatLng(+order.location.lat, +order.location.lng);
                const distance = google.maps.geometry.spherical.computeDistanceBetween(currentPoint, orderPoint);
                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    nearestIdx = index;
                }
            });
            const nextOrder = remaining.splice(nearestIdx, 1)[0];
            optimized.push(nextOrder);
            currentPoint = new google.maps.LatLng(+nextOrder.location.lat, +nextOrder.location.lng);
        }
        return optimized;
    }
    findNearbyMarkers() {
        console.log('finding nearby orders...');
        const anotherOrders = this.orders.filter(order => order.id !== +this.currentOrder.id);
        const circle = new google.maps.Circle({
            strokeColor: 'black',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.35,
            center: new google.maps.LatLng(+this.currentOrder.location.lat, +this.currentOrder.location.lng),
            radius: this.radius
        });
        this.nearbyOrders = anotherOrders.filter(order => google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(+order.location.lat, +order.location.lng), circle.getCenter()) <= this.radius);
        this.updateMarkersOrders();
    }
    toggleAllMarkers() {
        this.showAllMarkersFlag = !this.showAllMarkersFlag;
        this.updateMarkersOrders();
    }
    updateMarkersOrders() {
        this.showAllMarkersFlag ? this.showAllMarkers() : this.hideAllMarkers();
    }
    showAllMarkers() {
        console.log(this.nearbyOrders);
        this.markersOrders = this.orders.filter(order => order.id !== this.currentOrder.id);
    }
    hideAllMarkers() {
        console.log(this.nearbyOrders);
        this.markersOrders = [];
    }
}
DeliveryMapPage.ɵfac = function DeliveryMapPage_Factory(t) { return new (t || DeliveryMapPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_utils_call_number_service__WEBPACK_IMPORTED_MODULE_6__["CallNumberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"])); };
DeliveryMapPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: DeliveryMapPage, selectors: [["app-delivery-map"]], decls: 40, vars: 23, consts: [["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["slot", "end", 4, "ngIf"], [3, "currentOrder", "nearbyOrders", "markersOrders", "driverPosition", "orders", "radius", "deliverOrderEvent", "notDeliverOrderEvent", "updateDeliveryOrderEvent", "selectOrderEvent"], [1, "ion-text-center"], [1, "ion-no-margin"], [1, "ion-no-padding"], ["size", "4", 1, "ion-no-padding"], ["name", "checkmark-done", 4, "ngIf"], ["name", "bubbles", 4, "ngIf"], [4, "ngIf"], ["name", "alert-circle", 4, "ngIf"], ["name", "arrow-forward-circle", 4, "ngIf"], ["slot", "end"], [3, "href"], ["slot", "icon-only", "name", "logo-whatsapp"], [3, "click", 4, "ngIf"], ["slot", "icon-only", "name", "map-outline"], ["slot", "icon-only", "name", "call-outline"], ["name", "checkmark-done"], ["name", "bubbles"], ["name", "alert-circle"], ["name", "arrow-forward-circle"]], template: function DeliveryMapPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_Template_ion_button_click_3_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, DeliveryMapPage_ion_buttons_5_Template, 6, 2, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Mapa de entregas");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "app-map", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("deliverOrderEvent", function DeliveryMapPage_Template_app_map_deliverOrderEvent_9_listener() { return ctx.deliverOrder(); })("notDeliverOrderEvent", function DeliveryMapPage_Template_app_map_notDeliverOrderEvent_9_listener() { return ctx.showNotDeliverOptions(); })("updateDeliveryOrderEvent", function DeliveryMapPage_Template_app_map_updateDeliveryOrderEvent_9_listener() { return ctx.showDeliveryOrderOptions(); })("selectOrderEvent", function DeliveryMapPage_Template_app_map_selectOrderEvent_9_listener($event) { return ctx.selectOrder($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "ion-grid", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "ion-tab-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_Template_ion_tab_button_click_23_listener() { return ctx.deliverOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, DeliveryMapPage_ion_icon_24_Template, 1, 0, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, DeliveryMapPage_ion_spinner_25_Template, 1, 0, "ion-spinner", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, DeliveryMapPage_ion_label_26_Template, 2, 0, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, DeliveryMapPage_ion_label_27_Template, 2, 0, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "ion-tab-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_Template_ion_tab_button_click_29_listener() { return ctx.showNotDeliverOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, DeliveryMapPage_ion_icon_30_Template, 1, 0, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, DeliveryMapPage_ion_spinner_31_Template, 1, 0, "ion-spinner", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, DeliveryMapPage_ion_label_32_Template, 2, 0, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, DeliveryMapPage_ion_label_33_Template, 2, 0, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "ion-tab-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_Template_ion_tab_button_click_35_listener() { return ctx.skip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, DeliveryMapPage_ion_icon_36_Template, 1, 0, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, DeliveryMapPage_ion_spinner_37_Template, 1, 0, "ion-spinner", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, DeliveryMapPage_ion_label_38_Template, 2, 0, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, DeliveryMapPage_ion_label_39_Template, 2, 0, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selectedOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentOrder", ctx.currentOrder)("nearbyOrders", ctx.nearbyOrders)("markersOrders", ctx.markersOrders)("driverPosition", ctx.driverPosition)("orders", ctx.orders)("radius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.selectedOrder == null ? null : ctx.selectedOrder.location.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx.selectedOrder == null ? null : ctx.selectedOrder.receiver, " (", ctx.selectedOrder == null ? null : ctx.selectedOrder.phone, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx.selectedOrder == null ? null : ctx.selectedOrder.description) ? ctx.selectedOrder == null ? null : ctx.selectedOrder.description : " -");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.deliveringOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.deliveringOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.deliveringOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.deliveringOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.notDeliveringOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.notDeliveringOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.notDeliveringOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.notDeliveringOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.skipping);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.skipping);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.skipping);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.skipping);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_11__["MapComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\n#deliveryMap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RlbGl2ZXJ5LW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBSkYiLCJmaWxlIjoiZGVsaXZlcnktbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLy8tLWJhY2tncm91bmQ6ICNmN2Y4Zjk7XG4gIC8vZm9udC1mYW1pbHk6IE51bml0b1NhbnMsICdzYW5zLXNlcmlmJztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3NTdkZmI7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4jZGVsaXZlcnlNYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default~pages-delivery-map-delivery-map-module~pages-journeys-journey-list-journey-list-module-es2015.js.map