(function () {
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }

  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29], {
    /***/
    "k5eQ":
    /*!****************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js ***!
      \****************************************************************/

    /*! exports provided: ion_route, ion_route_redirect, ion_router, ion_router_link */

    /***/
    function k5eQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_route", function () {
        return Route;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_route_redirect", function () {
        return RouteRedirect;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_router", function () {
        return Router;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_router_link", function () {
        return RouterLink;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");
      /* harmony import */


      var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ionic-global-63a97a32.js */
      "E/Mt");
      /* harmony import */


      var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./theme-ff3fc52f.js */
      "74mu");

      var Route = /*#__PURE__*/function () {
        function Route(hostRef) {
          _classCallCheck(this, Route);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionRouteDataChanged = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionRouteDataChanged", 7);
          /**
           * Relative path that needs to match in order for this route to apply.
           *
           * Accepts paths similar to expressjs so that you can define parameters
           * in the url /foo/:bar where bar would be available in incoming props.
           */

          this.url = '';
        }

        return _createClass(Route, [{
          key: "onUpdate",
          value: function onUpdate(newValue) {
            this.ionRouteDataChanged.emit(newValue);
          }
        }, {
          key: "onComponentProps",
          value: function onComponentProps(newValue, oldValue) {
            if (newValue === oldValue) {
              return;
            }

            var keys1 = newValue ? Object.keys(newValue) : [];
            var keys2 = oldValue ? Object.keys(oldValue) : [];

            if (keys1.length !== keys2.length) {
              this.onUpdate(newValue);
              return;
            }

            var _iterator = _createForOfIteratorHelper(keys1),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var key = _step.value;

                if (newValue[key] !== oldValue[key]) {
                  this.onUpdate(newValue);
                  return;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            this.ionRouteDataChanged.emit();
          }
        }], [{
          key: "watchers",
          get: function get() {
            return {
              "url": ["onUpdate"],
              "component": ["onUpdate"],
              "componentProps": ["onComponentProps"]
            };
          }
        }]);
      }();

      var RouteRedirect = /*#__PURE__*/function () {
        function RouteRedirect(hostRef) {
          _classCallCheck(this, RouteRedirect);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionRouteRedirectChanged = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionRouteRedirectChanged", 7);
        }

        return _createClass(RouteRedirect, [{
          key: "propDidChange",
          value: function propDidChange() {
            this.ionRouteRedirectChanged.emit();
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            this.ionRouteRedirectChanged.emit();
          }
        }], [{
          key: "watchers",
          get: function get() {
            return {
              "from": ["propDidChange"],
              "to": ["propDidChange"]
            };
          }
        }]);
      }();

      var ROUTER_INTENT_NONE = 'root';
      var ROUTER_INTENT_FORWARD = 'forward';
      var ROUTER_INTENT_BACK = 'back'; // Join the non empty segments with "/".

      var generatePath = function generatePath(segments) {
        var path = segments.filter(function (s) {
          return s.length > 0;
        }).join('/');
        return '/' + path;
      };

      var generateUrl = function generateUrl(segments, useHash, queryString) {
        var url = generatePath(segments);

        if (useHash) {
          url = '#' + url;
        }

        if (queryString !== undefined) {
          url += '?' + queryString;
        }

        return url;
      };

      var writePath = function writePath(history, root, useHash, path, direction, state, queryString) {
        var url = generateUrl([].concat(_toConsumableArray(parsePath(root).segments), _toConsumableArray(path)), useHash, queryString);

        if (direction === ROUTER_INTENT_FORWARD) {
          history.pushState(state, '', url);
        } else {
          history.replaceState(state, '', url);
        }
      };

      var chainToPath = function chainToPath(chain) {
        var path = [];

        var _iterator2 = _createForOfIteratorHelper(chain),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var route = _step2.value;

            var _iterator3 = _createForOfIteratorHelper(route.path),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var segment = _step3.value;

                if (segment[0] === ':') {
                  var param = route.params && route.params[segment.slice(1)];

                  if (!param) {
                    return null;
                  }

                  path.push(param);
                } else if (segment !== '') {
                  path.push(segment);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return path;
      }; // Remove the prefix segments from the path segments.
      //
      // Return:
      // - null when the path segments do not start with the passed prefix,
      // - the path segments after the prefix otherwise.


      var removePrefix = function removePrefix(prefix, path) {
        if (prefix.length > path.length) {
          return null;
        }

        if (prefix.length <= 1 && prefix[0] === '') {
          return path;
        }

        for (var i = 0; i < prefix.length; i++) {
          if (prefix[i] !== path[i]) {
            return null;
          }
        }

        if (path.length === prefix.length) {
          return [''];
        }

        return path.slice(prefix.length);
      };

      var readPath = function readPath(loc, root, useHash) {
        var prefix = parsePath(root).segments;
        var pathname = useHash ? loc.hash.slice(1) : loc.pathname;
        var path = parsePath(pathname).segments;
        return removePrefix(prefix, path);
      }; // Parses the path to:
      // - segments an array of '/' separated parts,
      // - queryString (undefined when no query string).


      var parsePath = function parsePath(path) {
        var segments = [''];
        var queryString;

        if (path != null) {
          var qsStart = path.indexOf('?');

          if (qsStart > -1) {
            queryString = path.substr(qsStart + 1);
            path = path.substr(0, qsStart);
          }

          segments = path.split('/').map(function (s) {
            return s.trim();
          }).filter(function (s) {
            return s.length > 0;
          });

          if (segments.length === 0) {
            segments = [''];
          }
        }

        return {
          segments: segments,
          queryString: queryString
        };
      };

      var printRoutes = function printRoutes(routes) {
        console.group("[ion-core] ROUTES[".concat(routes.length, "]"));

        var _iterator4 = _createForOfIteratorHelper(routes),
            _step4;

        try {
          var _loop = function _loop() {
            var chain = _step4.value;
            var path = [];
            chain.forEach(function (r) {
              return path.push.apply(path, _toConsumableArray(r.path));
            });
            var ids = chain.map(function (r) {
              return r.id;
            });
            console.debug("%c ".concat(generatePath(path)), 'font-weight: bold; padding-left: 20px', '=>\t', "(".concat(ids.join(', '), ")"));
          };

          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        console.groupEnd();
      };

      var printRedirects = function printRedirects(redirects) {
        console.group("[ion-core] REDIRECTS[".concat(redirects.length, "]"));

        var _iterator5 = _createForOfIteratorHelper(redirects),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var redirect = _step5.value;

            if (redirect.to) {
              console.debug('FROM: ', "$c ".concat(generatePath(redirect.from)), 'font-weight: bold', ' TO: ', "$c ".concat(generatePath(redirect.to.segments)), 'font-weight: bold');
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        console.groupEnd();
      };

      var _writeNavState = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee(root, chain, direction, index) {
          var changed,
              animation,
              outlet,
              route,
              result,
              _args = arguments,
              _t;

          return _regenerator().w(function (_context) {
            while (1) switch (_context.p = _context.n) {
              case 0:
                changed = _args.length > 4 && _args[4] !== undefined ? _args[4] : false;
                animation = _args.length > 5 ? _args[5] : undefined;
                _context.p = 1;
                // find next navigation outlet in the DOM
                outlet = searchNavNode(root); // make sure we can continue interacting the DOM, otherwise abort

                if (!(index >= chain.length || !outlet)) {
                  _context.n = 2;
                  break;
                }

                return _context.a(2, changed);

              case 2:
                _context.n = 3;
                return new Promise(function (resolve) {
                  return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__["c"])(outlet, resolve);
                });

              case 3:
                route = chain[index];
                _context.n = 4;
                return outlet.setRouteId(route.id, route.params, direction, animation);

              case 4:
                result = _context.v;

                // if the outlet changed the page, reset navigation to neutral (no direction)
                // this means nested outlets will not animate
                if (result.changed) {
                  direction = ROUTER_INTENT_NONE;
                  changed = true;
                } // recursively set nested outlets


                _context.n = 5;
                return _writeNavState(result.element, chain, direction, index + 1, changed, animation);

              case 5:
                changed = _context.v;

                if (!result.markVisible) {
                  _context.n = 6;
                  break;
                }

                _context.n = 6;
                return result.markVisible();

              case 6:
                return _context.a(2, changed);

              case 7:
                _context.p = 7;
                _t = _context.v;
                console.error(_t);
                return _context.a(2, false);
            }
          }, _callee, null, [[1, 7]]);
        }));

        return function writeNavState(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();

      var readNavState = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee2(root) {
          var ids, outlet, node, id;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                ids = [];
                node = root; // tslint:disable-next-line:no-constant-condition

              case 1:
                if (!true) {
                  _context2.n = 7;
                  break;
                }

                outlet = searchNavNode(node);

                if (!outlet) {
                  _context2.n = 5;
                  break;
                }

                _context2.n = 2;
                return outlet.getRouteId();

              case 2:
                id = _context2.v;

                if (!id) {
                  _context2.n = 3;
                  break;
                }

                node = id.element;
                id.element = undefined;
                ids.push(id);
                _context2.n = 4;
                break;

              case 3:
                return _context2.a(3, 7);

              case 4:
                _context2.n = 6;
                break;

              case 5:
                return _context2.a(3, 7);

              case 6:
                _context2.n = 1;
                break;

              case 7:
                return _context2.a(2, {
                  ids: ids,
                  outlet: outlet
                });
            }
          }, _callee2);
        }));

        return function readNavState(_x5) {
          return _ref2.apply(this, arguments);
        };
      }();

      var waitUntilNavNode = function waitUntilNavNode() {
        if (searchNavNode(document.body)) {
          return Promise.resolve();
        }

        return new Promise(function (resolve) {
          window.addEventListener('ionNavWillLoad', resolve, {
            once: true
          });
        });
      };

      var QUERY = ':not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet';

      var searchNavNode = function searchNavNode(root) {
        if (!root) {
          return undefined;
        }

        if (root.matches(QUERY)) {
          return root;
        }

        var outlet = root.querySelector(QUERY);
        return outlet !== null && outlet !== void 0 ? outlet : undefined;
      }; // Returns whether the given redirect matches the given path segments.
      //
      // A redirect matches when the segments of the path and redirect.from are equal.
      // Note that segments are only checked until redirect.from contains a '*' which matches any path segment.
      // The path ['some', 'path', 'to', 'page'] matches both ['some', 'path', 'to', 'page'] and ['some', 'path', '*'].


      var matchesRedirect = function matchesRedirect(path, redirect) {
        var from = redirect.from,
            to = redirect.to;

        if (to === undefined) {
          return false;
        }

        if (from.length > path.length) {
          return false;
        }

        for (var i = 0; i < from.length; i++) {
          var expected = from[i];

          if (expected === '*') {
            return true;
          }

          if (expected !== path[i]) {
            return false;
          }
        }

        return from.length === path.length;
      }; // Returns the first redirect matching the path segments or undefined when no match found.


      var findRouteRedirect = function findRouteRedirect(path, redirects) {
        return redirects.find(function (redirect) {
          return matchesRedirect(path, redirect);
        });
      };

      var matchesIDs = function matchesIDs(ids, chain) {
        var len = Math.min(ids.length, chain.length);
        var i = 0;

        for (; i < len; i++) {
          if (ids[i].toLowerCase() !== chain[i].id) {
            break;
          }
        }

        return i;
      };

      var matchesPath = function matchesPath(inputPath, chain) {
        var segments = new RouterSegments(inputPath);
        var matchesDefault = false;
        var allparams;

        for (var i = 0; i < chain.length; i++) {
          var path = chain[i].path;

          if (path[0] === '') {
            matchesDefault = true;
          } else {
            var _iterator6 = _createForOfIteratorHelper(path),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var segment = _step6.value;
                var data = segments.next(); // data param

                if (segment[0] === ':') {
                  if (data === '') {
                    return null;
                  }

                  allparams = allparams || [];
                  var params = allparams[i] || (allparams[i] = {});
                  params[segment.slice(1)] = data;
                } else if (data !== segment) {
                  return null;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            matchesDefault = false;
          }
        }

        var matches = matchesDefault ? matchesDefault === (segments.next() === '') : true;

        if (!matches) {
          return null;
        }

        if (allparams) {
          return chain.map(function (route, i) {
            return {
              id: route.id,
              path: route.path,
              params: mergeParams(route.params, allparams[i]),
              beforeEnter: route.beforeEnter,
              beforeLeave: route.beforeLeave
            };
          });
        }

        return chain;
      }; // Merges the route parameter objects.
      // Returns undefined when both parameters are undefined.


      var mergeParams = function mergeParams(a, b) {
        return a || b ? Object.assign(Object.assign({}, a), b) : undefined;
      };

      var routerIDsToChain = function routerIDsToChain(ids, chains) {
        var match = null;
        var maxMatches = 0;
        var plainIDs = ids.map(function (i) {
          return i.id;
        });

        var _iterator7 = _createForOfIteratorHelper(chains),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var chain = _step7.value;
            var score = matchesIDs(plainIDs, chain);

            if (score > maxMatches) {
              match = chain;
              maxMatches = score;
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        if (match) {
          return match.map(function (route, i) {
            return {
              id: route.id,
              path: route.path,
              params: mergeParams(route.params, ids[i] && ids[i].params)
            };
          });
        }

        return null;
      };

      var routerPathToChain = function routerPathToChain(path, chains) {
        var match = null;
        var matches = 0;

        var _iterator8 = _createForOfIteratorHelper(chains),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var chain = _step8.value;
            var matchedChain = matchesPath(path, chain);

            if (matchedChain !== null) {
              var score = computePriority(matchedChain);

              if (score > matches) {
                matches = score;
                match = matchedChain;
              }
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        return match;
      };

      var computePriority = function computePriority(chain) {
        var score = 1;
        var level = 1;

        var _iterator9 = _createForOfIteratorHelper(chain),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var route = _step9.value;

            var _iterator0 = _createForOfIteratorHelper(route.path),
                _step0;

            try {
              for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
                var path = _step0.value;

                if (path[0] === ':') {
                  score += Math.pow(1, level);
                } else if (path !== '') {
                  score += Math.pow(2, level);
                }

                level++;
              }
            } catch (err) {
              _iterator0.e(err);
            } finally {
              _iterator0.f();
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        return score;
      };

      var RouterSegments = /*#__PURE__*/function () {
        function RouterSegments(path) {
          _classCallCheck(this, RouterSegments);

          this.path = path.slice();
        }

        return _createClass(RouterSegments, [{
          key: "next",
          value: function next() {
            if (this.path.length > 0) {
              return this.path.shift();
            }

            return '';
          }
        }]);
      }();

      var readProp = function readProp(el, prop) {
        if (prop in el) {
          return el[prop];
        }

        if (el.hasAttribute(prop)) {
          return el.getAttribute(prop);
        }

        return null;
      };

      var readRedirects = function readRedirects(root) {
        return Array.from(root.children).filter(function (el) {
          return el.tagName === 'ION-ROUTE-REDIRECT';
        }).map(function (el) {
          var to = readProp(el, 'to');
          return {
            from: parsePath(readProp(el, 'from')).segments,
            to: to == null ? undefined : parsePath(to)
          };
        });
      };

      var readRoutes = function readRoutes(root) {
        return flattenRouterTree(_readRouteNodes(root));
      };

      var _readRouteNodes = function readRouteNodes(node) {
        return Array.from(node.children).filter(function (el) {
          return el.tagName === 'ION-ROUTE' && el.component;
        }).map(function (el) {
          var component = readProp(el, 'component');
          return {
            path: parsePath(readProp(el, 'url')).segments,
            id: component.toLowerCase(),
            params: el.componentProps,
            beforeLeave: el.beforeLeave,
            beforeEnter: el.beforeEnter,
            children: _readRouteNodes(el)
          };
        });
      };

      var flattenRouterTree = function flattenRouterTree(nodes) {
        var chains = [];

        var _iterator1 = _createForOfIteratorHelper(nodes),
            _step1;

        try {
          for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
            var node = _step1.value;

            _flattenNode([], chains, node);
          }
        } catch (err) {
          _iterator1.e(err);
        } finally {
          _iterator1.f();
        }

        return chains;
      };

      var _flattenNode = function flattenNode(chain, chains, node) {
        chain = chain.slice();
        chain.push({
          id: node.id,
          path: node.path,
          params: node.params,
          beforeLeave: node.beforeLeave,
          beforeEnter: node.beforeEnter
        });

        if (node.children.length === 0) {
          chains.push(chain);
          return;
        }

        var _iterator10 = _createForOfIteratorHelper(node.children),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var child = _step10.value;

            _flattenNode(chain, chains, child);
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      };

      var Router = /*#__PURE__*/function () {
        function Router(hostRef) {
          _classCallCheck(this, Router);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionRouteWillChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionRouteWillChange", 7);
          this.ionRouteDidChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionRouteDidChange", 7);
          this.previousPath = null;
          this.busy = false;
          this.state = 0;
          this.lastState = 0;
          /**
           * The root path to use when matching URLs. By default, this is set to "/", but you can specify
           * an alternate prefix for all URL paths.
           */

          this.root = '/';
          /**
           * The router can work in two "modes":
           * - With hash: `/index.html#/path/to/page`
           * - Without hash: `/path/to/page`
           *
           * Using one or another might depend in the requirements of your app and/or where it's deployed.
           *
           * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
           * requires additional server-side configuration in order to properly work.
           *
           * On the other side hash-navigation is much easier to deploy, it even works over the file protocol.
           *
           * By default, this property is `true`, change to `false` to allow hash-less URLs.
           */

          this.useHash = true;
        }

        return _createClass(Router, [{
          key: "componentWillLoad",
          value: function () {
            var _componentWillLoad = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee3() {
              var canProceed, redirect, path;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return waitUntilNavNode();

                  case 1:
                    _context3.n = 2;
                    return this.runGuards(this.getPath());

                  case 2:
                    canProceed = _context3.v;

                    if (!(canProceed !== true)) {
                      _context3.n = 4;
                      break;
                    }

                    if (!(typeof canProceed === 'object')) {
                      _context3.n = 3;
                      break;
                    }

                    redirect = canProceed.redirect;
                    path = parsePath(redirect);
                    this.setPath(path.segments, ROUTER_INTENT_NONE, path.queryString);
                    _context3.n = 3;
                    return this.writeNavStateRoot(path.segments, ROUTER_INTENT_NONE);

                  case 3:
                    _context3.n = 5;
                    break;

                  case 4:
                    _context3.n = 5;
                    return this.onRoutesChanged();

                  case 5:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));

            function componentWillLoad() {
              return _componentWillLoad.apply(this, arguments);
            }

            return componentWillLoad;
          }()
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            window.addEventListener('ionRouteRedirectChanged', Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__["n"])(this.onRedirectChanged.bind(this), 10));
            window.addEventListener('ionRouteDataChanged', Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__["n"])(this.onRoutesChanged.bind(this), 100));
          }
        }, {
          key: "onPopState",
          value: function () {
            var _onPopState = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee4() {
              var direction, segments, canProceed;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    direction = this.historyDirection();
                    segments = this.getPath();
                    _context4.n = 1;
                    return this.runGuards(segments);

                  case 1:
                    canProceed = _context4.v;

                    if (!(canProceed !== true)) {
                      _context4.n = 3;
                      break;
                    }

                    if (!(typeof canProceed === 'object')) {
                      _context4.n = 2;
                      break;
                    }

                    segments = parsePath(canProceed.redirect).segments;
                    _context4.n = 3;
                    break;

                  case 2:
                    return _context4.a(2, false);

                  case 3:
                    return _context4.a(2, this.writeNavStateRoot(segments, direction));
                }
              }, _callee4, this);
            }));

            function onPopState() {
              return _onPopState.apply(this, arguments);
            }

            return onPopState;
          }()
        }, {
          key: "onBackButton",
          value: function onBackButton(ev) {
            var _this = this;

            ev.detail.register(0, function (processNextHandler) {
              _this.back();

              processNextHandler();
            });
          }
          /** @internal */

        }, {
          key: "canTransition",
          value: function () {
            var _canTransition = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee5() {
              var canProceed;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.runGuards();

                  case 1:
                    canProceed = _context5.v;

                    if (!(canProceed !== true)) {
                      _context5.n = 3;
                      break;
                    }

                    if (!(typeof canProceed === 'object')) {
                      _context5.n = 2;
                      break;
                    }

                    return _context5.a(2, canProceed.redirect);

                  case 2:
                    return _context5.a(2, false);

                  case 3:
                    return _context5.a(2, true);
                }
              }, _callee5, this);
            }));

            function canTransition() {
              return _canTransition.apply(this, arguments);
            }

            return canTransition;
          }()
          /**
           * Navigate to the specified URL.
           *
           * @param url The url to navigate to.
           * @param direction The direction of the animation. Defaults to `"forward"`.
           */

        }, {
          key: "push",
          value: function () {
            var _push = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee6(url) {
              var direction,
                  animation,
                  parsedPath,
                  canProceed,
                  _args6 = arguments;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    direction = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 'forward';
                    animation = _args6.length > 2 ? _args6[2] : undefined;

                    if (url.startsWith('.')) {
                      url = new URL(url, window.location.href).pathname;
                    }

                    parsedPath = parsePath(url);
                    _context6.n = 1;
                    return this.runGuards(parsedPath.segments);

                  case 1:
                    canProceed = _context6.v;

                    if (!(canProceed !== true)) {
                      _context6.n = 3;
                      break;
                    }

                    if (!(typeof canProceed === 'object')) {
                      _context6.n = 2;
                      break;
                    }

                    parsedPath = parsePath(canProceed.redirect);
                    _context6.n = 3;
                    break;

                  case 2:
                    return _context6.a(2, false);

                  case 3:
                    this.setPath(parsedPath.segments, direction, parsedPath.queryString);
                    return _context6.a(2, this.writeNavStateRoot(parsedPath.segments, direction, animation));
                }
              }, _callee6, this);
            }));

            function push(_x6) {
              return _push.apply(this, arguments);
            }

            return push;
          }()
          /**
           * Go back to previous page in the window.history.
           */

        }, {
          key: "back",
          value: function back() {
            window.history.back();
            return Promise.resolve(this.waitPromise);
          }
          /** @internal */

        }, {
          key: "printDebug",
          value: function () {
            var _printDebug = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee7() {
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    printRoutes(readRoutes(this.el));
                    printRedirects(readRedirects(this.el));

                  case 1:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));

            function printDebug() {
              return _printDebug.apply(this, arguments);
            }

            return printDebug;
          }()
          /** @internal */

        }, {
          key: "navChanged",
          value: function () {
            var _navChanged = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee8(direction) {
              var _yield$readNavState, ids, outlet, routes, chain, path;

              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    if (!this.busy) {
                      _context8.n = 1;
                      break;
                    }

                    console.warn('[ion-router] router is busy, navChanged was cancelled');
                    return _context8.a(2, false);

                  case 1:
                    _context8.n = 2;
                    return readNavState(window.document.body);

                  case 2:
                    _yield$readNavState = _context8.v;
                    ids = _yield$readNavState.ids;
                    outlet = _yield$readNavState.outlet;
                    routes = readRoutes(this.el);
                    chain = routerIDsToChain(ids, routes);

                    if (chain) {
                      _context8.n = 3;
                      break;
                    }

                    console.warn('[ion-router] no matching URL for ', ids.map(function (i) {
                      return i.id;
                    }));
                    return _context8.a(2, false);

                  case 3:
                    path = chainToPath(chain);

                    if (path) {
                      _context8.n = 4;
                      break;
                    }

                    console.warn('[ion-router] router could not match path because some required param is missing');
                    return _context8.a(2, false);

                  case 4:
                    this.setPath(path, direction);
                    _context8.n = 5;
                    return this.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, path, null, ids.length);

                  case 5:
                    return _context8.a(2, true);
                }
              }, _callee8, this);
            }));

            function navChanged(_x7) {
              return _navChanged.apply(this, arguments);
            }

            return navChanged;
          }() // This handler gets called when a `ion-route-redirect` component is added to the DOM or if the from or to property of such node changes.

        }, {
          key: "onRedirectChanged",
          value: function onRedirectChanged() {
            var path = this.getPath();

            if (path && findRouteRedirect(path, readRedirects(this.el))) {
              this.writeNavStateRoot(path, ROUTER_INTENT_NONE);
            }
          } // This handler gets called when a `ion-route` component is added to the DOM or if the from or to property of such node changes.

        }, {
          key: "onRoutesChanged",
          value: function onRoutesChanged() {
            return this.writeNavStateRoot(this.getPath(), ROUTER_INTENT_NONE);
          }
        }, {
          key: "historyDirection",
          value: function historyDirection() {
            var _a;

            var win = window;

            if (win.history.state === null) {
              this.state++;
              win.history.replaceState(this.state, win.document.title, (_a = win.document.location) === null || _a === void 0 ? void 0 : _a.href);
            }

            var state = win.history.state;
            var lastState = this.lastState;
            this.lastState = state;

            if (state > lastState || state >= lastState && lastState > 0) {
              return ROUTER_INTENT_FORWARD;
            }

            if (state < lastState) {
              return ROUTER_INTENT_BACK;
            }

            return ROUTER_INTENT_NONE;
          }
        }, {
          key: "writeNavStateRoot",
          value: function () {
            var _writeNavStateRoot = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee9(path, direction, animation) {
              var redirects, redirect, redirectFrom, _redirect$to, segments, queryString, routes, chain;

              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    if (path) {
                      _context9.n = 1;
                      break;
                    }

                    console.error('[ion-router] URL is not part of the routing set');
                    return _context9.a(2, false);

                  case 1:
                    // lookup redirect rule
                    redirects = readRedirects(this.el);
                    redirect = findRouteRedirect(path, redirects);
                    redirectFrom = null;

                    if (redirect) {
                      _redirect$to = redirect.to, segments = _redirect$to.segments, queryString = _redirect$to.queryString;
                      this.setPath(segments, direction, queryString);
                      redirectFrom = redirect.from;
                      path = segments;
                    } // lookup route chain


                    routes = readRoutes(this.el);
                    chain = routerPathToChain(path, routes);

                    if (chain) {
                      _context9.n = 2;
                      break;
                    }

                    console.error('[ion-router] the path does not match any route');
                    return _context9.a(2, false);

                  case 2:
                    return _context9.a(2, this.safeWriteNavState(document.body, chain, direction, path, redirectFrom, 0, animation));
                }
              }, _callee9, this);
            }));

            function writeNavStateRoot(_x8, _x9, _x0) {
              return _writeNavStateRoot.apply(this, arguments);
            }

            return writeNavStateRoot;
          }()
        }, {
          key: "safeWriteNavState",
          value: function () {
            var _safeWriteNavState = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee0(node, chain, direction, path, redirectFrom) {
              var index,
                  animation,
                  unlock,
                  changed,
                  _args0 = arguments,
                  _t2;

              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.p = _context0.n) {
                  case 0:
                    index = _args0.length > 5 && _args0[5] !== undefined ? _args0[5] : 0;
                    animation = _args0.length > 6 ? _args0[6] : undefined;
                    _context0.n = 1;
                    return this.lock();

                  case 1:
                    unlock = _context0.v;
                    changed = false;
                    _context0.p = 2;
                    _context0.n = 3;
                    return this.writeNavState(node, chain, direction, path, redirectFrom, index, animation);

                  case 3:
                    changed = _context0.v;
                    _context0.n = 5;
                    break;

                  case 4:
                    _context0.p = 4;
                    _t2 = _context0.v;
                    console.error(_t2);

                  case 5:
                    unlock();
                    return _context0.a(2, changed);
                }
              }, _callee0, this, [[2, 4]]);
            }));

            function safeWriteNavState(_x1, _x10, _x11, _x12, _x13) {
              return _safeWriteNavState.apply(this, arguments);
            }

            return safeWriteNavState;
          }()
        }, {
          key: "lock",
          value: function () {
            var _lock = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee1() {
              var p, resolve;
              return _regenerator().w(function (_context1) {
                while (1) switch (_context1.n) {
                  case 0:
                    p = this.waitPromise;
                    this.waitPromise = new Promise(function (r) {
                      return resolve = r;
                    });

                    if (!(p !== undefined)) {
                      _context1.n = 1;
                      break;
                    }

                    _context1.n = 1;
                    return p;

                  case 1:
                    return _context1.a(2, resolve);
                }
              }, _callee1, this);
            }));

            function lock() {
              return _lock.apply(this, arguments);
            }

            return lock;
          }() // Executes the beforeLeave hook of the source route and the beforeEnter hook of the target route if they exist.
          //
          // When the beforeLeave hook does not return true (to allow navigating) then that value is returned early and the beforeEnter is executed.
          // Otherwise the beforeEnterHook hook of the target route is executed.

        }, {
          key: "runGuards",
          value: function () {
            var _runGuards = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee10() {
              var to,
                  from,
                  routes,
                  fromChain,
                  beforeLeaveHook,
                  canLeave,
                  toChain,
                  beforeEnterHook,
                  _args10 = arguments,
                  _t3;

              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.n) {
                  case 0:
                    to = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : this.getPath();
                    from = _args10.length > 1 ? _args10[1] : undefined;

                    if (from === undefined) {
                      from = parsePath(this.previousPath).segments;
                    }

                    if (!(!to || !from)) {
                      _context10.n = 1;
                      break;
                    }

                    return _context10.a(2, true);

                  case 1:
                    routes = readRoutes(this.el);
                    fromChain = routerPathToChain(from, routes);
                    beforeLeaveHook = fromChain && fromChain[fromChain.length - 1].beforeLeave;

                    if (!beforeLeaveHook) {
                      _context10.n = 3;
                      break;
                    }

                    _context10.n = 2;
                    return beforeLeaveHook();

                  case 2:
                    _t3 = _context10.v;
                    _context10.n = 4;
                    break;

                  case 3:
                    _t3 = true;

                  case 4:
                    canLeave = _t3;

                    if (!(canLeave === false || typeof canLeave === 'object')) {
                      _context10.n = 5;
                      break;
                    }

                    return _context10.a(2, canLeave);

                  case 5:
                    toChain = routerPathToChain(to, routes);
                    beforeEnterHook = toChain && toChain[toChain.length - 1].beforeEnter;
                    return _context10.a(2, beforeEnterHook ? beforeEnterHook() : true);
                }
              }, _callee10, this);
            }));

            function runGuards() {
              return _runGuards.apply(this, arguments);
            }

            return runGuards;
          }()
        }, {
          key: "writeNavState",
          value: function () {
            var _writeNavState2 = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee11(node, chain, direction, path, redirectFrom) {
              var index,
                  animation,
                  routeEvent,
                  changed,
                  _args11 = arguments;
              return _regenerator().w(function (_context11) {
                while (1) switch (_context11.n) {
                  case 0:
                    index = _args11.length > 5 && _args11[5] !== undefined ? _args11[5] : 0;
                    animation = _args11.length > 6 ? _args11[6] : undefined;

                    if (!this.busy) {
                      _context11.n = 1;
                      break;
                    }

                    console.warn('[ion-router] router is busy, transition was cancelled');
                    return _context11.a(2, false);

                  case 1:
                    this.busy = true; // generate route event and emit will change

                    routeEvent = this.routeChangeEvent(path, redirectFrom);

                    if (routeEvent) {
                      this.ionRouteWillChange.emit(routeEvent);
                    }

                    _context11.n = 2;
                    return _writeNavState(node, chain, direction, index, false, animation);

                  case 2:
                    changed = _context11.v;
                    this.busy = false; // emit did change

                    if (routeEvent) {
                      this.ionRouteDidChange.emit(routeEvent);
                    }

                    return _context11.a(2, changed);
                }
              }, _callee11, this);
            }));

            function writeNavState(_x14, _x15, _x16, _x17, _x18) {
              return _writeNavState2.apply(this, arguments);
            }

            return writeNavState;
          }()
        }, {
          key: "setPath",
          value: function setPath(path, direction, queryString) {
            this.state++;
            writePath(window.history, this.root, this.useHash, path, direction, this.state, queryString);
          }
        }, {
          key: "getPath",
          value: function getPath() {
            return readPath(window.location, this.root, this.useHash);
          }
        }, {
          key: "routeChangeEvent",
          value: function routeChangeEvent(path, redirectFromPath) {
            var from = this.previousPath;
            var to = generatePath(path);
            this.previousPath = to;

            if (to === from) {
              return null;
            }

            var redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
            return {
              from: from,
              redirectedFrom: redirectedFrom,
              to: to
            };
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }]);
      }();

      var routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";

      var RouterLink = /*#__PURE__*/function () {
        function RouterLink(hostRef) {
          var _this2 = this;

          _classCallCheck(this, RouterLink);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * When using a router, it specifies the transition direction when navigating to
           * another page using `href`.
           */

          this.routerDirection = 'forward';

          this.onClick = function (ev) {
            Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["o"])(_this2.href, ev, _this2.routerDirection, _this2.routerAnimation);
          };
        }

        return _createClass(RouterLink, [{
          key: "render",
          value: function render() {
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
            var attrs = {
              href: this.href,
              rel: this.rel,
              target: this.target
            };
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick,
              "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color, _defineProperty(_defineProperty({}, mode, true), 'ion-activatable', true))
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", Object.assign({}, attrs), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
          }
        }]);
      }();

      RouterLink.style = routerLinkCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=29-es5.js.map