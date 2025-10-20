(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-delivery-order-map-delivery-order-map-module"], {
    /***/
    "DKCL":
    /*!*************************************************!*\
      !*** ./src/app/services/v1/delivery.service.ts ***!
      \*************************************************/

    /*! exports provided: DeliveryService */

    /***/
    function DKCL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryService", function () {
        return DeliveryService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DeliveryService = /*#__PURE__*/_createClass(function DeliveryService() {
        _classCallCheck(this, DeliveryService);

        // type: this.type,
        // orders: this.orders,
        // currentOrder: this.currentOrder
        this.orders = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.currentOrder = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
      });

      DeliveryService.ɵfac = function DeliveryService_Factory(t) {
        return new (t || DeliveryService)();
      };

      DeliveryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DeliveryService,
        factory: DeliveryService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "GJSH":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/delivery-order-map/delivery-order-map.module.ts ***!
      \***********************************************************************/

    /*! exports provided: DeliveryOrderMapPageModule */

    /***/
    function GJSH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryOrderMapPageModule", function () {
        return DeliveryOrderMapPageModule;
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


      var _delivery_order_map_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./delivery-order-map-routing.module */
      "zc+D");
      /* harmony import */


      var _delivery_order_map_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./delivery-order-map.page */
      "GvAp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DeliveryOrderMapPageModule = /*#__PURE__*/_createClass(function DeliveryOrderMapPageModule() {
        _classCallCheck(this, DeliveryOrderMapPageModule);
      });

      DeliveryOrderMapPageModule.ɵfac = function DeliveryOrderMapPageModule_Factory(t) {
        return new (t || DeliveryOrderMapPageModule)();
      };

      DeliveryOrderMapPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: DeliveryOrderMapPageModule
      });
      DeliveryOrderMapPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _delivery_order_map_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeliveryOrderMapPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DeliveryOrderMapPageModule, {
          declarations: [_delivery_order_map_page__WEBPACK_IMPORTED_MODULE_4__["DeliveryOrderMapPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _delivery_order_map_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeliveryOrderMapPageRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "GvAp":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/delivery-order-map/delivery-order-map.page.ts ***!
      \*********************************************************************/

    /*! exports provided: DeliveryOrderMapPage */

    /***/
    function GvAp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryOrderMapPage", function () {
        return DeliveryOrderMapPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_v1_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/v1/order.service */
      "EXzW");
      /* harmony import */


      var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/google-maps */
      "tBOM");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _services_v1_delivery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/v1/delivery.service */
      "DKCL");

      var _c0 = ["deliveryOrderMarkersMap"];

      var DeliveryOrderMapPage = /*#__PURE__*/function () {
        function DeliveryOrderMapPage(modalController, geolocation, deliveryService, orderService) {
          _classCallCheck(this, DeliveryOrderMapPage);

          this.modalController = modalController;
          this.geolocation = geolocation;
          this.deliveryService = deliveryService;
          this.orderService = orderService;
          this.orders = [];
          this.markers = [];
          this.radius = 250;
          this.htmlInfoWindow = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["HtmlInfoWindow"]();
        }

        return _createClass(DeliveryOrderMapPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('delivery-order-map...!');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            setTimeout(function () {
              _this.deliveryService.currentOrder.subscribe(function (currentOrder) {
                if (currentOrder) {
                  _this.currentOrder = currentOrder;

                  _this.deliveryService.orders.subscribe(function (orders) {
                    if (orders.length > 0) {
                      _this.orders = orders;

                      _this.loadMap();
                    }
                  });
                }
              });
            }, 2500);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            if (this.watchLocationObservable) {
              this.watchLocationObservable.unsubscribe();
            }
          }
        }, {
          key: "watchLocation",
          value: function watchLocation() {
            var _this2 = this;

            this.watchLocationObservable = this.geolocation.watchPosition({
              enableHighAccuracy: true
            }).subscribe(function (position) {
              console.log('got in modal ***__');

              if (position && position.coords && position.coords.accuracy <= 50) {
                var driverPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // const driverPosition = new google.maps.LatLng(-27.497737, -58.828180);

                _this2.driverMarker.setPosition(driverPosition); // this.map.setCenter(driverPosition);

              } else {
                alert('No se pudo obtener ubicación actual del conductor. Por favor habilite el GPS en su dispositivo móvil');
              }
            });
          }
        }, {
          key: "loadMap",
          value: function loadMap() {
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["Environment"].setEnv({
              API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCQ5AidfjBOg7VI2sgkbpnKHPBGAoLQ15w',
              API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCQ5AidfjBOg7VI2sgkbpnKHPBGAoLQ15w'
            });

            var mapOptions = {
              camera: {
                target: {
                  lat: +this.currentOrder.location.lat,
                  lng: +this.currentOrder.location.lng
                },
                zoom: 18,
                tilt: 30
              }
            };
            this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"].create('deliveryOrderMarkersMap', mapOptions);
            var center = {
              lat: +this.currentOrder.location.lat,
              lng: +this.currentOrder.location.lng
            };
            this.map.moveCamera({
              target: center
            });
            this.circle = this.map.addCircleSync({
              center: center,
              radius: this.radius,
              strokeColor: 'rgba(250, 250, 250, 0.6)',
              strokeWidth: 0,
              fillColor: 'rgba(250, 250, 250, 0.6)',
              visible: false
            });
            this.addCurrentOrderMarker(); // this.selectedOrder = this.currentOrder;

            this.findNearbyMarkers(); // this.addMarkers();
            // this.getCurrentDriverPosition();
          }
        }, {
          key: "addCurrentOrderMarker",
          value: function addCurrentOrderMarker() {
            var _this3 = this;

            var position = {
              lat: +this.currentOrder.location.lat,
              lng: +this.currentOrder.location.lng
            };
            this.map.addMarker({
              icon: 'red',
              animation: 'DROP',
              position: position
            }).then(function (marker) {
              // this.markers.push(marker);
              _this3.circle.setCenter(position);

              marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function (m) {
                _this3.selectedOrder = _this3.currentOrder;

                _this3.htmlInfoWindow.close();

                _this3.setInfoWindowContent(_this3.selectedOrder);

                _this3.htmlInfoWindow.open(marker);
              });
            });
          } // initMap() {
          //   setTimeout(() => {
          //     const lat = +this.orders[0].location.lat;
          //     const lng = +this.orders[0].location.lng;
          //     const center = new google.maps.LatLng(lat, lng);
          //     this.map = new google.maps.Map(this.mapElement.nativeElement, {
          //       zoom: 12,
          //       center
          //     });
          //     this.addMarkers();
          //     this.getCurrentDriverPosition();
          //   }, 1000);
          // }
          // addMarkers() {
          //   let i = 1;
          //   const colors = [
          //     'yellow', 'green', 'blue'
          //   ];
          //   this.orders.map(order => {
          //     const contentString = `<h4>${order.location.name}</h4><p>${order.location.full_address}</p>`;
          //     const infoWindow = new google.maps.InfoWindow({
          //       content: contentString
          //     });
          //
          //     const random = Math.floor(Math.random() * 3) + 1;
          //     let url = 'http://maps.google.com/mapfiles/ms/icons/';
          //     url += colors[random - 1] + '-dot.png';
          //
          //     const marker = new google.maps.Marker({
          //       position: new google.maps.LatLng(+order.location.lat, +order.location.lng),
          //       map: this.map,
          //       label: {
          //         text: i.toString(),
          //         color: 'black',
          //         fontSize: '24px'
          //       },
          //       icon: {
          //         url
          //       }
          //       // icon: order.status === 'delivered' ? 'assets/markers/location-delivered.png' : 'assets/markers/location.png'
          //     });
          //
          //     marker.addListener('click', () => {
          //       infoWindow.open(this.map, marker);
          //     });
          //
          //     this.markers.push(marker);
          //     i++;
          //   });
          // }

        }, {
          key: "removeAllMarkers",
          value: function removeAllMarkers() {
            this.markers.map(function (marker) {
              marker.remove();
            });
            this.markers = [];
          }
        }, {
          key: "viewAllMarkers",
          value: function viewAllMarkers() {
            var _this4 = this;

            this.removeAllMarkers();
            this.circle.setVisible(false);
            var anotherOrders = this.orders.filter(function (order) {
              return order.id !== _this4.currentOrder.id && order.status !== 'delivered';
            });
            var bounds = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["LatLngBounds"]([{
              lat: +this.currentOrder.location.lat,
              lng: +this.currentOrder.location.lng
            }]);
            anotherOrders.map(function (order) {
              var position = {
                lat: +order.location.lat,
                lng: +order.location.lng
              };
              bounds.extend(position);

              _this4.map.addMarker({
                icon: 'blue',
                animation: 'DROP',
                position: position
              }).then(function (marker) {
                _this4.markers.push(marker);

                marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function (m) {
                  _this4.selectedOrder = order;

                  _this4.htmlInfoWindow.close();

                  _this4.setInfoWindowContent(order);

                  _this4.htmlInfoWindow.open(marker);
                });
              });
            });
            this.map.moveCamera({
              target: bounds
            });
          }
        }, {
          key: "showMarkersByNumber",
          value: function showMarkersByNumber(min, max) {// this.markers.map(marker => {
            //   marker.setMap(null);
            // });
            // this.markers = [];
            // const colors = [
            //   'yellow', 'green', 'blue'
            // ];
            //
            // for (let i = min - 1; i <= max - 1; i++) {
            //   const order = this.orders[i];
            //   if (order) {
            //     const contentString = `<h4>${order.location.name}</h4><p>${order.location.full_address}</p>`;
            //     const infoWindow = new google.maps.InfoWindow({
            //       content: contentString
            //     });
            //
            //     const random = Math.floor(Math.random() * 3) + 1;
            //     let url = 'http://maps.google.com/mapfiles/ms/icons/';
            //     url += colors[random - 1] + '-dot.png';
            //
            //     const marker = new google.maps.Marker({
            //       position: new google.maps.LatLng(+order.location.lat, +order.location.lng),
            //       map: this.map,
            //       label: {
            //         text: (i + 1).toString(),
            //         color: 'black',
            //         fontSize: '24px'
            //       },
            //       icon: {
            //         url
            //       }
            //       // icon: order.status === 'delivered' ? 'assets/markers/location-delivered.png' : 'assets/markers/location.png'
            //     });
            //
            //     marker.addListener('click', () => {
            //       infoWindow.open(this.map, marker);
            //     });
            //
            //     this.markers.push(marker);
            //   }
            // }
          }
        }, {
          key: "findNearbyMarkers",
          value: function findNearbyMarkers() {
            var _this5 = this;

            this.removeAllMarkers();
            var anotherOrders = this.orders.filter(function (order) {
              return order.id !== _this5.currentOrder.id && order.status !== 'delivered';
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
            var ordersInRadius = anotherOrders.filter(function (order) {
              return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(+order.location.lat, +order.location.lng), circle.getCenter()) <= _this5.radius;
            });
            var bounds = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["LatLngBounds"]([{
              lat: +this.currentOrder.location.lat,
              lng: +this.currentOrder.location.lng
            }]);
            ordersInRadius.map(function (order) {
              var position = {
                lat: +order.location.lat,
                lng: +order.location.lng
              };
              bounds.extend(position);

              _this5.map.addMarker({
                icon: 'blue',
                animation: 'DROP',
                position: position
              }).then(function (marker) {
                _this5.markers.push(marker);

                marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function (m) {
                  _this5.selectedOrder = order;

                  _this5.htmlInfoWindow.close();

                  _this5.setInfoWindowContent(order);

                  _this5.htmlInfoWindow.open(marker);
                });
              });
            });
            this.circle.setVisible(true);
            this.map.moveCamera({
              target: bounds
            });
          }
        }, {
          key: "setInfoWindowContent",
          value: function setInfoWindowContent(order) {
            var _this6 = this;

            var frame = document.createElement('div'); // frame.className = 'map-info-window';

            frame.innerHTML = ["<h6 style=\"margin: 0; padding: 0\">".concat(order.location.address, "</h6>"), "<p style=\"margin: 0; padding: 0\">".concat(order.receiver, "</p>"), "<p style=\"margin: 0; padding: 0\">".concat(order.description, "</p>"), '<span class="close-iw" style="top: 5px; right: 5px; position: absolute">' + '&times' + '</span>'].join('');
            frame.getElementsByClassName('close-iw')[0].addEventListener('click', function () {
              _this6.htmlInfoWindow.close();
            });
            this.htmlInfoWindow.setContent(frame, {
              width: '200px'
            });
            frame.classList.add('map-info-window');
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);
      }();

      DeliveryOrderMapPage.ɵfac = function DeliveryOrderMapPage_Factory(t) {
        return new (t || DeliveryOrderMapPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_v1_delivery_service__WEBPACK_IMPORTED_MODULE_5__["DeliveryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_v1_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]));
      };

      DeliveryOrderMapPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeliveryOrderMapPage,
        selectors: [["app-delivery-order-map"]],
        viewQuery: function DeliveryOrderMapPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
          }
        },
        decls: 13,
        vars: 0,
        consts: [["color", "primary"], ["name", "close", "slot", "icon-only"], ["id", "deliveryOrderMarkersMap"], ["deliveryOrderMarkersMap", ""], ["color", "primary", "size", "full", "shape", "round", 3, "click"]],
        template: function DeliveryOrderMapPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryOrderMapPage_Template_ion_button_click_9_listener() {
              return ctx.viewAllMarkers();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ver todos los pendientes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryOrderMapPage_Template_ion_button_click_11_listener() {
              return ctx.findNearbyMarkers();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Ver pendientes cercanos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"]],
        styles: ["#deliveryOrderMarkersMap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 2em;\n  top: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RlbGl2ZXJ5LW9yZGVyLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJkZWxpdmVyeS1vcmRlci1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RlbGl2ZXJ5T3JkZXJNYXJrZXJzTWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "zc+D":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/delivery-order-map/delivery-order-map-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: DeliveryOrderMapPageRoutingModule */

    /***/
    function zcD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryOrderMapPageRoutingModule", function () {
        return DeliveryOrderMapPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _delivery_order_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./delivery-order-map.page */
      "GvAp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _delivery_order_map_page__WEBPACK_IMPORTED_MODULE_1__["DeliveryOrderMapPage"]
      }];

      var DeliveryOrderMapPageRoutingModule = /*#__PURE__*/_createClass(function DeliveryOrderMapPageRoutingModule() {
        _classCallCheck(this, DeliveryOrderMapPageRoutingModule);
      });

      DeliveryOrderMapPageRoutingModule.ɵfac = function DeliveryOrderMapPageRoutingModule_Factory(t) {
        return new (t || DeliveryOrderMapPageRoutingModule)();
      };

      DeliveryOrderMapPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: DeliveryOrderMapPageRoutingModule
      });
      DeliveryOrderMapPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DeliveryOrderMapPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-delivery-order-map-delivery-order-map-module-es5.js.map