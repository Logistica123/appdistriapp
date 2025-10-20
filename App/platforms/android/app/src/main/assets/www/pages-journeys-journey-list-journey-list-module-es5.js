(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-journeys-journey-list-journey-list-module"], {
    /***/
    "dgk+":
    /*!******************************************************************!*\
      !*** ./src/app/pages/journeys/journey-list/journey-list.page.ts ***!
      \******************************************************************/

    /*! exports provided: JourneyListPage */

    /***/
    function dgk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JourneyListPage", function () {
        return JourneyListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../components/toast/toast.component */
      "COqc");
      /* harmony import */


      var _delivery_map_delivery_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../delivery-map/delivery-map.page */
      "qM3D");
      /* harmony import */


      var _journey_detail_journey_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../journey-detail/journey-detail.page */
      "qGJ6");
      /* harmony import */


      var _journey_form_journey_form_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../journey-form/journey-form.page */
      "RV/N");
      /* harmony import */


      var _services_v1_driver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../services/v1/driver.service */
      "rTgA");
      /* harmony import */


      var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../services/v1/geolocation.service */
      "3Cxn");
      /* harmony import */


      var _services_v1_location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../services/v1/location.service */
      "fRX6");
      /* harmony import */


      var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../services/v1/order.service */
      "EXzW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function JourneyListPage_p_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No tienes viajes pendientes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function JourneyListPage_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-progress-bar", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function JourneyListPage_ion_item_sliding_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item-sliding");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function JourneyListPage_ion_item_sliding_17_Template_ion_item_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);

            var order_r7 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r9.viewOrderDetail(order_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "ion-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-col", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-badge", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ion-badge", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](22, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "ion-reorder", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ion-item-options");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "ion-item-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function JourneyListPage_ion_item_sliding_17_Template_ion_item_option_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);

            var order_r7 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r11.presentDeleteOrderAlertConfirm(order_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](26, "ion-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 6, order_r7.location.name), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](i_r8 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](16, 8, order_r7.location.address), ". ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](17, 10, order_r7.location.city), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("color", order_r7.status === "delivered" ? "primary" : order_r7.status === "skipped" ? "warning" : "danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](22, 12, order_r7.status_es), " ");
        }
      }

      function JourneyListPage_ion_icon_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-icon", 28);
        }
      }

      function JourneyListPage_ion_spinner_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-spinner", 29);
        }
      }

      function JourneyListPage_ion_label_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Optimizar");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function JourneyListPage_ion_label_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Optimizando...");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      var JourneyListPage = /*#__PURE__*/function () {
        function JourneyListPage(modalController, locationService, alertController, loadingController, geolocation, toastComponent, geolocationService, driverService, router, orderService) {
          _classCallCheck(this, JourneyListPage);

          this.modalController = modalController;
          this.locationService = locationService;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.geolocation = geolocation;
          this.toastComponent = toastComponent;
          this.geolocationService = geolocationService;
          this.driverService = driverService;
          this.router = router;
          this.orderService = orderService;
          this.orders = [];
          this.dateFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.date = new Date();
          this.loading = true;
          this.optimizingOrders = false;
        }

        return _createClass(JourneyListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.driverSubscription = this.driverService.getDriver$().subscribe(function (driver) {
              if (driver) {
                _this.driver = driver;
              } else {
                _this.driverService.getProfile().subscribe(function (response) {
                  _this.driver = response.driver;
                });
              }
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.date = new Date();
            this.dateFC.setValue(this.date.toISOString());
            this.getOrdersByDate();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.driverSubscription) {
              this.driverSubscription.unsubscribe();
            }
          }
        }, {
          key: "doReorder",
          value: function doReorder(ev) {
            this.swapArrayElement(ev.detail.from, ev.detail.to);
            ev.detail.complete();
          }
        }, {
          key: "swapArrayElement",
          value: function swapArrayElement(from, to) {
            var temp = this.orders[from];
            this.orders[from] = this.orders[to];
            this.orders[to] = temp;
          }
        }, {
          key: "addLocation",
          value: function addLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal, _yield$modal$onDidDis, data;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.modalController.create({
                      component: _journey_form_journey_form_page__WEBPACK_IMPORTED_MODULE_8__["JourneyFormPage"]
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    _context.n = 3;
                    return modal.onDidDismiss();

                  case 3:
                    _yield$modal$onDidDis = _context.v;
                    data = _yield$modal$onDidDis.data;

                    if (data === null || data === void 0 ? void 0 : data.hasNewOrder) {
                      this.getOrdersByDate();
                    }

                  case 4:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "viewOrderDetail",
          value: function viewOrderDetail(order) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var modal, _yield$modal$onWillDi, data;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.modalController.create({
                      component: _journey_detail_journey_detail_page__WEBPACK_IMPORTED_MODULE_7__["JourneyDetailPage"],
                      componentProps: {
                        order: order
                      }
                    });

                  case 1:
                    modal = _context2.v;
                    _context2.n = 2;
                    return modal.present();

                  case 2:
                    _context2.n = 3;
                    return modal.onWillDismiss();

                  case 3:
                    _yield$modal$onWillDi = _context2.v;
                    data = _yield$modal$onWillDi.data;

                    if (data === null || data === void 0 ? void 0 : data.success) {//
                    }

                  case 4:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getOrdersByDate",
          value: function getOrdersByDate() {
            var _this2 = this;

            console.log('getting orders by date...');
            this.orders = [];
            this.loading = true;
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            this.orderService.getOrdersByDate('journey', day, month, year).subscribe(function (response) {
              _this2.orders = response.orders;
              _this2.loading = false;
            }, function (error) {
              _this2.loading = false;
            });
          }
        }, {
          key: "onDateChange",
          value: function onDateChange(event) {
            this.date = new Date(event.detail.value);
            this.getOrdersByDate();
          }
        }, {
          key: "showMap",
          value: function showMap() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var alert, modal, _yield$modal$onDidDis2, data;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    if (!(this.orders.length <= 0)) {
                      _context3.n = 3;
                      break;
                    }

                    _context3.n = 1;
                    return this.alertController.create({
                      message: 'No tienes paquetes pendientes por entregar',
                      buttons: ['OK']
                    });

                  case 1:
                    alert = _context3.v;
                    _context3.n = 2;
                    return alert.present();

                  case 2:
                    _context3.n = 7;
                    break;

                  case 3:
                    _context3.n = 4;
                    return this.modalController.create({
                      component: _delivery_map_delivery_map_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryMapPage"],
                      componentProps: {
                        orders: this.orders
                      }
                    });

                  case 4:
                    modal = _context3.v;
                    _context3.n = 5;
                    return modal.present();

                  case 5:
                    _context3.n = 6;
                    return modal.onDidDismiss();

                  case 6:
                    _yield$modal$onDidDis2 = _context3.v;
                    data = _yield$modal$onDidDis2.data;
                    this.getOrdersByDate();

                  case 7:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "checkDriverPosition",
          value: function checkDriverPosition() {
            var _this3 = this;

            var _a, _b, _c, _d;

            console.log(this.geolocationService.getDriverPosition());
            this.driverPosition = this.geolocationService.getDriverPosition();

            if (!(((_b = (_a = this.driverPosition) === null || _a === void 0 ? void 0 : _a.coords) === null || _b === void 0 ? void 0 : _b.latitude) && ((_d = (_c = this.driverPosition) === null || _c === void 0 ? void 0 : _c.coords) === null || _d === void 0 ? void 0 : _d.longitude))) {
              this.geolocationService.getCurrentPosition().then(function (driverPosition) {
                var _a, _b, _c, _d;

                _this3.driverPosition = driverPosition;

                if (!(((_b = (_a = _this3.driverPosition) === null || _a === void 0 ? void 0 : _a.coords) === null || _b === void 0 ? void 0 : _b.latitude) && ((_d = (_c = _this3.driverPosition) === null || _c === void 0 ? void 0 : _c.coords) === null || _d === void 0 ? void 0 : _d.longitude))) {
                  _this3.toastComponent.presentToast("No se pudo obtener ubicaci\xF3n actual. Por favor concede los permisos\n          para que la aplicaci\xF3n pueda utilizar el GPS de su dispositivo m\xF3vil", 'middle', 3500);

                  return false;
                } else {
                  return true;
                }
              });
            } else {
              return true;
            }
          }
        }, {
          key: "checkUndeliveredOrders",
          value: function checkUndeliveredOrders() {
            var undeliveredOrders = this.orders.filter(function (order) {
              return order.status !== 'delivered';
            });

            if (undeliveredOrders.length <= 0) {
              this.toastComponent.presentToast("No hay paquetes pendientes por entregar", 'middle', 3500);
            }

            return undeliveredOrders;
          }
        }, {
          key: "optimizeOrders",
          value: function optimizeOrders() {
            var _a, _b, _c, _d, _e, _f;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this4 = this;

              var undeliveredOrders, originLat, originLng, lat, lng, body;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    undeliveredOrders = this.checkUndeliveredOrders();
                    originLat = (_a = this.driver) === null || _a === void 0 ? void 0 : _a.start_lat;
                    originLng = (_b = this.driver) === null || _b === void 0 ? void 0 : _b.start_lng;

                    if (!(originLat === undefined || originLat === null || originLng === undefined || originLng === null)) {
                      _context4.n = 2;
                      break;
                    }

                    if (this.checkDriverPosition()) {
                      _context4.n = 1;
                      break;
                    }

                    return _context4.a(2);

                  case 1:
                    originLat = (_d = (_c = this.driverPosition) === null || _c === void 0 ? void 0 : _c.coords) === null || _d === void 0 ? void 0 : _d.latitude;
                    originLng = (_f = (_e = this.driverPosition) === null || _e === void 0 ? void 0 : _e.coords) === null || _f === void 0 ? void 0 : _f.longitude;

                  case 2:
                    if (undeliveredOrders.length > 0 && originLat !== undefined && originLat !== null && originLng !== undefined && originLng !== null) {
                      lat = Number(originLat);
                      lng = Number(originLng);
                      body = {
                        lat: lat,
                        lng: lng,
                        orders_ids: undeliveredOrders.map(function (order) {
                          return order.id;
                        })
                      };
                      console.log(body);
                      this.optimizingOrders = true;
                      this.orderService.optimizeOrders(body).subscribe(function (response) {
                        _this4.orders = response.orders;
                        _this4.optimizingOrders = false;

                        _this4.toastComponent.presentToast("Ruta optimizada", 'bottom', 3500);
                      }, function (error) {
                        _this4.optimizingOrders = false;
                      });
                    } else if (undeliveredOrders.length > 0) {
                      this.toastComponent.presentToast('No se pudo determinar tu punto de partida. Configúralo en tu perfil o habilita el GPS.', 'middle', 3500);
                    }

                  case 3:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentDeleteOrderAlertConfirm",
          value: function presentDeleteOrderAlertConfirm(order) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this5 = this;

              var alert;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.alertController.create({
                      header: '¿Desea eliminar esta ubicación de su hoja de ruta?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {//
                        }
                      }, {
                        text: 'Sí',
                        handler: function handler() {
                          _this5.deleteOrder(order);
                        }
                      }]
                    });

                  case 1:
                    alert = _context5.v;
                    _context5.n = 2;
                    return alert.present();

                  case 2:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "deleteOrder",
          value: function deleteOrder(order) {
            var _this6 = this;

            this.orderService.deleteOrder(order).subscribe(function (response) {
              _this6.getOrdersByDate();
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this7 = this;

            console.log('Begin async operation');
            setTimeout(function () {
              console.log('Async operation has ended');

              _this7.getOrdersByDate();

              event.target.complete();
            }, 2000);
          }
        }]);
      }();

      JourneyListPage.ɵfac = function JourneyListPage_Factory(t) {
        return new (t || JourneyListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_location_service__WEBPACK_IMPORTED_MODULE_11__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_5__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_10__["GeolocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_driver_service__WEBPACK_IMPORTED_MODULE_9__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"]));
      };

      JourneyListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
        type: JourneyListPage,
        selectors: [["app-journey-list"]],
        viewQuery: function JourneyListPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonReorderGroup"], 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.reorderGroup = _t.first);
          }
        },
        decls: 31,
        vars: 8,
        consts: [["slot", "start"], ["autoHide", "false"], ["lines", "none", 1, "custom-date-item"], ["displayFormat", "DD MMMM YYYY", "placeholder", "Seleccione fecha", "doneText", "ok", "cancelText", "cancelar", "monthNames", "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre", "monthShortNames", "ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic", "dayNames", "domingo, lunes, martes, mi\xE9rcoles, jueves, viernes, s\xE1bado, domingo", "dayShortNames", "dom, lun, mar, mi\xE9, jue, vie, s\xE1b, dom", 3, "formControl", "ionChange"], [1, "ion-text-center", "ion-padding-bottom"], [1, "custom-button", 3, "click"], ["slot", "fixed", 3, "ionRefresh"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["disabled", "false", 3, "ionItemReorder"], [4, "ngFor", "ngForOf"], ["slot", "bottom", "color", "light"], [3, "click"], ["name", "navigate-circle"], ["name", "filter", 4, "ngIf"], ["name", "bubbles", 4, "ngIf"], [4, "ngIf"], [1, "ion-padding", "ion-text-center"], ["type", "indeterminate"], ["size", "1"], ["name", "pin", "color", "dark"], ["size", "9"], ["size", "2"], ["color", "primary"], [1, "ion-text-wrap"], [3, "color"], ["slot", "end"], ["color", "light", 3, "click"], ["slot", "end", "name", "trash"], ["name", "filter"], ["name", "bubbles"]],
        template: function JourneyListPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-menu-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "VIAJES");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-datetime", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function JourneyListPage_Template_ion_datetime_ionChange_8_listener($event) {
              return ctx.onDateChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function JourneyListPage_Template_ion_button_click_10_listener() {
              return ctx.addLocation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, " AGREGAR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-refresher", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionRefresh", function JourneyListPage_Template_ion_refresher_ionRefresh_12_listener($event) {
              return ctx.doRefresh($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "ion-refresher-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, JourneyListPage_p_14_Template, 3, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, JourneyListPage_div_15_Template, 2, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ion-reorder-group", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionItemReorder", function JourneyListPage_Template_ion_reorder_group_ionItemReorder_16_listener($event) {
              return ctx.doReorder($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, JourneyListPage_ion_item_sliding_17_Template, 28, 14, "ion-item-sliding", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ion-tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "ion-tab-bar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "ion-tab-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function JourneyListPage_Template_ion_tab_button_click_22_listener() {
              return ctx.showMap();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Comenzar");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ion-tab-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function JourneyListPage_Template_ion_tab_button_click_26_listener() {
              return ctx.optimizeOrders();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, JourneyListPage_ion_icon_27_Template, 1, 0, "ion-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, JourneyListPage_ion_spinner_28_Template, 1, 0, "ion-spinner", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, JourneyListPage_ion_label_29_Template, 2, 0, "ion-label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, JourneyListPage_ion_label_30_Template, 2, 0, "ion-label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formControl", ctx.dateFC);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.orders.length <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.orders);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.optimizingOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.optimizingOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.optimizingOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.optimizingOrders);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonReorderGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonReorder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSpinner"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["UpperCasePipe"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n  font-family: NunitoSans, sans-serif;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-item-option[_ngcontent-%COMP%] {\n  --background: white;\n  --color: #000;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3VyYmFuLWRpc3RyaWJ1dGlvbi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vam91cm5leS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBQXRCQTtFQUNFLHlCQUFBO0FBeUJGOztBQXRCQTtFQUNFLFdBQUE7QUF5QkYiLCJmaWxlIjoiam91cm5leS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjdmOGY5O1xuICBmb250LWZhbWlseTogTnVuaXRvU2Fucywgc2Fucy1zZXJpZjtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3NTdkZmI7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uZm9ybS1ncm91cCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pb24taXRlbS1vcHRpb24ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMDAwO1xufVxuXG4uY3VzdG9tLWRhdGUtaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvdXJiYW4tZGlzdHJpYnV0aW9uLnNjc3NcIjtcblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "kOqg":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/journeys/journey-list/journey-list-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: JourneyListPageRoutingModule */

    /***/
    function kOqg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JourneyListPageRoutingModule", function () {
        return JourneyListPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _journey_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./journey-list.page */
      "dgk+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _journey_list_page__WEBPACK_IMPORTED_MODULE_1__["JourneyListPage"]
      }];

      var JourneyListPageRoutingModule = /*#__PURE__*/_createClass(function JourneyListPageRoutingModule() {
        _classCallCheck(this, JourneyListPageRoutingModule);
      });

      JourneyListPageRoutingModule.ɵfac = function JourneyListPageRoutingModule_Factory(t) {
        return new (t || JourneyListPageRoutingModule)();
      };

      JourneyListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: JourneyListPageRoutingModule
      });
      JourneyListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JourneyListPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "mHeH":
    /*!********************************************************************!*\
      !*** ./src/app/pages/journeys/journey-list/journey-list.module.ts ***!
      \********************************************************************/

    /*! exports provided: JourneyListPageModule */

    /***/
    function mHeH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JourneyListPageModule", function () {
        return JourneyListPageModule;
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


      var _journey_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./journey-list-routing.module */
      "kOqg");
      /* harmony import */


      var _journey_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./journey-list.page */
      "dgk+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var JourneyListPageModule = /*#__PURE__*/_createClass(function JourneyListPageModule() {
        _classCallCheck(this, JourneyListPageModule);
      });

      JourneyListPageModule.ɵfac = function JourneyListPageModule_Factory(t) {
        return new (t || JourneyListPageModule)();
      };

      JourneyListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: JourneyListPageModule
      });
      JourneyListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _journey_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["JourneyListPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](JourneyListPageModule, {
          declarations: [_journey_list_page__WEBPACK_IMPORTED_MODULE_4__["JourneyListPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _journey_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["JourneyListPageRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-journeys-journey-list-journey-list-module-es5.js.map