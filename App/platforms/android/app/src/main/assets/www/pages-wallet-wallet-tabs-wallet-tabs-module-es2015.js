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
WalletTabsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalletTabsPage, selectors: [["app-wallet-tabs"]], decls: 17, vars: 0, consts: [["slot", "start"], ["autoHide", "false"], ["slot", "bottom", 1, "app-tab-bar"], ["tab", "wallet-transaction-list"], ["name", "list"], ["tab", "wallet-withdrawal-request-list"]], template: function WalletTabsPage_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\nion-tab-bar[_ngcontent-%COMP%] {\n  --background: var(--tab-bar-background);\n  --color: var(--tab-bar-color);\n  --color-selected: var(--tab-bar-color-selected);\n  box-shadow: 0 -4px 12px var(--tab-bar-shadow);\n}\n\nion-tab-button[_ngcontent-%COMP%]   .selected-tab-button[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vd2FsbGV0LXRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFDQSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBQWRBO0VBQ0UseUNBQUE7RUFDQSxtQ0FBQTtBQWlCRjs7QUFkQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUFpQkY7O0FBZEE7RUFDRSx1Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtBQWlCRjs7QUFkQTtFQUNFLHlCQUFBO0FBaUJGIiwiZmlsZSI6IndhbGxldC10YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWdyYWRpZW50KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9jdXN0b20tdGhlbWUuc2Nzc1wiO1xuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tdGFiLWJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdGFiLWJhci1iYWNrZ3JvdW5kKTtcbiAgLS1jb2xvcjogdmFyKC0tdGFiLWJhci1jb2xvcik7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXRhYi1iYXItY29sb3Itc2VsZWN0ZWQpO1xuICBib3gtc2hhZG93OiAwIC00cHggMTJweCB2YXIoLS10YWItYmFyLXNoYWRvdyk7XG59XG5cbmlvbi10YWItYnV0dG9uIC5zZWxlY3RlZC10YWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"] });


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