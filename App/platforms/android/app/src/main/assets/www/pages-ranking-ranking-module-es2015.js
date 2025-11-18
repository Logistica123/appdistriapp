(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ranking-ranking-module"],{

/***/ "97Bw":
/*!*************************************************!*\
  !*** ./src/app/pages/ranking/ranking.module.ts ***!
  \*************************************************/
/*! exports provided: RankingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingPageModule", function() { return RankingPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ranking_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ranking-routing.module */ "IEeq");
/* harmony import */ var _ranking_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ranking.page */ "tdSZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class RankingPageModule {
}
RankingPageModule.ɵfac = function RankingPageModule_Factory(t) { return new (t || RankingPageModule)(); };
RankingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RankingPageModule });
RankingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _ranking_routing_module__WEBPACK_IMPORTED_MODULE_3__["RankingPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RankingPageModule, { declarations: [_ranking_page__WEBPACK_IMPORTED_MODULE_4__["RankingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _ranking_routing_module__WEBPACK_IMPORTED_MODULE_3__["RankingPageRoutingModule"]] }); })();


/***/ }),

/***/ "IEeq":
/*!*********************************************************!*\
  !*** ./src/app/pages/ranking/ranking-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: RankingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingPageRoutingModule", function() { return RankingPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ranking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ranking.page */ "tdSZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _ranking_page__WEBPACK_IMPORTED_MODULE_1__["RankingPage"]
    }
];
class RankingPageRoutingModule {
}
RankingPageRoutingModule.ɵfac = function RankingPageRoutingModule_Factory(t) { return new (t || RankingPageRoutingModule)(); };
RankingPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RankingPageRoutingModule });
RankingPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RankingPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "tdSZ":
/*!***********************************************!*\
  !*** ./src/app/pages/ranking/ranking.page.ts ***!
  \***********************************************/
/*! exports provided: RankingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingPage", function() { return RankingPage; });
/* harmony import */ var _services_v2_driver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/v2/driver.service */ "5YAf");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RankingPage_ion_content_6_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.podium1ProfileImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RankingPage_ion_content_6_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 14);
} }
function RankingPage_ion_content_6_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.podium0ProfileImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RankingPage_ion_content_6_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 14);
} }
function RankingPage_ion_content_6_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r5.podium2ProfileImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RankingPage_ion_content_6_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 14);
} }
function RankingPage_ion_content_6_ion_list_28_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("--animation-order", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", driver_r9.full_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", driver_r9.score, " ");
} }
function RankingPage_ion_content_6_ion_list_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RankingPage_ion_content_6_ion_list_28_ion_item_1_Template, 9, 4, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.list);
} }
function RankingPage_ion_content_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-refresher", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionRefresh", function RankingPage_ion_content_6_Template_ion_refresher_ionRefresh_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.doRefresh($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-refresher-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RankingPage_ion_content_6_img_6_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RankingPage_ion_content_6_img_7_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RankingPage_ion_content_6_img_15_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RankingPage_ion_content_6_img_16_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, RankingPage_ion_content_6_img_22_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, RankingPage_ion_content_6_img_23_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, RankingPage_ion_content_6_ion_list_28_Template, 2, 1, "ion-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.podium1ProfileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.podium1ProfileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.podium[1] == null ? null : ctx_r0.podium[1].score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.podium[1] == null ? null : ctx_r0.podium[1].full_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.podium0ProfileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.podium0ProfileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.podium[0] == null ? null : ctx_r0.podium[0].score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.podium[0] == null ? null : ctx_r0.podium[0].full_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.podium2ProfileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.podium2ProfileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.podium[2] == null ? null : ctx_r0.podium[2].score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.podium[2] == null ? null : ctx_r0.podium[2].full_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.list.length > 0);
} }
class RankingPage {
    constructor(driverService, domSanitizer) {
        this.driverService = driverService;
        this.domSanitizer = domSanitizer;
        this.drivers = [];
        this.podium = [];
        this.list = [];
        this.loading = true;
    }
    ngOnInit() {
        //
    }
    ngAfterViewInit() {
        this.getRanking();
    }
    getRanking() {
        this.loading = true;
        this.driverService.getRanking()
            .subscribe((response) => {
            this.drivers = response.drivers;
            this.podium = response.podium;
            this.list = response.list;
            if (this.podium.length >= 1) {
                this.getPodium0DriverProfileImage(this.podium[0]);
            }
            if (this.podium.length >= 2) {
                this.getPodium1DriverProfileImage(this.podium[1]);
            }
            if (this.podium.length >= 3) {
                this.getPodium2DriverProfileImage(this.podium[2]);
            }
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }
    getPodium0DriverProfileImage(driver) {
        if (!(driver === null || driver === void 0 ? void 0 : driver.has_profile_img)) {
            this.podium0ProfileImage = null;
            return;
        }
        this.driverService.getDriverProfileImage(driver)
            .subscribe((blob) => {
            const objectURL = URL.createObjectURL(blob);
            this.podium0ProfileImage = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
        });
    }
    getPodium1DriverProfileImage(driver) {
        if (!(driver === null || driver === void 0 ? void 0 : driver.has_profile_img)) {
            this.podium1ProfileImage = null;
            return;
        }
        this.driverService.getDriverProfileImage(driver)
            .subscribe((blob) => {
            const objectURL = URL.createObjectURL(blob);
            this.podium1ProfileImage = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
        });
    }
    getPodium2DriverProfileImage(driver) {
        if (!(driver === null || driver === void 0 ? void 0 : driver.has_profile_img)) {
            this.podium2ProfileImage = null;
            return;
        }
        this.driverService.getDriverProfileImage(driver)
            .subscribe((blob) => {
            const objectURL = URL.createObjectURL(blob);
            this.podium2ProfileImage = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            this.getRanking();
            event.target.complete();
        }, 2000);
    }
}
RankingPage.ɵfac = function RankingPage_Factory(t) { return new (t || RankingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_v2_driver_service__WEBPACK_IMPORTED_MODULE_0__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
RankingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RankingPage, selectors: [["app-ranking"]], decls: 7, vars: 1, consts: [[1, "ion-no-border"], ["slot", "start"], ["autoHide", "false"], [4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], ["size", "4", 1, "ion-text-center", "mt-80"], ["alt", "", 3, "src", 4, "ngIf"], ["src", "assets/distriapplogo-cropped.png", "alt", "DistriApp", 4, "ngIf"], [1, "podium-driver-score"], [1, "ion-no-margin", "driver-podium-name"], ["size", "4", 1, "ion-text-center"], ["src", "assets/images/crown.png", "alt", "", 1, "crown"], ["lines", "none", 4, "ngIf"], ["alt", "", 3, "src"], ["src", "assets/distriapplogo-cropped.png", "alt", "DistriApp"], ["lines", "none"], [3, "--animation-order", 4, "ngFor", "ngForOf"], [1, "ion-align-self-center"], [1, "driver-name"], ["size", "3", 1, "ion-text-right", "ion-align-self-center"], [1, "driver-score"]], template: function RankingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "RANKING");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RankingPage_ion_content_6_Template, 29, 13, "ion-content", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --border-style: none;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.crown[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n}\n\n.podium-driver-score[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--app-text-color);\n  font-size: 1.3em;\n}\n\n.mt-80[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n\n.list-place[_ngcontent-%COMP%] {\n  padding: 1px 20px;\n  margin: 10px;\n  border-radius: 50px;\n  background: rgba(10, 31, 61, 0.75);\n  color: #ffffff;\n}\n\nion-item[_ngcontent-%COMP%] {\n  animation: popIn 0.2s calc(var(--animation-order) * 200ms) both ease-in;\n}\n\n@keyframes popIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.6) translateY(-8px);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.driver-podium-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--app-text-color);\n}\n\n.driver-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--app-text-color);\n}\n\n.driver-place[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #1a49a0;\n  padding: 10px;\n  border-radius: 50%;\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.driver-score[_ngcontent-%COMP%] {\n  color: #139013;\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\n.podium-score[_ngcontent-%COMP%] {\n  --padding-bottom: 15px;\n  --padding-top: 15px;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  border-radius: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vcmFua2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLG1DQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FBYkE7RUFDRSxpQ0FBQTtBQWdCRjs7QUFiQTtFQUNFLG9CQUFBO0FBZ0JGOztBQWJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFnQkY7O0FBYkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWdCRjs7QUFiQTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQWdCRjs7QUFiQTtFQUNFLGdCQUFBO0FBZ0JGOztBQWJBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUFnQkY7O0FBYkE7RUFDRSx1RUFBQTtBQWdCRjs7QUFiQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHNDQUFBO0VBZ0JGO0VBYkE7SUFDRSxVQUFBO0lBQ0EsZUFBQTtFQWVGO0FBQ0Y7O0FBWkE7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0FBY0Y7O0FBWEE7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0FBY0Y7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBY0Y7O0FBWEE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWNGOztBQVhBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWNGIiwiZmlsZSI6InJhbmtpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9ybS1ncm91cCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzXCI7XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY3Jvd24ge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ucG9kaXVtLWRyaXZlci1zY29yZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tYXBwLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4ubXQtODAge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4ubGlzdC1wbGFjZSB7XG4gIHBhZGRpbmc6IDFweCAyMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsIDMxLCA2MSwgMC43NSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24taXRlbSB7XG4gIGFuaW1hdGlvbjogcG9wSW4gMC4ycyBjYWxjKHZhcigtLWFuaW1hdGlvbi1vcmRlcikgKiAyMDBtcykgYm90aCBlYXNlLWluO1xufVxuXG5Aa2V5ZnJhbWVzIHBvcEluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoLThweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uZHJpdmVyLXBvZGl1bS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1hcHAtdGV4dC1jb2xvcik7XG59XG5cbi5kcml2ZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tYXBwLXRleHQtY29sb3IpO1xufVxuXG4uZHJpdmVyLXBsYWNlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMWE0OWEwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRyaXZlci1zY29yZSB7XG4gIGNvbG9yOiAjMTM5MDEzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLnBvZGl1bS1zY29yZSB7XG4gIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIC0tcGFkZGluZy10b3A6IDE1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbn1cbiJdfQ== */"] });


/***/ })

}]);