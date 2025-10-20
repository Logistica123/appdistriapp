(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-orders-map-all-orders-map-module"], {
    /***/
    "Eyzd":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/all-orders-map/all-orders-map-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AllOrdersMapPageRoutingModule */

    /***/
    function Eyzd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllOrdersMapPageRoutingModule", function () {
        return AllOrdersMapPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _all_orders_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./all-orders-map.page */
      "fqJu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _all_orders_map_page__WEBPACK_IMPORTED_MODULE_1__["AllOrdersMapPage"]
      }];

      var AllOrdersMapPageRoutingModule = /*#__PURE__*/_createClass(function AllOrdersMapPageRoutingModule() {
        _classCallCheck(this, AllOrdersMapPageRoutingModule);
      });

      AllOrdersMapPageRoutingModule.ɵfac = function AllOrdersMapPageRoutingModule_Factory(t) {
        return new (t || AllOrdersMapPageRoutingModule)();
      };

      AllOrdersMapPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AllOrdersMapPageRoutingModule
      });
      AllOrdersMapPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AllOrdersMapPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "F1/z":
    /*!***************************************************************!*\
      !*** ./src/app/pages/all-orders-map/all-orders-map.module.ts ***!
      \***************************************************************/

    /*! exports provided: AllOrdersMapPageModule */

    /***/
    function F1_z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllOrdersMapPageModule", function () {
        return AllOrdersMapPageModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _all_orders_map_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./all-orders-map-routing.module */
      "Eyzd");
      /* harmony import */


      var _all_orders_map_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./all-orders-map.page */
      "fqJu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AllOrdersMapPageModule = /*#__PURE__*/_createClass(function AllOrdersMapPageModule() {
        _classCallCheck(this, AllOrdersMapPageModule);
      });

      AllOrdersMapPageModule.ɵfac = function AllOrdersMapPageModule_Factory(t) {
        return new (t || AllOrdersMapPageModule)();
      };

      AllOrdersMapPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AllOrdersMapPageModule
      });
      AllOrdersMapPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _all_orders_map_routing_module__WEBPACK_IMPORTED_MODULE_3__["AllOrdersMapPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AllOrdersMapPageModule, {
          declarations: [_all_orders_map_page__WEBPACK_IMPORTED_MODULE_4__["AllOrdersMapPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _all_orders_map_routing_module__WEBPACK_IMPORTED_MODULE_3__["AllOrdersMapPageRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "fqJu":
    /*!*************************************************************!*\
      !*** ./src/app/pages/all-orders-map/all-orders-map.page.ts ***!
      \*************************************************************/

    /*! exports provided: AllOrdersMapPage */

    /***/
    function fqJu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllOrdersMapPage", function () {
        return AllOrdersMapPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/v1/order.service */
      "EXzW");
      /* harmony import */


      var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/v1/geolocation.service */
      "3Cxn");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/google-maps */
      "tBOM");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var _c0 = ["allOrdersMap"];

      var AllOrdersMapPage = /*#__PURE__*/function () {
        function AllOrdersMapPage(orderService, router, geolocationService) {
          _classCallCheck(this, AllOrdersMapPage);

          this.orderService = orderService;
          this.router = router;
          this.geolocationService = geolocationService;
          this.htmlInfoWindow = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["HtmlInfoWindow"]();
        }

        return _createClass(AllOrdersMapPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.currentOrdersSubscription = this.orderService.getCurrentOrders$().subscribe(function (orders) {
              _this.orders = orders;
              console.log(_this.orders);

              _this.initMap();
            });
            this.driverGeolocationSubscription = this.geolocationService.driverPosition$.subscribe(function (driverPosition) {
              console.log(driverPosition);

              if (driverPosition) {
                _this.driverPosition = driverPosition;

                if (_this.driverMarker) {
                  _this.updateDriverMarkerPosition();
                } else {
                  _this.setDriverMarker();
                }
              }
            });
            this.checkWatchLocationsSubscription();
            this.driverPosition = this.geolocationService.getDriverPosition();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.driverGeolocationSubscription) {
              this.driverGeolocationSubscription.unsubscribe();
            }

            if (this.currentOrdersSubscription) {
              this.currentOrdersSubscription.unsubscribe();
            }
          }
        }, {
          key: "checkWatchLocationsSubscription",
          value: function checkWatchLocationsSubscription() {
            console.log(this.geolocationService.checkWatchLocationsSubscription());

            if (!this.geolocationService.checkWatchLocationsSubscription()) {
              this.geolocationService.watchPosition();
            }
          }
        }, {
          key: "initMap",
          value: function initMap() {
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["Environment"].setEnv({
              API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCQ5AidfjBOg7VI2sgkbpnKHPBGAoLQ15w',
              API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCQ5AidfjBOg7VI2sgkbpnKHPBGAoLQ15w'
            });

            var mapOptions = {
              camera: {
                target: {
                  lat: +this.orders[0].location.lat,
                  lng: +this.orders[0].location.lng
                },
                zoom: 15,
                tilt: 30
              }
            };
            this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMaps"].create('allOrdersMap', mapOptions);
            var center = {
              lat: +this.orders[0].location.lat,
              lng: +this.orders[0].location.lng
            };
            this.map.moveCamera({
              target: center
            });
            this.setDriverMarker();
            this.setAllOrdersMarkers();
          }
        }, {
          key: "setDriverMarker",
          value: function setDriverMarker() {
            var _this2 = this;

            if (this.driverPosition) {
              var driverMarkerPosition = {
                lat: this.driverPosition.coords.latitude,
                lng: this.driverPosition.coords.longitude
              };
              this.map.addMarker({
                icon: {
                  url: './assets/images/navigation_dot.png'
                },
                animation: 'DROP',
                position: driverMarkerPosition
              }).then(function (marker) {
                _this2.driverMarker = marker;
              });
            }
          }
        }, {
          key: "updateDriverMarkerPosition",
          value: function updateDriverMarkerPosition() {
            if (this.driverMarker) {
              var driverPosition = {
                lat: this.driverPosition.coords.latitude,
                lng: this.driverPosition.coords.longitude
              };
              this.driverMarker.setPosition(driverPosition);
            }
          }
        }, {
          key: "setAllOrdersMarkers",
          value: function setAllOrdersMarkers() {
            var e_1, _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this3 = this;

              var i, _b, _c, order, _t2;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    i = 1;
                    _context.p = 1;
                    _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"])(this.orders);

                  case 2:
                    _context.n = 3;
                    return _b.next();

                  case 3:
                    _c = _context.v;

                    if (_c.done) {
                      _context.n = 5;
                      break;
                    }

                    order = _c.value;
                    this.setOrderMarker(order, i);
                    i++;

                  case 4:
                    _context.n = 2;
                    break;

                  case 5:
                    _context.n = 7;
                    break;

                  case 6:
                    _context.p = 6;
                    _t2 = _context.v;
                    e_1 = {
                      error: _t2
                    };

                  case 7:
                    _context.p = 7;
                    _context.p = 8;

                    if (!(_c && !_c.done && (_a = _b["return"]))) {
                      _context.n = 9;
                      break;
                    }

                    _context.n = 9;
                    return _a.call(_b);

                  case 9:
                    _context.p = 9;

                    if (!e_1) {
                      _context.n = 10;
                      break;
                    }

                    throw e_1.error;

                  case 10:
                    return _context.f(9);

                  case 11:
                    return _context.f(7);

                  case 12:
                    setTimeout(function () {
                      _this3.setBounds();
                    }, 1000);

                  case 13:
                    return _context.a(2);
                }
              }, _callee, this, [[8,, 9, 11], [1, 6, 7, 12]]);
            }));
          }
        }, {
          key: "setBounds",
          value: function setBounds() {
            var points = [];
            this.orders.map(function (order) {
              var position = {
                lat: +order.location.lat,
                lng: +order.location.lng
              };
              points.push(position);
            });

            if (this.driverMarker) {
              var driverPosition = {
                lat: this.driverMarker.getPosition().lat,
                lng: this.driverMarker.getPosition().lng
              };
              points.push(driverPosition);
            }

            var bounds = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["LatLngBounds"](points);
            this.map.moveCamera({
              target: bounds
            });
          }
        }, {
          key: "setOrderMarker",
          value: function setOrderMarker(order, i) {
            var _this4 = this;

            console.log(order);
            return new Promise(function (resolve, reject) {
              var url = _this4.getMarkerUrl(order);

              var position = {
                lat: +order.location.lat,
                lng: +order.location.lng
              };

              _this4.map.addMarker({
                icon: {
                  url: url
                },
                animation: 'DROP',
                label: {
                  text: (i + 1).toString(),
                  color: 'black',
                  fontSize: '24px'
                },
                position: position
              }).then(function (marker) {
                marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function (m) {
                  _this4.htmlInfoWindow.close();

                  _this4.setInfoWindowContent(order, i);

                  _this4.htmlInfoWindow.open(marker);
                });
                resolve(marker);
              })["catch"](function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "setInfoWindowContent",
          value: function setInfoWindowContent(order, i) {
            var _this5 = this;

            var frame = document.createElement('div');
            frame.innerHTML = ["<h6 style=\"margin: 0; padding: 0\">Entrega# ".concat(i, "</h6>"), "<h6 style=\"margin: 0; padding: 0\">".concat(order.location.address, "</h6>"), "<p style=\"margin: 0; padding: 0\">".concat(order.receiver, " (").concat(order.phone, ")</p>"), "<p style=\"margin: 0; padding: 0\">".concat(order.description ? order.description : '-', "</p>"), '<span class="close-iw" style="top: 5px; right: 5px; position: absolute">' + '&times' + '</span>'].join('');
            frame.getElementsByClassName('close-iw')[0].addEventListener('click', function () {
              _this5.htmlInfoWindow.close();
            });
            this.htmlInfoWindow.setContent(frame, {
              width: '200px'
            });
          }
        }, {
          key: "getMarkerUrl",
          value: function getMarkerUrl(order) {
            if (order.status === 'not-delivered') {
              // return 'https://maps.google.com/mapfiles/ms/icons/red.png';
              return './assets/markers/red.png';
            } else if (order.status === 'pending') {
              // return 'https://maps.google.com/mapfiles/ms/icons/yellow.png';
              return './assets/markers/yellow.png';
            } // return 'https://maps.google.com/mapfiles/ms/icons/green.png';


            return './assets/markers/green.png';
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigateByUrl('delivery-map/urban-distribution');
          }
        }]);
      }();

      AllOrdersMapPage.ɵfac = function AllOrdersMapPage_Factory(t) {
        return new (t || AllOrdersMapPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"]));
      };

      AllOrdersMapPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AllOrdersMapPage,
        selectors: [["app-all-orders-map"]],
        viewQuery: function AllOrdersMapPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
          }
        },
        decls: 10,
        vars: 0,
        consts: [["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["id", "allOrdersMap"], ["allOrdersMap", ""]],
        template: function AllOrdersMapPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AllOrdersMapPage_Template_ion_button_click_3_listener() {
              return ctx.navigateBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD3rdenes a entregar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"]],
        styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\n#allOrdersMap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FsbC1vcmRlcnMtbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJhbGwtb3JkZXJzLW1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc1N2RmYjtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbiNhbGxPcmRlcnNNYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-all-orders-map-all-orders-map-module-es5.js.map