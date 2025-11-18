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
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_ion_buttons_5_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r16.callNumber(ctx_r16.selectedOrder); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function DeliveryMapPage_ion_buttons_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-buttons", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, DeliveryMapPage_ion_buttons_5_ion_button_3_Template, 2, 0, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_ion_buttons_5_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r18.viewDeliveryOrderMap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("href", "https://api.whatsapp.com/send/?phone=", ctx_r0.selectedOrder.phone, "&text=Hola");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.selectedOrder);
} }
function DeliveryMapPage_div_11_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r20.selectedOrder == null ? null : ctx_r20.selectedOrder.phone);
} }
function DeliveryMapPage_div_11_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r21.selectedOrder == null ? null : ctx_r21.selectedOrder.location == null ? null : ctx_r21.selectedOrder.location.city);
} }
function DeliveryMapPage_div_11_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r22.selectedOrder == null ? null : ctx_r22.selectedOrder.description, " ");
} }
function DeliveryMapPage_div_11_ion_chip_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-chip", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Orden #", ctx_r23.selectedOrder == null ? null : ctx_r23.selectedOrder.id, "");
} }
function DeliveryMapPage_div_11_ion_chip_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Bandera");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("border-color", ctx_r24.selectedOrder == null ? null : ctx_r24.selectedOrder.flag_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx_r24.selectedOrder == null ? null : ctx_r24.selectedOrder.flag_color);
} }
const _c0 = function (a0, a1, a2) { return { "status-delivered": a0, "status-pending": a1, "status-alert": a2 }; };
function DeliveryMapPage_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-badge", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Pr\u00F3xima parada");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, DeliveryMapPage_div_11_div_16_Template, 4, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, DeliveryMapPage_div_11_div_17_Template, 4, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, DeliveryMapPage_div_11_p_18_Template, 2, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, DeliveryMapPage_div_11_ion_chip_20_Template, 4, 1, "ion-chip", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, DeliveryMapPage_div_11_ion_chip_21_Template, 4, 4, "ion-chip", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](12, _c0, (ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.status) === "delivered", (ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.status) === "pending" || (ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.status) === "skipped", (ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.status) === "not-delivered"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 10, ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.status_es), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.location == null ? null : ctx_r1.selectedOrder.location.name) || (ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.location == null ? null : ctx_r1.selectedOrder.location.address), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.location == null ? null : ctx_r1.selectedOrder.location.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.receiver) || "Sin destinatario");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.location == null ? null : ctx_r1.selectedOrder.location.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.flag_color);
} }
function DeliveryMapPage_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "span");
} if (rf & 2) {
    const piece_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("--confetti-index", piece_r26)("--confetti-hue", piece_r26 * 37 % 360);
} }
function DeliveryMapPage_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, DeliveryMapPage_div_12_span_2_Template, 1, 4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_div_12_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r27.toggleSound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_div_12_Template_ion_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r29.shareCompletion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "\u00A1Felicitaciones!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Completaste todas las entregas del d\u00EDa. \u00A1Gran trabajo!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Entregas completadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Tiempo dedicado");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Clientes guardados");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "ion-button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_div_12_Template_ion_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r30.finishDeliveries(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, " Volver al panel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.confettiPieces);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-pressed", ctx_r2.soundEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", ctx_r2.soundEnabled ? "volume-high" : "volume-mute");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r2.celebrationSummary.completed, " / ", ctx_r2.celebrationSummary.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.celebrationSummary.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.celebrationSummary.saved);
} }
function DeliveryMapPage_ion_icon_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 63);
} }
function DeliveryMapPage_ion_spinner_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-spinner", 64);
} }
function DeliveryMapPage_ion_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Entregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function DeliveryMapPage_ion_label_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Entregando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function DeliveryMapPage_ion_icon_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 65);
} }
function DeliveryMapPage_ion_spinner_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-spinner", 64);
} }
function DeliveryMapPage_ion_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No entregado");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function DeliveryMapPage_ion_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No entregado...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function DeliveryMapPage_ion_icon_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 66);
} }
function DeliveryMapPage_ion_spinner_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-spinner", 64);
} }
function DeliveryMapPage_ion_label_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Saltar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function DeliveryMapPage_ion_label_34_Template(rf, ctx) { if (rf & 1) {
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
        this.showCelebration = false;
        this.initialOrdersCount = 0;
        this.completedOrdersCount = 0;
        this.savedClientsCount = 0;
        this.startTime = Date.now();
        this.soundEnabled = true;
        this.confettiPieces = Array.from({ length: 50 }, (_, index) => index);
        this.celebrationSummary = { completed: 0, total: 0, saved: 0, duration: '' };
        this.type = this.activatedRoute.snapshot.paramMap.get('type');
    }
    ngOnInit() {
        //
    }
    ngAfterViewInit() {
        this.currentOrdersSubscription = this.orderService.getCurrentOrders$()
            .subscribe(orders => {
            var _a, _b;
            if (!orders) {
                return;
            }
            this.orders = orders;
            if (this.initialOrdersCount === 0 && ((_a = this.orders) === null || _a === void 0 ? void 0 : _a.length)) {
                this.initialOrdersCount = this.orders.length;
                this.startTime = Date.now();
                this.completedOrdersCount = 0;
                this.savedClientsCount = 0;
            }
            if (this.initialOrdersCount > 0) {
                this.completedOrdersCount = this.initialOrdersCount - (((_b = this.orders) === null || _b === void 0 ? void 0 : _b.length) || 0);
                if (this.completedOrdersCount < 0) {
                    this.completedOrdersCount = 0;
                }
            }
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
                if (data === null || data === void 0 ? void 0 : data.saveClient) {
                    this.savedClientsCount += 1;
                }
                this.selectedOrder.status = 'delivered';
                this.selectedOrder.status_es = 'entregada';
                this.goToNextOrder(true);
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
        this.goToNextOrder(false);
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
    goToNextOrder(removeCurrent) {
        var _a;
        if (!this.orders || this.orders.length === 0) {
            return;
        }
        const currentId = (_a = this.selectedOrder) === null || _a === void 0 ? void 0 : _a.id;
        if (removeCurrent && currentId) {
            const index = this.orders.findIndex(order => order.id === currentId);
            if (index !== -1) {
                this.orders.splice(index, 1);
                if (index <= this.currentOrderIndex && this.currentOrderIndex > 0) {
                    this.currentOrderIndex--;
                }
            }
        }
        else {
            this.currentOrderIndex = (this.currentOrderIndex + 1) % this.orders.length;
        }
        if (this.orders.length === 0) {
            this.orderService.setCurrentOrders$(this.orders.slice());
            this.currentOrder = null;
            this.selectedOrder = null;
            this.markersOrders = [];
            this.triggerCelebration();
            return;
        }
        if (this.currentOrderIndex >= this.orders.length) {
            this.currentOrderIndex = 0;
        }
        this.currentOrder = this.orders[this.currentOrderIndex];
        this.selectedOrder = this.currentOrder;
        this.findNearbyMarkers();
        this.orderService.setCurrentOrders$(this.orders.slice());
    }
    finishDeliveries() {
        this.showCelebration = false;
        this.navigateBack();
    }
    triggerCelebration() {
        this.celebrationSummary = {
            completed: this.completedOrdersCount,
            total: this.initialOrdersCount,
            saved: this.savedClientsCount,
            duration: this.formatDuration(Date.now() - this.startTime)
        };
        this.showCelebration = true;
        this.playCelebrationSound();
    }
    playCelebrationSound() {
        if (!this.soundEnabled) {
            return;
        }
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) {
                return;
            }
            const ctx = new AudioContext();
            const endTime = ctx.currentTime + 1.8;
            const melody = [
                { freq: 523.25, start: 0, duration: 0.25 },
                { freq: 659.25, start: 0.15, duration: 0.25 },
                { freq: 783.99, start: 0.3, duration: 0.3 },
                { freq: 1046.5, start: 0.6, duration: 0.4 },
                { freq: 880.0, start: 1.0, duration: 0.5 }
            ];
            melody.forEach(note => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.value = note.freq;
                const startTime = ctx.currentTime + note.start;
                const stopTime = startTime + note.duration;
                gain.gain.setValueAtTime(0, startTime);
                gain.gain.linearRampToValueAtTime(0.5, startTime + 0.05);
                gain.gain.exponentialRampToValueAtTime(0.001, stopTime);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(stopTime);
            });
            ctx.close && setTimeout(() => ctx.close(), (endTime - ctx.currentTime) * 1000);
        }
        catch (error) {
            console.warn('Celebration sound not supported', error);
        }
    }
    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
    }
    shareCompletion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const message = `¡Ruta completada! ${this.completedOrdersCount}/${this.initialOrdersCount} entregas finalizadas en ${this.celebrationSummary.duration}.`;
            try {
                if (navigator.share) {
                    yield navigator.share({
                        title: 'DistriApp',
                        text: message
                    });
                }
                else if (navigator.clipboard && navigator.clipboard.writeText) {
                    yield navigator.clipboard.writeText(message);
                    window.alert('Resumen copiado al portapapeles');
                }
                else {
                    window.alert(message);
                }
            }
            catch (error) {
                console.warn('No se pudo compartir el resumen', error);
            }
        });
    }
    formatDuration(ms) {
        const totalSeconds = Math.max(0, Math.floor(ms / 1000));
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        if (minutes === 0) {
            return `${seconds}s`;
        }
        return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
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
DeliveryMapPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: DeliveryMapPage, selectors: [["app-delivery-map"]], decls: 35, vars: 21, consts: [["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["slot", "end", 4, "ngIf"], ["fullscreen", ""], [1, "map-container"], [3, "currentOrder", "nearbyOrders", "markersOrders", "driverPosition", "orders", "radius", "deliverOrderEvent", "notDeliverOrderEvent", "updateDeliveryOrderEvent", "selectOrderEvent"], ["class", "order-info-card", 4, "ngIf"], ["class", "celebration-overlay", 4, "ngIf"], [1, "ion-no-padding"], ["size", "4", 1, "ion-no-padding"], ["name", "checkmark-done", 4, "ngIf"], ["name", "bubbles", 4, "ngIf"], [4, "ngIf"], ["name", "alert-circle", 4, "ngIf"], ["name", "arrow-forward-circle", 4, "ngIf"], ["slot", "end"], [3, "href"], ["slot", "icon-only", "name", "logo-whatsapp"], [3, "click", 4, "ngIf"], ["slot", "icon-only", "name", "map-outline"], ["slot", "icon-only", "name", "call-outline"], [1, "order-info-card"], [1, "order-info-header"], [3, "ngClass"], [1, "order-info-tag"], [1, "order-info-title"], [1, "order-info-address"], [1, "order-info-meta"], [1, "meta-item"], ["name", "business-outline"], ["class", "meta-item", 4, "ngIf"], ["class", "order-info-notes", 4, "ngIf"], [1, "order-info-flags"], ["color", "light", 4, "ngIf"], [3, "border-color", 4, "ngIf"], ["name", "call-outline"], ["name", "location-outline"], [1, "order-info-notes"], ["color", "light"], ["name", "pricetag-outline"], [1, "color-dot"], [1, "celebration-overlay"], ["aria-hidden", "true", 1, "confetti"], [3, "--confetti-index", "--confetti-hue", 4, "ngFor", "ngForOf"], [1, "celebration-backdrop"], ["role", "dialog", "aria-modal", "true", "aria-label", "Resumen de entregas completadas", 1, "celebration-card"], [1, "celebration-actions"], ["fill", "clear", "size", "small", "aria-label", "Alternar sonido", 3, "click"], [3, "name"], ["fill", "clear", "size", "small", "aria-label", "Compartir logro", 3, "click"], ["name", "share-outline"], ["aria-hidden", "true", 1, "fireworks"], [1, "firework", "firework-1"], [1, "firework", "firework-2"], [1, "firework", "firework-3"], [1, "firework", "firework-4"], [1, "firework", "firework-5"], [1, "celebration-stats"], [1, "stat"], [1, "stat-label"], [1, "stat-value"], ["expand", "block", "color", "primary", 3, "click"], ["name", "checkmark-done"], ["name", "bubbles"], ["name", "alert-circle"], ["name", "arrow-forward-circle"]], template: function DeliveryMapPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "app-map", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("deliverOrderEvent", function DeliveryMapPage_Template_app_map_deliverOrderEvent_10_listener() { return ctx.deliverOrder(); })("notDeliverOrderEvent", function DeliveryMapPage_Template_app_map_notDeliverOrderEvent_10_listener() { return ctx.showNotDeliverOptions(); })("updateDeliveryOrderEvent", function DeliveryMapPage_Template_app_map_updateDeliveryOrderEvent_10_listener() { return ctx.showDeliveryOrderOptions(); })("selectOrderEvent", function DeliveryMapPage_Template_app_map_selectOrderEvent_10_listener($event) { return ctx.selectOrder($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, DeliveryMapPage_div_11_Template, 22, 16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, DeliveryMapPage_div_12_Template, 38, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-grid", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-tab-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_Template_ion_tab_button_click_18_listener() { return ctx.deliverOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, DeliveryMapPage_ion_icon_19_Template, 1, 0, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, DeliveryMapPage_ion_spinner_20_Template, 1, 0, "ion-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, DeliveryMapPage_ion_label_21_Template, 2, 0, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, DeliveryMapPage_ion_label_22_Template, 2, 0, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ion-tab-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_Template_ion_tab_button_click_24_listener() { return ctx.showNotDeliverOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, DeliveryMapPage_ion_icon_25_Template, 1, 0, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, DeliveryMapPage_ion_spinner_26_Template, 1, 0, "ion-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, DeliveryMapPage_ion_label_27_Template, 2, 0, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, DeliveryMapPage_ion_label_28_Template, 2, 0, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-tab-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_Template_ion_tab_button_click_30_listener() { return ctx.skip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, DeliveryMapPage_ion_icon_31_Template, 1, 0, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, DeliveryMapPage_ion_spinner_32_Template, 1, 0, "ion-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, DeliveryMapPage_ion_label_33_Template, 2, 0, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, DeliveryMapPage_ion_label_34_Template, 2, 0, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selectedOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentOrder", ctx.currentOrder)("nearbyOrders", ctx.nearbyOrders)("markersOrders", ctx.markersOrders)("driverPosition", ctx.driverPosition)("orders", ctx.orders)("radius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selectedOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showCelebration);
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
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_11__["MapComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBadge"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  --padding-top: 0;\n  --padding-bottom: 0;\n  position: relative;\n}\n\nion-content[_ngcontent-%COMP%]::part(scroll) {\n  height: 100%;\n}\n\n.map-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  min-height: 60vh;\n}\n\n.map-container[_ngcontent-%COMP%]   app-map[_ngcontent-%COMP%], .map-container[_ngcontent-%COMP%]   app-map[_ngcontent-%COMP%]     #distriAppMap {\n  display: block;\n  height: 100%;\n}\n\n.order-info-card[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: 24px;\n  transform: translateX(-50%);\n  width: min(640px, calc(100% - 32px));\n  padding: 20px 24px;\n  background: rgba(255, 255, 255, 0.9);\n  border-radius: 20px;\n  box-shadow: 0 24px 48px rgba(22, 34, 58, 0.18);\n  backdrop-filter: blur(12px);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.order-info-card[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 999px;\n  letter-spacing: 0.08em;\n}\n\n.order-info-card[_ngcontent-%COMP%]   ion-badge.status-delivered[_ngcontent-%COMP%] {\n  --background: rgba(52, 199, 89, 0.15);\n  --color: #1f8a3f;\n}\n\n.order-info-card[_ngcontent-%COMP%]   ion-badge.status-pending[_ngcontent-%COMP%] {\n  --background: rgba(255, 193, 60, 0.2);\n  --color: #b87b14;\n}\n\n.order-info-card[_ngcontent-%COMP%]   ion-badge.status-alert[_ngcontent-%COMP%] {\n  --background: rgba(255, 94, 94, 0.2);\n  --color: #b83232;\n}\n\n.order-info-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.order-info-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: rgba(26, 38, 65, 0.6);\n  font-weight: 700;\n}\n\n.order-info-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.3rem, 2.4vw, 1.8rem);\n  font-weight: 700;\n  color: #11213f;\n  margin: 0;\n}\n\n.order-info-address[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(17, 33, 63, 0.7);\n  font-weight: 600;\n}\n\n.order-info-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px 18px;\n  margin-top: 4px;\n}\n\n.meta-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.9rem;\n  color: rgba(17, 33, 63, 0.8);\n}\n\n.meta-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #1f6eb5;\n}\n\n.order-info-notes[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: rgba(17, 33, 63, 0.8);\n  font-size: 0.92rem;\n}\n\n.order-info-flags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 4px;\n}\n\n.color-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 6px;\n}\n\nion-chip[_ngcontent-%COMP%] {\n  --background: rgba(31, 110, 181, 0.1);\n  --color: #1f6eb5;\n  font-weight: 600;\n  border: 1px solid rgba(31, 110, 181, 0.3);\n}\n\nion-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-right: 4px;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n  box-shadow: 0 6px 20px rgba(17, 33, 63, 0.18);\n}\n\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: linear-gradient(140deg, #1f6eb5 0%, #0d3d78 80%);\n  --color: #ffffff;\n  box-shadow: 0 -12px 34px rgba(8, 21, 44, 0.4);\n}\n\nion-tab-button[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: rgba(255, 255, 255, 0.9);\n  --ripple-color: rgba(255, 255, 255, 0.2);\n  flex-direction: column;\n  gap: 4px;\n  min-height: 64px;\n  font-weight: 600;\n}\n\nion-tab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n\nion-tab-button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.theme-dark[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: linear-gradient(185deg, #0a172d 0%, #040a16 100%);\n}\n\n.theme-dark[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: linear-gradient(185deg, #050a16 0%, #0b182f 70%, #020509 100%);\n}\n\n.theme-dark[_nghost-%COMP%]   .order-info-card[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .order-info-card[_ngcontent-%COMP%] {\n  background: rgba(15, 24, 42, 0.92);\n  box-shadow: 0 24px 44px rgba(0, 0, 0, 0.55);\n  border: 1px solid rgba(66, 108, 190, 0.18);\n}\n\n.theme-dark[_nghost-%COMP%]   .order-info-tag[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .order-info-tag[_ngcontent-%COMP%] {\n  color: rgba(226, 236, 255, 0.6);\n}\n\n.theme-dark[_nghost-%COMP%]   .order-info-title[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .order-info-title[_ngcontent-%COMP%], .theme-dark[_nghost-%COMP%]   .order-info-address[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .order-info-address[_ngcontent-%COMP%], .theme-dark[_nghost-%COMP%]   .order-info-notes[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .order-info-notes[_ngcontent-%COMP%], .theme-dark[_nghost-%COMP%]   .meta-item[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .meta-item[_ngcontent-%COMP%], .theme-dark[_nghost-%COMP%]   ion-chip[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  color: #e6ecf9;\n}\n\n.theme-dark[_nghost-%COMP%]   .meta-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .meta-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #6ca8ff;\n}\n\n.theme-dark[_nghost-%COMP%]   ion-chip[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  --background: rgba(48, 86, 160, 0.25);\n  --color: #9ec4ff;\n  border: 1px solid rgba(76, 126, 210, 0.35);\n}\n\n.theme-dark[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: linear-gradient(185deg, #0a1a36 0%, #050d1c 100%);\n}\n\n.theme-dark[_nghost-%COMP%]   ion-tab-button[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-tab-button[_ngcontent-%COMP%] {\n  --color: rgba(230, 236, 249, 0.9);\n}\n\n.theme-dark[_nghost-%COMP%]   .celebration-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .celebration-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: rgba(230, 236, 249, 0.1);\n  --background-hover: rgba(230, 236, 249, 0.18);\n  --background-activated: rgba(230, 236, 249, 0.22);\n  color: #e6ecf9;\n}\n\n.theme-dark[_nghost-%COMP%]   .stat[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .stat[_ngcontent-%COMP%] {\n  background: rgba(230, 236, 249, 0.1);\n}\n\n.theme-dark[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: rgba(230, 236, 249, 0.6);\n}\n\n.theme-dark[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #f4f8ff;\n}\n\n@media (max-width: 768px) {\n  .order-info-card[_ngcontent-%COMP%] {\n    bottom: 16px;\n    padding: 18px;\n  }\n}\n\n.celebration-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  pointer-events: auto;\n}\n\n.celebration-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(6, 15, 30, 0.78);\n  backdrop-filter: blur(4px);\n}\n\n.celebration-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(520px, calc(100% - 48px));\n  padding: 32px 28px 28px;\n  border-radius: 24px;\n  background: linear-gradient(160deg, rgba(255, 255, 255, 0.96), rgba(229, 238, 255, 0.94));\n  box-shadow: 0 28px 64px rgba(18, 34, 58, 0.45);\n  text-align: center;\n  color: #11213f;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  z-index: 1;\n}\n\n.celebration-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1.8rem, 4vw, 2.4rem);\n  margin: 0;\n  font-weight: 800;\n}\n\n.celebration-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(17, 33, 63, 0.75);\n}\n\n.celebration-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  display: flex;\n  gap: 4px;\n}\n\n.celebration-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n  --border-radius: 999px;\n  --background: rgba(17, 33, 63, 0.08);\n  --background-hover: rgba(17, 33, 63, 0.18);\n  --background-activated: rgba(17, 33, 63, 0.15);\n  color: #11213f;\n}\n\n.celebration-stats[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  text-align: left;\n  width: 100%;\n}\n\n.stat[_ngcontent-%COMP%] {\n  background: rgba(17, 33, 63, 0.06);\n  border-radius: 16px;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: rgba(17, 33, 63, 0.58);\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #11213f;\n}\n\n.fireworks[_ngcontent-%COMP%] {\n  position: relative;\n  height: 220px;\n  margin-bottom: 12px;\n}\n\n.firework[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 7px;\n  height: 7px;\n  background: transparent;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0 rgba(31, 110, 181, 0.8);\n  animation: fireworkBurst 2.4s infinite;\n}\n\n.firework-1[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n  --firework-color: #ff8a65;\n}\n\n.firework-2[_ngcontent-%COMP%] {\n  animation-delay: 0.5s;\n  --firework-color: #58d68d;\n}\n\n.firework-3[_ngcontent-%COMP%] {\n  animation-delay: 1s;\n  --firework-color: #7f8cff;\n}\n\n.firework-4[_ngcontent-%COMP%] {\n  animation-delay: 1.5s;\n  --firework-color: #ffd166;\n}\n\n.firework-5[_ngcontent-%COMP%] {\n  animation-delay: 2s;\n  --firework-color: #ff6f91;\n}\n\n@keyframes fireworkBurst {\n  0% {\n    transform: translate(-50%, 0) scale(0.3);\n    box-shadow: 0 0 0 0 rgba(31, 110, 181, 0.9);\n  }\n  18% {\n    transform: translate(-50%, -60px) scale(1.2);\n    box-shadow: 40px -30px 0 -4px var(--firework-color, #ffcc33), -50px -10px 0 -4px rgba(255, 255, 255, 0.9), 20px -70px 0 -4px rgba(127, 140, 255, 0.9), -30px -55px 0 -4px rgba(255, 138, 101, 0.9), 10px -50px 0 -4px rgba(88, 214, 141, 0.85);\n  }\n  40% {\n    transform: translate(-50%, -90px) scale(1.5);\n    box-shadow: 70px -80px 0 -4px rgba(255, 255, 255, 0.95), -80px -45px 0 -4px var(--firework-color, #ffcc33), 40px -110px 0 -4px rgba(127, 140, 255, 0.85), -30px -100px 0 -4px rgba(255, 138, 101, 0.85), 20px -70px 0 -4px rgba(88, 214, 141, 0.9), -10px -80px 0 -4px rgba(245, 203, 92, 0.9);\n  }\n  70% {\n    transform: translate(-50%, -110px) scale(1.1);\n    box-shadow: 100px -50px 0 -4px rgba(255, 255, 255, 0.6), -100px -90px 0 -4px rgba(255, 138, 101, 0.6), 70px -130px 0 -4px rgba(127, 140, 255, 0.6), -35px -140px 0 -4px rgba(255, 214, 102, 0.6), 5px -80px 0 -4px rgba(88, 214, 141, 0.6);\n  }\n  100% {\n    transform: translate(-50%, -120px) scale(0.2);\n    box-shadow: 0 0 0 0 rgba(31, 110, 181, 0);\n  }\n}\n\n.confetti[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.confetti[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12%;\n  left: calc(var(--confetti-index) * 2%);\n  width: 7px;\n  height: 14px;\n  border-radius: 2px;\n  background: hsl(var(--confetti-hue), 85%, 58%);\n  opacity: 0;\n  transform: rotate(45deg);\n  animation: confettiFall 4.5s linear infinite;\n  animation-delay: calc(-0.12s * var(--confetti-index));\n}\n\n@keyframes confettiFall {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(60vh) rotate(180deg);\n    opacity: 0.8;\n  }\n  100% {\n    transform: translateY(95vh) rotate(360deg);\n    opacity: 0;\n  }\n}\n\n.theme-dark[_nghost-%COMP%]   .celebration-card[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .celebration-card[_ngcontent-%COMP%] {\n  background: linear-gradient(165deg, rgba(12, 22, 39, 0.95), rgba(6, 14, 27, 0.95));\n  color: #e6ecf9;\n  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.6);\n}\n\n.theme-dark[_nghost-%COMP%]   .celebration-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .celebration-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(230, 236, 249, 0.75);\n}\n\n.theme-dark[_nghost-%COMP%]   .celebration-backdrop[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .celebration-backdrop[_ngcontent-%COMP%] {\n  background: rgba(3, 8, 18, 0.82);\n}\n\n@media (max-width: 768px) {\n  .celebration-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n\n  .fireworks[_ngcontent-%COMP%] {\n    height: 130px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RlbGl2ZXJ5LW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0UsOERBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFHRTtFQUNFLCtEQUFBO0FBQUo7O0FBR0U7RUFDRSw0RUFBQTtBQURKOztBQUlFO0VBQ0Usa0NBQUE7RUFDQSwyQ0FBQTtFQUNBLDBDQUFBO0FBRko7O0FBS0U7RUFDRSwrQkFBQTtBQUhKOztBQU1FOzs7OztFQUtFLGNBQUE7QUFKSjs7QUFPRTtFQUNFLGNBQUE7QUFMSjs7QUFRRTtFQUNFLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtBQU5KOztBQVNFO0VBQ0UsK0RBQUE7QUFQSjs7QUFVRTtFQUNFLGlDQUFBO0FBUko7O0FBV0U7RUFDRSxzQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsaURBQUE7RUFDQSxjQUFBO0FBVEo7O0FBWUU7RUFDRSxvQ0FBQTtBQVZKOztBQWFFO0VBQ0UsK0JBQUE7QUFYSjs7QUFjRTtFQUNFLGNBQUE7QUFaSjs7QUFnQkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBYkY7QUFDRjs7QUFnQkE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBZEY7O0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtBQWRGOztBQWlCQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUZBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBZEY7O0FBaUJBO0VBQ0UscUNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxTQUFBO0VBQ0EsNkJBQUE7QUFkRjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7QUFkRjs7QUFpQkE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsY0FBQTtBQWRGOztBQWlCQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsMkRBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFkRjs7QUFpQkE7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBZEY7O0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFkRjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWRGOztBQWlCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBZEY7O0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esc0NBQUE7QUFkRjs7QUFpQkE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBZEY7O0FBaUJBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQWRGOztBQWlCQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFkRjs7QUFpQkE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQWRGOztBQWlCQTtFQUNFO0lBQ0Usd0NBQUE7SUFDQSwyQ0FBQTtFQWRGO0VBZ0JBO0lBQ0UsNENBQUE7SUFDQSw4T0FDRTtFQWZKO0VBcUJBO0lBQ0UsNENBQUE7SUFDQSw4UkFDRTtFQXBCSjtFQTJCQTtJQUNFLDZDQUFBO0lBQ0EsME9BQ0U7RUExQko7RUFnQ0E7SUFDRSw2Q0FBQTtJQUNBLHlDQUFBO0VBOUJGO0FBQ0Y7O0FBaUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLDRDQUFBO0VBQ0EscURBQUE7QUEvQkY7O0FBa0NBO0VBQ0U7SUFDRSxxQ0FBQTtJQUNBLFVBQUE7RUEvQkY7RUFpQ0E7SUFDRSxVQUFBO0VBL0JGO0VBaUNBO0lBQ0UsMENBQUE7SUFDQSxZQUFBO0VBL0JGO0VBaUNBO0lBQ0UsMENBQUE7SUFDQSxVQUFBO0VBL0JGO0FBQ0Y7O0FBa0NBO0VBQ0Usa0ZBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0UsZ0NBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0UsZ0NBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0U7SUFDRSxrQkFBQTtFQWhDRjs7RUFtQ0E7SUFDRSxhQUFBO0VBaENGO0FBQ0YiLCJmaWxlIjoiZGVsaXZlcnktbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLWNvbnRlbnQ6OnBhcnQoc2Nyb2xsKSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1hcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogNjB2aDtcbn1cblxuLm1hcC1jb250YWluZXIgYXBwLW1hcCxcbi5tYXAtY29udGFpbmVyIGFwcC1tYXAgOjpuZy1kZWVwICNkaXN0cmlBcHBNYXAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ub3JkZXItaW5mby1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogMjRweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogbWluKDY0MHB4LCBjYWxjKDEwMCUgLSAzMnB4KSk7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDI0cHggNDhweCByZ2JhKDIyLCAzNCwgNTgsIDAuMTgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuLm9yZGVyLWluZm8tY2FyZCBpb24tYmFkZ2Uge1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG59XG5cbi5vcmRlci1pbmZvLWNhcmQgaW9uLWJhZGdlLnN0YXR1cy1kZWxpdmVyZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoNTIsIDE5OSwgODksIDAuMTUpO1xuICAtLWNvbG9yOiAjMWY4YTNmO1xufVxuXG4ub3JkZXItaW5mby1jYXJkIGlvbi1iYWRnZS5zdGF0dXMtcGVuZGluZyB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MywgNjAsIDAuMik7XG4gIC0tY29sb3I6ICNiODdiMTQ7XG59XG5cbi5vcmRlci1pbmZvLWNhcmQgaW9uLWJhZGdlLnN0YXR1cy1hbGVydCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDk0LCA5NCwgMC4yKTtcbiAgLS1jb2xvcjogI2I4MzIzMjtcbn1cblxuLm9yZGVyLWluZm8taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ub3JkZXItaW5mby10YWcge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjE4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiByZ2JhKDI2LCAzOCwgNjUsIDAuNik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5vcmRlci1pbmZvLXRpdGxlIHtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjNyZW0sIDIuNHZ3LCAxLjhyZW0pO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzExMjEzZjtcbiAgbWFyZ2luOiAwO1xufVxuXG4ub3JkZXItaW5mby1hZGRyZXNzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogcmdiYSgxNywgMzMsIDYzLCAwLjcpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ub3JkZXItaW5mby1tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEycHggMThweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4ubWV0YS1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHJnYmEoMTcsIDMzLCA2MywgMC44KTtcbn1cblxuLm1ldGEtaXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzFmNmViNTtcbn1cblxuLm9yZGVyLWluZm8tbm90ZXMge1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGNvbG9yOiByZ2JhKDE3LCAzMywgNjMsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMC45MnJlbTtcbn1cblxuLm9yZGVyLWluZm8tZmxhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uY29sb3ItZG90IHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG5pb24tY2hpcCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgzMSwgMTEwLCAxODEsIDAuMSk7XG4gIC0tY29sb3I6ICMxZjZlYjU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzEsIDExMCwgMTgxLCAwLjMpO1xufVxuXG5pb24tY2hpcCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTcsIDMzLCA2MywgMC4xOCk7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICMxZjZlYjUgMCUsICMwZDNkNzggODAlKTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAtMTJweCAzNHB4IHJnYmEoOCwgMjEsIDQ0LCAwLjQpO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgLS1yaXBwbGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi10YWItYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbmlvbi10YWItYnV0dG9uIGlvbi1zcGlubmVyIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cblxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTg1ZGVnLCAjMGExNzJkIDAlLCAjMDQwYTE2IDEwMCUpO1xuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4NWRlZywgIzA1MGExNiAwJSwgIzBiMTgyZiA3MCUsICMwMjA1MDkgMTAwJSk7XG4gIH1cblxuICAub3JkZXItaW5mby1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyNCwgNDIsIDAuOTIpO1xuICAgIGJveC1zaGFkb3c6IDAgMjRweCA0NHB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2NiwgMTA4LCAxOTAsIDAuMTgpO1xuICB9XG5cbiAgLm9yZGVyLWluZm8tdGFnIHtcbiAgICBjb2xvcjogcmdiYSgyMjYsIDIzNiwgMjU1LCAwLjYpO1xuICB9XG5cbiAgLm9yZGVyLWluZm8tdGl0bGUsXG4gIC5vcmRlci1pbmZvLWFkZHJlc3MsXG4gIC5vcmRlci1pbmZvLW5vdGVzLFxuICAubWV0YS1pdGVtLFxuICBpb24tY2hpcCB7XG4gICAgY29sb3I6ICNlNmVjZjk7XG4gIH1cblxuICAubWV0YS1pdGVtIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzZjYThmZjtcbiAgfVxuXG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoNDgsIDg2LCAxNjAsIDAuMjUpO1xuICAgIC0tY29sb3I6ICM5ZWM0ZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NiwgMTI2LCAyMTAsIDAuMzUpO1xuICB9XG5cbiAgaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTg1ZGVnLCAjMGExYTM2IDAlLCAjMDUwZDFjIDEwMCUpO1xuICB9XG5cbiAgaW9uLXRhYi1idXR0b24ge1xuICAgIC0tY29sb3I6IHJnYmEoMjMwLCAyMzYsIDI0OSwgMC45KTtcbiAgfVxuXG4gIC5jZWxlYnJhdGlvbi1hY3Rpb25zIGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzNiwgMjQ5LCAwLjEpO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgyMzAsIDIzNiwgMjQ5LCAwLjE4KTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDIzMCwgMjM2LCAyNDksIDAuMjIpO1xuICAgIGNvbG9yOiAjZTZlY2Y5O1xuICB9XG5cbiAgLnN0YXQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzYsIDI0OSwgMC4xKTtcbiAgfVxuXG4gIC5zdGF0LWxhYmVsIHtcbiAgICBjb2xvcjogcmdiYSgyMzAsIDIzNiwgMjQ5LCAwLjYpO1xuICB9XG5cbiAgLnN0YXQtdmFsdWUge1xuICAgIGNvbG9yOiAjZjRmOGZmO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAub3JkZXItaW5mby1jYXJkIHtcbiAgICBib3R0b206IDE2cHg7XG4gICAgcGFkZGluZzogMThweDtcbiAgfVxufVxuXG4uY2VsZWJyYXRpb24tb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLmNlbGVicmF0aW9uLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSg2LCAxNSwgMzAsIDAuNzgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbn1cblxuLmNlbGVicmF0aW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBtaW4oNTIwcHgsIGNhbGMoMTAwJSAtIDQ4cHgpKTtcbiAgcGFkZGluZzogMzJweCAyOHB4IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NiksIHJnYmEoMjI5LCAyMzgsIDI1NSwgMC45NCkpO1xuICBib3gtc2hhZG93OiAwIDI4cHggNjRweCByZ2JhKDE4LCAzNCwgNTgsIDAuNDUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMTEyMTNmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jZWxlYnJhdGlvbi1jYXJkIGgxIHtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjhyZW0sIDR2dywgMi40cmVtKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uY2VsZWJyYXRpb24tY2FyZCBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogcmdiYSgxNywgMzMsIDYzLCAwLjc1KTtcbn1cblxuLmNlbGVicmF0aW9uLWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xufVxuXG4uY2VsZWJyYXRpb24tYWN0aW9ucyBpb24tYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDZweDtcbiAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxNywgMzMsIDYzLCAwLjA4KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDE3LCAzMywgNjMsIDAuMTgpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDE3LCAzMywgNjMsIDAuMTUpO1xuICBjb2xvcjogIzExMjEzZjtcbn1cblxuLmNlbGVicmF0aW9uLXN0YXRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMnB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE0MHB4LCAxZnIpKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdGF0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxNywgMzMsIDYzLCAwLjA2KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbn1cblxuLnN0YXQtbGFiZWwge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjE0ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiByZ2JhKDE3LCAzMywgNjMsIDAuNTgpO1xufVxuXG4uc3RhdC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxMTIxM2Y7XG59XG5cbi5maXJld29ya3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5maXJld29yayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMzEsIDExMCwgMTgxLCAwLjgpO1xuICBhbmltYXRpb246IGZpcmV3b3JrQnVyc3QgMi40cyBpbmZpbml0ZTtcbn1cblxuLmZpcmV3b3JrLTEge1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICAtLWZpcmV3b3JrLWNvbG9yOiAjZmY4YTY1O1xufVxuXG4uZmlyZXdvcmstMiB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgLS1maXJld29yay1jb2xvcjogIzU4ZDY4ZDtcbn1cblxuLmZpcmV3b3JrLTMge1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAtLWZpcmV3b3JrLWNvbG9yOiAjN2Y4Y2ZmO1xufVxuXG4uZmlyZXdvcmstNCB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS41cztcbiAgLS1maXJld29yay1jb2xvcjogI2ZmZDE2Njtcbn1cblxuLmZpcmV3b3JrLTUge1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICAtLWZpcmV3b3JrLWNvbG9yOiAjZmY2ZjkxO1xufVxuXG5Aa2V5ZnJhbWVzIGZpcmV3b3JrQnVyc3Qge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCkgc2NhbGUoMC4zKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMzEsIDExMCwgMTgxLCAwLjkpO1xuICB9XG4gIDE4JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTYwcHgpIHNjYWxlKDEuMik7XG4gICAgYm94LXNoYWRvdzpcbiAgICAgIDQwcHggLTMwcHggMCAtNHB4IHZhcigtLWZpcmV3b3JrLWNvbG9yLCAjZmZjYzMzKSxcbiAgICAgIC01MHB4IC0xMHB4IDAgLTRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksXG4gICAgICAyMHB4IC03MHB4IDAgLTRweCByZ2JhKDEyNywgMTQwLCAyNTUsIDAuOSksXG4gICAgICAtMzBweCAtNTVweCAwIC00cHggcmdiYSgyNTUsIDEzOCwgMTAxLCAwLjkpLFxuICAgICAgMTBweCAtNTBweCAwIC00cHggcmdiYSg4OCwgMjE0LCAxNDEsIDAuODUpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTkwcHgpIHNjYWxlKDEuNSk7XG4gICAgYm94LXNoYWRvdzpcbiAgICAgIDcwcHggLTgwcHggMCAtNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSksXG4gICAgICAtODBweCAtNDVweCAwIC00cHggdmFyKC0tZmlyZXdvcmstY29sb3IsICNmZmNjMzMpLFxuICAgICAgNDBweCAtMTEwcHggMCAtNHB4IHJnYmEoMTI3LCAxNDAsIDI1NSwgMC44NSksXG4gICAgICAtMzBweCAtMTAwcHggMCAtNHB4IHJnYmEoMjU1LCAxMzgsIDEwMSwgMC44NSksXG4gICAgICAyMHB4IC03MHB4IDAgLTRweCByZ2JhKDg4LCAyMTQsIDE0MSwgMC45KSxcbiAgICAgIC0xMHB4IC04MHB4IDAgLTRweCByZ2JhKDI0NSwgMjAzLCA5MiwgMC45KTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMTBweCkgc2NhbGUoMS4xKTtcbiAgICBib3gtc2hhZG93OlxuICAgICAgMTAwcHggLTUwcHggMCAtNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSxcbiAgICAgIC0xMDBweCAtOTBweCAwIC00cHggcmdiYSgyNTUsIDEzOCwgMTAxLCAwLjYpLFxuICAgICAgNzBweCAtMTMwcHggMCAtNHB4IHJnYmEoMTI3LCAxNDAsIDI1NSwgMC42KSxcbiAgICAgIC0zNXB4IC0xNDBweCAwIC00cHggcmdiYSgyNTUsIDIxNCwgMTAyLCAwLjYpLFxuICAgICAgNXB4IC04MHB4IDAgLTRweCByZ2JhKDg4LCAyMTQsIDE0MSwgMC42KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTIwcHgpIHNjYWxlKDAuMik7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDMxLCAxMTAsIDE4MSwgMCk7XG4gIH1cbn1cblxuLmNvbmZldHRpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jb25mZXR0aSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMiU7XG4gIGxlZnQ6IGNhbGModmFyKC0tY29uZmV0dGktaW5kZXgpICogMiUpO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogaHNsKHZhcigtLWNvbmZldHRpLWh1ZSksIDg1JSwgNTglKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBhbmltYXRpb246IGNvbmZldHRpRmFsbCA0LjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKC0wLjEycyAqIHZhcigtLWNvbmZldHRpLWluZGV4KSk7XG59XG5cbkBrZXlmcmFtZXMgY29uZmV0dGlGYWxsIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjB2aCkgcm90YXRlKDE4MGRlZyk7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5NXZoKSByb3RhdGUoMzYwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIC5jZWxlYnJhdGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2NWRlZywgcmdiYSgxMiwgMjIsIDM5LCAwLjk1KSwgcmdiYSg2LCAxNCwgMjcsIDAuOTUpKTtcbiAgY29sb3I6ICNlNmVjZjk7XG4gIGJveC1zaGFkb3c6IDAgMjhweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLmNlbGVicmF0aW9uLWNhcmQgcCB7XG4gIGNvbG9yOiByZ2JhKDIzMCwgMjM2LCAyNDksIDAuNzUpO1xufVxuXG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAuY2VsZWJyYXRpb24tYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDgsIDE4LCAwLjgyKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jZWxlYnJhdGlvbi1jYXJkIHtcbiAgICBwYWRkaW5nOiAyNHB4IDIwcHg7XG4gIH1cblxuICAuZmlyZXdvcmtzIHtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ })

}]);