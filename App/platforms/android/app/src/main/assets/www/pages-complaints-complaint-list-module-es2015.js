(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-complaints-complaint-list-module"],{

/***/ "9HFV":
/*!***********************************************************!*\
  !*** ./src/app/pages/complaints/complaint-list.module.ts ***!
  \***********************************************************/
/*! exports provided: ComplaintListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintListPageModule", function() { return ComplaintListPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _complaint_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaint-list-routing.module */ "orgG");
/* harmony import */ var _complaint_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complaint-list.page */ "dwYR");
/* harmony import */ var _complaint_form_complaint_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complaint-form/complaint-form.component */ "H67v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ComplaintListPageModule {
}
ComplaintListPageModule.ɵfac = function ComplaintListPageModule_Factory(t) { return new (t || ComplaintListPageModule)(); };
ComplaintListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ComplaintListPageModule });
ComplaintListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _complaint_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComplaintListPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ComplaintListPageModule, { declarations: [_complaint_list_page__WEBPACK_IMPORTED_MODULE_4__["ComplaintListPage"], _complaint_form_complaint_form_component__WEBPACK_IMPORTED_MODULE_5__["ComplaintFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _complaint_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComplaintListPageRoutingModule"]] }); })();


/***/ }),

/***/ "H67v":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/complaints/complaint-form/complaint-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ComplaintFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintFormComponent", function() { return ComplaintFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_v1_complaint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/v1/complaint.service */ "XyYd");
/* harmony import */ var _constants_complaint_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/complaint-types */ "lSmC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ComplaintFormComponent_ion_select_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-select-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r4.label, " ");
} }
function ComplaintFormComponent_ion_note_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-note", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Seleccion\u00E1 un tipo de reclamo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComplaintFormComponent_ion_note_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-note", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El mensaje es obligatorio y debe tener al menos 5 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComplaintFormComponent_ion_spinner_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-spinner", 15);
} }
class ComplaintFormComponent {
    constructor(modalController, formBuilder, complaintService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.complaintService = complaintService;
        this.submitting = false;
        this.complaintTypes = _constants_complaint_types__WEBPACK_IMPORTED_MODULE_3__["COMPLAINT_TYPE_OPTIONS"];
        this.form = this.formBuilder.group({
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]]
        });
    }
    dismiss(success = false) {
        this.modalController.dismiss({ success });
    }
    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.submitting = true;
        this.complaintService.create(this.form.value).subscribe({
            next: () => this.dismiss(true),
            error: () => {
                this.submitting = false;
            },
            complete: () => {
                this.submitting = false;
            }
        });
    }
}
ComplaintFormComponent.ɵfac = function ComplaintFormComponent_Factory(t) { return new (t || ComplaintFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_v1_complaint_service__WEBPACK_IMPORTED_MODULE_2__["ComplaintService"])); };
ComplaintFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ComplaintFormComponent, selectors: [["app-complaint-form"]], decls: 25, vars: 6, consts: [["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], [3, "formGroup"], ["lines", "none"], ["position", "stacked"], ["formControlName", "type", "placeholder", "Seleccionar", "interface", "alert", "cancelText", "Cancelar", "okText", "Aceptar"], [3, "value", 4, "ngFor", "ngForOf"], ["color", "danger", 4, "ngIf"], ["formControlName", "message", "autoGrow", "true"], [1, "ion-padding"], ["expand", "block", 3, "disabled", "click"], ["slot", "start", 4, "ngIf"], [3, "value"], ["color", "danger"], ["slot", "start"]], template: function ComplaintFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nuevo reclamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComplaintFormComponent_Template_ion_button_click_5_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Tipo de reclamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ComplaintFormComponent_ion_select_option_14_Template, 2, 2, "ion-select-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ComplaintFormComponent_ion_note_15_Template, 2, 0, "ion-note", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "ion-textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ComplaintFormComponent_ion_note_20_Template, 2, 0, "ion-note", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComplaintFormComponent_Template_ion_button_click_22_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ComplaintFormComponent_ion_spinner_23_Template, 1, 0, "ion-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Enviar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.complaintTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.controls.type.invalid && ctx.form.controls.type.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.controls.message.invalid && ctx.form.controls.message.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitting);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonNote"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSpinner"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 24px;\n}\n\nion-note[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBsYWludC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJjb21wbGFpbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cblxuaW9uLW5vdGUge1xuICBtYXJnaW46IDAgMTZweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "XyYd":
/*!**************************************************!*\
  !*** ./src/app/services/v1/complaint.service.ts ***!
  \**************************************************/
/*! exports provided: ComplaintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintService", function() { return ComplaintService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ComplaintService {
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL;
        this.V1 = 'v1/app/';
    }
    list() {
        return this.http.get(`${this.API_URL}${this.V1}complaints`);
    }
    create(body) {
        return this.http.post(`${this.API_URL}${this.V1}complaints`, body);
    }
}
ComplaintService.ɵfac = function ComplaintService_Factory(t) { return new (t || ComplaintService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ComplaintService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ComplaintService, factory: ComplaintService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dwYR":
/*!*********************************************************!*\
  !*** ./src/app/pages/complaints/complaint-list.page.ts ***!
  \*********************************************************/
/*! exports provided: ComplaintListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintListPage", function() { return ComplaintListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_v1_complaint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/v1/complaint.service */ "XyYd");
/* harmony import */ var _complaint_form_complaint_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaint-form/complaint-form.component */ "H67v");
/* harmony import */ var _constants_complaint_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/complaint-types */ "lSmC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ComplaintListPage_ion_list_13_ion_item_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const complaint_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r5.getTypeLabel(complaint_r4.type), " ");
} }
function ComplaintListPage_ion_list_13_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ComplaintListPage_ion_list_13_ion_item_1_div_2_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const complaint_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", complaint_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.getTypeLabel(complaint_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](complaint_r4.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", complaint_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.getStatusLabel(complaint_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 6, complaint_r4.created_at, "short"));
} }
function ComplaintListPage_ion_list_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ComplaintListPage_ion_list_13_ion_item_1_Template, 12, 9, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.complaints);
} }
function ComplaintListPage_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No registras reclamos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ComplaintListPage_ng_template_14_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.openCreateModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Crear reclamo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ComplaintListPage {
    constructor(complaintService, modalController, toastController) {
        this.complaintService = complaintService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.complaints = [];
        this.loading = false;
        this.typeLabels = _constants_complaint_types__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT_TYPE_LABELS"];
    }
    ngOnInit() {
        this.loadComplaints();
    }
    ionViewWillEnter() {
        this.loadComplaints();
    }
    loadComplaints(event) {
        this.loading = true;
        this.complaintService.list().subscribe({
            next: (response) => {
                this.complaints = response.complaints || [];
            },
            error: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.presentToast('No se pudieron cargar los reclamos', 'danger');
            }),
            complete: () => {
                var _a, _b;
                this.loading = false;
                (_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        });
    }
    openCreateModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _complaint_form_complaint_form_component__WEBPACK_IMPORTED_MODULE_3__["ComplaintFormComponent"]
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data === null || data === void 0 ? void 0 : data.success) {
                this.loadComplaints();
            }
        });
    }
    getStatusLabel(status) {
        switch (status) {
            case 'resolved':
                return 'Resuelto';
            case 'in_progress':
                return 'En progreso';
            default:
                return 'Abierto';
        }
    }
    getTypeLabel(type) {
        var _a;
        if (!type) {
            return 'Sin tipo';
        }
        return (_a = this.typeLabels[type]) !== null && _a !== void 0 ? _a : 'Sin tipo';
    }
    presentToast(message, color = 'success') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2500,
                color,
                position: 'top'
            });
            yield toast.present();
        });
    }
}
ComplaintListPage.ɵfac = function ComplaintListPage_Factory(t) { return new (t || ComplaintListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_v1_complaint_service__WEBPACK_IMPORTED_MODULE_2__["ComplaintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"])); };
ComplaintListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ComplaintListPage, selectors: [["app-complaint-list"]], decls: 16, vars: 3, consts: [["slot", "start"], ["autoHide", "false"], ["slot", "end"], [3, "click"], ["slot", "start", "name", "add-circle-outline"], [3, "fullscreen"], ["slot", "fixed", 3, "ionRefresh"], [4, "ngIf", "ngIfElse"], ["emptyState", ""], [4, "ngFor", "ngForOf"], ["class", "type-pill", 4, "ngIf"], [1, "status", 3, "ngClass"], [1, "date"], [1, "type-pill"], [1, "empty-state"], ["name", "chatbox-ellipses-outline"]], template: function ComplaintListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-menu-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Reclamos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ComplaintListPage_Template_ion_button_click_7_listener() { return ctx.openCreateModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Nuevo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-refresher", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionRefresh", function ComplaintListPage_Template_ion_refresher_ionRefresh_11_listener($event) { return ctx.loadComplaints($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ComplaintListPage_ion_list_13_Template, 2, 1, "ion-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ComplaintListPage_ng_template_14_Template, 6, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.complaints.length > 0)("ngIfElse", _r1);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n  color: var(--ion-color-medium);\n}\n.empty-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n  color: var(--ion-color-primary);\n}\n.type-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  background: var(--complaint-type-pill-background);\n  color: var(--complaint-type-pill-color);\n  margin-bottom: 6px;\n}\n.status[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 4px;\n}\n.status.open[_ngcontent-%COMP%] {\n  color: var(--ion-color-warning);\n}\n.status.in_progress[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n}\n.status.resolved[_ngcontent-%COMP%] {\n  color: var(--ion-color-success);\n}\n.date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBsYWludC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFDSjtBQUdBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlEQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBRjtBQUVFO0VBQ0UsK0JBQUE7QUFBSjtBQUdFO0VBQ0UsOEJBQUE7QUFESjtBQUlFO0VBQ0UsK0JBQUE7QUFGSjtBQU1BO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtBQUhGIiwiZmlsZSI6ImNvbXBsYWludC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDgwdmg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuXG4udHlwZS1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb21wbGFpbnQtdHlwZS1waWxsLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tY29tcGxhaW50LXR5cGUtcGlsbC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnN0YXR1cyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDRweDtcblxuICAmLm9wZW4ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIH1cblxuICAmLmluX3Byb2dyZXNzIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIH1cblxuICAmLnJlc29sdmVkIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICB9XG59XG5cbi5kYXRlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "lSmC":
/*!**********************************************!*\
  !*** ./src/app/constants/complaint-types.ts ***!
  \**********************************************/
/*! exports provided: COMPLAINT_TYPE_LABELS, COMPLAINT_TYPE_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPLAINT_TYPE_LABELS", function() { return COMPLAINT_TYPE_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPLAINT_TYPE_OPTIONS", function() { return COMPLAINT_TYPE_OPTIONS; });
const COMPLAINT_TYPE_LABELS = {
    payment: 'Reclamo de pagos',
    fuel_increase: 'Aumento de combustible',
    tax_recognition: 'Reconocimiento de IVA',
    liquidation: 'Reclamo de liquidación',
    other: 'Otros motivos'
};
const COMPLAINT_TYPE_OPTIONS = Object.entries(COMPLAINT_TYPE_LABELS)
    .map(([value, label]) => ({
    value: value,
    label
}));


/***/ }),

/***/ "orgG":
/*!*******************************************************************!*\
  !*** ./src/app/pages/complaints/complaint-list-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ComplaintListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintListPageRoutingModule", function() { return ComplaintListPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _complaint_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complaint-list.page */ "dwYR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _complaint_list_page__WEBPACK_IMPORTED_MODULE_1__["ComplaintListPage"]
    }
];
class ComplaintListPageRoutingModule {
}
ComplaintListPageRoutingModule.ɵfac = function ComplaintListPageRoutingModule_Factory(t) { return new (t || ComplaintListPageRoutingModule)(); };
ComplaintListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComplaintListPageRoutingModule });
ComplaintListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComplaintListPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);