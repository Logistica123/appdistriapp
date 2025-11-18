(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fuel-controls-fuel-control-list-fuel-control-list-module"],{

/***/ "241T":
/*!*****************************************************!*\
  !*** ./src/app/services/v1/fuel-control.service.ts ***!
  \*****************************************************/
/*! exports provided: FuelControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelControlService", function() { return FuelControlService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class FuelControlService {
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.V1 = 'v1/app/';
    }
    getFuelControls(month, year) {
        return this.http.get(`${this.API_URL}${this.V1}fuel-controls/month/${month}/year/${year}`);
    }
    storeFuelControl(body) {
        return this.http.post(`${this.API_URL}${this.V1}fuel-controls`, body);
    }
    updateFuelControl(fuelControl, body) {
        return this.http.put(`${this.API_URL}${this.V1}fuel-controls/${fuelControl.id}`, body);
    }
    deleteFuelControl(fuelControl) {
        return this.http.delete(`${this.API_URL}${this.V1}fuel-controls/${fuelControl.id}`);
    }
}
FuelControlService.ɵfac = function FuelControlService_Factory(t) { return new (t || FuelControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FuelControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FuelControlService, factory: FuelControlService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "3CW4":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/controls/fuel-controls/fuel-control-form/fuel-control-form.page.ts ***!
  \******************************************************************************************/
/*! exports provided: FuelControlFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelControlFormPage", function() { return FuelControlFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_v1_fuel_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/v1/fuel-control.service */ "241T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_modals_image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/modals/image-detail/image-detail.component */ "mdCS");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/toast/toast.component */ "COqc");
/* harmony import */ var _services_utils_camera_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/utils/camera.service */ "uHbY");
/* harmony import */ var _services_v1_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/v1/auth.service */ "HNOL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/utils/http-upload-file.service */ "DDL3");
/* harmony import */ var _services_utils_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/utils/date.service */ "8ID2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
























function FuelControlFormPage_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function FuelControlFormPage_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function FuelControlFormPage_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function FuelControlFormPage_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo debe ser num\u00E9rico, puede tener dos decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function FuelControlFormPage_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo debe ser num\u00E9rico, puede tener dos decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function FuelControlFormPage_ion_col_48_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FuelControlFormPage_ion_col_48_ion_icon_2_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r12.deleteImage(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function FuelControlFormPage_ion_col_48_ion_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-icon", 29);
} }
function FuelControlFormPage_ion_col_48_ion_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 30);
} }
function FuelControlFormPage_ion_col_48_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-col", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FuelControlFormPage_ion_col_48_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16); const file_r7 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r15.viewControlImageDetail(file_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, FuelControlFormPage_ion_col_48_ion_icon_2_Template, 1, 0, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, FuelControlFormPage_ion_col_48_ion_icon_3_Template, 1, 0, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, FuelControlFormPage_ion_col_48_ion_progress_bar_4_Template, 1, 0, "ion-progress-bar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r5.sanitizer.bypassSecurityTrustUrl(file_r7.src), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.uploadedFilesIndexes.indexOf(i_r8) <= -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.uploadedFilesIndexes.indexOf(i_r8) > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.uploadingFileIndex === i_r8);
} }
function FuelControlFormPage_ion_progress_bar_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 30);
} }
class FuelControlFormPage {
    constructor(formBuilder, router, authService, sanitizer, dateService, httpUploadFileService, toastComponent, cameraService, modalController, fuelControlService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.sanitizer = sanitizer;
        this.dateService = dateService;
        this.httpUploadFileService = httpUploadFileService;
        this.toastComponent = toastComponent;
        this.cameraService = cameraService;
        this.modalController = modalController;
        this.fuelControlService = fuelControlService;
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
            fuelType: [''],
            liters: [''],
            price: ['']
        });
    }
    ngOnInit() {
        if (this.fuelControl) {
            this.setFuelControl();
        }
        this.authService.getAuthToken().then(authToken => {
            this.authToken = authToken;
        });
        this.form.controls.date.setValue(this.dateService.getToday());
    }
    setFuelControl() {
        this.form.controls.date.setValue(this.fuelControl.date);
        this.form.controls.station.setValue(this.fuelControl.station);
        this.form.controls.fuelType.setValue(this.fuelControl.fuel_type);
        this.form.controls.liters.setValue(this.fuelControl.liters);
        this.form.controls.price.setValue(this.fuelControl.price);
    }
    submit() {
        if (this.form.valid) {
            this.showInputErrorMessage = false;
            this.fuelControl ? this.updateFuelControl() : this.storeFuelControl();
        }
        else {
            this.showInputErrorMessage = true;
        }
    }
    storeFuelControl() {
        this.submitting = true;
        const body = this.setBody();
        this.fuelControlService.storeFuelControl(body)
            .subscribe((response) => {
            this.fuelControlId = response.fuel_control_id;
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
    updateFuelControl() {
        this.submitting = true;
        const body = this.setBody();
        this.fuelControlService.updateFuelControl(this.fuelControl, body)
            .subscribe((response) => {
            this.fuelControlId = response.fuel_control_id;
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
    setBody() {
        return {
            date: this.form.value.date,
            station: this.form.value.station,
            fuel_type: this.form.value.fuelType,
            liters: this.form.value.liters,
            price: this.form.value.price
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
            this.toastComponent.presentToast(`No se pudo acceder a la cámara (error: ${err})`, 'middle', 3000);
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
                fuel_control_id: this.fuelControlId.toString()
            };
            this.httpUploadFileService.uploadFile('fuel-control-images', file, this.authToken, body)
                .then(() => {
                resolve(true);
            })
                .catch(err => {
                reject(err);
                this.toastComponent.presentToast('No se pudo carga la imagen del control de combustible. Intente nuevamente', 'medium', 2500);
            });
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
FuelControlFormPage.ɵfac = function FuelControlFormPage_Factory(t) { return new (t || FuelControlFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_v1_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_10__["HttpUploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_6__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_camera_service__WEBPACK_IMPORTED_MODULE_7__["CameraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_v1_fuel_control_service__WEBPACK_IMPORTED_MODULE_2__["FuelControlService"])); };
FuelControlFormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: FuelControlFormPage, selectors: [["app-fuel-control-form"]], inputs: { fuelControl: "fuelControl" }, decls: 53, vars: 15, consts: [["slot", "end"], ["name", "close", 1, "font-2em", 3, "click"], [1, "ion-text-center"], [3, "formGroup"], [1, "form-group"], ["lines", "none", 1, "custom-item"], ["displayFormat", "DD MMMM YYYY", "display-timezone", "America/Argentina/Buenos_Aires", "formControlName", "date", "doneText", "ok", "cancelText", "cancelar", "monthNames", "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre", "monthShortNames", "ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic", "dayNames", "domingo, lunes, martes, mi\u00E9rcoles, jueves, viernes, s\u00E1bado, domingo", "dayShortNames", "dom, lun, mar, mi\u00E9, jue, vie, s\u00E1b, dom", 3, "max", "min"], ["class", "ion-no-margin form-error-message", 4, "ngIf"], ["type", "text", "formControlName", "station"], ["type", "text", "formControlName", "fuelType"], ["size", "6", 1, "ion-padding-horizontal"], [1, "small"], ["type", "tel", "inputmode", "numeric", "pattern", "[0-9]+(\\.[0-9][0-9]?)?", "formControlName", "liters"], ["type", "tel", "inputmode", "numeric", "pattern", "[0-9]+(\\.[0-9][0-9]?)?", "formControlName", "price"], ["size", "12", 1, "ion-text-center"], [1, "ion-no-margin"], [1, "total", "ion-no-margin"], [1, "custom-secondary-button", 3, "click"], ["name", "camera"], ["size", "6", 4, "ngFor", "ngForOf"], [1, "ion-padding"], ["type", "indeterminate", 4, "ngIf"], [1, "custom-button", 3, "disabled", "click"], [1, "ion-no-margin", "form-error-message"], ["size", "6"], ["alt", "control-image", 1, "control-image", 3, "src", "click"], ["name", "trash", "class", "delete-icon", 3, "click", 4, "ngIf"], ["name", "checkmark", "class", "checkmark-icon", "color", "success", 4, "ngIf"], ["name", "trash", 1, "delete-icon", 3, "click"], ["name", "checkmark", "color", "success", 1, "checkmark-icon"], ["type", "indeterminate"]], template: function FuelControlFormPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FuelControlFormPage_Template_ion_icon_click_3_listener() { return ctx.dismiss(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "CONTROL COMBUSTIBLE");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, FuelControlFormPage_p_13_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Estaci\u00F3n de servicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, FuelControlFormPage_p_18_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Tipo de combustible");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, FuelControlFormPage_p_23_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "Litros");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, FuelControlFormPage_p_30_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "Precio por litro");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, FuelControlFormPage_p_35_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "ion-col", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](42, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "ion-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FuelControlFormPage_Template_ion_button_click_43_listener() { return ctx.takePicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](44, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, " Tomar foto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](48, FuelControlFormPage_ion_col_48_Template, 5, 4, "ion-col", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](50, FuelControlFormPage_ion_progress_bar_50_Template, 1, 0, "ion-progress-bar", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "ion-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FuelControlFormPage_Template_ion_button_click_51_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, " Aceptar ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.form.controls.fuelType.invalid && ctx.showInputErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.form.controls.liters.invalid && ctx.showInputErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.form.controls.price.invalid && ctx.showInputErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](42, 12, ctx.form.controls.liters.value * ctx.form.controls.price.value, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.submitting);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DecimalPipe"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n  --background: #f4f5f8;\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  background: #f4f5f8;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.control-image[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 150px;\n  width: 100%;\n}\n\n.not-approved[_ngcontent-%COMP%] {\n  --background: #898989;\n  color: white;\n  box-shadow: none;\n}\n\n.approved[_ngcontent-%COMP%] {\n  --background: #c7f3cc;\n  color: black;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL29wZXJhdGlvbi1jb250cm9scy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZnVlbC1jb250cm9sLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6ImZ1ZWwtY29udHJvbC1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5pb24taXRlbS1zbGlkaW5nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCAwIDdweCAycHggbGlnaHRncmV5O1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbmlvbi1pdGVtLW9wdGlvbnMge1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG4uY3VzdG9tLWRhdGUtaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG4uZm9ybS1ncm91cCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udG90YWwge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250cm9sLWltYWdlIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ub3QtYXBwcm92ZWQge1xuICAtLWJhY2tncm91bmQ6ICM4OTg5ODk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmFwcHJvdmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAgI2M3ZjNjYztcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1ncmFkaWVudCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgN3B4IDJweCBsaWdodGdyZXk7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuaW9uLWl0ZW0tb3B0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5jdXN0b20tZGF0ZS1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5mb3JtLWdyb3VwIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b3RhbCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRyb2wtaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vdC1hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogIzg5ODk4OTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYXBwcm92ZWQge1xuICAtLWJhY2tncm91bmQ6ICNjN2YzY2M7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */"] });


/***/ }),

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

/***/ "C8e8":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/controls/fuel-controls/fuel-control-list/fuel-control-list-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: FuelControlListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelControlListPageRoutingModule", function() { return FuelControlListPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fuel_control_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fuel-control-list.page */ "kglt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _fuel_control_list_page__WEBPACK_IMPORTED_MODULE_1__["FuelControlListPage"]
    }
];
class FuelControlListPageRoutingModule {
}
FuelControlListPageRoutingModule.ɵfac = function FuelControlListPageRoutingModule_Factory(t) { return new (t || FuelControlListPageRoutingModule)(); };
FuelControlListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FuelControlListPageRoutingModule });
FuelControlListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FuelControlListPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "YLDz":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/controls/fuel-controls/fuel-control-form/fuel-control-form.module.ts ***!
  \********************************************************************************************/
/*! exports provided: FuelControlFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelControlFormPageModule", function() { return FuelControlFormPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fuel_control_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel-control-form-routing.module */ "m/Ej");
/* harmony import */ var _fuel_control_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fuel-control-form.page */ "3CW4");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class FuelControlFormPageModule {
}
FuelControlFormPageModule.ɵfac = function FuelControlFormPageModule_Factory(t) { return new (t || FuelControlFormPageModule)(); };
FuelControlFormPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FuelControlFormPageModule });
FuelControlFormPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _fuel_control_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["FuelControlFormPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FuelControlFormPageModule, { declarations: [_fuel_control_form_page__WEBPACK_IMPORTED_MODULE_4__["FuelControlFormPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _fuel_control_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["FuelControlFormPageRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]] }); })();


/***/ }),

/***/ "kglt":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/controls/fuel-controls/fuel-control-list/fuel-control-list.page.ts ***!
  \******************************************************************************************/
/*! exports provided: FuelControlListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelControlListPage", function() { return FuelControlListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_v1_fuel_control_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/v1/fuel-control.service */ "241T");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fuel_control_form_fuel_control_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fuel-control-form/fuel-control-form.page */ "3CW4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










function FuelControlListPage_ion_progress_bar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-progress-bar", 9);
} }
function FuelControlListPage_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No tienes ning\u00FAn registro para el mes seleccionado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FuelControlListPage_ion_item_sliding_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-sliding", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-item-options");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-item-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FuelControlListPage_ion_item_sliding_10_Template_ion_item_option_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const fuelControl_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.editFuelControl(fuelControl_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-item-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FuelControlListPage_ion_item_sliding_10_Template_ion_item_option_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const fuelControl_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.presentDeleteFuelControlAlertConfirm(fuelControl_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fuelControl_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Estaci\u00F3n ", fuelControl_r3.station, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fuelControl_r3.fuel_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", fuelControl_r3.liters, " litros ($", fuelControl_r3.price, ") - $", fuelControl_r3.total, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 6, fuelControl_r3.date, "dd/MM/yyyy"));
} }
class FuelControlListPage {
    constructor(modalController, alertController, fuelControlService) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.fuelControlService = fuelControlService;
        this.loading = true;
        this.submitting = false;
        this.fuelControls = [];
        this.date = new Date();
        this.dateFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    ngOnInit() {
        //
    }
    ngAfterViewInit() {
        this.date = new Date();
        this.dateFC.setValue(this.date.toISOString());
        this.getFuelControls();
    }
    onDateChange(event) {
        this.date = new Date(event.detail.value);
        this.getFuelControls();
    }
    getFuelControls() {
        this.loading = true;
        const month = this.date.getMonth() + 1;
        const year = this.date.getFullYear();
        this.fuelControlService.getFuelControls(month, year)
            .subscribe((response) => {
            this.fuelControls = response.fuel_controls;
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }
    addFuelControl() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _fuel_control_form_fuel_control_form_page__WEBPACK_IMPORTED_MODULE_3__["FuelControlFormPage"],
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data && data.success) {
                this.getFuelControls();
            }
        });
    }
    editFuelControl(fuelControl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _fuel_control_form_fuel_control_form_page__WEBPACK_IMPORTED_MODULE_3__["FuelControlFormPage"],
                componentProps: {
                    fuelControl
                }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data && data.success) {
                this.getFuelControls();
            }
        });
    }
    presentDeleteFuelControlAlertConfirm(fuelControl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Desea eliminar registro?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            //
                        }
                    }, {
                        text: 'Sí',
                        handler: () => {
                            this.deleteFuelControl(fuelControl);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteFuelControl(fuelControl) {
        this.submitting = true;
        this.fuelControlService.deleteFuelControl(fuelControl)
            .subscribe((response) => {
            this.fuelControls = this.fuelControls.filter(item => item.id !== fuelControl.id);
            this.submitting = false;
        }, error => {
            this.submitting = false;
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            this.getFuelControls();
            event.target.complete();
        }, 2000);
    }
}
FuelControlListPage.ɵfac = function FuelControlListPage_Factory(t) { return new (t || FuelControlListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_v1_fuel_control_service__WEBPACK_IMPORTED_MODULE_1__["FuelControlService"])); };
FuelControlListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FuelControlListPage, selectors: [["app-fuel-control-list"]], decls: 11, vars: 4, consts: [[1, "ion-padding"], ["lines", "none", 1, "custom-date-item"], ["displayFormat", "MMMM YYYY", "display-timezone", "America/Argentina/Buenos_Aires", "placeholder", "Selecciona el mes", "doneText", "ok", "cancelText", "cancelar", "monthNames", "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre", "monthShortNames", "ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic", "dayNames", "domingo, lunes, martes, mi\u00E9rcoles, jueves, viernes, s\u00E1bado, domingo", "dayShortNames", "dom, lun, mar, mi\u00E9, jue, vie, s\u00E1b, dom", 3, "formControl", "ionChange"], ["class", "ion-margin-top", "type", "indeterminate", 4, "ngIf"], [1, "ion-text-center", "ion-padding-bottom"], [1, "custom-button", 3, "click"], ["slot", "fixed", 3, "ionRefresh"], ["class", "ion-padding-horizontal", 4, "ngIf"], ["class", "ion-margin-bottom", 4, "ngFor", "ngForOf"], ["type", "indeterminate", 1, "ion-margin-top"], [1, "ion-padding-horizontal"], [1, "ion-margin-bottom"], ["lines", "none"], ["size", "7"], [1, "ion-no-margin"], ["size", "5"], ["color", "light", 3, "click"], ["slot", "end", "name", "create"], ["slot", "end", "name", "trash"]], template: function FuelControlListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-datetime", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function FuelControlListPage_Template_ion_datetime_ionChange_2_listener($event) { return ctx.onDateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FuelControlListPage_ion_progress_bar_3_Template, 1, 0, "ion-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FuelControlListPage_Template_ion_button_click_5_listener() { return ctx.addFuelControl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " AGREGAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-refresher", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionRefresh", function FuelControlListPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, FuelControlListPage_p_9_Template, 3, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, FuelControlListPage_ion_item_sliding_10_Template, 23, 9, "ion-item-sliding", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.dateFC);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading || ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.fuelControls.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.fuelControls);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n  --background: #f4f5f8;\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  background: #f4f5f8;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.control-image[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 150px;\n  width: 100%;\n}\n\n.not-approved[_ngcontent-%COMP%] {\n  --background: #898989;\n  color: white;\n  box-shadow: none;\n}\n\n.approved[_ngcontent-%COMP%] {\n  --background: #c7f3cc;\n  color: black;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL29wZXJhdGlvbi1jb250cm9scy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZnVlbC1jb250cm9sLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6ImZ1ZWwtY29udHJvbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5pb24taXRlbS1zbGlkaW5nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCAwIDdweCAycHggbGlnaHRncmV5O1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbmlvbi1pdGVtLW9wdGlvbnMge1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG4uY3VzdG9tLWRhdGUtaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG4uZm9ybS1ncm91cCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udG90YWwge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250cm9sLWltYWdlIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ub3QtYXBwcm92ZWQge1xuICAtLWJhY2tncm91bmQ6ICM4OTg5ODk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmFwcHJvdmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAgI2M3ZjNjYztcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1ncmFkaWVudCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgN3B4IDJweCBsaWdodGdyZXk7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuaW9uLWl0ZW0tb3B0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5jdXN0b20tZGF0ZS1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5mb3JtLWdyb3VwIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b3RhbCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRyb2wtaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vdC1hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogIzg5ODk4OTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYXBwcm92ZWQge1xuICAtLWJhY2tncm91bmQ6ICNjN2YzY2M7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */"] });


/***/ }),

/***/ "ltJ1":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/controls/fuel-controls/fuel-control-list/fuel-control-list.module.ts ***!
  \********************************************************************************************/
/*! exports provided: FuelControlListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelControlListPageModule", function() { return FuelControlListPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fuel_control_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel-control-list-routing.module */ "C8e8");
/* harmony import */ var _fuel_control_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fuel-control-list.page */ "kglt");
/* harmony import */ var _fuel_control_form_fuel_control_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fuel-control-form/fuel-control-form.module */ "YLDz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class FuelControlListPageModule {
}
FuelControlListPageModule.ɵfac = function FuelControlListPageModule_Factory(t) { return new (t || FuelControlListPageModule)(); };
FuelControlListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FuelControlListPageModule });
FuelControlListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _fuel_control_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["FuelControlListPageRoutingModule"],
            _fuel_control_form_fuel_control_form_module__WEBPACK_IMPORTED_MODULE_5__["FuelControlFormPageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FuelControlListPageModule, { declarations: [_fuel_control_list_page__WEBPACK_IMPORTED_MODULE_4__["FuelControlListPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _fuel_control_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["FuelControlListPageRoutingModule"],
        _fuel_control_form_fuel_control_form_module__WEBPACK_IMPORTED_MODULE_5__["FuelControlFormPageModule"]] }); })();


/***/ }),

/***/ "m/Ej":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/controls/fuel-controls/fuel-control-form/fuel-control-form-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: FuelControlFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelControlFormPageRoutingModule", function() { return FuelControlFormPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fuel_control_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fuel-control-form.page */ "3CW4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _fuel_control_form_page__WEBPACK_IMPORTED_MODULE_1__["FuelControlFormPage"]
    }
];
class FuelControlFormPageRoutingModule {
}
FuelControlFormPageRoutingModule.ɵfac = function FuelControlFormPageRoutingModule_Factory(t) { return new (t || FuelControlFormPageRoutingModule)(); };
FuelControlFormPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FuelControlFormPageRoutingModule });
FuelControlFormPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FuelControlFormPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);