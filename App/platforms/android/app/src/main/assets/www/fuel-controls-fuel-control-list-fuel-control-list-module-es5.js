(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fuel-controls-fuel-control-list-fuel-control-list-module"], {
    /***/
    "241T":
    /*!*****************************************************!*\
      !*** ./src/app/services/v1/fuel-control.service.ts ***!
      \*****************************************************/

    /*! exports provided: FuelControlService */

    /***/
    function T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuelControlService", function () {
        return FuelControlService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FuelControlService = /*#__PURE__*/function () {
        function FuelControlService(http) {
          _classCallCheck(this, FuelControlService);

          this.http = http;
          this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
          this.V1 = 'v1/app/';
        }

        return _createClass(FuelControlService, [{
          key: "getFuelControls",
          value: function getFuelControls(month, year) {
            return this.http.get("".concat(this.API_URL).concat(this.V1, "fuel-controls/month/").concat(month, "/year/").concat(year));
          }
        }, {
          key: "storeFuelControl",
          value: function storeFuelControl(body) {
            return this.http.post("".concat(this.API_URL).concat(this.V1, "fuel-controls"), body);
          }
        }, {
          key: "updateFuelControl",
          value: function updateFuelControl(fuelControl, body) {
            return this.http.put("".concat(this.API_URL).concat(this.V1, "fuel-controls/").concat(fuelControl.id), body);
          }
        }, {
          key: "deleteFuelControl",
          value: function deleteFuelControl(fuelControl) {
            return this.http["delete"]("".concat(this.API_URL).concat(this.V1, "fuel-controls/").concat(fuelControl.id));
          }
        }]);
      }();

      FuelControlService.ɵfac = function FuelControlService_Factory(t) {
        return new (t || FuelControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      FuelControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: FuelControlService,
        factory: FuelControlService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "3CW4":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/controls/fuel-controls/fuel-control-form/fuel-control-form.page.ts ***!
      \******************************************************************************************/

    /*! exports provided: FuelControlFormPage */

    /***/
    function CW4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuelControlFormPage", function () {
        return FuelControlFormPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_v1_fuel_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/v1/fuel-control.service */
      "241T");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_modals_image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../components/modals/image-detail/image-detail.component */
      "mdCS");
      /* harmony import */


      var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../components/toast/toast.component */
      "COqc");
      /* harmony import */


      var _services_utils_camera_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../services/utils/camera.service */
      "uHbY");
      /* harmony import */


      var _services_v1_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../services/v1/auth.service */
      "HNOL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../services/utils/http-upload-file.service */
      "DDL3");
      /* harmony import */


      var _services_utils_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../services/utils/date.service */
      "8ID2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FuelControlFormPage_p_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function FuelControlFormPage_p_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function FuelControlFormPage_p_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo es requerido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function FuelControlFormPage_p_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo debe ser num\xE9rico, puede tener dos decimales ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function FuelControlFormPage_p_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Este campo debe ser num\xE9rico, puede tener dos decimales ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function FuelControlFormPage_ion_col_48_ion_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FuelControlFormPage_ion_col_48_ion_icon_2_Template_ion_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);

            var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r12.deleteImage(i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function FuelControlFormPage_ion_col_48_ion_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-icon", 29);
        }
      }

      function FuelControlFormPage_ion_col_48_ion_progress_bar_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 30);
        }
      }

      function FuelControlFormPage_ion_col_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-col", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FuelControlFormPage_ion_col_48_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16);

            var file_r7 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r15.viewControlImageDetail(file_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, FuelControlFormPage_ion_col_48_ion_icon_2_Template, 1, 0, "ion-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, FuelControlFormPage_ion_col_48_ion_icon_3_Template, 1, 0, "ion-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, FuelControlFormPage_ion_col_48_ion_progress_bar_4_Template, 1, 0, "ion-progress-bar", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r5.sanitizer.bypassSecurityTrustUrl(file_r7.src), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.uploadedFilesIndexes.indexOf(i_r8) <= -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.uploadedFilesIndexes.indexOf(i_r8) > -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.uploadingFileIndex === i_r8);
        }
      }

      function FuelControlFormPage_ion_progress_bar_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 30);
        }
      }

      var FuelControlFormPage = /*#__PURE__*/function () {
        function FuelControlFormPage(formBuilder, router, authService, sanitizer, dateService, httpUploadFileService, toastComponent, cameraService, modalController, fuelControlService) {
          _classCallCheck(this, FuelControlFormPage);

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

        return _createClass(FuelControlFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.fuelControl) {
              this.setFuelControl();
            }

            this.authService.getAuthToken().then(function (authToken) {
              _this.authToken = authToken;
            });
            this.form.controls.date.setValue(this.dateService.getToday());
          }
        }, {
          key: "setFuelControl",
          value: function setFuelControl() {
            this.form.controls.date.setValue(this.fuelControl.date);
            this.form.controls.station.setValue(this.fuelControl.station);
            this.form.controls.fuelType.setValue(this.fuelControl.fuel_type);
            this.form.controls.liters.setValue(this.fuelControl.liters);
            this.form.controls.price.setValue(this.fuelControl.price);
          }
        }, {
          key: "submit",
          value: function submit() {
            if (this.form.valid) {
              this.showInputErrorMessage = false;
              this.fuelControl ? this.updateFuelControl() : this.storeFuelControl();
            } else {
              this.showInputErrorMessage = true;
            }
          }
        }, {
          key: "storeFuelControl",
          value: function storeFuelControl() {
            var _this2 = this;

            this.submitting = true;
            var body = this.setBody();
            this.fuelControlService.storeFuelControl(body).subscribe(function (response) {
              _this2.fuelControlId = response.fuel_control_id;

              if (_this2.files.length > 0) {
                _this2.checkFiles();
              } else {
                _this2.closeModal();
              }
            }, function (error) {
              _this2.submitting = false;
            });
          }
        }, {
          key: "updateFuelControl",
          value: function updateFuelControl() {
            var _this3 = this;

            this.submitting = true;
            var body = this.setBody();
            this.fuelControlService.updateFuelControl(this.fuelControl, body).subscribe(function (response) {
              _this3.fuelControlId = response.fuel_control_id;

              if (_this3.files.length > 0) {
                _this3.checkFiles();
              } else {
                _this3.closeModal();
              }
            }, function (error) {
              _this3.submitting = false;
            });
          }
        }, {
          key: "setBody",
          value: function setBody() {
            return {
              date: this.form.value.date,
              station: this.form.value.station,
              fuel_type: this.form.value.fuelType,
              liters: this.form.value.liters,
              price: this.form.value.price
            };
          }
        }, {
          key: "viewControlImageDetail",
          value: function viewControlImageDetail(file) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.modalController.create({
                      component: _components_modals_image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_5__["ImageDetailComponent"],
                      componentProps: {
                        file: file
                      }
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "takePicture",
          value: function takePicture() {
            var _this4 = this;

            this.cameraService.takePicture().then(function (cameraPhotoFile) {
              _this4.files.push(cameraPhotoFile);
            })["catch"](function (err) {
              _this4.toastComponent.presentToast("No se pudo acceder a la c\xE1mara (error: ".concat(err, ")"), 'middle', 3000);
            });
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this5 = this;

              var i, _iterator, _step, file, _t;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    i = 0;
                    this.uploadingFileIndex = i;
                    _iterator = _createForOfIteratorHelper(this.files);
                    _context2.p = 1;

                    _iterator.s();

                  case 2:
                    if ((_step = _iterator.n()).done) {
                      _context2.n = 4;
                      break;
                    }

                    file = _step.value;
                    _context2.n = 3;
                    return this.uploadFile(file.file).then(function () {
                      _this5.uploadedFilesIndexes.push(i);
                    })["catch"](function (err) {
                      _this5.uploadingErrorFilesIndexes.push(i);
                    })["finally"](function () {
                      i++;
                      _this5.uploadingFileIndex = i;
                    });

                  case 3:
                    _context2.n = 2;
                    break;

                  case 4:
                    _context2.n = 6;
                    break;

                  case 5:
                    _context2.p = 5;
                    _t = _context2.v;

                    _iterator.e(_t);

                  case 6:
                    _context2.p = 6;

                    _iterator.f();

                    return _context2.f(6);

                  case 7:
                    return _context2.a(2);
                }
              }, _callee2, this, [[1, 5, 6, 7]]);
            }));
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(file) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              var body = {
                fuel_control_id: _this6.fuelControlId.toString()
              };

              _this6.httpUploadFileService.uploadFile('fuel-control-images', file, _this6.authToken, body).then(function () {
                resolve(true);
              })["catch"](function (err) {
                reject(err);

                _this6.toastComponent.presentToast('No se pudo carga la imagen del control de combustible. Intente nuevamente', 'medium', 2500);
              });
            });
          }
        }, {
          key: "checkFiles",
          value: function checkFiles() {
            var _this7 = this;

            this.uploadedFilesIndexes = [];
            this.uploadingErrorFilesIndexes = [];
            this.uploadFiles().then(function () {
              _this7.closeModal();
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.form.reset();
            this.submitting = false;
            this.dismiss(true);
          }
        }, {
          key: "dismiss",
          value: function dismiss(success) {
            this.modalController.dismiss({
              success: success
            });
          }
        }, {
          key: "deleteImage",
          value: function deleteImage(i) {
            this.files.splice(i, 1);
          }
        }]);
      }();

      FuelControlFormPage.ɵfac = function FuelControlFormPage_Factory(t) {
        return new (t || FuelControlFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_v1_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_10__["HttpUploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_6__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_camera_service__WEBPACK_IMPORTED_MODULE_7__["CameraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_v1_fuel_control_service__WEBPACK_IMPORTED_MODULE_2__["FuelControlService"]));
      };

      FuelControlFormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
        type: FuelControlFormPage,
        selectors: [["app-fuel-control-form"]],
        inputs: {
          fuelControl: "fuelControl"
        },
        decls: 53,
        vars: 15,
        consts: [["slot", "end"], ["name", "close", 1, "font-2em", 3, "click"], [1, "ion-text-center"], [3, "formGroup"], [1, "form-group"], ["lines", "none", 1, "custom-item"], ["displayFormat", "DD MMMM YYYY", "display-timezone", "America/Argentina/Buenos_Aires", "formControlName", "date", "doneText", "ok", "cancelText", "cancelar", "monthNames", "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre", "monthShortNames", "ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic", "dayNames", "domingo, lunes, martes, mi\xE9rcoles, jueves, viernes, s\xE1bado, domingo", "dayShortNames", "dom, lun, mar, mi\xE9, jue, vie, s\xE1b, dom", 3, "max", "min"], ["class", "ion-no-margin form-error-message", 4, "ngIf"], ["type", "text", "formControlName", "station"], ["type", "text", "formControlName", "fuelType"], ["size", "6", 1, "ion-padding-horizontal"], [1, "small"], ["type", "tel", "inputmode", "numeric", "pattern", "[0-9]+(\\.[0-9][0-9]?)?", "formControlName", "liters"], ["type", "tel", "inputmode", "numeric", "pattern", "[0-9]+(\\.[0-9][0-9]?)?", "formControlName", "price"], ["size", "12", 1, "ion-text-center"], [1, "ion-no-margin"], [1, "total", "ion-no-margin"], [1, "custom-secondary-button", 3, "click"], ["name", "camera"], ["size", "6", 4, "ngFor", "ngForOf"], [1, "ion-padding"], ["type", "indeterminate", 4, "ngIf"], [1, "custom-button", 3, "disabled", "click"], [1, "ion-no-margin", "form-error-message"], ["size", "6"], ["alt", "control-image", 1, "control-image", 3, "src", "click"], ["name", "trash", "class", "delete-icon", 3, "click", 4, "ngIf"], ["name", "checkmark", "class", "checkmark-icon", "color", "success", 4, "ngIf"], ["name", "trash", 1, "delete-icon", 3, "click"], ["name", "checkmark", "color", "success", 1, "checkmark-icon"], ["type", "indeterminate"]],
        template: function FuelControlFormPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FuelControlFormPage_Template_ion_icon_click_3_listener() {
              return ctx.dismiss(false);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Estaci\xF3n de servicio");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FuelControlFormPage_Template_ion_button_click_43_listener() {
              return ctx.takePicture();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FuelControlFormPage_Template_ion_button_click_51_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, " Aceptar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DecimalPipe"]],
        styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: white;\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n  --background: #f4f5f8;\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  background: #f4f5f8;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.control-image[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 150px;\n  width: 100%;\n}\n\n.not-approved[_ngcontent-%COMP%] {\n  --background: #898989;\n  color: white;\n  box-shadow: none;\n}\n\n.approved[_ngcontent-%COMP%] {\n  --background: #c7f3cc;\n  color: black;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL29wZXJhdGlvbi1jb250cm9scy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZnVlbC1jb250cm9sLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoiZnVlbC1jb250cm9sLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3NTdkZmI7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgN3B4IDJweCBsaWdodGdyZXk7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuaW9uLWl0ZW0tb3B0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5jdXN0b20tZGF0ZS1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5mb3JtLWdyb3VwIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b3RhbCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRyb2wtaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vdC1hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogIzg5ODk4OTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYXBwcm92ZWQge1xuICAtLWJhY2tncm91bmQ6ICAjYzdmM2NjO1xuICBjb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc1N2RmYjtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4IGxpZ2h0Z3JleTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG5pb24taXRlbS1vcHRpb25zIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmN1c3RvbS1kYXRlLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udHJvbC1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm90LWFwcHJvdmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjODk4OTg5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogI2M3ZjNjYztcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "8ID2":
    /*!************************************************!*\
      !*** ./src/app/services/utils/date.service.ts ***!
      \************************************************/

    /*! exports provided: DateService */

    /***/
    function ID2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateService", function () {
        return DateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DateService = /*#__PURE__*/function () {
        function DateService() {
          _classCallCheck(this, DateService);
        }

        return _createClass(DateService, [{
          key: "getToday",
          value: function getToday() {
            return new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString();
          }
        }]);
      }();

      DateService.ɵfac = function DateService_Factory(t) {
        return new (t || DateService)();
      };

      DateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DateService,
        factory: DateService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "C8e8":
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/controls/fuel-controls/fuel-control-list/fuel-control-list-routing.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: FuelControlListPageRoutingModule */

    /***/
    function C8e8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuelControlListPageRoutingModule", function () {
        return FuelControlListPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fuel_control_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fuel-control-list.page */
      "kglt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _fuel_control_list_page__WEBPACK_IMPORTED_MODULE_1__["FuelControlListPage"]
      }];

      var FuelControlListPageRoutingModule = /*#__PURE__*/_createClass(function FuelControlListPageRoutingModule() {
        _classCallCheck(this, FuelControlListPageRoutingModule);
      });

      FuelControlListPageRoutingModule.ɵfac = function FuelControlListPageRoutingModule_Factory(t) {
        return new (t || FuelControlListPageRoutingModule)();
      };

      FuelControlListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: FuelControlListPageRoutingModule
      });
      FuelControlListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FuelControlListPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "YLDz":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/controls/fuel-controls/fuel-control-form/fuel-control-form.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: FuelControlFormPageModule */

    /***/
    function YLDz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuelControlFormPageModule", function () {
        return FuelControlFormPageModule;
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


      var _fuel_control_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fuel-control-form-routing.module */
      "m/Ej");
      /* harmony import */


      var _fuel_control_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fuel-control-form.page */
      "3CW4");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FuelControlFormPageModule = /*#__PURE__*/_createClass(function FuelControlFormPageModule() {
        _classCallCheck(this, FuelControlFormPageModule);
      });

      FuelControlFormPageModule.ɵfac = function FuelControlFormPageModule_Factory(t) {
        return new (t || FuelControlFormPageModule)();
      };

      FuelControlFormPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: FuelControlFormPageModule
      });
      FuelControlFormPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _fuel_control_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["FuelControlFormPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FuelControlFormPageModule, {
          declarations: [_fuel_control_form_page__WEBPACK_IMPORTED_MODULE_4__["FuelControlFormPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _fuel_control_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["FuelControlFormPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
        });
      })();
      /***/

    },

    /***/
    "kglt":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/controls/fuel-controls/fuel-control-list/fuel-control-list.page.ts ***!
      \******************************************************************************************/

    /*! exports provided: FuelControlListPage */

    /***/
    function kglt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuelControlListPage", function () {
        return FuelControlListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _services_v1_fuel_control_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/v1/fuel-control.service */
      "241T");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _fuel_control_form_fuel_control_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../fuel-control-form/fuel-control-form.page */
      "3CW4");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FuelControlListPage_ion_progress_bar_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-progress-bar", 9);
        }
      }

      function FuelControlListPage_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No tienes ning\xFAn registro para el mes seleccionado");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function FuelControlListPage_ion_item_sliding_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FuelControlListPage_ion_item_sliding_10_Template_ion_item_option_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var fuelControl_r3 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r5.editFuelControl(fuelControl_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ion-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Editar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-item-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FuelControlListPage_ion_item_sliding_10_Template_ion_item_option_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var fuelControl_r3 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r7.presentDeleteFuelControlAlertConfirm(fuelControl_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fuelControl_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Estaci\xF3n ", fuelControl_r3.station, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fuelControl_r3.fuel_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", fuelControl_r3.liters, " litros ($", fuelControl_r3.price, ") - $", fuelControl_r3.total, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 6, fuelControl_r3.date, "dd/MM/yyyy"));
        }
      }

      var FuelControlListPage = /*#__PURE__*/function () {
        function FuelControlListPage(modalController, alertController, fuelControlService) {
          _classCallCheck(this, FuelControlListPage);

          this.modalController = modalController;
          this.alertController = alertController;
          this.fuelControlService = fuelControlService;
          this.loading = true;
          this.submitting = false;
          this.fuelControls = [];
          this.date = new Date();
          this.dateFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        }

        return _createClass(FuelControlListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {//
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.date = new Date();
            this.dateFC.setValue(this.date.toISOString());
            this.getFuelControls();
          }
        }, {
          key: "onDateChange",
          value: function onDateChange(event) {
            this.date = new Date(event.detail.value);
            this.getFuelControls();
          }
        }, {
          key: "getFuelControls",
          value: function getFuelControls() {
            var _this8 = this;

            this.loading = true;
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            this.fuelControlService.getFuelControls(month, year).subscribe(function (response) {
              _this8.fuelControls = response.fuel_controls;
              _this8.loading = false;
            }, function (error) {
              _this8.loading = false;
            });
          }
        }, {
          key: "addFuelControl",
          value: function addFuelControl() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var modal, _yield$modal$onWillDi, data;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.modalController.create({
                      component: _fuel_control_form_fuel_control_form_page__WEBPACK_IMPORTED_MODULE_3__["FuelControlFormPage"]
                    });

                  case 1:
                    modal = _context3.v;
                    _context3.n = 2;
                    return modal.present();

                  case 2:
                    _context3.n = 3;
                    return modal.onWillDismiss();

                  case 3:
                    _yield$modal$onWillDi = _context3.v;
                    data = _yield$modal$onWillDi.data;

                    if (data && data.success) {
                      this.getFuelControls();
                    }

                  case 4:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "editFuelControl",
          value: function editFuelControl(fuelControl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var modal, _yield$modal$onWillDi2, data;

              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.modalController.create({
                      component: _fuel_control_form_fuel_control_form_page__WEBPACK_IMPORTED_MODULE_3__["FuelControlFormPage"],
                      componentProps: {
                        fuelControl: fuelControl
                      }
                    });

                  case 1:
                    modal = _context4.v;
                    _context4.n = 2;
                    return modal.present();

                  case 2:
                    _context4.n = 3;
                    return modal.onWillDismiss();

                  case 3:
                    _yield$modal$onWillDi2 = _context4.v;
                    data = _yield$modal$onWillDi2.data;

                    if (data && data.success) {
                      this.getFuelControls();
                    }

                  case 4:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentDeleteFuelControlAlertConfirm",
          value: function presentDeleteFuelControlAlertConfirm(fuelControl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this9 = this;

              var alert;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.alertController.create({
                      header: '¿Desea eliminar registro?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {//
                        }
                      }, {
                        text: 'Sí',
                        handler: function handler() {
                          _this9.deleteFuelControl(fuelControl);
                        }
                      }]
                    });

                  case 1:
                    alert = _context5.v;
                    _context5.n = 2;
                    return alert.present();

                  case 2:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "deleteFuelControl",
          value: function deleteFuelControl(fuelControl) {
            var _this0 = this;

            this.submitting = true;
            this.fuelControlService.deleteFuelControl(fuelControl).subscribe(function (response) {
              _this0.fuelControls = _this0.fuelControls.filter(function (item) {
                return item.id !== fuelControl.id;
              });
              _this0.submitting = false;
            }, function (error) {
              _this0.submitting = false;
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this1 = this;

            console.log('Begin async operation');
            setTimeout(function () {
              console.log('Async operation has ended');

              _this1.getFuelControls();

              event.target.complete();
            }, 2000);
          }
        }]);
      }();

      FuelControlListPage.ɵfac = function FuelControlListPage_Factory(t) {
        return new (t || FuelControlListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_v1_fuel_control_service__WEBPACK_IMPORTED_MODULE_1__["FuelControlService"]));
      };

      FuelControlListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: FuelControlListPage,
        selectors: [["app-fuel-control-list"]],
        decls: 11,
        vars: 4,
        consts: [[1, "ion-padding"], ["lines", "none", 1, "custom-date-item"], ["displayFormat", "MMMM YYYY", "display-timezone", "America/Argentina/Buenos_Aires", "placeholder", "Selecciona el mes", "doneText", "ok", "cancelText", "cancelar", "monthNames", "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre", "monthShortNames", "ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic", "dayNames", "domingo, lunes, martes, mi\xE9rcoles, jueves, viernes, s\xE1bado, domingo", "dayShortNames", "dom, lun, mar, mi\xE9, jue, vie, s\xE1b, dom", 3, "formControl", "ionChange"], ["class", "ion-margin-top", "type", "indeterminate", 4, "ngIf"], [1, "ion-text-center", "ion-padding-bottom"], [1, "custom-button", 3, "click"], ["slot", "fixed", 3, "ionRefresh"], ["class", "ion-padding-horizontal", 4, "ngIf"], ["class", "ion-margin-bottom", 4, "ngFor", "ngForOf"], ["type", "indeterminate", 1, "ion-margin-top"], [1, "ion-padding-horizontal"], [1, "ion-margin-bottom"], ["lines", "none"], ["size", "7"], [1, "ion-no-margin"], ["size", "5"], ["color", "light", 3, "click"], ["slot", "end", "name", "create"], ["slot", "end", "name", "trash"]],
        template: function FuelControlListPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-datetime", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function FuelControlListPage_Template_ion_datetime_ionChange_2_listener($event) {
              return ctx.onDateChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FuelControlListPage_ion_progress_bar_3_Template, 1, 0, "ion-progress-bar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FuelControlListPage_Template_ion_button_click_5_listener() {
              return ctx.addFuelControl();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " AGREGAR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-refresher", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionRefresh", function FuelControlListPage_Template_ion_refresher_ionRefresh_7_listener($event) {
              return ctx.doRefresh($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-refresher-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, FuelControlListPage_p_9_Template, 3, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, FuelControlListPage_ion_item_sliding_10_Template, 23, 9, "ion-item-sliding", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.dateFC);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading || ctx.submitting);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.fuelControls.length <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.fuelControls);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: white;\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n  --background: #f4f5f8;\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  background: #f4f5f8;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.control-image[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 150px;\n  width: 100%;\n}\n\n.not-approved[_ngcontent-%COMP%] {\n  --background: #898989;\n  color: white;\n  box-shadow: none;\n}\n\n.approved[_ngcontent-%COMP%] {\n  --background: #c7f3cc;\n  color: black;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL29wZXJhdGlvbi1jb250cm9scy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZnVlbC1jb250cm9sLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoiZnVlbC1jb250cm9sLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3NTdkZmI7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgN3B4IDJweCBsaWdodGdyZXk7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuaW9uLWl0ZW0tb3B0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5jdXN0b20tZGF0ZS1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5mb3JtLWdyb3VwIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b3RhbCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRyb2wtaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vdC1hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogIzg5ODk4OTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYXBwcm92ZWQge1xuICAtLWJhY2tncm91bmQ6ICAjYzdmM2NjO1xuICBjb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc1N2RmYjtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4IGxpZ2h0Z3JleTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG5pb24taXRlbS1vcHRpb25zIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmN1c3RvbS1kYXRlLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udHJvbC1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm90LWFwcHJvdmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjODk4OTg5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogI2M3ZjNjYztcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "ltJ1":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/controls/fuel-controls/fuel-control-list/fuel-control-list.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: FuelControlListPageModule */

    /***/
    function ltJ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuelControlListPageModule", function () {
        return FuelControlListPageModule;
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


      var _fuel_control_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fuel-control-list-routing.module */
      "C8e8");
      /* harmony import */


      var _fuel_control_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fuel-control-list.page */
      "kglt");
      /* harmony import */


      var _fuel_control_form_fuel_control_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../fuel-control-form/fuel-control-form.module */
      "YLDz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FuelControlListPageModule = /*#__PURE__*/_createClass(function FuelControlListPageModule() {
        _classCallCheck(this, FuelControlListPageModule);
      });

      FuelControlListPageModule.ɵfac = function FuelControlListPageModule_Factory(t) {
        return new (t || FuelControlListPageModule)();
      };

      FuelControlListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: FuelControlListPageModule
      });
      FuelControlListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _fuel_control_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["FuelControlListPageRoutingModule"], _fuel_control_form_fuel_control_form_module__WEBPACK_IMPORTED_MODULE_5__["FuelControlFormPageModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FuelControlListPageModule, {
          declarations: [_fuel_control_list_page__WEBPACK_IMPORTED_MODULE_4__["FuelControlListPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _fuel_control_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["FuelControlListPageRoutingModule"], _fuel_control_form_fuel_control_form_module__WEBPACK_IMPORTED_MODULE_5__["FuelControlFormPageModule"]]
        });
      })();
      /***/

    },

    /***/
    "m/Ej":
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/controls/fuel-controls/fuel-control-form/fuel-control-form-routing.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: FuelControlFormPageRoutingModule */

    /***/
    function m_Ej(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuelControlFormPageRoutingModule", function () {
        return FuelControlFormPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fuel_control_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fuel-control-form.page */
      "3CW4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _fuel_control_form_page__WEBPACK_IMPORTED_MODULE_1__["FuelControlFormPage"]
      }];

      var FuelControlFormPageRoutingModule = /*#__PURE__*/_createClass(function FuelControlFormPageRoutingModule() {
        _classCallCheck(this, FuelControlFormPageRoutingModule);
      });

      FuelControlFormPageRoutingModule.ɵfac = function FuelControlFormPageRoutingModule_Factory(t) {
        return new (t || FuelControlFormPageRoutingModule)();
      };

      FuelControlFormPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: FuelControlFormPageRoutingModule
      });
      FuelControlFormPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FuelControlFormPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=fuel-controls-fuel-control-list-fuel-control-list-module-es5.js.map