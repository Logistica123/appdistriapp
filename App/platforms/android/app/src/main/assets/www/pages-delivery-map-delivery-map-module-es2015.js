(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-delivery-map-delivery-map-module"],{

/***/ "CTUv":
/*!*******************************************************************!*\
  !*** ./src/app/pages/delivery-map/delivery-map-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DeliveryMapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryMapPageRoutingModule", function() { return DeliveryMapPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delivery_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-map.page */ "qM3D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _delivery_map_page__WEBPACK_IMPORTED_MODULE_1__["DeliveryMapPage"]
    }
];
class DeliveryMapPageRoutingModule {
}
DeliveryMapPageRoutingModule.ɵfac = function DeliveryMapPageRoutingModule_Factory(t) { return new (t || DeliveryMapPageRoutingModule)(); };
DeliveryMapPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DeliveryMapPageRoutingModule });
DeliveryMapPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DeliveryMapPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "dMZ1":
/*!***********************************************************!*\
  !*** ./src/app/pages/delivery-map/delivery-map.module.ts ***!
  \***********************************************************/
/*! exports provided: DeliveryMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryMapPageModule", function() { return DeliveryMapPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _delivery_map_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery-map-routing.module */ "CTUv");
/* harmony import */ var _delivery_map_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delivery-map.page */ "qM3D");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _components_popovers_delivery_priority_select_delivery_priority_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/popovers/delivery-priority-select/delivery-priority-select.component */ "kvUa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class DeliveryMapPageModule {
}
DeliveryMapPageModule.ɵfac = function DeliveryMapPageModule_Factory(t) { return new (t || DeliveryMapPageModule)(); };
DeliveryMapPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DeliveryMapPageModule });
DeliveryMapPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _delivery_map_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeliveryMapPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DeliveryMapPageModule, { declarations: [_delivery_map_page__WEBPACK_IMPORTED_MODULE_4__["DeliveryMapPage"], _components_popovers_delivery_priority_select_delivery_priority_select_component__WEBPACK_IMPORTED_MODULE_6__["DeliveryPrioritySelectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _delivery_map_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeliveryMapPageRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]] }); })();


/***/ })

}]);