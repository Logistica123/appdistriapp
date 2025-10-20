(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-delivery-map-delivery-map-module~pages-journeys-journey-list-journey-list-module"], {
    /***/
    "W/WP":
    /*!*******************************************************!*\
      !*** ./src/app/services/utils/call-number.service.ts ***!
      \*******************************************************/

    /*! exports provided: CallNumberService */

    /***/
    function W_WP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallNumberService", function () {
        return CallNumberService;
      });
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "Wwn5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CallNumberService = /*#__PURE__*/function () {
        function CallNumberService(callNumber) {
          _classCallCheck(this, CallNumberService);

          this.callNumber = callNumber;
        }

        return _createClass(CallNumberService, [{
          key: "call",
          value: function call(phoneNumber) {
            this.callNumber.callNumber(phoneNumber, true).then(function (res) {
              return console.log('Launched dialer!', res);
            })["catch"](function (err) {});
          }
        }]);
      }();

      CallNumberService.ɵfac = function CallNumberService_Factory(t) {
        return new (t || CallNumberService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_0__["CallNumber"]));
      };

      CallNumberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CallNumberService,
        factory: CallNumberService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "kvUa":
    /*!****************************************************************************************************!*\
      !*** ./src/app/components/popovers/delivery-priority-select/delivery-priority-select.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: DeliveryPrioritySelectComponent */

    /***/
    function kvUa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryPrioritySelectComponent", function () {
        return DeliveryPrioritySelectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DeliveryPrioritySelectComponent_ion_select_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-select-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1);
        }
      }

      var DeliveryPrioritySelectComponent = /*#__PURE__*/function () {
        function DeliveryPrioritySelectComponent() {
          _classCallCheck(this, DeliveryPrioritySelectComponent);

          this.options = [];
        }

        return _createClass(DeliveryPrioritySelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setOptions();
          }
        }, {
          key: "setOptions",
          value: function setOptions() {
            for (var i = 1; i < this.length; i++) {
              this.options.push(i);
            }
          }
        }, {
          key: "selectOption",
          value: function selectOption(option) {
            console.log(option.detail.value);
            console.log('selected option', option);
          }
        }]);
      }();

      DeliveryPrioritySelectComponent.ɵfac = function DeliveryPrioritySelectComponent_Factory(t) {
        return new (t || DeliveryPrioritySelectComponent)();
      };

      DeliveryPrioritySelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeliveryPrioritySelectComponent,
        selectors: [["app-delivery-priority-select"]],
        inputs: {
          length: "length"
        },
        decls: 6,
        vars: 1,
        consts: [["okText", "Ok", "cancelText", "Cancelar", 3, "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function DeliveryPrioritySelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Seleccione");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function DeliveryPrioritySelectComponent_Template_ion_select_ionChange_4_listener($event) {
              return ctx.selectOption($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DeliveryPrioritySelectComponent_ion_select_option_5_Template, 2, 2, "ion-select-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSelectOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyeS1wcmlvcml0eS1zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "qM3D":
    /*!*********************************************************!*\
      !*** ./src/app/pages/delivery-map/delivery-map.page.ts ***!
      \*********************************************************/

    /*! exports provided: DeliveryMapPage */

    /***/
    function qM3D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryMapPage", function () {
        return DeliveryMapPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/v1/order.service */
      "EXzW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/v1/geolocation.service */
      "3Cxn");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_modals_deliver_order_deliver_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/modals/deliver-order/deliver-order.component */
      "0AvR");
      /* harmony import */


      var _services_utils_call_number_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/utils/call-number.service */
      "W/WP");
      /* harmony import */


      var _components_modals_not_delivered_not_delivered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/modals/not-delivered/not-delivered.component */
      "igBE");
      /* harmony import */


      var _components_popovers_delivery_priority_select_delivery_priority_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/popovers/delivery-priority-select/delivery-priority-select.component */
      "kvUa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_map_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../components/map/map.component */
      "EZtS");

      function DeliveryMapPage_ion_buttons_5_ion_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_ion_buttons_5_ion_button_3_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r14.callNumber(ctx_r14.selectedOrder);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function DeliveryMapPage_ion_buttons_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-buttons", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, DeliveryMapPage_ion_buttons_5_ion_button_3_Template, 2, 0, "ion-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_ion_buttons_5_Template_ion_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r16.viewDeliveryOrderMap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("href", "https://api.whatsapp.com/send/?phone=", ctx_r0.selectedOrder.phone, "&text=Hola");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.selectedOrder);
        }
      }

      function DeliveryMapPage_ion_icon_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 20);
        }
      }

      function DeliveryMapPage_ion_spinner_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-spinner", 21);
        }
      }

      function DeliveryMapPage_ion_label_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Entregar");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function DeliveryMapPage_ion_label_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Entregando...");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function DeliveryMapPage_ion_icon_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 22);
        }
      }

      function DeliveryMapPage_ion_spinner_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-spinner", 21);
        }
      }

      function DeliveryMapPage_ion_label_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No entregado");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function DeliveryMapPage_ion_label_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No entregado...");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function DeliveryMapPage_ion_icon_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 23);
        }
      }

      function DeliveryMapPage_ion_spinner_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-spinner", 21);
        }
      }

      function DeliveryMapPage_ion_label_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Saltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function DeliveryMapPage_ion_label_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Saltando...");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      var DeliveryMapPage = /*#__PURE__*/function () {
        // @ViewChild('deliveryMap', {static: true}) mapElement: ElementRef;
        // map: GoogleMap;
        // driverMarker: Marker;
        // markers: Marker[] = [];
        // circle: Circle;
        function DeliveryMapPage(orderService, router, activatedRoute, callNumberService, modalController, popoverController, geolocationService) {
          _classCallCheck(this, DeliveryMapPage);

          this.orderService = orderService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.callNumberService = callNumberService;
          this.modalController = modalController;
          this.popoverController = popoverController;
          this.geolocationService = geolocationService;
          this.currentOrderIndex = 0;
          this.notDeliveringOrder = false;
          this.deliveringOrder = false;
          this.skipping = false;
          this.radius = 1500;
          this.showAllMarkersFlag = false;
          this.markersOrders = [];
          this.ordersOptimized = false;
          this.type = this.activatedRoute.snapshot.paramMap.get('type');
        }

        return _createClass(DeliveryMapPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {//
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.currentOrdersSubscription = this.orderService.getCurrentOrders$().subscribe(function (orders) {
              _this.orders = orders;
              _this.ordersOptimized = false;
              console.log(_this.orders);

              _this.tryOptimizeOrders();

              _this.currentOrder = _this.orders[_this.currentOrderIndex];
              _this.selectedOrder = _this.currentOrder;
              console.log(_this.currentOrder);

              _this.findNearbyMarkers();
            });
            this.checkWatchLocationsSubscription();
            this.driverPosition = this.geolocationService.getDriverPosition();
            this.driverGeolocationSubscription = this.geolocationService.driverPosition$.subscribe(function (driverPosition) {
              if (driverPosition) {
                _this.driverPosition = driverPosition;

                _this.tryOptimizeOrders();
              }
            });
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
          key: "viewDeliveryOrderMap",
          value: function viewDeliveryOrderMap() {
            // this.showAllMarkers = !this.showAllMarkers;
            // this.nearbyOrders = this.orders;
            this.router.navigateByUrl('all-orders-map');
          }
        }, {
          key: "selectOrder",
          value: function selectOrder(ev) {
            this.selectedOrder = ev;
            console.log(this.selectedOrder);
          }
        }, {
          key: "deliverOrder",
          value: function deliverOrder() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal, _yield$modal$onWillDi, data;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.modalController.create({
                      component: _components_modals_deliver_order_deliver_order_component__WEBPACK_IMPORTED_MODULE_5__["DeliverOrderComponent"],
                      componentProps: {
                        order: this.selectedOrder
                      }
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    _context.n = 3;
                    return modal.onWillDismiss();

                  case 3:
                    _yield$modal$onWillDi = _context.v;
                    data = _yield$modal$onWillDi.data;

                    if (data === null || data === void 0 ? void 0 : data.success) {
                      this.selectedOrder.status = 'delivered';
                      this.selectedOrder.status_es = 'entregada';
                      this.skip();
                    }

                  case 4:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showNotDeliverOptions",
          value: function showNotDeliverOptions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var modal, _yield$modal$onWillDi2, data;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.modalController.create({
                      component: _components_modals_not_delivered_not_delivered_component__WEBPACK_IMPORTED_MODULE_7__["NotDeliveredComponent"],
                      cssClass: 'modal-not-deliver-options',
                      componentProps: {
                        order: this.selectedOrder
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
                    _yield$modal$onWillDi2 = _context2.v;
                    data = _yield$modal$onWillDi2.data;

                    if (data === null || data === void 0 ? void 0 : data.success) {
                      this.selectedOrder.status = 'not-delivered';
                      this.selectedOrder.status_es = 'no entregada';
                      this.skip();
                    }

                  case 4:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "showDeliveryOrderOptions",
          value: function showDeliveryOrderOptions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var popover, _yield$popover$onDidD, data;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.popoverController.create({
                      component: _components_popovers_delivery_priority_select_delivery_priority_select_component__WEBPACK_IMPORTED_MODULE_8__["DeliveryPrioritySelectComponent"],
                      componentProps: {
                        length: this.orders.length
                      }
                    });

                  case 1:
                    popover = _context3.v;
                    _context3.n = 2;
                    return popover.present();

                  case 2:
                    _context3.n = 3;
                    return popover.onDidDismiss();

                  case 3:
                    _yield$popover$onDidD = _context3.v;
                    data = _yield$popover$onDidD.data;
                    console.log(data);

                  case 4:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "callNumber",
          value: function callNumber(order) {
            this.callNumberService.call(order.phone);
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.type === 'urban-distribution' ? this.router.navigateByUrl('urban-distribution-list') : this.router.navigateByUrl('journey-list');
          }
        }, {
          key: "skip",
          value: function skip() {
            this.currentOrderIndex + 1 >= this.orders.length ? this.currentOrderIndex = 0 : this.currentOrderIndex++;
            this.currentOrder = this.orders[this.currentOrderIndex];
            this.selectedOrder = this.currentOrder;
            this.findNearbyMarkers();
          }
        }, {
          key: "tryOptimizeOrders",
          value: function tryOptimizeOrders() {
            var _a, _b;

            if (this.ordersOptimized) {
              return;
            }

            if (!this.orders || this.orders.length === 0) {
              return;
            }

            if (!this.driverPosition || !this.driverPosition.coords) {
              return;
            }

            if (!window.google || !((_b = (_a = google.maps) === null || _a === void 0 ? void 0 : _a.geometry) === null || _b === void 0 ? void 0 : _b.spherical)) {
              return;
            }

            var optimized = this.getOptimizedOrderSequence();

            if (optimized.length === this.orders.length) {
              this.orders = optimized;
              this.currentOrderIndex = 0;
              this.currentOrder = this.orders[this.currentOrderIndex];
              this.selectedOrder = this.currentOrder;
              this.ordersOptimized = true;
            }
          }
        }, {
          key: "getOptimizedOrderSequence",
          value: function getOptimizedOrderSequence() {
            var remaining = _toConsumableArray(this.orders);

            var optimized = [];
            var currentPoint = new google.maps.LatLng(this.driverPosition.coords.latitude, this.driverPosition.coords.longitude);

            var _loop = function _loop() {
              var nearestIdx = 0;
              var nearestDistance = Number.POSITIVE_INFINITY;
              remaining.forEach(function (order, index) {
                var _a, _b;

                if (!((_a = order === null || order === void 0 ? void 0 : order.location) === null || _a === void 0 ? void 0 : _a.lat) || !((_b = order === null || order === void 0 ? void 0 : order.location) === null || _b === void 0 ? void 0 : _b.lng)) {
                  return;
                }

                var orderPoint = new google.maps.LatLng(+order.location.lat, +order.location.lng);
                var distance = google.maps.geometry.spherical.computeDistanceBetween(currentPoint, orderPoint);

                if (distance < nearestDistance) {
                  nearestDistance = distance;
                  nearestIdx = index;
                }
              });
              var nextOrder = remaining.splice(nearestIdx, 1)[0];
              optimized.push(nextOrder);
              currentPoint = new google.maps.LatLng(+nextOrder.location.lat, +nextOrder.location.lng);
            };

            while (remaining.length > 0) {
              _loop();
            }

            return optimized;
          }
        }, {
          key: "findNearbyMarkers",
          value: function findNearbyMarkers() {
            var _this2 = this;

            console.log('finding nearby orders...');
            var anotherOrders = this.orders.filter(function (order) {
              return order.id !== +_this2.currentOrder.id;
            });
            var circle = new google.maps.Circle({
              strokeColor: 'black',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: 'blue',
              fillOpacity: 0.35,
              center: new google.maps.LatLng(+this.currentOrder.location.lat, +this.currentOrder.location.lng),
              radius: this.radius
            });
            this.nearbyOrders = anotherOrders.filter(function (order) {
              return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(+order.location.lat, +order.location.lng), circle.getCenter()) <= _this2.radius;
            });
            this.updateMarkersOrders();
          }
        }, {
          key: "toggleAllMarkers",
          value: function toggleAllMarkers() {
            this.showAllMarkersFlag = !this.showAllMarkersFlag;
            this.updateMarkersOrders();
          }
        }, {
          key: "updateMarkersOrders",
          value: function updateMarkersOrders() {
            this.showAllMarkersFlag ? this.showAllMarkers() : this.hideAllMarkers();
          }
        }, {
          key: "showAllMarkers",
          value: function showAllMarkers() {
            var _this3 = this;

            console.log(this.nearbyOrders);
            this.markersOrders = this.orders.filter(function (order) {
              return order.id !== _this3.currentOrder.id;
            });
          }
        }, {
          key: "hideAllMarkers",
          value: function hideAllMarkers() {
            console.log(this.nearbyOrders);
            this.markersOrders = [];
          }
        }]);
      }();

      DeliveryMapPage.ɵfac = function DeliveryMapPage_Factory(t) {
        return new (t || DeliveryMapPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_utils_call_number_service__WEBPACK_IMPORTED_MODULE_6__["CallNumberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_v1_geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"]));
      };

      DeliveryMapPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: DeliveryMapPage,
        selectors: [["app-delivery-map"]],
        decls: 40,
        vars: 23,
        consts: [["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["slot", "end", 4, "ngIf"], [3, "currentOrder", "nearbyOrders", "markersOrders", "driverPosition", "orders", "radius", "deliverOrderEvent", "notDeliverOrderEvent", "updateDeliveryOrderEvent", "selectOrderEvent"], [1, "ion-text-center"], [1, "ion-no-margin"], [1, "ion-no-padding"], ["size", "4", 1, "ion-no-padding"], ["name", "checkmark-done", 4, "ngIf"], ["name", "bubbles", 4, "ngIf"], [4, "ngIf"], ["name", "alert-circle", 4, "ngIf"], ["name", "arrow-forward-circle", 4, "ngIf"], ["slot", "end"], [3, "href"], ["slot", "icon-only", "name", "logo-whatsapp"], [3, "click", 4, "ngIf"], ["slot", "icon-only", "name", "map-outline"], ["slot", "icon-only", "name", "call-outline"], ["name", "checkmark-done"], ["name", "bubbles"], ["name", "alert-circle"], ["name", "arrow-forward-circle"]],
        template: function DeliveryMapPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_Template_ion_button_click_3_listener() {
              return ctx.navigateBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, DeliveryMapPage_ion_buttons_5_Template, 6, 2, "ion-buttons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Mapa de entregas");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "app-map", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("deliverOrderEvent", function DeliveryMapPage_Template_app_map_deliverOrderEvent_9_listener() {
              return ctx.deliverOrder();
            })("notDeliverOrderEvent", function DeliveryMapPage_Template_app_map_notDeliverOrderEvent_9_listener() {
              return ctx.showNotDeliverOptions();
            })("updateDeliveryOrderEvent", function DeliveryMapPage_Template_app_map_updateDeliveryOrderEvent_9_listener() {
              return ctx.showDeliveryOrderOptions();
            })("selectOrderEvent", function DeliveryMapPage_Template_app_map_selectOrderEvent_9_listener($event) {
              return ctx.selectOrder($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "ion-grid", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "ion-tab-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_Template_ion_tab_button_click_23_listener() {
              return ctx.deliverOrder();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, DeliveryMapPage_ion_icon_24_Template, 1, 0, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, DeliveryMapPage_ion_spinner_25_Template, 1, 0, "ion-spinner", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, DeliveryMapPage_ion_label_26_Template, 2, 0, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, DeliveryMapPage_ion_label_27_Template, 2, 0, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "ion-tab-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_Template_ion_tab_button_click_29_listener() {
              return ctx.showNotDeliverOptions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, DeliveryMapPage_ion_icon_30_Template, 1, 0, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, DeliveryMapPage_ion_spinner_31_Template, 1, 0, "ion-spinner", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, DeliveryMapPage_ion_label_32_Template, 2, 0, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, DeliveryMapPage_ion_label_33_Template, 2, 0, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "ion-tab-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DeliveryMapPage_Template_ion_tab_button_click_35_listener() {
              return ctx.skip();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, DeliveryMapPage_ion_icon_36_Template, 1, 0, "ion-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, DeliveryMapPage_ion_spinner_37_Template, 1, 0, "ion-spinner", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, DeliveryMapPage_ion_label_38_Template, 2, 0, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, DeliveryMapPage_ion_label_39_Template, 2, 0, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selectedOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentOrder", ctx.currentOrder)("nearbyOrders", ctx.nearbyOrders)("markersOrders", ctx.markersOrders)("driverPosition", ctx.driverPosition)("orders", ctx.orders)("radius", ctx.radius);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.selectedOrder == null ? null : ctx.selectedOrder.location.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx.selectedOrder == null ? null : ctx.selectedOrder.receiver, " (", ctx.selectedOrder == null ? null : ctx.selectedOrder.phone, ") ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx.selectedOrder == null ? null : ctx.selectedOrder.description) ? ctx.selectedOrder == null ? null : ctx.selectedOrder.description : " -");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.deliveringOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.deliveringOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.deliveringOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.deliveringOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.notDeliveringOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.notDeliveringOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.notDeliveringOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.notDeliveringOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.skipping);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.skipping);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.skipping);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.skipping);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_11__["MapComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"]],
        styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\n#deliveryMap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RlbGl2ZXJ5LW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBSkYiLCJmaWxlIjoiZGVsaXZlcnktbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLy8tLWJhY2tncm91bmQ6ICNmN2Y4Zjk7XG4gIC8vZm9udC1mYW1pbHk6IE51bml0b1NhbnMsICdzYW5zLXNlcmlmJztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3NTdkZmI7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4jZGVsaXZlcnlNYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-delivery-map-delivery-map-module~pages-journeys-journey-list-journey-list-module-es5.js.map