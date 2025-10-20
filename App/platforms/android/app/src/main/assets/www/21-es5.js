(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }

  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21], {
    /***/
    "vnES":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js ***!
      \**************************************************************/

    /*! exports provided: ion_nav, ion_nav_link */

    /***/
    function vnES(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_nav", function () {
        return Nav;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_nav_link", function () {
        return NavLink;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ionic-global-63a97a32.js */
      "E/Mt");
      /* harmony import */


      var _cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cubic-bezier-eea9a7a9.js */
      "bC4P");
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");
      /* harmony import */


      var _index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./index-931440b1.js */
      "Js3/");
      /* harmony import */


      var _framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./framework-delegate-4392cd63.js */
      "acej");

      var VIEW_STATE_NEW = 1;
      var VIEW_STATE_ATTACHED = 2;
      var VIEW_STATE_DESTROYED = 3;

      var ViewController = /*#__PURE__*/function () {
        function ViewController(component, params) {
          _classCallCheck(this, ViewController);

          this.component = component;
          this.params = params;
          this.state = VIEW_STATE_NEW;
        }

        return _createClass(ViewController, [{
          key: "init",
          value: function () {
            var _init = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee(container) {
              var component;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.state = VIEW_STATE_ATTACHED;

                    if (this.element) {
                      _context.n = 2;
                      break;
                    }

                    component = this.component;
                    _context.n = 1;
                    return Object(_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_5__["a"])(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params);

                  case 1:
                    this.element = _context.v;

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));

            function init(_x) {
              return _init.apply(this, arguments);
            }

            return init;
          }()
          /**
           * DOM WRITE
           */

        }, {
          key: "_destroy",
          value: function _destroy() {
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(this.state !== VIEW_STATE_DESTROYED, 'view state must be ATTACHED');
            var element = this.element;

            if (element) {
              if (this.delegate) {
                this.delegate.removeViewFromDom(element.parentElement, element);
              } else {
                element.remove();
              }
            }

            this.nav = undefined;
            this.state = VIEW_STATE_DESTROYED;
          }
        }]);
      }();

      var matches = function matches(view, id, params) {
        if (!view) {
          return false;
        }

        if (view.component !== id) {
          return false;
        }

        var currentParams = view.params;

        if (currentParams === params) {
          return true;
        }

        if (!currentParams && !params) {
          return true;
        }

        if (!currentParams || !params) {
          return false;
        }

        var keysA = Object.keys(currentParams);
        var keysB = Object.keys(params);

        if (keysA.length !== keysB.length) {
          return false;
        } // Test for A's keys different from B.


        for (var _i = 0, _keysA = keysA; _i < _keysA.length; _i++) {
          var key = _keysA[_i];

          if (currentParams[key] !== params[key]) {
            return false;
          }
        }

        return true;
      };

      var convertToView = function convertToView(page, params) {
        if (!page) {
          return null;
        }

        if (page instanceof ViewController) {
          return page;
        }

        return new ViewController(page, params);
      };

      var convertToViews = function convertToViews(pages) {
        return pages.map(function (page) {
          if (page instanceof ViewController) {
            return page;
          }

          if ('component' in page) {
            /**
             * TODO Ionic 6:
             * Consider switching to just using `undefined` here
             * as well as on the public interfaces and on
             * `NavComponentWithProps`. Previously `pages` was
             * of type `any[]` so TypeScript did not catch this.
             */
            return convertToView(page.component, page.componentProps === null ? undefined : page.componentProps);
          }

          return convertToView(page, undefined);
        }).filter(function (v) {
          return v !== null;
        });
      };

      var navCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";

      var Nav = /*#__PURE__*/function () {
        function Nav(hostRef) {
          _classCallCheck(this, Nav);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionNavWillLoad = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionNavWillLoad", 7);
          this.ionNavWillChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionNavWillChange", 3);
          this.ionNavDidChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionNavDidChange", 3);
          this.transInstr = [];
          this.animationEnabled = true;
          this.useRouter = false;
          this.isTransitioning = false;
          this.destroyed = false;
          this.views = [];
          /**
           * If `true`, the nav should animate the transition of components.
           */

          this.animated = true;
        }

        return _createClass(Nav, [{
          key: "swipeGestureChanged",
          value: function swipeGestureChanged() {
            if (this.gesture) {
              this.gesture.enable(this.swipeGesture === true);
            }
          }
        }, {
          key: "rootChanged",
          value: function rootChanged() {
            if (this.root !== undefined) {
              if (!this.useRouter) {
                this.setRoot(this.root, this.rootParams);
              }
            }
          }
        }, {
          key: "componentWillLoad",
          value: function componentWillLoad() {
            this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');

            if (this.swipeGesture === undefined) {
              var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
              this.swipeGesture = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].getBoolean('swipeBackEnabled', mode === 'ios');
            }

            this.ionNavWillLoad.emit();
          }
        }, {
          key: "componentDidLoad",
          value: function () {
            var _componentDidLoad = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee2() {
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.rootChanged();
                    _context2.n = 1;
                    return __webpack_require__.e(
                    /*! import() | swipe-back-fae97365-js */
                    "swipe-back-fae97365-js").then(__webpack_require__.bind(null,
                    /*! ./swipe-back-fae97365.js */
                    "Pu4v"));

                  case 1:
                    this.gesture = _context2.v.createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
                    this.swipeGestureChanged();

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));

            function componentDidLoad() {
              return _componentDidLoad.apply(this, arguments);
            }

            return componentDidLoad;
          }()
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var _iterator = _createForOfIteratorHelper(this.views),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var view = _step.value;
                Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__["l"])(view.element, _index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__["d"]);

                view._destroy();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (this.gesture) {
              this.gesture.destroy();
              this.gesture = undefined;
            } // release swipe back gesture and transition


            this.transInstr.length = this.views.length = 0;
            this.destroyed = true;
          }
          /**
           * Push a new component onto the current navigation stack. Pass any additional
           * information along as an object. This additional information is accessible
           * through NavParams.
           *
           * @param component The component to push onto the navigation stack.
           * @param componentProps Any properties of the component.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "push",
          value: function push(component, componentProps, opts, done) {
            return this.queueTrns({
              insertStart: -1,
              insertViews: [{
                component: component,
                componentProps: componentProps
              }],
              opts: opts
            }, done);
          }
          /**
           * Inserts a component into the navigation stack at the specified index.
           * This is useful to add a component at any point in the navigation stack.
           *
           * @param insertIndex The index to insert the component at in the stack.
           * @param component The component to insert into the navigation stack.
           * @param componentProps Any properties of the component.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "insert",
          value: function insert(insertIndex, component, componentProps, opts, done) {
            return this.queueTrns({
              insertStart: insertIndex,
              insertViews: [{
                component: component,
                componentProps: componentProps
              }],
              opts: opts
            }, done);
          }
          /**
           * Inserts an array of components into the navigation stack at the specified index.
           * The last component in the array will become instantiated as a view, and animate
           * in to become the active view.
           *
           * @param insertIndex The index to insert the components at in the stack.
           * @param insertComponents The components to insert into the navigation stack.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "insertPages",
          value: function insertPages(insertIndex, insertComponents, opts, done) {
            return this.queueTrns({
              insertStart: insertIndex,
              insertViews: insertComponents,
              opts: opts
            }, done);
          }
          /**
           * Pop a component off of the navigation stack. Navigates back from the current
           * component.
           *
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "pop",
          value: function pop(opts, done) {
            return this.queueTrns({
              removeStart: -1,
              removeCount: 1,
              opts: opts
            }, done);
          }
          /**
           * Pop to a specific index in the navigation stack.
           *
           * @param indexOrViewCtrl The index or view controller to pop to.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "popTo",
          value: function popTo(indexOrViewCtrl, opts, done) {
            var tiConfig = {
              removeStart: -1,
              removeCount: -1,
              opts: opts
            };

            if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
              tiConfig.removeView = indexOrViewCtrl;
              tiConfig.removeStart = 1;
            } else if (typeof indexOrViewCtrl === 'number') {
              tiConfig.removeStart = indexOrViewCtrl + 1;
            }

            return this.queueTrns(tiConfig, done);
          }
          /**
           * Navigate back to the root of the stack, no matter how far back that is.
           *
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "popToRoot",
          value: function popToRoot(opts, done) {
            return this.queueTrns({
              removeStart: 1,
              removeCount: -1,
              opts: opts
            }, done);
          }
          /**
           * Removes a component from the navigation stack at the specified index.
           *
           * @param startIndex The number to begin removal at.
           * @param removeCount The number of components to remove.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "removeIndex",
          value: function removeIndex(startIndex) {
            var removeCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var opts = arguments.length > 2 ? arguments[2] : undefined;
            var done = arguments.length > 3 ? arguments[3] : undefined;
            return this.queueTrns({
              removeStart: startIndex,
              removeCount: removeCount,
              opts: opts
            }, done);
          }
          /**
           * Set the root for the current navigation stack to a component.
           *
           * @param component The component to set as the root of the navigation stack.
           * @param componentProps Any properties of the component.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "setRoot",
          value: function setRoot(component, componentProps, opts, done) {
            return this.setPages([{
              component: component,
              componentProps: componentProps
            }], opts, done);
          }
          /**
           * Set the views of the current navigation stack and navigate to the last view.
           * By default animations are disabled, but they can be enabled by passing options
           * to the navigation controller. Navigation parameters can also be passed to the
           * individual pages in the array.
           *
           * @param views The list of views to set as the navigation stack.
           * @param opts The navigation options.
           * @param done The transition complete function.
           */

        }, {
          key: "setPages",
          value: function setPages(views, opts, done) {
            if (opts == null) {
              opts = {};
            } // if animation wasn't set to true then default it to NOT animate


            if (opts.animated !== true) {
              opts.animated = false;
            }

            return this.queueTrns({
              insertStart: 0,
              insertViews: views,
              removeStart: 0,
              removeCount: -1,
              opts: opts
            }, done);
          }
          /** @internal */

        }, {
          key: "setRouteId",
          value: function setRouteId(id, params, direction, animation) {
            var active = this.getActiveSync();

            if (matches(active, id, params)) {
              return Promise.resolve({
                changed: false,
                element: active.element
              });
            }

            var resolve;
            var promise = new Promise(function (r) {
              return resolve = r;
            });
            var finish;
            var commonOpts = {
              updateURL: false,
              viewIsReady: function viewIsReady(enteringEl) {
                var mark;
                var p = new Promise(function (r) {
                  return mark = r;
                });
                resolve({
                  changed: true,
                  element: enteringEl,
                  markVisible: function () {
                    var _markVisible = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee3() {
                      return _regenerator().w(function (_context3) {
                        while (1) switch (_context3.n) {
                          case 0:
                            mark();
                            _context3.n = 1;
                            return finish;

                          case 1:
                            return _context3.a(2);
                        }
                      }, _callee3);
                    }));

                    function markVisible() {
                      return _markVisible.apply(this, arguments);
                    }

                    return markVisible;
                  }()
                });
                return p;
              }
            };

            if (direction === 'root') {
              finish = this.setRoot(id, params, commonOpts);
            } else {
              var viewController = this.views.find(function (v) {
                return matches(v, id, params);
              });

              if (viewController) {
                finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), {
                  direction: 'back',
                  animationBuilder: animation
                }));
              } else if (direction === 'forward') {
                finish = this.push(id, params, Object.assign(Object.assign({}, commonOpts), {
                  animationBuilder: animation
                }));
              } else if (direction === 'back') {
                finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), {
                  direction: 'back',
                  animated: true,
                  animationBuilder: animation
                }));
              }
            }

            return promise;
          }
          /** @internal */

        }, {
          key: "getRouteId",
          value: function () {
            var _getRouteId = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee4() {
              var active;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    active = this.getActiveSync();
                    return _context4.a(2, active ? {
                      id: active.element.tagName,
                      params: active.params,
                      element: active.element
                    } : undefined);
                }
              }, _callee4, this);
            }));

            function getRouteId() {
              return _getRouteId.apply(this, arguments);
            }

            return getRouteId;
          }()
          /**
           * Get the active view.
           */

        }, {
          key: "getActive",
          value: function getActive() {
            return Promise.resolve(this.getActiveSync());
          }
          /**
           * Get the view at the specified index.
           *
           * @param index The index of the view.
           */

        }, {
          key: "getByIndex",
          value: function getByIndex(index) {
            return Promise.resolve(this.views[index]);
          }
          /**
           * Returns `true` if the current view can go back.
           *
           * @param view The view to check.
           */

        }, {
          key: "canGoBack",
          value: function canGoBack(view) {
            return Promise.resolve(this.canGoBackSync(view));
          }
          /**
           * Get the previous view.
           *
           * @param view The view to get.
           */

        }, {
          key: "getPrevious",
          value: function getPrevious(view) {
            return Promise.resolve(this.getPreviousSync(view));
          }
        }, {
          key: "getLength",
          value: function getLength() {
            return this.views.length;
          }
        }, {
          key: "getActiveSync",
          value: function getActiveSync() {
            return this.views[this.views.length - 1];
          }
        }, {
          key: "canGoBackSync",
          value: function canGoBackSync() {
            var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getActiveSync();
            return !!(view && this.getPreviousSync(view));
          }
        }, {
          key: "getPreviousSync",
          value: function getPreviousSync() {
            var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getActiveSync();

            if (!view) {
              return undefined;
            }

            var views = this.views;
            var index = views.indexOf(view);
            return index > 0 ? views[index - 1] : undefined;
          } // _queueTrns() adds a navigation stack change to the queue and schedules it to run:
          // 1. _nextTrns(): consumes the next transition in the queue
          // 2. _viewInit(): initializes enteringView if required
          // 3. _viewTest(): ensures canLeave/canEnter Returns `true`, so the operation can continue
          // 4. _postViewInit(): add/remove the views from the navigation stack
          // 5. _transitionInit(): initializes the visual transition if required and schedules it to run
          // 6. _viewAttachToDOM(): attaches the enteringView to the DOM
          // 7. _transitionStart(): called once the transition actually starts, it initializes the Animation underneath.
          // 8. _transitionFinish(): called once the transition finishes
          // 9. _cleanup(): syncs the navigation internal state with the DOM. For example it removes the pages from the DOM or hides/show them.

        }, {
          key: "queueTrns",
          value: function () {
            var _queueTrns = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee5(ti, done) {
              var promise, router, canTransition;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    if (!(this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy)) {
                      _context5.n = 1;
                      break;
                    }

                    return _context5.a(2, Promise.resolve(false));

                  case 1:
                    promise = new Promise(function (resolve, reject) {
                      ti.resolve = resolve;
                      ti.reject = reject;
                    });
                    ti.done = done;
                    /**
                     * If using router, check to see if navigation hooks
                     * will allow us to perform this transition. This
                     * is required in order for hooks to work with
                     * the ion-back-button or swipe to go back.
                     */

                    if (!(ti.opts && ti.opts.updateURL !== false && this.useRouter)) {
                      _context5.n = 4;
                      break;
                    }

                    router = document.querySelector('ion-router');

                    if (!router) {
                      _context5.n = 4;
                      break;
                    }

                    _context5.n = 2;
                    return router.canTransition();

                  case 2:
                    canTransition = _context5.v;

                    if (!(canTransition === false)) {
                      _context5.n = 3;
                      break;
                    }

                    return _context5.a(2, Promise.resolve(false));

                  case 3:
                    if (!(typeof canTransition === 'string')) {
                      _context5.n = 4;
                      break;
                    }

                    router.push(canTransition, ti.opts.direction || 'back');
                    return _context5.a(2, Promise.resolve(false));

                  case 4:
                    // Normalize empty
                    if (ti.insertViews && ti.insertViews.length === 0) {
                      ti.insertViews = undefined;
                    } // Enqueue transition instruction


                    this.transInstr.push(ti); // if there isn't a transition already happening
                    // then this will kick off this transition

                    this.nextTrns();
                    return _context5.a(2, promise);
                }
              }, _callee5, this);
            }));

            function queueTrns(_x2, _x3) {
              return _queueTrns.apply(this, arguments);
            }

            return queueTrns;
          }()
        }, {
          key: "success",
          value: function success(result, ti) {
            if (this.destroyed) {
              this.fireError('nav controller was destroyed', ti);
              return;
            }

            if (ti.done) {
              ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
            }

            ti.resolve(result.hasCompleted);

            if (ti.opts.updateURL !== false && this.useRouter) {
              var router = document.querySelector('ion-router');

              if (router) {
                var direction = result.direction === 'back' ? 'back' : 'forward';
                router.navChanged(direction);
              }
            }
          }
        }, {
          key: "failed",
          value: function failed(rejectReason, ti) {
            if (this.destroyed) {
              this.fireError('nav controller was destroyed', ti);
              return;
            }

            this.transInstr.length = 0;
            this.fireError(rejectReason, ti);
          }
        }, {
          key: "fireError",
          value: function fireError(rejectReason, ti) {
            if (ti.done) {
              ti.done(false, false, rejectReason);
            }

            if (ti.reject && !this.destroyed) {
              ti.reject(rejectReason);
            } else {
              ti.resolve(false);
            }
          }
        }, {
          key: "nextTrns",
          value: function nextTrns() {
            // this is the framework's bread 'n butta function
            // only one transition is allowed at any given time
            if (this.isTransitioning) {
              return false;
            } // there is no transition happening right now
            // get the next instruction


            var ti = this.transInstr.shift();

            if (!ti) {
              return false;
            }

            this.runTransition(ti);
            return true;
          }
        }, {
          key: "runTransition",
          value: function () {
            var _runTransition = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee6(ti) {
              var leavingView, enteringView, requiresTransition, isBackDirection, result, _t, _t2;

              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.p = _context6.n) {
                  case 0:
                    _context6.p = 0;
                    // set that this nav is actively transitioning
                    this.ionNavWillChange.emit();
                    this.isTransitioning = true;
                    this.prepareTI(ti);
                    leavingView = this.getActiveSync();
                    enteringView = this.getEnteringView(ti, leavingView);

                    if (!(!leavingView && !enteringView)) {
                      _context6.n = 1;
                      break;
                    }

                    throw new Error('no views in the stack to be removed');

                  case 1:
                    if (!(enteringView && enteringView.state === VIEW_STATE_NEW)) {
                      _context6.n = 2;
                      break;
                    }

                    _context6.n = 2;
                    return enteringView.init(this.el);

                  case 2:
                    this.postViewInit(enteringView, leavingView, ti); // Needs transition?

                    requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;

                    if (requiresTransition && ti.opts && leavingView) {
                      isBackDirection = ti.opts.direction === 'back';
                      /**
                       * If heading back, use the entering page's animation
                       * unless otherwise specified by the developer.
                       */

                      if (isBackDirection) {
                        ti.opts.animationBuilder = ti.opts.animationBuilder || enteringView && enteringView.animationBuilder;
                      }

                      leavingView.animationBuilder = ti.opts.animationBuilder;
                    }

                    if (!requiresTransition) {
                      _context6.n = 4;
                      break;
                    }

                    _context6.n = 3;
                    return this.transition(enteringView, leavingView, ti);

                  case 3:
                    _t = _context6.v;
                    _context6.n = 5;
                    break;

                  case 4:
                    _t = {
                      // transition is not required, so we are already done!
                      // they're inserting/removing the views somewhere in the middle or
                      // beginning, so visually nothing needs to animate/transition
                      // resolve immediately because there's no animation that's happening
                      hasCompleted: true,
                      requiresTransition: false
                    };

                  case 5:
                    result = _t;
                    this.success(result, ti);
                    this.ionNavDidChange.emit();
                    _context6.n = 7;
                    break;

                  case 6:
                    _context6.p = 6;
                    _t2 = _context6.v;
                    this.failed(_t2, ti);

                  case 7:
                    this.isTransitioning = false;
                    this.nextTrns();

                  case 8:
                    return _context6.a(2);
                }
              }, _callee6, this, [[0, 6]]);
            }));

            function runTransition(_x4) {
              return _runTransition.apply(this, arguments);
            }

            return runTransition;
          }()
        }, {
          key: "prepareTI",
          value: function prepareTI(ti) {
            var viewsLength = this.views.length;
            ti.opts = ti.opts || {};

            if (ti.opts.delegate === undefined) {
              ti.opts.delegate = this.delegate;
            }

            if (ti.removeView !== undefined) {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(ti.removeStart !== undefined, 'removeView needs removeStart');
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(ti.removeCount !== undefined, 'removeView needs removeCount');
              var index = this.views.indexOf(ti.removeView);

              if (index < 0) {
                throw new Error('removeView was not found');
              }

              ti.removeStart += index;
            }

            if (ti.removeStart !== undefined) {
              if (ti.removeStart < 0) {
                ti.removeStart = viewsLength - 1;
              }

              if (ti.removeCount < 0) {
                ti.removeCount = viewsLength - ti.removeStart;
              }

              ti.leavingRequiresTransition = ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
            }

            if (ti.insertViews) {
              // allow -1 to be passed in to auto push it on the end
              // and clean up the index if it's larger then the size of the stack
              if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                ti.insertStart = viewsLength;
              }

              ti.enteringRequiresTransition = ti.insertStart === viewsLength;
            }

            var insertViews = ti.insertViews;

            if (!insertViews) {
              return;
            }

            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(insertViews.length > 0, 'length can not be zero');
            var viewControllers = convertToViews(insertViews);

            if (viewControllers.length === 0) {
              throw new Error('invalid views to insert');
            } // Check all the inserted view are correct


            var _iterator2 = _createForOfIteratorHelper(viewControllers),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var view = _step2.value;
                view.delegate = ti.opts.delegate;
                var nav = view.nav;

                if (nav && nav !== this) {
                  throw new Error('inserted view was already inserted');
                }

                if (view.state === VIEW_STATE_DESTROYED) {
                  throw new Error('inserted view was already destroyed');
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            ti.insertViews = viewControllers;
          }
        }, {
          key: "getEnteringView",
          value: function getEnteringView(ti, leavingView) {
            var insertViews = ti.insertViews;

            if (insertViews !== undefined) {
              // grab the very last view of the views to be inserted
              // and initialize it as the new entering view
              return insertViews[insertViews.length - 1];
            }

            var removeStart = ti.removeStart;

            if (removeStart !== undefined) {
              var views = this.views;
              var removeEnd = removeStart + ti.removeCount;

              for (var i = views.length - 1; i >= 0; i--) {
                var view = views[i];

                if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                  return view;
                }
              }
            }

            return undefined;
          }
        }, {
          key: "postViewInit",
          value: function postViewInit(enteringView, leavingView, ti) {
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(leavingView || enteringView, 'Both leavingView and enteringView are null');
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(ti.resolve, 'resolve must be valid');
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(ti.reject, 'reject must be valid');
            var opts = ti.opts;
            var insertViews = ti.insertViews;
            var removeStart = ti.removeStart;
            var removeCount = ti.removeCount;
            var destroyQueue; // there are views to remove

            if (removeStart !== undefined && removeCount !== undefined) {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(removeStart >= 0, 'removeStart can not be negative');
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(removeCount >= 0, 'removeCount can not be negative');
              destroyQueue = [];

              for (var i = 0; i < removeCount; i++) {
                var view = this.views[i + removeStart];

                if (view && view !== enteringView && view !== leavingView) {
                  destroyQueue.push(view);
                }
              } // default the direction to "back"


              opts.direction = opts.direction || 'back';
            }

            var finalBalance = this.views.length + (insertViews !== undefined ? insertViews.length : 0) - (removeCount !== undefined ? removeCount : 0);
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(finalBalance >= 0, 'final balance can not be negative');

            if (finalBalance === 0) {
              console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el);
              throw new Error('navigation stack needs at least one root page');
            } // At this point the transition can not be rejected, any throw should be an error
            // there are views to insert


            if (insertViews) {
              // add the views to the
              var insertIndex = ti.insertStart;

              var _iterator3 = _createForOfIteratorHelper(insertViews),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _view = _step3.value;
                  this.insertViewAt(_view, insertIndex);
                  insertIndex++;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              if (ti.enteringRequiresTransition) {
                // default to forward if not already set
                opts.direction = opts.direction || 'forward';
              }
            } // if the views to be removed are in the beginning or middle
            // and there is not a view that needs to visually transition out
            // then just destroy them and don't transition anything
            // batch all of lifecycles together
            // let's make sure, callbacks are zoned


            if (destroyQueue && destroyQueue.length > 0) {
              var _iterator4 = _createForOfIteratorHelper(destroyQueue),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _view2 = _step4.value;
                  Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__["l"])(_view2.element, _index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__["b"]);
                  Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__["l"])(_view2.element, _index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__["c"]);
                  Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__["l"])(_view2.element, _index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__["d"]);
                } // once all lifecycle events has been delivered, we can safely detroy the views

              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              var _iterator5 = _createForOfIteratorHelper(destroyQueue),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _view3 = _step5.value;
                  this.destroyView(_view3);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }
        }, {
          key: "transition",
          value: function () {
            var _transition = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee7(enteringView, leavingView, ti) {
              var _this = this;

              var opts, progressCallback, mode, enteringEl, leavingEl, animationOpts, _yield$Object, hasCompleted;

              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    // we should animate (duration > 0) if the pushed page is not the first one (startup)
                    // or if it is a portal (modal, actionsheet, etc.)
                    opts = ti.opts;
                    progressCallback = opts.progressAnimation ? function (ani) {
                      return _this.sbAni = ani;
                    } : undefined;
                    mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    enteringEl = enteringView.element;
                    leavingEl = leavingView && leavingView.element;
                    animationOpts = Object.assign(Object.assign({
                      mode: mode,
                      showGoBack: this.canGoBackSync(enteringView),
                      baseEl: this.el,
                      progressCallback: progressCallback,
                      animated: this.animated && _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].getBoolean('animated', true),
                      enteringEl: enteringEl,
                      leavingEl: leavingEl
                    }, opts), {
                      animationBuilder: opts.animationBuilder || this.animation || _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('navAnimation')
                    });
                    _context7.n = 1;
                    return Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__["t"])(animationOpts);

                  case 1:
                    _yield$Object = _context7.v;
                    hasCompleted = _yield$Object.hasCompleted;
                    return _context7.a(2, this.transitionFinish(hasCompleted, enteringView, leavingView, opts));
                }
              }, _callee7, this);
            }));

            function transition(_x5, _x6, _x7) {
              return _transition.apply(this, arguments);
            }

            return transition;
          }()
        }, {
          key: "transitionFinish",
          value: function transitionFinish(hasCompleted, enteringView, leavingView, opts) {
            var cleanupView = hasCompleted ? enteringView : leavingView;

            if (cleanupView) {
              this.cleanup(cleanupView);
            }

            return {
              hasCompleted: hasCompleted,
              requiresTransition: true,
              enteringView: enteringView,
              leavingView: leavingView,
              direction: opts.direction
            };
          }
        }, {
          key: "insertViewAt",
          value: function insertViewAt(view, index) {
            var views = this.views;
            var existingIndex = views.indexOf(view);

            if (existingIndex > -1) {
              // this view is already in the stack!!
              // move it to its new location
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(view.nav === this, 'view is not part of the nav');
              views.splice(index, 0, views.splice(existingIndex, 1)[0]);
            } else {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(!view.nav, 'nav is used'); // this is a new view to add to the stack
              // create the new entering view

              view.nav = this; // insert the entering view into the correct index in the stack

              views.splice(index, 0, view);
            }
          }
        }, {
          key: "removeView",
          value: function removeView(view) {
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, 'view state should be loaded or destroyed');
            var views = this.views;
            var index = views.indexOf(view);
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["l"])(index > -1, 'view must be part of the stack');

            if (index >= 0) {
              views.splice(index, 1);
            }
          }
        }, {
          key: "destroyView",
          value: function destroyView(view) {
            view._destroy();

            this.removeView(view);
          }
          /**
           * DOM WRITE
           */

        }, {
          key: "cleanup",
          value: function cleanup(activeView) {
            // ok, cleanup time!! Destroy all of the views that are
            // INACTIVE and come after the active view
            // only do this if the views exist, though
            if (this.destroyed) {
              return;
            }

            var views = this.views;
            var activeViewIndex = views.indexOf(activeView);

            for (var i = views.length - 1; i >= 0; i--) {
              var view = views[i];
              /**
               * When inserting multiple views via insertPages
               * the last page will be transitioned to, but the
               * others will not be. As a result, a DOM element
               * will only be created for the last page inserted.
               * As a result, it is possible to have views in the
               * stack that do not have `view.element` yet.
               */

              var element = view.element;

              if (element) {
                if (i > activeViewIndex) {
                  // this view comes after the active view
                  // let's unload it
                  Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__["l"])(element, _index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__["d"]);
                  this.destroyView(view);
                } else if (i < activeViewIndex) {
                  // this view comes before the active view
                  // and it is not a portal then ensure it is hidden
                  Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_4__["s"])(element, true);
                }
              }
            }
          }
        }, {
          key: "canStart",
          value: function canStart() {
            return !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.animationEnabled && this.canGoBackSync();
          }
        }, {
          key: "onStart",
          value: function onStart() {
            this.queueTrns({
              removeStart: -1,
              removeCount: 1,
              opts: {
                direction: 'back',
                progressAnimation: true
              }
            }, undefined);
          }
        }, {
          key: "onMove",
          value: function onMove(stepValue) {
            if (this.sbAni) {
              this.sbAni.progressStep(stepValue);
            }
          }
        }, {
          key: "onEnd",
          value: function onEnd(shouldComplete, stepValue, dur) {
            var _this2 = this;

            if (this.sbAni) {
              this.animationEnabled = false;
              this.sbAni.onFinish(function () {
                _this2.animationEnabled = true;
              }, {
                oneTimeCallback: true
              }); // Account for rounding errors in JS

              var newStepValue = shouldComplete ? -0.001 : 0.001;
              /**
               * Animation will be reversed here, so need to
               * reverse the easing curve as well
               *
               * Additionally, we need to account for the time relative
               * to the new easing curve, as `stepValue` is going to be given
               * in terms of a linear curve.
               */

              if (!shouldComplete) {
                this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__["g"])([0, 0], [1, 0], [0.68, 0.28], [1, 1], stepValue)[0];
              } else {
                newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__["g"])([0, 0], [0.32, 0.72], [0, 1], [1, 1], stepValue)[0];
              }

              this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
            }
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
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
              "swipeGesture": ["swipeGestureChanged"],
              "root": ["rootChanged"]
            };
          }
        }]);
      }();

      Nav.style = navCss;

      var navLink = function navLink(el, routerDirection, component, componentProps, routerAnimation) {
        var nav = el.closest('ion-nav');

        if (nav) {
          if (routerDirection === 'forward') {
            if (component !== undefined) {
              return nav.push(component, componentProps, {
                skipIfBusy: true,
                animationBuilder: routerAnimation
              });
            }
          } else if (routerDirection === 'root') {
            if (component !== undefined) {
              return nav.setRoot(component, componentProps, {
                skipIfBusy: true,
                animationBuilder: routerAnimation
              });
            }
          } else if (routerDirection === 'back') {
            return nav.pop({
              skipIfBusy: true,
              animationBuilder: routerAnimation
            });
          }
        }

        return Promise.resolve(false);
      };

      var NavLink = /*#__PURE__*/function () {
        function NavLink(hostRef) {
          var _this3 = this;

          _classCallCheck(this, NavLink);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * The transition direction when navigating to another page.
           */

          this.routerDirection = 'forward';

          this.onClick = function () {
            return navLink(_this3.el, _this3.routerDirection, _this3.component, _this3.componentProps, _this3.routerAnimation);
          };
        }

        return _createClass(NavLink, [{
          key: "render",
          value: function render() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick
            });
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }]);
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=21-es5.js.map