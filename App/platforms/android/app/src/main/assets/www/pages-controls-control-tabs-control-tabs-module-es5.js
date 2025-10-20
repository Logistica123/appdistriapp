(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-controls-control-tabs-control-tabs-module"], {
    /***/
    "1hd7":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/controls/control-tabs/control-tabs-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: ControlTabsPageRoutingModule */

    /***/
    function hd7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlTabsPageRoutingModule", function () {
        return ControlTabsPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _control_tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./control-tabs.page */
      "2U7+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _control_tabs_page__WEBPACK_IMPORTED_MODULE_1__["ControlTabsPage"],
        children: [{
          path: 'operation-control',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | operation-controls-operation-control-list-operation-control-list-module */
            "operation-controls-operation-control-list-operation-control-list-module").then(__webpack_require__.bind(null,
            /*! ../operation-controls/operation-control-list/operation-control-list.module */
            "D4cX")).then(function (m) {
              return m.OperationControlListPageModule;
            });
          }
        }, {
          path: 'fuel-control',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | fuel-controls-fuel-control-list-fuel-control-list-module */
            "fuel-controls-fuel-control-list-fuel-control-list-module").then(__webpack_require__.bind(null,
            /*! ../fuel-controls/fuel-control-list/fuel-control-list.module */
            "ltJ1")).then(function (m) {
              return m.FuelControlListPageModule;
            });
          }
        }, {
          path: 'toll-control',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | toll-controls-toll-control-list-toll-control-list-module */
            [__webpack_require__.e("default~pages-controls-toll-controls-toll-control-form-toll-control-form-module~toll-controls-toll-c~db1b2e11"), __webpack_require__.e("toll-controls-toll-control-list-toll-control-list-module")]).then(__webpack_require__.bind(null,
            /*! ../toll-controls/toll-control-list/toll-control-list.module */
            "a6+4")).then(function (m) {
              return m.TollControlListPageModule;
            });
          }
        }]
      }];

      var ControlTabsPageRoutingModule = /*#__PURE__*/_createClass(function ControlTabsPageRoutingModule() {
        _classCallCheck(this, ControlTabsPageRoutingModule);
      });

      ControlTabsPageRoutingModule.ɵfac = function ControlTabsPageRoutingModule_Factory(t) {
        return new (t || ControlTabsPageRoutingModule)();
      };

      ControlTabsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ControlTabsPageRoutingModule
      });
      ControlTabsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ControlTabsPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "2U7+":
    /*!******************************************************************!*\
      !*** ./src/app/pages/controls/control-tabs/control-tabs.page.ts ***!
      \******************************************************************/

    /*! exports provided: ControlTabsPage */

    /***/
    function U7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlTabsPage", function () {
        return ControlTabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _popover_alert_popover_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../popover-alert/popover-alert.component */
      "SsrU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ControlTabsPage = /*#__PURE__*/function () {
        function ControlTabsPage(popoverController, modalController) {
          _classCallCheck(this, ControlTabsPage);

          this.popoverController = popoverController;
          this.modalController = modalController;
          this.message = '';
        }

        return _createClass(ControlTabsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('control-tabs'); // this.showModal();
          }
        }, {
          key: "showModal",
          value: function showModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal, _yield$modal$onWillDi, data;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.modalController.create({
                      component: _popover_alert_popover_alert_component__WEBPACK_IMPORTED_MODULE_2__["PopoverAlertComponent"],
                      componentProps: {
                        message: this.message
                      },
                      cssClass: 'modal-alert'
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    _context.n = 3;
                    return modal.onWillDismiss();

                  case 3:
                    _yield$modal$onWillDi = _context.v;
                    data = _yield$modal$onWillDi.data;
                    console.log(data);

                    if (!(data === null || data === void 0 ? void 0 : data.success)) {}

                  case 4:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }]);
      }();

      ControlTabsPage.ɵfac = function ControlTabsPage_Factory(t) {
        return new (t || ControlTabsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
      };

      ControlTabsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ControlTabsPage,
        selectors: [["app-control-tabs"]],
        decls: 21,
        vars: 0,
        consts: [[1, "ion-no-border"], ["slot", "start"], ["autoHide", "false"], ["slot", "bottom"], ["tab", "operation-control"], ["name", "clipboard"], ["tab", "fuel-control"], ["name", "color-fill"], ["tab", "toll-control"], ["name", "flag"]],
        template: function ControlTabsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-menu-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "CONTROLES");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-tab-bar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-tab-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ion-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Operativo");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-tab-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ion-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Combustible");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-tab-button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Peaje");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n  font-family: NunitoSans, \"sans-serif\";\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\nion-tab-bar[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n}\n\nion-tab-button[_ngcontent-%COMP%] {\n  --color: #6e6f75;\n  --color-selected:#757dfb;\n}\n\nion-tab-button[_ngcontent-%COMP%]   .selected-tab-button[_ngcontent-%COMP%] {\n  --background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbnRyb2wtdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6ImNvbnRyb2wtdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y3ZjhmOTtcbiAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMsICdzYW5zLXNlcmlmJztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3NTdkZmI7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGFiLWJhciB7XG4gIC0tYmFja2dyb3VuZDogI2Y3ZjhmOTs7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogIzZlNmY3NTtcbiAgLS1jb2xvci1zZWxlY3RlZCA6Izc1N2RmYjtcbn1cblxuaW9uLXRhYi1idXR0b24gLnNlbGVjdGVkLXRhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "SsrU":
    /*!**********************************************************!*\
      !*** ./src/app/popover-alert/popover-alert.component.ts ***!
      \**********************************************************/

    /*! exports provided: PopoverAlertComponent */

    /***/
    function SsrU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverAlertComponent", function () {
        return PopoverAlertComponent;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PopoverAlertComponent = /*#__PURE__*/function () {
        function PopoverAlertComponent(modalController) {
          _classCallCheck(this, PopoverAlertComponent);

          this.modalController = modalController;
        }

        return _createClass(PopoverAlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);
      }();

      PopoverAlertComponent.ɵfac = function PopoverAlertComponent_Factory(t) {
        return new (t || PopoverAlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]));
      };

      PopoverAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PopoverAlertComponent,
        selectors: [["app-popover-alert"]],
        inputs: {
          message: "message"
        },
        decls: 16,
        vars: 1,
        consts: [["slot", "end"], ["slot", "icon-only", 3, "click"], ["name", "close", "color", "dark"]],
        template: function PopoverAlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopoverAlertComponent_Template_ion_button_click_3_listener() {
              return ctx.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aperiam consectetur dignissimos enim facilis fugiat id minima mollitia odit porro reprehenderit saepe sit, totam ullam velit veniam! Laborum, recusandae? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque corporis cupiditate deleniti dolores eum harum ipsa ipsam molestias mollitia necessitatibus nulla pariatur ratione, rem sit ullam ut voluptas voluptate. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aperiam consectetur dignissimos enim facilis fugiat id minima mollitia odit porro reprehenderit saepe sit, totam ullam velit veniam! Laborum, recusandae? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque corporis cupiditate deleniti dolores eum harum ipsa ipsam molestias mollitia necessitatibus nulla pariatur ratione, rem sit ullam ut voluptas voluptate. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWFsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "pvM4":
    /*!********************************************************************!*\
      !*** ./src/app/pages/controls/control-tabs/control-tabs.module.ts ***!
      \********************************************************************/

    /*! exports provided: ControlTabsPageModule */

    /***/
    function pvM4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlTabsPageModule", function () {
        return ControlTabsPageModule;
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


      var _control_tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./control-tabs-routing.module */
      "1hd7");
      /* harmony import */


      var _control_tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./control-tabs.page */
      "2U7+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ControlTabsPageModule = /*#__PURE__*/_createClass(function ControlTabsPageModule() {
        _classCallCheck(this, ControlTabsPageModule);
      });

      ControlTabsPageModule.ɵfac = function ControlTabsPageModule_Factory(t) {
        return new (t || ControlTabsPageModule)();
      };

      ControlTabsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ControlTabsPageModule
      });
      ControlTabsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _control_tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__["ControlTabsPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ControlTabsPageModule, {
          declarations: [_control_tabs_page__WEBPACK_IMPORTED_MODULE_4__["ControlTabsPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _control_tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__["ControlTabsPageRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-controls-control-tabs-control-tabs-module-es5.js.map