(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-data-profile-data-module"],{

/***/ "7BLZ":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/profile-data/profile-data.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDataPageModule", function() { return ProfileDataPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_data_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-data-routing.module */ "dZUx");
/* harmony import */ var _profile_data_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-data.page */ "tpv9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ProfileDataPageModule {
}
ProfileDataPageModule.ɵfac = function ProfileDataPageModule_Factory(t) { return new (t || ProfileDataPageModule)(); };
ProfileDataPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProfileDataPageModule });
ProfileDataPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _profile_data_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileDataPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileDataPageModule, { declarations: [_profile_data_page__WEBPACK_IMPORTED_MODULE_4__["ProfileDataPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _profile_data_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileDataPageRoutingModule"]] }); })();


/***/ }),

/***/ "dZUx":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/profile-data/profile-data-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileDataPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDataPageRoutingModule", function() { return ProfileDataPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-data.page */ "tpv9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _profile_data_page__WEBPACK_IMPORTED_MODULE_1__["ProfileDataPage"]
    }
];
class ProfileDataPageRoutingModule {
}
ProfileDataPageRoutingModule.ɵfac = function ProfileDataPageRoutingModule_Factory(t) { return new (t || ProfileDataPageRoutingModule)(); };
ProfileDataPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfileDataPageRoutingModule });
ProfileDataPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileDataPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "tpv9":
/*!*****************************************************************!*\
  !*** ./src/app/pages/profile/profile-data/profile-data.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDataPage", function() { return ProfileDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/v1/driver.service */ "rTgA");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _services_utils_image_picker_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/utils/image-picker.service */ "FtwJ");
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/loading-spinner/loading-spinner.component */ "nk+c");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/toast/toast.component */ "COqc");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_modals_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/modals/update-password/update-password.component */ "GMw2");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _profile_form_profile_form_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../profile-form/profile-form.page */ "UmaW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
























function ProfileDataPage_ion_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-progress-bar", 4);
} }
function ProfileDataPage_div_4_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProfileDataPage_div_4_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r6.pickImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function ProfileDataPage_div_4_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProfileDataPage_div_4_img_3_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r8.pickImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r3.filesSrc, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
} }
function ProfileDataPage_div_4_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProfileDataPage_div_4_img_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r10.pickImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r4.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
} }
function ProfileDataPage_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProfileDataPage_div_4_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r12.uploadFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Guardar nueva imagen de perfil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function ProfileDataPage_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ProfileDataPage_div_4_img_2_Template, 1, 0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ProfileDataPage_div_4_img_3_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ProfileDataPage_div_4_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, ProfileDataPage_div_4_div_5_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProfileDataPage_div_4_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r14.updatePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " Cambiar contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProfileDataPage_div_4_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r16.updateProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, " Editar informaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-grid", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, " Terceros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "ion-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function ProfileDataPage_div_4_Template_ion_toggle_ionChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r17.onToggleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " Empresa log\u00EDstica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ion-grid", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Ciudad");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "CBU");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "Titular");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "Empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, "Matr\u00EDcula");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55, "Distancia cubierta");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60, "Tiempo cubierto");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.filesSrc.length <= 0 && !(ctx_r1.driver == null ? null : ctx_r1.driver.has_profile_img));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.filesSrc.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.filesSrc.length <= 0 && (ctx_r1.driver == null ? null : ctx_r1.driver.has_profile_img) && ctx_r1.profileImg);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.filesSrc.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", (ctx_r1.driver == null ? null : ctx_r1.driver.contractor) === "logistic_company");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.driver == null ? null : ctx_r1.driver.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.driver == null ? null : ctx_r1.driver.phone_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((ctx_r1.driver == null ? null : ctx_r1.driver.bank_cbu) || "Sin registrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", (ctx_r1.driver == null ? null : ctx_r1.driver.bank_owner_is_driver) ? "Conductor" : (ctx_r1.driver == null ? null : ctx_r1.driver.bank_holder_name) || "No informado", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((ctx_r1.driver == null ? null : ctx_r1.driver.company) || "Sin registrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((ctx_r1.driver == null ? null : ctx_r1.driver.license_plate) || "Sin registrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r1.distance, " km.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r1.duration, " h.");
} }
class ProfileDataPage {
    constructor(driverService, storage, formBuilder, domSanitizer, http, alertController, imagePickerService, loadingSpinnerComponent, toastComponent, modalController) {
        this.driverService = driverService;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.domSanitizer = domSanitizer;
        this.http = http;
        this.alertController = alertController;
        this.imagePickerService = imagePickerService;
        this.loadingSpinnerComponent = loadingSpinnerComponent;
        this.toastComponent = toastComponent;
        this.modalController = modalController;
        this.files = [];
        this.filesSrc = [];
        this.filenames = [];
        this.loading = false;
        this.V1 = 'v1/app/';
        //
    }
    ngOnInit() {
        this.getProfile();
        this.storage.get('auth_token').then(authToken => {
            this.authToken = authToken;
        });
    }
    getProfile() {
        this.loading = true;
        this.driverService.getProfile()
            .subscribe((response) => {
            this.driver = response.driver;
            this.driverService.setDriver$(this.driver);
            this.distance = response.distance;
            this.duration = response.duration;
            if (this.driver.has_profile_img) {
                this.getProfileImage();
            }
        }, error => {
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    getProfileImage() {
        this.driverService.getProfileImage()
            .subscribe((blob) => {
            const objectURL = URL.createObjectURL(blob);
            this.profileImg = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
        });
    }
    updateProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _profile_form_profile_form_page__WEBPACK_IMPORTED_MODULE_12__["ProfileFormPage"],
                componentProps: { driver: this.driver },
                cssClass: 'profile-form-modal'
            });
            yield modal.present();
            modal.onDidDismiss().then(result => {
                var _a;
                if ((_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.success) {
                    this.getProfile();
                }
            });
        });
    }
    updatePassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_10__["UpdatePasswordComponent"],
                cssClass: 'modal-update-password'
            });
            yield modal.present();
            modal.onDidDismiss().then(result => {
                if (result && result.data && result.data.success) {
                    this.getProfile();
                }
            });
        });
    }
    pickImage() {
        const imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 70
        };
        this.imagePickerService.pickImages(imagePickerOptions).then(result => {
            this.files = result[0];
            this.filesSrc = result[1];
            this.filenames = result[2];
        }).catch(err => {
            this.toastComponent.presentToast(`No se pudo seleccionar la imagen, error: ${err}`, 'middle', 2500);
        });
    }
    uploadFile() {
        this.loadingSpinnerComponent.presentLoadingSpinner('guardando imagen').then(() => {
            const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].API_URL;
            const uri = encodeURI(`${API_URL}${this.V1}drivers/profile/image`);
            const headers = {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.authToken,
            };
            this.http.uploadFile(uri, null, headers, this.files[0], 'file')
                .then((data) => {
                this.loadingSpinnerComponent.dismissLoadingSpinner();
                this.filenames = [];
                this.filesSrc = [];
                this.files = [];
                this.getProfile();
            }).catch(err => {
                this.loadingSpinnerComponent.dismissLoadingSpinner();
                this.toastComponent.presentToast(`No se pudo guardar la imagen, error: ${JSON.stringify(err)}`, 'middle', 2500);
            });
        });
    }
    onToggleChange(ev) {
        console.log(ev.detail.checked);
        if (ev.detail.checked) {
            this.presentAlertConfirm();
        }
        else {
            this.updateDriverContractor(false);
        }
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmar',
                message: 'Por favor confirma que trabajas para una empresa de logística',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            this.updateDriverContractor(true);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateDriverContractor(hasContractor) {
        const body = {
            has_contractor: hasContractor
        };
        this.driverService.updateContractor(body)
            .subscribe((response) => {
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            this.getProfile();
            event.target.complete();
        }, 2000);
    }
}
ProfileDataPage.ɵfac = function ProfileDataPage_Factory(t) { return new (t || ProfileDataPage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_2__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_utils_image_picker_service__WEBPACK_IMPORTED_MODULE_6__["ImagePickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_8__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"])); };
ProfileDataPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: ProfileDataPage, selectors: [["app-profile-data"]], decls: 5, vars: 2, consts: [[1, "ion-text-center"], ["class", "ion-margin-top", "type", "indeterminate", 4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], [4, "ngIf"], ["type", "indeterminate", 1, "ion-margin-top"], [1, "ion-margin-top"], ["src", "assets/images/default_profile_img.png", "alt", "profile_img", 3, "click", 4, "ngIf"], ["alt", "profile_img", 3, "src", "click", 4, "ngIf"], ["class", "ion-text-center ion-margin", 4, "ngIf"], [1, "ion-text-center", "ion-margin"], [1, "update-password", "small", 3, "click"], [1, "contractor-toggle"], ["size", "4", 1, "ion-align-self-center"], ["size", "4"], ["color", "light", 3, "checked", "ionChange"], [1, "profile-data"], ["size", "6"], ["size", "6", 1, "break-word"], [1, "metric-card"], [1, "distance-value"], [1, "distance-text"], [1, "metric-card", "metric-card--alt"], ["src", "assets/images/default_profile_img.png", "alt", "profile_img", 3, "click"], ["alt", "profile_img", 3, "src", "click"], [1, "update-profile-image", "small", 3, "click"]], template: function ProfileDataPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProfileDataPage_ion_progress_bar_1_Template, 1, 0, "ion-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-refresher", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionRefresh", function ProfileDataPage_Template_ion_refresher_ionRefresh_2_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ProfileDataPage_div_4_Template, 61, 13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.driver);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["BooleanValueAccessor"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.contractor-toggle[_ngcontent-%COMP%] {\n  background: rgba(10, 31, 61, 0.85);\n  margin: 0 24px 12px;\n  border-radius: 18px;\n  color: #ffffff;\n  font-weight: bold;\n  box-shadow: 0 8px 20px rgba(10, 31, 61, 0.25);\n}\n\n.profile-data[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 15px;\n  border: 1px solid rgba(10, 31, 61, 0.12);\n  margin: 10px 16px 20px;\n  background: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 10px 30px rgba(10, 31, 61, 0.08);\n}\n\n.distance-value[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.8em;\n  font-weight: 700;\n  color: #ffffff;\n}\n\n.distance-text[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-top: 6px;\n  color: rgba(255, 255, 255, 0.75);\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 175px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 15px;\n}\n\n.update-profile-image[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  background-color: rgba(13, 43, 79, 0.25);\n  display: inline-block;\n  padding: 10px 30px;\n  border-radius: 20px;\n  margin: 0 auto;\n  font-weight: bold;\n  min-width: 75%;\n}\n\n.update-password[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  background-color: rgba(13, 43, 79, 0.25);\n  display: inline-block;\n  padding: 10px 30px;\n  border-radius: 20px;\n  margin: 0 auto;\n  font-weight: bold;\n  min-width: 75%;\n}\n\n.break-word[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n\n.metric-card[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #15518f 0%, #0a1f3d 100%);\n  margin: 12px 16px;\n  padding: 24px 12px;\n  border-radius: 20px;\n  text-align: center;\n  color: #ffffff;\n  box-shadow: 0 14px 30px rgba(10, 31, 61, 0.22);\n}\n\n.metric-card--alt[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #0a1f3d 0%, #050f1d 100%);\n}\n\nbody.theme-light[_nghost-%COMP%]   .contractor-toggle[_ngcontent-%COMP%], body.theme-light   [_nghost-%COMP%]   .contractor-toggle[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--app-text-color);\n  box-shadow: 0 8px 24px rgba(26, 38, 65, 0.12);\n  border: 1px solid rgba(26, 38, 65, 0.08);\n}\n\nbody.theme-light[_nghost-%COMP%]   .contractor-toggle[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%], body.theme-light   [_nghost-%COMP%]   .contractor-toggle[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%] {\n  --background: rgba(26, 38, 65, 0.08);\n  --background-checked: rgba(26, 73, 160, 0.25);\n  --handle-background: #ffffff;\n  --handle-background-checked: #1a49a0;\n}\n\nbody.theme-light[_nghost-%COMP%]   .profile-data[_ngcontent-%COMP%], body.theme-light   [_nghost-%COMP%]   .profile-data[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid rgba(26, 38, 65, 0.08);\n  box-shadow: 0 16px 32px rgba(26, 38, 65, 0.1);\n}\n\nbody.theme-light[_nghost-%COMP%]   .update-profile-image[_ngcontent-%COMP%], body.theme-light   [_nghost-%COMP%]   .update-profile-image[_ngcontent-%COMP%], body.theme-light[_nghost-%COMP%]   .update-password[_ngcontent-%COMP%], body.theme-light   [_nghost-%COMP%]   .update-password[_ngcontent-%COMP%] {\n  background-color: rgba(26, 73, 160, 0.12);\n  color: var(--app-text-color);\n}\n\nbody.theme-light[_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%], body.theme-light   [_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #e4efff 0%, #cfdcf7 100%);\n  color: var(--app-text-color);\n  box-shadow: 0 14px 32px rgba(26, 38, 65, 0.14);\n}\n\nbody.theme-light[_nghost-%COMP%]   .metric-card--alt[_ngcontent-%COMP%], body.theme-light   [_nghost-%COMP%]   .metric-card--alt[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fbe7d7 0%, #f3d3cd 100%);\n}\n\nbody.theme-light[_nghost-%COMP%]   .distance-value[_ngcontent-%COMP%], body.theme-light   [_nghost-%COMP%]   .distance-value[_ngcontent-%COMP%] {\n  color: var(--app-text-color);\n}\n\nbody.theme-light[_nghost-%COMP%]   .distance-text[_ngcontent-%COMP%], body.theme-light   [_nghost-%COMP%]   .distance-text[_ngcontent-%COMP%] {\n  color: rgba(26, 38, 65, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcHJvZmlsZS1kYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QUFiQTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBZ0JGOztBQWJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7QUFnQkY7O0FBYkE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFnQkY7O0FBYkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBZ0JGOztBQWJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUFnQkY7O0FBYkE7RUFDRSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWdCRjs7QUFiQTtFQUNFLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZ0JGOztBQWRBO0VBQ0UscUJBQUE7QUFpQkY7O0FBZEE7RUFDRSw2REFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0FBaUJGOztBQWRBO0VBQ0UsNkRBQUE7QUFpQkY7O0FBYkU7RUFDRSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkNBQUE7RUFDQSx3Q0FBQTtBQWdCSjs7QUFiRTtFQUNFLG9DQUFBO0VBQ0EsNkNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FBZUo7O0FBWkU7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNkNBQUE7QUFjSjs7QUFYRTs7RUFFRSx5Q0FBQTtFQUNBLDRCQUFBO0FBYUo7O0FBVkU7RUFDRSw2REFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7QUFZSjs7QUFURTtFQUNFLDZEQUFBO0FBV0o7O0FBUkU7RUFDRSw0QkFBQTtBQVVKOztBQVBFO0VBQ0UsNEJBQUE7QUFTSiIsImZpbGUiOiJwcm9maWxlLWRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9ybS1ncm91cCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzXCI7XG5cbi5jb250cmFjdG9yLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsIDMxLCA2MSwgMC44NSk7XG4gIG1hcmdpbjogMCAyNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDEwLCAzMSwgNjEsIDAuMjUpO1xufVxuXG4ucHJvZmlsZS1kYXRhIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMCwgMzEsIDYxLCAwLjEyKTtcbiAgbWFyZ2luOiAxMHB4IDE2cHggMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDEwLCAzMSwgNjEsIDAuMDgpO1xufVxuXG4uZGlzdGFuY2UtdmFsdWUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZGlzdGFuY2UtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnVwZGF0ZS1wcm9maWxlLWltYWdlIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgNDMsIDc5LCAwLjI1KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWluLXdpZHRoOiA3NSU7XG59XG5cbi51cGRhdGUtcGFzc3dvcmQge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCA0MywgNzksIDAuMjUpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtaW4td2lkdGg6IDc1JTtcbn1cbi5icmVhay13b3JkIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4ubWV0cmljLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMTU1MThmIDAlLCAjMGExZjNkIDEwMCUpO1xuICBtYXJnaW46IDEycHggMTZweDtcbiAgcGFkZGluZzogMjRweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDE0cHggMzBweCByZ2JhKDEwLCAzMSwgNjEsIDAuMjIpO1xufVxuXG4ubWV0cmljLWNhcmQtLWFsdCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwYTFmM2QgMCUsICMwNTBmMWQgMTAwJSk7XG59XG5cbjpob3N0LWNvbnRleHQoYm9keS50aGVtZS1saWdodCkge1xuICAuY29udHJhY3Rvci10b2dnbGUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XG4gICAgY29sb3I6IHZhcigtLWFwcC10ZXh0LWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMjYsIDM4LCA2NSwgMC4xMik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNiwgMzgsIDY1LCAwLjA4KTtcbiAgfVxuXG4gIC5jb250cmFjdG9yLXRvZ2dsZSBpb24tdG9nZ2xlIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjYsIDM4LCA2NSwgMC4wOCk7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEoMjYsIDczLCAxNjAsIDAuMjUpO1xuICAgIC0taGFuZGxlLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjMWE0OWEwO1xuICB9XG5cbiAgLnByb2ZpbGUtZGF0YSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI2LCAzOCwgNjUsIDAuMDgpO1xuICAgIGJveC1zaGFkb3c6IDAgMTZweCAzMnB4IHJnYmEoMjYsIDM4LCA2NSwgMC4xKTtcbiAgfVxuXG4gIC51cGRhdGUtcHJvZmlsZS1pbWFnZSxcbiAgLnVwZGF0ZS1wYXNzd29yZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgNzMsIDE2MCwgMC4xMik7XG4gICAgY29sb3I6IHZhcigtLWFwcC10ZXh0LWNvbG9yKTtcbiAgfVxuXG4gIC5tZXRyaWMtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2U0ZWZmZiAwJSwgI2NmZGNmNyAxMDAlKTtcbiAgICBjb2xvcjogdmFyKC0tYXBwLXRleHQtY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IDAgMTRweCAzMnB4IHJnYmEoMjYsIDM4LCA2NSwgMC4xNCk7XG4gIH1cblxuICAubWV0cmljLWNhcmQtLWFsdCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZiZTdkNyAwJSwgI2YzZDNjZCAxMDAlKTtcbiAgfVxuXG4gIC5kaXN0YW5jZS12YWx1ZSB7XG4gICAgY29sb3I6IHZhcigtLWFwcC10ZXh0LWNvbG9yKTtcbiAgfVxuXG4gIC5kaXN0YW5jZS10ZXh0IHtcbiAgICBjb2xvcjogcmdiYSgyNiwgMzgsIDY1LCAwLjcpO1xuICB9XG59XG4iXX0= */"] });


/***/ })

}]);