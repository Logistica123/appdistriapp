(function () {
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }

  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19], {
    /***/
    "kyFE":
    /*!***************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js ***!
      \***************************************************************/

    /*! exports provided: ion_menu, ion_menu_button, ion_menu_toggle */

    /***/
    function kyFE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_menu", function () {
        return Menu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_menu_button", function () {
        return MenuButton;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_menu_toggle", function () {
        return MenuToggle;
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


      var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gesture-controller-31cb6bb9.js */
      "y08P");
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");
      /* harmony import */


      var _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./index-0d58a5bf.js */
      "r7QR");
      /* harmony import */


      var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./theme-ff3fc52f.js */
      "74mu");
      /* harmony import */


      var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./hardware-back-button-4a6b37fb.js */
      "B4Jq");
      /* harmony import */


      var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./animation-096c6391.js */
      "meiF");

      var menuIosCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";
      var menuMdCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";
      var iosEasing = 'cubic-bezier(0.32,0.72,0,1)';
      var mdEasing = 'cubic-bezier(0.0,0.0,0.2,1)';
      var iosEasingReverse = 'cubic-bezier(1, 0, 0.68, 0.28)';
      var mdEasingReverse = 'cubic-bezier(0.4, 0, 0.6, 1)';

      var Menu = /*#__PURE__*/function () {
        function Menu(hostRef) {
          _classCallCheck(this, Menu);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionWillOpen = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionWillOpen", 7);
          this.ionWillClose = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionWillClose", 7);
          this.ionDidOpen = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionDidOpen", 7);
          this.ionDidClose = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionDidClose", 7);
          this.ionMenuChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionMenuChange", 7);
          this.lastOnEnd = 0;
          this.blocker = _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_3__["G"].createBlocker({
            disableScroll: true
          });
          this.isAnimating = false;
          this._isOpen = false;
          this.isPaneVisible = false;
          this.isEndSide = false;
          /**
           * If `true`, the menu is disabled.
           */

          this.disabled = false;
          /**
           * Which side of the view the menu should be placed.
           */

          this.side = 'start';
          /**
           * If `true`, swiping the menu is enabled.
           */

          this.swipeGesture = true;
          /**
           * The edge threshold for dragging the menu open.
           * If a drag/swipe happens over this value, the menu is not triggered.
           */

          this.maxEdgeStart = 50;
        }

        return _createClass(Menu, [{
          key: "typeChanged",
          value: function typeChanged(type, oldType) {
            var contentEl = this.contentEl;

            if (contentEl) {
              if (oldType !== undefined) {
                contentEl.classList.remove("menu-content-".concat(oldType));
              }

              contentEl.classList.add("menu-content-".concat(type));
              contentEl.removeAttribute('style');
            }

            if (this.menuInnerEl) {
              // Remove effects of previous animations
              this.menuInnerEl.removeAttribute('style');
            }

            this.animation = undefined;
          }
        }, {
          key: "disabledChanged",
          value: function disabledChanged() {
            this.updateState();
            this.ionMenuChange.emit({
              disabled: this.disabled,
              open: this._isOpen
            });
          }
        }, {
          key: "sideChanged",
          value: function sideChanged() {
            this.isEndSide = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["m"])(this.side);
          }
        }, {
          key: "swipeGestureChanged",
          value: function swipeGestureChanged() {
            this.updateState();
          }
        }, {
          key: "connectedCallback",
          value: function () {
            var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee() {
              var _this = this;

              var el, parent, content;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (this.type === undefined) {
                      this.type = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('menuType', 'overlay');
                    }

                    el = this.el;
                    parent = el.parentNode;

                    if (this.contentId === undefined) {
                      console.warn("[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the \"contentId\" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId=\"main-content\"></ion-menu>\n  <div id=\"main-content\">...</div>\n");
                    }

                    content = this.contentId !== undefined ? document.getElementById(this.contentId) : parent && parent.querySelector && parent.querySelector('[main]');

                    if (!(!content || !content.tagName)) {
                      _context.n = 1;
                      break;
                    }

                    // requires content element
                    console.error('Menu: must have a "content" element to listen for drag events on.');
                    return _context.a(2);

                  case 1:
                    this.contentEl = content; // add menu's content classes

                    content.classList.add('menu-content');
                    this.typeChanged(this.type, undefined);
                    this.sideChanged(); // register this menu with the app's menu controller

                    _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"]._register(this);

                    _context.n = 2;
                    return Promise.resolve().then(__webpack_require__.bind(null,
                    /*! ./index-34cb2743.js */
                    "KF81"));

                  case 2:
                    this.gesture = _context.v.createGesture({
                      el: document,
                      gestureName: 'menu-swipe',
                      gesturePriority: 30,
                      threshold: 10,
                      blurOnStart: true,
                      canStart: function canStart(ev) {
                        return _this.canStart(ev);
                      },
                      onWillStart: function onWillStart() {
                        return _this.onWillStart();
                      },
                      onStart: function onStart() {
                        return _this.onStart();
                      },
                      onMove: function onMove(ev) {
                        return _this.onMove(ev);
                      },
                      onEnd: function onEnd(ev) {
                        return _this.onEnd(ev);
                      }
                    });
                    this.updateState();

                  case 3:
                    return _context.a(2);
                }
              }, _callee, this);
            }));

            function connectedCallback() {
              return _connectedCallback.apply(this, arguments);
            }

            return connectedCallback;
          }()
        }, {
          key: "componentDidLoad",
          value: function () {
            var _componentDidLoad = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee2() {
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.ionMenuChange.emit({
                      disabled: this.disabled,
                      open: this._isOpen
                    });
                    this.updateState();

                  case 1:
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
            this.blocker.destroy();

            _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"]._unregister(this);

            if (this.animation) {
              this.animation.destroy();
            }

            if (this.gesture) {
              this.gesture.destroy();
              this.gesture = undefined;
            }

            this.animation = undefined;
            this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
          }
        }, {
          key: "onSplitPaneChanged",
          value: function onSplitPaneChanged(ev) {
            this.isPaneVisible = ev.detail.isPane(this.el);
            this.updateState();
          }
        }, {
          key: "onBackdropClick",
          value: function onBackdropClick(ev) {
            if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
              var shouldClose = ev.composedPath ? !ev.composedPath().includes(this.menuInnerEl) : false;

              if (shouldClose) {
                ev.preventDefault();
                ev.stopPropagation();
                this.close();
              }
            }
          }
          /**
           * Returns `true` is the menu is open.
           */

        }, {
          key: "isOpen",
          value: function isOpen() {
            return Promise.resolve(this._isOpen);
          }
          /**
           * Returns `true` is the menu is active.
           *
           * A menu is active when it can be opened or closed, meaning it's enabled
           * and it's not part of a `ion-split-pane`.
           */

        }, {
          key: "isActive",
          value: function isActive() {
            return Promise.resolve(this._isActive());
          }
          /**
           * Opens the menu. If the menu is already open or it can't be opened,
           * it returns `false`.
           */

        }, {
          key: "open",
          value: function open() {
            var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return this.setOpen(true, animated);
          }
          /**
           * Closes the menu. If the menu is already closed or it can't be closed,
           * it returns `false`.
           */

        }, {
          key: "close",
          value: function close() {
            var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return this.setOpen(false, animated);
          }
          /**
           * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
           * If the operation can't be completed successfully, it returns `false`.
           */

        }, {
          key: "toggle",
          value: function toggle() {
            var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return this.setOpen(!this._isOpen, animated);
          }
          /**
           * Opens or closes the button.
           * If the operation can't be completed successfully, it returns `false`.
           */

        }, {
          key: "setOpen",
          value: function setOpen(shouldOpen) {
            var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"]._setOpen(this, shouldOpen, animated);
          }
        }, {
          key: "_setOpen",
          value: function () {
            var _setOpen2 = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee3(shouldOpen) {
              var animated,
                  _args3 = arguments;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    animated = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : true;

                    if (!(!this._isActive() || this.isAnimating || shouldOpen === this._isOpen)) {
                      _context3.n = 1;
                      break;
                    }

                    return _context3.a(2, false);

                  case 1:
                    this.beforeAnimation(shouldOpen);
                    _context3.n = 2;
                    return this.loadAnimation();

                  case 2:
                    _context3.n = 3;
                    return this.startAnimation(shouldOpen, animated);

                  case 3:
                    this.afterAnimation(shouldOpen);
                    return _context3.a(2, true);
                }
              }, _callee3, this);
            }));

            function _setOpen(_x) {
              return _setOpen2.apply(this, arguments);
            }

            return _setOpen;
          }()
        }, {
          key: "loadAnimation",
          value: function () {
            var _loadAnimation = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee4() {
              var width;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    // Menu swipe animation takes the menu's inner width as parameter,
                    // If `offsetWidth` changes, we need to create a new animation.
                    width = this.menuInnerEl.offsetWidth;

                    if (!(width === this.width && this.animation !== undefined)) {
                      _context4.n = 1;
                      break;
                    }

                    return _context4.a(2);

                  case 1:
                    this.width = width; // Destroy existing animation

                    if (this.animation) {
                      this.animation.destroy();
                      this.animation = undefined;
                    } // Create new animation


                    _context4.n = 2;
                    return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"]._createAnimation(this.type, this);

                  case 2:
                    this.animation = _context4.v;

                    if (!_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].getBoolean('animated', true)) {
                      this.animation.duration(0);
                    }

                    this.animation.fill('both');

                  case 3:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));

            function loadAnimation() {
              return _loadAnimation.apply(this, arguments);
            }

            return loadAnimation;
          }()
        }, {
          key: "startAnimation",
          value: function () {
            var _startAnimation = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee5(shouldOpen, animated) {
              var isReversed, mode, easing, easingReverse, ani;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    isReversed = !shouldOpen;
                    mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    easing = mode === 'ios' ? iosEasing : mdEasing;
                    easingReverse = mode === 'ios' ? iosEasingReverse : mdEasingReverse;
                    ani = this.animation.direction(isReversed ? 'reverse' : 'normal').easing(isReversed ? easingReverse : easing).onFinish(function () {
                      if (ani.getDirection() === 'reverse') {
                        ani.direction('normal');
                      }
                    });

                    if (!animated) {
                      _context5.n = 2;
                      break;
                    }

                    _context5.n = 1;
                    return ani.play();

                  case 1:
                    _context5.n = 3;
                    break;

                  case 2:
                    ani.play({
                      sync: true
                    });

                  case 3:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));

            function startAnimation(_x2, _x3) {
              return _startAnimation.apply(this, arguments);
            }

            return startAnimation;
          }()
        }, {
          key: "_isActive",
          value: function _isActive() {
            return !this.disabled && !this.isPaneVisible;
          }
        }, {
          key: "canSwipe",
          value: function canSwipe() {
            return this.swipeGesture && !this.isAnimating && this._isActive();
          }
        }, {
          key: "canStart",
          value: function canStart(detail) {
            // Do not allow swipe gesture if a modal is open
            var isModalPresented = !!document.querySelector('ion-modal.show-modal');

            if (isModalPresented || !this.canSwipe()) {
              return false;
            }

            if (this._isOpen) {
              return true; // TODO error
            } else if (_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"]._getOpenSync()) {
              return false;
            }

            return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
          }
        }, {
          key: "onWillStart",
          value: function onWillStart() {
            this.beforeAnimation(!this._isOpen);
            return this.loadAnimation();
          }
        }, {
          key: "onStart",
          value: function onStart() {
            if (!this.isAnimating || !this.animation) {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(false, 'isAnimating has to be true');
              return;
            } // the cloned animation should not use an easing curve during seek


            this.animation.progressStart(true, this._isOpen ? 1 : 0);
          }
        }, {
          key: "onMove",
          value: function onMove(detail) {
            if (!this.isAnimating || !this.animation) {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(false, 'isAnimating has to be true');
              return;
            }

            var delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
            var stepValue = delta / this.width;
            this.animation.progressStep(this._isOpen ? 1 - stepValue : stepValue);
          }
        }, {
          key: "onEnd",
          value: function onEnd(detail) {
            var _this2 = this;

            if (!this.isAnimating || !this.animation) {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(false, 'isAnimating has to be true');
              return;
            }

            var isOpen = this._isOpen;
            var isEndSide = this.isEndSide;
            var delta = computeDelta(detail.deltaX, isOpen, isEndSide);
            var width = this.width;
            var stepValue = delta / width;
            var velocity = detail.velocityX;
            var z = width / 2.0;
            var shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
            var shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
            var shouldComplete = isOpen ? isEndSide ? shouldCompleteRight : shouldCompleteLeft : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
            var shouldOpen = !isOpen && shouldComplete;

            if (isOpen && !shouldComplete) {
              shouldOpen = true;
            }

            this.lastOnEnd = detail.currentTime; // Account for rounding errors in JS

            var newStepValue = shouldComplete ? 0.001 : -0.001;
            /**
             * TODO: stepValue can sometimes return a negative
             * value, but you can't have a negative time value
             * for the cubic bezier curve (at least with web animations)
             * Not sure if the negative step value is an error or not
             */

            var adjustedStepValue = stepValue < 0 ? 0.01 : stepValue;
            /**
             * Animation will be reversed here, so need to
             * reverse the easing curve as well
             *
             * Additionally, we need to account for the time relative
             * to the new easing curve, as `stepValue` is going to be given
             * in terms of a linear curve.
             */

            newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__["g"])([0, 0], [0.4, 0], [0.6, 1], [1, 1], Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["j"])(0, adjustedStepValue, 0.9999))[0] || 0;
            var playTo = this._isOpen ? !shouldComplete : shouldComplete;
            this.animation.easing('cubic-bezier(0.4, 0.0, 0.6, 1)').onFinish(function () {
              return _this2.afterAnimation(shouldOpen);
            }, {
              oneTimeCallback: true
            }).progressEnd(playTo ? 1 : 0, this._isOpen ? 1 - newStepValue : newStepValue, 300);
          }
        }, {
          key: "beforeAnimation",
          value: function beforeAnimation(shouldOpen) {
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(!this.isAnimating, '_before() should not be called while animating'); // this places the menu into the correct location before it animates in
            // this css class doesn't actually kick off any animations

            this.el.classList.add(SHOW_MENU);

            if (this.backdropEl) {
              this.backdropEl.classList.add(SHOW_BACKDROP);
            }

            this.blocker.block();
            this.isAnimating = true;

            if (shouldOpen) {
              this.ionWillOpen.emit();
            } else {
              this.ionWillClose.emit();
            }
          }
        }, {
          key: "afterAnimation",
          value: function afterAnimation(isOpen) {
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(this.isAnimating, '_before() should be called while animating'); // keep opening/closing the menu disabled for a touch more yet
            // only add listeners/css if it's enabled and isOpen
            // and only remove listeners/css if it's not open
            // emit opened/closed events

            this._isOpen = isOpen;
            this.isAnimating = false;

            if (!this._isOpen) {
              this.blocker.unblock();
            }

            if (isOpen) {
              // add css class
              if (this.contentEl) {
                this.contentEl.classList.add(MENU_CONTENT_OPEN);
              } // emit open event


              this.ionDidOpen.emit();
            } else {
              // remove css classes
              this.el.classList.remove(SHOW_MENU);

              if (this.contentEl) {
                this.contentEl.classList.remove(MENU_CONTENT_OPEN);
              }

              if (this.backdropEl) {
                this.backdropEl.classList.remove(SHOW_BACKDROP);
              }

              if (this.animation) {
                this.animation.stop();
              } // emit close event


              this.ionDidClose.emit();
            }
          }
        }, {
          key: "updateState",
          value: function updateState() {
            var isActive = this._isActive();

            if (this.gesture) {
              this.gesture.enable(isActive && this.swipeGesture);
            } // Close menu immediately


            if (!isActive && this._isOpen) {
              // close if this menu is open, and should not be enabled
              this.forceClosing();
            }

            if (!this.disabled) {
              _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"]._setActiveMenu(this);
            }

            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(!this.isAnimating, 'can not be animating');
          }
        }, {
          key: "forceClosing",
          value: function forceClosing() {
            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(this._isOpen, 'menu cannot be closed');
            this.isAnimating = true;
            var ani = this.animation.direction('reverse');
            ani.play({
              sync: true
            });
            this.afterAnimation(false);
          }
        }, {
          key: "render",
          value: function render() {
            var _this3 = this;

            var isEndSide = this.isEndSide,
                type = this.type,
                disabled = this.disabled,
                isPaneVisible = this.isPaneVisible;
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              role: "navigation",
              "class": _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, mode, true), "menu-type-".concat(type), true), 'menu-enabled', !disabled), 'menu-side-end', isEndSide), 'menu-side-start', !isEndSide), 'menu-pane-visible', isPaneVisible)
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "menu-inner",
              part: "container",
              ref: function ref(el) {
                return _this3.menuInnerEl = el;
              }
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
              ref: function ref(el) {
                return _this3.backdropEl = el;
              },
              "class": "menu-backdrop",
              tappable: false,
              stopPropagation: false,
              part: "backdrop"
            }));
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
              "type": ["typeChanged"],
              "disabled": ["disabledChanged"],
              "side": ["sideChanged"],
              "swipeGesture": ["swipeGestureChanged"]
            };
          }
        }]);
      }();

      var computeDelta = function computeDelta(deltaX, isOpen, isEndSide) {
        return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
      };

      var checkEdgeSide = function checkEdgeSide(win, posX, isEndSide, maxEdgeStart) {
        if (isEndSide) {
          return posX >= win.innerWidth - maxEdgeStart;
        } else {
          return posX <= maxEdgeStart;
        }
      };

      var SHOW_MENU = 'show-menu';
      var SHOW_BACKDROP = 'show-backdrop';
      var MENU_CONTENT_OPEN = 'menu-content-open';
      Menu.style = {
        ios: menuIosCss,
        md: menuMdCss
      }; // Given a menu, return whether or not the menu toggle should be visible

      var updateVisibility = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee6(menu) {
          var menuEl, _t;

          return _regenerator().w(function (_context6) {
            while (1) switch (_context6.n) {
              case 0:
                _context6.n = 1;
                return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"].get(menu);

              case 1:
                menuEl = _context6.v;
                _t = menuEl;

                if (!_t) {
                  _context6.n = 3;
                  break;
                }

                _context6.n = 2;
                return menuEl.isActive();

              case 2:
                _t = _context6.v;

              case 3:
                return _context6.a(2, !!_t);
            }
          }, _callee6);
        }));

        return function updateVisibility(_x4) {
          return _ref.apply(this, arguments);
        };
      }();

      var menuButtonIosCss = ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}";
      var menuButtonMdCss = ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}";

      var MenuButton = /*#__PURE__*/function () {
        function MenuButton(hostRef) {
          var _this4 = this;

          _classCallCheck(this, MenuButton);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.inheritedAttributes = {};
          this.visible = false;
          /**
           * If `true`, the user cannot interact with the menu button.
           */

          this.disabled = false;
          /**
           * Automatically hides the menu button when the corresponding menu is not active
           */

          this.autoHide = true;
          /**
           * The type of the button.
           */

          this.type = 'button';
          this.onClick = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee7() {
            return _regenerator().w(function (_context7) {
              while (1) switch (_context7.n) {
                case 0:
                  return _context7.a(2, _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(_this4.menu));
              }
            }, _callee7);
          }));
        }

        return _createClass(MenuButton, [{
          key: "componentWillLoad",
          value: function componentWillLoad() {
            this.inheritedAttributes = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["i"])(this.el, ['aria-label']);
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            this.visibilityChanged();
          }
        }, {
          key: "visibilityChanged",
          value: function () {
            var _visibilityChanged = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee8() {
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    _context8.n = 1;
                    return updateVisibility(this.menu);

                  case 1:
                    this.visible = _context8.v;

                  case 2:
                    return _context8.a(2);
                }
              }, _callee8, this);
            }));

            function visibilityChanged() {
              return _visibilityChanged.apply(this, arguments);
            }

            return visibilityChanged;
          }()
        }, {
          key: "render",
          value: function render() {
            var color = this.color,
                disabled = this.disabled,
                inheritedAttributes = this.inheritedAttributes;
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);

            var menuIcon = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('menuIcon', mode === 'ios' ? 'menu-outline' : 'menu-sharp');

            var hidden = this.autoHide && !this.visible;
            var attrs = {
              type: this.type
            };
            var ariaLabel = inheritedAttributes['aria-label'] || 'menu';
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick,
              "aria-disabled": disabled ? 'true' : null,
              "aria-hidden": hidden ? 'true' : null,
              "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__["c"])(color, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, mode, true), 'button', true), 'menu-button-hidden', hidden), 'menu-button-disabled', disabled), 'in-toolbar', Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__["h"])('ion-toolbar', this.el)), 'in-toolbar-color', Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__["h"])('ion-toolbar[color]', this.el)), 'ion-activatable', true), 'ion-focusable', true))
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", Object.assign({}, attrs, {
              disabled: disabled,
              "class": "button-native",
              part: "native",
              "aria-label": ariaLabel
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "button-inner"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
              part: "icon",
              icon: menuIcon,
              mode: mode,
              lazy: false,
              "aria-hidden": "true"
            }))), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", {
              type: "unbounded"
            })));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }]);
      }();

      MenuButton.style = {
        ios: menuButtonIosCss,
        md: menuButtonMdCss
      };
      var menuToggleCss = ":host(.menu-toggle-hidden){display:none}";

      var MenuToggle = /*#__PURE__*/function () {
        function MenuToggle(hostRef) {
          var _this5 = this;

          _classCallCheck(this, MenuToggle);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.visible = false;
          /**
           * Automatically hides the content when the corresponding menu is not active.
           *
           * By default, it's `true`. Change it to `false` in order to
           * keep `ion-menu-toggle` always visible regardless the state of the menu.
           */

          this.autoHide = true;

          this.onClick = function () {
            return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(_this5.menu);
          };
        }

        return _createClass(MenuToggle, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            this.visibilityChanged();
          }
        }, {
          key: "visibilityChanged",
          value: function () {
            var _visibilityChanged2 = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee9() {
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    _context9.n = 1;
                    return updateVisibility(this.menu);

                  case 1:
                    this.visible = _context9.v;

                  case 2:
                    return _context9.a(2);
                }
              }, _callee9, this);
            }));

            function visibilityChanged() {
              return _visibilityChanged2.apply(this, arguments);
            }

            return visibilityChanged;
          }()
        }, {
          key: "render",
          value: function render() {
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var hidden = this.autoHide && !this.visible;
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick,
              "aria-hidden": hidden ? 'true' : null,
              "class": _defineProperty(_defineProperty({}, mode, true), 'menu-toggle-hidden', hidden)
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
          }
        }]);
      }();

      MenuToggle.style = menuToggleCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=19-es5.js.map