(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-withdrawal-request-list-wallet-withdrawal-request-list-module"],{

/***/ "3JoL":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-withdrawal-request-list/wallet-withdrawal-request-list.page.ts ***!
  \****************************************************************************************************/
/*! exports provided: WalletWithdrawalRequestListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletWithdrawalRequestListPage", function() { return WalletWithdrawalRequestListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_v1_withdrawal_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v1/withdrawal-request.service */ "7S1v");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _wallet_withdrawal_request_form_wallet_withdrawal_request_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wallet-withdrawal-request-form/wallet-withdrawal-request-form.page */ "X4me");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function WalletWithdrawalRequestListPage_ion_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-progress-bar", 4);
} }
function WalletWithdrawalRequestListPage_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-col", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-col", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const withdrawalRequest_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", withdrawalRequest_r2.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 4, withdrawalRequest_r2.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 7, withdrawalRequest_r2.amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", withdrawalRequest_r2.status, " ");
} }
class WalletWithdrawalRequestListPage {
    constructor(withdrawalRequestService, modalController) {
        this.withdrawalRequestService = withdrawalRequestService;
        this.modalController = modalController;
        this.withdrawalRequests = [];
        this.loading = true;
    }
    ngOnInit() {
        this.getWithdrawalRequest();
    }
    getWithdrawalRequest() {
        this.loading = true;
        this.withdrawalRequestService.getWithdrawalRequests()
            .subscribe((response) => {
            this.withdrawalRequests = response.withdrawal_requests;
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }
    addWithdrawalRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _wallet_withdrawal_request_form_wallet_withdrawal_request_form_page__WEBPACK_IMPORTED_MODULE_3__["WalletWithdrawalRequestFormPage"],
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data === null || data === void 0 ? void 0 : data.success) {
                this.getWithdrawalRequest();
            }
        });
    }
}
WalletWithdrawalRequestListPage.ɵfac = function WalletWithdrawalRequestListPage_Factory(t) { return new (t || WalletWithdrawalRequestListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_v1_withdrawal_request_service__WEBPACK_IMPORTED_MODULE_1__["WithdrawalRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"])); };
WalletWithdrawalRequestListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WalletWithdrawalRequestListPage, selectors: [["app-wallet-withdrawal-request-list"]], decls: 6, vars: 2, consts: [[1, "ion-text-center", "ion-padding"], ["type", "indeterminate", 4, "ngIf"], [1, "custom-button", 3, "click"], [4, "ngFor", "ngForOf"], ["type", "indeterminate"], ["lines", "none"], ["size", "6"], [1, "ion-no-margin"], ["size", "12"]], template: function WalletWithdrawalRequestListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WalletWithdrawalRequestListPage_ion_progress_bar_2_Template, 1, 0, "ion-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WalletWithdrawalRequestListPage_Template_ion_button_click_3_listener() { return ctx.addWithdrawalRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " AGREGAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, WalletWithdrawalRequestListPage_div_5_Template, 19, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.withdrawalRequests);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBadge"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n  --background: #f4f5f8;\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  background: #f4f5f8;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.control-image[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 150px;\n  width: 100%;\n}\n\n.not-approved[_ngcontent-%COMP%] {\n  --background: #898989;\n  color: white;\n  box-shadow: none;\n}\n\n.approved[_ngcontent-%COMP%] {\n  --background: #c7f3cc;\n  color: black;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL29wZXJhdGlvbi1jb250cm9scy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vd2FsbGV0LXdpdGhkcmF3YWwtcmVxdWVzdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJ3YWxsZXQtd2l0aGRyYXdhbC1yZXF1ZXN0LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1ncmFkaWVudCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgN3B4IDJweCBsaWdodGdyZXk7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuaW9uLWl0ZW0tb3B0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5jdXN0b20tZGF0ZS1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5mb3JtLWdyb3VwIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b3RhbCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRyb2wtaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vdC1hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogIzg5ODk4OTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYXBwcm92ZWQge1xuICAtLWJhY2tncm91bmQ6ICAjYzdmM2NjO1xuICBjb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWdyYWRpZW50KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4IGxpZ2h0Z3JleTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG5pb24taXRlbS1vcHRpb25zIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmN1c3RvbS1kYXRlLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udHJvbC1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm90LWFwcHJvdmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjODk4OTg5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogI2M3ZjNjYztcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ "B7Px":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-withdrawal-request-list/wallet-withdrawal-request-list.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: WalletWithdrawalRequestListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletWithdrawalRequestListPageModule", function() { return WalletWithdrawalRequestListPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _wallet_withdrawal_request_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-withdrawal-request-list-routing.module */ "slWN");
/* harmony import */ var _wallet_withdrawal_request_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet-withdrawal-request-list.page */ "3JoL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class WalletWithdrawalRequestListPageModule {
}
WalletWithdrawalRequestListPageModule.ɵfac = function WalletWithdrawalRequestListPageModule_Factory(t) { return new (t || WalletWithdrawalRequestListPageModule)(); };
WalletWithdrawalRequestListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: WalletWithdrawalRequestListPageModule });
WalletWithdrawalRequestListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _wallet_withdrawal_request_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalletWithdrawalRequestListPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WalletWithdrawalRequestListPageModule, { declarations: [_wallet_withdrawal_request_list_page__WEBPACK_IMPORTED_MODULE_4__["WalletWithdrawalRequestListPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _wallet_withdrawal_request_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalletWithdrawalRequestListPageRoutingModule"]] }); })();


/***/ }),

/***/ "slWN":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-withdrawal-request-list/wallet-withdrawal-request-list-routing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: WalletWithdrawalRequestListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletWithdrawalRequestListPageRoutingModule", function() { return WalletWithdrawalRequestListPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _wallet_withdrawal_request_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-withdrawal-request-list.page */ "3JoL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _wallet_withdrawal_request_list_page__WEBPACK_IMPORTED_MODULE_1__["WalletWithdrawalRequestListPage"]
    }
];
class WalletWithdrawalRequestListPageRoutingModule {
}
WalletWithdrawalRequestListPageRoutingModule.ɵfac = function WalletWithdrawalRequestListPageRoutingModule_Factory(t) { return new (t || WalletWithdrawalRequestListPageRoutingModule)(); };
WalletWithdrawalRequestListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WalletWithdrawalRequestListPageRoutingModule });
WalletWithdrawalRequestListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WalletWithdrawalRequestListPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);