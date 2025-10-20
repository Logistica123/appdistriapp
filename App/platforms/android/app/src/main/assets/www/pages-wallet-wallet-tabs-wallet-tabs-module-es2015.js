(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-wallet-tabs-wallet-tabs-module"],{

/***/ "1YME":
/*!************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-tabs/wallet-tabs-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: WalletTabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletTabsPageRoutingModule", function() { return WalletTabsPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _wallet_tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-tabs.page */ "lywh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _wallet_tabs_page__WEBPACK_IMPORTED_MODULE_1__["WalletTabsPage"],
        children: [
            {
                path: 'wallet-transaction-list',
                loadChildren: () => Promise.all(/*! import() | wallet-transaction-list-wallet-transaction-list-module */[__webpack_require__.e("default~pages-wallet-wallet-withdrawal-request-form-wallet-withdrawal-request-form-module~wallet-tra~7a323ccd"), __webpack_require__.e("wallet-transaction-list-wallet-transaction-list-module")]).then(__webpack_require__.bind(null, /*! ../wallet-transaction-list/wallet-transaction-list.module */ "dmRS"))
                    .then(m => m.WalletTransactionListPageModule)
            },
            {
                path: 'wallet-withdrawal-request-list',
                loadChildren: () => Promise.all(/*! import() | wallet-withdrawal-request-list-wallet-withdrawal-request-list-module */[__webpack_require__.e("default~pages-wallet-wallet-withdrawal-request-form-wallet-withdrawal-request-form-module~wallet-tra~7a323ccd"), __webpack_require__.e("wallet-withdrawal-request-list-wallet-withdrawal-request-list-module")]).then(__webpack_require__.bind(null, /*! ../wallet-withdrawal-request-list/wallet-withdrawal-request-list.module */ "B7Px"))
                    .then(m => m.WalletWithdrawalRequestListPageModule)
            }
        ]
    }
];
class WalletTabsPageRoutingModule {
}
WalletTabsPageRoutingModule.ɵfac = function WalletTabsPageRoutingModule_Factory(t) { return new (t || WalletTabsPageRoutingModule)(); };
WalletTabsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WalletTabsPageRoutingModule });
WalletTabsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WalletTabsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "lywh":
/*!**************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-tabs/wallet-tabs.page.ts ***!
  \**************************************************************/
/*! exports provided: WalletTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletTabsPage", function() { return WalletTabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");


class WalletTabsPage {
    constructor() { }
    ngOnInit() {
    }
}
WalletTabsPage.ɵfac = function WalletTabsPage_Factory(t) { return new (t || WalletTabsPage)(); };
WalletTabsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalletTabsPage, selectors: [["app-wallet-tabs"]], decls: 17, vars: 0, consts: [["slot", "start"], ["autoHide", "false"], ["slot", "bottom"], ["tab", "wallet-transaction-list"], ["name", "list"], ["tab", "wallet-withdrawal-request-list"]], template: function WalletTabsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Billetera virtual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-tab-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-tab-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Transacciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-tab-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Solicitudes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n  font-family: NunitoSans, \"sans-serif\";\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n  font-family: NunitoSans, \"sans-serif\";\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\nion-tab-bar[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n}\n\nion-tab-button[_ngcontent-%COMP%] {\n  --color: #6e6f75;\n  --color-selected:#757dfb;\n}\n\nion-tab-button[_ngcontent-%COMP%]   .selected-tab-button[_ngcontent-%COMP%] {\n  --background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vd2FsbGV0LXRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FBZEE7RUFDRSxxQkFBQTtFQUNBLHFDQUFBO0FBaUJGOztBQWRBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBaUJGOztBQWRBO0VBQ0UscUJBQUE7QUFpQkY7O0FBZEE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FBaUJGOztBQWRBO0VBQ0UsbUJBQUE7QUFpQkYiLCJmaWxlIjoid2FsbGV0LXRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmN2Y4Zjk7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLCAnc2Fucy1zZXJpZic7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzU3ZGZiO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9jdXN0b20tdGhlbWUuc2Nzc1wiO1xuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmN2Y4Zjk7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLCAnc2Fucy1zZXJpZic7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzU3ZGZiO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRhYi1iYXIge1xuICAtLWJhY2tncm91bmQ6ICNmN2Y4Zjk7O1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICM2ZTZmNzU7XG4gIC0tY29sb3Itc2VsZWN0ZWQgOiM3NTdkZmI7XG59XG5cbmlvbi10YWItYnV0dG9uIC5zZWxlY3RlZC10YWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuXG4iXX0= */"] });


/***/ }),

/***/ "vqBG":
/*!****************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-tabs/wallet-tabs.module.ts ***!
  \****************************************************************/
/*! exports provided: WalletTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletTabsPageModule", function() { return WalletTabsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _wallet_tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-tabs-routing.module */ "1YME");
/* harmony import */ var _wallet_tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet-tabs.page */ "lywh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class WalletTabsPageModule {
}
WalletTabsPageModule.ɵfac = function WalletTabsPageModule_Factory(t) { return new (t || WalletTabsPageModule)(); };
WalletTabsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: WalletTabsPageModule });
WalletTabsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _wallet_tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalletTabsPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WalletTabsPageModule, { declarations: [_wallet_tabs_page__WEBPACK_IMPORTED_MODULE_4__["WalletTabsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _wallet_tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalletTabsPageRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-wallet-wallet-tabs-wallet-tabs-module-es2015.js.map