(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }

  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16], {
    /***/
    "MGMP":
    /*!**********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js ***!
      \**********************************************************************/

    /*! exports provided: ion_item_option, ion_item_options, ion_item_sliding */

    /***/
    function MGMP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_item_option", function () {
        return ItemOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_item_options", function () {
        return ItemOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_item_sliding", function () {
        return ItemSliding;
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
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");

      var itemOptionIosCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:16px}:host(.ion-activated){background:var(--ion-color-primary-shade, #3171e0)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}";
      var itemOptionMdCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}";

      var ItemOption = /*#__PURE__*/function () {
        function ItemOption(hostRef) {
          _classCallCheck(this, ItemOption);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * If `true`, the user cannot interact with the item option.
           */

          this.disabled = false;
          /**
           * If `true`, the option will expand to take up the available width and cover any other options.
           */

          this.expandable = false;
          /**
           * The type of the button.
           */

          this.type = 'button';

          this.onClick = function (ev) {
            var el = ev.target.closest('ion-item-option');

            if (el) {
              ev.preventDefault();
            }
          };
        }

        return _createClass(ItemOption, [{
          key: "render",
          value: function render() {
            var disabled = this.disabled,
                expandable = this.expandable,
                href = this.href;
            var TagType = href === undefined ? 'button' : 'a';
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var attrs = TagType === 'button' ? {
              type: this.type
            } : {
              download: this.download,
              href: this.href,
              target: this.target
            };
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick,
              "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, mode, true), 'item-option-disabled', disabled), 'item-option-expandable', expandable), 'ion-activatable', true))
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, {
              "class": "button-native",
              part: "native",
              disabled: disabled
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "button-inner"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "top"
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "horizontal-wrapper"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "start"
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "icon-only"
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "end"
            })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "bottom"
            })), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }]);
      }();

      ItemOption.style = {
        ios: itemOptionIosCss,
        md: itemOptionMdCss
      };
      var itemOptionsIosCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}";
      var itemOptionsMdCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}";

      var ItemOptions = /*#__PURE__*/function () {
        function ItemOptions(hostRef) {
          _classCallCheck(this, ItemOptions);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionSwipe = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSwipe", 7);
          /**
           * The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.
           *
           */

          this.side = 'end';
        }
        /** @internal */


        return _createClass(ItemOptions, [{
          key: "fireSwipeEvent",
          value: function () {
            var _fireSwipeEvent = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.ionSwipe.emit({
                      side: this.side
                    });

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));

            function fireSwipeEvent() {
              return _fireSwipeEvent.apply(this, arguments);
            }

            return fireSwipeEvent;
          }()
        }, {
          key: "render",
          value: function render() {
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var isEnd = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["m"])(this.side);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, mode, true), "item-options-".concat(mode), true), 'item-options-start', !isEnd), 'item-options-end', isEnd)
            });
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }]);
      }();

      ItemOptions.style = {
        ios: itemOptionsIosCss,
        md: itemOptionsMdCss
      };
      var itemSlidingCss = "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}";
      var SWIPE_MARGIN = 30;
      var ELASTIC_FACTOR = 0.55;
      var openSlidingItem;

      var ItemSliding = /*#__PURE__*/function () {
        function ItemSliding(hostRef) {
          _classCallCheck(this, ItemSliding);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionDrag = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionDrag", 7);
          this.item = null;
          this.openAmount = 0;
          this.initialOpenAmount = 0;
          this.optsWidthRightSide = 0;
          this.optsWidthLeftSide = 0;
          this.sides = 0
          /* None */
          ;
          this.optsDirty = true;
          this.closestContent = null;
          this.initialContentScrollY = true;
          this.state = 2
          /* Disabled */
          ;
          /**
           * If `true`, the user cannot interact with the sliding item.
           */

          this.disabled = false;
        }

        return _createClass(ItemSliding, [{
          key: "disabledChanged",
          value: function disabledChanged() {
            if (this.gesture) {
              this.gesture.enable(!this.disabled);
            }
          }
        }, {
          key: "connectedCallback",
          value: function () {
            var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this = this;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.item = this.el.querySelector('ion-item');
                    this.closestContent = this.el.closest('ion-content');
                    _context2.n = 1;
                    return this.updateOptions();

                  case 1:
                    _context2.n = 2;
                    return Promise.resolve().then(__webpack_require__.bind(null,
                    /*! ./index-34cb2743.js */
                    "KF81"));

                  case 2:
                    this.gesture = _context2.v.createGesture({
                      el: this.el,
                      gestureName: 'item-swipe',
                      gesturePriority: 100,
                      threshold: 5,
                      canStart: function canStart(ev) {
                        return _this.canStart(ev);
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
                    this.disabledChanged();

                  case 3:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));

            function connectedCallback() {
              return _connectedCallback.apply(this, arguments);
            }

            return connectedCallback;
          }()
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            if (this.gesture) {
              this.gesture.destroy();
              this.gesture = undefined;
            }

            this.item = null;
            this.leftOptions = this.rightOptions = undefined;

            if (openSlidingItem === this.el) {
              openSlidingItem = undefined;
            }
          }
          /**
           * Get the amount the item is open in pixels.
           */

        }, {
          key: "getOpenAmount",
          value: function getOpenAmount() {
            return Promise.resolve(this.openAmount);
          }
          /**
           * Get the ratio of the open amount of the item compared to the width of the options.
           * If the number returned is positive, then the options on the right side are open.
           * If the number returned is negative, then the options on the left side are open.
           * If the absolute value of the number is greater than 1, the item is open more than
           * the width of the options.
           */

        }, {
          key: "getSlidingRatio",
          value: function getSlidingRatio() {
            return Promise.resolve(this.getSlidingRatioSync());
          }
          /**
           * Open the sliding item.
           *
           * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
           */

        }, {
          key: "open",
          value: function () {
            var _open = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee3(side) {
              var _this2 = this;

              var optionsToOpen, isStartOpen, isEndOpen;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    if (!(this.item === null)) {
                      _context3.n = 1;
                      break;
                    }

                    return _context3.a(2);

                  case 1:
                    optionsToOpen = this.getOptions(side);

                    if (optionsToOpen) {
                      _context3.n = 2;
                      break;
                    }

                    return _context3.a(2);

                  case 2:
                    /**
                     * If side is not set, we need to infer the side
                     * so we know which direction to move the options
                     */
                    if (side === undefined) {
                      side = optionsToOpen === this.leftOptions ? 'start' : 'end';
                    } // In RTL we want to switch the sides


                    side = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["m"])(side) ? 'end' : 'start';
                    isStartOpen = this.openAmount < 0;
                    isEndOpen = this.openAmount > 0;
                    /**
                     * If a side is open and a user tries to
                     * re-open the same side, we should not do anything
                     */

                    if (!(isStartOpen && optionsToOpen === this.leftOptions)) {
                      _context3.n = 3;
                      break;
                    }

                    return _context3.a(2);

                  case 3:
                    if (!(isEndOpen && optionsToOpen === this.rightOptions)) {
                      _context3.n = 4;
                      break;
                    }

                    return _context3.a(2);

                  case 4:
                    this.closeOpened();
                    this.state = 4
                    /* Enabled */
                    ;
                    requestAnimationFrame(function () {
                      _this2.calculateOptsWidth();

                      var width = side === 'end' ? _this2.optsWidthRightSide : -_this2.optsWidthLeftSide;
                      openSlidingItem = _this2.el;

                      _this2.setOpenAmount(width, false);

                      _this2.state = side === 'end' ? 8
                      /* End */
                      : 16
                      /* Start */
                      ;
                    });

                  case 5:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));

            function open(_x) {
              return _open.apply(this, arguments);
            }

            return open;
          }()
          /**
           * Close the sliding item. Items can also be closed from the [List](../list).
           */

        }, {
          key: "close",
          value: function () {
            var _close = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee4() {
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.setOpenAmount(0, true);

                  case 1:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));

            function close() {
              return _close.apply(this, arguments);
            }

            return close;
          }()
          /**
           * Close all of the sliding items in the list. Items can also be closed from the [List](../list).
           */

        }, {
          key: "closeOpened",
          value: function () {
            var _closeOpened = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee5() {
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    if (!(openSlidingItem !== undefined)) {
                      _context5.n = 1;
                      break;
                    }

                    openSlidingItem.close();
                    openSlidingItem = undefined;
                    return _context5.a(2, true);

                  case 1:
                    return _context5.a(2, false);
                }
              }, _callee5);
            }));

            function closeOpened() {
              return _closeOpened.apply(this, arguments);
            }

            return closeOpened;
          }()
          /**
           * Given an optional side, return the ion-item-options element.
           *
           * @param side This side of the options to get. If a side is not provided it will
           * return the first one available.
           */

        }, {
          key: "getOptions",
          value: function getOptions(side) {
            if (side === undefined) {
              return this.leftOptions || this.rightOptions;
            } else if (side === 'start') {
              return this.leftOptions;
            } else {
              return this.rightOptions;
            }
          }
        }, {
          key: "updateOptions",
          value: function () {
            var _updateOptions = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee6() {
              var options, sides, i, item, option, side, _t;

              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    options = this.el.querySelectorAll('ion-item-options');
                    sides = 0; // Reset left and right options in case they were removed

                    this.leftOptions = this.rightOptions = undefined;
                    i = 0;

                  case 1:
                    if (!(i < options.length)) {
                      _context6.n = 6;
                      break;
                    }

                    item = options.item(i);
                    /**
                     * We cannot use the componentOnReady helper
                     * util here since we need to wait for all of these items
                     * to be ready before we set `this.sides` and `this.optsDirty`.
                     */

                    if (!(item.componentOnReady !== undefined)) {
                      _context6.n = 3;
                      break;
                    }

                    _context6.n = 2;
                    return item.componentOnReady();

                  case 2:
                    _t = _context6.v;
                    _context6.n = 4;
                    break;

                  case 3:
                    _t = item;

                  case 4:
                    option = _t;
                    side = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__["m"])(option.side) ? 'end' : 'start';

                    if (side === 'start') {
                      this.leftOptions = option;
                      sides |= 1
                      /* Start */
                      ;
                    } else {
                      this.rightOptions = option;
                      sides |= 2
                      /* End */
                      ;
                    }

                  case 5:
                    i++;
                    _context6.n = 1;
                    break;

                  case 6:
                    this.optsDirty = true;
                    this.sides = sides;

                  case 7:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));

            function updateOptions() {
              return _updateOptions.apply(this, arguments);
            }

            return updateOptions;
          }()
        }, {
          key: "canStart",
          value: function canStart(gesture) {
            /**
             * If very close to start of the screen
             * do not open left side so swipe to go
             * back will still work.
             */
            var rtl = document.dir === 'rtl';
            var atEdge = rtl ? window.innerWidth - gesture.startX < 15 : gesture.startX < 15;

            if (atEdge) {
              return false;
            }

            var selected = openSlidingItem;

            if (selected && selected !== this.el) {
              this.closeOpened();
            }

            return !!(this.rightOptions || this.leftOptions);
          }
        }, {
          key: "disableContentScrollY",
          value: function disableContentScrollY() {
            if (this.closestContent === null) {
              return;
            }

            this.initialContentScrollY = this.closestContent.scrollY;
            this.closestContent.scrollY = false;
          }
        }, {
          key: "restoreContentScrollY",
          value: function restoreContentScrollY() {
            if (this.closestContent === null) {
              return;
            }

            this.closestContent.scrollY = this.initialContentScrollY;
          }
        }, {
          key: "onStart",
          value: function onStart() {
            /**
             * We need to query for the ion-item
             * every time the gesture starts. Developers
             * may toggle ion-item elements via *ngIf.
             */
            this.item = this.el.querySelector('ion-item'); // Prevent scrolling during gesture

            this.disableContentScrollY();
            openSlidingItem = this.el;

            if (this.tmr !== undefined) {
              clearTimeout(this.tmr);
              this.tmr = undefined;
            }

            if (this.openAmount === 0) {
              this.optsDirty = true;
              this.state = 4
              /* Enabled */
              ;
            }

            this.initialOpenAmount = this.openAmount;

            if (this.item) {
              this.item.style.transition = 'none';
            }
          }
        }, {
          key: "onMove",
          value: function onMove(gesture) {
            if (this.optsDirty) {
              this.calculateOptsWidth();
            }

            var openAmount = this.initialOpenAmount - gesture.deltaX;

            switch (this.sides) {
              case 2
              /* End */
              :
                openAmount = Math.max(0, openAmount);
                break;

              case 1
              /* Start */
              :
                openAmount = Math.min(0, openAmount);
                break;

              case 3
              /* Both */
              :
                break;

              case 0
              /* None */
              :
                return;

              default:
                console.warn('invalid ItemSideFlags value', this.sides);
                break;
            }

            var optsWidth;

            if (openAmount > this.optsWidthRightSide) {
              optsWidth = this.optsWidthRightSide;
              openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
            } else if (openAmount < -this.optsWidthLeftSide) {
              optsWidth = -this.optsWidthLeftSide;
              openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
            }

            this.setOpenAmount(openAmount, false);
          }
        }, {
          key: "onEnd",
          value: function onEnd(gesture) {
            // Restore ion-content scrollY to initial value when gesture ends
            this.restoreContentScrollY();
            var velocity = gesture.velocityX;
            var restingPoint = this.openAmount > 0 ? this.optsWidthRightSide : -this.optsWidthLeftSide; // Check if the drag didn't clear the buttons mid-point
            // and we aren't moving fast enough to swipe open

            var isResetDirection = this.openAmount > 0 === !(velocity < 0);
            var isMovingFast = Math.abs(velocity) > 0.3;
            var isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);

            if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
              restingPoint = 0;
            }

            var state = this.state;
            this.setOpenAmount(restingPoint, true);

            if ((state & 32
            /* SwipeEnd */
            ) !== 0 && this.rightOptions) {
              this.rightOptions.fireSwipeEvent();
            } else if ((state & 64
            /* SwipeStart */
            ) !== 0 && this.leftOptions) {
              this.leftOptions.fireSwipeEvent();
            }
          }
        }, {
          key: "calculateOptsWidth",
          value: function calculateOptsWidth() {
            this.optsWidthRightSide = 0;

            if (this.rightOptions) {
              this.rightOptions.style.display = 'flex';
              this.optsWidthRightSide = this.rightOptions.offsetWidth;
              this.rightOptions.style.display = '';
            }

            this.optsWidthLeftSide = 0;

            if (this.leftOptions) {
              this.leftOptions.style.display = 'flex';
              this.optsWidthLeftSide = this.leftOptions.offsetWidth;
              this.leftOptions.style.display = '';
            }

            this.optsDirty = false;
          }
        }, {
          key: "setOpenAmount",
          value: function setOpenAmount(openAmount, isFinal) {
            var _this3 = this;

            if (this.tmr !== undefined) {
              clearTimeout(this.tmr);
              this.tmr = undefined;
            }

            if (!this.item) {
              return;
            }

            var style = this.item.style;
            this.openAmount = openAmount;

            if (isFinal) {
              style.transition = '';
            }

            if (openAmount > 0) {
              this.state = openAmount >= this.optsWidthRightSide + SWIPE_MARGIN ? 8
              /* End */
              | 32
              /* SwipeEnd */
              : 8
              /* End */
              ;
            } else if (openAmount < 0) {
              this.state = openAmount <= -this.optsWidthLeftSide - SWIPE_MARGIN ? 16
              /* Start */
              | 64
              /* SwipeStart */
              : 16
              /* Start */
              ;
            } else {
              this.tmr = setTimeout(function () {
                _this3.state = 2
                /* Disabled */
                ;
                _this3.tmr = undefined;
              }, 600);
              openSlidingItem = undefined;
              style.transform = '';
              return;
            }

            style.transform = "translate3d(".concat(-openAmount, "px,0,0)");
            this.ionDrag.emit({
              amount: openAmount,
              ratio: this.getSlidingRatioSync()
            });
          }
        }, {
          key: "getSlidingRatioSync",
          value: function getSlidingRatioSync() {
            if (this.openAmount > 0) {
              return this.openAmount / this.optsWidthRightSide;
            } else if (this.openAmount < 0) {
              return this.openAmount / this.optsWidthLeftSide;
            } else {
              return 0;
            }
          }
        }, {
          key: "render",
          value: function render() {
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, mode, true), 'item-sliding-active-slide', this.state !== 2
              /* Disabled */
              ), 'item-sliding-active-options-end', (this.state & 8
              /* End */
              ) !== 0), 'item-sliding-active-options-start', (this.state & 16
              /* Start */
              ) !== 0), 'item-sliding-active-swipe-end', (this.state & 32
              /* SwipeEnd */
              ) !== 0), 'item-sliding-active-swipe-start', (this.state & 64
              /* SwipeStart */
              ) !== 0)
            });
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
              "disabled": ["disabledChanged"]
            };
          }
        }]);
      }();

      var swipeShouldReset = function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
        // The logic required to know when the sliding item should close (openAmount=0)
        // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
        // and it ended up being too complicated to be written manually without errors
        // so the truth table is attached below: (0=false, 1=true)
        // isResetDirection | isMovingFast | isOnResetZone || shouldClose
        //         0        |       0      |       0       ||    0
        //         0        |       0      |       1       ||    1
        //         0        |       1      |       0       ||    0
        //         0        |       1      |       1       ||    0
        //         1        |       0      |       0       ||    0
        //         1        |       0      |       1       ||    1
        //         1        |       1      |       0       ||    1
        //         1        |       1      |       1       ||    1
        // The resulting expression was generated by resolving the K-map (Karnaugh map):
        return !isMovingFast && isOnResetZone || isResetDirection && isMovingFast;
      };

      ItemSliding.style = itemSlidingCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=16-es5.js.map