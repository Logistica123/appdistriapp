(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24], {
    /***/
    "h11V":
    /*!****************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js ***!
      \****************************************************************/

    /*! exports provided: ion_radio, ion_radio_group */

    /***/
    function h11V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_radio", function () {
        return Radio;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_radio_group", function () {
        return RadioGroup;
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


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");
      /* harmony import */


      var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./theme-ff3fc52f.js */
      "74mu");

      var radioIosCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color-checked:var(--ion-color-primary, #3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:\"\";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:10px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}";
      var radioMdCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:\"\";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}";

      var Radio = /*#__PURE__*/function () {
        function Radio(hostRef) {
          var _this = this;

          _classCallCheck(this, Radio);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionStyle = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionStyle", 7);
          this.ionFocus = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionFocus", 7);
          this.ionBlur = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionBlur", 7);
          this.inputId = "ion-rb-".concat(radioButtonIds++);
          this.radioGroup = null;
          /**
           * If `true`, the radio is selected.
           */

          this.checked = false;
          /**
           * The tabindex of the radio button.
           * @internal
           */

          this.buttonTabindex = -1;
          /**
           * The name of the control, which is submitted with the form data.
           */

          this.name = this.inputId;
          /**
           * If `true`, the user cannot interact with the radio.
           */

          this.disabled = false;

          this.updateState = function () {
            if (_this.radioGroup) {
              _this.checked = _this.radioGroup.value === _this.value;
            }
          };

          this.onFocus = function () {
            _this.ionFocus.emit();
          };

          this.onBlur = function () {
            _this.ionBlur.emit();
          };
        }
        /** @internal */


        return _createClass(Radio, [{
          key: "setFocus",
          value: function () {
            var _setFocus = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee(ev) {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    ev.stopPropagation();
                    ev.preventDefault();
                    this.el.focus();

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));

            function setFocus(_x) {
              return _setFocus.apply(this, arguments);
            }

            return setFocus;
          }()
          /** @internal */

        }, {
          key: "setButtonTabindex",
          value: function () {
            var _setButtonTabindex = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee2(value) {
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.buttonTabindex = value;

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));

            function setButtonTabindex(_x2) {
              return _setButtonTabindex.apply(this, arguments);
            }

            return setButtonTabindex;
          }()
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            if (this.value === undefined) {
              this.value = this.inputId;
            }

            var radioGroup = this.radioGroup = this.el.closest('ion-radio-group');

            if (radioGroup) {
              this.updateState();
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["a"])(radioGroup, 'ionChange', this.updateState);
            }
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var radioGroup = this.radioGroup;

            if (radioGroup) {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["b"])(radioGroup, 'ionChange', this.updateState);
              this.radioGroup = null;
            }
          }
        }, {
          key: "componentWillLoad",
          value: function componentWillLoad() {
            this.emitStyle();
          }
        }, {
          key: "emitStyle",
          value: function emitStyle() {
            this.ionStyle.emit({
              'radio-checked': this.checked,
              'interactive-disabled': this.disabled
            });
          }
        }, {
          key: "render",
          value: function render() {
            var inputId = this.inputId,
                disabled = this.disabled,
                checked = this.checked,
                color = this.color,
                el = this.el,
                buttonTabindex = this.buttonTabindex;
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);

            var _Object = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["d"])(el, inputId),
                label = _Object.label,
                labelId = _Object.labelId,
                labelText = _Object.labelText;

            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "aria-checked": "".concat(checked),
              "aria-hidden": disabled ? 'true' : null,
              "aria-labelledby": label ? labelId : null,
              role: "radio",
              tabindex: buttonTabindex,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, mode, true), 'in-item', Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-item', el)), 'interactive', true), 'radio-checked', checked), 'radio-disabled', disabled))
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "radio-icon",
              part: "container"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "radio-inner",
              part: "mark"
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "radio-ripple"
            })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
              htmlFor: inputId
            }, labelText), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
              type: "radio",
              checked: checked,
              disabled: disabled,
              tabindex: "-1",
              id: inputId
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
              "color": ["emitStyle"],
              "checked": ["emitStyle"],
              "disabled": ["emitStyle"]
            };
          }
        }]);
      }();

      var radioButtonIds = 0;
      Radio.style = {
        ios: radioIosCss,
        md: radioMdCss
      };

      var RadioGroup = /*#__PURE__*/function () {
        function RadioGroup(hostRef) {
          var _this2 = this;

          _classCallCheck(this, RadioGroup);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionChange", 7);
          this.inputId = "ion-rg-".concat(radioGroupIds++);
          this.labelId = "".concat(this.inputId, "-lbl");
          /**
           * If `true`, the radios can be deselected.
           */

          this.allowEmptySelection = false;
          /**
           * The name of the control, which is submitted with the form data.
           */

          this.name = this.inputId;

          this.setRadioTabindex = function (value) {
            var radios = _this2.getRadios(); // Get the first radio that is not disabled and the checked one


            var first = radios.find(function (radio) {
              return !radio.disabled;
            });
            var checked = radios.find(function (radio) {
              return radio.value === value && !radio.disabled;
            });

            if (!first && !checked) {
              return;
            } // If an enabled checked radio exists, set it to be the focusable radio
            // otherwise we default to focus the first radio


            var focusable = checked || first;

            var _iterator = _createForOfIteratorHelper(radios),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var radio = _step.value;
                var tabindex = radio === focusable ? 0 : -1;
                radio.setButtonTabindex(tabindex);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          };

          this.onClick = function (ev) {
            ev.preventDefault();
            var selectedRadio = ev.target && ev.target.closest('ion-radio');

            if (selectedRadio) {
              var currentValue = _this2.value;
              var newValue = selectedRadio.value;

              if (newValue !== currentValue) {
                _this2.value = newValue;
              } else if (_this2.allowEmptySelection) {
                _this2.value = undefined;
              }
            }
          };
        }

        return _createClass(RadioGroup, [{
          key: "valueChanged",
          value: function valueChanged(value) {
            this.setRadioTabindex(value);
            this.ionChange.emit({
              value: value
            });
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            this.setRadioTabindex(this.value);
          }
        }, {
          key: "connectedCallback",
          value: function () {
            var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee3() {
              var header, label;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    // Get the list header if it exists and set the id
                    // this is used to set aria-labelledby
                    header = this.el.querySelector('ion-list-header') || this.el.querySelector('ion-item-divider');

                    if (header) {
                      label = this.label = header.querySelector('ion-label');

                      if (label) {
                        this.labelId = label.id = this.name + '-lbl';
                      }
                    }

                  case 1:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));

            function connectedCallback() {
              return _connectedCallback.apply(this, arguments);
            }

            return connectedCallback;
          }()
        }, {
          key: "getRadios",
          value: function getRadios() {
            return Array.from(this.el.querySelectorAll('ion-radio'));
          }
        }, {
          key: "onKeydown",
          value: function onKeydown(ev) {
            var inSelectPopover = !!this.el.closest('ion-select-popover');

            if (ev.target && !this.el.contains(ev.target)) {
              return;
            } // Get all radios inside of the radio group and then
            // filter out disabled radios since we need to skip those


            var radios = this.getRadios().filter(function (radio) {
              return !radio.disabled;
            }); // Only move the radio if the current focus is in the radio group

            if (ev.target && radios.includes(ev.target)) {
              var index = radios.findIndex(function (radio) {
                return radio === ev.target;
              });
              var current = radios[index];
              var next; // If hitting arrow down or arrow right, move to the next radio
              // If we're on the last radio, move to the first radio

              if (['ArrowDown', 'ArrowRight'].includes(ev.code)) {
                next = index === radios.length - 1 ? radios[0] : radios[index + 1];
              } // If hitting arrow up or arrow left, move to the previous radio
              // If we're on the first radio, move to the last radio


              if (['ArrowUp', 'ArrowLeft'].includes(ev.code)) {
                next = index === 0 ? radios[radios.length - 1] : radios[index - 1];
              }

              if (next && radios.includes(next)) {
                next.setFocus(ev);

                if (!inSelectPopover) {
                  this.value = next.value;
                }
              } // Update the radio group value when a user presses the
              // space bar on top of a selected radio


              if (['Space'].includes(ev.code)) {
                this.value = this.allowEmptySelection && this.value !== undefined ? undefined : current.value; // Prevent browsers from jumping
                // to the bottom of the screen

                ev.preventDefault();
              }
            }
          }
        }, {
          key: "render",
          value: function render() {
            var label = this.label,
                labelId = this.labelId;
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              role: "radiogroup",
              "aria-labelledby": label ? labelId : null,
              onClick: this.onClick,
              "class": mode
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
              "value": ["valueChanged"]
            };
          }
        }]);
      }();

      var radioGroupIds = 0;
      /***/
    }
  }]);
})();
//# sourceMappingURL=24-es5.js.map