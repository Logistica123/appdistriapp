(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-reminders-reminder-form-reminder-form-module~pages-reminders-reminder-list-reminder-list-module"],{

/***/ "kPTf":
/*!*********************************************************************!*\
  !*** ./src/app/pages/reminders/reminder-form/reminder-form.page.ts ***!
  \*********************************************************************/
/*! exports provided: ReminderFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderFormPage", function() { return ReminderFormPage; });
/* harmony import */ var _services_v1_reminder_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/v1/reminder.service */ "rvaX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ReminderFormPage_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Este campo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReminderFormPage_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Este campo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReminderFormPage_ion_progress_bar_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-progress-bar", 18);
} }
class ReminderFormPage {
    constructor(reminderService, formBuilder, modalController) {
        this.reminderService = reminderService;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.showInputErrorMessage = false;
        this.submitting = false;
        this.form = this.formBuilder.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnInit() {
        if (this.reminder) {
            this.setReminder();
        }
        else {
            this.form.controls.type.setValue('once');
        }
    }
    submit() {
        if (this.form.valid) {
            this.showInputErrorMessage = false;
            this.reminder ? this.updateReminder() : this.storeReminder();
        }
        else {
            this.showInputErrorMessage = true;
        }
    }
    storeReminder() {
        this.submitting = true;
        const body = this.setBody();
        this.reminderService.storeReminder(body)
            .subscribe((response) => {
            this.submitting = false;
            this.form.reset();
            this.dismiss(true);
        }, error => {
            this.submitting = false;
        });
    }
    updateReminder() {
        this.submitting = true;
        const body = this.setBody();
        this.reminderService.updateReminder(this.reminder, body)
            .subscribe((response) => {
            this.submitting = false;
            this.form.reset();
            this.dismiss(true);
        }, error => {
            this.submitting = false;
        });
    }
    setReminder() {
        this.form.controls.description.setValue(this.reminder.description);
        this.form.controls.date.setValue(this.reminder.date);
        this.form.controls.type.setValue(this.reminder.type);
    }
    dismiss(success) {
        this.modalController.dismiss({ success });
    }
    setBody() {
        return {
            description: this.form.value.description,
            date: this.form.value.date,
            type: this.form.value.type,
        };
    }
}
ReminderFormPage.ɵfac = function ReminderFormPage_Factory(t) { return new (t || ReminderFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_v1_reminder_service__WEBPACK_IMPORTED_MODULE_0__["ReminderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"])); };
ReminderFormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReminderFormPage, selectors: [["app-reminder-form"]], inputs: { reminder: "reminder" }, decls: 42, vars: 5, consts: [["slot", "end"], ["name", "close", 1, "font-2em", 3, "click"], [3, "formGroup"], [1, "form-group"], ["formControlName", "description"], ["class", "ion-no-margin form-error-message", 4, "ngIf"], ["lines", "none", 1, "custom-item"], ["displayFormat", "DD MMMM YYYY", "formControlName", "date", "doneText", "ok", "cancelText", "cancelar", "monthNames", "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre", "monthShortNames", "ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic", "dayNames", "domingo, lunes, martes, mi\u00E9rcoles, jueves, viernes, s\u00E1bado, domingo", "dayShortNames", "dom, lun, mar, mi\u00E9, jue, vie, s\u00E1b, dom"], ["formControlName", "type"], ["lines", "none"], ["value", "once"], ["value", "monthly"], ["value", "semi_annually"], ["value", "yearly"], [1, "ion-text-center", "ion-margin-bottom"], ["type", "indeterminate", 4, "ngIf"], [1, "custom-button", 3, "disabled", "click"], [1, "ion-no-margin", "form-error-message"], ["type", "indeterminate"]], template: function ReminderFormPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReminderFormPage_Template_ion_icon_click_3_listener() { return ctx.dismiss(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "RECORDATORIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ReminderFormPage_p_12_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ion-datetime", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ReminderFormPage_p_18_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-radio-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Una sola vez");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "ion-radio", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Una vez al mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "ion-radio", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Cada 6 meses");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "ion-radio", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Una vez al a\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "ion-radio", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ReminderFormPage_ion_progress_bar_39_Template, 1, 0, "ion-progress-bar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "ion-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReminderFormPage_Template_ion_button_click_40_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Aceptar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.controls.description.invalid && ctx.showInputErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.controls.date.invalid && ctx.showInputErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.submitting);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonProgressBar"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n  --background: #f4f5f8;\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  background: #f4f5f8;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.control-image[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 150px;\n  width: 100%;\n}\n\n.not-approved[_ngcontent-%COMP%] {\n  --background: #898989;\n  color: white;\n  box-shadow: none;\n}\n\n.approved[_ngcontent-%COMP%] {\n  --background: #c7f3cc;\n  color: black;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL29wZXJhdGlvbi1jb250cm9scy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcmVtaW5kZXItZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoicmVtaW5kZXItZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWdyYWRpZW50KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4IGxpZ2h0Z3JleTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG5pb24taXRlbS1vcHRpb25zIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmN1c3RvbS1kYXRlLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udHJvbC1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm90LWFwcHJvdmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjODk4OTg5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogICNjN2YzY2M7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbiIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5pb24taXRlbS1zbGlkaW5nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCAwIDdweCAycHggbGlnaHRncmV5O1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbmlvbi1pdGVtLW9wdGlvbnMge1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG4uY3VzdG9tLWRhdGUtaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG4uZm9ybS1ncm91cCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udG90YWwge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250cm9sLWltYWdlIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ub3QtYXBwcm92ZWQge1xuICAtLWJhY2tncm91bmQ6ICM4OTg5ODk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmFwcHJvdmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYzdmM2NjO1xuICBjb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ "rvaX":
/*!*************************************************!*\
  !*** ./src/app/services/v1/reminder.service.ts ***!
  \*************************************************/
/*! exports provided: ReminderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderService", function() { return ReminderService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ReminderService {
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.V1 = 'v1/app/';
    }
    getReminders() {
        return this.http.get(`${this.API_URL}${this.V1}reminders`);
    }
    storeReminder(body) {
        return this.http.post(`${this.API_URL}${this.V1}reminders`, body);
    }
    updateReminder(reminder, body) {
        return this.http.post(`${this.API_URL}${this.V1}reminders/${reminder.id}`, body);
    }
    deleteReminder(reminder) {
        return this.http.delete(`${this.API_URL}${this.V1}reminders/${reminder.id}`);
    }
}
ReminderService.ɵfac = function ReminderService_Factory(t) { return new (t || ReminderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ReminderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ReminderService, factory: ReminderService.ɵfac, providedIn: 'root' });


/***/ })

}]);