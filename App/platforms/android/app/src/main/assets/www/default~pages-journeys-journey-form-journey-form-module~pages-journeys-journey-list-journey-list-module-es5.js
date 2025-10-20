(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-journeys-journey-form-journey-form-module~pages-journeys-journey-list-journey-list-module"], {
    /***/
    "RV/N":
    /*!******************************************************************!*\
      !*** ./src/app/pages/journeys/journey-form/journey-form.page.ts ***!
      \******************************************************************/

    /*! exports provided: JourneyFormPage */

    /***/
    function RV_N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JourneyFormPage", function () {
        return JourneyFormPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/v1/order.service */
      "EXzW");
      /* harmony import */


      var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../components/toast/toast.component */
      "COqc");
      /* harmony import */


      var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../components/loading-spinner/loading-spinner.component */
      "nk+c");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_v1_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../services/v1/location.service */
      "fRX6");
      /* harmony import */


      var _components_modals_location_map_location_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../components/modals/location-map/location-map.component */
      "34vB");
      /* harmony import */


      var _services_v1_geocode_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../services/v1/geocode.service */
      "fAXw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function JourneyFormPage_ion_list_9_ion_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JourneyFormPage_ion_list_9_ion_item_1_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var location_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r4.selectLocation(location_r3);
          });

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
        }

        if (rf & 2) {
          var location_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](location_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](location_r3.full_address);
        }
      }

      function JourneyFormPage_ion_list_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JourneyFormPage_ion_list_9_ion_item_1_Template, 7, 2, "ion-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.filteredLocations);
        }
      }

      function JourneyFormPage_form_10_p_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Por favor introduzca este campo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function JourneyFormPage_form_10_p_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Por favor introduzca este campo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function JourneyFormPage_form_10_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Direcci\xF3n (*)");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "N\xFAmeros telef\xF3nicos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "ion-textarea", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.location_name.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.address.errors);
        }
      }

      var JourneyFormPage = /*#__PURE__*/function () {
        function JourneyFormPage(formBuilder, ngZone, orderService, toastComponent, loadingSpinnerComponent, router, geocodeService, modalController, locationService) {
          _classCallCheck(this, JourneyFormPage);

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

        return _createClass(JourneyFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // this.orderService.currentOrders.subscribe(updated => {
            //   this.getLocations();
            // });
            this.searchInputFormControl.valueChanges.subscribe(function (val) {
              _this.form.controls.location_name.setValue(val);

              _this.form.controls.address.setValue(val);
            });
          }
        }, {
          key: "getLocations",
          value: function getLocations() {
            var _this2 = this;

            this.locationService.getLocations().subscribe(function (response) {
              _this2.locations = response.locations;
            }, function (error) {//
            }, function () {//
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            if (!this.locationExists) {
              this.geocodeAddress();
            } else {
              this.storeOrder();
            }
          }
        }, {
          key: "storeOrder",
          value: function storeOrder() {
            var _this3 = this;

            var body = {
              type: 'journey',
              location_id: this.location.id,
              notes: this.form.value.notes,
              opening_hours: this.form.value.opening_hours,
              phones: this.form.value.phones
            };
            this.orderService.store(body).subscribe(function (response) {
              // this.orderService.setUpdatedOrders(true);
              //
              _this3.router.navigateByUrl('journey-list');
            }, function (error) {//
            }, function () {
              _this3.resetForm();

              _this3.searchInputFormControl.setValue('');
            });
          }
        }, {
          key: "geocodeAddress",
          value: function geocodeAddress() {
            var _this4 = this;

            var address = this.form.value.location_name + ', ' + this.form.value.address + ', ' + this.form.value.city;
            var country = 'Argentina';
            this.geocodeService.mapQuestGeocode(address, country).then(function (result) {
              _this4.showLocationMap(result.lat, result.lng);
            })["catch"](function (err) {
              _this4.geocodeService.GMGeocodeAddress(address, country).then(function (result) {
                _this4.showLocationMap(result.lat, result.lng);
              })["catch"](function (error) {
                _this4.showLocationMap(_this4.defaultLat, _this4.defaultLng);
              });
            });
          }
        }, {
          key: "showLocationMap",
          value: function showLocationMap(lat, lng) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this5 = this;

              var modal;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.modalController.create({
                      component: _components_modals_location_map_location_map_component__WEBPACK_IMPORTED_MODULE_9__["LocationMapComponent"],
                      cssClass: 'modal-show-location-map',
                      componentProps: {
                        lat: lat,
                        lng: lng
                      }
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    modal.onDidDismiss().then(function (data) {
                      if (data.data && data.data.success) {
                        _this5.handleResults(data.data.lat, data.data.lng);
                      }
                    });

                  case 3:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "handleResults",
          value: function handleResults(lat, lng) {
            var locality = '';
            var administrativeAreaLevel1 = '';
            var administrativeAreaLevel2 = '';

            if (this.results.length > 0) {
              this.results[0].address_components.map(function (addressComponent) {
                addressComponent.types.map(function (type) {
                  if (type === 'locality') {
                    locality = addressComponent.long_name;
                  } else if (type === 'administrative_area_level_1') {
                    administrativeAreaLevel1 = addressComponent.long_name;
                  } else if (type === 'administrative_area_level_2') {
                    administrativeAreaLevel2 = addressComponent.long_name;
                  }
                });
              });
            }

            var body = {
              type: 'journey',
              name: this.form.value.location_name,
              address: this.form.value.address,
              city: this.form.value.city,
              notes: this.form.value.notes,
              opening_hours: this.form.value.opening_hours,
              phones: this.form.value.phones,
              locality: locality,
              administrative_area_level_1: administrativeAreaLevel1,
              administrative_area_level_2: administrativeAreaLevel2,
              lat: lat,
              lng: lng
            };
            this.storeLocation(body);
          }
        }, {
          key: "storeLocation",
          value: function storeLocation(body) {
            var _this6 = this;

            this.locationService.storeLocation(body).subscribe(function (response) {
              _this6.hasNewOrder = true;

              _this6.router.navigateByUrl('journey-list');
            }, function (error) {
              var _a;

              var message = ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.custom_message) || 'No se pudo registrar la dirección';

              _this6.toastComponent.presentToast(message, 'middle', 3000);
            }, function () {
              //
              _this6.resetForm();

              _this6.searchInputFormControl.setValue('');
            });
          }
        }, {
          key: "selectLocation",
          value: function selectLocation(location) {
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
        }, {
          key: "search",
          value: function search(event) {
            this.searching = true;
            this.locationExists = false;
            this.resetForm();
            var keyword = event.detail.value.toLowerCase();

            if (keyword === '') {
              this.filteredLocations = [];
            } else {
              this.filteredLocations = this.locations.filter(function (location) {
                return location.name.toLowerCase().includes(keyword) || location.full_address.toLowerCase().includes(keyword);
              });
            }

            if (this.filteredLocations.length <= 0) {
              this.searching = false;
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.searching = false;
            this.filteredLocations = [];
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
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
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              hasNewOrder: this.hasNewOrder
            });
          }
        }]);
      }();

      JourneyFormPage.ɵfac = function JourneyFormPage_Factory(t) {
        return new (t || JourneyFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__["LoadingSpinnerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_geocode_service__WEBPACK_IMPORTED_MODULE_10__["GeocodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"]));
      };

      JourneyFormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: JourneyFormPage,
        selectors: [["app-journey-form"]],
        decls: 15,
        vars: 4,
        consts: [["no-border", ""], ["color", "primary"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], [1, "ion-padding"], ["placeholder", "Buscar", "debounce", "500", 3, "formControl", "ionChange", "ionClear"], [4, "ngIf"], [3, "formGroup", 4, "ngIf"], ["color", "primary", "shape", "round", "size", "full", 3, "disabled", "click"], ["tappable", "", 3, "click", 4, "ngFor", "ngForOf"], ["tappable", "", 3, "click"], [1, "ion-text-wrap"], [3, "formGroup"], ["position", "floating"], ["formControlName", "location_name"], ["class", "form-error-message", 4, "ngIf"], ["rows", "5", "formControlName", "address"], ["formControlName", "city"], ["rows", "5", "formControlName", "notes"], ["rows", "2", "formControlName", "opening_hours"], ["rows", "2", "formControlName", "phones"], [1, "form-error-message"]],
        template: function JourneyFormPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JourneyFormPage_Template_ion_button_click_3_listener() {
              return ctx.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "AGREGAR UBICACI\xD3N");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-searchbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function JourneyFormPage_Template_ion_searchbar_ionChange_8_listener($event) {
              return ctx.search($event);
            })("ionClear", function JourneyFormPage_Template_ion_searchbar_ionClear_8_listener() {
              return ctx.clear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, JourneyFormPage_ion_list_9_Template, 2, 1, "ion-list", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, JourneyFormPage_form_10_Template, 27, 3, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JourneyFormPage_Template_ion_button_click_13_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " AGREGAR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchInputFormControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredLocations.length > 0 && ctx.searching);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredLocations.length <= 0 && !ctx.searching);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.value.location_name === "" || ctx.form.value.address === "" || ctx.form.value.city === "");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTextarea"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb3VybmV5LWZvcm0ucGFnZS5zY3NzIn0= */"]
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
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              var address = "".concat(addressToGeocode, ",").concat(country);

              _this7.geocodeMapQuestAddress(address).subscribe(function (response) {
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
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              var self = _this8;
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
//# sourceMappingURL=default~pages-journeys-journey-form-journey-form-module~pages-journeys-journey-list-journey-list-module-es5.js.map