(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "F4UR":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function F4UR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login-routing.module */
      "aTZN");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      });

      LoginPageModule.ɵfac = function LoginPageModule_Factory(t) {
        return new (t || LoginPageModule)();
      };

      LoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: LoginPageModule
      });
      LoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LoginPageModule, {
          declarations: [_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginPageRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "aTZN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function aTZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_1__["LoginPage"]
      }];

      var LoginPageRoutingModule = /*#__PURE__*/_createClass(function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      });

      LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) {
        return new (t || LoginPageRoutingModule)();
      };

      LoginPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: LoginPageRoutingModule
      });
      LoginPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "bP1B":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function bP1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_v1_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/v1/auth.service */
      "HNOL");
      /* harmony import */


      var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/v1/driver.service */
      "rTgA");
      /* harmony import */


      var _services_v1_device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/v1/device.service */
      "NQre");
      /* harmony import */


      var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/v1/geolocation.service */
      "3Cxn");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      "92l+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_v1_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/v1/location.service */
      "fRX6");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginPage_ion_content_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Recordarme");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "ion-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LoginPage_ion_content_0_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r1.signIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, " INGRESAR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, " V3.2.5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r0.signInForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r0.signInForm.valid);
        }
      }

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(storage, formBuilder, driverService, deviceService, locationAccuracy, geolocationService, router, locationService, platform, alertController, afAuth, afs, authService) {
          _classCallCheck(this, LoginPage);

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

        return _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.checkingCredentials = true;
            Promise.all([this.storage.get('remember'), this.storage.get('auth_token')]).then(function (values) {
              var remember = values[0];
              var authToken = values[1];
              console.log(_this.platform.is('mobileweb'));

              if (remember && authToken) {
                if (_this.platform.is('mobileweb')) {
                  _this.watchPosition();

                  _this.navigate();
                } else {
                  _this.requestLocationAccuracy();
                }
              } else {
                _this.checkingCredentials = false;
              }
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            var _this2 = this;

            var credentials = {
              email: this.signInForm.value.email,
              password: this.signInForm.value.password
            };
            this.signInForm.value.checkbox ? this.storage.set('remember', true) : this.storage.set('remember', false);
            this.authService.signIn(credentials).subscribe(function (response) {
              var driver = response.driver;

              _this2.setProfile(driver);

              _this2.locationService.setLocations$(response.locations);

              Promise.all([_this2.storage.set('senderId', response.email), _this2.storage.set('adminEmail', response.admin_email), _this2.storage.set('auth_token', response.auth_token)]).then(function () {
                _this2.deviceService.storeDevice();

                _this2.watchPosition();

                _this2.navigate();
              });
            }, function (error) {
              _this2.loading = false;
            });
          }
        }, {
          key: "register",
          value: function register() {
            this.router.navigateByUrl('register');
          }
        }, {
          key: "requestLocationAccuracy",
          value: function requestLocationAccuracy() {
            var _this3 = this;

            this.locationAccuracy.canRequest().then(function (canRequest) {
              _this3.locationAccuracy.request(_this3.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                _this3.watchPosition();

                _this3.router.navigateByUrl('urban-distribution-list');
              }, function (error) {
                console.log(error);

                _this3.presentAlert();
              });
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }, {
          key: "setProfile",
          value: function setProfile(driver) {
            this.driverService.setDriver$(driver);
          }
        }, {
          key: "watchPosition",
          value: function watchPosition() {
            this.geolocationService.watchPosition();
          }
        }, {
          key: "navigate",
          value: function navigate() {
            // this.router.navigateByUrl('urban-distribution-list');
            this.router.navigateByUrl('profile/profile-data');
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      message: 'No se pudo obtener ubicación actual. ' + 'Por favor concede los permisos para que la aplicación pueda utilizar el GPS de su dispositivo móvil',
                      buttons: ['OK']
                    });

                  case 1:
                    alert = _context.v;
                    _context.n = 2;
                    return alert.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "createFirebaseUser",
          value: function createFirebaseUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var credentials, uid;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    console.log('creating firebase user');
                    _context2.n = 1;
                    return this.afAuth.createUserWithEmailAndPassword(this.signInForm.value.email, this.signInForm.value.email);

                  case 1:
                    credentials = _context2.v;
                    console.log('result', credentials);
                    uid = credentials.user.uid;
                    console.log(uid);

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }]);
      }();

      LoginPage.ɵfac = function LoginPage_Factory(t) {
        return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_device_service__WEBPACK_IMPORTED_MODULE_5__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__["LocationAccuracy"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      LoginPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
        type: LoginPage,
        selectors: [["app-login"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "header"], ["src", "assets/logo.png", "alt", "DistriApp"], [1, "content"], [3, "formGroup"], [1, "form-group"], ["type", "text", "placeholder", "Correo electr\xF3nico", "formControlName", "email", "inputmode", "email"], ["type", "password", "placeholder", "Contrase\xF1a", "formControlName", "password"], ["lines", "none"], ["formControlName", "checkbox", "slot", "end", "color", "primary"], [1, "ion-text-center", "ion-margin"], [3, "disabled", "click"], [1, "footer"]],
        template: function LoginPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, LoginPage_ion_content_0_Template, 18, 2, "ion-content", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.checkingCredentials);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["BooleanValueAccessor"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 20%;\n  border-radius: 0 0 50% 50%/0 0 60% 60%;\n  border-bottom: 0;\n  width: 100%;\n  background: white;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 2em;\n  color: var(--ion-color-primary);\n  padding: 15%;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 25%;\n  margin-top: -20%;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  border: none;\n  padding: 10px;\n  text-align: center;\n  border-radius: 10px;\n  outline: none;\n  font-weight: 500;\n  letter-spacing: 0em !important;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder {\n  letter-spacing: 0em !important;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  letter-spacing: 0em !important;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  background: transparent;\n  --background: transparent;\n  color: white;\n  margin: -15px 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  left: 45%;\n  bottom: 15px;\n  color: white;\n  position: fixed;\n  font-weight: bold;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  height: 45px;\n  outline: none;\n  padding: 12px 30px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0UsOEJBQUE7QUFBRjs7QUFEQTtFQUNFLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiAyMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlLzAgMCA2MCUgNjAlO1xuICBib3JkZXItYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAxNSU7XG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xvZ28uanBnXCIpO1xufVxuXG5pbWcge1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tdG9wOiAtMjAlO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwZW0gIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IC0xNXB4IDBweDtcbn1cblxuLmZvb3RlciB7XG4gIGxlZnQ6IDQ1JTtcbiAgYm90dG9tOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHggMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map