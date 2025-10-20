(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maintenance-document-list-document-list-module"], {
    /***/
    "eKv6":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/maintenance/document-list/document-list-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: DocumentListPageRoutingModule */

    /***/
    function eKv6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentListPageRoutingModule", function () {
        return DocumentListPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _document_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./document-list.page */
      "wayh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _document_list_page__WEBPACK_IMPORTED_MODULE_1__["DocumentListPage"]
      }];

      var DocumentListPageRoutingModule = /*#__PURE__*/_createClass(function DocumentListPageRoutingModule() {
        _classCallCheck(this, DocumentListPageRoutingModule);
      });

      DocumentListPageRoutingModule.ɵfac = function DocumentListPageRoutingModule_Factory(t) {
        return new (t || DocumentListPageRoutingModule)();
      };

      DocumentListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: DocumentListPageRoutingModule
      });
      DocumentListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DocumentListPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "f16g":
    /*!*************************************************!*\
      !*** ./src/app/services/v1/document.service.ts ***!
      \*************************************************/

    /*! exports provided: DocumentService */

    /***/
    function f16g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentService", function () {
        return DocumentService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DocumentService = /*#__PURE__*/function () {
        function DocumentService(http) {
          _classCallCheck(this, DocumentService);

          this.http = http;
          this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
          this.V1 = 'v1/app/';
          this.updatedDocuments$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }

        return _createClass(DocumentService, [{
          key: "getDocumentTypes",
          value: function getDocumentTypes() {
            return this.http.get("".concat(this.API_URL).concat(this.V1, "document-types"));
          }
        }, {
          key: "getDocumentsByDocumentType",
          value: function getDocumentsByDocumentType(documentType) {
            return this.http.get("".concat(this.API_URL).concat(this.V1, "document-types/").concat(documentType, "/documents"));
          }
        }, {
          key: "getUploadedDocuments",
          value: function getUploadedDocuments() {
            return this.http.get("".concat(this.API_URL).concat(this.V1, "uploaded-documents"));
          }
        }, {
          key: "storeUploadedDocument",
          value: function storeUploadedDocument(body) {
            return this.http.post("".concat(this.API_URL).concat(this.V1, "uploaded-documents"), body);
          }
        }, {
          key: "deleteUploadedDocument",
          value: function deleteUploadedDocument(uploadedDocument) {
            return this.http["delete"]("".concat(this.API_URL).concat(this.V1, "uploaded-documents/").concat(uploadedDocument.id));
          }
        }, {
          key: "getUpdatedDocuments$",
          value: function getUpdatedDocuments$() {
            return this.updatedDocuments$.asObservable();
          }
        }, {
          key: "setUpdatedDocuments$",
          value: function setUpdatedDocuments$(updated) {
            this.updatedDocuments$.next(updated);
          }
        }]);
      }();

      DocumentService.ɵfac = function DocumentService_Factory(t) {
        return new (t || DocumentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      DocumentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: DocumentService,
        factory: DocumentService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "poPZ":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/maintenance/document-list/document-list.module.ts ***!
      \*************************************************************************/

    /*! exports provided: DocumentListPageModule */

    /***/
    function poPZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentListPageModule", function () {
        return DocumentListPageModule;
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


      var _document_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./document-list-routing.module */
      "eKv6");
      /* harmony import */


      var _document_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./document-list.page */
      "wayh");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DocumentListPageModule = /*#__PURE__*/_createClass(function DocumentListPageModule() {
        _classCallCheck(this, DocumentListPageModule);
      });

      DocumentListPageModule.ɵfac = function DocumentListPageModule_Factory(t) {
        return new (t || DocumentListPageModule)();
      };

      DocumentListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: DocumentListPageModule
      });
      DocumentListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _document_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentListPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DocumentListPageModule, {
          declarations: [_document_list_page__WEBPACK_IMPORTED_MODULE_4__["DocumentListPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _document_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentListPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
        });
      })();
      /***/

    },

    /***/
    "wayh":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/maintenance/document-list/document-list.page.ts ***!
      \***********************************************************************/

    /*! exports provided: DocumentListPage */

    /***/
    function wayh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentListPage", function () {
        return DocumentListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_v1_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/v1/document.service */
      "f16g");
      /* harmony import */


      var _components_modals_document_file_image_detail_document_file_image_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../components/modals/document-file-image-detail/document-file-image-detail.component */
      "WdDh");
      /* harmony import */


      var _services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/utils/http-upload-file.service */
      "DDL3");
      /* harmony import */


      var _services_v1_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/v1/auth.service */
      "HNOL");
      /* harmony import */


      var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/toast/toast.component */
      "COqc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DocumentListPage_ion_progress_bar_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-progress-bar", 9);
        }
      }

      function DocumentListPage_p_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No tienes ning\xFAn documento guardado");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function DocumentListPage_ion_item_sliding_14_ion_row_9_ion_progress_bar_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-progress-bar", 22);
        }
      }

      function DocumentListPage_ion_item_sliding_14_ion_row_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-col", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentListPage_ion_item_sliding_14_ion_row_9_Template_ion_icon_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);

            var documentFile_r6 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r8.downloadFile(documentFile_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, DocumentListPage_ion_item_sliding_14_ion_row_9_ion_progress_bar_5_Template, 1, 0, "ion-progress-bar", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var documentFile_r6 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", documentFile_r6.filename, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.downloading);
        }
      }

      function DocumentListPage_ion_item_sliding_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item-sliding", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, DocumentListPage_ion_item_sliding_14_ion_row_9_Template, 6, 2, "ion-row", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-item-options");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-item-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentListPage_ion_item_sliding_14_Template_ion_item_option_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);

            var uploadedDocument_r3 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r10.presentDeleteDocumentAlertConfirm(uploadedDocument_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "ion-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var uploadedDocument_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", uploadedDocument_r3.document.name, " - (", uploadedDocument_r3.document.document_type.type, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 4, uploadedDocument_r3.created_at, "dd/M/yyyy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", uploadedDocument_r3.document_files);
        }
      }

      var DocumentListPage = /*#__PURE__*/function () {
        function DocumentListPage(router, documentService, httpUploadFileService, authService, alertController, toastComponent, modalController) {
          _classCallCheck(this, DocumentListPage);

          this.router = router;
          this.documentService = documentService;
          this.httpUploadFileService = httpUploadFileService;
          this.authService = authService;
          this.alertController = alertController;
          this.toastComponent = toastComponent;
          this.modalController = modalController;
          this.uploadedDocuments = [];
          this.loading = true;
          this.downloading = false;
          this.submitting = false;
        }

        return _createClass(DocumentListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.getAuthToken().then(function (authToken) {
              _this.authToken = authToken;
            });
            this.updatedDocumentsSubscription = this.documentService.getUpdatedDocuments$().subscribe(function (updated) {
              _this.getDocuments();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.updatedDocumentsSubscription) {
              this.updatedDocumentsSubscription.unsubscribe();
            }
          }
        }, {
          key: "addDocument",
          value: function addDocument() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.router.navigateByUrl('document-form');

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getDocuments",
          value: function getDocuments() {
            var _this2 = this;

            this.loading = true;
            this.documentService.getUploadedDocuments().subscribe(function (response) {
              _this2.uploadedDocuments = response.uploaded_documents;
            }, function (error) {
              _this2.loading = false; //
            }, function () {
              _this2.loading = false; //
            });
          }
        }, {
          key: "downloadFile",
          value: function downloadFile(documentFile) {
            var _this3 = this;

            this.downloading = true;
            console.log(documentFile);
            this.httpUploadFileService.downloadFile("document-files/".concat(documentFile.id, "/download"), {}, this.authToken, documentFile.filename, documentFile.mime).then(function () {
              _this3.downloading = false;
            })["catch"](function (err) {
              _this3.downloading = false;

              _this3.toastComponent.presentToast("No se pudo descargar el archivo. Intente nuevamente", 'middle', 3000);
            });
          }
        }, {
          key: "viewDetail",
          value: function viewDetail(uploadedDocument) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var modal;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.modalController.create({
                      component: _components_modals_document_file_image_detail_document_file_image_detail_component__WEBPACK_IMPORTED_MODULE_4__["DocumentFileImageDetailComponent"],
                      cssClass: 'modal-document-image-view',
                      componentProps: {
                        documentFiles: uploadedDocument.document_files
                      }
                    });

                  case 1:
                    modal = _context2.v;
                    _context2.n = 2;
                    return modal.present();

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentDeleteDocumentAlertConfirm",
          value: function presentDeleteDocumentAlertConfirm(uploadedDocument) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this4 = this;

              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.alertController.create({
                      header: '¿Desea eliminar el registro?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {//
                        }
                      }, {
                        text: 'Sí',
                        handler: function handler() {
                          _this4.deleteUploadedDocument(uploadedDocument);
                        }
                      }]
                    });

                  case 1:
                    alert = _context3.v;
                    _context3.n = 2;
                    return alert.present();

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "deleteUploadedDocument",
          value: function deleteUploadedDocument(uploadedDocument) {
            var _this5 = this;

            this.submitting = true;
            this.documentService.deleteUploadedDocument(uploadedDocument).subscribe(function (response) {
              _this5.uploadedDocuments = _this5.uploadedDocuments.filter(function (item) {
                return item.id !== uploadedDocument.id;
              });
              _this5.submitting = false;
            }, function (error) {
              _this5.submitting = false;
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this6 = this;

            console.log('Begin async operation');
            setTimeout(function () {
              console.log('Async operation has ended');

              _this6.getDocuments();

              event.target.complete();
            }, 2000);
          }
        }]);
      }();

      DocumentListPage.ɵfac = function DocumentListPage_Factory(t) {
        return new (t || DocumentListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_v1_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_5__["HttpUploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_v1_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_7__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
      };

      DocumentListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: DocumentListPage,
        selectors: [["app-document-list"]],
        decls: 15,
        vars: 3,
        consts: [["slot", "start"], ["autoHide", "false"], [1, "ion-padding"], ["class", "ion-margin-top", "type", "indeterminate", 4, "ngIf"], [1, "ion-text-center", "ion-padding-bottom"], [1, "custom-button", 3, "click"], ["slot", "fixed", 3, "ionRefresh"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["class", "ion-margin-bottom", 4, "ngFor", "ngForOf"], ["type", "indeterminate", 1, "ion-margin-top"], [1, "ion-padding", "ion-text-center"], [1, "ion-margin-bottom"], ["lines", "none"], [1, "uploaded-document"], [1, "ion-no-margin"], [4, "ngFor", "ngForOf"], ["color", "light", 3, "click"], ["slot", "end", "name", "trash"], ["size", "10"], ["size", "2", 1, "ion-align-self-center", "ion-text-center"], ["color", "primary", "name", "download", 1, "font-15em", 3, "click"], ["type", "indeterminate", 4, "ngIf"], ["type", "indeterminate"]],
        template: function DocumentListPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-menu-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "MANTENIMIENTO");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, DocumentListPage_ion_progress_bar_7_Template, 1, 0, "ion-progress-bar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentListPage_Template_ion_button_click_9_listener() {
              return ctx.addDocument();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " AGREGAR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-refresher", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionRefresh", function DocumentListPage_Template_ion_refresher_ionRefresh_11_listener($event) {
              return ctx.doRefresh($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "ion-refresher-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, DocumentListPage_p_13_Template, 3, 0, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, DocumentListPage_ion_item_sliding_14_Template, 14, 7, "ion-item-sliding", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading || ctx.submitting);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.uploadedDocuments.length <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.uploadedDocuments);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n  font-family: NunitoSans, \"sans-serif\";\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n  --background: #f4f5f8;\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  background: #f4f5f8;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RvY3VtZW50LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImRvY3VtZW50LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmN2Y4Zjk7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLCAnc2Fucy1zZXJpZic7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzU3ZGZiO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4IGxpZ2h0Z3JleTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG5pb24taXRlbS1vcHRpb25zIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-maintenance-document-list-document-list-module-es5.js.map