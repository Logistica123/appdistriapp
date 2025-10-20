(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-urban-distributions-urban-distribution-list-urban-distribution-list-module"],{

/***/ "7ruQ":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/urban-distributions/popover-item-options/popover-item-options.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PopoverItemOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverItemOptionsComponent", function() { return PopoverItemOptionsComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_utils_call_number_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/utils/call-number.service */ "W/WP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class PopoverItemOptionsComponent {
    constructor(popoverController, callNumberService) {
        this.popoverController = popoverController;
        this.callNumberService = callNumberService;
    }
    ngOnInit() {
    }
    callNumber(order) {
        this.callNumberService.call(order.phone);
    }
}
PopoverItemOptionsComponent.ɵfac = function PopoverItemOptionsComponent_Factory(t) { return new (t || PopoverItemOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utils_call_number_service__WEBPACK_IMPORTED_MODULE_1__["CallNumberService"])); };
PopoverItemOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PopoverItemOptionsComponent, selectors: [["app-popover-item-options"]], inputs: { order: "order" }, decls: 13, vars: 4, consts: [[1, "ion-padding"], [1, "ion-no-margin", "ion-margin-bottom"], [1, "full-width", 3, "click"], ["name", "call-outline", 1, "ion-padding-horizontal"], [1, "full-width", "whatsapp-color-background", 3, "href"], ["name", "logo-whatsapp", 1, "ion-padding-horizontal"]], template: function PopoverItemOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverItemOptionsComponent_Template_ion_button_click_7_listener() { return ctx.callNumber(ctx.order); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Llamar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Whatsapp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.order.receiver);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.order.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Paquete: ", ctx.order.description ? ctx.order.description : " -", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://api.whatsapp.com/send/?phone=", ctx.order.phone, "&text=Hola");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWl0ZW0tb3B0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Jtth":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/urban-distributions/urban-distribution-order-item/urban-distribution-order-item.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: UrbanDistributionOrderItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrbanDistributionOrderItemComponent", function() { return UrbanDistributionOrderItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/v1/order.service */ "EXzW");
/* harmony import */ var _components_modals_not_delivered_not_delivered_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/modals/not-delivered/not-delivered.component */ "igBE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_modals_deliver_order_deliver_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/modals/deliver-order/deliver-order.component */ "0AvR");
/* harmony import */ var _services_utils_call_number_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/utils/call-number.service */ "W/WP");
/* harmony import */ var _popover_item_options_popover_item_options_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popover-item-options/popover-item-options.component */ "7ruQ");
/* harmony import */ var _urban_distribution_detail_urban_distribution_detail_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../urban-distribution-detail/urban-distribution-detail.page */ "ZAvG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
















function UrbanDistributionOrderItemComponent_ion_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 17);
} }
const _c0 = function (a0) { return { "color": a0 }; };
class UrbanDistributionOrderItemComponent {
    constructor(router, modalController, popoverController, callNumberService, orderService) {
        this.router = router;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.callNumberService = callNumberService;
        this.orderService = orderService;
        this.deletedOrderEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        console.log(this.order);
    }
    viewOrderDetail(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _urban_distribution_detail_urban_distribution_detail_page__WEBPACK_IMPORTED_MODULE_9__["UrbanDistributionDetailPage"],
                componentProps: { order },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data === null || data === void 0 ? void 0 : data.success) {
                this.deletedOrderEvent.emit(this.order);
            }
        });
    }
    showNotDeliverOptions(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_not_delivered_not_delivered_component__WEBPACK_IMPORTED_MODULE_4__["NotDeliveredComponent"],
                cssClass: 'modal-not-deliver-options',
                componentProps: { order },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data === null || data === void 0 ? void 0 : data.success) {
                this.order.status = 'not-delivered';
                this.order.status_es = 'no entregada';
            }
        });
    }
    deliverOrder(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_deliver_order_deliver_order_component__WEBPACK_IMPORTED_MODULE_6__["DeliverOrderComponent"],
                componentProps: { order },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data === null || data === void 0 ? void 0 : data.success) {
                this.order.status = 'delivered';
                this.order.status_es = 'entregada';
            }
        });
    }
    callNumber(order) {
        this.callNumberService.call(order.phone);
    }
    showItemOptions(order, ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popover_item_options_popover_item_options_component__WEBPACK_IMPORTED_MODULE_8__["PopoverItemOptionsComponent"],
                componentProps: { order },
                event: ev
            });
            yield popover.present();
            const { data } = yield popover.onWillDismiss();
            if (data === null || data === void 0 ? void 0 : data.success) {
                //
            }
        });
    }
}
UrbanDistributionOrderItemComponent.ɵfac = function UrbanDistributionOrderItemComponent_Factory(t) { return new (t || UrbanDistributionOrderItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_utils_call_number_service__WEBPACK_IMPORTED_MODULE_7__["CallNumberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"])); };
UrbanDistributionOrderItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UrbanDistributionOrderItemComponent, selectors: [["app-urban-distribution-order-item"]], inputs: { order: "order", i: "i" }, outputs: { deletedOrderEvent: "deletedOrderEvent" }, decls: 43, vars: 21, consts: [["lines", "none"], [1, "reorder-wrapper"], ["size", "4", 1, "ion-align-self-center"], [1, "order-meta"], [1, "index"], ["name", "flag", 1, "ion-margin-start", 3, "ngStyle"], ["name", "locate", 4, "ngIf"], ["size", "6"], [3, "color"], ["size", "2", 1, "ion-text-right", 3, "click"], ["name", "ellipsis-vertical"], [3, "click"], ["size", "12"], [1, "ion-no-margin"], ["size", "12", 1, "ion-no-padding"], [1, "ion-no-margin", "p-small"], ["color", "light", 3, "click"], ["name", "locate"]], template: function UrbanDistributionOrderItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-reorder", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-badge", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UrbanDistributionOrderItemComponent_ion_icon_9_Template, 1, 0, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-badge", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrbanDistributionOrderItemComponent_Template_ion_col_click_14_listener($event) { return ctx.showItemOptions(ctx.order, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrbanDistributionOrderItemComponent_Template_ion_row_click_16_listener() { return ctx.viewOrderDetail(ctx.order); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-col", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-col", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-col", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrbanDistributionOrderItemComponent_Template_ion_button_click_38_listener() { return ctx.deliverOrder(ctx.order); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Entregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrbanDistributionOrderItemComponent_Template_ion_button_click_41_listener() { return ctx.showNotDeliverOptions(ctx.order); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " No entregado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.i + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.order.flag_color));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.order.location.saved_client);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.order.status === "delivered" ? "primary" : ctx.order.status === "skipped" || ctx.order.status === "pending" ? "warning" : "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 15, ctx.order.status_es), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx.order.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 17, ctx.order.location.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate5"](" ", ctx.order.location.b ? "B: " + ctx.order.location.b : "", " ", ctx.order.location.v ? "Viv: " + ctx.order.location.v : "", " ", ctx.order.location.s ? "Sec: " + ctx.order.location.s : "", " ", ctx.order.location.m ? "Mz: " + ctx.order.location.m : "", " ", ctx.order.location.c ? "Casa: " + ctx.order.location.c : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Raz\u00F3n social: ", ctx.order.receiver ? ctx.order.receiver : "-", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Tel\u00E9fono: ", ctx.order.phone ? ctx.order.phone : "-", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Paquete: ", ctx.order.description ? ctx.order.description : "-", " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonReorder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"]], styles: [".index[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  background: #757dfb;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n\nion-badge[_ngcontent-%COMP%] {\n  font-size: 0.65em !important;\n}\n\n.p-small[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n\n.reorder-wrapper[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.order-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3VyYmFuLWRpc3RyaWJ1dGlvbi1vcmRlci1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InVyYmFuLWRpc3RyaWJ1dGlvbi1vcmRlci1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZGV4IHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzU3ZGZiO1xuICBiYWNrZ3JvdW5kOiAjNzU3ZGZiO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuaW9uLWJhZGdlIHtcbiAgZm9udC1zaXplOiAwLjY1ZW0gIWltcG9ydGFudDtcbn1cblxuLnAtc21hbGwge1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4ucmVvcmRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3JkZXItbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "L8KJ":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/urban-distributions/urban-distribution-list/urban-distribution-list-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: UrbanDistributionListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrbanDistributionListPageRoutingModule", function() { return UrbanDistributionListPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _urban_distribution_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urban-distribution-list.page */ "u2q+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _urban_distribution_list_page__WEBPACK_IMPORTED_MODULE_1__["UrbanDistributionListPage"]
    }
];
class UrbanDistributionListPageRoutingModule {
}
UrbanDistributionListPageRoutingModule.ɵfac = function UrbanDistributionListPageRoutingModule_Factory(t) { return new (t || UrbanDistributionListPageRoutingModule)(); };
UrbanDistributionListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UrbanDistributionListPageRoutingModule });
UrbanDistributionListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UrbanDistributionListPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "NpuA":
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
((e,t)=>{ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(this,function r(){var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:{};var d,s=!n.document&&!!n.postMessage,a=n.IS_PAPA_WORKER||!1,o={},h=0,v={};function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new i(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(t,e){var i=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<i){let e=this._config.newline;e||(r=this._config.quoteChar||'"',e=this._handle.guessLineEndings(t,r)),t=[...t.split(e).slice(i)].join(e)}this.isFirstChunk&&U(this._config.beforeFirstChunk)&&void 0!==(r=this._config.beforeFirstChunk(t))&&(t=r),this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+t,r=(this._partialLine="",this._handle.parse(i,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){t=r.meta.cursor,i=(this._finished||(this._partialLine=i.substring(t-this._baseIndex),this._baseIndex=t),r&&r.data&&(this._rowCount+=r.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview);if(a)n.postMessage({results:r,workerId:v.WORKER_ID,finished:i});else if(U(this._config.chunk)&&!e){if(this._config.chunk(r,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=r=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(r.data),this._completeResults.errors=this._completeResults.errors.concat(r.errors),this._completeResults.meta=r.meta),this._completed||!i||!U(this._config.complete)||r&&r.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),i||r&&r.meta.paused||this._nextChunk(),r}this._halted=!0},this._sendError=function(e){U(this._config.error)?this._config.error(e):a&&this._config.error&&n.postMessage({workerId:v.WORKER_ID,error:e,finished:!1})}}function f(e){var r;(e=e||{}).chunkSize||(e.chunkSize=v.RemoteChunkSize),u.call(this,e),this._nextChunk=s?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),s||(r.onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)),r.open(this._config.downloadRequestBody?"POST":"GET",this._input,!s),this._config.downloadRequestHeaders){var e,t=this._config.downloadRequestHeaders;for(e in t)r.setRequestHeader(e,t[e])}var i;this._config.chunkSize&&(i=this._start+this._config.chunkSize-1,r.setRequestHeader("Range","bytes="+this._start+"-"+i));try{r.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}s&&0===r.status&&this._chunkError()}},this._chunkLoaded=function(){4===r.readyState&&(r.status<200||400<=r.status?this._chunkError():(this._start+=this._config.chunkSize||r.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>null!==(e=e.getResponseHeader("Content-Range"))?parseInt(e.substring(e.lastIndexOf("/")+1)):-1)(r),this.parseChunk(r.responseText)))},this._chunkError=function(e){e=r.statusText||e;this._sendError(new Error(e))}}function l(e){(e=e||{}).chunkSize||(e.chunkSize=v.LocalChunkSize),u.call(this,e);var i,r,n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((i=new FileReader).onload=y(this._chunkLoaded,this),i.onerror=y(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,t=(this._config.chunkSize&&(t=Math.min(this._start+this._config.chunkSize,this._input.size),e=r.call(e,this._start,t)),i.readAsText(e,this._config.encoding));n||this._chunkLoaded({target:{result:t}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function c(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk()},this._nextChunk=function(){var e,t;if(!this._finished)return e=this._config.chunkSize,i=e?(t=i.substring(0,e),i.substring(e)):(t=i,""),this._finished=!i,this.parseChunk(t)}}function p(e){u.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function i(m){var n,s,a,t,o=Math.pow(2,53),h=-o,u=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,d=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,i=this,r=0,f=0,l=!1,e=!1,c=[],p={data:[],errors:[],meta:{}};function y(e){return"greedy"===m.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){if(p&&a&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+v.DefaultDelimiter+"'"),a=!1),m.skipEmptyLines&&(p.data=p.data.filter(function(e){return!y(e)})),_()){if(p)if(Array.isArray(p.data[0])){for(var e=0;_()&&e<p.data.length;e++)p.data[e].forEach(t);p.data.splice(0,1)}else p.data.forEach(t);function t(e,t){U(m.transformHeader)&&(e=m.transformHeader(e,t)),c.push(e)}}function i(e,t){for(var i=m.header?{}:[],r=0;r<e.length;r++){var n=r,s=e[r],s=((e,t)=>(e=>(m.dynamicTypingFunction&&void 0===m.dynamicTyping[e]&&(m.dynamicTyping[e]=m.dynamicTypingFunction(e)),!0===(m.dynamicTyping[e]||m.dynamicTyping)))(e)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&((e=>{if(u.test(e)){e=parseFloat(e);if(h<e&&e<o)return 1}})(t)?parseFloat(t):d.test(t)?new Date(t):""===t?null:t):t)(n=m.header?r>=c.length?"__parsed_extra":c[r]:n,s=m.transform?m.transform(s,n):s);"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s}return m.header&&(r>c.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+c.length+" fields but parsed "+r,f+t):r<c.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+c.length+" fields but parsed "+r,f+t)),i}var r;p&&(m.header||m.dynamicTyping||m.transform)&&(r=1,!p.data.length||Array.isArray(p.data[0])?(p.data=p.data.map(i),r=p.data.length):p.data=i(p.data,0),m.header&&p.meta&&(p.meta.fields=c),f+=r)}function _(){return m.header&&0===c.length}function k(e,t,i,r){e={type:e,code:t,message:i};void 0!==r&&(e.row=r),p.errors.push(e)}U(m.step)&&(t=m.step,m.step=function(e){p=e,_()?g():(g(),0!==p.data.length&&(r+=e.data.length,m.preview&&r>m.preview?s.abort():(p.data=p.data[0],t(p,i))))}),this.parse=function(e,t,i){var r=m.quoteChar||'"',r=(m.newline||(m.newline=this.guessLineEndings(e,r)),a=!1,m.delimiter?U(m.delimiter)&&(m.delimiter=m.delimiter(e),p.meta.delimiter=m.delimiter):((r=((e,t,i,r,n)=>{var s,a,o,h;n=n||[",","\t","|",";",v.RECORD_SEP,v.UNIT_SEP];for(var u=0;u<n.length;u++){for(var d,f=n[u],l=0,c=0,p=0,g=(o=void 0,new E({comments:r,delimiter:f,newline:t,preview:10}).parse(e)),_=0;_<g.data.length;_++)i&&y(g.data[_])?p++:(d=g.data[_].length,c+=d,void 0===o?o=d:0<d&&(l+=Math.abs(d-o),o=d));0<g.data.length&&(c/=g.data.length-p),(void 0===a||l<=a)&&(void 0===h||h<c)&&1.99<c&&(a=l,s=f,h=c)}return{successful:!!(m.delimiter=s),bestDelimiter:s}})(e,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess)).successful?m.delimiter=r.bestDelimiter:(a=!0,m.delimiter=v.DefaultDelimiter),p.meta.delimiter=m.delimiter),b(m));return m.preview&&m.header&&r.preview++,n=e,s=new E(r),p=s.parse(n,t,i),g(),l?{meta:{paused:!0}}:p||{meta:{paused:!1}}},this.paused=function(){return l},this.pause=function(){l=!0,s.abort(),n=U(m.chunk)?"":n.substring(s.getCharIndex())},this.resume=function(){i.streamer._halted?(l=!1,i.streamer.parseChunk(n,!0)):setTimeout(i.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,s.abort(),p.meta.aborted=!0,U(m.complete)&&m.complete(p),n=""},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=new RegExp(P(t)+"([^]*?)"+P(t),"gm"),i=(e=e.replace(t,"")).split("\r"),t=e.split("\n"),e=1<t.length&&t[0].length<i[0].length;if(1===i.length||e)return"\n";for(var r=0,n=0;n<i.length;n++)"\n"===i[n][0]&&r++;return r>=i.length/2?"\r\n":"\r"}}function P(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(C){var S=(C=C||{}).delimiter,O=C.newline,x=C.comments,I=C.step,A=C.preview,T=C.fastMode,D=null,L=!1,F=null==C.quoteChar?'"':C.quoteChar,j=F;if(void 0!==C.escapeChar&&(j=C.escapeChar),("string"!=typeof S||-1<v.BAD_DELIMITERS.indexOf(S))&&(S=","),x===S)throw new Error("Comment character same as delimiter");!0===x?x="#":("string"!=typeof x||-1<v.BAD_DELIMITERS.indexOf(x))&&(x=!1),"\n"!==O&&"\r"!==O&&"\r\n"!==O&&(O="\n");var z=0,M=!1;this.parse=function(i,t,r){if("string"!=typeof i)throw new Error("Input must be a string");var n=i.length,e=S.length,s=O.length,a=x.length,o=U(I),h=[],u=[],d=[],f=z=0;if(!i)return w();if(T||!1!==T&&-1===i.indexOf(F)){for(var l=i.split(O),c=0;c<l.length;c++){if(d=l[c],z+=d.length,c!==l.length-1)z+=O.length;else if(r)return w();if(!x||d.substring(0,a)!==x){if(o){if(h=[],k(d.split(S)),R(),M)return w()}else k(d.split(S));if(A&&A<=c)return h=h.slice(0,A),w(!0)}}return w()}for(var p=i.indexOf(S,z),g=i.indexOf(O,z),_=new RegExp(P(j)+P(F),"g"),m=i.indexOf(F,z);;)if(i[z]===F)for(m=z,z++;;){if(-1===(m=i.indexOf(F,m+1)))return r||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:z}),E();if(m===n-1)return E(i.substring(z,m).replace(_,F));if(F===j&&i[m+1]===j)m++;else if(F===j||0===m||i[m-1]!==j){-1!==p&&p<m+1&&(p=i.indexOf(S,m+1));var y=v(-1===(g=-1!==g&&g<m+1?i.indexOf(O,m+1):g)?p:Math.min(p,g));if(i.substr(m+1+y,e)===S){d.push(i.substring(z,m).replace(_,F)),i[z=m+1+y+e]!==F&&(m=i.indexOf(F,z)),p=i.indexOf(S,z),g=i.indexOf(O,z);break}y=v(g);if(i.substring(m+1+y,m+1+y+s)===O){if(d.push(i.substring(z,m).replace(_,F)),b(m+1+y+s),p=i.indexOf(S,z),m=i.indexOf(F,z),o&&(R(),M))return w();if(A&&h.length>=A)return w(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:z}),m++}}else if(x&&0===d.length&&i.substring(z,z+a)===x){if(-1===g)return w();z=g+s,g=i.indexOf(O,z),p=i.indexOf(S,z)}else if(-1!==p&&(p<g||-1===g))d.push(i.substring(z,p)),z=p+e,p=i.indexOf(S,z);else{if(-1===g)break;if(d.push(i.substring(z,g)),b(g+s),o&&(R(),M))return w();if(A&&h.length>=A)return w(!0)}return E();function k(e){h.push(e),f=z}function v(e){var t=0;return t=-1!==e&&(e=i.substring(m+1,e))&&""===e.trim()?e.length:t}function E(e){return r||(void 0===e&&(e=i.substring(z)),d.push(e),z=n,k(d),o&&R()),w()}function b(e){z=e,k(d),d=[],g=i.indexOf(O,z)}function w(e){if(C.header&&!t&&h.length&&!L){var s=h[0],a=Object.create(null),o=new Set(s);let n=!1;for(let r=0;r<s.length;r++){let i=s[r];if(a[i=U(C.transformHeader)?C.transformHeader(i,r):i]){let e,t=a[i];for(;e=i+"_"+t,t++,o.has(e););o.add(e),s[r]=e,a[i]++,n=!0,(D=null===D?{}:D)[e]=i}else a[i]=1,s[r]=i;o.add(i)}n&&console.warn("Duplicate headers found and renamed."),L=!0}return{data:h,errors:u,meta:{delimiter:S,linebreak:O,aborted:M,truncated:!!e,cursor:f+(t||0),renamedHeaders:D}}}function R(){I(w()),h=[],u=[]}},this.abort=function(){M=!0},this.getCharIndex=function(){return z}}function g(e){var t=e.data,i=o[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:m,resume:m};if(U(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!r);s++);delete t.results}else U(i.userChunk)&&(i.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var i=o[e];U(i.userComplete)&&i.userComplete(t),i.terminate(),delete o[e]}function m(){throw new Error("Not implemented.")}function b(e){if("object"!=typeof e||null===e)return e;var t,i=Array.isArray(e)?[]:{};for(t in e)i[t]=b(e[t]);return i}function y(e,t){return function(){e.apply(t,arguments)}}function U(e){return"function"==typeof e}return v.parse=function(e,t){var i=(t=t||{}).dynamicTyping||!1;U(i)&&(t.dynamicTypingFunction=i,i={});if(t.dynamicTyping=i,t.transform=!!U(t.transform)&&t.transform,!t.worker||!v.WORKERS_SUPPORTED)return i=null,v.NODE_STREAM_INPUT,"string"==typeof e?(e=(e=>65279!==e.charCodeAt(0)?e:e.slice(1))(e),i=new(t.download?f:c)(t)):!0===e.readable&&U(e.read)&&U(e.on)?i=new p(t):(n.File&&e instanceof File||e instanceof Object)&&(i=new l(t)),i.stream(e);(i=(()=>{var e;return!!v.WORKERS_SUPPORTED&&(e=(()=>{var e=n.URL||n.webkitURL||null,t=r.toString();return v.BLOB_URL||(v.BLOB_URL=e.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",t,")();"],{type:"text/javascript"})))})(),(e=new n.Worker(e)).onmessage=g,e.id=h++,o[e.id]=e)})()).userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=U(t.step),t.chunk=U(t.chunk),t.complete=U(t.complete),t.error=U(t.error),delete t.worker,i.postMessage({input:e,config:t,workerId:i.id})},v.unparse=function(e,t){var n=!1,_=!0,m=",",y="\r\n",s='"',a=s+s,i=!1,r=null,o=!1,h=((()=>{if("object"==typeof t){if("string"!=typeof t.delimiter||v.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter),"boolean"!=typeof t.quotes&&"function"!=typeof t.quotes&&!Array.isArray(t.quotes)||(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines),"string"==typeof t.newline&&(y=t.newline),"string"==typeof t.quoteChar&&(s=t.quoteChar),"boolean"==typeof t.header&&(_=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");r=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s),t.escapeFormulae instanceof RegExp?o=t.escapeFormulae:"boolean"==typeof t.escapeFormulae&&t.escapeFormulae&&(o=/^[=+\-@\t\r].*$/)}})(),new RegExp(P(s),"g"));"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,i);if("object"==typeof e[0])return u(r||Object.keys(e[0]),e,i)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||r),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function u(e,t,i){var r="",n=("string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(r+=m),r+=k(e[a],a);0<t.length&&(r+=y)}for(var o=0;o<t.length;o++){var h=(n?e:t[o]).length,u=!1,d=n?0===Object.keys(t[o]).length:0===t[o].length;if(i&&!n&&(u="greedy"===i?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===i&&n){for(var f=[],l=0;l<h;l++){var c=s?e[l]:l;f.push(t[o][c])}u=""===f.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!d&&(r+=m);var g=n&&s?e[p]:p;r+=k(t[o][g],p)}o<t.length-1&&(!i||0<h&&!d)&&(r+=y)}}return r}function k(e,t){var i,r;return null==e?"":e.constructor===Date?JSON.stringify(e).slice(1,25):(r=!1,o&&"string"==typeof e&&o.test(e)&&(e="'"+e,r=!0),i=e.toString().replace(h,a),(r=r||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||((e,t)=>{for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1})(i,v.BAD_DELIMITERS)||-1<i.indexOf(m)||" "===i.charAt(0)||" "===i.charAt(i.length-1))?s+i+s:i)}},v.RECORD_SEP=String.fromCharCode(30),v.UNIT_SEP=String.fromCharCode(31),v.BYTE_ORDER_MARK="\ufeff",v.BAD_DELIMITERS=["\r","\n",'"',v.BYTE_ORDER_MARK],v.WORKERS_SUPPORTED=!s&&!!n.Worker,v.NODE_STREAM_INPUT=1,v.LocalChunkSize=10485760,v.RemoteChunkSize=5242880,v.DefaultDelimiter=",",v.Parser=E,v.ParserHandle=i,v.NetworkStreamer=f,v.FileStreamer=l,v.StringStreamer=c,v.ReadableStreamStreamer=p,n.jQuery&&((d=n.jQuery).fn.parse=function(o){var i=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&n.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},i)})}),e(),this;function e(){if(0===h.length)U(o.complete)&&o.complete();else{var e,t,i,r,n=h[0];if(U(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,i=n.inputElem,r=s.reason,void(U(o.error)&&o.error({name:e},t,i,r));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){U(a)&&a(e,n.file,n.inputElem),u()},v.parse(n.file,n.instanceConfig)}}function u(){h.splice(0,1),e()}}),a&&(n.onmessage=function(e){e=e.data;void 0===v.WORKER_ID&&e&&(v.WORKER_ID=e.workerId);"string"==typeof e.input?n.postMessage({workerId:v.WORKER_ID,results:v.parse(e.input,e.config),finished:!0}):(n.File&&e.input instanceof File||e.input instanceof Object)&&(e=v.parse(e.input,e.config))&&n.postMessage({workerId:v.WORKER_ID,results:e,finished:!0})}),(f.prototype=Object.create(u.prototype)).constructor=f,(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(c.prototype)).constructor=c,(p.prototype=Object.create(u.prototype)).constructor=p,v});

/***/ }),

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

/***/ "c30F":
/*!*************************************!*\
  !*** ./src/app/utils/to-promise.ts ***!
  \*************************************/
/*! exports provided: toPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise; });
function toPromise(observable) {
    return new Promise((resolve, reject) => {
        const subscription = observable.subscribe({
            next: (value) => {
                resolve(value);
                subscription.unsubscribe();
            },
            error: (error) => {
                reject(error);
                subscription.unsubscribe();
            }
        });
    });
}


/***/ }),

/***/ "oeNu":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/urban-distributions/urban-distribution-indicators/urban-distribution-indicators.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: UrbanDistributionIndicatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrbanDistributionIndicatorsComponent", function() { return UrbanDistributionIndicatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v1/order.service */ "EXzW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





class UrbanDistributionIndicatorsComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.TIME_PER_ORDER = 8.5;
    }
    ngOnInit() {
        this.ordersUpdatedSubscription = this.orderService.getOrdersUpdated$()
            .subscribe(ordersUpdated => {
            console.log(ordersUpdated);
            this.calculatePending();
            this.calculateEstTime();
        });
    }
    ngOnChanges(changes) {
        this.calculatePending();
        this.calculateEstTime();
    }
    ngOnDestroy() {
        if (this.ordersUpdatedSubscription) {
            this.ordersUpdatedSubscription.unsubscribe();
        }
    }
    calculatePending() {
        this.pendingOrdersCount = this.orders.filter(order => order.status === 'pending').length;
    }
    calculateEstTime() {
        const estimated = this.pendingOrdersCount * this.TIME_PER_ORDER;
        if (estimated <= 60) {
            this.estimatedTime = estimated + 'min.';
        }
        else {
            const hours = Math.round(estimated / 60);
            const minutesH = (estimated / 60) - hours;
            const minutes = Math.ceil(minutesH * 60);
            this.estimatedTime = `${hours}h ${minutes}m`;
        }
    }
}
UrbanDistributionIndicatorsComponent.ɵfac = function UrbanDistributionIndicatorsComponent_Factory(t) { return new (t || UrbanDistributionIndicatorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"])); };
UrbanDistributionIndicatorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UrbanDistributionIndicatorsComponent, selectors: [["app-urban-distribution-indicators"]], inputs: { orders: "orders" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 2, consts: [[1, "ion-text-center", "ion-no-padding"], ["size", "6", 1, "ion-no-padding"], [1, "ion-no-margin"]], template: function UrbanDistributionIndicatorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Pendientes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Estimado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pendingOrdersCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.estimatedTime);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"]], styles: ["ion-grid[_ngcontent-%COMP%] {\n  margin: 5px 20px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3VyYmFuLWRpc3RyaWJ1dGlvbi1pbmRpY2F0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InVyYmFuLWRpc3RyaWJ1dGlvbi1pbmRpY2F0b3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICBtYXJnaW46IDVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvL2JveC1zaGFkb3c6IDAgMCAxMHB4IDNweCBsaWdodGdyZXk7XG59XG4iXX0= */"] });


/***/ }),

/***/ "pKA5":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/urban-distributions/urban-distribution-list/urban-distribution-list.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: UrbanDistributionListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrbanDistributionListPageModule", function() { return UrbanDistributionListPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _urban_distribution_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urban-distribution-list-routing.module */ "L8KJ");
/* harmony import */ var _urban_distribution_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urban-distribution-list.page */ "u2q+");
/* harmony import */ var _urban_distribution_order_item_urban_distribution_order_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../urban-distribution-order-item/urban-distribution-order-item.component */ "Jtth");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");
/* harmony import */ var _popover_item_options_popover_item_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover-item-options/popover-item-options.component */ "7ruQ");
/* harmony import */ var _urban_distribution_indicators_urban_distribution_indicators_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../urban-distribution-indicators/urban-distribution-indicators.component */ "oeNu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class UrbanDistributionListPageModule {
}
UrbanDistributionListPageModule.ɵfac = function UrbanDistributionListPageModule_Factory(t) { return new (t || UrbanDistributionListPageModule)(); };
UrbanDistributionListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: UrbanDistributionListPageModule });
UrbanDistributionListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _urban_distribution_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["UrbanDistributionListPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](UrbanDistributionListPageModule, { declarations: [_urban_distribution_list_page__WEBPACK_IMPORTED_MODULE_4__["UrbanDistributionListPage"],
        _urban_distribution_order_item_urban_distribution_order_item_component__WEBPACK_IMPORTED_MODULE_5__["UrbanDistributionOrderItemComponent"],
        _popover_item_options_popover_item_options_component__WEBPACK_IMPORTED_MODULE_7__["PopoverItemOptionsComponent"],
        _urban_distribution_indicators_urban_distribution_indicators_component__WEBPACK_IMPORTED_MODULE_8__["UrbanDistributionIndicatorsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _urban_distribution_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["UrbanDistributionListPageRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]] }); })();


/***/ }),

/***/ "u2q+":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/urban-distributions/urban-distribution-list/urban-distribution-list.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: UrbanDistributionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrbanDistributionListPage", function() { return UrbanDistributionListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/v1/order.service */ "EXzW");
/* harmony import */ var _services_v1_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/v1/location.service */ "fRX6");
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/loading-spinner/loading-spinner.component */ "nk+c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/v1/geolocation.service */ "3Cxn");
/* harmony import */ var _components_modals_edit_urban_distribution_edit_urban_distribution_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/modals/edit-urban-distribution/edit-urban-distribution.component */ "lfWt");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/toast/toast.component */ "COqc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _urban_distribution_form_urban_distribution_form_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../urban-distribution-form/urban-distribution-form.page */ "6ypy");
/* harmony import */ var _services_utils_network_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/utils/network.service */ "KDgl");
/* harmony import */ var _services_v1_order_manager_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/v1/order-manager.service */ "7zG+");
/* harmony import */ var _components_modals_sync_data_loading_sync_data_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/modals/sync-data-loading/sync-data-loading.component */ "tyly");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _services_v1_offline_order_manager_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../services/v1/offline-order-manager.service */ "a/TO");
/* harmony import */ var _services_utils_mode_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/utils/mode.service */ "Wmen");
/* harmony import */ var _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../interfaces/ModeStatus */ "iK7v");
/* harmony import */ var _services_utils_sync_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../services/utils/sync.service */ "I40L");
/* harmony import */ var _services_v1_geocode_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../services/v1/geocode.service */ "fAXw");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! papaparse */ "NpuA");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _utils_to_promise__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../utils/to-promise */ "c30F");
/* harmony import */ var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../services/v1/driver.service */ "rTgA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _urban_distribution_indicators_urban_distribution_indicators_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../urban-distribution-indicators/urban-distribution-indicators.component */ "oeNu");
/* harmony import */ var _urban_distribution_order_item_urban_distribution_order_item_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../urban-distribution-order-item/urban-distribution-order-item.component */ "Jtth");














































const _c0 = ["csvInput"];
function UrbanDistributionListPage_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UrbanDistributionListPage_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "online");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UrbanDistributionListPage_ion_item_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-datetime", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function UrbanDistributionListPage_ion_item_11_Template_ion_datetime_ionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onDateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.dateFC);
} }
function UrbanDistributionListPage_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No tienes paquetes pendientes por entregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UrbanDistributionListPage_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-progress-bar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UrbanDistributionListPage_app_urban_distribution_indicators_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-urban-distribution-indicators", 25);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("orders", ctx_r6.orders);
} }
function UrbanDistributionListPage_ion_item_sliding_29_ion_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-spinner", 33);
} }
function UrbanDistributionListPage_ion_item_sliding_29_ion_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 34);
} }
function UrbanDistributionListPage_ion_item_sliding_29_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionDrag", function UrbanDistributionListPage_ion_item_sliding_29_Template_ion_item_sliding_ionDrag_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.dragEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-urban-distribution-order-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("deletedOrderEvent", function UrbanDistributionListPage_ion_item_sliding_29_Template_app_urban_distribution_order_item_deletedOrderEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.deletedOrderEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item-options", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSwipe", function UrbanDistributionListPage_ion_item_sliding_29_Template_ion_item_options_ionSwipe_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.swipeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrbanDistributionListPage_ion_item_sliding_29_Template_ion_item_option_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const order_r11 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.editOrder(order_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrbanDistributionListPage_ion_item_sliding_29_Template_ion_item_option_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const order_r11 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.presentDeleteOrderAlertConfirm(order_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UrbanDistributionListPage_ion_item_sliding_29_ion_spinner_7_Template, 1, 0, "ion-spinner", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UrbanDistributionListPage_ion_item_sliding_29_ion_icon_8_Template, 1, 0, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("order", order_r11)("i", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.deletingOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.deletingOrder);
} }
function UrbanDistributionListPage_ion_footer_30_ion_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 40);
} }
function UrbanDistributionListPage_ion_footer_30_ion_spinner_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-spinner", 41);
} }
function UrbanDistributionListPage_ion_footer_30_ion_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Optimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UrbanDistributionListPage_ion_footer_30_ion_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Optimizando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UrbanDistributionListPage_ion_footer_30_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-tabs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-tab-bar", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-tab-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrbanDistributionListPage_ion_footer_30_Template_ion_tab_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.showMap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Comenzar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-tab-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrbanDistributionListPage_ion_footer_30_Template_ion_tab_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.optimizeOrders(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UrbanDistributionListPage_ion_footer_30_ion_icon_9_Template, 1, 0, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UrbanDistributionListPage_ion_footer_30_ion_spinner_10_Template, 1, 0, "ion-spinner", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UrbanDistributionListPage_ion_footer_30_ion_label_11_Template, 2, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UrbanDistributionListPage_ion_footer_30_ion_label_12_Template, 2, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.optimizingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.optimizingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.optimizingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.optimizingOrders);
} }
class UrbanDistributionListPage {
    constructor(modalController, popoverController, locationService, alertController, loadingController, toastComponent, geolocation, orderManagerService, geolocationService, driverService, loadingSpinnerComponent, modeService, router, offlineOrderManagerService, networkService, storage, syncService, orderService, geocodeService) {
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.locationService = locationService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.toastComponent = toastComponent;
        this.geolocation = geolocation;
        this.orderManagerService = orderManagerService;
        this.geolocationService = geolocationService;
        this.driverService = driverService;
        this.loadingSpinnerComponent = loadingSpinnerComponent;
        this.modeService = modeService;
        this.router = router;
        this.offlineOrderManagerService = offlineOrderManagerService;
        this.networkService = networkService;
        this.storage = storage;
        this.syncService = syncService;
        this.orderService = orderService;
        this.geocodeService = geocodeService;
        this.orders = [];
        this.optimizingOrders = false;
        this.loading = true;
        this.dateFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        this.date = new Date();
        this.driverCityFallback = 'Corrientes';
        this.networkModeToggleFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        this.deletingOrder = false;
        this.importing = false;
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
        this.checkWatchLocationsSubscription();
        this.offlineOrderManagerService.getSendingReqs$().subscribe(sendingRequests => {
            console.log('SENDING REQ IN URBAN DISTR LIST', sendingRequests);
            if (sendingRequests) {
                this.openSyncDataLoadingPopover();
            }
        });
    }
    ngAfterViewInit() {
        this.date = new Date();
        this.dateFC.setValue(this.date.toISOString());
        this.networkModeToggleFC.setValue(1);
        this.getOrdersByDate();
    }
    ngOnDestroy() {
        if (this.driverSubscription) {
            this.driverSubscription.unsubscribe();
        }
    }
    checkWatchLocationsSubscription() {
        if (!this.geolocationService.checkWatchLocationsSubscription()) {
            this.geolocationService.watchPosition();
        }
    }
    getOrdersByDate() {
        this.orders = [];
        this.loading = true;
        const day = this.date.getDate();
        const month = this.date.getMonth() + 1;
        const year = this.date.getFullYear();
        this.orderManagerService.getOrdersByDate('urban-distribution', day, month, year)
            .subscribe((response) => {
            this.orders = response;
            this.updateDriverCityFallback();
            this.orderManagerService.setOrders$(this.orders);
            this.ionReorderGroup.complete(this.orders);
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }
    doReorder(ev) {
        const from = ev.detail.from;
        const to = ev.detail.to;
        if (from === to) {
            ev.detail.complete(true);
            return;
        }
        const moved = this.orders.splice(from, 1)[0];
        this.orders.splice(to, 0, moved);
        ev.detail.complete(true);
        // Refleja el nuevo orden en los observables usados por el mapa y otras vistas.
        this.orderManagerService.setOrders$(this.orders);
    }
    openCsvImporter() {
        var _a;
        if ((_a = this.csvInput) === null || _a === void 0 ? void 0 : _a.nativeElement) {
            this.csvInput.nativeElement.value = '';
            this.csvInput.nativeElement.click();
        }
    }
    onCsvSelected(event) {
        const input = event.target;
        const file = input.files && input.files.length > 0 ? input.files[0] : null;
        if (!file) {
            return;
        }
        this.importing = true;
        papaparse__WEBPACK_IMPORTED_MODULE_22__["parse"](file, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                const rows = result.data.filter(row => this.hasContent(row));
                yield this.processCsvRows(rows);
                this.importing = false;
                if ((_a = this.csvInput) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                    this.csvInput.nativeElement.value = '';
                }
            }),
            error: () => {
                var _a;
                this.importing = false;
                this.toastComponent.presentToast('No se pudo leer el archivo CSV', 'bottom', 3500);
                if ((_a = this.csvInput) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                    this.csvInput.nativeElement.value = '';
                }
            }
        });
    }
    hasContent(row) {
        if (!row || typeof row !== 'object') {
            return false;
        }
        return Object.keys(row).some(key => {
            const value = row[key];
            return value !== null && value !== undefined && `${value}`.trim() !== '';
        });
    }
    processCsvRows(rows) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!rows.length) {
                this.toastComponent.presentToast('El archivo CSV está vacío', 'bottom', 3500);
                return;
            }
            let success = 0;
            let failed = 0;
            for (const row of rows) {
                try {
                    yield this.importRow(row);
                    success++;
                }
                catch (err) {
                    console.error('Error importing CSV row', row, err);
                    failed++;
                }
            }
            if (success > 0) {
                this.getOrdersByDate();
            }
            const message = `Importadas ${success}. ${failed > 0 ? 'Fallidas ' + failed + '.' : ''}`;
            this.toastComponent.presentToast(message, 'bottom', 4000);
        });
    }
    importRow(row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const address = (row.address || row.direccion || row.direccion || '').toString().trim();
            let city = (row.city || row.ciudad || '').toString().trim();
            if (!address) {
                throw new Error('Fila sin dirección');
            }
            if (!city) {
                city = this.extractCityFromAddress(address)
                    || this.driverCityFallback
                    || 'Corrientes';
            }
            let lat = parseFloat(row.lat);
            let lng = parseFloat(row.lng);
            if (isNaN(lat) || isNaN(lng)) {
                const country = (row.country || row.pais || 'Argentina').toString().trim();
                const query = `${address}, ${city}`;
                try {
                    const coords = yield this.geocodeService.mapQuestGeocode(query, country);
                    lat = coords.lat;
                    lng = coords.lng;
                }
                catch (error) {
                    const coords = yield this.geocodeService.GMGeocodeAddress(query, country);
                    lat = coords.lat;
                    lng = coords.lng;
                }
            }
            if (isNaN(lat) || isNaN(lng)) {
                throw new Error('No se pudieron obtener coordenadas');
            }
            const body = {
                type: 'urban-distribution',
                name: (row.location_name || row.name || address).toString().trim(),
                address,
                city,
                company_name: (row.company_name || row.receiver || '').toString().trim(),
                details: (row.details || row.description || '').toString().trim(),
                phone: (row.phone || row.telefono || '').toString().trim(),
                date: this.normalizeDate(row.date),
                locality: (row.locality || row.localidad || null) || null,
                administrative_area_level_1: (row.administrative_area_level_1 || row.provincia || null) || null,
                administrative_area_level_2: (row.administrative_area_level_2 || row.partido || null) || null,
                lat,
                lng,
                flag_color: (row.flag_color || row.color || '#FF4051').toString().trim() || '#FF4051',
                b: (row.b || row.barrio || '').toString().trim(),
                v: (row.v || row.viv || '').toString().trim(),
                s: (row.s || row.sec || '').toString().trim(),
                m: (row.m || row.mz || '').toString().trim(),
                c: (row.c || row.casa || '').toString().trim()
            };
            yield Object(_utils_to_promise__WEBPACK_IMPORTED_MODULE_23__["toPromise"])(this.orderManagerService.storeLocation(body));
        });
    }
    normalizeDate(value) {
        if (!value) {
            return this.formatDate(this.date);
        }
        const raw = value.toString().trim();
        if (!raw) {
            return this.formatDate(this.date);
        }
        if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
            return raw;
        }
        if (/^\d{2}\/\d{2}\/\d{4}$/.test(raw)) {
            const [day, month, year] = raw.split('/');
            return `${year}-${month}-${day}`;
        }
        if (/^\d{2}-\d{2}-\d{4}$/.test(raw)) {
            const [day, month, year] = raw.split('-');
            return `${year}-${month}-${day}`;
        }
        return this.formatDate(this.date);
    }
    formatDate(date) {
        return date.toISOString().slice(0, 10);
    }
    extractCityFromAddress(address) {
        if (!address) {
            return null;
        }
        const parts = address.split(',').map(part => part.trim()).filter(part => part.length > 0);
        if (parts.length >= 2) {
            return parts[parts.length - 1];
        }
        return null;
    }
    updateDriverCityFallback() {
        var _a, _b, _c;
        const cityFromOrders = (_c = (_b = (_a = this.orders) === null || _a === void 0 ? void 0 : _a.find(order => { var _a; return (_a = order === null || order === void 0 ? void 0 : order.location) === null || _a === void 0 ? void 0 : _a.city; })) === null || _b === void 0 ? void 0 : _b.location) === null || _c === void 0 ? void 0 : _c.city;
        if (cityFromOrders) {
            this.driverCityFallback = cityFromOrders;
            return;
        }
        if (!this.driverCityFallback || this.driverCityFallback.trim().length === 0) {
            this.driverCityFallback = 'Corrientes';
        }
    }
    addLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _urban_distribution_form_urban_distribution_form_page__WEBPACK_IMPORTED_MODULE_12__["UrbanDistributionFormPage"],
                componentProps: { networkStatus: this.networkModeToggleFC.value ? this.networkModeToggleFC.value : false }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data === null || data === void 0 ? void 0 : data.hasNewOrder) {
                this.getOrdersByDate();
            }
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
                this.orderService.setCurrentOrders$(this.orders);
                this.updateDriverCityFallback();
                this.router.navigateByUrl('delivery-map/urban-distribution');
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
        console.log(this.orders.length);
        const undeliveredOrders = this.orders.filter(order => order.status !== 'delivered');
        console.log(undeliveredOrders.length);
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
                    console.log(response);
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
    editOrder(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_edit_urban_distribution_edit_urban_distribution_component__WEBPACK_IMPORTED_MODULE_8__["EditUrbanDistributionComponent"],
                componentProps: { order },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data && data.success) {
                this.getOrdersByDate();
            }
        });
    }
    deleteOrder(order) {
        this.deletingOrder = true;
        this.orderManagerService.deleteOrder(order)
            .subscribe((response) => {
            this.deletingOrder = false;
            this.getOrdersByDate();
        }, error => {
            this.deletingOrder = false;
        });
    }
    deletedOrderEvent(order) {
        this.orders = this.orders.filter(o => o.id !== order.id);
        // this.orderService.setOrdersUpdated$(true);
    }
    openSyncDataLoadingPopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_modals_sync_data_loading_sync_data_loading_component__WEBPACK_IMPORTED_MODULE_15__["SyncDataLoadingComponent"]
            });
            yield popover.present();
            const { data } = yield popover.onDidDismiss();
            console.log(data);
            console.log('urban list dissmissssed');
            if (data === null || data === void 0 ? void 0 : data.success) {
                this.getOrdersByDate();
            }
        });
    }
    setModeStatus(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = ev.detail.checked ? _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_19__["ModeStatus"].Online : _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_19__["ModeStatus"].Offline;
            this.modeService.updateModeStatus(status);
            if (status === _interfaces_ModeStatus__WEBPACK_IMPORTED_MODULE_19__["ModeStatus"].Online) { // if status changes from offline to online, then i sync with server
                console.log('debo sincronizar');
                this.openSyncDataLoadingPopover();
                this.syncService.sync();
            }
            else { // if status changes from online to offline, then i store current orders in localstorage
                console.log('debo guardar en localstorage');
                this.orderManagerService.storeOrdersInLocalStorage(this.orders)
                    .then(orders => {
                    console.log('orders in storage', orders);
                });
            }
        });
    }
    swipeEvent(ev) {
        //
    }
    dragEvent(ev) {
        //
    }
    setDeliveryOrderToOrders() {
        const body = {
            ordersIds: this.orders.map(order => order.id)
        };
        this.orderService.setDeliveryOrderToOrders(body)
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
UrbanDistributionListPage.ɵfac = function UrbanDistributionListPage_Factory(t) { return new (t || UrbanDistributionListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_10__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_order_manager_service__WEBPACK_IMPORTED_MODULE_14__["OrderManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_7__["GeolocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_24__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__["LoadingSpinnerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_utils_mode_service__WEBPACK_IMPORTED_MODULE_18__["ModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_offline_order_manager_service__WEBPACK_IMPORTED_MODULE_17__["OfflineOrderManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_utils_network_service__WEBPACK_IMPORTED_MODULE_13__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_16__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_utils_sync_service__WEBPACK_IMPORTED_MODULE_20__["SyncService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_geocode_service__WEBPACK_IMPORTED_MODULE_21__["GeocodeService"])); };
UrbanDistributionListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UrbanDistributionListPage, selectors: [["app-urban-distribution-list"]], viewQuery: function UrbanDistributionListPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorderGroup"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ionReorderGroup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.csvInput = _t.first);
    } }, decls: 31, vars: 11, consts: [["slot", "start"], ["autoHide", "false"], ["slot", "end"], ["class", "network-status", 4, "ngIf"], ["color", "warning", 3, "checked", "formControl", "ionChange"], ["lines", "none", "class", "custom-date-item", 4, "ngIf"], [1, "ion-text-center", "ion-padding-bottom"], [1, "custom-button", 3, "click"], ["color", "medium", 1, "custom-button", 3, "disabled", "click"], ["type", "file", "accept", ".csv", "hidden", "", 3, "change"], ["csvInput", ""], ["slot", "fixed", 3, "ionRefresh"], [1, "ion-text-center", "ion-padding-bottom", "mt-3"], ["color", "light", 1, "custom-button", 3, "click"], ["class", "ion-padding ion-text-center", 4, "ngIf"], [3, "orders", 4, "ngIf"], [1, "ion-padding-horizontal"], ["disabled", "false", 3, "ionItemReorder"], ["class", "ion-margin-bottom", 3, "ionDrag", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "network-status"], ["lines", "none", 1, "custom-date-item"], ["displayFormat", "DD MMMM YYYY", "display-timezone", "America/Argentina/Buenos_Aires", "placeholder", "Seleccione fecha", "doneText", "ok", "cancelText", "cancelar", "monthNames", "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre", "monthShortNames", "ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic", "dayNames", "domingo, lunes, martes, mi\u00E9rcoles, jueves, viernes, s\u00E1bado, domingo", "dayShortNames", "dom, lun, mar, mi\u00E9, jue, vie, s\u00E1b, dom", 3, "formControl", "ionChange"], [1, "ion-padding", "ion-text-center"], ["type", "indeterminate"], [3, "orders"], [1, "ion-margin-bottom", 3, "ionDrag"], [3, "order", "i", "deletedOrderEvent"], [3, "ionSwipe"], ["color", "light", 3, "click"], ["slot", "end", "name", "create"], ["name", "lines-small", 4, "ngIf"], ["slot", "end", "name", "trash", 4, "ngIf"], ["name", "lines-small"], ["slot", "end", "name", "trash"], ["slot", "bottom", "color", "light"], [3, "click"], ["name", "navigate-circle"], ["name", "filter", 4, "ngIf"], ["name", "bubbles", 4, "ngIf"], ["name", "filter"], ["name", "bubbles"]], template: function UrbanDistributionListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UrbanDistributionListPage_span_5_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UrbanDistributionListPage_span_6_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function UrbanDistributionListPage_Template_ion_toggle_ionChange_7_listener($event) { return ctx.setModeStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "DISTRIBUCI\u00D3N URBANA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UrbanDistributionListPage_ion_item_11_Template, 2, 1, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrbanDistributionListPage_Template_ion_button_click_13_listener() { return ctx.addLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " AGREGAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrbanDistributionListPage_Template_ion_button_click_15_listener() { return ctx.openCsvImporter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " IMPORTAR CSV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UrbanDistributionListPage_Template_input_change_17_listener($event) { return ctx.onCsvSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-refresher", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function UrbanDistributionListPage_Template_ion_refresher_ionRefresh_19_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrbanDistributionListPage_Template_ion_button_click_22_listener() { return ctx.setDeliveryOrderToOrders(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " GUARDAR ORDEN DE ENTREGA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UrbanDistributionListPage_p_24_Template, 3, 0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, UrbanDistributionListPage_div_25_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UrbanDistributionListPage_app_urban_distribution_indicators_26_Template, 1, 1, "app-urban-distribution-indicators", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-reorder-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionItemReorder", function UrbanDistributionListPage_Template_ion_reorder_group_ionItemReorder_28_listener($event) { return ctx.doReorder($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, UrbanDistributionListPage_ion_item_sliding_29_Template, 10, 4, "ion-item-sliding", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, UrbanDistributionListPage_ion_footer_30_Template, 13, 4, "ion-footer", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.networkModeToggleFC.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.networkModeToggleFC.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.networkModeToggleFC.value)("formControl", ctx.networkModeToggleFC);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.networkModeToggleFC.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.importing);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.orders.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.orders.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.networkModeToggleFC.value);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonMenuButton"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorderGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonProgressBar"], _urban_distribution_indicators_urban_distribution_indicators_component__WEBPACK_IMPORTED_MODULE_26__["UrbanDistributionIndicatorsComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemSliding"], _urban_distribution_order_item_urban_distribution_order_item_component__WEBPACK_IMPORTED_MODULE_27__["UrbanDistributionOrderItemComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n  font-family: NunitoSans, sans-serif;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-item-option[_ngcontent-%COMP%] {\n  --background: white;\n  --color: #000;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-progress-bar[_ngcontent-%COMP%] {\n  height: 1px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: white;\n}\n\n.info[_ngcontent-%COMP%] {\n  border: 1px dotted black;\n  padding: 10px;\n  font-weight: 900;\n}\n\nion-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n}\n\n.network-status[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3VyYmFuLWRpc3RyaWJ1dGlvbi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vdXJiYW4tZGlzdHJpYnV0aW9uLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FBdEJBO0VBQ0UseUJBQUE7QUF5QkY7O0FBdEJBO0VBQ0UsV0FBQTtBQXlCRjs7QUF0QkE7RUFDRSxtQkFBQTtBQXlCRjs7QUF0QkE7RUFDRSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXlCRjs7QUF0QkE7RUFDRSxXQUFBO0FBeUJGOztBQXRCQTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7QUF5QkY7O0FBdEJBO0VBQ0UsZ0JBQUE7QUF5QkYiLCJmaWxlIjoidXJiYW4tZGlzdHJpYnV0aW9uLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmN2Y4Zjk7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc1N2RmYjtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtLWdyb3VwIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlvbi1pdGVtLW9wdGlvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMwMDA7XG59XG5cbi5jdXN0b20tZGF0ZS1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS91cmJhbi1kaXN0cmlidXRpb24uc2Nzc1wiO1xuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5pbmZvIHtcbiAgYm9yZGVyOiAxcHggZG90dGVkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taXRlbS1zbGlkaW5nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCAwIDdweCAycHggbGlnaHRncmV5O1xufVxuXG4ubmV0d29yay1zdGF0dXMge1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=pages-urban-distributions-urban-distribution-list-urban-distribution-list-module-es2015.js.map