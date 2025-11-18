(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-journeys-journey-form-journey-form-module~pages-journeys-journey-list-journey-list-module"],{

/***/ "RV/N":
/*!******************************************************************!*\
  !*** ./src/app/pages/journeys/journey-form/journey-form.page.ts ***!
  \******************************************************************/
/*! exports provided: JourneyFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyFormPage", function() { return JourneyFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/v1/order.service */ "EXzW");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/toast/toast.component */ "COqc");
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/loading-spinner/loading-spinner.component */ "nk+c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_v1_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/v1/location.service */ "fRX6");
/* harmony import */ var _components_modals_location_map_location_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/modals/location-map/location-map.component */ "34vB");
/* harmony import */ var _services_v1_geocode_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/v1/geocode.service */ "fAXw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");





















function JourneyFormPage_ion_list_9_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JourneyFormPage_ion_list_9_ion_item_1_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const location_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.selectLocation(location_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](location_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](location_r3.full_address);
} }
function JourneyFormPage_ion_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JourneyFormPage_ion_list_9_ion_item_1_Template, 7, 2, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.filteredLocations);
} }
function JourneyFormPage_form_10_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Por favor introduzca este campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function JourneyFormPage_form_10_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Por favor introduzca este campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function JourneyFormPage_form_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Nombre (*)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, JourneyFormPage_form_10_p_5_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Direcci\u00F3n (*)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, JourneyFormPage_form_10_p_10_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ciudad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Nota de ayuda para llegar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Horarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "N\u00FAmeros telef\u00F3nicos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "ion-textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.location_name.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.address.errors);
} }
class JourneyFormPage {
    constructor(formBuilder, ngZone, orderService, toastComponent, loadingSpinnerComponent, router, geocodeService, modalController, locationService) {
        this.formBuilder = formBuilder;
        this.ngZone = ngZone;
        this.orderService = orderService;
        this.toastComponent = toastComponent;
        this.loadingSpinnerComponent = loadingSpinnerComponent;
        this.router = router;
        this.geocodeService = geocodeService;
        this.modalController = modalController;
        this.locationService = locationService;
        this.loading = false;
        this.searching = true;
        this.locationExists = false;
        this.searchInputFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.locations = [];
        this.filteredLocations = [];
        this.hasNewOrder = false;
        this.defaultLat = -27.4862341;
        this.defaultLng = -58.8624276;
        this.form = this.formBuilder.group({
            location_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['Buenos Aires', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            notes: [''],
            opening_hours: [''],
            phones: ['']
        });
    }
    ngOnInit() {
        // this.orderService.currentOrders.subscribe(updated => {
        //   this.getLocations();
        // });
        this.searchInputFormControl.valueChanges.subscribe(val => {
            this.form.controls.location_name.setValue(val);
            this.form.controls.address.setValue(val);
        });
    }
    getLocations() {
        this.locationService.getLocations()
            .subscribe((response) => {
            this.locations = response.locations;
        }, error => {
            //
        }, () => {
            //
        });
    }
    submit() {
        if (!this.locationExists) {
            this.geocodeAddress();
        }
        else {
            this.storeOrder();
        }
    }
    storeOrder() {
        const body = {
            type: 'journey',
            location_id: this.location.id,
            notes: this.form.value.notes,
            opening_hours: this.form.value.opening_hours,
            phones: this.form.value.phones,
        };
        this.orderService.store(body)
            .subscribe((response) => {
            // this.orderService.setUpdatedOrders(true);
            //
            this.router.navigateByUrl('journey-list');
        }, error => {
            //
        }, () => {
            this.resetForm();
            this.searchInputFormControl.setValue('');
        });
    }
    geocodeAddress() {
        const address = this.form.value.location_name + ', ' +
            this.form.value.address + ', ' +
            this.form.value.city;
        const country = 'Argentina';
        this.geocodeService.mapQuestGeocode(address, country).then((result) => {
            this.showLocationMap(result.lat, result.lng);
        }).catch(err => {
            this.geocodeService.GMGeocodeAddress(address, country).then((result) => {
                this.showLocationMap(result.lat, result.lng);
            }).catch(error => {
                this.showLocationMap(this.defaultLat, this.defaultLng);
            });
        });
    }
    showLocationMap(lat, lng) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_location_map_location_map_component__WEBPACK_IMPORTED_MODULE_9__["LocationMapComponent"],
                cssClass: 'modal-show-location-map',
                componentProps: {
                    lat,
                    lng
                }
            });
            yield modal.present();
            modal.onDidDismiss().then(data => {
                if (data.data && data.data.success) {
                    this.handleResults(data.data.lat, data.data.lng);
                }
            });
        });
    }
    handleResults(lat, lng) {
        let locality = '';
        let administrativeAreaLevel1 = '';
        let administrativeAreaLevel2 = '';
        if (this.results.length > 0) {
            this.results[0].address_components.map(addressComponent => {
                addressComponent.types.map(type => {
                    if (type === 'locality') {
                        locality = addressComponent.long_name;
                    }
                    else if (type === 'administrative_area_level_1') {
                        administrativeAreaLevel1 = addressComponent.long_name;
                    }
                    else if (type === 'administrative_area_level_2') {
                        administrativeAreaLevel2 = addressComponent.long_name;
                    }
                });
            });
        }
        const body = {
            type: 'journey',
            name: this.form.value.location_name,
            address: this.form.value.address,
            city: this.form.value.city,
            notes: this.form.value.notes,
            opening_hours: this.form.value.opening_hours,
            phones: this.form.value.phones,
            locality,
            administrative_area_level_1: administrativeAreaLevel1,
            administrative_area_level_2: administrativeAreaLevel2,
            lat,
            lng
        };
        this.storeLocation(body);
    }
    storeLocation(body) {
        this.locationService.storeLocation(body)
            .subscribe((response) => {
            this.hasNewOrder = true;
            this.router.navigateByUrl('journey-list');
        }, error => {
            var _a;
            const message = ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.custom_message) || 'No se pudo registrar la dirección';
            this.toastComponent.presentToast(message, 'middle', 3000);
        }, () => {
            //
            this.resetForm();
            this.searchInputFormControl.setValue('');
        });
    }
    selectLocation(location) {
        this.locationExists = true;
        this.location = location;
        this.searching = false;
        this.filteredLocations = [];
        this.form.controls.location_name.setValue(location.name);
        this.form.controls.location_name.disable();
        this.form.controls.address.disable();
        this.form.controls.address.setValue(location.address);
        this.form.controls.address.disable();
        this.form.controls.city.setValue(location.city);
        this.form.controls.city.disable();
        this.form.controls.notes.setValue(location.notes);
        this.form.controls.opening_hours.setValue(location.opening_hours);
        this.form.controls.phones.setValue(location.phones);
    }
    search(event) {
        this.searching = true;
        this.locationExists = false;
        this.resetForm();
        const keyword = event.detail.value.toLowerCase();
        if (keyword === '') {
            this.filteredLocations = [];
        }
        else {
            this.filteredLocations = this.locations.filter(location => location.name.toLowerCase().includes(keyword)
                || location.full_address.toLowerCase().includes(keyword));
        }
        if (this.filteredLocations.length <= 0) {
            this.searching = false;
        }
    }
    clear() {
        this.searching = false;
        this.filteredLocations = [];
    }
    resetForm() {
        this.form.controls.location_name.setValue(this.searchInputFormControl.value);
        this.form.controls.address.setValue('');
        this.form.controls.city.setValue('Corrientes');
        this.form.controls.notes.setValue('');
        this.form.controls.opening_hours.setValue('');
        this.form.controls.phones.setValue('');
        this.form.controls.location_name.enable();
        this.form.controls.address.enable();
        this.form.controls.city.enable();
        this.form.controls.notes.enable();
        this.form.controls.opening_hours.enable();
        this.form.controls.phones.enable();
    }
    dismiss() {
        this.modalController.dismiss({ hasNewOrder: this.hasNewOrder });
    }
}
JourneyFormPage.ɵfac = function JourneyFormPage_Factory(t) { return new (t || JourneyFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__["LoadingSpinnerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_geocode_service__WEBPACK_IMPORTED_MODULE_10__["GeocodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"])); };
JourneyFormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JourneyFormPage, selectors: [["app-journey-form"]], decls: 15, vars: 4, consts: [["no-border", ""], ["color", "primary"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], [1, "ion-padding"], ["placeholder", "Buscar", "debounce", "500", 3, "formControl", "ionChange", "ionClear"], [4, "ngIf"], [3, "formGroup", 4, "ngIf"], ["color", "primary", "shape", "round", "size", "full", 3, "disabled", "click"], ["tappable", "", 3, "click", 4, "ngFor", "ngForOf"], ["tappable", "", 3, "click"], [1, "ion-text-wrap"], [3, "formGroup"], ["position", "floating"], ["formControlName", "location_name"], ["class", "form-error-message", 4, "ngIf"], ["rows", "5", "formControlName", "address"], ["formControlName", "city"], ["rows", "5", "formControlName", "notes"], ["rows", "2", "formControlName", "opening_hours"], ["rows", "2", "formControlName", "phones"], [1, "form-error-message"]], template: function JourneyFormPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JourneyFormPage_Template_ion_button_click_3_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "AGREGAR UBICACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-searchbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function JourneyFormPage_Template_ion_searchbar_ionChange_8_listener($event) { return ctx.search($event); })("ionClear", function JourneyFormPage_Template_ion_searchbar_ionClear_8_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, JourneyFormPage_ion_list_9_Template, 2, 1, "ion-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, JourneyFormPage_form_10_Template, 27, 3, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JourneyFormPage_Template_ion_button_click_13_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " AGREGAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchInputFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredLocations.length > 0 && ctx.searching);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredLocations.length <= 0 && !ctx.searching);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.value.location_name === "" || ctx.form.value.address === "" || ctx.form.value.city === "");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTextarea"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb3VybmV5LWZvcm0ucGFnZS5zY3NzIn0= */"] });


/***/ }),

/***/ "fAXw":
/*!************************************************!*\
  !*** ./src/app/services/v1/geocode.service.ts ***!
  \************************************************/
/*! exports provided: GeocodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocodeService", function() { return GeocodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class GeocodeService {
    constructor(ngZone, http) {
        this.ngZone = ngZone;
        this.http = http;
    }
    mapQuestGeocode(addressToGeocode, country) {
        return new Promise((resolve, reject) => {
            const address = `${addressToGeocode},${country}`;
            this.geocodeMapQuestAddress(address)
                .subscribe((response) => {
                const data = response;
                if (data.results && data.results.length > 0) {
                    if (data.results[0].locations && data.results[0].locations.length > 0) {
                        if (data.results[0].locations[0].latLng) {
                            const lat = data.results[0].locations[0].latLng.lat;
                            const lng = data.results[0].locations[0].latLng.lng;
                            resolve({ lat, lng });
                        }
                    }
                }
                else {
                    reject();
                }
            }, error => {
                reject(error);
            });
        });
    }
    GMGeocodeAddress(addressToGeocode, country) {
        return new Promise((resolve, reject) => {
            const self = this;
            const address = `${addressToGeocode},${country}`;
            const geocoder = new google.maps.Geocoder();
            // tslint:disable-next-line:only-arrow-functions
            geocoder.geocode({ address }, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    self.ngZone.run(() => {
                        self.results = results;
                        const lat = results[0].geometry.location.lat();
                        const lng = results[0].geometry.location.lng();
                        resolve({ lat, lng });
                    });
                }
                else {
                    reject(status);
                    // alert('Geocode was not successful for the following reason: ' + status);
                    if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                        // self.toastComponent.presentToast('El API de Google Maps no encontró resultados');
                    }
                }
            });
        });
    }
    geocodeMapQuestAddress(address) {
        const key = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mapquest.key;
        const endpoint = 'http://www.mapquestapi.com/geocoding/v1/address';
        const url = `${endpoint}?key=${key}&location=${address}&thumbMaps=false&boundingBox=-21.357261,-74.723118,-57.6807156,-41.57098356&maxResults=1`;
        return this.http.get(`${url}`);
    }
}
GeocodeService.ɵfac = function GeocodeService_Factory(t) { return new (t || GeocodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GeocodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeocodeService, factory: GeocodeService.ɵfac, providedIn: 'root' });


/***/ })

}]);