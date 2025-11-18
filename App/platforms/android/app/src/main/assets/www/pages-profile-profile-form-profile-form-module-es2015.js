(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-form-profile-form-module"],{

/***/ "SjJ5":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/profile-form/profile-form-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormPageRoutingModule", function() { return ProfileFormPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-form.page */ "UmaW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _profile_form_page__WEBPACK_IMPORTED_MODULE_1__["ProfileFormPage"]
    }
];
class ProfileFormPageRoutingModule {
}
ProfileFormPageRoutingModule.ɵfac = function ProfileFormPageRoutingModule_Factory(t) { return new (t || ProfileFormPageRoutingModule)(); };
ProfileFormPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfileFormPageRoutingModule });
ProfileFormPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileFormPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "T5eD":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/profile-form/profile-form.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormPageModule", function() { return ProfileFormPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-form-routing.module */ "SjJ5");
/* harmony import */ var _profile_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-form.page */ "UmaW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ProfileFormPageModule {
}
ProfileFormPageModule.ɵfac = function ProfileFormPageModule_Factory(t) { return new (t || ProfileFormPageModule)(); };
ProfileFormPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProfileFormPageModule });
ProfileFormPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _profile_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileFormPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileFormPageModule, { declarations: [_profile_form_page__WEBPACK_IMPORTED_MODULE_4__["ProfileFormPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _profile_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileFormPageRoutingModule"]] }); })();


/***/ })

}]);