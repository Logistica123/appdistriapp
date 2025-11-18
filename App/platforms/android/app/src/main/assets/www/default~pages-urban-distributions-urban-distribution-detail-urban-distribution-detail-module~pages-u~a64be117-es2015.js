(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-urban-distributions-urban-distribution-detail-urban-distribution-detail-module~pages-u~a64be117"],{

/***/ "ZAvG":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/urban-distributions/urban-distribution-detail/urban-distribution-detail.page.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UrbanDistributionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrbanDistributionDetailPage", function() { return UrbanDistributionDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/loading-spinner/loading-spinner.component */ "nk+c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/v1/order.service */ "EXzW");
/* harmony import */ var _modal_edit_address_modal_edit_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-edit-address/modal-edit-address.component */ "mz+P");
/* harmony import */ var _services_v1_order_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/v1/order-manager.service */ "7zG+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_order_detail_map_order_detail_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/order-detail-map/order-detail-map.component */ "+uyP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");















function UrbanDistributionDetailPage_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Direcci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Ciudad:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Raz\u00F3n Social:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Detalle paquete:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Tel\u00E9fono:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.order.location.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.order.location.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.order.location.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.order.receiver, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.order.description ? ctx_r0.order.description : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.order.phone ? ctx_r0.order.phone : "-", " ");
} }
function UrbanDistributionDetailPage_ion_footer_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-footer", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UrbanDistributionDetailPage_ion_footer_10_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r2.presentDeleteLocationAlertConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " ELIMINAR DE MI HOJA DE RUTA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class UrbanDistributionDetailPage {
    constructor(orderService, orderManagerService, modalController, loadingSpinnerComponent, router, alertController) {
        this.orderService = orderService;
        this.orderManagerService = orderManagerService;
        this.modalController = modalController;
        this.loadingSpinnerComponent = loadingSpinnerComponent;
        this.router = router;
        this.alertController = alertController;
    }
    ngOnInit() {
        //
    }
    presentDeleteLocationAlertConfirm() {
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
                            this.deleteOrder();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteOrder() {
        this.orderManagerService.deleteOrder(this.order)
            .subscribe((response) => {
            this.dismiss(true);
        }, error => {
            //
        }, () => {
            //
        });
    }
    editAddress() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.order.location);
            const modal = yield this.modalController.create({
                component: _modal_edit_address_modal_edit_address_component__WEBPACK_IMPORTED_MODULE_5__["ModalEditAddressComponent"],
                componentProps: { order: this.order }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            console.log(data);
        });
    }
    dismiss(success) {
        this.modalController.dismiss({ success });
    }
}
UrbanDistributionDetailPage.ɵfac = function UrbanDistributionDetailPage_Factory(t) { return new (t || UrbanDistributionDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_v1_order_manager_service__WEBPACK_IMPORTED_MODULE_6__["OrderManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__["LoadingSpinnerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"])); };
UrbanDistributionDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UrbanDistributionDetailPage, selectors: [["app-urban-distribution-detail"]], inputs: { order: "order" }, decls: 11, vars: 3, consts: [["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back"], [3, "order"], ["class", "ion-padding", 4, "ngIf"], ["class", "ion-no-border", 4, "ngIf"], [1, "ion-padding"], [1, "ion-text-center", "location-name", "ion-no-margin"], [1, "ion-no-padding"], [1, "ion-no-border"], ["color", "danger", "size", "full", "shape", "round", 3, "click"]], template: function UrbanDistributionDetailPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UrbanDistributionDetailPage_Template_ion_button_click_3_listener() { return ctx.dismiss(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "DETALLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-order-detail-map", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, UrbanDistributionDetailPage_div_9_Template, 24, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, UrbanDistributionDetailPage_ion_footer_10_Template, 4, 0, "ion-footer", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("order", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.status) != "delivered");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _components_order_detail_map_order_detail_map_component__WEBPACK_IMPORTED_MODULE_8__["OrderDetailMapComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-item-option[_ngcontent-%COMP%] {\n  --background: white;\n  --color: #000;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n.theme-dark[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: linear-gradient(180deg, #09152a 0%, #040a16 100%);\n}\n\n.theme-dark[_nghost-%COMP%]   ion-item-option[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-item-option[_ngcontent-%COMP%] {\n  --background: rgba(20, 36, 62, 0.92);\n  --color: #e6ecf9;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #0d1e38;\n  --color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3VyYmFuLWRpc3RyaWJ1dGlvbi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vdXJiYW4tZGlzdHJpYnV0aW9uLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLG1DQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FER0U7RUFDRSwrREFBQTtBQ0FKOztBREdFO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtBQ0RKOztBQTlCQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFpQ0YiLCJmaWxlIjoidXJiYW4tZGlzdHJpYnV0aW9uLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1ncmFkaWVudCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG5cbi5mb3JtLWdyb3VwIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlvbi1pdGVtLW9wdGlvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMwMDA7XG59XG5cbi5jdXN0b20tZGF0ZS1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDkxNTJhIDAlLCAjMDQwYTE2IDEwMCUpO1xuICB9XG5cbiAgaW9uLWl0ZW0tb3B0aW9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjAsIDM2LCA2MiwgMC45Mik7XG4gICAgLS1jb2xvcjogI2U2ZWNmOTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL3VyYmFuLWRpc3RyaWJ1dGlvbi5zY3NzXCI7XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMwZDFlMzg7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG4iXX0= */"] });


/***/ }),

/***/ "mz+P":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/urban-distributions/modal-edit-address/modal-edit-address.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ModalEditAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditAddressComponent", function() { return ModalEditAddressComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ModalEditAddressComponent {
    constructor(modalController, formBuilder) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            b: [''],
            s: [''],
            m: [''],
            c: ['']
        });
    }
    ngOnInit() {
    }
    dismiss(success) {
        this.modalController.dismiss({ success });
    }
}
ModalEditAddressComponent.ɵfac = function ModalEditAddressComponent_Factory(t) { return new (t || ModalEditAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ModalEditAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ModalEditAddressComponent, selectors: [["app-modal-edit-address"]], inputs: { order: "order" }, decls: 30, vars: 1, consts: [[3, "click"], ["name", "close", "slot", "icon-only"], [3, "formGroup"], ["size", "12"], ["type", "text", "formControlName", "address", "rows", "2"], ["size", "6"], ["type", "text", "formControlName", "b"], ["size", "2"], ["type", "text", "formControlName", "s"], ["type", "text", "formControlName", "m"], ["type", "text", "formControlName", "c"]], template: function ModalEditAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalEditAddressComponent_Template_ion_button_click_3_listener() { return ctx.dismiss(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Barrio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Sec");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Mz");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1lZGl0LWFkZHJlc3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);