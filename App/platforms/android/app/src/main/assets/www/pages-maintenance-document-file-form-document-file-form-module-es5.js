(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maintenance-document-file-form-document-file-form-module"], {
    /***/
    "9YU4":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/maintenance/document-file-form/document-file-form-routing.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: DocumentFileFormPageRoutingModule */

    /***/
    function YU4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentFileFormPageRoutingModule", function () {
        return DocumentFileFormPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _document_file_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./document-file-form.page */
      "RXuc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _document_file_form_page__WEBPACK_IMPORTED_MODULE_1__["DocumentFileFormPage"]
      }];

      var DocumentFileFormPageRoutingModule = /*#__PURE__*/_createClass(function DocumentFileFormPageRoutingModule() {
        _classCallCheck(this, DocumentFileFormPageRoutingModule);
      });

      DocumentFileFormPageRoutingModule.ɵfac = function DocumentFileFormPageRoutingModule_Factory(t) {
        return new (t || DocumentFileFormPageRoutingModule)();
      };

      DocumentFileFormPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: DocumentFileFormPageRoutingModule
      });
      DocumentFileFormPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DocumentFileFormPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Pw12":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/maintenance/document-file-form/document-file-form.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: DocumentFileFormPageModule */

    /***/
    function Pw12(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentFileFormPageModule", function () {
        return DocumentFileFormPageModule;
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


      var _document_file_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./document-file-form-routing.module */
      "9YU4");
      /* harmony import */


      var _document_file_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./document-file-form.page */
      "RXuc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DocumentFileFormPageModule = /*#__PURE__*/_createClass(function DocumentFileFormPageModule() {
        _classCallCheck(this, DocumentFileFormPageModule);
      });

      DocumentFileFormPageModule.ɵfac = function DocumentFileFormPageModule_Factory(t) {
        return new (t || DocumentFileFormPageModule)();
      };

      DocumentFileFormPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: DocumentFileFormPageModule
      });
      DocumentFileFormPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _document_file_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentFileFormPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DocumentFileFormPageModule, {
          declarations: [_document_file_form_page__WEBPACK_IMPORTED_MODULE_4__["DocumentFileFormPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _document_file_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentFileFormPageRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-maintenance-document-file-form-document-file-form-module-es5.js.map