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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22], {
    /***/
    "qCuA":
    /*!****************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-popover.entry.js ***!
      \****************************************************************/

    /*! exports provided: ion_popover */

    /***/
    function qCuA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_popover", function () {
        return Popover;
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


      var _framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./framework-delegate-4392cd63.js */
      "acej");
      /* harmony import */


      var _overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./overlays-e9ccff30.js */
      "SOSK");
      /* harmony import */


      var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./theme-ff3fc52f.js */
      "74mu");
      /* harmony import */


      var _index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./index-931440b1.js */
      "Js3/");
      /* harmony import */


      var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./animation-096c6391.js */
      "meiF");
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");
      /* harmony import */


      var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./hardware-back-button-4a6b37fb.js */
      "B4Jq");
      /**
       * iOS Popover Enter Animation
       */


      var iosEnterAnimation = function iosEnterAnimation(baseEl, ev) {
        var originY = 'top';
        var originX = 'left';
        var contentEl = baseEl.querySelector('.popover-content');
        var contentDimentions = contentEl.getBoundingClientRect();
        var contentWidth = contentDimentions.width;
        var contentHeight = contentDimentions.height;
        var bodyWidth = baseEl.ownerDocument.defaultView.innerWidth;
        var bodyHeight = baseEl.ownerDocument.defaultView.innerHeight; // If ev was passed, use that for target element

        var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
        var targetTop = targetDim != null && 'top' in targetDim ? targetDim.top : bodyHeight / 2 - contentHeight / 2;
        var targetLeft = targetDim != null && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
        var targetWidth = targetDim && targetDim.width || 0;
        var targetHeight = targetDim && targetDim.height || 0;
        var arrowEl = baseEl.querySelector('.popover-arrow');
        var arrowDim = arrowEl.getBoundingClientRect();
        var arrowWidth = arrowDim.width;
        var arrowHeight = arrowDim.height;

        if (targetDim == null) {
          arrowEl.style.display = 'none';
        }

        var arrowCSS = {
          top: targetTop + targetHeight,
          left: targetLeft + targetWidth / 2 - arrowWidth / 2
        };
        var popoverCSS = {
          top: targetTop + targetHeight + (arrowHeight - 1),
          left: targetLeft + targetWidth / 2 - contentWidth / 2
        }; // If the popover left is less than the padding it is off screen
        // to the left so adjust it, else if the width of the popover
        // exceeds the body width it is off screen to the right so adjust
        //

        var checkSafeAreaLeft = false;
        var checkSafeAreaRight = false; // If the popover left is less than the padding it is off screen
        // to the left so adjust it, else if the width of the popover
        // exceeds the body width it is off screen to the right so adjust
        // 25 is a random/arbitrary number. It seems to work fine for ios11
        // and iPhoneX. Is it perfect? No. Does it work? Yes.

        if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
          checkSafeAreaLeft = true;
          popoverCSS.left = POPOVER_IOS_BODY_PADDING;
        } else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 > bodyWidth) {
          // Ok, so we're on the right side of the screen,
          // but now we need to make sure we're still a bit further right
          // cus....notchurally... Again, 25 is random. It works tho
          checkSafeAreaRight = true;
          popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
          originX = 'right';
        } // make it pop up if there's room above


        if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
          arrowCSS.top = targetTop - (arrowHeight + 1);
          popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
          baseEl.className = baseEl.className + ' popover-bottom';
          originY = 'bottom'; // If there isn't room for it to pop up above the target cut it off
        } else if (targetTop + targetHeight + contentHeight > bodyHeight) {
          contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
        }

        arrowEl.style.top = arrowCSS.top + 'px';
        arrowEl.style.left = arrowCSS.left + 'px';
        contentEl.style.top = popoverCSS.top + 'px';
        contentEl.style.left = popoverCSS.left + 'px';

        if (checkSafeAreaLeft) {
          contentEl.style.left = "calc(".concat(popoverCSS.left, "px + var(--ion-safe-area-left, 0px))");
        }

        if (checkSafeAreaRight) {
          contentEl.style.left = "calc(".concat(popoverCSS.left, "px - var(--ion-safe-area-right, 0px))");
        }

        contentEl.style.transformOrigin = originY + ' ' + originX;
        var baseAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var wrapperAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
          'pointer-events': 'none'
        }).afterClearStyles(['pointer-events']);
        wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper')).fromTo('opacity', 0.01, 1);
        return baseAnimation.addElement(baseEl).easing('ease').duration(100).addAnimation([backdropAnimation, wrapperAnimation]);
      };

      var POPOVER_IOS_BODY_PADDING = 5;
      /**
       * iOS Popover Leave Animation
       */

      var iosLeaveAnimation = function iosLeaveAnimation(baseEl) {
        var baseAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var wrapperAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
        wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper')).fromTo('opacity', 0.99, 0);
        return baseAnimation.addElement(baseEl).easing('ease').duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
      };
      /**
       * Md Popover Enter Animation
       */


      var mdEnterAnimation = function mdEnterAnimation(baseEl, ev) {
        var POPOVER_MD_BODY_PADDING = 12;
        var doc = baseEl.ownerDocument;
        var isRTL = doc.dir === 'rtl';
        var originY = 'top';
        var originX = isRTL ? 'right' : 'left';
        var contentEl = baseEl.querySelector('.popover-content');
        var contentDimentions = contentEl.getBoundingClientRect();
        var contentWidth = contentDimentions.width;
        var contentHeight = contentDimentions.height;
        var bodyWidth = doc.defaultView.innerWidth;
        var bodyHeight = doc.defaultView.innerHeight; // If ev was passed, use that for target element

        var targetDim = ev && ev.target && ev.target.getBoundingClientRect(); // As per MD spec, by default position the popover below the target (trigger) element

        var targetTop = targetDim != null && 'bottom' in targetDim ? targetDim.bottom : bodyHeight / 2 - contentHeight / 2;
        var targetLeft = targetDim != null && 'left' in targetDim ? isRTL ? targetDim.left - contentWidth + targetDim.width : targetDim.left : bodyWidth / 2 - contentWidth / 2;
        var targetHeight = targetDim && targetDim.height || 0;
        var popoverCSS = {
          top: targetTop,
          left: targetLeft
        }; // If the popover left is less than the padding it is off screen
        // to the left so adjust it, else if the width of the popover
        // exceeds the body width it is off screen to the right so adjust

        if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
          popoverCSS.left = POPOVER_MD_BODY_PADDING; // Same origin in this case for both LTR & RTL
          // Note: in LTR, originX is already 'left'

          originX = 'left';
        } else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left > bodyWidth) {
          popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING; // Same origin in this case for both LTR & RTL
          // Note: in RTL, originX is already 'right'

          originX = 'right';
        } // If the popover when popped down stretches past bottom of screen,
        // make it pop up if there's room above


        if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
          popoverCSS.top = targetTop - contentHeight - targetHeight;
          baseEl.className = baseEl.className + ' popover-bottom';
          originY = 'bottom'; // If there isn't room for it to pop up above the target cut it off
        } else if (targetTop + targetHeight + contentHeight > bodyHeight) {
          contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
        }

        var baseAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var wrapperAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var contentAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var viewportAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
          'pointer-events': 'none'
        }).afterClearStyles(['pointer-events']);
        wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper')).fromTo('opacity', 0.01, 1);
        contentAnimation.addElement(contentEl).beforeStyles({
          'top': "".concat(popoverCSS.top, "px"),
          'left': "".concat(popoverCSS.left, "px"),
          'transform-origin': "".concat(originY, " ").concat(originX)
        }).fromTo('transform', 'scale(0.001)', 'scale(1)');
        viewportAnimation.addElement(baseEl.querySelector('.popover-viewport')).fromTo('opacity', 0.01, 1);
        return baseAnimation.addElement(baseEl).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(300).addAnimation([backdropAnimation, wrapperAnimation, contentAnimation, viewportAnimation]);
      };
      /**
       * Md Popover Leave Animation
       */


      var mdLeaveAnimation = function mdLeaveAnimation(baseEl) {
        var baseAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var wrapperAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
        wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper')).fromTo('opacity', 0.99, 0);
        return baseAnimation.addElement(baseEl).easing('ease').duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
      };

      var popoverIosCss = ".sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}";
      var popoverMdCss = ".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}";

      var Popover = /*#__PURE__*/function () {
        function Popover(hostRef) {
          var _this = this;

          _classCallCheck(this, Popover);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.didPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionPopoverDidPresent", 7);
          this.willPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionPopoverWillPresent", 7);
          this.willDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionPopoverWillDismiss", 7);
          this.didDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionPopoverDidDismiss", 7);
          this.presented = false;
          /**
           * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
           */

          this.keyboardClose = true;
          /**
           * If `true`, the popover will be dismissed when the backdrop is clicked.
           */

          this.backdropDismiss = true;
          /**
           * If `true`, a backdrop will be displayed behind the popover.
           */

          this.showBackdrop = true;
          /**
           * If `true`, the popover will be translucent.
           * Only applies when the mode is `"ios"` and the device supports
           * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
           */

          this.translucent = false;
          /**
           * If `true`, the popover will animate.
           */

          this.animated = true;

          this.onDismiss = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();

            _this.dismiss();
          };

          this.onBackdropTap = function () {
            _this.dismiss(undefined, _overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_3__["B"]);
          };

          this.onLifecycle = function (modalEvent) {
            var el = _this.usersElement;
            var name = LIFECYCLE_MAP[modalEvent.type];

            if (el && name) {
              var event = new CustomEvent(name, {
                bubbles: false,
                cancelable: false,
                detail: modalEvent.detail
              });
              el.dispatchEvent(event);
            }
          };
        }

        return _createClass(Popover, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.el);
          }
          /**
           * Present the popover overlay after it has been created.
           */

        }, {
          key: "present",
          value: function () {
            var _present = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee() {
              var container, data;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (!this.presented) {
                      _context.n = 1;
                      break;
                    }

                    return _context.a(2);

                  case 1:
                    container = this.el.querySelector('.popover-content');

                    if (container) {
                      _context.n = 2;
                      break;
                    }

                    throw new Error('container is undefined');

                  case 2:
                    data = Object.assign(Object.assign({}, this.componentProps), {
                      popover: this.el
                    });
                    _context.n = 3;
                    return Object(_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, container, this.component, ['popover-viewport', this.el['s-sc']], data);

                  case 3:
                    this.usersElement = _context.v;
                    _context.n = 4;
                    return Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this.usersElement);

                  case 4:
                    return _context.a(2, Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, this.event));
                }
              }, _callee, this);
            }));

            function present() {
              return _present.apply(this, arguments);
            }

            return present;
          }()
          /**
           * Dismiss the popover overlay after it has been presented.
           *
           * @param data Any data to emit in the dismiss events.
           * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
           */

        }, {
          key: "dismiss",
          value: function () {
            var _dismiss = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee2(data, role) {
              var shouldDismiss;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, this.event);

                  case 1:
                    shouldDismiss = _context2.v;

                    if (!shouldDismiss) {
                      _context2.n = 2;
                      break;
                    }

                    _context2.n = 2;
                    return Object(_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.delegate, this.usersElement);

                  case 2:
                    return _context2.a(2, shouldDismiss);
                }
              }, _callee2, this);
            }));

            function dismiss(_x, _x2) {
              return _dismiss.apply(this, arguments);
            }

            return dismiss;
          }()
          /**
           * Returns a promise that resolves when the popover did dismiss.
           */

        }, {
          key: "onDidDismiss",
          value: function onDidDismiss() {
            return Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.el, 'ionPopoverDidDismiss');
          }
          /**
           * Returns a promise that resolves when the popover will dismiss.
           */

        }, {
          key: "onWillDismiss",
          value: function onWillDismiss() {
            return Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.el, 'ionPopoverWillDismiss');
          }
        }, {
          key: "render",
          value: function render() {
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var onLifecycle = this.onLifecycle,
                htmlAttributes = this.htmlAttributes;
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], Object.assign({
              "aria-modal": "true",
              "no-router": true,
              tabindex: "-1"
            }, htmlAttributes, {
              style: {
                zIndex: "".concat(20000 + this.overlayIndex)
              },
              "class": Object.assign(Object.assign({}, Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.cssClass)), _defineProperty(_defineProperty({}, mode, true), 'popover-translucent', this.translucent)),
              onIonPopoverDidPresent: onLifecycle,
              onIonPopoverWillPresent: onLifecycle,
              onIonPopoverWillDismiss: onLifecycle,
              onIonPopoverDidDismiss: onLifecycle,
              onIonDismiss: this.onDismiss,
              onIonBackdropTap: this.onBackdropTap
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
              tappable: this.backdropDismiss,
              visible: this.showBackdrop
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              tabindex: "0"
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "popover-wrapper ion-overlay-wrapper"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "popover-arrow"
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "popover-content"
            })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              tabindex: "0"
            }));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }]);
      }();

      var LIFECYCLE_MAP = {
        'ionPopoverDidPresent': 'ionViewDidEnter',
        'ionPopoverWillPresent': 'ionViewWillEnter',
        'ionPopoverWillDismiss': 'ionViewWillLeave',
        'ionPopoverDidDismiss': 'ionViewDidLeave'
      };
      Popover.style = {
        ios: popoverIosCss,
        md: popoverMdCss
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=22-es5.js.map