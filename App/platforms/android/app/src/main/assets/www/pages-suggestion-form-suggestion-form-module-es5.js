(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-suggestion-form-suggestion-form-module"], {
    /***/
    "2D04":
    /*!***************************************************!*\
      !*** ./src/app/services/v1/suggestion.service.ts ***!
      \***************************************************/

    /*! exports provided: SuggestionService */

    /***/
    function D04(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuggestionService", function () {
        return SuggestionService;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SuggestionService = /*#__PURE__*/function () {
        function SuggestionService(http) {
          _classCallCheck(this, SuggestionService);

          this.http = http;
          this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
          this.V1 = 'v1/app/';
        }

        return _createClass(SuggestionService, [{
          key: "storeSuggestion",
          value: function storeSuggestion(body) {
            return this.http.post("".concat(this.API_URL).concat(this.V1, "suggestions"), body);
          }
        }]);
      }();

      SuggestionService.ɵfac = function SuggestionService_Factory(t) {
        return new (t || SuggestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      SuggestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: SuggestionService,
        factory: SuggestionService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "FnYX":
    /*!***************************************************************!*\
      !*** ./src/app/pages/suggestion-form/suggestion-form.page.ts ***!
      \***************************************************************/

    /*! exports provided: SuggestionFormPage */

    /***/
    function FnYX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuggestionFormPage", function () {
        return SuggestionFormPage;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_v1_suggestion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/v1/suggestion.service */
      "2D04");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SuggestionFormPage_ion_progress_bar_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-progress-bar", 9);
        }
      }

      var SuggestionFormPage = /*#__PURE__*/function () {
        function SuggestionFormPage(formBuilder, navController, suggestionService) {
          _classCallCheck(this, SuggestionFormPage);

          this.formBuilder = formBuilder;
          this.navController = navController;
          this.suggestionService = suggestionService;
          this.submitting = false;
          this.suggestForm = this.formBuilder.group({
            suggestion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
          });
        }

        return _createClass(SuggestionFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sendSuggestion",
          value: function sendSuggestion() {
            var _this = this;

            this.submitting = true;
            var body = {
              suggestion: this.suggestForm.value.suggestion
            };
            this.suggestionService.storeSuggestion(body).subscribe(function (response) {
              _this.submitting = false;

              _this.suggestForm.reset();
            }, function (error) {
              _this.submitting = false;
            });
          }
        }]);
      }();

      SuggestionFormPage.ɵfac = function SuggestionFormPage_Factory(t) {
        return new (t || SuggestionFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_v1_suggestion_service__WEBPACK_IMPORTED_MODULE_2__["SuggestionService"]));
      };

      SuggestionFormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: SuggestionFormPage,
        selectors: [["app-suggestion-form"]],
        decls: 17,
        vars: 3,
        consts: [["slot", "start"], ["autoHide", "false"], [1, "ion-padding"], [1, "ion-text-center"], [3, "formGroup"], ["rows", "15", "formControlName", "suggestion", "placeholder", "Escriba aqu\xED..."], ["class", "ion-margin-top ion-padding-horizontal", "type", "indeterminate", 4, "ngIf"], [1, "ion-text-center", "ion-padding-bottom"], [1, "custom-button", 3, "disabled", "click"], ["type", "indeterminate", 1, "ion-margin-top", "ion-padding-horizontal"]],
        template: function SuggestionFormPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-menu-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "PROPONER SUGERENCIAS");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Por favor env\xEDanos tus sugerencias");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "textarea", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SuggestionFormPage_ion_progress_bar_13_Template, 1, 0, "ion-progress-bar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SuggestionFormPage_Template_ion_button_click_15_listener() {
              return ctx.sendSuggestion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " ENVIAR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.suggestForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitting);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.suggestForm.valid || ctx.submitting);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonProgressBar"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n  font-family: NunitoSans, sans-serif;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\nion-item-option[_ngcontent-%COMP%] {\n  --background: white;\n  --color: #000;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3VyYmFuLWRpc3RyaWJ1dGlvbi5zY3NzIiwiLi4vLi4vLi4vLi4vc3VnZ2VzdGlvbi1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBQXRCQTtFQUNFLGdCQUFBO0FBeUJGOztBQXRCQTtFQUNFLGdCQUFBO0FBeUJGIiwiZmlsZSI6InN1Z2dlc3Rpb24tZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y3ZjhmOTtcbiAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzU3ZGZiO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW9uLWl0ZW0tb3B0aW9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzAwMDtcbn1cblxuLmN1c3RvbS1kYXRlLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3VyYmFuLWRpc3RyaWJ1dGlvbi5zY3NzXCI7XG5cbi5mb3JtLWdyb3VwIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuIl19 */"]
      });
      /***/
    },

    /***/
    "Nuju":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/suggestion-form/suggestion-form-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: SuggestionFormPageRoutingModule */

    /***/
    function Nuju(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuggestionFormPageRoutingModule", function () {
        return SuggestionFormPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _suggestion_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./suggestion-form.page */
      "FnYX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _suggestion_form_page__WEBPACK_IMPORTED_MODULE_1__["SuggestionFormPage"]
      }];

      var SuggestionFormPageRoutingModule = /*#__PURE__*/_createClass(function SuggestionFormPageRoutingModule() {
        _classCallCheck(this, SuggestionFormPageRoutingModule);
      });

      SuggestionFormPageRoutingModule.ɵfac = function SuggestionFormPageRoutingModule_Factory(t) {
        return new (t || SuggestionFormPageRoutingModule)();
      };

      SuggestionFormPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: SuggestionFormPageRoutingModule
      });
      SuggestionFormPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SuggestionFormPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "r+7g":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/suggestion-form/suggestion-form.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SuggestionFormPageModule */

    /***/
    function r7g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuggestionFormPageModule", function () {
        return SuggestionFormPageModule;
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


      var _suggestion_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./suggestion-form-routing.module */
      "Nuju");
      /* harmony import */


      var _suggestion_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./suggestion-form.page */
      "FnYX");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SuggestionFormPageModule = /*#__PURE__*/_createClass(function SuggestionFormPageModule() {
        _classCallCheck(this, SuggestionFormPageModule);
      });

      SuggestionFormPageModule.ɵfac = function SuggestionFormPageModule_Factory(t) {
        return new (t || SuggestionFormPageModule)();
      };

      SuggestionFormPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: SuggestionFormPageModule
      });
      SuggestionFormPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _suggestion_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["SuggestionFormPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SuggestionFormPageModule, {
          declarations: [_suggestion_form_page__WEBPACK_IMPORTED_MODULE_4__["SuggestionFormPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _suggestion_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["SuggestionFormPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-suggestion-form-suggestion-form-module-es5.js.map