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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14], {
    /***/
    "2lz6":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js ***!
      \**************************************************************************/

    /*! exports provided: ion_infinite_scroll, ion_infinite_scroll_content */

    /***/
    function lz6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll", function () {
        return InfiniteScroll;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll_content", function () {
        return InfiniteScrollContent;
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


      var _index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-9e3fe806.js */
      "39oe");

      var infiniteScrollCss = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";

      var InfiniteScroll = /*#__PURE__*/function () {
        function InfiniteScroll(hostRef) {
          var _this = this;

          _classCallCheck(this, InfiniteScroll);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionInfinite = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionInfinite", 7);
          this.thrPx = 0;
          this.thrPc = 0;
          this.didFire = false;
          this.isBusy = false;
          this.isLoading = false;
          /**
           * The threshold distance from the bottom
           * of the content to call the `infinite` output event when scrolled.
           * The threshold value can be either a percent, or
           * in pixels. For example, use the value of `10%` for the `infinite`
           * output event to get called when the user has scrolled 10%
           * from the bottom of the page. Use the value `100px` when the
           * scroll is within 100 pixels from the bottom of the page.
           */

          this.threshold = '15%';
          /**
           * If `true`, the infinite scroll will be hidden and scroll event listeners
           * will be removed.
           *
           * Set this to true to disable the infinite scroll from actively
           * trying to receive new data while scrolling. This is useful
           * when it is known that there is no more data that can be added, and
           * the infinite scroll is no longer needed.
           */

          this.disabled = false;
          /**
           * The position of the infinite scroll element.
           * The value can be either `top` or `bottom`.
           */

          this.position = 'bottom';

          this.onScroll = function () {
            var scrollEl = _this.scrollEl;

            if (!scrollEl || !_this.canStart()) {
              return 1;
            }

            var infiniteHeight = _this.el.offsetHeight;

            if (infiniteHeight === 0) {
              // if there is no height of this element then do nothing
              return 2;
            }

            var scrollTop = scrollEl.scrollTop;
            var scrollHeight = scrollEl.scrollHeight;
            var height = scrollEl.offsetHeight;
            var threshold = _this.thrPc !== 0 ? height * _this.thrPc : _this.thrPx;
            var distanceFromInfinite = _this.position === 'bottom' ? scrollHeight - infiniteHeight - scrollTop - threshold - height : scrollTop - infiniteHeight - threshold;

            if (distanceFromInfinite < 0) {
              if (!_this.didFire) {
                _this.isLoading = true;
                _this.didFire = true;

                _this.ionInfinite.emit();

                return 3;
              }
            } else {
              _this.didFire = false;
            }

            return 4;
          };
        }

        return _createClass(InfiniteScroll, [{
          key: "thresholdChanged",
          value: function thresholdChanged() {
            var val = this.threshold;

            if (val.lastIndexOf('%') > -1) {
              this.thrPx = 0;
              this.thrPc = parseFloat(val) / 100;
            } else {
              this.thrPx = parseFloat(val);
              this.thrPc = 0;
            }
          }
        }, {
          key: "disabledChanged",
          value: function disabledChanged() {
            var disabled = this.disabled;

            if (disabled) {
              this.isLoading = false;
              this.isBusy = false;
            }

            this.enableScrollEvents(!disabled);
          }
        }, {
          key: "connectedCallback",
          value: function () {
            var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var contentEl;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    contentEl = this.el.closest('ion-content');

                    if (contentEl) {
                      _context.n = 1;
                      break;
                    }

                    console.error('<ion-infinite-scroll> must be used inside an <ion-content>');
                    return _context.a(2);

                  case 1:
                    _context.n = 2;
                    return contentEl.getScrollElement();

                  case 2:
                    this.scrollEl = _context.v;
                    this.thresholdChanged();
                    this.disabledChanged();

                    if (this.position === 'top') {
                      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                        if (_this2.scrollEl) {
                          _this2.scrollEl.scrollTop = _this2.scrollEl.scrollHeight - _this2.scrollEl.clientHeight;
                        }
                      });
                    }

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
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            this.enableScrollEvents(false);
            this.scrollEl = undefined;
          }
          /**
           * Call `complete()` within the `ionInfinite` output event handler when
           * your async operation has completed. For example, the `loading`
           * state is while the app is performing an asynchronous operation,
           * such as receiving more data from an AJAX request to add more items
           * to a data list. Once the data has been received and UI updated, you
           * then call this method to signify that the loading has completed.
           * This method will change the infinite scroll's state from `loading`
           * to `enabled`.
           */

        }, {
          key: "complete",
          value: function () {
            var _complete = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this3 = this;

              var scrollEl, prev;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    scrollEl = this.scrollEl;

                    if (!(!this.isLoading || !scrollEl)) {
                      _context2.n = 1;
                      break;
                    }

                    return _context2.a(2);

                  case 1:
                    this.isLoading = false;

                    if (this.position === 'top') {
                      /**
                       * New content is being added at the top, but the scrollTop position stays the same,
                       * which causes a scroll jump visually. This algorithm makes sure to prevent this.
                       * (Frame 1)
                       *    - complete() is called, but the UI hasn't had time to update yet.
                       *    - Save the current content dimensions.
                       *    - Wait for the next frame using _dom.read, so the UI will be updated.
                       * (Frame 2)
                       *    - Read the new content dimensions.
                       *    - Calculate the height difference and the new scroll position.
                       *    - Delay the scroll position change until other possible dom reads are done using _dom.write to be performant.
                       * (Still frame 2, if I'm correct)
                       *    - Change the scroll position (= visually maintain the scroll position).
                       *    - Change the state to re-enable the InfiniteScroll.
                       *    - This should be after changing the scroll position, or it could
                       *    cause the InfiniteScroll to be triggered again immediately.
                       * (Frame 3)
                       *    Done.
                       */
                      this.isBusy = true; // ******** DOM READ ****************
                      // Save the current content dimensions before the UI updates

                      prev = scrollEl.scrollHeight - scrollEl.scrollTop; // ******** DOM READ ****************

                      requestAnimationFrame(function () {
                        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                          // UI has updated, save the new content dimensions
                          var scrollHeight = scrollEl.scrollHeight; // New content was added on top, so the scroll position should be changed immediately to prevent it from jumping around

                          var newScrollTop = scrollHeight - prev; // ******** DOM WRITE ****************

                          requestAnimationFrame(function () {
                            Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                              scrollEl.scrollTop = newScrollTop;
                              _this3.isBusy = false;
                            });
                          });
                        });
                      });
                    }

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));

            function complete() {
              return _complete.apply(this, arguments);
            }

            return complete;
          }()
        }, {
          key: "canStart",
          value: function canStart() {
            return !this.disabled && !this.isBusy && !!this.scrollEl && !this.isLoading;
          }
        }, {
          key: "enableScrollEvents",
          value: function enableScrollEvents(shouldListen) {
            if (this.scrollEl) {
              if (shouldListen) {
                this.scrollEl.addEventListener('scroll', this.onScroll);
              } else {
                this.scrollEl.removeEventListener('scroll', this.onScroll);
              }
            }
          }
        }, {
          key: "render",
          value: function render() {
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var disabled = this.disabled;
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": _defineProperty(_defineProperty(_defineProperty({}, mode, true), 'infinite-scroll-loading', this.isLoading), 'infinite-scroll-enabled', !disabled)
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
              "threshold": ["thresholdChanged"],
              "disabled": ["disabledChanged"]
            };
          }
        }]);
      }();

      InfiniteScroll.style = infiniteScrollCss;
      var infiniteScrollContentIosCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";
      var infiniteScrollContentMdCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";

      var InfiniteScrollContent = /*#__PURE__*/function () {
        function InfiniteScrollContent(hostRef) {
          _classCallCheck(this, InfiniteScrollContent);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        }

        return _createClass(InfiniteScrollContent, [{
          key: "componentDidLoad",
          value: function componentDidLoad() {
            if (this.loadingSpinner === undefined) {
              var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
              this.loadingSpinner = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('infiniteLoadingSpinner', _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
            }
          }
        }, {
          key: "render",
          value: function render() {
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": _defineProperty(_defineProperty({}, mode, true), "infinite-scroll-content-".concat(mode), true)
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "infinite-loading"
            }, this.loadingSpinner && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "infinite-loading-spinner"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", {
              name: this.loadingSpinner
            })), this.loadingText && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "infinite-loading-text",
              innerHTML: Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.loadingText)
            })));
          }
        }]);
      }();

      InfiniteScrollContent.style = {
        ios: infiniteScrollContentIosCss,
        md: infiniteScrollContentMdCss
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=14-es5.js.map