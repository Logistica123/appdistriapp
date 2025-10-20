(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-tabs-profile-tabs-module"], {
    /***/
    "EVrn":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/profile/profile-tabs/profile-tabs-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ProfileTabsPageRoutingModule */

    /***/
    function EVrn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileTabsPageRoutingModule", function () {
        return ProfileTabsPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _profile_tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-tabs.page */
      "wGIa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _profile_tabs_page__WEBPACK_IMPORTED_MODULE_1__["ProfileTabsPage"],
        children: [{
          path: 'profile-data',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | profile-data-profile-data-module */
            [__webpack_require__.e("default~pages-profile-profile-form-profile-form-module~profile-data-profile-data-module"), __webpack_require__.e("profile-data-profile-data-module")]).then(__webpack_require__.bind(null,
            /*! ../profile-data/profile-data.module */
            "7BLZ")).then(function (m) {
              return m.ProfileDataPageModule;
            });
          }
        }, {
          path: 'profile-transport',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | profile-transport-profile-transport-module */
            "profile-transport-profile-transport-module").then(__webpack_require__.bind(null,
            /*! ../profile-transport/profile-transport.module */
            "wg0U")).then(function (m) {
              return m.ProfileTransportPageModule;
            });
          }
        }, {
          path: 'profile-payment',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | profile-payment-profile-payment-module */
            "profile-payment-profile-payment-module").then(__webpack_require__.bind(null,
            /*! ../profile-payment/profile-payment.module */
            "3CG7")).then(function (m) {
              return m.ProfilePaymentPageModule;
            });
          }
        }]
      }];

      var ProfileTabsPageRoutingModule = /*#__PURE__*/_createClass(function ProfileTabsPageRoutingModule() {
        _classCallCheck(this, ProfileTabsPageRoutingModule);
      });

      ProfileTabsPageRoutingModule.ɵfac = function ProfileTabsPageRoutingModule_Factory(t) {
        return new (t || ProfileTabsPageRoutingModule)();
      };

      ProfileTabsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ProfileTabsPageRoutingModule
      });
      ProfileTabsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileTabsPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Uics":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/profile/profile-tabs/profile-tabs.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ProfileTabsPageModule */

    /***/
    function Uics(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileTabsPageModule", function () {
        return ProfileTabsPageModule;
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


      var _profile_tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile-tabs-routing.module */
      "EVrn");
      /* harmony import */


      var _profile_tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile-tabs.page */
      "wGIa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileTabsPageModule = /*#__PURE__*/_createClass(function ProfileTabsPageModule() {
        _classCallCheck(this, ProfileTabsPageModule);
      });

      ProfileTabsPageModule.ɵfac = function ProfileTabsPageModule_Factory(t) {
        return new (t || ProfileTabsPageModule)();
      };

      ProfileTabsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ProfileTabsPageModule
      });
      ProfileTabsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _profile_tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileTabsPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileTabsPageModule, {
          declarations: [_profile_tabs_page__WEBPACK_IMPORTED_MODULE_4__["ProfileTabsPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _profile_tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileTabsPageRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "wGIa":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/profile/profile-tabs/profile-tabs.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ProfileTabsPage */

    /***/
    function wGIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileTabsPage", function () {
        return ProfileTabsPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ProfileTabsPage = /*#__PURE__*/function () {
        function ProfileTabsPage() {
          _classCallCheck(this, ProfileTabsPage);
        }

        return _createClass(ProfileTabsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      ProfileTabsPage.ɵfac = function ProfileTabsPage_Factory(t) {
        return new (t || ProfileTabsPage)();
      };

      ProfileTabsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileTabsPage,
        selectors: [["app-profile-tabs"]],
        decls: 17,
        vars: 0,
        consts: [["slot", "start"], ["autoHide", "false"], ["slot", "bottom"], ["tab", "profile-data"], ["name", "person"], ["tab", "profile-payment"], ["name", "radio-button-on"]],
        template: function ProfileTabsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MI PERFIL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-tab-bar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-tab-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Perfil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-tab-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ion-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Modalidad pago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n  font-family: NunitoSans, \"sans-serif\";\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\nion-tab-bar[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n}\n\nion-tab-button[_ngcontent-%COMP%] {\n  --color: #6e6f75;\n  --color-selected:#757dfb;\n}\n\nion-tab-button[_ngcontent-%COMP%]   .selected-tab-button[_ngcontent-%COMP%] {\n  --background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2ZpbGUtdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6InByb2ZpbGUtdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y3ZjhmOTtcbiAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMsICdzYW5zLXNlcmlmJztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3NTdkZmI7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGFiLWJhciB7XG4gIC0tYmFja2dyb3VuZDogI2Y3ZjhmOTs7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogIzZlNmY3NTtcbiAgLS1jb2xvci1zZWxlY3RlZCA6Izc1N2RmYjtcbn1cblxuaW9uLXRhYi1idXR0b24gLnNlbGVjdGVkLXRhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-profile-profile-tabs-profile-tabs-module-es5.js.map