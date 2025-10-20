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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
    /***/
    "uQcF":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js ***!
      \**************************************************************/

    /*! exports provided: ion_fab, ion_fab_button, ion_fab_list */

    /***/
    function uQcF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_fab", function () {
        return Fab;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_fab_button", function () {
        return FabButton;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_fab_list", function () {
        return FabList;
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


      var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./theme-ff3fc52f.js */
      "74mu");

      var fabCss = ":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host-context([dir=rtl]):host(.fab-horizontal-center),:host-context([dir=rtl]).fab-horizontal-center{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]):host(.fab-horizontal-start),:host-context([dir=rtl]).fab-horizontal-start{left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]):host(.fab-horizontal-end),:host-context([dir=rtl]).fab-horizontal-end{left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}";

      var Fab = /*#__PURE__*/function () {
        function Fab(hostRef) {
          var _this = this;

          _classCallCheck(this, Fab);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * If `true`, the fab will display on the edge of the header if
           * `vertical` is `"top"`, and on the edge of the footer if
           * it is `"bottom"`. Should be used with a `fixed` slot.
           */

          this.edge = false;
          /**
           * If `true`, both the `ion-fab-button` and all `ion-fab-list` inside `ion-fab` will become active.
           * That means `ion-fab-button` will become a `close` icon and `ion-fab-list` will become visible.
           */

          this.activated = false;

          this.onClick = function () {
            var hasList = !!_this.el.querySelector('ion-fab-list');

            var getButton = _this.getFab();

            var isButtonDisabled = getButton && getButton.disabled;

            if (hasList && !isButtonDisabled) {
              _this.activated = !_this.activated;
            }
          };
        }

        return _createClass(Fab, [{
          key: "activatedChanged",
          value: function activatedChanged() {
            var activated = this.activated;
            var fab = this.getFab();

            if (fab) {
              fab.activated = activated;
            }

            Array.from(this.el.querySelectorAll('ion-fab-list')).forEach(function (list) {
              list.activated = activated;
            });
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            if (this.activated) {
              this.activatedChanged();
            }
          }
          /**
           * Close an active FAB list container.
           */

        }, {
          key: "close",
          value: function () {
            var _close = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.activated = false;

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));

            function close() {
              return _close.apply(this, arguments);
            }

            return close;
          }()
        }, {
          key: "getFab",
          value: function getFab() {
            return this.el.querySelector('ion-fab-button');
          }
        }, {
          key: "render",
          value: function render() {
            var horizontal = this.horizontal,
                vertical = this.vertical,
                edge = this.edge;
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick,
              "class": _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, mode, true), "fab-horizontal-".concat(horizontal), horizontal !== undefined), "fab-vertical-".concat(vertical), vertical !== undefined), 'fab-edge', edge)
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
              "activated": ["activatedChanged"]
            };
          }
        }]);
      }();

      Fab.style = fabCss;
      var fabButtonIosCss = ":host{--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--background-hover:var(--ion-color-primary-contrast, #fff);--background-hover-opacity:.08;--transition:background-color, opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}::slotted(ion-icon){line-height:1}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:0.5;pointer-events:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-activated) .button-native{color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.close-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;top:0;position:absolute;height:100%;-webkit-transform:scale(0.4) rotateZ(-45deg);transform:scale(0.4) rotateZ(-45deg);-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;font-size:var(--close-icon-font-size);opacity:0;z-index:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.close-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotateZ(0deg);transform:scale(1) rotateZ(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(0.4) rotateZ(45deg);transform:scale(0.4) rotateZ(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:var(--ion-color-primary, #3880ff);--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1;--color:var(--ion-color-primary-contrast, #fff);--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59);--close-icon-font-size:28px}:host(.ion-activated){--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transform:scale(1.1);--transition:0.2s transform ease-out}::slotted(ion-icon){font-size:28px}:host(.fab-button-in-list){--background:var(--ion-color-light, #f4f5f8);--background-activated:var(--ion-color-light-shade, #d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint, #f5f6f9);--color:var(--ion-color-light-contrast, #000);--color-activated:var(--ion-color-light-contrast, #000);--color-focused:var(--color-activated);--transition:transform 200ms ease 10ms, opacity 200ms ease 10ms}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}:host(.ion-color.ion-focused) .button-native,:host(.ion-color.ion-activated) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .button-native::after,:host(.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-contrast)}:host(.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent){--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.9);--background-hover:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.8);--background-focused:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.82);--backdrop-filter:saturate(180%) blur(20px)}:host(.fab-button-translucent-in-list){--background:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.9);--background-hover:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.8);--background-focused:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.82)}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){@media (any-hover: hover){:host(.fab-button-translucent.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb), 0.8)}}:host(.ion-color.fab-button-translucent) .button-native{background:rgba(var(--ion-color-base-rgb), 0.9)}:host(.ion-color.ion-focused.fab-button-translucent) .button-native,:host(.ion-color.ion-activated.fab-button-translucent) .button-native{background:var(--ion-color-base)}}";
      var fabButtonMdCss = ":host{--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--background-hover:var(--ion-color-primary-contrast, #fff);--background-hover-opacity:.08;--transition:background-color, opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}::slotted(ion-icon){line-height:1}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:0.5;pointer-events:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-activated) .button-native{color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.close-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;top:0;position:absolute;height:100%;-webkit-transform:scale(0.4) rotateZ(-45deg);transform:scale(0.4) rotateZ(-45deg);-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;font-size:var(--close-icon-font-size);opacity:0;z-index:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.close-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotateZ(0deg);transform:scale(1) rotateZ(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(0.4) rotateZ(45deg);transform:scale(0.4) rotateZ(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:var(--ion-color-primary, #3880ff);--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--color:var(--ion-color-primary-contrast, #fff);--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 280ms cubic-bezier(0.4, 0, 0.2, 1), color 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;--close-icon-font-size:24px}:host(.ion-activated){--box-shadow:0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)}::slotted(ion-icon){font-size:24px}:host(.fab-button-in-list){--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);--color-activated:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);--color-focused:var(--color-activated);--background:var(--ion-color-light, #f4f5f8);--background-activated:transparent;--background-focused:var(--ion-color-light-shade, #d7d8da);--background-hover:var(--ion-color-light-tint, #f5f6f9)}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.ion-color.ion-activated) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activated) .button-native::after{background:transparent}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-contrast)}:host(.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}}";

      var FabButton = /*#__PURE__*/function () {
        function FabButton(hostRef) {
          var _this2 = this;

          _classCallCheck(this, FabButton);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionFocus = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionFocus", 7);
          this.ionBlur = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionBlur", 7);
          /**
           * If `true`, the fab button will be show a close icon.
           */

          this.activated = false;
          /**
           * If `true`, the user cannot interact with the fab button.
           */

          this.disabled = false;
          /**
           * When using a router, it specifies the transition direction when navigating to
           * another page using `href`.
           */

          this.routerDirection = 'forward';
          /**
           * If `true`, the fab button will show when in a fab-list.
           */

          this.show = false;
          /**
           * If `true`, the fab button will be translucent.
           * Only applies when the mode is `"ios"` and the device supports
           * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
           */

          this.translucent = false;
          /**
           * The type of the button.
           */

          this.type = 'button';
          /**
           * The icon name to use for the close icon. This will appear when the fab button
           * is pressed. Only applies if it is the main button inside of a fab containing a
           * fab list.
           */

          this.closeIcon = 'close';

          this.onFocus = function () {
            _this2.ionFocus.emit();
          };

          this.onBlur = function () {
            _this2.ionBlur.emit();
          };
        }

        return _createClass(FabButton, [{
          key: "render",
          value: function render() {
            var _this3 = this;

            var el = this.el,
                disabled = this.disabled,
                color = this.color,
                href = this.href,
                activated = this.activated,
                show = this.show,
                translucent = this.translucent,
                size = this.size;
            var inList = Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-fab-list', el);
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var TagType = href === undefined ? 'button' : 'a';
            var attrs = TagType === 'button' ? {
              type: this.type
            } : {
              download: this.download,
              href: href,
              rel: this.rel,
              target: this.target
            };
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "aria-disabled": disabled ? 'true' : null,
              "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, mode, true), 'fab-button-in-list', inList), 'fab-button-translucent-in-list', inList && translucent), 'fab-button-close-active', activated), 'fab-button-show', show), 'fab-button-disabled', disabled), 'fab-button-translucent', translucent), 'ion-activatable', true), 'ion-focusable', true), "fab-button-".concat(size), size !== undefined))
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, {
              "class": "button-native",
              part: "native",
              disabled: disabled,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              onClick: function onClick(ev) {
                return Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__["o"])(href, ev, _this3.routerDirection, _this3.routerAnimation);
              }
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
              icon: this.closeIcon,
              part: "close-icon",
              "class": "close-icon",
              lazy: false
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "button-inner"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }]);
      }();

      FabButton.style = {
        ios: fabButtonIosCss,
        md: fabButtonMdCss
      };
      var fabListCss = ":host{margin-left:0;margin-right:0;margin-top:66px;margin-bottom:66px;display:none;position:absolute;top:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:-ms-flexbox;display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-top) ::slotted(.fab-button-in-list),:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-start) ::slotted(.fab-button-in-list),:host(.fab-list-side-end) ::slotted(.fab-button-in-list){margin-left:5px;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.fab-list-side-start) ::slotted(.fab-button-in-list),:host(.fab-list-side-end) ::slotted(.fab-button-in-list){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted(.fab-button-in-list.fab-button-show){-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.fab-list-side-start){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;right:0;-ms-flex-direction:row-reverse;flex-direction:row-reverse}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.fab-list-side-start){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]):host(.fab-list-side-start),:host-context([dir=rtl]).fab-list-side-start{left:unset;right:unset;left:0}:host(.fab-list-side-end){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;left:0;-ms-flex-direction:row;flex-direction:row}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.fab-list-side-end){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]):host(.fab-list-side-end),:host-context([dir=rtl]).fab-list-side-end{left:unset;right:unset;right:0}";

      var FabList = /*#__PURE__*/function () {
        function FabList(hostRef) {
          _classCallCheck(this, FabList);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * If `true`, the fab list will show all fab buttons in the list.
           */

          this.activated = false;
          /**
           * The side the fab list will show on relative to the main fab button.
           */

          this.side = 'bottom';
        }

        return _createClass(FabList, [{
          key: "activatedChanged",
          value: function activatedChanged(activated) {
            var fabs = Array.from(this.el.querySelectorAll('ion-fab-button')); // if showing the fabs add a timeout, else show immediately

            var timeout = activated ? 30 : 0;
            fabs.forEach(function (fab, i) {
              setTimeout(function () {
                return fab.show = activated;
              }, i * timeout);
            });
          }
        }, {
          key: "render",
          value: function render() {
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": _defineProperty(_defineProperty(_defineProperty({}, mode, true), 'fab-list-active', this.activated), "fab-list-side-".concat(this.side), true)
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
              "activated": ["activatedChanged"]
            };
          }
        }]);
      }();

      FabList.style = fabListCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=12-es5.js.map