(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reminders-reminder-list-reminder-list-module"],{

/***/ "NPqo":
/*!*********************************************************************!*\
  !*** ./src/app/pages/reminders/reminder-list/reminder-list.page.ts ***!
  \*********************************************************************/
/*! exports provided: ReminderListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderListPage", function() { return ReminderListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_v1_reminder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v1/reminder.service */ "rvaX");
/* harmony import */ var _reminder_form_reminder_form_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reminder-form/reminder-form.page */ "kPTf");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ReminderListPage_ion_progress_bar_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-progress-bar", 9);
} }
function ReminderListPage_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No tienes ning\u00FAn recordatorio configurado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReminderListPage_ion_item_sliding_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-sliding", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-item-options");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-item-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReminderListPage_ion_item_sliding_14_Template_ion_item_option_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const reminder_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.presentReminderAlertConfirm(reminder_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reminder_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 3, reminder_r3.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](reminder_r3.type_es);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](reminder_r3.description);
} }
class ReminderListPage {
    constructor(reminderService, alertController, modalController) {
        this.reminderService = reminderService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.reminders = [];
        this.loading = true;
        this.submitting = false;
    }
    ngOnInit() {
        this.getReminders();
    }
    getReminders() {
        this.loading = true;
        this.reminderService.getReminders()
            .subscribe((response) => {
            this.reminders = response.reminders;
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }
    addReminder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _reminder_form_reminder_form_page__WEBPACK_IMPORTED_MODULE_2__["ReminderFormPage"],
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data && data.success) {
                this.getReminders();
            }
        });
    }
    editReminder(reminder) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _reminder_form_reminder_form_page__WEBPACK_IMPORTED_MODULE_2__["ReminderFormPage"],
                componentProps: { reminder }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data && data.success) {
                this.getReminders();
            }
        });
    }
    presentReminderAlertConfirm(reminder) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Desea eliminar el recordatorio?',
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
                            this.deleteReminder(reminder);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteReminder(reminder) {
        this.submitting = true;
        this.reminderService.deleteReminder(reminder)
            .subscribe((response) => {
            this.reminders = this.reminders.filter(item => item.id !== reminder.id);
            this.submitting = false;
        }, error => {
            this.submitting = false;
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            this.getReminders();
            event.target.complete();
        }, 2000);
    }
}
ReminderListPage.ɵfac = function ReminderListPage_Factory(t) { return new (t || ReminderListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_v1_reminder_service__WEBPACK_IMPORTED_MODULE_1__["ReminderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"])); };
ReminderListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ReminderListPage, selectors: [["app-reminder-list"]], decls: 15, vars: 3, consts: [["slot", "start"], ["autoHide", "false"], [1, "ion-padding"], [1, "ion-text-center", "ion-padding-bottom"], [1, "custom-button", 3, "click"], ["class", "ion-margin-top", "type", "indeterminate", 4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], ["class", "ion-padding-horizontal", 4, "ngIf"], ["class", "ion-margin-bottom", 4, "ngFor", "ngForOf"], ["type", "indeterminate", 1, "ion-margin-top"], [1, "ion-padding-horizontal"], [1, "ion-margin-bottom"], ["lines", "none"], ["size", "6"], [1, "ion-no-margin"], ["size", "12"], ["color", "light", 3, "click"], ["slot", "end", "name", "trash"]], template: function ReminderListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-menu-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "RECORDATORIOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReminderListPage_Template_ion_button_click_8_listener() { return ctx.addReminder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " AGREGAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ReminderListPage_ion_progress_bar_10_Template, 1, 0, "ion-progress-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-refresher", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionRefresh", function ReminderListPage_Template_ion_refresher_ionRefresh_11_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ReminderListPage_p_13_Template, 3, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ReminderListPage_ion_item_sliding_14_Template, 21, 6, "ion-item-sliding", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading || ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.reminders.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.reminders);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n  --background: #f4f5f8;\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  background: #f4f5f8;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.control-image[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 150px;\n  width: 100%;\n}\n\n.not-approved[_ngcontent-%COMP%] {\n  --background: #898989;\n  color: white;\n  box-shadow: none;\n}\n\n.approved[_ngcontent-%COMP%] {\n  --background: #c7f3cc;\n  color: black;\n  box-shadow: none;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL29wZXJhdGlvbi1jb250cm9scy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcmVtaW5kZXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FBckRBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQXdERiIsImZpbGUiOiJyZW1pbmRlci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5pb24taXRlbS1zbGlkaW5nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCAwIDdweCAycHggbGlnaHRncmV5O1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbmlvbi1pdGVtLW9wdGlvbnMge1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG4uY3VzdG9tLWRhdGUtaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG4uZm9ybS1ncm91cCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udG90YWwge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250cm9sLWltYWdlIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ub3QtYXBwcm92ZWQge1xuICAtLWJhY2tncm91bmQ6ICM4OTg5ODk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmFwcHJvdmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAgI2M3ZjNjYztcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL29wZXJhdGlvbi1jb250cm9scy5zY3NzXCI7XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuIl19 */"] });


/***/ }),

/***/ "ksxs":
/*!***********************************************************************!*\
  !*** ./src/app/pages/reminders/reminder-list/reminder-list.module.ts ***!
  \***********************************************************************/
/*! exports provided: ReminderListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderListPageModule", function() { return ReminderListPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reminder_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reminder-list-routing.module */ "szb6");
/* harmony import */ var _reminder_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reminder-list.page */ "NPqo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ReminderListPageModule {
}
ReminderListPageModule.ɵfac = function ReminderListPageModule_Factory(t) { return new (t || ReminderListPageModule)(); };
ReminderListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ReminderListPageModule });
ReminderListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _reminder_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReminderListPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ReminderListPageModule, { declarations: [_reminder_list_page__WEBPACK_IMPORTED_MODULE_4__["ReminderListPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _reminder_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReminderListPageRoutingModule"]] }); })();


/***/ }),

/***/ "szb6":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/reminders/reminder-list/reminder-list-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ReminderListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderListPageRoutingModule", function() { return ReminderListPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reminder_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reminder-list.page */ "NPqo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _reminder_list_page__WEBPACK_IMPORTED_MODULE_1__["ReminderListPage"]
    }
];
class ReminderListPageRoutingModule {
}
ReminderListPageRoutingModule.ɵfac = function ReminderListPageRoutingModule_Factory(t) { return new (t || ReminderListPageRoutingModule)(); };
ReminderListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ReminderListPageRoutingModule });
ReminderListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReminderListPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);