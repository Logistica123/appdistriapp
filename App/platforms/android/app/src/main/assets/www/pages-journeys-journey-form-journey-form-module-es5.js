(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-journeys-journey-form-journey-form-module"], {
    /***/
    "7EcA":
    /*!********************************************************************!*\
      !*** ./src/app/pages/journeys/journey-form/journey-form.module.ts ***!
      \********************************************************************/

    /*! exports provided: JourneyFormPageModule */

    /***/
    function EcA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JourneyFormPageModule", function () {
        return JourneyFormPageModule;
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


      var _journey_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./journey-form-routing.module */
      "blRo");
      /* harmony import */


      var _journey_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./journey-form.page */
      "RV/N");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var JourneyFormPageModule = /*#__PURE__*/_createClass(function JourneyFormPageModule() {
        _classCallCheck(this, JourneyFormPageModule);
      });

      JourneyFormPageModule.ɵfac = function JourneyFormPageModule_Factory(t) {
        return new (t || JourneyFormPageModule)();
      };

      JourneyFormPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: JourneyFormPageModule
      });
      JourneyFormPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _journey_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["JourneyFormPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](JourneyFormPageModule, {
          declarations: [_journey_form_page__WEBPACK_IMPORTED_MODULE_4__["JourneyFormPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _journey_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["JourneyFormPageRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "blRo":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/journeys/journey-form/journey-form-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: JourneyFormPageRoutingModule */

    /***/
    function blRo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JourneyFormPageRoutingModule", function () {
        return JourneyFormPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _journey_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./journey-form.page */
      "RV/N");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _journey_form_page__WEBPACK_IMPORTED_MODULE_1__["JourneyFormPage"]
      }];

      var JourneyFormPageRoutingModule = /*#__PURE__*/_createClass(function JourneyFormPageRoutingModule() {
        _classCallCheck(this, JourneyFormPageRoutingModule);
      });

      JourneyFormPageRoutingModule.ɵfac = function JourneyFormPageRoutingModule_Factory(t) {
        return new (t || JourneyFormPageRoutingModule)();
      };

      JourneyFormPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: JourneyFormPageRoutingModule
      });
      JourneyFormPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JourneyFormPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-journeys-journey-form-journey-form-module-es5.js.map