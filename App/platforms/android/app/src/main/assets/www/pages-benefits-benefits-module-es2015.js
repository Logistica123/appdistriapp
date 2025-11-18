(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-benefits-benefits-module"],{

/***/ "JCM0":
/*!*************************************************!*\
  !*** ./src/app/pages/benefits/benefits.page.ts ***!
  \*************************************************/
/*! exports provided: BenefitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsPage", function() { return BenefitsPage; });
/* harmony import */ var _services_v1_benefit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/v1/benefit.service */ "bqjF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function BenefitsPage_section_10_ion_slide_2_ion_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const benefit_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r5.meta == null ? null : benefit_r5.meta.badge);
} }
function BenefitsPage_section_10_ion_slide_2_ion_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BenefitsPage_section_10_ion_slide_2_ion_button_9_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const benefit_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.openBenefitLink(benefit_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const benefit_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", benefit_r5.cta_label, " ");
} }
function BenefitsPage_section_10_ion_slide_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BenefitsPage_section_10_ion_slide_2_ion_chip_4_Template, 3, 1, "ion-chip", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BenefitsPage_section_10_ion_slide_2_ion_button_9_Template, 3, 1, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const benefit_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r4.getAnimationClass(benefit_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-media", benefit_r5.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r4.getBackgroundStyle(benefit_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", benefit_r5.meta == null ? null : benefit_r5.meta.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r5.short_description || benefit_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", benefit_r5.cta_label);
} }
function BenefitsPage_section_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slides", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BenefitsPage_section_10_ion_slide_2_Template, 10, 8, "ion-slide", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.heroSlideOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.heroBenefits);
} }
function BenefitsPage_section_11_ion_col_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const benefit_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", benefit_r14.meta == null ? null : benefit_r14.meta.icon);
} }
function BenefitsPage_section_11_ion_col_8_ion_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BenefitsPage_section_11_ion_col_8_ion_button_9_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const benefit_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.openBenefitLink(benefit_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const benefit_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", benefit_r14.cta_label, " ");
} }
function BenefitsPage_section_11_ion_col_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BenefitsPage_section_11_ion_col_8_div_4_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BenefitsPage_section_11_ion_col_8_ion_button_9_Template, 3, 1, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const benefit_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r13.getAnimationClass(benefit_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r13.getBackgroundStyle(benefit_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r13.getAccentStyle(benefit_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", benefit_r14.meta == null ? null : benefit_r14.meta.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r14.short_description || benefit_r14.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", benefit_r14.cta_label);
} }
function BenefitsPage_section_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mov\u00E9 tu energ\u00EDa con beneficios reales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Promos pensadas para gasificar tu operaci\u00F3n y sumar potencia a cada kil\u00F3metro.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BenefitsPage_section_11_ion_col_8_Template, 10, 7, "ion-col", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.highlightBenefits);
} }
function BenefitsPage_section_12_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const benefit_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r24.getAccentStyle(benefit_r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", benefit_r23.meta == null ? null : benefit_r23.meta.badge, " ");
} }
function BenefitsPage_section_12_div_7_ion_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BenefitsPage_section_12_div_7_ion_button_7_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const benefit_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.openBenefitLink(benefit_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const benefit_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", benefit_r23.cta_label, " ");
} }
function BenefitsPage_section_12_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BenefitsPage_section_12_div_7_div_2_Template, 2, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BenefitsPage_section_12_div_7_ion_button_7_Template, 2, 1, "ion-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const benefit_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r22.getBackgroundStyle(benefit_r23))("ngClass", ctx_r22.getAnimationClass(benefit_r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", benefit_r23.meta == null ? null : benefit_r23.meta.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r23.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r23.short_description || benefit_r23.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", benefit_r23.cta_label);
} }
function BenefitsPage_section_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Experiencias dise\u00F1adas para conductores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Eleg\u00ED tu pr\u00F3xima ventaja y hac\u00E9 crecer tu operaci\u00F3n con aliados estrat\u00E9gicos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BenefitsPage_section_12_div_7_Template, 8, 6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.featureBenefits);
} }
function BenefitsPage_section_13_ion_col_8_ion_card_subtitle_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const benefit_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r32.meta == null ? null : benefit_r32.meta.badge);
} }
function BenefitsPage_section_13_ion_col_8_ion_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BenefitsPage_section_13_ion_col_8_ion_button_10_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const benefit_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r36.openBenefitLink(benefit_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const benefit_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", benefit_r32.cta_label, " ");
} }
function BenefitsPage_section_13_ion_col_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BenefitsPage_section_13_ion_col_8_ion_card_subtitle_4_Template, 2, 1, "ion-card-subtitle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BenefitsPage_section_13_ion_col_8_ion_button_10_Template, 2, 1, "ion-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const benefit_r32 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r31.getAnimationClass(benefit_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r31.getBackgroundStyle(benefit_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", benefit_r32.meta == null ? null : benefit_r32.meta.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r32.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r32.short_description || benefit_r32.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", benefit_r32.cta_label);
} }
function BenefitsPage_section_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Explor\u00E1 la red de aliados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sum\u00E1 puntos, canje\u00E1 premios y manten\u00E9 tu flota siempre lista.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-grid", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BenefitsPage_section_13_ion_col_8_Template, 11, 6, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.cardBenefits);
} }
class BenefitsPage {
    constructor(benefitService) {
        this.benefitService = benefitService;
        this.loading = true;
        this.heroBenefits = [];
        this.highlightBenefits = [];
        this.featureBenefits = [];
        this.cardBenefits = [];
        this.heroSlideOptions = {
            autoplay: {
                delay: 5500,
                disableOnInteraction: false
            },
            loop: true,
            speed: 800,
            slidesPerView: 1,
            spaceBetween: 16
        };
        this.fallbackBenefits = [
            {
                id: -1,
                title: 'Póliza integral de seguros',
                short_description: 'Protegé tu flota con cobertura a medida y asistencia 24/7 pensada para choferes urbanos.',
                description: 'Gestión express desde la app, seguimiento en tiempo real y asesoramiento personalizado para cada unidad.',
                type: 'hero',
                cta_label: 'Cotizar ahora',
                cta_url: 'https://logistica.argentina/seguros',
                meta: {
                    backgroundColor: 'linear-gradient(135deg, #051937 0%, #0a3a62 48%, #1280b0 100%)',
                    badge: 'Cobertura total',
                    animation: 'slide-in'
                }
            },
            {
                id: -2,
                title: 'Descuentos en combustible',
                short_description: 'Ahorrá hasta un 18% cargando en estaciones aliadas y acumulá litros para tu ranking.',
                type: 'highlight',
                cta_label: 'Ver estaciones adheridas',
                cta_url: 'https://logistica.argentina/combustible',
                meta: {
                    backgroundColor: 'linear-gradient(135deg, #102a43 0%, #1a3d5c 100%)',
                    accentColor: '#38f08e',
                    badge: 'Gasificá tu ruta',
                    icon: 'flame-outline'
                }
            },
            {
                id: -3,
                title: 'Programa de compras al por mayor',
                short_description: 'Accedé a descuentos exclusivos en lubricantes, cubiertas y accesorios homologados.',
                type: 'feature',
                cta_label: 'Explorar catálogo',
                cta_url: 'https://logistica.argentina/compras',
                meta: {
                    backgroundColor: 'linear-gradient(135deg, #1f365c 0%, #274a78 100%)',
                    accentColor: '#ffb703',
                    icon: 'cart-outline'
                }
            },
            {
                id: -4,
                title: 'Club de beneficios Logística',
                short_description: 'Inscribite gratis y sumá experiencias, capacitaciones y sorpresas para todo tu equipo.',
                type: 'card',
                cta_label: 'Sumarme al club',
                cta_url: 'https://logistica.argentina/club',
                meta: {
                    backgroundColor: 'linear-gradient(160deg, #211e4f 0%, #2f3275 100%)',
                    accentColor: '#ff6f61',
                    badge: 'Exclusivo drivers'
                }
            },
        ];
    }
    ngOnInit() {
        this.loadBenefits();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    doRefresh(event) {
        this.loadBenefits(() => event.target.complete());
    }
    loadBenefits(onComplete) {
        this.loading = true;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription = this.benefitService.list().subscribe({
            next: (response) => {
                this.assignBenefits(response);
                this.loading = false;
                if (onComplete) {
                    onComplete();
                }
            },
            error: () => {
                this.useFallback();
                this.loading = false;
                if (onComplete) {
                    onComplete();
                }
            }
        });
    }
    assignBenefits(response) {
        const benefits = response.benefits || [];
        if (!benefits.length) {
            this.useFallback();
            return;
        }
        const categorized = this.categorizeBenefits(benefits);
        this.heroBenefits = categorized.hero.length ? categorized.hero : this.fallbackOfType('hero');
        this.highlightBenefits = categorized.highlight.length ? categorized.highlight : this.fallbackOfType('highlight');
        this.featureBenefits = categorized.feature.length ? categorized.feature : this.fallbackOfType('feature');
        this.cardBenefits = categorized.card.length ? categorized.card : this.fallbackOfType('card');
    }
    useFallback() {
        const categorized = this.categorizeBenefits(this.fallbackBenefits);
        this.heroBenefits = categorized.hero;
        this.highlightBenefits = categorized.highlight;
        this.featureBenefits = categorized.feature;
        this.cardBenefits = categorized.card;
    }
    categorizeBenefits(list) {
        const hero = [];
        const highlight = [];
        const feature = [];
        const card = [];
        list.forEach(item => {
            switch (item.type) {
                case 'hero':
                    hero.push(item);
                    break;
                case 'highlight':
                    highlight.push(item);
                    break;
                case 'feature':
                    feature.push(item);
                    break;
                case 'card':
                default:
                    card.push(item);
                    break;
            }
        });
        hero.sort(this.sortByPosition);
        highlight.sort(this.sortByPosition);
        feature.sort(this.sortByPosition);
        card.sort(this.sortByPosition);
        return { hero, highlight, feature, card };
    }
    fallbackOfType(type) {
        return this.fallbackBenefits.filter(item => item.type === type);
    }
    sortByPosition(a, b) {
        var _a, _b, _c, _d;
        const positionA = (_a = a.position) !== null && _a !== void 0 ? _a : 0;
        const positionB = (_b = b.position) !== null && _b !== void 0 ? _b : 0;
        if (positionA === positionB) {
            return ((_c = a.id) !== null && _c !== void 0 ? _c : 0) - ((_d = b.id) !== null && _d !== void 0 ? _d : 0);
        }
        return positionA - positionB;
    }
    getBackgroundStyle(benefit) {
        var _a;
        const style = {};
        if (benefit.image_url) {
            style['backgroundImage'] = `url(${benefit.image_url})`;
        }
        else if ((_a = benefit.meta) === null || _a === void 0 ? void 0 : _a.backgroundColor) {
            if (benefit.meta.backgroundColor.includes('gradient')) {
                style['background'] = benefit.meta.backgroundColor;
            }
            else {
                style['background'] = benefit.meta.backgroundColor;
            }
        }
        return style;
    }
    getAccentStyle(benefit) {
        var _a;
        const style = {};
        if ((_a = benefit.meta) === null || _a === void 0 ? void 0 : _a.accentColor) {
            style['background'] = benefit.meta.accentColor;
            style['color'] = this.useLightText(benefit.meta.accentColor) ? '#0b1727' : '#ffffff';
        }
        return style;
    }
    useLightText(color) {
        const hex = color === null || color === void 0 ? void 0 : color.replace('#', '');
        if (!hex || hex.length < 6) {
            return false;
        }
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.7;
    }
    getAnimationClass(benefit) {
        var _a;
        const animation = (_a = benefit.meta) === null || _a === void 0 ? void 0 : _a.animation;
        switch (animation) {
            case 'fade':
                return 'animate__animated animate__fadeInUp';
            case 'pulse':
                return 'animate__animated animate__pulse';
            case 'float':
                return 'animate__animated animate__fadeIn';
            case 'slide-in':
            default:
                return 'animate__animated animate__slideInUp';
        }
    }
    openBenefitLink(benefit) {
        if (benefit.cta_url) {
            const isCordova = !!window['cordova'];
            const target = isCordova ? '_system' : '_blank';
            window.open(benefit.cta_url, target);
        }
    }
}
BenefitsPage.ɵfac = function BenefitsPage_Factory(t) { return new (t || BenefitsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_benefit_service__WEBPACK_IMPORTED_MODULE_0__["BenefitService"])); };
BenefitsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BenefitsPage, selectors: [["app-benefits"]], decls: 14, vars: 6, consts: [["slot", "start"], ["autoHide", "false"], ["fullscreen", ""], ["slot", "fixed", 3, "ionRefresh"], ["pullingIcon", "chevron-down-circle-outline", "refreshingSpinner", "crescent"], [1, "benefits-wrapper"], ["class", "hero", 4, "ngIf"], ["class", "highlight-grid", 4, "ngIf"], ["class", "feature-showcase", 4, "ngIf"], ["class", "benefit-catalog", 4, "ngIf"], [1, "hero"], [3, "options"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "hero-card", 3, "ngStyle"], [1, "hero-card__overlay"], [1, "hero-card__content"], ["class", "hero-card__badge", "color", "light", 4, "ngIf"], ["color", "secondary", "fill", "solid", 3, "click", 4, "ngIf"], ["color", "light", 1, "hero-card__badge"], ["color", "secondary", "fill", "solid", 3, "click"], ["slot", "start", "name", "flash-outline"], [1, "highlight-grid"], [1, "section-heading"], ["size", "12", "sizeMd", "6", 3, "ngClass", 4, "ngFor", "ngForOf"], ["size", "12", "sizeMd", "6", 3, "ngClass"], [1, "highlight-card", 3, "ngStyle"], [1, "highlight-card__accent", 3, "ngStyle"], [1, "highlight-card__body"], ["class", "highlight-card__icon", 4, "ngIf"], ["fill", "clear", "color", "light", "size", "small", 3, "click", 4, "ngIf"], [1, "highlight-card__icon"], [3, "name"], ["fill", "clear", "color", "light", "size", "small", 3, "click"], ["slot", "end", "name", "arrow-forward-circle-outline"], [1, "feature-showcase"], [1, "feature-cards"], ["class", "feature-card", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [1, "feature-card", 3, "ngStyle", "ngClass"], [1, "feature-card__content"], ["class", "feature-card__pill", 3, "ngStyle", 4, "ngIf"], ["size", "small", "color", "light", "fill", "solid", 3, "click", 4, "ngIf"], [1, "feature-card__pill", 3, "ngStyle"], ["size", "small", "color", "light", "fill", "solid", 3, "click"], [1, "benefit-catalog"], [1, "catalog-grid"], ["size", "12", "sizeMd", "6", "sizeLg", "4", 4, "ngFor", "ngForOf"], ["size", "12", "sizeMd", "6", "sizeLg", "4"], [1, "catalog-card", 3, "ngClass"], [1, "catalog-card__cover", 3, "ngStyle"], [4, "ngIf"], ["expand", "block", "fill", "outline", "color", "primary", 3, "click", 4, "ngIf"], ["expand", "block", "fill", "outline", "color", "primary", 3, "click"]], template: function BenefitsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Beneficios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-refresher", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function BenefitsPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-refresher-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BenefitsPage_section_10_Template, 3, 2, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BenefitsPage_section_11_Template, 9, 1, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BenefitsPage_section_12_Template, 8, 1, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BenefitsPage_section_13_Template, 9, 1, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.heroBenefits.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.highlightBenefits.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.featureBenefits.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardBenefits.length);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardSubtitle"]], styles: ["[_nghost-%COMP%] {\n  --hero-height: 280px;\n  display: block;\n}\n\n.benefits-wrapper[_ngcontent-%COMP%] {\n  padding: 24px 16px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #0a223f;\n}\n\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(10, 34, 63, 0.7);\n  font-size: 0.95rem;\n}\n\n.hero-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: var(--hero-height);\n  border-radius: 24px;\n  overflow: hidden;\n  padding: 32px 24px;\n  display: flex;\n  align-items: flex-end;\n  background: linear-gradient(135deg, #051937 0%, #0a3a62 48%, #1280b0 100%);\n  box-shadow: 0 20px 35px rgba(5, 25, 55, 0.35);\n}\n\n.hero-card.has-media[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.hero-card__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(4, 19, 38, 0.1) 0%, rgba(4, 19, 38, 0.86) 100%);\n  backdrop-filter: blur(2px);\n}\n\n.hero-card__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: 520px;\n}\n\n.hero-card__badge[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  --background: rgba(255, 255, 255, 0.25);\n  --color: #ffffff;\n  backdrop-filter: blur(8px);\n}\n\n.hero-card__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: 700;\n}\n\n.hero-card__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.4;\n  font-size: 1rem;\n  opacity: 0.9;\n}\n\n.hero[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  height: calc(var(--hero-height) + 20px);\n}\n\n.highlight-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px;\n  padding: 24px;\n  color: #ffffff;\n  overflow: hidden;\n  background: linear-gradient(135deg, #102a43 0%, #1a3d5c 100%);\n  box-shadow: 0 15px 30px rgba(9, 33, 62, 0.25);\n  min-height: 220px;\n  display: flex;\n}\n\n.highlight-card__accent[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 140px;\n  height: 140px;\n  opacity: 0.15;\n  border-radius: 50%;\n  top: -40px;\n  right: -30px;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.highlight-card__body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.highlight-card__icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  opacity: 0.85;\n}\n\n.highlight-card__body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n.highlight-card__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  opacity: 0.9;\n}\n\n.feature-showcase[_ngcontent-%COMP%]   .feature-cards[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n\n.feature-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 24px;\n  background: rgba(12, 35, 62, 0.92);\n  color: #ffffff;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 15px 30px rgba(9, 33, 62, 0.2);\n}\n\n.feature-card__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.feature-card__pill[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 6px 14px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: rgba(255, 255, 255, 0.22);\n  color: #ffffff;\n}\n\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.4;\n  opacity: 0.9;\n}\n\n.catalog-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.catalog-card[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.96);\n  backdrop-filter: blur(10px);\n}\n\n.catalog-card__cover[_ngcontent-%COMP%] {\n  height: 140px;\n  background: linear-gradient(135deg, #203a63 0%, #3d5c91 100%);\n}\n\n.catalog-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n\n.catalog-card[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 600;\n  color: #145ca8;\n}\n\n.catalog-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #0a223f;\n}\n\n.catalog-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  color: rgba(10, 34, 63, 0.75);\n}\n\n.catalog-card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 0 16px 20px;\n  border-radius: 16px;\n}\n\n.is-loading[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 4px solid rgba(9, 33, 62, 0.15);\n  border-top-color: #0f7fe0;\n  animation: spin 0.9s linear infinite;\n  align-self: center;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@media (min-width: 768px) {\n  [_nghost-%COMP%] {\n    --hero-height: 320px;\n  }\n\n  .benefits-wrapper[_ngcontent-%COMP%] {\n    padding: 32px 24px 48px;\n    gap: 48px;\n  }\n\n  .feature-showcase[_ngcontent-%COMP%]   .feature-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 1024px) {\n  [_nghost-%COMP%] {\n    --hero-height: 360px;\n  }\n\n  .feature-showcase[_ngcontent-%COMP%]   .feature-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JlbmVmaXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwwRUFBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx3RkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2REFBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw2REFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUFPLHVCQUFBO0VBRVA7RUFEQTtJQUFLLHlCQUFBO0VBSUw7QUFDRjs7QUFGQTtFQUNFO0lBQ0Usb0JBQUE7RUFJRjs7RUFEQTtJQUNFLHVCQUFBO0lBQ0EsU0FBQTtFQUlGOztFQURBO0lBQ0UsZ0RBQUE7RUFJRjtBQUNGOztBQURBO0VBQ0U7SUFDRSxvQkFBQTtFQUdGOztFQUFBO0lBQ0UsZ0RBQUE7RUFHRjtBQUNGIiwiZmlsZSI6ImJlbmVmaXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1oZXJvLWhlaWdodDogMjgwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYmVuZWZpdHMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDI0cHggMTZweCAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMycHg7XG59XG5cbi5zZWN0aW9uLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnNlY3Rpb24taGVhZGluZyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMGEyMjNmO1xufVxuXG4uc2VjdGlvbi1oZWFkaW5nIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiByZ2JhKDEwLCAzNCwgNjMsIDAuNyk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cblxuLmhlcm8tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogdmFyKC0taGVyby1oZWlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAzMnB4IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MTkzNyAwJSwgIzBhM2E2MiA0OCUsICMxMjgwYjAgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDAgMjBweCAzNXB4IHJnYmEoNSwgMjUsIDU1LCAwLjM1KTtcbn1cblxuLmhlcm8tY2FyZC5oYXMtbWVkaWEge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5oZXJvLWNhcmRfX292ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDQsIDE5LCAzOCwgMC4xKSAwJSwgcmdiYSg0LCAxOSwgMzgsIDAuODYpIDEwMCUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbn1cblxuLmhlcm8tY2FyZF9fY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbn1cblxuLmhlcm8tY2FyZF9fYmFkZ2Uge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xufVxuXG4uaGVyby1jYXJkX19jb250ZW50IGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmhlcm8tY2FyZF9fY29udGVudCBwIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LXNpemU6IDFyZW07XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmhlcm8gaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1oZXJvLWhlaWdodCkgKyAyMHB4KTtcbn1cblxuLmhpZ2hsaWdodC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwMmE0MyAwJSwgIzFhM2Q1YyAxMDAlKTtcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSg5LCAzMywgNjIsIDAuMjUpO1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhpZ2hsaWdodC1jYXJkX19hY2NlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgb3BhY2l0eTogMC4xNTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IC00MHB4O1xuICByaWdodDogLTMwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLmhpZ2hsaWdodC1jYXJkX19ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbi5oaWdobGlnaHQtY2FyZF9faWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgb3BhY2l0eTogMC44NTtcbn1cblxuLmhpZ2hsaWdodC1jYXJkX19ib2R5IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmhpZ2hsaWdodC1jYXJkX19ib2R5IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uZmVhdHVyZS1zaG93Y2FzZSAuZmVhdHVyZS1jYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTZweDtcbn1cblxuLmZlYXR1cmUtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIsIDM1LCA2MiwgMC45Mik7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoOSwgMzMsIDYyLCAwLjIpO1xufVxuXG4uZmVhdHVyZS1jYXJkX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZmVhdHVyZS1jYXJkX19waWxsIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMik7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZmVhdHVyZS1jYXJkIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZlYXR1cmUtY2FyZCBwIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5jYXRhbG9nLWdyaWQgaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXRhbG9nLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuXG4uY2F0YWxvZy1jYXJkX19jb3ZlciB7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyMDNhNjMgMCUsICMzZDVjOTEgMTAwJSk7XG59XG5cbi5jYXRhbG9nLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5jYXRhbG9nLWNhcmQgaW9uLWNhcmQtc3VidGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzE0NWNhODtcbn1cblxuLmNhdGFsb2ctY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzBhMjIzZjtcbn1cblxuLmNhdGFsb2ctY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgY29sb3I6IHJnYmEoMTAsIDM0LCA2MywgMC43NSk7XG59XG5cbi5jYXRhbG9nLWNhcmQgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxNnB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5pcy1sb2FkaW5nOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoOSwgMzMsIDYyLCAwLjE1KTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzBmN2ZlMDtcbiAgYW5pbWF0aW9uOiBzcGluIDAuOXMgbGluZWFyIGluZmluaXRlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICAtLWhlcm8taGVpZ2h0OiAzMjBweDtcbiAgfVxuXG4gIC5iZW5lZml0cy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAzMnB4IDI0cHggNDhweDtcbiAgICBnYXA6IDQ4cHg7XG4gIH1cblxuICAuZmVhdHVyZS1zaG93Y2FzZSAuZmVhdHVyZS1jYXJkcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgOmhvc3Qge1xuICAgIC0taGVyby1oZWlnaHQ6IDM2MHB4O1xuICB9XG5cbiAgLmZlYXR1cmUtc2hvd2Nhc2UgLmZlYXR1cmUtY2FyZHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "bqjF":
/*!************************************************!*\
  !*** ./src/app/services/v1/benefit.service.ts ***!
  \************************************************/
/*! exports provided: BenefitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitService", function() { return BenefitService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class BenefitService {
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL;
        this.V1 = 'v1/app/';
    }
    list(params = {}) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        Object.keys(params).forEach(key => {
            const value = params[key];
            if (value !== undefined && value !== null && value !== '') {
                httpParams = httpParams.append(key, value);
            }
        });
        return this.http.get(`${this.API_URL}${this.V1}benefits`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return {
                benefits: (response === null || response === void 0 ? void 0 : response.benefits) || [],
                grouped: (response === null || response === void 0 ? void 0 : response.grouped) || {}
            };
        }));
    }
}
BenefitService.ɵfac = function BenefitService_Factory(t) { return new (t || BenefitService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BenefitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BenefitService, factory: BenefitService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cr26":
/*!***************************************************!*\
  !*** ./src/app/pages/benefits/benefits.module.ts ***!
  \***************************************************/
/*! exports provided: BenefitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsPageModule", function() { return BenefitsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _benefits_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benefits-routing.module */ "lWwE");
/* harmony import */ var _benefits_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./benefits.page */ "JCM0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class BenefitsPageModule {
}
BenefitsPageModule.ɵfac = function BenefitsPageModule_Factory(t) { return new (t || BenefitsPageModule)(); };
BenefitsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BenefitsPageModule });
BenefitsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _benefits_routing_module__WEBPACK_IMPORTED_MODULE_3__["BenefitsPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BenefitsPageModule, { declarations: [_benefits_page__WEBPACK_IMPORTED_MODULE_4__["BenefitsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _benefits_routing_module__WEBPACK_IMPORTED_MODULE_3__["BenefitsPageRoutingModule"]] }); })();


/***/ }),

/***/ "lWwE":
/*!***********************************************************!*\
  !*** ./src/app/pages/benefits/benefits-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BenefitsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsPageRoutingModule", function() { return BenefitsPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _benefits_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./benefits.page */ "JCM0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _benefits_page__WEBPACK_IMPORTED_MODULE_1__["BenefitsPage"]
    }
];
class BenefitsPageRoutingModule {
}
BenefitsPageRoutingModule.ɵfac = function BenefitsPageRoutingModule_Factory(t) { return new (t || BenefitsPageRoutingModule)(); };
BenefitsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BenefitsPageRoutingModule });
BenefitsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BenefitsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);