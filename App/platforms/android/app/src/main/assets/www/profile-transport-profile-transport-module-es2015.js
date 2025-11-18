(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-transport-profile-transport-module"],{

/***/ "0kHu":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/profile/profile-transport/profile-transport-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ProfileTransportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTransportPageRoutingModule", function() { return ProfileTransportPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_transport_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-transport.page */ "wU26");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _profile_transport_page__WEBPACK_IMPORTED_MODULE_1__["ProfileTransportPage"]
    }
];
class ProfileTransportPageRoutingModule {
}
ProfileTransportPageRoutingModule.ɵfac = function ProfileTransportPageRoutingModule_Factory(t) { return new (t || ProfileTransportPageRoutingModule)(); };
ProfileTransportPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfileTransportPageRoutingModule });
ProfileTransportPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileTransportPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wU26":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/profile-transport/profile-transport.page.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileTransportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTransportPage", function() { return ProfileTransportPage; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v1/driver.service */ "rTgA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






class ProfileTransportPage {
    constructor(formBuilder, driverService) {
        this.formBuilder = formBuilder;
        this.driverService = driverService;
        this.showInputErrorMessage = false;
        this.form = this.formBuilder.group({});
    }
    ngOnInit() {
        this.getDriver();
    }
    getDriver() {
        this.driverService.getDriver$()
            .subscribe((response) => {
            this.driver = response;
            this.setDriver();
        });
    }
    setDriver() {
        this.form.controls.car_make.setValue(this.driver.car_make);
        this.form.controls.car_model.setValue(this.driver.car_model);
        this.form.controls.tonnage.setValue(this.driver.tonnage);
        this.form.controls.license_plate.setValue(this.driver.license_plate);
    }
}
ProfileTransportPage.ɵfac = function ProfileTransportPage_Factory(t) { return new (t || ProfileTransportPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"])); };
ProfileTransportPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileTransportPage, selectors: [["app-profile-transport"]], decls: 1, vars: 0, template: function ProfileTransportPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-content");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcHJvZmlsZS10cmFuc3BvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFDQSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InByb2ZpbGUtdHJhbnNwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWdyYWRpZW50KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWdyYWRpZW50KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"] });


/***/ }),

/***/ "wg0U":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/profile-transport/profile-transport.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProfileTransportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTransportPageModule", function() { return ProfileTransportPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_transport_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-transport-routing.module */ "0kHu");
/* harmony import */ var _profile_transport_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-transport.page */ "wU26");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ProfileTransportPageModule {
}
ProfileTransportPageModule.ɵfac = function ProfileTransportPageModule_Factory(t) { return new (t || ProfileTransportPageModule)(); };
ProfileTransportPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProfileTransportPageModule });
ProfileTransportPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _profile_transport_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileTransportPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileTransportPageModule, { declarations: [_profile_transport_page__WEBPACK_IMPORTED_MODULE_4__["ProfileTransportPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _profile_transport_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileTransportPageRoutingModule"]] }); })();


/***/ })

}]);