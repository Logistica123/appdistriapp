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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27], {
    /***/
    "smMY":
    /*!******************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js ***!
      \******************************************************************/

    /*! exports provided: ion_reorder, ion_reorder_group */

    /***/
    function smMY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_reorder", function () {
        return Reorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_reorder_group", function () {
        return ReorderGroup;
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


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");

      var reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";
      var reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";

      var Reorder = /*#__PURE__*/function () {
        function Reorder(hostRef) {
          _classCallCheck(this, Reorder);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        }

        return _createClass(Reorder, [{
          key: "onClick",
          value: function onClick(ev) {
            var reorderGroup = this.el.closest('ion-reorder-group');
            ev.preventDefault(); // Only stop event propagation if the reorder is inside of an enabled
            // reorder group. This allows interaction with clickable children components.

            if (!reorderGroup || !reorderGroup.disabled) {
              ev.stopImmediatePropagation();
            }
          }
        }, {
          key: "render",
          value: function render() {
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var reorderIcon = mode === 'ios' ? 'reorder-three-outline' : 'reorder-two-sharp';
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": mode
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
              name: reorderIcon,
              lazy: false,
              "class": "reorder-icon",
              part: "icon"
            })));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }]);
      }();

      Reorder.style = {
        ios: reorderIosCss,
        md: reorderMdCss
      };
      var reorderGroupCss = ".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";

      var ReorderGroup = /*#__PURE__*/function () {
        function ReorderGroup(hostRef) {
          _classCallCheck(this, ReorderGroup);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionItemReorder = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionItemReorder", 7);
          this.lastToIndex = -1;
          this.cachedHeights = [];
          this.scrollElTop = 0;
          this.scrollElBottom = 0;
          this.scrollElInitial = 0;
          this.containerTop = 0;
          this.containerBottom = 0;
          this.state = 0
          /* Idle */
          ;
          /**
           * If `true`, the reorder will be hidden.
           */

          this.disabled = true;
        }

        return _createClass(ReorderGroup, [{
          key: "disabledChanged",
          value: function disabledChanged() {
            if (this.gesture) {
              this.gesture.enable(!this.disabled);
            }
          }
        }, {
          key: "connectedCallback",
          value: function () {
            var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee() {
              var _this = this;

              var contentEl;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    contentEl = this.el.closest('ion-content');

                    if (!contentEl) {
                      _context.n = 2;
                      break;
                    }

                    _context.n = 1;
                    return contentEl.getScrollElement();

                  case 1:
                    this.scrollEl = _context.v;

                  case 2:
                    _context.n = 3;
                    return Promise.resolve().then(__webpack_require__.bind(null,
                    /*! ./index-34cb2743.js */
                    "KF81"));

                  case 3:
                    this.gesture = _context.v.createGesture({
                      el: this.el,
                      gestureName: 'reorder',
                      gesturePriority: 110,
                      threshold: 0,
                      direction: 'y',
                      passive: false,
                      canStart: function canStart(detail) {
                        return _this.canStart(detail);
                      },
                      onStart: function onStart(ev) {
                        return _this.onStart(ev);
                      },
                      onMove: function onMove(ev) {
                        return _this.onMove(ev);
                      },
                      onEnd: function onEnd() {
                        return _this.onEnd();
                      }
                    });
                    this.disabledChanged();

                  case 4:
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
            this.onEnd();

            if (this.gesture) {
              this.gesture.destroy();
              this.gesture = undefined;
            }
          }
          /**
           * Completes the reorder operation. Must be called by the `ionItemReorder` event.
           *
           * If a list of items is passed, the list will be reordered and returned in the
           * proper order.
           *
           * If no parameters are passed or if `true` is passed in, the reorder will complete
           * and the item will remain in the position it was dragged to. If `false` is passed,
           * the reorder will complete and the item will bounce back to its original position.
           *
           * @param listOrReorder A list of items to be sorted and returned in the new order or a
           * boolean of whether or not the reorder should reposition the item.
           */

        }, {
          key: "complete",
          value: function complete(listOrReorder) {
            return Promise.resolve(this.completeSync(listOrReorder));
          }
        }, {
          key: "canStart",
          value: function canStart(ev) {
            if (this.selectedItemEl || this.state !== 0
            /* Idle */
            ) {
              return false;
            }

            var target = ev.event.target;
            var reorderEl = target.closest('ion-reorder');

            if (!reorderEl) {
              return false;
            }

            var item = findReorderItem(reorderEl, this.el);

            if (!item) {
              return false;
            }

            ev.data = item;
            return true;
          }
        }, {
          key: "onStart",
          value: function onStart(ev) {
            ev.event.preventDefault();
            var item = this.selectedItemEl = ev.data;
            var heights = this.cachedHeights;
            heights.length = 0;
            var el = this.el;
            var children = el.children;

            if (!children || children.length === 0) {
              return;
            }

            var sum = 0;

            for (var i = 0; i < children.length; i++) {
              var child = children[i];
              sum += child.offsetHeight;
              heights.push(sum);
              child.$ionIndex = i;
            }

            var box = el.getBoundingClientRect();
            this.containerTop = box.top;
            this.containerBottom = box.bottom;

            if (this.scrollEl) {
              var scrollBox = this.scrollEl.getBoundingClientRect();
              this.scrollElInitial = this.scrollEl.scrollTop;
              this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
              this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
            } else {
              this.scrollElInitial = 0;
              this.scrollElTop = 0;
              this.scrollElBottom = 0;
            }

            this.lastToIndex = indexForItem(item);
            this.selectedItemHeight = item.offsetHeight;
            this.state = 1
            /* Active */
            ;
            item.classList.add(ITEM_REORDER_SELECTED);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"])();
          }
        }, {
          key: "onMove",
          value: function onMove(ev) {
            var selectedItem = this.selectedItemEl;

            if (!selectedItem) {
              return;
            } // Scroll if we reach the scroll margins


            var scroll = this.autoscroll(ev.currentY); // // Get coordinate

            var top = this.containerTop - scroll;
            var bottom = this.containerBottom - scroll;
            var currentY = Math.max(top, Math.min(ev.currentY, bottom));
            var deltaY = scroll + currentY - ev.startY;
            var normalizedY = currentY - top;
            var toIndex = this.itemIndexForTop(normalizedY);

            if (toIndex !== this.lastToIndex) {
              var fromIndex = indexForItem(selectedItem);
              this.lastToIndex = toIndex;
              Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"])();
              this.reorderMove(fromIndex, toIndex);
            } // Update selected item position


            selectedItem.style.transform = "translateY(".concat(deltaY, "px)");
          }
        }, {
          key: "onEnd",
          value: function onEnd() {
            var selectedItemEl = this.selectedItemEl;
            this.state = 2
            /* Complete */
            ;

            if (!selectedItemEl) {
              this.state = 0
              /* Idle */
              ;
              return;
            }

            var toIndex = this.lastToIndex;
            var fromIndex = indexForItem(selectedItemEl);

            if (toIndex === fromIndex) {
              this.completeSync();
            } else {
              this.ionItemReorder.emit({
                from: fromIndex,
                to: toIndex,
                complete: this.completeSync.bind(this)
              });
            }

            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
          }
        }, {
          key: "completeSync",
          value: function completeSync(listOrReorder) {
            var selectedItemEl = this.selectedItemEl;

            if (selectedItemEl && this.state === 2
            /* Complete */
            ) {
              var children = this.el.children;
              var len = children.length;
              var toIndex = this.lastToIndex;
              var fromIndex = indexForItem(selectedItemEl);

              if (toIndex !== fromIndex && (listOrReorder === undefined || listOrReorder === true)) {
                var ref = fromIndex < toIndex ? children[toIndex + 1] : children[toIndex];
                this.el.insertBefore(selectedItemEl, ref);
              }

              if (Array.isArray(listOrReorder)) {
                listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
              }

              for (var i = 0; i < len; i++) {
                children[i].style['transform'] = '';
              }

              selectedItemEl.style.transition = '';
              selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
              this.selectedItemEl = undefined;
              this.state = 0
              /* Idle */
              ;
            }

            return listOrReorder;
          }
        }, {
          key: "itemIndexForTop",
          value: function itemIndexForTop(deltaY) {
            var heights = this.cachedHeights; // TODO: since heights is a sorted array of integers, we can do
            // speed up the search using binary search. Remember that linear-search is still
            // faster than binary-search for small arrays (<64) due CPU branch misprediction.

            for (var i = 0; i < heights.length; i++) {
              if (heights[i] > deltaY) {
                return i;
              }
            }

            return heights.length - 1;
          }
          /********* DOM WRITE ********* */

        }, {
          key: "reorderMove",
          value: function reorderMove(fromIndex, toIndex) {
            var itemHeight = this.selectedItemHeight;
            var children = this.el.children;

            for (var i = 0; i < children.length; i++) {
              var style = children[i].style;
              var value = '';

              if (i > fromIndex && i <= toIndex) {
                value = "translateY(".concat(-itemHeight, "px)");
              } else if (i < fromIndex && i >= toIndex) {
                value = "translateY(".concat(itemHeight, "px)");
              }

              style['transform'] = value;
            }
          }
        }, {
          key: "autoscroll",
          value: function autoscroll(posY) {
            if (!this.scrollEl) {
              return 0;
            }

            var amount = 0;

            if (posY < this.scrollElTop) {
              amount = -SCROLL_JUMP;
            } else if (posY > this.scrollElBottom) {
              amount = SCROLL_JUMP;
            }

            if (amount !== 0) {
              this.scrollEl.scrollBy(0, amount);
            }

            return this.scrollEl.scrollTop - this.scrollElInitial;
          }
        }, {
          key: "render",
          value: function render() {
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": _defineProperty(_defineProperty(_defineProperty({}, mode, true), 'reorder-enabled', !this.disabled), 'reorder-list-active', this.state !== 0)
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

      var indexForItem = function indexForItem(element) {
        return element['$ionIndex'];
      };

      var findReorderItem = function findReorderItem(node, container) {
        var parent;

        while (node) {
          parent = node.parentElement;

          if (parent === container) {
            return node;
          }

          node = parent;
        }

        return undefined;
      };

      var AUTO_SCROLL_MARGIN = 60;
      var SCROLL_JUMP = 10;
      var ITEM_REORDER_SELECTED = 'reorder-selected';

      var reorderArray = function reorderArray(array, from, to) {
        var element = array[from];
        array.splice(from, 1);
        array.splice(to, 0, element);
        return array.slice();
      };

      ReorderGroup.style = reorderGroupCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=27-es5.js.map