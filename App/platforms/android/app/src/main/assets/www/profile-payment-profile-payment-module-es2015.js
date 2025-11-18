(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-payment-profile-payment-module"],{

/***/ "3CG7":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/profile-payment/profile-payment.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProfilePaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePaymentPageModule", function() { return ProfilePaymentPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-payment-routing.module */ "azce");
/* harmony import */ var _profile_payment_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-payment.page */ "uKBb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ProfilePaymentPageModule {
}
ProfilePaymentPageModule.ɵfac = function ProfilePaymentPageModule_Factory(t) { return new (t || ProfilePaymentPageModule)(); };
ProfilePaymentPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProfilePaymentPageModule });
ProfilePaymentPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _profile_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfilePaymentPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfilePaymentPageModule, { declarations: [_profile_payment_page__WEBPACK_IMPORTED_MODULE_4__["ProfilePaymentPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _profile_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfilePaymentPageRoutingModule"]] }); })();


/***/ }),

/***/ "I1Cc":
/*!*******************************************************!*\
  !*** ./src/app/services/v1/payment-method.service.ts ***!
  \*******************************************************/
/*! exports provided: PaymentMethodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodService", function() { return PaymentMethodService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class PaymentMethodService {
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.V1 = 'v1/app/';
        this.paymentMethods$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    /***********************************************************
     * Observables
     ***********************************************************/
    getPaymentMethods$() {
        if (this.paymentMethods$.getValue().length <= 0) {
            console.log('IS ZERO');
            return this.http.get(`${this.API_URL}${this.V1}payment-methods`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.payment_methods), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])({
                next: val => {
                    console.log('on next');
                    this.setPaymentMethods$(val);
                }
            }));
        }
        console.log('FROM CACHE!');
        return this.paymentMethods$.asObservable();
    }
    setPaymentMethods$(paymentMethods) {
        console.log('setting new data...');
        this.paymentMethods$.next(paymentMethods);
    }
}
PaymentMethodService.ɵfac = function PaymentMethodService_Factory(t) { return new (t || PaymentMethodService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PaymentMethodService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PaymentMethodService, factory: PaymentMethodService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "azce":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile/profile-payment/profile-payment-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfilePaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePaymentPageRoutingModule", function() { return ProfilePaymentPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-payment.page */ "uKBb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _profile_payment_page__WEBPACK_IMPORTED_MODULE_1__["ProfilePaymentPage"]
    }
];
class ProfilePaymentPageRoutingModule {
}
ProfilePaymentPageRoutingModule.ɵfac = function ProfilePaymentPageRoutingModule_Factory(t) { return new (t || ProfilePaymentPageRoutingModule)(); };
ProfilePaymentPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfilePaymentPageRoutingModule });
ProfilePaymentPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfilePaymentPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "uKBb":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/profile-payment/profile-payment.page.ts ***!
  \***********************************************************************/
/*! exports provided: ProfilePaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePaymentPage", function() { return ProfilePaymentPage; });
/* harmony import */ var _services_v1_payment_method_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/v1/payment-method.service */ "I1Cc");
/* harmony import */ var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v1/driver.service */ "rTgA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProfilePaymentPage_ion_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-progress-bar");
} }
function ProfilePaymentPage_ion_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function ProfilePaymentPage_ion_item_4_Template_ion_checkbox_ionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const paymentMethod_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.checkPaymentMethod($event, paymentMethod_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paymentMethod_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](paymentMethod_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "id-", paymentMethod_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", paymentMethod_r2.id);
} }
class ProfilePaymentPage {
    constructor(paymentMethodService, driverService) {
        this.paymentMethodService = paymentMethodService;
        this.driverService = driverService;
        this.paymentMethods = [];
        this.driverPaymentMethods = [];
        this.selectedPaymentMethods = [];
        this.loadingPaymentMethods = true;
        this.loadingDriverPaymentMethods = true;
    }
    ngOnInit() {
        this.getPaymentMethods();
    }
    getPaymentMethods() {
        this.loadingPaymentMethods = true;
        this.paymentMethodService.getPaymentMethods$()
            .subscribe((response) => {
            this.paymentMethods = response;
            this.getDriverPaymentMethods();
            this.loadingPaymentMethods = false;
        }, error => {
            this.loadingPaymentMethods = false;
        });
    }
    getDriverPaymentMethods() {
        this.loadingDriverPaymentMethods = true;
        this.driverService.getPaymentMethods()
            .subscribe((response) => {
            this.driverPaymentMethods = response.payment_methods;
            this.markCheckboxes();
        }, error => {
            this.loadingDriverPaymentMethods = false;
        });
    }
    markCheckboxes() {
        this.driverPaymentMethods.map(paymentMethod => {
            const checkbox = document.getElementById('id-' + paymentMethod.id);
            console.log(checkbox);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
        this.loadingDriverPaymentMethods = false;
    }
    checkPaymentMethod(ev, paymentMethod) {
        if (ev.detail.checked && this.selectedPaymentMethods.indexOf(paymentMethod.id) <= -1) {
            this.selectedPaymentMethods.push(paymentMethod.id);
        }
        if (!ev.detail.checked && this.selectedPaymentMethods.indexOf(paymentMethod.id) > -1) {
            this.selectedPaymentMethods.splice(this.selectedPaymentMethods.indexOf(paymentMethod.id), 1);
        }
        console.log(this.selectedPaymentMethods);
    }
    submit() {
        console.log(this.selectedPaymentMethods);
        const body = {
            payment_methods_ids: this.selectedPaymentMethods
        };
        this.driverService.updatePaymentMethods(body)
            .subscribe((response) => {
        });
    }
}
ProfilePaymentPage.ɵfac = function ProfilePaymentPage_Factory(t) { return new (t || ProfilePaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_v1_payment_method_service__WEBPACK_IMPORTED_MODULE_0__["PaymentMethodService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"])); };
ProfilePaymentPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfilePaymentPage, selectors: [["app-profile-payment"]], decls: 8, vars: 2, consts: [[1, "ion-padding"], [4, "ngIf"], ["lines", "none", "class", "transparent-ion-item", 4, "ngFor", "ngForOf"], [1, "ion-text-center", "ion-padding"], [1, "custom-button", 3, "click"], ["lines", "none", 1, "transparent-ion-item"], ["slot", "end", 3, "id", "value", "ionChange"]], template: function ProfilePaymentPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfilePaymentPage_ion_progress_bar_1_Template, 1, 0, "ion-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Modalidad de pago: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProfilePaymentPage_ion_item_4_Template, 4, 3, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfilePaymentPage_Template_ion_button_click_6_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Aceptar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadingPaymentMethods || ctx.loadingDriverPaymentMethods);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paymentMethods);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["BooleanValueAccessor"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcHJvZmlsZS1wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QUFiQTtFQUNFLHVCQUFBO0FBZ0JGIiwiZmlsZSI6InByb2ZpbGUtcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1ncmFkaWVudCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG5cbi5mb3JtLWdyb3VwIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvY3VzdG9tLXRoZW1lLnNjc3NcIjtcblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"] });


/***/ })

}]);