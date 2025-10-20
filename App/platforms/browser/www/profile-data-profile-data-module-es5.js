(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-data-profile-data-module"], {
    /***/
    "7BLZ":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/profile/profile-data/profile-data.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ProfileDataPageModule */

    /***/
    function BLZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileDataPageModule", function () {
        return ProfileDataPageModule;
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


      var _profile_data_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile-data-routing.module */
      "dZUx");
      /* harmony import */


      var _profile_data_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile-data.page */
      "tpv9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileDataPageModule = /*#__PURE__*/_createClass(function ProfileDataPageModule() {
        _classCallCheck(this, ProfileDataPageModule);
      });

      ProfileDataPageModule.ɵfac = function ProfileDataPageModule_Factory(t) {
        return new (t || ProfileDataPageModule)();
      };

      ProfileDataPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ProfileDataPageModule
      });
      ProfileDataPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _profile_data_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileDataPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileDataPageModule, {
          declarations: [_profile_data_page__WEBPACK_IMPORTED_MODULE_4__["ProfileDataPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _profile_data_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileDataPageRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "dZUx":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/profile/profile-data/profile-data-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ProfileDataPageRoutingModule */

    /***/
    function dZUx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileDataPageRoutingModule", function () {
        return ProfileDataPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _profile_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-data.page */
      "tpv9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _profile_data_page__WEBPACK_IMPORTED_MODULE_1__["ProfileDataPage"]
      }];

      var ProfileDataPageRoutingModule = /*#__PURE__*/_createClass(function ProfileDataPageRoutingModule() {
        _classCallCheck(this, ProfileDataPageRoutingModule);
      });

      ProfileDataPageRoutingModule.ɵfac = function ProfileDataPageRoutingModule_Factory(t) {
        return new (t || ProfileDataPageRoutingModule)();
      };

      ProfileDataPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ProfileDataPageRoutingModule
      });
      ProfileDataPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileDataPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "tpv9":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/profile/profile-data/profile-data.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ProfileDataPage */

    /***/
    function tpv9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileDataPage", function () {
        return ProfileDataPage;
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


      var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/v1/driver.service */
      "rTgA");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");
      /* harmony import */


      var _services_utils_image_picker_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/utils/image-picker.service */
      "FtwJ");
      /* harmony import */


      var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/loading-spinner/loading-spinner.component */
      "nk+c");
      /* harmony import */


      var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../components/toast/toast.component */
      "COqc");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_modals_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../components/modals/update-password/update-password.component */
      "GMw2");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _profile_form_profile_form_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../profile-form/profile-form.page */
      "UmaW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProfileDataPage_ion_progress_bar_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-progress-bar", 4);
        }
      }

      function ProfileDataPage_div_4_img_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProfileDataPage_div_4_img_2_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r6.pickImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function ProfileDataPage_div_4_img_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProfileDataPage_div_4_img_3_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r8.pickImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r3.filesSrc, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
        }
      }

      function ProfileDataPage_div_4_img_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProfileDataPage_div_4_img_4_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r10.pickImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r4.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
        }
      }

      function ProfileDataPage_div_4_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProfileDataPage_div_4_div_5_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r12.uploadFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Guardar nueva imagen de perfil ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function ProfileDataPage_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ProfileDataPage_div_4_img_2_Template, 1, 0, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ProfileDataPage_div_4_img_3_Template, 1, 1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ProfileDataPage_div_4_img_4_Template, 1, 1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, ProfileDataPage_div_4_div_5_Template, 3, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProfileDataPage_div_4_Template_div_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r14.updatePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " Cambiar contrase\xF1a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProfileDataPage_div_4_Template_div_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r16.updateProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, " Editar informaci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-grid", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, " Terceros ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ion-col", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "ion-toggle", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function ProfileDataPage_div_4_Template_ion_toggle_ionChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r17.onToggleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " Empresa log\xEDstica ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ion-grid", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, " Ciudad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, " Tel\xE9fono ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, " Empresa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, " Punto de partida ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, " Valor por hora ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, " Valor por kil\xF3metro ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53, " Marca unidad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58, " Modelo unidad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](63, " Tonelaje ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](68, " Matr\xEDcula ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, "Distancia cubierta");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, "Tiempo cubierto");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.filesSrc.length <= 0 && !(ctx_r1.driver == null ? null : ctx_r1.driver.has_profile_img));

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.filesSrc.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.filesSrc.length <= 0 && (ctx_r1.driver == null ? null : ctx_r1.driver.has_profile_img) && ctx_r1.profileImg);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.filesSrc.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", (ctx_r1.driver == null ? null : ctx_r1.driver.contractor) === "logistic_company");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.driver == null ? null : ctx_r1.driver.city, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.driver == null ? null : ctx_r1.driver.phone_number, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.driver == null ? null : ctx_r1.driver.company, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", (ctx_r1.driver == null ? null : ctx_r1.driver.start_address) || "No configurado", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.driver == null ? null : ctx_r1.driver.cost_per_hour, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.driver == null ? null : ctx_r1.driver.cost_per_km, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.driver == null ? null : ctx_r1.driver.car_make, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.driver == null ? null : ctx_r1.driver.car_model, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.driver == null ? null : ctx_r1.driver.tonnage, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.driver == null ? null : ctx_r1.driver.license_plate, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r1.distance, " km.");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r1.duration, " h.");
        }
      }

      var ProfileDataPage = /*#__PURE__*/function () {
        function ProfileDataPage(driverService, storage, formBuilder, domSanitizer, http, alertController, imagePickerService, loadingSpinnerComponent, toastComponent, modalController) {
          _classCallCheck(this, ProfileDataPage);

          this.driverService = driverService;
          this.storage = storage;
          this.formBuilder = formBuilder;
          this.domSanitizer = domSanitizer;
          this.http = http;
          this.alertController = alertController;
          this.imagePickerService = imagePickerService;
          this.loadingSpinnerComponent = loadingSpinnerComponent;
          this.toastComponent = toastComponent;
          this.modalController = modalController;
          this.files = [];
          this.filesSrc = [];
          this.filenames = [];
          this.loading = false;
          this.V1 = 'v1/app/'; //
        }

        return _createClass(ProfileDataPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getProfile();
            this.storage.get('auth_token').then(function (authToken) {
              _this.authToken = authToken;
            });
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this2 = this;

            this.loading = true;
            this.driverService.getProfile().subscribe(function (response) {
              _this2.driver = response.driver;

              _this2.driverService.setDriver$(_this2.driver);

              _this2.distance = response.distance;
              _this2.duration = response.duration;

              if (_this2.driver.has_profile_img) {
                _this2.getProfileImage();
              }
            }, function (error) {
              _this2.loading = false;
            }, function () {
              _this2.loading = false;
            });
          }
        }, {
          key: "getProfileImage",
          value: function getProfileImage() {
            var _this3 = this;

            this.driverService.getProfileImage().subscribe(function (blob) {
              var objectURL = URL.createObjectURL(blob);
              _this3.profileImg = _this3.domSanitizer.bypassSecurityTrustUrl(objectURL);
            });
          }
        }, {
          key: "updateProfile",
          value: function updateProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this4 = this;

              var modal;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.modalController.create({
                      component: _profile_form_profile_form_page__WEBPACK_IMPORTED_MODULE_12__["ProfileFormPage"],
                      componentProps: {
                        driver: this.driver
                      }
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    modal.onDidDismiss().then(function (result) {
                      var _a;

                      if ((_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.success) {
                        _this4.getProfile();
                      }
                    });

                  case 3:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "updatePassword",
          value: function updatePassword() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this5 = this;

              var modal;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.modalController.create({
                      component: _components_modals_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_10__["UpdatePasswordComponent"],
                      cssClass: 'modal-update-password'
                    });

                  case 1:
                    modal = _context2.v;
                    _context2.n = 2;
                    return modal.present();

                  case 2:
                    modal.onDidDismiss().then(function (result) {
                      if (result && result.data && result.data.success) {
                        _this5.getProfile();
                      }
                    });

                  case 3:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "pickImage",
          value: function pickImage() {
            var _this6 = this;

            var imagePickerOptions = {
              maximumImagesCount: 1,
              quality: 70
            };
            this.imagePickerService.pickImages(imagePickerOptions).then(function (result) {
              _this6.files = result[0];
              _this6.filesSrc = result[1];
              _this6.filenames = result[2];
            })["catch"](function (err) {
              _this6.toastComponent.presentToast("No se pudo seleccionar la imagen, error: ".concat(err), 'middle', 2500);
            });
          }
        }, {
          key: "uploadFile",
          value: function uploadFile() {
            var _this7 = this;

            this.loadingSpinnerComponent.presentLoadingSpinner('guardando imagen').then(function () {
              var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].API_URL;
              var uri = encodeURI("".concat(API_URL).concat(_this7.V1, "drivers/profile/image"));
              var headers = {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + _this7.authToken
              };

              _this7.http.uploadFile(uri, null, headers, _this7.files[0], 'file').then(function (data) {
                _this7.loadingSpinnerComponent.dismissLoadingSpinner();

                _this7.filenames = [];
                _this7.filesSrc = [];
                _this7.files = [];

                _this7.getProfile();
              })["catch"](function (err) {
                _this7.loadingSpinnerComponent.dismissLoadingSpinner();

                _this7.toastComponent.presentToast("No se pudo guardar la imagen, error: ".concat(JSON.stringify(err)), 'middle', 2500);
              });
            });
          }
        }, {
          key: "onToggleChange",
          value: function onToggleChange(ev) {
            console.log(ev.detail.checked);

            if (ev.detail.checked) {
              this.presentAlertConfirm();
            } else {
              this.updateDriverContractor(false);
            }
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this8 = this;

              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.alertController.create({
                      header: 'Confirmar',
                      message: 'Por favor confirma que trabajas para una empresa de logística',
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler() {
                          _this8.updateDriverContractor(true);
                        }
                      }]
                    });

                  case 1:
                    alert = _context3.v;
                    _context3.n = 2;
                    return alert.present();

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "updateDriverContractor",
          value: function updateDriverContractor(hasContractor) {
            var body = {
              has_contractor: hasContractor
            };
            this.driverService.updateContractor(body).subscribe(function (response) {});
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this9 = this;

            console.log('Begin async operation');
            setTimeout(function () {
              console.log('Async operation has ended');

              _this9.getProfile();

              event.target.complete();
            }, 2000);
          }
        }]);
      }();

      ProfileDataPage.ɵfac = function ProfileDataPage_Factory(t) {
        return new (t || ProfileDataPage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_2__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_utils_image_picker_service__WEBPACK_IMPORTED_MODULE_6__["ImagePickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_8__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]));
      };

      ProfileDataPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
        type: ProfileDataPage,
        selectors: [["app-profile-data"]],
        decls: 5,
        vars: 2,
        consts: [[1, "ion-text-center"], ["class", "ion-margin-top", "type", "indeterminate", 4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], [4, "ngIf"], ["type", "indeterminate", 1, "ion-margin-top"], [1, "ion-margin-top"], ["src", "assets/images/default_profile_img.png", "alt", "profile_img", 3, "click", 4, "ngIf"], ["alt", "profile_img", 3, "src", "click", 4, "ngIf"], ["class", "ion-text-center ion-margin", 4, "ngIf"], [1, "ion-text-center", "ion-margin"], [1, "update-password", "small", 3, "click"], [1, "contractor-toggle"], ["size", "4", 1, "ion-align-self-center"], ["size", "4"], ["color", "light", 3, "checked", "ionChange"], [1, "profile-data"], ["size", "6"], [1, "distance-value"], [1, "distance-text"], ["src", "assets/images/default_profile_img.png", "alt", "profile_img", 3, "click"], ["alt", "profile_img", 3, "src", "click"], [1, "update-profile-image", "small", 3, "click"]],
        template: function ProfileDataPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProfileDataPage_ion_progress_bar_1_Template, 1, 0, "ion-progress-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-refresher", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionRefresh", function ProfileDataPage_Template_ion_refresher_ionRefresh_2_listener($event) {
              return ctx.doRefresh($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-refresher-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ProfileDataPage_div_4_Template, 83, 17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.driver);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonLabel"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n  font-family: NunitoSans, \"sans-serif\";\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.contractor-toggle[_ngcontent-%COMP%] {\n  background: #757dfb;\n  margin: 0 30px;\n  border-radius: 15px;\n  color: white;\n  font-weight: bold;\n}\n\n.profile-data[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 15px;\n  border: 1px solid #dcd7d7;\n  margin: 10px;\n}\n\n.distance-value[_ngcontent-%COMP%] {\n  text-align: center;\n  background: darkturquoise;\n  padding: 20px;\n  font-size: 1.75em;\n  border-radius: 10px;\n  margin: 5px;\n  color: white;\n}\n\n.distance-text[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 175px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 15px;\n}\n\n.update-profile-image[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  background-color: rgba(0, 91, 209, 0.3);\n  display: inline-block;\n  padding: 10px 30px;\n  border-radius: 20px;\n  margin: 0 auto;\n  font-weight: bold;\n  min-width: 75%;\n}\n\n.update-password[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  background-color: rgba(0, 91, 209, 0.3);\n  display: inline-block;\n  padding: 10px 30px;\n  border-radius: 20px;\n  margin: 0 auto;\n  font-weight: bold;\n  min-width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL2N1c3RvbS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcHJvZmlsZS1kYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EscUNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBQWJBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFnQkY7O0FBYkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFnQkY7O0FBYkE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWdCRjs7QUFiQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFnQkY7O0FBYkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQWdCRjs7QUFiQTtFQUNFLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZ0JGOztBQWJBO0VBQ0UsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFnQkYiLCJmaWxlIjoicHJvZmlsZS1kYXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjdmOGY5O1xuICBmb250LWZhbWlseTogTnVuaXRvU2FucywgJ3NhbnMtc2VyaWYnO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc1N2RmYjtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtLWdyb3VwIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvY3VzdG9tLXRoZW1lLnNjc3NcIjtcblxuLmNvbnRyYWN0b3ItdG9nZ2xlIHtcbiAgYmFja2dyb3VuZDogIzc1N2RmYjtcbiAgbWFyZ2luOiAwIDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9maWxlLWRhdGEge1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkN2Q3O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5kaXN0YW5jZS12YWx1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogZGFya3R1cnF1b2lzZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxLjc1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kaXN0YW5jZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnVwZGF0ZS1wcm9maWxlLWltYWdlIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA5MSwgMjA5LCAwLjMpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtaW4td2lkdGg6IDc1JTtcbn1cblxuLnVwZGF0ZS1wYXNzd29yZCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgOTEsIDIwOSwgMC4zKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWluLXdpZHRoOiA3NSU7XG59XG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-data-profile-data-module-es5.js.map