(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-transaction-list-wallet-transaction-list-module"],{

/***/ "5fqc":
/*!****************************************************!*\
  !*** ./src/app/services/v2/transaction.service.ts ***!
  \****************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TransactionService {
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.V1 = 'v2/app/';
    }
    getTransactions() {
        return this.http.get(`${this.API_URL}${this.V1}transactions`);
    }
    storeWithdrawalRequest(body) {
        return this.http.post(`${this.API_URL}${this.V1}transactions/withdrawal-request`, body);
    }
}
TransactionService.ɵfac = function TransactionService_Factory(t) { return new (t || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TransactionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TransactionService, factory: TransactionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "80r+":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-transaction-list/wallet-transaction-list.page.ts ***!
  \**************************************************************************************/
/*! exports provided: WalletTransactionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletTransactionListPage", function() { return WalletTransactionListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_v2_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v2/transaction.service */ "5fqc");
/* harmony import */ var _wallet_withdrawal_request_form_wallet_withdrawal_request_form_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wallet-withdrawal-request-form/wallet-withdrawal-request-form.page */ "X4me");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function WalletTransactionListPage_h1_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" $", ctx_r0.amount, " ");
} }
function WalletTransactionListPage_ion_progress_bar_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-progress-bar", 9);
} }
function WalletTransactionListPage_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", transaction_r3.type_es, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 4, transaction_r3.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 7, transaction_r3.amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transaction_r3.status_es);
} }
class WalletTransactionListPage {
    constructor(transactionService, modalController) {
        this.transactionService = transactionService;
        this.modalController = modalController;
        this.transactions = [];
        this.loading = true;
    }
    ngOnInit() {
        this.getTransactions();
    }
    getTransactions() {
        this.loading = true;
        this.transactionService.getTransactions()
            .subscribe((response) => {
            this.transactions = response.transactions;
            this.amount = response.amount;
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }
    addWithdrawalRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _wallet_withdrawal_request_form_wallet_withdrawal_request_form_page__WEBPACK_IMPORTED_MODULE_2__["WalletWithdrawalRequestFormPage"],
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data === null || data === void 0 ? void 0 : data.success) {
                this.getTransactions();
            }
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            this.getTransactions();
            event.target.complete();
        }, 2000);
    }
}
WalletTransactionListPage.ɵfac = function WalletTransactionListPage_Factory(t) { return new (t || WalletTransactionListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_v2_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"])); };
WalletTransactionListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WalletTransactionListPage, selectors: [["app-wallet-transaction-list"]], decls: 15, vars: 3, consts: [["slot", "start"], ["autoHide", "false"], ["class", "ion-text-right ion-padding-horizontal amount", 4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], [1, "ion-text-center", "ion-padding"], ["type", "indeterminate", 4, "ngIf"], [1, "custom-button", 3, "click"], ["class", "ion-margin-bottom", 4, "ngFor", "ngForOf"], [1, "ion-text-right", "ion-padding-horizontal", "amount"], ["type", "indeterminate"], [1, "ion-margin-bottom"], ["lines", "none"], ["size", "6"], [1, "ion-no-margin"]], template: function WalletTransactionListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-menu-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Billetera virtual");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, WalletTransactionListPage_h1_7_Template, 2, 1, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-refresher", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionRefresh", function WalletTransactionListPage_Template_ion_refresher_ionRefresh_8_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, WalletTransactionListPage_ion_progress_bar_11_Template, 1, 0, "ion-progress-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WalletTransactionListPage_Template_ion_button_click_12_listener() { return ctx.addWithdrawalRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Realizar solicitud ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, WalletTransactionListPage_div_14_Template, 19, 10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.transactions);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n  --background: #f4f5f8;\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  background: #f4f5f8;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.control-image[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 150px;\n  width: 100%;\n}\n\n.not-approved[_ngcontent-%COMP%] {\n  --background: #898989;\n  color: white;\n  box-shadow: none;\n}\n\n.approved[_ngcontent-%COMP%] {\n  --background: #c7f3cc;\n  color: black;\n  box-shadow: none;\n}\n\n.amount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  letter-spacing: 0.1em;\n  font-size: 2.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL29wZXJhdGlvbi1jb250cm9scy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vd2FsbGV0LXRyYW5zYWN0aW9uLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBQXJEQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQXdERiIsImZpbGUiOiJ3YWxsZXQtdHJhbnNhY3Rpb24tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWdyYWRpZW50KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4IGxpZ2h0Z3JleTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG5pb24taXRlbS1vcHRpb25zIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmN1c3RvbS1kYXRlLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udHJvbC1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm90LWFwcHJvdmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjODk4OTg5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogICNjN2YzY2M7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9vcGVyYXRpb24tY29udHJvbHMuc2Nzc1wiO1xuXG4uYW1vdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgZm9udC1zaXplOiAyLjJlbTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "b6nl":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-transaction-list/wallet-transaction-list-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: WalletTransactionListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletTransactionListPageRoutingModule", function() { return WalletTransactionListPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _wallet_transaction_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-transaction-list.page */ "80r+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _wallet_transaction_list_page__WEBPACK_IMPORTED_MODULE_1__["WalletTransactionListPage"]
    }
];
class WalletTransactionListPageRoutingModule {
}
WalletTransactionListPageRoutingModule.ɵfac = function WalletTransactionListPageRoutingModule_Factory(t) { return new (t || WalletTransactionListPageRoutingModule)(); };
WalletTransactionListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WalletTransactionListPageRoutingModule });
WalletTransactionListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WalletTransactionListPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "dmRS":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-transaction-list/wallet-transaction-list.module.ts ***!
  \****************************************************************************************/
/*! exports provided: WalletTransactionListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletTransactionListPageModule", function() { return WalletTransactionListPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _wallet_transaction_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-transaction-list-routing.module */ "b6nl");
/* harmony import */ var _wallet_transaction_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet-transaction-list.page */ "80r+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class WalletTransactionListPageModule {
}
WalletTransactionListPageModule.ɵfac = function WalletTransactionListPageModule_Factory(t) { return new (t || WalletTransactionListPageModule)(); };
WalletTransactionListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: WalletTransactionListPageModule });
WalletTransactionListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _wallet_transaction_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalletTransactionListPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WalletTransactionListPageModule, { declarations: [_wallet_transaction_list_page__WEBPACK_IMPORTED_MODULE_4__["WalletTransactionListPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _wallet_transaction_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalletTransactionListPageRoutingModule"]] }); })();


/***/ })

}]);