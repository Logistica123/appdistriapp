(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.page */ "bP1B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class LoginPageModule {
}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); };
LoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginPageRoutingModule"]] }); })();


/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ "bP1B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_1__["LoginPage"]
    }
];
class LoginPageRoutingModule {
}
LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) { return new (t || LoginPageRoutingModule)(); };
LoginPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginPageRoutingModule });
LoginPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_v1_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/v1/auth.service */ "HNOL");
/* harmony import */ var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/v1/driver.service */ "rTgA");
/* harmony import */ var _services_v1_device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/v1/device.service */ "NQre");
/* harmony import */ var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/v1/geolocation.service */ "3Cxn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "92l+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_v1_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/v1/location.service */ "fRX6");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");



























function LoginPage_ion_content_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Acceso conductores");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Bienvenido a DistriApp");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Ingres\u00E1 tus credenciales para continuar con tus entregas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "Recordarme");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "ion-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LoginPage_ion_content_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r1.signIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, " INGRESAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LoginPage_ion_content_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r3.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, " CREAR CUENTA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, " V3.2.5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r0.signInForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r0.signInForm.valid);
} }
class LoginPage {
    constructor(storage, formBuilder, driverService, deviceService, locationAccuracy, geolocationService, router, locationService, platform, alertController, afAuth, afs, authService) {
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.driverService = driverService;
        this.deviceService = deviceService;
        this.locationAccuracy = locationAccuracy;
        this.geolocationService = geolocationService;
        this.router = router;
        this.locationService = locationService;
        this.platform = platform;
        this.alertController = alertController;
        this.afAuth = afAuth;
        this.afs = afs;
        this.authService = authService;
        this.loading = false;
        this.checkingCredentials = true;
        this.signInForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            checkbox: [false]
        });
    }
    ngOnInit() {
        this.checkingCredentials = true;
        Promise.all([
            this.storage.get('remember'),
            this.storage.get('auth_token')
        ]).then(values => {
            const remember = values[0];
            const authToken = values[1];
            console.log(this.platform.is('mobileweb'));
            if (remember && authToken) {
                if (this.platform.is('mobileweb')) {
                    this.watchPosition();
                    this.navigate();
                }
                else {
                    this.requestLocationAccuracy();
                }
            }
            else {
                this.checkingCredentials = false;
            }
        });
    }
    signIn() {
        const credentials = {
            email: this.signInForm.value.email,
            password: this.signInForm.value.password
        };
        this.signInForm.value.checkbox
            ? this.storage.set('remember', true)
            : this.storage.set('remember', false);
        this.authService.signIn(credentials)
            .subscribe((response) => {
            const driver = response.driver;
            this.setProfile(driver);
            this.locationService.setLocations$(response.locations);
            Promise.all([
                this.storage.set('senderId', response.email),
                this.storage.set('adminEmail', response.admin_email),
                this.storage.set('auth_token', response.auth_token)
            ]).then(() => {
                this.deviceService.storeDevice();
                this.watchPosition();
                this.navigate();
            });
        }, error => {
            this.loading = false;
        });
    }
    register() {
        this.router.navigateByUrl('register');
    }
    requestLocationAccuracy() {
        this.locationAccuracy.canRequest().then((canRequest) => {
            this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
                .then(() => {
                this.watchPosition();
                this.router.navigateByUrl('urban-distribution-list');
            }, error => {
                console.log(error);
                this.presentAlert();
            });
        }).catch(err => {
            console.log(err);
        });
    }
    setProfile(driver) {
        this.driverService.setDriver$(driver);
    }
    watchPosition() {
        this.geolocationService.watchPosition();
    }
    navigate() {
        // this.router.navigateByUrl('urban-distribution-list');
        this.router.navigateByUrl('profile/profile-data');
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'No se pudo obtener ubicación actual. ' +
                    'Por favor concede los permisos para que la aplicación pueda utilizar el GPS de su dispositivo móvil',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    createFirebaseUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('creating firebase user');
            const credentials = yield this.afAuth.createUserWithEmailAndPassword(this.signInForm.value.email, this.signInForm.value.email);
            console.log('result', credentials);
            const uid = credentials.user.uid;
            console.log(uid);
        });
    }
}
LoginPage.ɵfac = function LoginPage_Factory(t) { return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_device_service__WEBPACK_IMPORTED_MODULE_5__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__["LocationAccuracy"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: LoginPage, selectors: [["app-login"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "header"], ["src", "assets/distriapplogo-cropped.png", "alt", "DistriApp", 1, "header__logo"], [1, "content"], [1, "form-card"], [1, "form-card__header"], [1, "form-card__eyebrow"], [1, "form-card__title"], [1, "form-card__subtitle"], [1, "form-card__body", 3, "formGroup"], [1, "input-field"], ["name", "mail-outline"], ["type", "text", "placeholder", "Correo electr\u00F3nico", "formControlName", "email", "inputmode", "email"], ["name", "lock-closed-outline"], ["type", "password", "placeholder", "Contrase\u00F1a", "formControlName", "password"], ["lines", "none", 1, "remember-toggle"], ["formControlName", "checkbox", "slot", "end", "color", "primary"], [1, "form-card__actions"], ["type", "button", 3, "disabled", "click"], ["type", "button", 1, "secondary", 3, "click"], [1, "footer"]], template: function LoginPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, LoginPage_ion_content_0_Template, 30, 2, "ion-content", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.checkingCredentials);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["BooleanValueAccessor"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: linear-gradient(180deg, #dce9ff 0%, #fef1e4 100%);\n  color: #15325b;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 22%;\n  border-radius: 0 0 52% 52%/0 0 62% 62%;\n  border-bottom: 0;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(31, 118, 198, 0.16) 0%, rgba(239, 89, 82, 0.16) 65%, rgba(255, 255, 255, 0.5) 100%);\n  margin: 0 auto;\n  text-align: center;\n  font-size: 2em;\n  color: #15325b;\n  padding: 12% 14% 18%;\n  position: relative;\n  box-shadow: 0 22px 48px rgba(21, 72, 130, 0.18);\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: clamp(180px, 24vw, 320px);\n  max-height: 240px;\n  display: inline-block;\n  margin-top: -7%;\n  filter: drop-shadow(0 12px 26px rgba(15, 35, 66, 0.22));\n  image-rendering: -webkit-optimize-contrast;\n  animation: logoFloat 8s ease-in-out infinite;\n  will-change: transform, filter;\n  transition: transform 0.4s ease, filter 0.4s ease;\n}\n\n.header__logo[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px) scale(1.02);\n  filter: drop-shadow(0 18px 34px rgba(15, 35, 66, 0.28));\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 0 24px 48px;\n  margin-top: -36px;\n  display: flex;\n  justify-content: center;\n  color: #15325b;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  width: min(720px, 100%);\n  background: rgba(255, 255, 255, 0.94);\n  border-radius: 24px;\n  padding: 36px 42px 40px;\n  box-shadow: 0 28px 60px rgba(21, 50, 91, 0.16);\n  backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n\n.form-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  text-align: left;\n}\n\n.form-card__eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.28em;\n  color: rgba(21, 50, 91, 0.55);\n}\n\n.form-card__title[_ngcontent-%COMP%] {\n  font-size: clamp(1.5rem, 2vw, 2rem);\n  font-weight: 700;\n  color: #15325b;\n  margin: 0;\n}\n\n.form-card__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: rgba(21, 50, 91, 0.7);\n}\n\n.form-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.input-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 18px;\n  border-radius: 16px;\n  background: linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(229, 238, 255, 0.9));\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 12px 22px rgba(21, 72, 130, 0.1);\n  border: 1px solid rgba(21, 90, 162, 0.12);\n}\n\n.input-field[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: rgba(21, 50, 91, 0.66);\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #15325b;\n  letter-spacing: 0;\n  padding: 0;\n  text-align: left;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(21, 50, 91, 0.48);\n  font-weight: 500;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(21, 50, 91, 0.48);\n  font-weight: 500;\n}\n\n.input-field[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(31, 118, 198, 0.55);\n  box-shadow: 0 18px 32px rgba(21, 72, 130, 0.16);\n}\n\n.remember-toggle[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: rgba(21, 50, 91, 0.76);\n  margin: 4px 0 0;\n  --inner-padding-end: 0;\n  font-weight: 600;\n  --padding-start: 0;\n  --padding-end: 0;\n  --min-height: 42px;\n  align-items: center;\n}\n\n.remember-toggle[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n}\n\n.form-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: flex-end;\n}\n\n.form-card__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: linear-gradient(140deg, #1f6eb5 0%, #0d4e86 60%);\n  border-radius: 14px;\n  height: 48px;\n  outline: none;\n  padding: 12px 36px;\n  font-weight: 700;\n  color: #ffffff;\n  border: 0;\n  box-shadow: 0 14px 28px rgba(18, 74, 134, 0.24);\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;\n}\n\nbutton[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: translateY(-1px);\n  box-shadow: 0 18px 32px rgba(18, 74, 134, 0.28);\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  box-shadow: none;\n}\n\n.secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid #e53935;\n  color: #e53935;\n  box-shadow: none;\n  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;\n}\n\n.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(229, 57, 53, 0.08);\n  box-shadow: 0 10px 20px rgba(229, 57, 53, 0.16);\n}\n\n.footer[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 24px;\n  color: rgba(21, 50, 91, 0.75);\n  position: fixed;\n  font-weight: 600;\n}\n\n.remember-toggle[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --size: 20px;\n  --checkbox-background-checked: #1f6eb5;\n  --border-color: rgba(21, 50, 91, 0.35);\n  --border-color-checked: #1f6eb5;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 18% 12% 20%;\n    height: 26%;\n  }\n\n  .header__logo[_ngcontent-%COMP%] {\n    width: clamp(170px, 42vw, 260px);\n    margin-top: -7%;\n    animation-duration: 10s;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    padding: 0 16px 48px;\n  }\n\n  .form-card[_ngcontent-%COMP%] {\n    padding: 28px 24px 32px;\n    gap: 24px;\n  }\n\n  .form-card__actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .form-card__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.theme-dark[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: linear-gradient(190deg, #09162b 0%, #050a16 100%);\n  color: #e6ecf9;\n}\n\n.theme-dark[_nghost-%COMP%]   .header[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  background: linear-gradient(185deg, rgba(18, 53, 99, 0.55) 0%, rgba(7, 18, 38, 0.85) 80%, rgba(5, 10, 22, 0.9) 100%);\n  box-shadow: 0 28px 54px rgba(3, 10, 24, 0.6);\n  color: #e6ecf9;\n}\n\n.theme-dark[_nghost-%COMP%]   .header__logo[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .header__logo[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 18px 38px rgba(5, 12, 26, 0.45));\n}\n\n.theme-dark[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #e6ecf9;\n}\n\n.theme-dark[_nghost-%COMP%]   .form-card[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: linear-gradient(165deg, rgba(13, 25, 44, 0.94) 0%, rgba(9, 18, 34, 0.94) 100%);\n  box-shadow: 0 30px 70px rgba(2, 6, 16, 0.6);\n  border: 1px solid rgba(75, 114, 185, 0.18);\n}\n\n.theme-dark[_nghost-%COMP%]   .form-card__eyebrow[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .form-card__eyebrow[_ngcontent-%COMP%] {\n  color: rgba(226, 236, 255, 0.62);\n}\n\n.theme-dark[_nghost-%COMP%]   .form-card__title[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .form-card__title[_ngcontent-%COMP%] {\n  color: #f4f8ff;\n}\n\n.theme-dark[_nghost-%COMP%]   .form-card__subtitle[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .form-card__subtitle[_ngcontent-%COMP%] {\n  color: rgba(226, 236, 255, 0.65);\n}\n\n.theme-dark[_nghost-%COMP%]   .input-field[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  background: linear-gradient(150deg, rgba(18, 38, 68, 0.85), rgba(11, 24, 46, 0.9));\n  border: 1px solid rgba(72, 118, 191, 0.22);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 12px 24px rgba(3, 10, 24, 0.4);\n}\n\n.theme-dark[_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: rgba(226, 236, 255, 0.72);\n}\n\n.theme-dark[_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #f4f8ff;\n}\n\n.theme-dark[_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, .theme-dark   [_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(226, 236, 255, 0.45);\n}\n\n.theme-dark[_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .theme-dark   [_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(226, 236, 255, 0.45);\n}\n\n.theme-dark[_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]:focus-within, .theme-dark   [_nghost-%COMP%]   .input-field[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(101, 149, 233, 0.7);\n  box-shadow: 0 18px 36px rgba(9, 24, 45, 0.58);\n}\n\n.theme-dark[_nghost-%COMP%]   .remember-toggle[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .remember-toggle[_ngcontent-%COMP%] {\n  --color: rgba(226, 236, 255, 0.75);\n}\n\n.theme-dark[_nghost-%COMP%]   button[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background: linear-gradient(140deg, #3b7ed8 0%, #1a54a8 70%);\n  box-shadow: 0 18px 36px rgba(12, 40, 94, 0.5);\n}\n\n.theme-dark[_nghost-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover, .theme-dark   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover {\n  box-shadow: 0 22px 40px rgba(12, 40, 94, 0.6);\n}\n\n.theme-dark[_nghost-%COMP%]   .secondary[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%] {\n  border-color: #ff6b6f;\n  color: #ff6b6f;\n}\n\n.theme-dark[_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]:hover, .theme-dark   [_nghost-%COMP%]   .secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 107, 111, 0.12);\n  box-shadow: 0 14px 30px rgba(255, 107, 111, 0.26);\n}\n\n.theme-dark[_nghost-%COMP%]   .footer[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .footer[_ngcontent-%COMP%] {\n  color: rgba(226, 236, 255, 0.65);\n}\n\n.theme-dark[_nghost-%COMP%]   .remember-toggle[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .remember-toggle[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --checkbox-background-checked: #3b7ed8;\n  --border-color: rgba(226, 236, 255, 0.4);\n  --border-color-checked: #3b7ed8;\n}\n\n@keyframes logoFloat {\n  0% {\n    transform: translateY(0) rotate(0deg);\n  }\n  20% {\n    transform: translateY(-6px) rotate(-0.75deg);\n  }\n  40% {\n    transform: translateY(3px) rotate(0.75deg);\n  }\n  60% {\n    transform: translateY(-4px) rotate(-0.5deg);\n  }\n  80% {\n    transform: translateY(2px) rotate(0.5deg);\n  }\n  100% {\n    transform: translateY(0) rotate(0deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtEQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEhBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVEQUFBO0VBQ0EsMENBQUE7RUFDQSw0Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsaURBQUE7QUFDRjs7QUFFQTtFQUNFLHVDQUFBO0VBQ0EsdURBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0ZBQUE7RUFDQSxzRkFBQTtF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QXVCQTtJQUNFLHlDQUFBO0VBckJGO0VBdUJBO0lBQ0UscUNBQUE7RUFyQkY7QUFDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2RjZTlmZiAwJSwgI2ZlZjFlNCAxMDAlKTtcbiAgY29sb3I6ICMxNTMyNWI7XG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDIyJTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDUyJSA1MiUgLyAwIDAgNjIlIDYyJTtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMzEsIDExOCwgMTk4LCAwLjE2KSAwJSwgcmdiYSgyMzksIDg5LCA4MiwgMC4xNikgNjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMTAwJSk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzE1MzI1YjtcbiAgcGFkZGluZzogMTIlIDE0JSAxOCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMCAyMnB4IDQ4cHggcmdiYSgyMSwgNzIsIDEzMCwgMC4xOCk7XG59XG5cbi5oZWFkZXJfX2xvZ28ge1xuICB3aWR0aDogY2xhbXAoMTgwcHgsIDI0dncsIDMyMHB4KTtcbiAgbWF4LWhlaWdodDogMjQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogLTclO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMTJweCAyNnB4IHJnYmEoMTUsIDM1LCA2NiwgMC4yMikpO1xuICBpbWFnZS1yZW5kZXJpbmc6IC13ZWJraXQtb3B0aW1pemUtY29udHJhc3Q7XG4gIGFuaW1hdGlvbjogbG9nb0Zsb2F0IDhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBmaWx0ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UsIGZpbHRlciAwLjRzIGVhc2U7XG59XG5cbi5oZWFkZXJfX2xvZ286aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCkgc2NhbGUoMS4wMik7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxOHB4IDM0cHggcmdiYSgxNSwgMzUsIDY2LCAwLjI4KSk7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMCAyNHB4IDQ4cHg7XG4gIG1hcmdpbi10b3A6IC0zNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICMxNTMyNWI7XG59XG5cbi5mb3JtLWNhcmQge1xuICB3aWR0aDogbWluKDcyMHB4LCAxMDAlKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0KTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgcGFkZGluZzogMzZweCA0MnB4IDQwcHg7XG4gIGJveC1zaGFkb3c6IDAgMjhweCA2MHB4IHJnYmEoMjEsIDUwLCA5MSwgMC4xNik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyOHB4O1xufVxuXG4uZm9ybS1jYXJkX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmZvcm0tY2FyZF9fZXllYnJvdyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4yOGVtO1xuICBjb2xvcjogcmdiYSgyMSwgNTAsIDkxLCAwLjU1KTtcbn1cblxuLmZvcm0tY2FyZF9fdGl0bGUge1xuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMnZ3LCAycmVtKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxNTMyNWI7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZvcm0tY2FyZF9fc3VidGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgY29sb3I6IHJnYmEoMjEsIDUwLCA5MSwgMC43KTtcbn1cblxuLmZvcm0tY2FyZF9fYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMThweDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NiksIHJnYmEoMjI5LCAyMzgsIDI1NSwgMC45KSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCAwIDEycHggMjJweCByZ2JhKDIxLCA3MiwgMTMwLCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxLCA5MCwgMTYyLCAwLjEyKTtcbn1cblxuLmlucHV0LWZpZWxkIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiByZ2JhKDIxLCA1MCwgOTEsIDAuNjYpO1xufVxuXG4uaW5wdXQtZmllbGQgaW5wdXQge1xuICBmbGV4OiAxO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMTUzMjViO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmlucHV0LWZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDIxLCA1MCwgOTEsIDAuNDgpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaW5wdXQtZmllbGQ6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDMxLCAxMTgsIDE5OCwgMC41NSk7XG4gIGJveC1zaGFkb3c6IDAgMThweCAzMnB4IHJnYmEoMjEsIDcyLCAxMzAsIDAuMTYpO1xufVxuXG4ucmVtZW1iZXItdG9nZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogcmdiYSgyMSwgNTAsIDkxLCAwLjc2KTtcbiAgbWFyZ2luOiA0cHggMCAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tbWluLWhlaWdodDogNDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlbWVtYmVyLXRvZ2dsZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JtLWNhcmRfX2FjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTZweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmZvcm0tY2FyZF9fYWN0aW9ucyBidXR0b24ge1xuICBtaW4td2lkdGg6IDE4MHB4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCAjMWY2ZWI1IDAlLCAjMGQ0ZTg2IDYwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGhlaWdodDogNDhweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTJweCAzNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDE4LCA3NCwgMTM0LCAwLjI0KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMThzIGVhc2UsIGJveC1zaGFkb3cgMC4xOHMgZWFzZSwgZmlsdGVyIDAuMThzIGVhc2U7XG59XG5cbmJ1dHRvbjpub3QoOmRpc2FibGVkKTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogMCAxOHB4IDMycHggcmdiYSgxOCwgNzQsIDEzNCwgMC4yOCk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTUzOTM1O1xuICBjb2xvcjogI2U1MzkzNTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UsIGNvbG9yIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG59XG5cbi5zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyOSwgNTcsIDUzLCAwLjA4KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgyMjksIDU3LCA1MywgMC4xNik7XG59XG5cbi5mb290ZXIge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYm90dG9tOiAyNHB4O1xuICBjb2xvcjogcmdiYSgyMSwgNTAsIDkxLCAwLjc1KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucmVtZW1iZXItdG9nZ2xlIGlvbi1jaGVja2JveCB7XG4gIC0tc2l6ZTogMjBweDtcbiAgLS1jaGVja2JveC1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxZjZlYjU7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDIxLCA1MCwgOTEsIDAuMzUpO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjMWY2ZWI1O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZzogMTglIDEyJSAyMCU7XG4gICAgaGVpZ2h0OiAyNiU7XG4gIH1cblxuICAuaGVhZGVyX19sb2dvIHtcbiAgICB3aWR0aDogY2xhbXAoMTcwcHgsIDQydncsIDI2MHB4KTtcbiAgICBtYXJnaW4tdG9wOiAtNyU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMCAxNnB4IDQ4cHg7XG4gIH1cblxuICAuZm9ybS1jYXJkIHtcbiAgICBwYWRkaW5nOiAyOHB4IDI0cHggMzJweDtcbiAgICBnYXA6IDI0cHg7XG4gIH1cblxuICAuZm9ybS1jYXJkX19hY3Rpb25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5mb3JtLWNhcmRfX2FjdGlvbnMgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOTBkZWcsICMwOTE2MmIgMCUsICMwNTBhMTYgMTAwJSk7XG4gICAgY29sb3I6ICNlNmVjZjk7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTg1ZGVnLCByZ2JhKDE4LCA1MywgOTksIDAuNTUpIDAlLCByZ2JhKDcsIDE4LCAzOCwgMC44NSkgODAlLCByZ2JhKDUsIDEwLCAyMiwgMC45KSAxMDAlKTtcbiAgICBib3gtc2hhZG93OiAwIDI4cHggNTRweCByZ2JhKDMsIDEwLCAyNCwgMC42KTtcbiAgICBjb2xvcjogI2U2ZWNmOTtcbiAgfVxuXG4gIC5oZWFkZXJfX2xvZ28ge1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxOHB4IDM4cHggcmdiYSg1LCAxMiwgMjYsIDAuNDUpKTtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBjb2xvcjogI2U2ZWNmOTtcbiAgfVxuXG4gIC5mb3JtLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjVkZWcsIHJnYmEoMTMsIDI1LCA0NCwgMC45NCkgMCUsIHJnYmEoOSwgMTgsIDM0LCAwLjk0KSAxMDAlKTtcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNzBweCByZ2JhKDIsIDYsIDE2LCAwLjYpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzUsIDExNCwgMTg1LCAwLjE4KTtcbiAgfVxuXG4gIC5mb3JtLWNhcmRfX2V5ZWJyb3cge1xuICAgIGNvbG9yOiByZ2JhKDIyNiwgMjM2LCAyNTUsIDAuNjIpO1xuICB9XG5cbiAgLmZvcm0tY2FyZF9fdGl0bGUge1xuICAgIGNvbG9yOiAjZjRmOGZmO1xuICB9XG5cbiAgLmZvcm0tY2FyZF9fc3VidGl0bGUge1xuICAgIGNvbG9yOiByZ2JhKDIyNiwgMjM2LCAyNTUsIDAuNjUpO1xuICB9XG5cbiAgLmlucHV0LWZpZWxkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCByZ2JhKDE4LCAzOCwgNjgsIDAuODUpLCByZ2JhKDExLCAyNCwgNDYsIDAuOSkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzIsIDExOCwgMTkxLCAwLjIyKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCksIDAgMTJweCAyNHB4IHJnYmEoMywgMTAsIDI0LCAwLjQpO1xuICB9XG5cbiAgLmlucHV0LWZpZWxkIGlvbi1pY29uIHtcbiAgICBjb2xvcjogcmdiYSgyMjYsIDIzNiwgMjU1LCAwLjcyKTtcbiAgfVxuXG4gIC5pbnB1dC1maWVsZCBpbnB1dCB7XG4gICAgY29sb3I6ICNmNGY4ZmY7XG4gIH1cblxuICAuaW5wdXQtZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgyMjYsIDIzNiwgMjU1LCAwLjQ1KTtcbiAgfVxuXG4gIC5pbnB1dC1maWVsZDpmb2N1cy13aXRoaW4ge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMDEsIDE0OSwgMjMzLCAwLjcpO1xuICAgIGJveC1zaGFkb3c6IDAgMThweCAzNnB4IHJnYmEoOSwgMjQsIDQ1LCAwLjU4KTtcbiAgfVxuXG4gIC5yZW1lbWJlci10b2dnbGUge1xuICAgIC0tY29sb3I6IHJnYmEoMjI2LCAyMzYsIDI1NSwgMC43NSk7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICMzYjdlZDggMCUsICMxYTU0YTggNzAlKTtcbiAgICBib3gtc2hhZG93OiAwIDE4cHggMzZweCByZ2JhKDEyLCA0MCwgOTQsIDAuNSk7XG4gIH1cblxuICBidXR0b246bm90KDpkaXNhYmxlZCk6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMjJweCA0MHB4IHJnYmEoMTIsIDQwLCA5NCwgMC42KTtcbiAgfVxuXG4gIC5zZWNvbmRhcnkge1xuICAgIGJvcmRlci1jb2xvcjogI2ZmNmI2ZjtcbiAgICBjb2xvcjogI2ZmNmI2ZjtcbiAgfVxuXG4gIC5zZWNvbmRhcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDcsIDExMSwgMC4xMik7XG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDMwcHggcmdiYSgyNTUsIDEwNywgMTExLCAwLjI2KTtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIGNvbG9yOiByZ2JhKDIyNiwgMjM2LCAyNTUsIDAuNjUpO1xuICB9XG5cbiAgLnJlbWVtYmVyLXRvZ2dsZSBpb24tY2hlY2tib3gge1xuICAgIC0tY2hlY2tib3gtYmFja2dyb3VuZC1jaGVja2VkOiAjM2I3ZWQ4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDIyNiwgMjM2LCAyNTUsIDAuNCk7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzNiN2VkODtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxvZ29GbG9hdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpIHJvdGF0ZSgtMC43NWRlZyk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KSByb3RhdGUoMC43NWRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgcm90YXRlKC0wLjVkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCkgcm90YXRlKDAuNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuIl19 */"] });


/***/ })

}]);