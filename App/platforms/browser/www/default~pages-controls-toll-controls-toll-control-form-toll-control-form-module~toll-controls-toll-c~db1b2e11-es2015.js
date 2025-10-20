(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-controls-toll-controls-toll-control-form-toll-control-form-module~toll-controls-toll-c~db1b2e11"],{

/***/ "8ID2":
/*!************************************************!*\
  !*** ./src/app/services/utils/date.service.ts ***!
  \************************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DateService {
    constructor() {
    }
    getToday() {
        return new Date(new Date().getTime() -
            new Date().getTimezoneOffset() * 60000).toISOString();
    }
}
DateService.ɵfac = function DateService_Factory(t) { return new (t || DateService)(); };
DateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateService, factory: DateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kGPl":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/controls/toll-controls/toll-control-form/toll-control-form.page.ts ***!
  \******************************************************************************************/
/*! exports provided: TollControlFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TollControlFormPage", function() { return TollControlFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_v1_toll_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/v1/toll-control.service */ "t7Fd");
/* harmony import */ var _components_modals_image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/modals/image-detail/image-detail.component */ "mdCS");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/toast/toast.component */ "COqc");
/* harmony import */ var _services_utils_camera_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/utils/camera.service */ "uHbY");
/* harmony import */ var _services_v1_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/v1/auth.service */ "HNOL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/utils/http-upload-file.service */ "DDL3");
/* harmony import */ var _services_utils_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/utils/date.service */ "8ID2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
























function TollControlFormPage_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function TollControlFormPage_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function TollControlFormPage_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo debe ser num\u00E9rico, puede tener dos decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function TollControlFormPage_ion_col_29_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TollControlFormPage_ion_col_29_ion_icon_2_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r10.deleteImage(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function TollControlFormPage_ion_col_29_ion_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-icon", 23);
} }
function TollControlFormPage_ion_col_29_ion_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 24);
} }
function TollControlFormPage_ion_col_29_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TollControlFormPage_ion_col_29_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14); const file_r5 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r13.viewControlImageDetail(file_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, TollControlFormPage_ion_col_29_ion_icon_2_Template, 1, 0, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, TollControlFormPage_ion_col_29_ion_icon_3_Template, 1, 0, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, TollControlFormPage_ion_col_29_ion_progress_bar_4_Template, 1, 0, "ion-progress-bar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r3.sanitizer.bypassSecurityTrustUrl(file_r5.src), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.uploadedFilesIndexes.indexOf(i_r6) <= -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.uploadedFilesIndexes.indexOf(i_r6) > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.uploadingFileIndex === i_r6);
} }
function TollControlFormPage_ion_progress_bar_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 25);
} }
class TollControlFormPage {
    constructor(formBuilder, router, authService, dateService, sanitizer, httpUploadFileService, toastComponent, cameraService, modalController, tollControlService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.dateService = dateService;
        this.sanitizer = sanitizer;
        this.httpUploadFileService = httpUploadFileService;
        this.toastComponent = toastComponent;
        this.cameraService = cameraService;
        this.modalController = modalController;
        this.tollControlService = tollControlService;
        this.showInputErrorMessage = false;
        this.submitting = false;
        this.today = new Date();
        this.files = [];
        this.uploadedFilesIndexes = [];
        this.uploadingErrorFilesIndexes = [];
        this.maxYear = this.today.getFullYear() + 2;
        this.minYear = this.today.getFullYear() - 1;
        this.form = this.formBuilder.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            station: [''],
            total: ['']
        });
    }
    ngOnInit() {
        if (this.tollControl) {
            this.setTollControl();
        }
        this.authService.getAuthToken().then(authToken => {
            this.authToken = authToken;
        });
        this.form.controls.date.setValue(this.dateService.getToday());
    }
    setTollControl() {
        this.form.controls.date.setValue(this.tollControl.date);
        this.form.controls.station.setValue(this.tollControl.station);
        this.form.controls.total.setValue(this.tollControl.total);
    }
    submit() {
        if (this.form.valid) {
            this.showInputErrorMessage = false;
            this.tollControl ? this.updateTollControl() : this.storeTollControl();
        }
        else {
            this.showInputErrorMessage = true;
        }
    }
    storeTollControl() {
        this.submitting = true;
        const body = this.setBody();
        this.tollControlService.storeTollControl(body)
            .subscribe((response) => {
            this.tollControlId = response.toll_control_id;
            if (this.files.length > 0) {
                this.checkFiles();
            }
            else {
                this.closeModal();
            }
        }, error => {
            this.submitting = false;
        });
    }
    updateTollControl() {
        this.submitting = true;
        const body = this.setBody();
        this.tollControlService.updateTollControl(this.tollControl, body)
            .subscribe((response) => {
            this.tollControlId = response.toll_control_id;
            if (this.files.length > 0) {
                this.checkFiles();
            }
            else {
                this.closeModal();
            }
        }, error => {
            this.submitting = false;
        });
    }
    uploadFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let i = 0;
            this.uploadingFileIndex = i;
            for (const file of this.files) {
                yield this.uploadFile(file.file)
                    .then(() => {
                    this.uploadedFilesIndexes.push(i);
                })
                    .catch(err => {
                    this.uploadingErrorFilesIndexes.push(i);
                }).finally(() => {
                    i++;
                    this.uploadingFileIndex = i;
                });
            }
        });
    }
    uploadFile(file) {
        return new Promise((resolve, reject) => {
            const body = {
                toll_control_id: this.tollControlId.toString()
            };
            this.httpUploadFileService.uploadFile('toll-control-images', file, this.authToken, body)
                .then(() => {
                resolve(true);
            })
                .catch(err => {
                reject(err);
                this.toastComponent.presentToast('No se pudo carga la imagen del control de peaje. Intente nuevamente', 'medium', 2500);
            });
        });
    }
    setBody() {
        return {
            date: this.form.value.date,
            station: this.form.value.station,
            total: this.form.value.total,
        };
    }
    viewControlImageDetail(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_5__["ImageDetailComponent"],
                componentProps: { file }
            });
            yield modal.present();
        });
    }
    takePicture() {
        this.cameraService.takePicture().then((cameraPhotoFile) => {
            this.files.push(cameraPhotoFile);
        }).catch(err => {
            if (err !== 'No Image Selected') {
                this.toastComponent.presentToast(`No se pudo acceder a la cámara (error: ${err})`, 'middle', 3000);
            }
        });
    }
    checkFiles() {
        this.uploadedFilesIndexes = [];
        this.uploadingErrorFilesIndexes = [];
        this.uploadFiles().then(() => {
            this.closeModal();
        });
    }
    closeModal() {
        this.form.reset();
        this.submitting = false;
        this.dismiss(true);
    }
    dismiss(success) {
        this.modalController.dismiss({ success });
    }
    deleteImage(i) {
        this.files.splice(i, 1);
    }
}
TollControlFormPage.ɵfac = function TollControlFormPage_Factory(t) { return new (t || TollControlFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_v1_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_10__["HttpUploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_6__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_camera_service__WEBPACK_IMPORTED_MODULE_7__["CameraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_v1_toll_control_service__WEBPACK_IMPORTED_MODULE_4__["TollControlService"])); };
TollControlFormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: TollControlFormPage, selectors: [["app-toll-control-form"]], inputs: { tollControl: "tollControl" }, decls: 34, vars: 9, consts: [["slot", "end"], ["name", "close", 1, "font-2em", 3, "click"], [1, "ion-text-center"], [3, "formGroup"], [1, "form-group"], ["lines", "none", 1, "custom-item"], ["displayFormat", "DD MMMM YYYY", "display-timezone", "America/Argentina/Buenos_Aires", "formControlName", "date", "doneText", "ok", "cancelText", "cancelar", "monthNames", "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre", "monthShortNames", "ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic", "dayNames", "domingo, lunes, martes, mi\u00E9rcoles, jueves, viernes, s\u00E1bado, domingo", "dayShortNames", "dom, lun, mar, mi\u00E9, jue, vie, s\u00E1b, dom", 3, "max", "min"], ["class", "ion-no-margin form-error-message", 4, "ngIf"], ["type", "text", "formControlName", "station"], ["inputmode", "decimal", "pattern", "[0-9]+(\\.[0-9][0-9]?)?", "formControlName", "total"], [1, "custom-secondary-button", 3, "click"], ["name", "camera"], ["size", "6", 4, "ngFor", "ngForOf"], [1, "ion-padding"], ["type", "indeterminate", 4, "ngIf"], [1, "custom-button", 3, "disabled", "click"], [1, "ion-no-margin", "form-error-message"], ["size", "6"], ["alt", "control-image", 1, "control-image", 3, "src", "click"], ["name", "trash", "class", "delete-icon", 3, "click", 4, "ngIf"], ["name", "checkmark", "class", "checkmark-icon", "color", "success", 4, "ngIf"], ["class", "uploadingFile", "type", "indeterminate", 4, "ngIf"], ["name", "trash", 1, "delete-icon", 3, "click"], ["name", "checkmark", "color", "success", 1, "checkmark-icon"], ["type", "indeterminate", 1, "uploadingFile"], ["type", "indeterminate"]], template: function TollControlFormPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TollControlFormPage_Template_ion_icon_click_3_listener() { return ctx.dismiss(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "CONTROL PEAJES");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "ion-datetime", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, TollControlFormPage_p_13_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Estaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, TollControlFormPage_p_18_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, TollControlFormPage_p_23_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TollControlFormPage_Template_ion_button_click_24_listener() { return ctx.takePicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, " Tomar foto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, TollControlFormPage_ion_col_29_Template, 5, 4, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, TollControlFormPage_ion_progress_bar_31_Template, 1, 0, "ion-progress-bar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "ion-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TollControlFormPage_Template_ion_button_click_32_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, " Aceptar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("max", ctx.maxYear)("min", ctx.minYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.form.controls.date.invalid && ctx.showInputErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.form.controls.station.invalid && ctx.showInputErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.form.controls.total.invalid && ctx.showInputErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.submitting);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonProgressBar"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: white;\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n  --background: #f4f5f8;\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  background: #f4f5f8;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.control-image[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 150px;\n  width: 100%;\n}\n\n.not-approved[_ngcontent-%COMP%] {\n  --background: #898989;\n  color: white;\n  box-shadow: none;\n}\n\n.approved[_ngcontent-%COMP%] {\n  --background: #c7f3cc;\n  color: black;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL29wZXJhdGlvbi1jb250cm9scy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdG9sbC1jb250cm9sLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoidG9sbC1jb250cm9sLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3NTdkZmI7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgN3B4IDJweCBsaWdodGdyZXk7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuaW9uLWl0ZW0tb3B0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5jdXN0b20tZGF0ZS1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5mb3JtLWdyb3VwIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b3RhbCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRyb2wtaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vdC1hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogIzg5ODk4OTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYXBwcm92ZWQge1xuICAtLWJhY2tncm91bmQ6ICAjYzdmM2NjO1xuICBjb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc1N2RmYjtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4IGxpZ2h0Z3JleTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG5pb24taXRlbS1vcHRpb25zIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmN1c3RvbS1kYXRlLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udHJvbC1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm90LWFwcHJvdmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjODk4OTg5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogI2M3ZjNjYztcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ "t7Fd":
/*!*****************************************************!*\
  !*** ./src/app/services/v1/toll-control.service.ts ***!
  \*****************************************************/
/*! exports provided: TollControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TollControlService", function() { return TollControlService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TollControlService {
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.V1 = 'v1/app/';
    }
    getTollControls(month, year) {
        return this.http.get(`${this.API_URL}${this.V1}toll-controls/month/${month}/year/${year}`);
    }
    storeTollControl(body) {
        return this.http.post(`${this.API_URL}${this.V1}toll-controls`, body);
    }
    updateTollControl(tollControl, body) {
        return this.http.put(`${this.API_URL}${this.V1}toll-controls/${tollControl.id}`, body);
    }
    deleteTollControl(tollControl) {
        return this.http.delete(`${this.API_URL}${this.V1}toll-controls/${tollControl.id}`);
    }
}
TollControlService.ɵfac = function TollControlService_Factory(t) { return new (t || TollControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TollControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TollControlService, factory: TollControlService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default~pages-controls-toll-controls-toll-control-form-toll-control-form-module~toll-controls-toll-c~db1b2e11-es2015.js.map