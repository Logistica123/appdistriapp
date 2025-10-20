(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-controls-toll-controls-toll-control-form-toll-control-form-module"], {
    /***/
    "7Sg5":
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/controls/toll-controls/toll-control-form/toll-control-form-routing.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: TollControlFormPageRoutingModule */

    /***/
    function Sg5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TollControlFormPageRoutingModule", function () {
        return TollControlFormPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _toll_control_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toll-control-form.page */
      "kGPl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _toll_control_form_page__WEBPACK_IMPORTED_MODULE_1__["TollControlFormPage"]
      }];

      var TollControlFormPageRoutingModule = /*#__PURE__*/_createClass(function TollControlFormPageRoutingModule() {
        _classCallCheck(this, TollControlFormPageRoutingModule);
      });

      TollControlFormPageRoutingModule.ɵfac = function TollControlFormPageRoutingModule_Factory(t) {
        return new (t || TollControlFormPageRoutingModule)();
      };

      TollControlFormPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: TollControlFormPageRoutingModule
      });
      TollControlFormPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TollControlFormPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "fGtj":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/controls/toll-controls/toll-control-form/toll-control-form.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: TollControlFormPageModule */

    /***/
    function fGtj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TollControlFormPageModule", function () {
        return TollControlFormPageModule;
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


      var _toll_control_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./toll-control-form-routing.module */
      "7Sg5");
      /* harmony import */


      var _toll_control_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./toll-control-form.page */
      "kGPl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TollControlFormPageModule = /*#__PURE__*/_createClass(function TollControlFormPageModule() {
        _classCallCheck(this, TollControlFormPageModule);
      });

      TollControlFormPageModule.ɵfac = function TollControlFormPageModule_Factory(t) {
        return new (t || TollControlFormPageModule)();
      };

      TollControlFormPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: TollControlFormPageModule
      });
      TollControlFormPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _toll_control_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["TollControlFormPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TollControlFormPageModule, {
          declarations: [_toll_control_form_page__WEBPACK_IMPORTED_MODULE_4__["TollControlFormPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _toll_control_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["TollControlFormPageRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-controls-toll-controls-toll-control-form-toll-control-form-module-es5.js.map