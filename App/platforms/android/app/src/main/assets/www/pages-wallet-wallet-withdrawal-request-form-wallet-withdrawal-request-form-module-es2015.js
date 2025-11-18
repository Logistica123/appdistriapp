(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-wallet-withdrawal-request-form-wallet-withdrawal-request-form-module"],{

/***/ "dKNL":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-withdrawal-request-form/wallet-withdrawal-request-form.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: WalletWithdrawalRequestFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletWithdrawalRequestFormPageModule", function() { return WalletWithdrawalRequestFormPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _wallet_withdrawal_request_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-withdrawal-request-form-routing.module */ "wV06");
/* harmony import */ var _wallet_withdrawal_request_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet-withdrawal-request-form.page */ "X4me");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class WalletWithdrawalRequestFormPageModule {
}
WalletWithdrawalRequestFormPageModule.ɵfac = function WalletWithdrawalRequestFormPageModule_Factory(t) { return new (t || WalletWithdrawalRequestFormPageModule)(); };
WalletWithdrawalRequestFormPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: WalletWithdrawalRequestFormPageModule });
WalletWithdrawalRequestFormPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _wallet_withdrawal_request_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalletWithdrawalRequestFormPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WalletWithdrawalRequestFormPageModule, { declarations: [_wallet_withdrawal_request_form_page__WEBPACK_IMPORTED_MODULE_4__["WalletWithdrawalRequestFormPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _wallet_withdrawal_request_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalletWithdrawalRequestFormPageRoutingModule"]] }); })();


/***/ }),

/***/ "wV06":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-withdrawal-request-form/wallet-withdrawal-request-form-routing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: WalletWithdrawalRequestFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletWithdrawalRequestFormPageRoutingModule", function() { return WalletWithdrawalRequestFormPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _wallet_withdrawal_request_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-withdrawal-request-form.page */ "X4me");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _wallet_withdrawal_request_form_page__WEBPACK_IMPORTED_MODULE_1__["WalletWithdrawalRequestFormPage"]
    }
];
class WalletWithdrawalRequestFormPageRoutingModule {
}
WalletWithdrawalRequestFormPageRoutingModule.ɵfac = function WalletWithdrawalRequestFormPageRoutingModule_Factory(t) { return new (t || WalletWithdrawalRequestFormPageRoutingModule)(); };
WalletWithdrawalRequestFormPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WalletWithdrawalRequestFormPageRoutingModule });
WalletWithdrawalRequestFormPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WalletWithdrawalRequestFormPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);