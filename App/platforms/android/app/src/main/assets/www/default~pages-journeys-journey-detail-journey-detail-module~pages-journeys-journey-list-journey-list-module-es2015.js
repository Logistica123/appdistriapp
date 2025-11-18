(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-journeys-journey-detail-journey-detail-module~pages-journeys-journey-list-journey-list-module"],{

/***/ "qGJ6":
/*!**********************************************************************!*\
  !*** ./src/app/pages/journeys/journey-detail/journey-detail.page.ts ***!
  \**********************************************************************/
/*! exports provided: JourneyDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyDetailPage", function() { return JourneyDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v1/order.service */ "EXzW");
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/loading-spinner/loading-spinner.component */ "nk+c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_order_detail_map_order_detail_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/order-detail-map/order-detail-map.component */ "+uyP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");












function JourneyDetailPage_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Direcci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Ciudad:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Not. ayuda para llegar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Horario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Tel\u00E9fonos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.order.location.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.order.location.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.order.location.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.order.location.notes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.order.location.opening_hours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.order.location.phones, " ");
} }
function JourneyDetailPage_ion_footer_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function JourneyDetailPage_ion_footer_9_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.presentDeleteLocationAlertConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " ELIMINAR DE MI HOJA DE RUTA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class JourneyDetailPage {
    constructor(orderService, loadingSpinnerComponent, router, alertController) {
        this.orderService = orderService;
        this.loadingSpinnerComponent = loadingSpinnerComponent;
        this.router = router;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.orderService.getCurrentOrder$().subscribe(order => {
            if (!order) {
                this.router.navigateByUrl('/');
            }
            else {
                this.order = order;
            }
        });
    }
    presentDeleteLocationAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Desea eliminar esta ubicación de sus viajes?',
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
    alertConfirm(status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const header = status === 'delivered' ? '¿Confirma que el paquete fue entregado?'
                : '¿Desea saltar la ubicación?';
            const alert = yield this.alertController.create({
                header,
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
                            this.setOrderStatus(status);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    setOrderStatus(status) {
        const body = {
            status
        };
        this.orderService.setOrderStatus(this.order, body)
            .subscribe((response) => {
            this.router.navigate(['journey-list']);
        }, error => {
            //
        }, () => {
            //
        });
    }
    deleteOrder() {
        this.orderService.deleteOrder(this.order)
            .subscribe((response) => {
            // this.orderService.setUpdatedOrders(true);
            this.router.navigate(['journey-list']);
        }, error => {
            //
        }, () => {
            //
        });
    }
}
JourneyDetailPage.ɵfac = function JourneyDetailPage_Factory(t) { return new (t || JourneyDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"])); };
JourneyDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: JourneyDetailPage, selectors: [["app-journey-detail"]], inputs: { order: "order" }, decls: 10, vars: 3, consts: [["slot", "end"], ["name", "close"], [3, "order"], ["class", "ion-padding", 4, "ngIf"], [4, "ngIf"], [1, "ion-padding"], [1, "ion-text-center", "location-name"], ["color", "light", "size", "full", "shape", "round", 3, "click"]], template: function JourneyDetailPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "DETALLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-order-detail-map", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, JourneyDetailPage_div_8_Template, 24, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, JourneyDetailPage_ion_footer_9_Template, 4, 0, "ion-footer", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("order", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.status) != "delivered");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _components_order_detail_map_order_detail_map_component__WEBPACK_IMPORTED_MODULE_6__["OrderDetailMapComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-item-option[_ngcontent-%COMP%] {\n  --background: white;\n  --color: #000;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n.theme-dark[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: linear-gradient(180deg, #09152a 0%, #040a16 100%);\n}\n\n.theme-dark[_nghost-%COMP%]   ion-item-option[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-item-option[_ngcontent-%COMP%] {\n  --background: rgba(20, 36, 62, 0.92);\n  --color: #e6ecf9;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3VyYmFuLWRpc3RyaWJ1dGlvbi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vam91cm5leS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFDQSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREdFO0VBQ0UsK0RBQUE7QUNBSjs7QURHRTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QUE5QkE7RUFDRSx5QkFBQTtBQWlDRiIsImZpbGUiOiJqb3VybmV5LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1ncmFkaWVudCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG5cbi5mb3JtLWdyb3VwIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlvbi1pdGVtLW9wdGlvbiB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMwMDA7XG59XG5cbi5jdXN0b20tZGF0ZS1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDkxNTJhIDAlLCAjMDQwYTE2IDEwMCUpO1xuICB9XG5cbiAgaW9uLWl0ZW0tb3B0aW9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjAsIDM2LCA2MiwgMC45Mik7XG4gICAgLS1jb2xvcjogI2U2ZWNmOTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL3VyYmFuLWRpc3RyaWJ1dGlvbi5zY3NzXCI7XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuIl19 */"] });


/***/ })

}]);