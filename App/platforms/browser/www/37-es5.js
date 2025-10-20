(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }

  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37], {
    /***/
    "TpdJ":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js ***!
      \**************************************************************/

    /*! exports provided: ion_tab, ion_tabs */

    /***/
    function TpdJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_tab", function () {
        return Tab;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_tabs", function () {
        return Tabs;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./framework-delegate-4392cd63.js */
      "acej");
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");

      var tabCss = ":host(.tab-hidden){display:none !important}";

      var Tab = /*#__PURE__*/function () {
        function Tab(hostRef) {
          _classCallCheck(this, Tab);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.loaded = false;
          /** @internal */

          this.active = false;
        }

        return _createClass(Tab, [{
          key: "componentWillLoad",
          value: function () {
            var _componentWillLoad = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (!this.active) {
                      _context.n = 1;
                      break;
                    }

                    _context.n = 1;
                    return this.setActive();

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));

            function componentWillLoad() {
              return _componentWillLoad.apply(this, arguments);
            }

            return componentWillLoad;
          }()
          /** Set the active component for the tab */

        }, {
          key: "setActive",
          value: function () {
            var _setActive = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee2() {
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.prepareLazyLoaded();

                  case 1:
                    this.active = true;

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));

            function setActive() {
              return _setActive.apply(this, arguments);
            }

            return setActive;
          }()
        }, {
          key: "changeActive",
          value: function changeActive(isActive) {
            if (isActive) {
              this.prepareLazyLoaded();
            }
          }
        }, {
          key: "prepareLazyLoaded",
          value: function prepareLazyLoaded() {
            if (!this.loaded && this.component != null) {
              this.loaded = true;

              try {
                return Object(_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.delegate, this.el, this.component, ['ion-page']);
              } catch (e) {
                console.error(e);
              }
            }

            return Promise.resolve(undefined);
          }
        }, {
          key: "render",
          value: function render() {
            var tab = this.tab,
                active = this.active,
                component = this.component;
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              role: "tabpanel",
              "aria-hidden": !active ? 'true' : null,
              "aria-labelledby": "tab-button-".concat(tab),
              "class": {
                'ion-page': component === undefined,
                'tab-hidden': !active
              }
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }], [{
          key: "watchers",
          get: function get() {
            return {
              "active": ["changeActive"]
            };
          }
        }]);
      }();

      Tab.style = tabCss;
      var tabsCss = ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";

      var Tabs = /*#__PURE__*/function () {
        function Tabs(hostRef) {
          var _this = this;

          _classCallCheck(this, Tabs);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionNavWillLoad = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionNavWillLoad", 7);
          this.ionTabsWillChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionTabsWillChange", 3);
          this.ionTabsDidChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionTabsDidChange", 3);
          this.transitioning = false;
          /** @internal */

          this.useRouter = false;

          this.onTabClicked = function (ev) {
            var _ev$detail = ev.detail,
                href = _ev$detail.href,
                tab = _ev$detail.tab;

            if (_this.useRouter && href !== undefined) {
              var router = document.querySelector('ion-router');

              if (router) {
                router.push(href);
              }
            } else {
              _this.select(tab);
            }
          };
        }

        return _createClass(Tabs, [{
          key: "componentWillLoad",
          value: function () {
            var _componentWillLoad2 = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee3() {
              var tabs;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    if (!this.useRouter) {
                      this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');
                    }

                    if (this.useRouter) {
                      _context3.n = 1;
                      break;
                    }

                    tabs = this.tabs;

                    if (!(tabs.length > 0)) {
                      _context3.n = 1;
                      break;
                    }

                    _context3.n = 1;
                    return this.select(tabs[0]);

                  case 1:
                    this.ionNavWillLoad.emit();

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));

            function componentWillLoad() {
              return _componentWillLoad2.apply(this, arguments);
            }

            return componentWillLoad;
          }()
        }, {
          key: "componentWillRender",
          value: function componentWillRender() {
            var tabBar = this.el.querySelector('ion-tab-bar');

            if (tabBar) {
              var tab = this.selectedTab ? this.selectedTab.tab : undefined;
              tabBar.selectedTab = tab;
            }
          }
          /**
           * Select a tab by the value of its `tab` property or an element reference.
           *
           * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
           */

        }, {
          key: "select",
          value: function () {
            var _select = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee4(tab) {
              var selectedTab;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    selectedTab = _getTab(this.tabs, tab);

                    if (this.shouldSwitch(selectedTab)) {
                      _context4.n = 1;
                      break;
                    }

                    return _context4.a(2, false);

                  case 1:
                    _context4.n = 2;
                    return this.setActive(selectedTab);

                  case 2:
                    _context4.n = 3;
                    return this.notifyRouter();

                  case 3:
                    this.tabSwitch();
                    return _context4.a(2, true);
                }
              }, _callee4, this);
            }));

            function select(_x) {
              return _select.apply(this, arguments);
            }

            return select;
          }()
          /**
           * Get a specific tab by the value of its `tab` property or an element reference.
           *
           * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
           */

        }, {
          key: "getTab",
          value: function () {
            var _getTab2 = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee5(tab) {
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    return _context5.a(2, _getTab(this.tabs, tab));
                }
              }, _callee5, this);
            }));

            function getTab(_x2) {
              return _getTab2.apply(this, arguments);
            }

            return getTab;
          }()
          /**
           * Get the currently selected tab.
           */

        }, {
          key: "getSelected",
          value: function getSelected() {
            return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
          }
          /** @internal */

        }, {
          key: "setRouteId",
          value: function () {
            var _setRouteId = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee6(id) {
              var _this2 = this;

              var selectedTab;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    selectedTab = _getTab(this.tabs, id);

                    if (this.shouldSwitch(selectedTab)) {
                      _context6.n = 1;
                      break;
                    }

                    return _context6.a(2, {
                      changed: false,
                      element: this.selectedTab
                    });

                  case 1:
                    _context6.n = 2;
                    return this.setActive(selectedTab);

                  case 2:
                    return _context6.a(2, {
                      changed: true,
                      element: this.selectedTab,
                      markVisible: function markVisible() {
                        return _this2.tabSwitch();
                      }
                    });
                }
              }, _callee6, this);
            }));

            function setRouteId(_x3) {
              return _setRouteId.apply(this, arguments);
            }

            return setRouteId;
          }()
          /** @internal */

        }, {
          key: "getRouteId",
          value: function () {
            var _getRouteId = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee7() {
              var tabId;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    tabId = this.selectedTab && this.selectedTab.tab;
                    return _context7.a(2, tabId !== undefined ? {
                      id: tabId,
                      element: this.selectedTab
                    } : undefined);
                }
              }, _callee7, this);
            }));

            function getRouteId() {
              return _getRouteId.apply(this, arguments);
            }

            return getRouteId;
          }()
        }, {
          key: "setActive",
          value: function setActive(selectedTab) {
            if (this.transitioning) {
              return Promise.reject('transitioning already happening');
            }

            this.transitioning = true;
            this.leavingTab = this.selectedTab;
            this.selectedTab = selectedTab;
            this.ionTabsWillChange.emit({
              tab: selectedTab.tab
            });
            selectedTab.active = true;
            return Promise.resolve();
          }
        }, {
          key: "tabSwitch",
          value: function tabSwitch() {
            var selectedTab = this.selectedTab;
            var leavingTab = this.leavingTab;
            this.leavingTab = undefined;
            this.transitioning = false;

            if (!selectedTab) {
              return;
            }

            if (leavingTab !== selectedTab) {
              if (leavingTab) {
                leavingTab.active = false;
              }

              this.ionTabsDidChange.emit({
                tab: selectedTab.tab
              });
            }
          }
        }, {
          key: "notifyRouter",
          value: function notifyRouter() {
            if (this.useRouter) {
              var router = document.querySelector('ion-router');

              if (router) {
                return router.navChanged('forward');
              }
            }

            return Promise.resolve(false);
          }
        }, {
          key: "shouldSwitch",
          value: function shouldSwitch(selectedTab) {
            var leavingTab = this.selectedTab;
            return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
          }
        }, {
          key: "tabs",
          get: function get() {
            return Array.from(this.el.querySelectorAll('ion-tab'));
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onIonTabButtonClick: this.onTabClicked
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "top"
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "tabs-inner"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "bottom"
            }));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }]);
      }();

      var _getTab = function _getTab(tabs, tab) {
        var tabEl = typeof tab === 'string' ? tabs.find(function (t) {
          return t.tab === tab;
        }) : tab;

        if (!tabEl) {
          console.error("tab with id: \"".concat(tabEl, "\" does not exist"));
        }

        return tabEl;
      };

      Tabs.style = tabsCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=37-es5.js.map