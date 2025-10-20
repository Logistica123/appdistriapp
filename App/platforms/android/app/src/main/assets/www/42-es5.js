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

  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42], {
    /***/
    "8Mb5":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js ***!
      \***********************************************************************/

    /*! exports provided: ion_virtual_scroll */

    /***/
    function Mb5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_virtual_scroll", function () {
        return VirtualScroll;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");

      var CELL_TYPE_ITEM = 'item';
      var CELL_TYPE_HEADER = 'header';
      var CELL_TYPE_FOOTER = 'footer';
      var NODE_CHANGE_NONE = 0;
      var NODE_CHANGE_POSITION = 1;
      var NODE_CHANGE_CELL = 2;
      var MIN_READS = 2;

      var updateVDom = function updateVDom(dom, heightIndex, cells, range) {
        // reset dom
        var _iterator = _createForOfIteratorHelper(dom),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var node = _step.value;
            node.change = NODE_CHANGE_NONE;
            node.d = true;
          } // try to match into exisiting dom

        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var toMutate = [];
        var end = range.offset + range.length;

        var _loop = function _loop() {
          var cell = cells[i];
          var node = dom.find(function (n) {
            return n.d && n.cell === cell;
          });

          if (node) {
            var top = heightIndex[i];

            if (top !== node.top) {
              node.top = top;
              node.change = NODE_CHANGE_POSITION;
            }

            node.d = false;
          } else {
            toMutate.push(cell);
          }
        };

        for (var i = range.offset; i < end; i++) {
          _loop();
        } // needs to append


        var pool = dom.filter(function (n) {
          return n.d;
        });

        var _loop2 = function _loop2() {
          var cell = _toMutate[_i];
          var node = pool.find(function (n) {
            return n.d && n.cell.type === cell.type;
          });
          var index = cell.i;

          if (node) {
            node.d = false;
            node.change = NODE_CHANGE_CELL;
            node.cell = cell;
            node.top = heightIndex[index];
          } else {
            dom.push({
              d: false,
              cell: cell,
              visible: true,
              change: NODE_CHANGE_CELL,
              top: heightIndex[index]
            });
          }
        };

        for (var _i = 0, _toMutate = toMutate; _i < _toMutate.length; _i++) {
          _loop2();
        }

        dom.filter(function (n) {
          return n.d && n.top !== -9999;
        }).forEach(function (n) {
          n.change = NODE_CHANGE_POSITION;
          n.top = -9999;
        });
      };

      var doRender = function doRender(el, nodeRender, dom, updateCellHeight) {
        var children = Array.from(el.children).filter(function (n) {
          return n.tagName !== 'TEMPLATE';
        });
        var childrenNu = children.length;
        var child;

        for (var i = 0; i < dom.length; i++) {
          var node = dom[i];
          var cell = node.cell; // the cell change, the content must be updated

          if (node.change === NODE_CHANGE_CELL) {
            if (i < childrenNu) {
              child = children[i];
              nodeRender(child, cell, i);
            } else {
              var newChild = createNode(el, cell.type);
              child = nodeRender(newChild, cell, i) || newChild;
              child.classList.add('virtual-item');
              el.appendChild(child);
            }

            child['$ionCell'] = cell;
          } else {
            child = children[i];
          } // only update position when it changes


          if (node.change !== NODE_CHANGE_NONE) {
            child.style.transform = "translate3d(0,".concat(node.top, "px,0)");
          } // update visibility


          var visible = cell.visible;

          if (node.visible !== visible) {
            if (visible) {
              child.classList.remove('virtual-loading');
            } else {
              child.classList.add('virtual-loading');
            }

            node.visible = visible;
          } // dynamic height


          if (cell.reads > 0) {
            updateCellHeight(cell, child);
            cell.reads--;
          }
        }
      };

      var createNode = function createNode(el, type) {
        var template = getTemplate(el, type);

        if (template && el.ownerDocument) {
          return el.ownerDocument.importNode(template.content, true).children[0];
        }

        return null;
      };

      var getTemplate = function getTemplate(el, type) {
        switch (type) {
          case CELL_TYPE_ITEM:
            return el.querySelector('template:not([name])');

          case CELL_TYPE_HEADER:
            return el.querySelector('template[name=header]');

          case CELL_TYPE_FOOTER:
            return el.querySelector('template[name=footer]');
        }
      };

      var getViewport = function getViewport(scrollTop, vierportHeight, margin) {
        return {
          top: Math.max(scrollTop - margin, 0),
          bottom: scrollTop + vierportHeight + margin
        };
      };

      var getRange = function getRange(heightIndex, viewport, buffer) {
        var topPos = viewport.top;
        var bottomPos = viewport.bottom; // find top index

        var i = 0;

        for (; i < heightIndex.length; i++) {
          if (heightIndex[i] > topPos) {
            break;
          }
        }

        var offset = Math.max(i - buffer - 1, 0); // find bottom index

        for (; i < heightIndex.length; i++) {
          if (heightIndex[i] >= bottomPos) {
            break;
          }
        }

        var end = Math.min(i + buffer, heightIndex.length);
        var length = end - offset;
        return {
          offset: offset,
          length: length
        };
      };

      var getShouldUpdate = function getShouldUpdate(dirtyIndex, currentRange, range) {
        var end = range.offset + range.length;
        return dirtyIndex <= end || currentRange.offset !== range.offset || currentRange.length !== range.length;
      };

      var findCellIndex = function findCellIndex(cells, index) {
        var max = cells.length > 0 ? cells[cells.length - 1].index : 0;

        if (index === 0) {
          return 0;
        } else if (index === max + 1) {
          return cells.length;
        } else {
          return cells.findIndex(function (c) {
            return c.index === index;
          });
        }
      };

      var inplaceUpdate = function inplaceUpdate(dst, src, offset) {
        if (offset === 0 && src.length >= dst.length) {
          return src;
        }

        for (var i = 0; i < src.length; i++) {
          dst[i + offset] = src[i];
        }

        return dst;
      };

      var _calcCells = function calcCells(items, itemHeight, headerHeight, footerHeight, headerFn, footerFn, approxHeaderHeight, approxFooterHeight, approxItemHeight, j, offset, len) {
        var cells = [];
        var end = len + offset;

        for (var i = offset; i < end; i++) {
          var item = items[i];

          if (headerFn) {
            var value = headerFn(item, i, items);

            if (value != null) {
              cells.push({
                i: j++,
                type: CELL_TYPE_HEADER,
                value: value,
                index: i,
                height: headerHeight ? headerHeight(value, i) : approxHeaderHeight,
                reads: headerHeight ? 0 : MIN_READS,
                visible: !!headerHeight
              });
            }
          }

          cells.push({
            i: j++,
            type: CELL_TYPE_ITEM,
            value: item,
            index: i,
            height: itemHeight ? itemHeight(item, i) : approxItemHeight,
            reads: itemHeight ? 0 : MIN_READS,
            visible: !!itemHeight
          });

          if (footerFn) {
            var _value = footerFn(item, i, items);

            if (_value != null) {
              cells.push({
                i: j++,
                type: CELL_TYPE_FOOTER,
                value: _value,
                index: i,
                height: footerHeight ? footerHeight(_value, i) : approxFooterHeight,
                reads: footerHeight ? 0 : MIN_READS,
                visible: !!footerHeight
              });
            }
          }
        }

        return cells;
      };

      var _calcHeightIndex = function calcHeightIndex(buf, cells, index) {
        var acum = buf[index];

        for (var i = index; i < buf.length; i++) {
          buf[i] = acum;
          acum += cells[i].height;
        }

        return acum;
      };

      var resizeBuffer = function resizeBuffer(buf, len) {
        if (!buf) {
          return new Uint32Array(len);
        }

        if (buf.length === len) {
          return buf;
        } else if (len > buf.length) {
          var newBuf = new Uint32Array(len);
          newBuf.set(buf);
          return newBuf;
        } else {
          return buf.subarray(0, len);
        }
      };

      var positionForIndex = function positionForIndex(index, cells, heightIndex) {
        var cell = cells.find(function (c) {
          return c.type === CELL_TYPE_ITEM && c.index === index;
        });

        if (cell) {
          return heightIndex[cell.i];
        }

        return -1;
      };

      var virtualScrollCss = "ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}";

      var VirtualScroll = /*#__PURE__*/function () {
        function VirtualScroll(hostRef) {
          var _this = this;

          _classCallCheck(this, VirtualScroll);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.range = {
            offset: 0,
            length: 0
          };
          this.viewportHeight = 0;
          this.cells = [];
          this.virtualDom = [];
          this.isEnabled = false;
          this.viewportOffset = 0;
          this.currentScrollTop = 0;
          this.indexDirty = 0;
          this.lastItemLen = 0;
          this.totalHeight = 0;
          /**
           * It is important to provide this
           * if virtual item height will be significantly larger than the default
           * The approximate height of each virtual item template's cell.
           * This dimension is used to help determine how many cells should
           * be created when initialized, and to help calculate the height of
           * the scrollable area. This height value can only use `px` units.
           * Note that the actual rendered size of each cell comes from the
           * app's CSS, whereas this approximation is used to help calculate
           * initial dimensions before the item has been rendered.
           */

          this.approxItemHeight = 45;
          /**
           * The approximate height of each header template's cell.
           * This dimension is used to help determine how many cells should
           * be created when initialized, and to help calculate the height of
           * the scrollable area. This height value can only use `px` units.
           * Note that the actual rendered size of each cell comes from the
           * app's CSS, whereas this approximation is used to help calculate
           * initial dimensions before the item has been rendered.
           */

          this.approxHeaderHeight = 30;
          /**
           * The approximate width of each footer template's cell.
           * This dimension is used to help determine how many cells should
           * be created when initialized, and to help calculate the height of
           * the scrollable area. This height value can only use `px` units.
           * Note that the actual rendered size of each cell comes from the
           * app's CSS, whereas this approximation is used to help calculate
           * initial dimensions before the item has been rendered.
           */

          this.approxFooterHeight = 30;

          this.onScroll = function () {
            _this.updateVirtualScroll();
          };
        }

        return _createClass(VirtualScroll, [{
          key: "itemsChanged",
          value: function itemsChanged() {
            this.calcCells();
            this.updateVirtualScroll();
          }
        }, {
          key: "componentWillLoad",
          value: function componentWillLoad() {
            console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.");
          }
        }, {
          key: "connectedCallback",
          value: function () {
            var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee() {
              var contentEl;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    contentEl = this.el.closest('ion-content');

                    if (contentEl) {
                      _context.n = 1;
                      break;
                    }

                    console.error('<ion-virtual-scroll> must be used inside an <ion-content>');
                    return _context.a(2);

                  case 1:
                    _context.n = 2;
                    return contentEl.getScrollElement();

                  case 2:
                    this.scrollEl = _context.v;
                    this.contentEl = contentEl;
                    this.calcCells();
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
          key: "componentDidUpdate",
          value: function componentDidUpdate() {
            this.updateState();
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            this.scrollEl = undefined;
          }
        }, {
          key: "onResize",
          value: function onResize() {
            this.calcCells();
            this.updateVirtualScroll();
          }
          /**
           * Returns the position of the virtual item at the given index.
           */

        }, {
          key: "positionForItem",
          value: function positionForItem(index) {
            return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));
          }
          /**
           * This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as
           * dirty any time the content or their style changes.
           *
           * The subset of items to be updated can are specifing by an offset and a length.
           */

        }, {
          key: "checkRange",
          value: function () {
            var _checkRange = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee2(offset) {
              var len,
                  length,
                  cellIndex,
                  cells,
                  _args2 = arguments;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    len = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : -1;

                    if (this.items) {
                      _context2.n = 1;
                      break;
                    }

                    return _context2.a(2);

                  case 1:
                    length = len === -1 ? this.items.length - offset : len;
                    cellIndex = findCellIndex(this.cells, offset);
                    cells = _calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, cellIndex, offset, length);
                    this.cells = inplaceUpdate(this.cells, cells, cellIndex);
                    this.lastItemLen = this.items.length;
                    this.indexDirty = Math.max(offset - 1, 0);
                    this.scheduleUpdate();

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));

            function checkRange(_x) {
              return _checkRange.apply(this, arguments);
            }

            return checkRange;
          }()
          /**
           * This method marks the tail the items array as dirty, so they can be re-rendered.
           *
           * It's equivalent to calling:
           *
           * ```js
           * virtualScroll.checkRange(lastItemLen);
           * ```
           */

        }, {
          key: "checkEnd",
          value: function () {
            var _checkEnd = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee3() {
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    if (this.items) {
                      this.checkRange(this.lastItemLen);
                    }

                  case 1:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));

            function checkEnd() {
              return _checkEnd.apply(this, arguments);
            }

            return checkEnd;
          }()
        }, {
          key: "updateVirtualScroll",
          value: function updateVirtualScroll() {
            // do nothing if virtual-scroll is disabled
            if (!this.isEnabled || !this.scrollEl) {
              return;
            } // unschedule future updates


            if (this.timerUpdate) {
              clearTimeout(this.timerUpdate);
              this.timerUpdate = undefined;
            } // schedule DOM operations into the stencil queue


            Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this.readVS.bind(this));
            Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this.writeVS.bind(this));
          }
        }, {
          key: "readVS",
          value: function readVS() {
            var contentEl = this.contentEl,
                scrollEl = this.scrollEl,
                el = this.el;
            var topOffset = 0;
            var node = el;

            while (node && node !== contentEl) {
              topOffset += node.offsetTop;
              node = node.offsetParent;
            }

            this.viewportOffset = topOffset;

            if (scrollEl) {
              this.viewportHeight = scrollEl.offsetHeight;
              this.currentScrollTop = scrollEl.scrollTop;
            }
          }
        }, {
          key: "writeVS",
          value: function writeVS() {
            var dirtyIndex = this.indexDirty; // get visible viewport

            var scrollTop = this.currentScrollTop - this.viewportOffset;
            var viewport = getViewport(scrollTop, this.viewportHeight, 100); // compute lazily the height index

            var heightIndex = this.getHeightIndex(); // get array bounds of visible cells base in the viewport

            var range = getRange(heightIndex, viewport, 2); // fast path, do nothing

            var shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);

            if (!shouldUpdate) {
              return;
            }

            this.range = range; // in place mutation of the virtual DOM

            updateVDom(this.virtualDom, heightIndex, this.cells, range); // Write DOM
            // Different code paths taken depending of the render API used

            if (this.nodeRender) {
              doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
            } else if (this.domRender) {
              this.domRender(this.virtualDom);
            } else if (this.renderItem) {
              Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["j"])(this);
            }
          }
        }, {
          key: "updateCellHeight",
          value: function updateCellHeight(cell, node) {
            var _this2 = this;

            var update = function update() {
              if (node['$ionCell'] === cell) {
                var style = window.getComputedStyle(node);
                var height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));

                _this2.setCellHeight(cell, height);
              }
            };

            if (node) {
              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__["c"])(node, update);
            } else {
              update();
            }
          }
        }, {
          key: "setCellHeight",
          value: function setCellHeight(cell, height) {
            var index = cell.i; // the cell might changed since the height update was scheduled

            if (cell !== this.cells[index]) {
              return;
            }

            if (cell.height !== height || cell.visible !== true) {
              cell.visible = true;
              cell.height = height;
              this.indexDirty = Math.min(this.indexDirty, index);
              this.scheduleUpdate();
            }
          }
        }, {
          key: "scheduleUpdate",
          value: function scheduleUpdate() {
            var _this3 = this;

            clearTimeout(this.timerUpdate);
            this.timerUpdate = setTimeout(function () {
              return _this3.updateVirtualScroll();
            }, 100);
          }
        }, {
          key: "updateState",
          value: function updateState() {
            var shouldEnable = !!(this.scrollEl && this.cells);

            if (shouldEnable !== this.isEnabled) {
              this.enableScrollEvents(shouldEnable);

              if (shouldEnable) {
                this.updateVirtualScroll();
              }
            }
          }
        }, {
          key: "calcCells",
          value: function calcCells() {
            if (!this.items) {
              return;
            }

            this.lastItemLen = this.items.length;
            this.cells = _calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
            this.indexDirty = 0;
          }
        }, {
          key: "getHeightIndex",
          value: function getHeightIndex() {
            if (this.indexDirty !== Infinity) {
              this.calcHeightIndex(this.indexDirty);
            }

            return this.heightIndex;
          }
        }, {
          key: "calcHeightIndex",
          value: function calcHeightIndex() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            // TODO: optimize, we don't need to calculate all the cells
            this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
            this.totalHeight = _calcHeightIndex(this.heightIndex, this.cells, index);
            this.indexDirty = Infinity;
          }
        }, {
          key: "enableScrollEvents",
          value: function enableScrollEvents(shouldListen) {
            var _this4 = this;

            if (this.rmEvent) {
              this.rmEvent();
              this.rmEvent = undefined;
            }

            var scrollEl = this.scrollEl;

            if (scrollEl) {
              this.isEnabled = shouldListen;
              scrollEl.addEventListener('scroll', this.onScroll);

              this.rmEvent = function () {
                scrollEl.removeEventListener('scroll', _this4.onScroll);
              };
            }
          }
        }, {
          key: "renderVirtualNode",
          value: function renderVirtualNode(node) {
            var _node$cell = node.cell,
                type = _node$cell.type,
                value = _node$cell.value,
                index = _node$cell.index;

            switch (type) {
              case CELL_TYPE_ITEM:
                return this.renderItem(value, index);

              case CELL_TYPE_HEADER:
                return this.renderHeader(value, index);

              case CELL_TYPE_FOOTER:
                return this.renderFooter(value, index);
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _this5 = this;

            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              style: {
                height: "".concat(this.totalHeight, "px")
              }
            }, this.renderItem && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(VirtualProxy, {
              dom: this.virtualDom
            }, this.virtualDom.map(function (node) {
              return _this5.renderVirtualNode(node);
            })));
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
              "itemHeight": ["itemsChanged"],
              "headerHeight": ["itemsChanged"],
              "footerHeight": ["itemsChanged"],
              "items": ["itemsChanged"]
            };
          }
        }]);
      }();

      var VirtualProxy = function VirtualProxy(_ref, children, utils) {
        var dom = _ref.dom;
        return utils.map(children, function (child, i) {
          var node = dom[i];
          var vattrs = child.vattrs || {};
          var classes = vattrs["class"] || '';
          classes += 'virtual-item ';

          if (!node.visible) {
            classes += 'virtual-loading';
          }

          return Object.assign(Object.assign({}, child), {
            vattrs: Object.assign(Object.assign({}, vattrs), {
              "class": classes,
              style: Object.assign(Object.assign({}, vattrs.style), {
                transform: "translate3d(0,".concat(node.top, "px,0)")
              })
            })
          });
        });
      };

      VirtualScroll.style = virtualScrollCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=42-es5.js.map