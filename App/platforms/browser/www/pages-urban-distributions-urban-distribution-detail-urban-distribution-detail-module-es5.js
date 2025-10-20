(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-urban-distributions-urban-distribution-detail-urban-distribution-detail-module"], {
    /***/
    "UTtV":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/pages/urban-distributions/urban-distribution-detail/urban-distribution-detail-routing.module.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: UrbanDistributionDetailPageRoutingModule */

    /***/
    function UTtV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrbanDistributionDetailPageRoutingModule", function () {
        return UrbanDistributionDetailPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _urban_distribution_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./urban-distribution-detail.page */
      "ZAvG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _urban_distribution_detail_page__WEBPACK_IMPORTED_MODULE_1__["UrbanDistributionDetailPage"]
      }];

      var UrbanDistributionDetailPageRoutingModule = /*#__PURE__*/_createClass(function UrbanDistributionDetailPageRoutingModule() {
        _classCallCheck(this, UrbanDistributionDetailPageRoutingModule);
      });

      UrbanDistributionDetailPageRoutingModule.ɵfac = function UrbanDistributionDetailPageRoutingModule_Factory(t) {
        return new (t || UrbanDistributionDetailPageRoutingModule)();
      };

      UrbanDistributionDetailPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: UrbanDistributionDetailPageRoutingModule
      });
      UrbanDistributionDetailPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UrbanDistributionDetailPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vhVs":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/pages/urban-distributions/urban-distribution-detail/urban-distribution-detail.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: UrbanDistributionDetailPageModule */

    /***/
    function vhVs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrbanDistributionDetailPageModule", function () {
        return UrbanDistributionDetailPageModule;
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


      var _urban_distribution_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./urban-distribution-detail-routing.module */
      "UTtV");
      /* harmony import */


      var _urban_distribution_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./urban-distribution-detail.page */
      "ZAvG");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _modal_edit_address_modal_edit_address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modal-edit-address/modal-edit-address.component */
      "mz+P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UrbanDistributionDetailPageModule = /*#__PURE__*/_createClass(function UrbanDistributionDetailPageModule() {
        _classCallCheck(this, UrbanDistributionDetailPageModule);
      });

      UrbanDistributionDetailPageModule.ɵfac = function UrbanDistributionDetailPageModule_Factory(t) {
        return new (t || UrbanDistributionDetailPageModule)();
      };

      UrbanDistributionDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: UrbanDistributionDetailPageModule
      });
      UrbanDistributionDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _urban_distribution_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["UrbanDistributionDetailPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](UrbanDistributionDetailPageModule, {
          declarations: [_urban_distribution_detail_page__WEBPACK_IMPORTED_MODULE_4__["UrbanDistributionDetailPage"], _modal_edit_address_modal_edit_address_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditAddressComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _urban_distribution_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["UrbanDistributionDetailPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-urban-distributions-urban-distribution-detail-urban-distribution-detail-module-es5.js.map