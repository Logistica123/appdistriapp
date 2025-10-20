(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reminders-reminder-form-reminder-form-module"], {
    /***/
    "1G96":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/reminders/reminder-form/reminder-form-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ReminderFormPageRoutingModule */

    /***/
    function G96(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReminderFormPageRoutingModule", function () {
        return ReminderFormPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _reminder_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reminder-form.page */
      "kPTf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _reminder_form_page__WEBPACK_IMPORTED_MODULE_1__["ReminderFormPage"]
      }];

      var ReminderFormPageRoutingModule = /*#__PURE__*/_createClass(function ReminderFormPageRoutingModule() {
        _classCallCheck(this, ReminderFormPageRoutingModule);
      });

      ReminderFormPageRoutingModule.ɵfac = function ReminderFormPageRoutingModule_Factory(t) {
        return new (t || ReminderFormPageRoutingModule)();
      };

      ReminderFormPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ReminderFormPageRoutingModule
      });
      ReminderFormPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReminderFormPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "hk52":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/reminders/reminder-form/reminder-form.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ReminderFormPageModule */

    /***/
    function hk52(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReminderFormPageModule", function () {
        return ReminderFormPageModule;
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


      var _reminder_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reminder-form-routing.module */
      "1G96");
      /* harmony import */


      var _reminder_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./reminder-form.page */
      "kPTf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReminderFormPageModule = /*#__PURE__*/_createClass(function ReminderFormPageModule() {
        _classCallCheck(this, ReminderFormPageModule);
      });

      ReminderFormPageModule.ɵfac = function ReminderFormPageModule_Factory(t) {
        return new (t || ReminderFormPageModule)();
      };

      ReminderFormPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ReminderFormPageModule
      });
      ReminderFormPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _reminder_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReminderFormPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ReminderFormPageModule, {
          declarations: [_reminder_form_page__WEBPACK_IMPORTED_MODULE_4__["ReminderFormPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _reminder_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReminderFormPageRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-reminders-reminder-form-reminder-form-module-es5.js.map