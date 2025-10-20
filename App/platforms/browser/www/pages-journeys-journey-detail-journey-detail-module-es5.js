(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-journeys-journey-detail-journey-detail-module"], {
    /***/
    "1sAB":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/journeys/journey-detail/journey-detail-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: JourneyDetailPageRoutingModule */

    /***/
    function sAB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JourneyDetailPageRoutingModule", function () {
        return JourneyDetailPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _journey_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./journey-detail.page */
      "qGJ6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _journey_detail_page__WEBPACK_IMPORTED_MODULE_1__["JourneyDetailPage"]
      }];

      var JourneyDetailPageRoutingModule = /*#__PURE__*/_createClass(function JourneyDetailPageRoutingModule() {
        _classCallCheck(this, JourneyDetailPageRoutingModule);
      });

      JourneyDetailPageRoutingModule.ɵfac = function JourneyDetailPageRoutingModule_Factory(t) {
        return new (t || JourneyDetailPageRoutingModule)();
      };

      JourneyDetailPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: JourneyDetailPageRoutingModule
      });
      JourneyDetailPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JourneyDetailPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "uSDN":
    /*!************************************************************************!*\
      !*** ./src/app/pages/journeys/journey-detail/journey-detail.module.ts ***!
      \************************************************************************/

    /*! exports provided: JourneyDetailPageModule */

    /***/
    function uSDN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JourneyDetailPageModule", function () {
        return JourneyDetailPageModule;
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


      var _journey_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./journey-detail-routing.module */
      "1sAB");
      /* harmony import */


      var _journey_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./journey-detail.page */
      "qGJ6");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var JourneyDetailPageModule = /*#__PURE__*/_createClass(function JourneyDetailPageModule() {
        _classCallCheck(this, JourneyDetailPageModule);
      });

      JourneyDetailPageModule.ɵfac = function JourneyDetailPageModule_Factory(t) {
        return new (t || JourneyDetailPageModule)();
      };

      JourneyDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: JourneyDetailPageModule
      });
      JourneyDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _journey_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["JourneyDetailPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](JourneyDetailPageModule, {
          declarations: [_journey_detail_page__WEBPACK_IMPORTED_MODULE_4__["JourneyDetailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _journey_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["JourneyDetailPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-journeys-journey-detail-journey-detail-module-es5.js.map