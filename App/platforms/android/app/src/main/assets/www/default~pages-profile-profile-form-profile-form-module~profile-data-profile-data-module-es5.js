(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-profile-profile-form-profile-form-module~profile-data-profile-data-module"], {
    /***/
    "UmaW":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/profile/profile-form/profile-form.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ProfileFormPage */

    /***/
    function UmaW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileFormPage", function () {
        return ProfileFormPage;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/v1/driver.service */
      "rTgA");
      /* harmony import */


      var _services_v1_geocode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/v1/geocode.service */
      "fAXw");
      /* harmony import */


      var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../components/toast/toast.component */
      "COqc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProfileFormPage_p_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ProfileFormPage_p_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ProfileFormPage_p_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ProfileFormPage_p_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ProfileFormPage_p_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ProfileFormPage_p_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ProfileFormPage_p_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ProfileFormPage_p_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ProfileFormPage_ion_spinner_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-spinner", 26);
        }
      }

      function ProfileFormPage_ion_spinner_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-spinner", 26);
        }
      }

      function ProfileFormPage_p_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ProfileFormPage_p_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ProfileFormPage_p_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ProfileFormPage_p_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var ProfileFormPage = /*#__PURE__*/function () {
        function ProfileFormPage(formBuilder, modalController, driverService, geocodeService, geolocation, toastComponent) {
          _classCallCheck(this, ProfileFormPage);

          this.formBuilder = formBuilder;
          this.modalController = modalController;
          this.driverService = driverService;
          this.geocodeService = geocodeService;
          this.geolocation = geolocation;
          this.toastComponent = toastComponent;
          this.showInputErrorMessage = false;
          this.geocodingStart = false;
          this.gettingCurrentLocation = false;
          this.form = this.formBuilder.group({
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            phone_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            car_make: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            car_model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            tonnage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            license_plate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            cost_per_km: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            cost_per_hour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            start_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            start_lat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            start_lng: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
          });
        }

        return _createClass(ProfileFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setDriver();
          }
        }, {
          key: "submit",
          value: function submit() {
            if (this.form.valid) {
              this.showInputErrorMessage = false;
              this.updateProfile();
            } else {
              this.showInputErrorMessage = true;
            }
          }
        }, {
          key: "updateProfile",
          value: function updateProfile() {
            var _this = this;

            var body = this.setBody();
            this.driverService.updateProfile(body).subscribe(function (response) {
              _this.dismiss(true);
            });
          }
        }, {
          key: "setDriver",
          value: function setDriver() {
            this.form.controls.phone_number.setValue(this.driver.phone_number);
            this.form.controls.city.setValue(this.driver.city);
            this.form.controls.company.setValue(this.driver.company);
            this.form.controls.car_make.setValue(this.driver.car_make);
            this.form.controls.car_model.setValue(this.driver.car_model);
            this.form.controls.tonnage.setValue(this.driver.tonnage);
            this.form.controls.license_plate.setValue(this.driver.license_plate);
            this.form.controls.cost_per_hour.setValue(this.driver.cost_per_hour);
            this.form.controls.cost_per_km.setValue(this.driver.cost_per_km);
            this.form.controls.start_address.setValue(this.driver.start_address || '');
            this.form.controls.start_lat.setValue(this.driver.start_lat !== undefined && this.driver.start_lat !== null ? this.driver.start_lat : '');
            this.form.controls.start_lng.setValue(this.driver.start_lng !== undefined && this.driver.start_lng !== null ? this.driver.start_lng : '');
          }
        }, {
          key: "setBody",
          value: function setBody() {
            return {
              city: this.form.value.city,
              phone_number: this.form.value.phone_number,
              company: this.form.value.company,
              car_make: this.form.value.car_make,
              car_model: this.form.value.car_model,
              tonnage: this.form.value.tonnage,
              license_plate: this.form.value.license_plate,
              cost_per_hour: this.form.value.cost_per_hour,
              cost_per_km: this.form.value.cost_per_km,
              start_address: this.form.value.start_address,
              start_lat: this.form.value.start_lat !== '' ? Number(this.form.value.start_lat) : null,
              start_lng: this.form.value.start_lng !== '' ? Number(this.form.value.start_lng) : null
            };
          }
        }, {
          key: "geocodeStartAddress",
          value: function geocodeStartAddress() {
            var _this2 = this;

            var address = this.form.value.start_address;

            if (!address) {
              this.toastComponent.presentToast('Ingrese una dirección válida', 'middle', 2500);
              return;
            }

            var country = 'Argentina';
            this.geocodingStart = true;
            this.geocodeService.mapQuestGeocode(address, country).then(function (coords) {
              _this2.setStartCoords(coords.lat, coords.lng);

              _this2.toastComponent.presentToast('Coordenadas actualizadas', 'middle', 2000);

              _this2.geocodingStart = false;
            })["catch"](function () {
              _this2.geocodeService.GMGeocodeAddress(address, country).then(function (coords) {
                _this2.setStartCoords(coords.lat, coords.lng);

                _this2.toastComponent.presentToast('Coordenadas actualizadas', 'middle', 2000);

                _this2.geocodingStart = false;
              })["catch"](function () {
                _this2.geocodingStart = false;

                _this2.toastComponent.presentToast('No se pudo geocodificar la dirección', 'middle', 2500);
              });
            });
          }
        }, {
          key: "useCurrentLocation",
          value: function useCurrentLocation() {
            var _this3 = this;

            this.gettingCurrentLocation = true;
            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000
            }).then(function (position) {
              _this3.setStartCoords(position.coords.latitude, position.coords.longitude);

              _this3.toastComponent.presentToast('Ubicación actual establecida', 'middle', 2000);

              _this3.gettingCurrentLocation = false;
            })["catch"](function () {
              _this3.toastComponent.presentToast('No se pudo obtener la ubicación actual', 'middle', 2500);

              _this3.gettingCurrentLocation = false;
            });
          }
        }, {
          key: "setStartCoords",
          value: function setStartCoords(lat, lng) {
            this.form.controls.start_lat.setValue(Number(lat).toFixed(6));
            this.form.controls.start_lng.setValue(Number(lng).toFixed(6));
          }
        }, {
          key: "dismiss",
          value: function dismiss(success) {
            this.modalController.dismiss({
              success: success
            });
          }
        }]);
      }();

      ProfileFormPage.ɵfac = function ProfileFormPage_Factory(t) {
        return new (t || ProfileFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_v1_geocode_service__WEBPACK_IMPORTED_MODULE_4__["GeocodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_5__["ToastComponent"]));
      };

      ProfileFormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: ProfileFormPage,
        selectors: [["app-profile-form"]],
        inputs: {
          driver: "driver"
        },
        decls: 97,
        vars: 17,
        consts: [["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], [3, "formGroup"], ["size", "12", 1, "ion-text-center"], ["size", "6"], ["type", "text", "formControlName", "city"], ["class", "ion-no-margin form-error-message", 4, "ngIf"], ["type", "text", "formControlName", "phone_number"], ["size", "12"], ["type", "text", "formControlName", "company"], ["type", "tel", "inputmode", "numeric", "pattern", "[0-9]+(\\.[0-9][0-9]?)?", "formControlName", "cost_per_hour"], ["type", "tel", "inputmode", "numeric", "pattern", "[0-9]+(\\.[0-9][0-9]?)?", "formControlName", "cost_per_km"], [1, "ion-margin-top"], ["type", "text", "formControlName", "start_address"], ["type", "number", "formControlName", "start_lat"], ["type", "number", "formControlName", "start_lng"], ["expand", "block", "type", "button", 3, "disabled", "click"], ["slot", "start", 4, "ngIf"], ["type", "text", "formControlName", "car_make"], ["type", "text", "formControlName", "car_model"], ["type", "text", "formControlName", "tonnage"], ["type", "text", "formControlName", "license_plate"], [1, "ion-text-center", "ion-padding"], [1, "custom-button", 3, "click"], [1, "ion-no-margin", "form-error-message"], ["slot", "start"]],
        template: function ProfileFormPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileFormPage_Template_ion_button_click_3_listener() {
              return ctx.dismiss(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Editar perfil");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-col", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Datos de conductor");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Ciudad");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ProfileFormPage_p_19_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Tel\xE9fono");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ProfileFormPage_p_24_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Empresa");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, ProfileFormPage_p_29_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Valor por hora");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, ProfileFormPage_p_34_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Valor por kil\xF3metro");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, ProfileFormPage_p_39_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "ion-row", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "ion-col", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Punto de partida");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Direcci\xF3n base");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, ProfileFormPage_p_49_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Latitud");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, ProfileFormPage_p_54_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Longitud");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, ProfileFormPage_p_59_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "ion-button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileFormPage_Template_ion_button_click_62_listener() {
              return ctx.geocodeStartAddress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, ProfileFormPage_ion_spinner_63_Template, 1, 0, "ion-spinner", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, " Buscar por direcci\xF3n ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "ion-button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileFormPage_Template_ion_button_click_66_listener() {
              return ctx.useCurrentLocation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, ProfileFormPage_ion_spinner_67_Template, 1, 0, "ion-spinner", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, " Usar ubicaci\xF3n actual ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "ion-row", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "ion-col", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Datos de unidad de transporte");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Marca unidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, ProfileFormPage_p_78_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Modelo unidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, ProfileFormPage_p_83_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Tonelaje");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](87, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](88, ProfileFormPage_p_88_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Matr\xEDcula");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](92, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](93, ProfileFormPage_p_93_Template, 2, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "ion-button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileFormPage_Template_ion_button_click_95_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, " Aceptar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.city.invalid && ctx.showInputErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.car_make.invalid && ctx.showInputErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.company.invalid && ctx.showInputErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.cost_per_hour.invalid && ctx.showInputErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.cost_per_km.invalid && ctx.showInputErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.start_address.invalid && ctx.showInputErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.start_lat.invalid && ctx.showInputErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.start_lng.invalid && ctx.showInputErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.geocodingStart);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.geocodingStart);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.gettingCurrentLocation);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.gettingCurrentLocation);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.car_make.invalid && ctx.showInputErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.car_model.invalid && ctx.showInputErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.tonnage.invalid && ctx.showInputErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.license_plate.invalid && ctx.showInputErrorMessage);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSpinner"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n  font-family: NunitoSans, \"sans-serif\";\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  letter-spacing: 0;\n}\n\nh5[_ngcontent-%COMP%] {\n  color: #828282;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2ZpbGUtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InByb2ZpbGUtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y3ZjhmOTtcbiAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMsICdzYW5zLXNlcmlmJztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3NTdkZmI7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG5oNSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "fAXw":
    /*!************************************************!*\
      !*** ./src/app/services/v1/geocode.service.ts ***!
      \************************************************/

    /*! exports provided: GeocodeService */

    /***/
    function fAXw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeocodeService", function () {
        return GeocodeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var GeocodeService = /*#__PURE__*/function () {
        function GeocodeService(ngZone, http) {
          _classCallCheck(this, GeocodeService);

          this.ngZone = ngZone;
          this.http = http;
        }

        return _createClass(GeocodeService, [{
          key: "mapQuestGeocode",
          value: function mapQuestGeocode(addressToGeocode, country) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              var address = "".concat(addressToGeocode, ",").concat(country);

              _this4.geocodeMapQuestAddress(address).subscribe(function (response) {
                var data = response;

                if (data.results && data.results.length > 0) {
                  if (data.results[0].locations && data.results[0].locations.length > 0) {
                    if (data.results[0].locations[0].latLng) {
                      var lat = data.results[0].locations[0].latLng.lat;
                      var lng = data.results[0].locations[0].latLng.lng;
                      resolve({
                        lat: lat,
                        lng: lng
                      });
                    }
                  }
                } else {
                  reject();
                }
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "GMGeocodeAddress",
          value: function GMGeocodeAddress(addressToGeocode, country) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              var self = _this5;
              var address = "".concat(addressToGeocode, ",").concat(country);
              var geocoder = new google.maps.Geocoder(); // tslint:disable-next-line:only-arrow-functions

              geocoder.geocode({
                address: address
              }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                  self.ngZone.run(function () {
                    self.results = results;
                    var lat = results[0].geometry.location.lat();
                    var lng = results[0].geometry.location.lng();
                    resolve({
                      lat: lat,
                      lng: lng
                    });
                  });
                } else {
                  reject(status); // alert('Geocode was not successful for the following reason: ' + status);

                  if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {// self.toastComponent.presentToast('El API de Google Maps no encontró resultados');
                  }
                }
              });
            });
          }
        }, {
          key: "geocodeMapQuestAddress",
          value: function geocodeMapQuestAddress(address) {
            var key = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mapquest.key;
            var endpoint = 'http://www.mapquestapi.com/geocoding/v1/address';
            var url = "".concat(endpoint, "?key=").concat(key, "&location=").concat(address, "&thumbMaps=false&boundingBox=-21.357261,-74.723118,-57.6807156,-41.57098356&maxResults=1");
            return this.http.get("".concat(url));
          }
        }]);
      }();

      GeocodeService.ɵfac = function GeocodeService_Factory(t) {
        return new (t || GeocodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      GeocodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GeocodeService,
        factory: GeocodeService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-profile-profile-form-profile-form-module~profile-data-profile-data-module-es5.js.map