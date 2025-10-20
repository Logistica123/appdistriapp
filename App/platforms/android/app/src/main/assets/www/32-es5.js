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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32], {
    /***/
    "lfGF":
    /*!*****************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js ***!
      \*****************************************************************/

    /*! exports provided: ion_select, ion_select_option, ion_select_popover */

    /***/
    function lfGF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_select", function () {
        return Select;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_select_option", function () {
        return SelectOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_select_popover", function () {
        return SelectPopover;
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


      var _overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./overlays-e9ccff30.js */
      "SOSK");
      /* harmony import */


      var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./theme-ff3fc52f.js */
      "74mu");
      /* harmony import */


      var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hardware-back-button-4a6b37fb.js */
      "B4Jq");

      var watchForOptions = function watchForOptions(containerEl, tagName, onChange) {
        /* tslint:disable-next-line */
        if (typeof MutationObserver === 'undefined') {
          return;
        }

        var mutation = new MutationObserver(function (mutationList) {
          onChange(getSelectedOption(mutationList, tagName));
        });
        mutation.observe(containerEl, {
          childList: true,
          subtree: true
        });
        return mutation;
      };

      var getSelectedOption = function getSelectedOption(mutationList, tagName) {
        var newOption;
        mutationList.forEach(function (mut) {
          // tslint:disable-next-line: prefer-for-of
          for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
          }
        });
        return newOption;
      };

      var findCheckedOption = function findCheckedOption(el, tagName) {
        if (el.nodeType !== 1) {
          return undefined;
        }

        var options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
        return options.find(function (o) {
          return o.value === el.value;
        });
      };

      var selectIosCss = ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}";
      var selectMdCss = ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}";

      var Select = /*#__PURE__*/function () {
        function Select(hostRef) {
          var _this = this;

          _classCallCheck(this, Select);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionChange", 7);
          this.ionCancel = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionCancel", 7);
          this.ionFocus = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionFocus", 7);
          this.ionBlur = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionBlur", 7);
          this.ionStyle = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionStyle", 7);
          this.inputId = "ion-sel-".concat(selectIds++);
          this.didInit = false;
          this.isExpanded = false;
          /**
           * If `true`, the user cannot interact with the select.
           */

          this.disabled = false;
          /**
           * The text to display on the cancel button.
           */

          this.cancelText = 'Cancel';
          /**
           * The text to display on the ok button.
           */

          this.okText = 'OK';
          /**
           * The name of the control, which is submitted with the form data.
           */

          this.name = this.inputId;
          /**
           * If `true`, the select can accept multiple values.
           */

          this.multiple = false;
          /**
           * The interface the select should use: `action-sheet`, `popover` or `alert`.
           */

          this["interface"] = 'alert';
          /**
           * Any additional options that the `alert`, `action-sheet` or `popover` interface
           * can take. See the [ion-alert docs](../alert), the
           * [ion-action-sheet docs](../action-sheet) and the
           * [ion-popover docs](../popover) for the
           * create options for each interface.
           *
           * Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.
           */

          this.interfaceOptions = {};

          this.onClick = function (ev) {
            _this.setFocus();

            _this.open(ev);
          };

          this.onFocus = function () {
            _this.ionFocus.emit();
          };

          this.onBlur = function () {
            _this.ionBlur.emit();
          };
        }

        return _createClass(Select, [{
          key: "disabledChanged",
          value: function disabledChanged() {
            this.emitStyle();
          }
        }, {
          key: "valueChanged",
          value: function valueChanged() {
            this.emitStyle();

            if (this.didInit) {
              this.ionChange.emit({
                value: this.value
              });
            }
          }
        }, {
          key: "connectedCallback",
          value: function () {
            var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this2 = this;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.updateOverlayOptions();
                    this.emitStyle();
                    this.mutationO = watchForOptions(this.el, 'ion-select-option', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee() {
                      return _regenerator().w(function (_context) {
                        while (1) switch (_context.n) {
                          case 0:
                            _this2.updateOverlayOptions();

                          case 1:
                            return _context.a(2);
                        }
                      }, _callee);
                    })));

                  case 1:
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
            if (this.mutationO) {
              this.mutationO.disconnect();
              this.mutationO = undefined;
            }
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            this.didInit = true;
          }
          /**
           * Open the select overlay. The overlay is either an alert, action sheet, or popover,
           * depending on the `interface` property on the `ion-select`.
           *
           * @param event The user interface event that called the open.
           */

        }, {
          key: "open",
          value: function () {
            var _open = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee3(event) {
              var _this3 = this;

              var overlay;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    if (!(this.disabled || this.isExpanded)) {
                      _context3.n = 1;
                      break;
                    }

                    return _context3.a(2, undefined);

                  case 1:
                    _context3.n = 2;
                    return this.createOverlay(event);

                  case 2:
                    overlay = this.overlay = _context3.v;
                    this.isExpanded = true;
                    overlay.onDidDismiss().then(function () {
                      _this3.overlay = undefined;
                      _this3.isExpanded = false;

                      _this3.setFocus();
                    });
                    _context3.n = 3;
                    return overlay.present();

                  case 3:
                    return _context3.a(2, overlay);
                }
              }, _callee3, this);
            }));

            function open(_x) {
              return _open.apply(this, arguments);
            }

            return open;
          }()
        }, {
          key: "createOverlay",
          value: function createOverlay(ev) {
            var selectInterface = this["interface"];

            if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
              console.warn("Select interface cannot be \"".concat(selectInterface, "\" with a multi-value select. Using the \"alert\" interface instead."));
              selectInterface = 'alert';
            }

            if (selectInterface === 'popover' && !ev) {
              console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
              selectInterface = 'alert';
            }

            if (selectInterface === 'popover') {
              return this.openPopover(ev);
            }

            if (selectInterface === 'action-sheet') {
              return this.openActionSheet();
            }

            return this.openAlert();
          }
        }, {
          key: "updateOverlayOptions",
          value: function updateOverlayOptions() {
            var overlay = this.overlay;

            if (!overlay) {
              return;
            }

            var childOpts = this.childOpts;
            var value = this.value;

            switch (this["interface"]) {
              case 'action-sheet':
                overlay.buttons = this.createActionSheetButtons(childOpts, value);
                break;

              case 'popover':
                var popover = overlay.querySelector('ion-select-popover');

                if (popover) {
                  popover.options = this.createPopoverOptions(childOpts, value);
                }

                break;

              case 'alert':
                var inputType = this.multiple ? 'checkbox' : 'radio';
                overlay.inputs = this.createAlertInputs(childOpts, inputType, value);
                break;
            }
          }
        }, {
          key: "createActionSheetButtons",
          value: function createActionSheetButtons(data, selectValue) {
            var _this4 = this;

            var actionSheetButtons = data.map(function (option) {
              var value = getOptionValue(option); // Remove hydrated before copying over classes

              var copyClasses = Array.from(option.classList).filter(function (cls) {
                return cls !== 'hydrated';
              }).join(' ');
              var optClass = "".concat(OPTION_CLASS, " ").concat(copyClasses);
              return {
                role: isOptionSelected(value, selectValue, _this4.compareWith) ? 'selected' : '',
                text: option.textContent,
                cssClass: optClass,
                handler: function handler() {
                  _this4.value = value;
                }
              };
            }); // Add "cancel" button

            actionSheetButtons.push({
              text: this.cancelText,
              role: 'cancel',
              handler: function handler() {
                _this4.ionCancel.emit();
              }
            });
            return actionSheetButtons;
          }
        }, {
          key: "createAlertInputs",
          value: function createAlertInputs(data, inputType, selectValue) {
            var _this5 = this;

            var alertInputs = data.map(function (option) {
              var value = getOptionValue(option); // Remove hydrated before copying over classes

              var copyClasses = Array.from(option.classList).filter(function (cls) {
                return cls !== 'hydrated';
              }).join(' ');
              var optClass = "".concat(OPTION_CLASS, " ").concat(copyClasses);
              return {
                type: inputType,
                cssClass: optClass,
                label: option.textContent || '',
                value: value,
                checked: isOptionSelected(value, selectValue, _this5.compareWith),
                disabled: option.disabled
              };
            });
            return alertInputs;
          }
        }, {
          key: "createPopoverOptions",
          value: function createPopoverOptions(data, selectValue) {
            var _this6 = this;

            var popoverOptions = data.map(function (option) {
              var value = getOptionValue(option); // Remove hydrated before copying over classes

              var copyClasses = Array.from(option.classList).filter(function (cls) {
                return cls !== 'hydrated';
              }).join(' ');
              var optClass = "".concat(OPTION_CLASS, " ").concat(copyClasses);
              return {
                text: option.textContent || '',
                cssClass: optClass,
                value: value,
                checked: isOptionSelected(value, selectValue, _this6.compareWith),
                disabled: option.disabled,
                handler: function handler() {
                  _this6.value = value;

                  _this6.close();
                }
              };
            });
            return popoverOptions;
          }
        }, {
          key: "openPopover",
          value: function () {
            var _openPopover = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee4(ev) {
              var interfaceOptions, mode, value, popoverOpts;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    interfaceOptions = this.interfaceOptions;
                    mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    value = this.value;
                    popoverOpts = Object.assign(Object.assign({
                      mode: mode
                    }, interfaceOptions), {
                      component: 'ion-select-popover',
                      cssClass: ['select-popover', interfaceOptions.cssClass],
                      event: ev,
                      componentProps: {
                        header: interfaceOptions.header,
                        subHeader: interfaceOptions.subHeader,
                        message: interfaceOptions.message,
                        value: value,
                        options: this.createPopoverOptions(this.childOpts, value)
                      }
                    });
                    return _context4.a(2, _overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_3__["c"].create(popoverOpts));
                }
              }, _callee4, this);
            }));

            function openPopover(_x2) {
              return _openPopover.apply(this, arguments);
            }

            return openPopover;
          }()
        }, {
          key: "openActionSheet",
          value: function () {
            var _openActionSheet = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee5() {
              var mode, interfaceOptions, actionSheetOpts;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    interfaceOptions = this.interfaceOptions;
                    actionSheetOpts = Object.assign(Object.assign({
                      mode: mode
                    }, interfaceOptions), {
                      buttons: this.createActionSheetButtons(this.childOpts, this.value),
                      cssClass: ['select-action-sheet', interfaceOptions.cssClass]
                    });
                    return _context5.a(2, _overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_3__["b"].create(actionSheetOpts));
                }
              }, _callee5, this);
            }));

            function openActionSheet() {
              return _openActionSheet.apply(this, arguments);
            }

            return openActionSheet;
          }()
        }, {
          key: "openAlert",
          value: function () {
            var _openAlert = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee6() {
              var _this7 = this;

              var label, labelText, interfaceOptions, inputType, mode, alertOpts;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    label = this.getLabel();
                    labelText = label ? label.textContent : null;
                    interfaceOptions = this.interfaceOptions;
                    inputType = this.multiple ? 'checkbox' : 'radio';
                    mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    alertOpts = Object.assign(Object.assign({
                      mode: mode
                    }, interfaceOptions), {
                      header: interfaceOptions.header ? interfaceOptions.header : labelText,
                      inputs: this.createAlertInputs(this.childOpts, inputType, this.value),
                      buttons: [{
                        text: this.cancelText,
                        role: 'cancel',
                        handler: function handler() {
                          _this7.ionCancel.emit();
                        }
                      }, {
                        text: this.okText,
                        handler: function handler(selectedValues) {
                          _this7.value = selectedValues;
                        }
                      }],
                      cssClass: ['select-alert', interfaceOptions.cssClass, this.multiple ? 'multiple-select-alert' : 'single-select-alert']
                    });
                    return _context6.a(2, _overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_3__["a"].create(alertOpts));
                }
              }, _callee6, this);
            }));

            function openAlert() {
              return _openAlert.apply(this, arguments);
            }

            return openAlert;
          }()
          /**
           * Close the select interface.
           */

        }, {
          key: "close",
          value: function close() {
            // TODO check !this.overlay || !this.isFocus()
            if (!this.overlay) {
              return Promise.resolve(false);
            }

            return this.overlay.dismiss();
          }
        }, {
          key: "getLabel",
          value: function getLabel() {
            return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.el);
          }
        }, {
          key: "hasValue",
          value: function hasValue() {
            return this.getText() !== '';
          }
        }, {
          key: "childOpts",
          get: function get() {
            return Array.from(this.el.querySelectorAll('ion-select-option'));
          }
        }, {
          key: "getText",
          value: function getText() {
            var selectedText = this.selectedText;

            if (selectedText != null && selectedText !== '') {
              return selectedText;
            }

            return generateText(this.childOpts, this.value, this.compareWith);
          }
        }, {
          key: "setFocus",
          value: function setFocus() {
            if (this.focusEl) {
              this.focusEl.focus();
            }
          }
        }, {
          key: "emitStyle",
          value: function emitStyle() {
            this.ionStyle.emit({
              'interactive': true,
              'select': true,
              'has-placeholder': this.placeholder != null,
              'has-value': this.hasValue(),
              'interactive-disabled': this.disabled,
              'select-disabled': this.disabled
            });
          }
        }, {
          key: "render",
          value: function render() {
            var _this8 = this;

            var disabled = this.disabled,
                el = this.el,
                inputId = this.inputId,
                isExpanded = this.isExpanded,
                name = this.name,
                placeholder = this.placeholder,
                value = this.value;
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);

            var _Object = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["d"])(el, inputId),
                labelText = _Object.labelText,
                labelId = _Object.labelId;

            Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["e"])(true, el, name, parseValue(value), disabled);
            var displayValue = this.getText();
            var addPlaceholderClass = false;
            var selectText = displayValue;

            if (selectText === '' && placeholder != null) {
              selectText = placeholder;
              addPlaceholderClass = true;
            }

            var selectTextClasses = {
              'select-text': true,
              'select-placeholder': addPlaceholderClass
            };
            var textPart = addPlaceholderClass ? 'placeholder' : 'text'; // If there is a label then we need to concatenate it with the
            // current value (or placeholder) and a comma so it separates
            // nicely when the screen reader announces it, otherwise just
            // announce the value / placeholder

            var displayLabel = labelText !== undefined ? selectText !== '' ? "".concat(selectText, ", ").concat(labelText) : labelText : selectText;
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick,
              role: "button",
              "aria-haspopup": "listbox",
              "aria-disabled": disabled ? 'true' : null,
              "aria-label": displayLabel,
              "class": _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, mode, true), 'in-item', Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-item', el)), 'select-disabled', disabled), 'select-expanded', isExpanded)
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "aria-hidden": "true",
              "class": selectTextClasses,
              part: textPart
            }, selectText), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "select-icon",
              role: "presentation",
              part: "icon"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "select-icon-inner"
            })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
              id: labelId
            }, displayLabel), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
              type: "button",
              disabled: disabled,
              id: inputId,
              "aria-labelledby": labelId,
              "aria-haspopup": "listbox",
              "aria-expanded": "".concat(isExpanded),
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              ref: function ref(focusEl) {
                return _this8.focusEl = focusEl;
              }
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
              "disabled": ["disabledChanged"],
              "placeholder": ["disabledChanged"],
              "value": ["valueChanged"]
            };
          }
        }]);
      }();

      var isOptionSelected = function isOptionSelected(currentValue, compareValue, compareWith) {
        if (currentValue === undefined) {
          return false;
        }

        if (Array.isArray(currentValue)) {
          return currentValue.some(function (val) {
            return compareOptions(val, compareValue, compareWith);
          });
        } else {
          return compareOptions(currentValue, compareValue, compareWith);
        }
      };

      var getOptionValue = function getOptionValue(el) {
        var value = el.value;
        return value === undefined ? el.textContent || '' : value;
      };

      var parseValue = function parseValue(value) {
        if (value == null) {
          return undefined;
        }

        if (Array.isArray(value)) {
          return value.join(',');
        }

        return value.toString();
      };

      var compareOptions = function compareOptions(currentValue, compareValue, compareWith) {
        if (typeof compareWith === 'function') {
          return compareWith(currentValue, compareValue);
        } else if (typeof compareWith === 'string') {
          return currentValue[compareWith] === compareValue[compareWith];
        } else {
          return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
        }
      };

      var generateText = function generateText(opts, value, compareWith) {
        if (value === undefined) {
          return '';
        }

        if (Array.isArray(value)) {
          return value.map(function (v) {
            return textForValue(opts, v, compareWith);
          }).filter(function (opt) {
            return opt !== null;
          }).join(', ');
        } else {
          return textForValue(opts, value, compareWith) || '';
        }
      };

      var textForValue = function textForValue(opts, value, compareWith) {
        var selectOpt = opts.find(function (opt) {
          return compareOptions(getOptionValue(opt), value, compareWith);
        });
        return selectOpt ? selectOpt.textContent : null;
      };

      var selectIds = 0;
      var OPTION_CLASS = 'select-interface-option';
      Select.style = {
        ios: selectIosCss,
        md: selectMdCss
      };
      var selectOptionCss = ":host{display:none}";

      var SelectOption = /*#__PURE__*/function () {
        function SelectOption(hostRef) {
          _classCallCheck(this, SelectOption);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.inputId = "ion-selopt-".concat(selectOptionIds++);
          /**
           * If `true`, the user cannot interact with the select option. This property does not apply when `interface="action-sheet"` as `ion-action-sheet` does not allow for disabled buttons.
           */

          this.disabled = false;
        }

        return _createClass(SelectOption, [{
          key: "render",
          value: function render() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              role: "option",
              id: this.inputId,
              "class": Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this)
            });
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }]);
      }();

      var selectOptionIds = 0;
      SelectOption.style = selectOptionCss;
      var selectPopoverCss = ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";

      var SelectPopover = /*#__PURE__*/function () {
        function SelectPopover(hostRef) {
          _classCallCheck(this, SelectPopover);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /** Array of options for the popover */

          this.options = [];
        }

        return _createClass(SelectPopover, [{
          key: "onSelect",
          value: function onSelect(ev) {
            var option = this.options.find(function (o) {
              return o.value === ev.target.value;
            });

            if (option) {
              Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_3__["s"])(option.handler);
            }
          }
        }, {
          key: "render",
          value: function render() {
            var checkedOption = this.options.find(function (o) {
              return o.checked;
            });
            var checkedValue = checkedOption ? checkedOption.value : undefined;
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this)
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list", null, this.header !== undefined && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", null, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", {
              "class": "ion-text-wrap"
            }, this.subHeader !== undefined && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, this.subHeader), this.message !== undefined && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, this.message))), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio-group", {
              value: checkedValue
            }, this.options.map(function (option) {
              return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", {
                "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["g"])(option.cssClass)
              }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", null, option.text), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio", {
                value: option.value,
                disabled: option.disabled
              }));
            }))));
          }
        }]);
      }();

      SelectPopover.style = selectPopoverCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=32-es5.js.map