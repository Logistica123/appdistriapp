(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-urban-distributions-urban-distribution-form-urban-distribution-form-module"], {
    /***/
    "UELu":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/urban-distributions/urban-distribution-form/urban-distribution-form.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: UrbanDistributionFormPageModule */

    /***/
    function UELu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrbanDistributionFormPageModule", function () {
        return UrbanDistributionFormPageModule;
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


      var _urban_distribution_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./urban-distribution-form-routing.module */
      "WauJ");
      /* harmony import */


      var _urban_distribution_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./urban-distribution-form.page */
      "6ypy");
      /* harmony import */


      var _popover_select_date_popover_select_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../popover-select-date/popover-select-date.component */
      "FQc/");
      /* harmony import */


      var _order_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../order-date.pipe */
      "JrfO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UrbanDistributionFormPageModule = /*#__PURE__*/_createClass(function UrbanDistributionFormPageModule() {
        _classCallCheck(this, UrbanDistributionFormPageModule);
      });

      UrbanDistributionFormPageModule.ɵfac = function UrbanDistributionFormPageModule_Factory(t) {
        return new (t || UrbanDistributionFormPageModule)();
      };

      UrbanDistributionFormPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: UrbanDistributionFormPageModule
      });
      UrbanDistributionFormPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _urban_distribution_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["UrbanDistributionFormPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](UrbanDistributionFormPageModule, {
          declarations: [_urban_distribution_form_page__WEBPACK_IMPORTED_MODULE_4__["UrbanDistributionFormPage"], _popover_select_date_popover_select_date_component__WEBPACK_IMPORTED_MODULE_5__["PopoverSelectDateComponent"], _order_date_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderDatePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _urban_distribution_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["UrbanDistributionFormPageRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "WauJ":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/pages/urban-distributions/urban-distribution-form/urban-distribution-form-routing.module.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: UrbanDistributionFormPageRoutingModule */

    /***/
    function WauJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrbanDistributionFormPageRoutingModule", function () {
        return UrbanDistributionFormPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _urban_distribution_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./urban-distribution-form.page */
      "6ypy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _urban_distribution_form_page__WEBPACK_IMPORTED_MODULE_1__["UrbanDistributionFormPage"]
      }];

      var UrbanDistributionFormPageRoutingModule = /*#__PURE__*/_createClass(function UrbanDistributionFormPageRoutingModule() {
        _classCallCheck(this, UrbanDistributionFormPageRoutingModule);
      });

      UrbanDistributionFormPageRoutingModule.ɵfac = function UrbanDistributionFormPageRoutingModule_Factory(t) {
        return new (t || UrbanDistributionFormPageRoutingModule)();
      };

      UrbanDistributionFormPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: UrbanDistributionFormPageRoutingModule
      });
      UrbanDistributionFormPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UrbanDistributionFormPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-urban-distributions-urban-distribution-form-urban-distribution-form-module-es5.js.map