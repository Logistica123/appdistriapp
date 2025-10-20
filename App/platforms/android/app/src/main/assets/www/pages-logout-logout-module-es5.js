(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-logout-logout-module"], {
    /***/
    "4rJG":
    /*!***********************************************!*\
      !*** ./src/app/pages/logout/logout.module.ts ***!
      \***********************************************/

    /*! exports provided: LogoutPageModule */

    /***/
    function rJG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function () {
        return LogoutPageModule;
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


      var _logout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./logout-routing.module */
      "qcd7");
      /* harmony import */


      var _logout_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./logout.page */
      "EqXV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LogoutPageModule = /*#__PURE__*/_createClass(function LogoutPageModule() {
        _classCallCheck(this, LogoutPageModule);
      });

      LogoutPageModule.ɵfac = function LogoutPageModule_Factory(t) {
        return new (t || LogoutPageModule)();
      };

      LogoutPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: LogoutPageModule
      });
      LogoutPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _logout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LogoutPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LogoutPageModule, {
          declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_4__["LogoutPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _logout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LogoutPageRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "EqXV":
    /*!*********************************************!*\
      !*** ./src/app/pages/logout/logout.page.ts ***!
      \*********************************************/

    /*! exports provided: LogoutPage */

    /***/
    function EqXV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutPage", function () {
        return LogoutPage;
      });
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/loading-spinner/loading-spinner.component */
      "nk+c");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/v1/driver.service */
      "rTgA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LogoutPage = /*#__PURE__*/function () {
        function LogoutPage(storage, router, driverService, loadingSpinnerComponent) {
          _classCallCheck(this, LogoutPage);

          this.storage = storage;
          this.router = router;
          this.driverService = driverService;
          this.loadingSpinnerComponent = loadingSpinnerComponent;
        }

        return _createClass(LogoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {//
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.loadingSpinnerComponent.presentLoadingSpinner().then(function () {
              _this.storage.clear().then(function () {
                _this.loadingSpinnerComponent.dismissLoadingSpinner().then(function () {
                  _this.driverService.setDriver$(null);

                  _this.router.navigateByUrl('login');
                });
              });
            });
          }
        }]);
      }();

      LogoutPage.ɵfac = function LogoutPage_Factory(t) {
        return new (t || LogoutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_0__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__["LoadingSpinnerComponent"]));
      };

      LogoutPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: LogoutPage,
        selectors: [["app-logout"]],
        decls: 1,
        vars: 0,
        template: function LogoutPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-content");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQucGFnZS5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "qcd7":
    /*!*******************************************************!*\
      !*** ./src/app/pages/logout/logout-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: LogoutPageRoutingModule */

    /***/
    function qcd7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutPageRoutingModule", function () {
        return LogoutPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _logout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./logout.page */
      "EqXV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_1__["LogoutPage"]
      }];

      var LogoutPageRoutingModule = /*#__PURE__*/_createClass(function LogoutPageRoutingModule() {
        _classCallCheck(this, LogoutPageRoutingModule);
      });

      LogoutPageRoutingModule.ɵfac = function LogoutPageRoutingModule_Factory(t) {
        return new (t || LogoutPageRoutingModule)();
      };

      LogoutPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: LogoutPageRoutingModule
      });
      LogoutPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LogoutPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-logout-logout-module-es5.js.map