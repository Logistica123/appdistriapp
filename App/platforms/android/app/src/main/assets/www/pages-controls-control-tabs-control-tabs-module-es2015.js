(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-controls-control-tabs-control-tabs-module"],{

/***/ "1hd7":
/*!****************************************************************************!*\
  !*** ./src/app/pages/controls/control-tabs/control-tabs-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ControlTabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlTabsPageRoutingModule", function() { return ControlTabsPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _control_tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-tabs.page */ "2U7+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _control_tabs_page__WEBPACK_IMPORTED_MODULE_1__["ControlTabsPage"],
        children: [
            {
                path: 'operation-control',
                loadChildren: () => __webpack_require__.e(/*! import() | operation-controls-operation-control-list-operation-control-list-module */ "operation-controls-operation-control-list-operation-control-list-module").then(__webpack_require__.bind(null, /*! ../operation-controls/operation-control-list/operation-control-list.module */ "D4cX"))
                    .then(m => m.OperationControlListPageModule)
            },
            {
                path: 'fuel-control',
                loadChildren: () => __webpack_require__.e(/*! import() | fuel-controls-fuel-control-list-fuel-control-list-module */ "fuel-controls-fuel-control-list-fuel-control-list-module").then(__webpack_require__.bind(null, /*! ../fuel-controls/fuel-control-list/fuel-control-list.module */ "ltJ1"))
                    .then(m => m.FuelControlListPageModule)
            },
            {
                path: 'toll-control',
                loadChildren: () => Promise.all(/*! import() | toll-controls-toll-control-list-toll-control-list-module */[__webpack_require__.e("default~pages-controls-toll-controls-toll-control-form-toll-control-form-module~toll-controls-toll-c~db1b2e11"), __webpack_require__.e("toll-controls-toll-control-list-toll-control-list-module")]).then(__webpack_require__.bind(null, /*! ../toll-controls/toll-control-list/toll-control-list.module */ "a6+4"))
                    .then(m => m.TollControlListPageModule)
            }
        ]
    }
];
class ControlTabsPageRoutingModule {
}
ControlTabsPageRoutingModule.ɵfac = function ControlTabsPageRoutingModule_Factory(t) { return new (t || ControlTabsPageRoutingModule)(); };
ControlTabsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ControlTabsPageRoutingModule });
ControlTabsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ControlTabsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "2U7+":
/*!******************************************************************!*\
  !*** ./src/app/pages/controls/control-tabs/control-tabs.page.ts ***!
  \******************************************************************/
/*! exports provided: ControlTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlTabsPage", function() { return ControlTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popover_alert_popover_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../popover-alert/popover-alert.component */ "SsrU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ControlTabsPage {
    constructor(popoverController, modalController) {
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.message = '';
    }
    ngOnInit() {
        console.log('control-tabs');
        // this.showModal();
    }
    showModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _popover_alert_popover_alert_component__WEBPACK_IMPORTED_MODULE_2__["PopoverAlertComponent"],
                componentProps: { message: this.message },
                cssClass: 'modal-alert'
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log(data);
            if (!(data === null || data === void 0 ? void 0 : data.success)) {
            }
        });
    }
}
ControlTabsPage.ɵfac = function ControlTabsPage_Factory(t) { return new (t || ControlTabsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"])); };
ControlTabsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ControlTabsPage, selectors: [["app-control-tabs"]], decls: 21, vars: 0, consts: [[1, "ion-no-border"], ["slot", "start"], ["autoHide", "false"], ["slot", "bottom", 1, "app-tab-bar"], ["tab", "operation-control"], ["name", "clipboard"], ["tab", "fuel-control"], ["name", "color-fill"], ["tab", "toll-control"], ["name", "flag"]], template: function ControlTabsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-menu-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "CONTROLES");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-tab-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-tab-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Operativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-tab-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Combustible");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-tab-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Peaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\nion-tab-bar[_ngcontent-%COMP%] {\n  --background: var(--tab-bar-background);\n  --color: var(--tab-bar-color);\n  --color-selected: var(--tab-bar-color-selected);\n  box-shadow: 0 -4px 12px var(--tab-bar-shadow);\n}\n\nion-tab-button[_ngcontent-%COMP%]   .selected-tab-button[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbnRyb2wtdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRiIsImZpbGUiOiJjb250cm9sLXRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tdGFiLWJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdGFiLWJhci1iYWNrZ3JvdW5kKTtcbiAgLS1jb2xvcjogdmFyKC0tdGFiLWJhci1jb2xvcik7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXRhYi1iYXItY29sb3Itc2VsZWN0ZWQpO1xuICBib3gtc2hhZG93OiAwIC00cHggMTJweCB2YXIoLS10YWItYmFyLXNoYWRvdyk7XG59XG5cbmlvbi10YWItYnV0dG9uIC5zZWxlY3RlZC10YWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "SsrU":
/*!**********************************************************!*\
  !*** ./src/app/popover-alert/popover-alert.component.ts ***!
  \**********************************************************/
/*! exports provided: PopoverAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverAlertComponent", function() { return PopoverAlertComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PopoverAlertComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    dismiss() {
        this.modalController.dismiss();
    }
}
PopoverAlertComponent.ɵfac = function PopoverAlertComponent_Factory(t) { return new (t || PopoverAlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"])); };
PopoverAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopoverAlertComponent, selectors: [["app-popover-alert"]], inputs: { message: "message" }, decls: 16, vars: 1, consts: [["slot", "end"], ["slot", "icon-only", 3, "click"], ["name", "close", "color", "dark"]], template: function PopoverAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopoverAlertComponent_Template_ion_button_click_3_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aperiam consectetur dignissimos enim facilis fugiat id minima mollitia odit porro reprehenderit saepe sit, totam ullam velit veniam! Laborum, recusandae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque corporis cupiditate deleniti dolores eum harum ipsa ipsam molestias mollitia necessitatibus nulla pariatur ratione, rem sit ullam ut voluptas voluptate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aperiam consectetur dignissimos enim facilis fugiat id minima mollitia odit porro reprehenderit saepe sit, totam ullam velit veniam! Laborum, recusandae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque corporis cupiditate deleniti dolores eum harum ipsa ipsam molestias mollitia necessitatibus nulla pariatur ratione, rem sit ullam ut voluptas voluptate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWFsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "pvM4":
/*!********************************************************************!*\
  !*** ./src/app/pages/controls/control-tabs/control-tabs.module.ts ***!
  \********************************************************************/
/*! exports provided: ControlTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlTabsPageModule", function() { return ControlTabsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _control_tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-tabs-routing.module */ "1hd7");
/* harmony import */ var _control_tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-tabs.page */ "2U7+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ControlTabsPageModule {
}
ControlTabsPageModule.ɵfac = function ControlTabsPageModule_Factory(t) { return new (t || ControlTabsPageModule)(); };
ControlTabsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ControlTabsPageModule });
ControlTabsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _control_tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__["ControlTabsPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ControlTabsPageModule, { declarations: [_control_tabs_page__WEBPACK_IMPORTED_MODULE_4__["ControlTabsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _control_tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__["ControlTabsPageRoutingModule"]] }); })();


/***/ })

}]);