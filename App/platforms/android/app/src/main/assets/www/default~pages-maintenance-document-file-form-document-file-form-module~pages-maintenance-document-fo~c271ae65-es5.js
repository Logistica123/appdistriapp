(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-maintenance-document-file-form-document-file-form-module~pages-maintenance-document-fo~c271ae65"], {
    /***/
    "LlRr":
    /*!********************************************************!*\
      !*** ./src/app/services/utils/file-chooser.service.ts ***!
      \********************************************************/

    /*! exports provided: FileChooserService */

    /***/
    function LlRr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileChooserService", function () {
        return FileChooserService;
      });
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      "RzHS");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "G769");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FileChooserService = /*#__PURE__*/function () {
        function FileChooserService(fileChooser, filePath, file) {
          _classCallCheck(this, FileChooserService);

          this.fileChooser = fileChooser;
          this.filePath = filePath;
          this.file = file;
        }

        return _createClass(FileChooserService, [{
          key: "chooseFile",
          value: function chooseFile() {
            var _this = this;

            return new Promise(function (resolve, reject) {
              _this.fileChooser.open().then(function (uri) {
                _this.filePath.resolveNativePath(uri).then(function (filePath) {
                  var filename = filePath.substring(filePath.lastIndexOf('/') + 1);
                  var path = filePath.substring(0, filePath.lastIndexOf('/') + 1); // if (filename.indexOf(' ') > -1) {
                  //   const newFilename = filename.split(' ').join('_');
                  //   this.copyFile(path, filename, path, newFilename).then((val) => {
                  //     this.readFile(path, newFilename).then(documentFile => {
                  //       resolve(documentFile);
                  //     }).catch(err => {
                  //       reject(err);
                  //     });
                  //   });
                  // } else {
                  //   this.readFile(path, filename).then(documentFile => {
                  //     resolve(documentFile);
                  //   }).catch(err => {
                  //     reject(err);
                  //   });
                  // }

                  _this.readFile(path, filename).then(function (documentFile) {
                    resolve(documentFile);
                  })["catch"](function (err) {
                    reject(err);
                  });
                })["catch"](function (err) {
                  reject(err);
                });
              })["catch"](function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "readFile",
          value: function readFile(path, filename) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2.file.readAsDataURL(path, filename).then(function (res) {
                var documentFile = {
                  file: path + '/' + filename,
                  src: res,
                  filename: filename,
                  path: path
                };
                resolve(documentFile);
              })["catch"](function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "copyFile",
          value: function copyFile(path, fileName, newPath, newFileName) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.file.copyFile(path, fileName, newPath, newFileName.split(' ').join('_')).then(function () {
                resolve(newFileName);
              })["catch"](function (err) {
                reject(err);
              });
            });
          }
        }]);
      }();

      FileChooserService.ɵfac = function FileChooserService_Factory(t) {
        return new (t || FileChooserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_0__["FileChooser"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_1__["FilePath"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"]));
      };

      FileChooserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: FileChooserService,
        factory: FileChooserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "RXuc":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/maintenance/document-file-form/document-file-form.page.ts ***!
      \*********************************************************************************/

    /*! exports provided: DocumentFileFormPage */

    /***/
    function RXuc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentFileFormPage", function () {
        return DocumentFileFormPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _services_v1_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/v1/document.service */
      "f16g");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_utils_camera_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/utils/camera.service */
      "uHbY");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/utils/http-upload-file.service */
      "DDL3");
      /* harmony import */


      var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/toast/toast.component */
      "COqc");
      /* harmony import */


      var _components_modals_image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../components/modals/image-detail/image-detail.component */
      "mdCS");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _services_v1_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../services/v1/auth.service */
      "HNOL");
      /* harmony import */


      var _services_utils_file_chooser_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../services/utils/file-chooser.service */
      "LlRr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DocumentFileFormPage_ion_progress_bar_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 12);
        }
      }

      function DocumentFileFormPage_ion_list_9_ion_item_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-radio", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var document_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](document_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", document_r7.id);
        }
      }

      function DocumentFileFormPage_ion_list_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-radio-group", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Tipo de documento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, DocumentFileFormPage_ion_list_9_ion_item_4_Template, 4, 2, "ion-item", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.documentFormControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.documents);
        }
      }

      function DocumentFileFormPage_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_div_10_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r8.takePicture();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Tomar foto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ion-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_div_10_Template_ion_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r10.chooseFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "ion-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Seleccionar documento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function DocumentFileFormPage_ion_col_13_ion_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_ion_col_13_ion_icon_2_Template_ion_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);

            var i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r16.deleteImage(i_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function DocumentFileFormPage_ion_col_13_ion_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-icon", 25);
        }
      }

      function DocumentFileFormPage_ion_col_13_ion_progress_bar_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 26);
        }
      }

      function DocumentFileFormPage_ion_col_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-col", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_ion_col_13_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);

            var file_r11 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r19.viewControlImageDetail(file_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DocumentFileFormPage_ion_col_13_ion_icon_2_Template, 1, 0, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, DocumentFileFormPage_ion_col_13_ion_icon_3_Template, 1, 0, "ion-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, DocumentFileFormPage_ion_col_13_ion_progress_bar_4_Template, 1, 0, "ion-progress-bar", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r11 = ctx.$implicit;
          var i_r12 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r3.sanitizer.bypassSecurityTrustUrl(file_r11.src), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.uploadedFilesIndexes.indexOf(i_r12) <= -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.uploadedFilesIndexes.indexOf(i_r12) > -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.uploadingFileIndex === i_r12);
        }
      }

      function DocumentFileFormPage_ion_row_15_ion_progress_bar_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 26);
        }
      }

      function DocumentFileFormPage_ion_row_15_ion_icon_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_ion_row_15_ion_icon_6_Template_ion_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28);

            var i_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r26.deleteDocumentFile(i_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function DocumentFileFormPage_ion_row_15_ion_icon_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-icon", 32);
        }
      }

      function DocumentFileFormPage_ion_row_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-col", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, DocumentFileFormPage_ion_row_15_ion_progress_bar_4_Template, 1, 0, "ion-progress-bar", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ion-col", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, DocumentFileFormPage_ion_row_15_ion_icon_6_Template, 1, 0, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, DocumentFileFormPage_ion_row_15_ion_icon_7_Template, 1, 0, "ion-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r21 = ctx.$implicit;
          var i_r22 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", file_r21.filename, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r4.uploadingFileIndex === i_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r4.uploadedDocumentFilesIndexes.indexOf(i_r22) <= -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r4.uploadedDocumentFilesIndexes.indexOf(i_r22) > -1);
        }
      }

      function DocumentFileFormPage_ion_progress_bar_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 26);
        }
      }

      var DocumentFileFormPage = /*#__PURE__*/function () {
        function DocumentFileFormPage(documentService, modalController, cameraService, sanitizer, httpUploadFileService, storage, authService, toastComponent, fileChooserService) {
          _classCallCheck(this, DocumentFileFormPage);

          this.documentService = documentService;
          this.modalController = modalController;
          this.cameraService = cameraService;
          this.sanitizer = sanitizer;
          this.httpUploadFileService = httpUploadFileService;
          this.storage = storage;
          this.authService = authService;
          this.toastComponent = toastComponent;
          this.fileChooserService = fileChooserService;
          this.documents = [];
          this.documentFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.loading = false;
          this.files = [];
          this.documentFiles = [];
          this.uploadedFilesIndexes = [];
          this.uploadingErrorFilesIndexes = [];
          this.uploadedDocumentFilesIndexes = [];
          this.uploadingErrorDocumentFilesIndexes = [];
          this.submitting = false;
          this.documentsUpdated = false;
        }

        return _createClass(DocumentFileFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.getDocumentsByDocumentType();
            this.authService.getAuthToken().then(function (authToken) {
              _this4.authToken = authToken;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.documentsUpdated) {
              this.documentService.setUpdatedDocuments$(this.documentsUpdated);
            }
          }
        }, {
          key: "getDocumentsByDocumentType",
          value: function getDocumentsByDocumentType() {
            var _this5 = this;

            this.loading = true;
            this.documentService.getDocumentsByDocumentType(this.documentTypeId).subscribe(function (response) {
              _this5.documents = response.documents;
              _this5.loading = false;
            }, function (error) {
              _this5.loading = false;
            });
          }
        }, {
          key: "takePicture",
          value: function takePicture() {
            var _this6 = this;

            this.cameraService.takePicture().then(function (cameraPhotoFile) {
              _this6.files.push(cameraPhotoFile);
            })["catch"](function (err) {
              _this6.toastComponent.presentToast("No se pudo acceder a la c\xE1mara (error: ".concat(err, ")"), 'middle', 3000);
            });
          }
        }, {
          key: "chooseFile",
          value: function chooseFile() {
            var _this7 = this;

            this.fileChooserService.chooseFile().then(function (documentFile) {
              _this7.documentFiles.push(documentFile);
            })["catch"](function (err) {
              alert(JSON.stringify(err));

              _this7.toastComponent.presentToast("No se pudo seleccionar el archivo (error: ".concat(err, ")"), 'middle', 3000);
            });
          }
        }, {
          key: "viewControlImageDetail",
          value: function viewControlImageDetail(file) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.modalController.create({
                      component: _components_modals_image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_8__["ImageDetailComponent"],
                      componentProps: {
                        file: file
                      }
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteImage",
          value: function deleteImage(i) {
            this.files.splice(i, 1);
          }
        }, {
          key: "deleteDocumentFile",
          value: function deleteDocumentFile(i) {
            this.documentFiles.splice(i, 1);
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this8 = this;

            var body = {
              document_id: this.documentFormControl.value
            };
            this.documentService.storeUploadedDocument(body).subscribe(function (response) {
              _this8.documentsUpdated = true;
              _this8.uploadedDocumentId = response.uploaded_document.id;

              if (_this8.files.length > 0 || _this8.documentFiles.length > 0) {
                _this8.checkFiles();
              } else {
                _this8.closeModal();
              }
            }, function (error) {}, function () {});
          }
        }, {
          key: "checkFiles",
          value: function checkFiles() {
            var _this9 = this;

            this.uploadedFilesIndexes = [];
            this.uploadingErrorFilesIndexes = [];
            this.uploadedDocumentFilesIndexes = [];
            this.uploadingErrorDocumentFilesIndexes = [];
            this.uploadFiles().then(function () {
              _this9.closeModal();
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.submitting = false;
            this.dismiss(true);
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this0 = this;

              var i, _iterator, _step, file, _iterator2, _step2, _file, _t, _t2;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    i = 0;
                    this.uploadingFileIndex = i;
                    _iterator = _createForOfIteratorHelper(this.files);
                    _context2.p = 1;

                    _iterator.s();

                  case 2:
                    if ((_step = _iterator.n()).done) {
                      _context2.n = 4;
                      break;
                    }

                    file = _step.value;
                    _context2.n = 3;
                    return this.uploadFile(file.file).then(function () {
                      _this0.uploadedFilesIndexes.push(i);
                    })["catch"](function (err) {
                      _this0.uploadingErrorFilesIndexes.push(i);
                    })["finally"](function () {
                      i++;
                      _this0.uploadingFileIndex = i;
                    });

                  case 3:
                    _context2.n = 2;
                    break;

                  case 4:
                    _context2.n = 6;
                    break;

                  case 5:
                    _context2.p = 5;
                    _t = _context2.v;

                    _iterator.e(_t);

                  case 6:
                    _context2.p = 6;

                    _iterator.f();

                    return _context2.f(6);

                  case 7:
                    _iterator2 = _createForOfIteratorHelper(this.documentFiles);
                    _context2.p = 8;

                    _iterator2.s();

                  case 9:
                    if ((_step2 = _iterator2.n()).done) {
                      _context2.n = 11;
                      break;
                    }

                    _file = _step2.value;
                    _context2.n = 10;
                    return this.uploadFile(_file.file).then(function () {
                      _this0.uploadedDocumentFilesIndexes.push(i);
                    })["catch"](function (err) {
                      _this0.uploadingErrorDocumentFilesIndexes.push(i);
                    })["finally"](function () {
                      i++;
                      _this0.uploadingDocumentFileIndex = i;
                    });

                  case 10:
                    _context2.n = 9;
                    break;

                  case 11:
                    _context2.n = 13;
                    break;

                  case 12:
                    _context2.p = 12;
                    _t2 = _context2.v;

                    _iterator2.e(_t2);

                  case 13:
                    _context2.p = 13;

                    _iterator2.f();

                    return _context2.f(13);

                  case 14:
                    return _context2.a(2);
                }
              }, _callee2, this, [[8, 12, 13, 14], [1, 5, 6, 7]]);
            }));
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(file) {
            var _this1 = this;

            return new Promise(function (resolve, reject) {
              var body = {
                uploaded_document_id: _this1.uploadedDocumentId.toString()
              };

              _this1.httpUploadFileService.uploadFile('document-files', file, _this1.authToken, body).then(function () {
                resolve(true);
              })["catch"](function (err) {
                reject(err);

                _this1.toastComponent.presentToast('No se pudo cargar el archivo. Intente nuevamente', 'medium', 2500);
              });
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss(success) {
            this.modalController.dismiss({
              success: success
            });
          }
        }]);
      }();

      DocumentFileFormPage.ɵfac = function DocumentFileFormPage_Factory(t) {
        return new (t || DocumentFileFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_v1_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_camera_service__WEBPACK_IMPORTED_MODULE_4__["CameraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_6__["HttpUploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_v1_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_7__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_file_chooser_service__WEBPACK_IMPORTED_MODULE_11__["FileChooserService"]));
      };

      DocumentFileFormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
        type: DocumentFileFormPage,
        selectors: [["app-document-file-form"]],
        inputs: {
          documentTypeId: "documentTypeId"
        },
        decls: 20,
        vars: 7,
        consts: [["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], ["class", "ion-margin-top", "type", "indeterminate", 4, "ngIf"], [4, "ngIf"], ["class", "ion-text-center", 4, "ngIf"], [1, "ion-text-center"], ["size", "6", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "ion-padding", "ion-text-center"], ["type", "indeterminate", 4, "ngIf"], [1, "custom-button", 3, "disabled", "click"], ["type", "indeterminate", 1, "ion-margin-top"], [3, "formControl"], ["lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none"], [3, "value"], [1, "custom-secondary-button", 3, "click"], ["name", "camera"], ["name", "document-attach"], ["size", "6"], ["alt", "control-image", 1, "control-image", 3, "src", "click"], ["name", "trash", "class", "delete-icon", 3, "click", 4, "ngIf"], ["name", "checkmark", "class", "checkmark-icon", "color", "success", 4, "ngIf"], ["name", "trash", 1, "delete-icon", 3, "click"], ["name", "checkmark", "color", "success", 1, "checkmark-icon"], ["type", "indeterminate"], ["size", "9"], ["size", "3"], ["name", "trash", 3, "click", 4, "ngIf"], ["name", "checkmark", "color", "success", 4, "ngIf"], ["name", "trash", 3, "click"], ["name", "checkmark", "color", "success"]],
        template: function DocumentFileFormPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_Template_ion_button_click_3_listener() {
              return ctx.dismiss(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "ion-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "CARGAR DOCUMENTO");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, DocumentFileFormPage_ion_progress_bar_8_Template, 1, 0, "ion-progress-bar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, DocumentFileFormPage_ion_list_9_Template, 5, 2, "ion-list", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, DocumentFileFormPage_div_10_Template, 7, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "ion-row", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, DocumentFileFormPage_ion_col_13_Template, 5, 4, "ion-col", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, DocumentFileFormPage_ion_row_15_Template, 8, 4, "ion-row", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, DocumentFileFormPage_ion_progress_bar_17_Template, 1, 0, "ion-progress-bar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "ion-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_Template_ion_button_click_18_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, " Aceptar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.files);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.documentFiles);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.submitting);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx.documentFormControl.value || ctx.submitting);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"]],
        styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: white;\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n  --background: #f4f5f8;\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  background: #f4f5f8;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.control-image[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 150px;\n  width: 100%;\n}\n\n.not-approved[_ngcontent-%COMP%] {\n  --background: #898989;\n  color: white;\n  box-shadow: none;\n}\n\n.approved[_ngcontent-%COMP%] {\n  --background: #c7f3cc;\n  color: black;\n  box-shadow: none;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n  font-family: NunitoSans, \"sans-serif\";\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\nion-list[_ngcontent-%COMP%] {\n  --background: transparent;\n  background: transparent;\n  padding: 0;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL29wZXJhdGlvbi1jb250cm9scy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vZG9jdW1lbnQtZmlsZS1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBQXJEQTtFQUNFLHFCQUFBO0VBQ0EscUNBQUE7QUF3REY7O0FBckRBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBd0RGOztBQXJEQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBd0RGOztBQXJEQTtFQUNFLHlCQUFBO0FBd0RGIiwiZmlsZSI6ImRvY3VtZW50LWZpbGUtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc1N2RmYjtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4IGxpZ2h0Z3JleTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG5pb24taXRlbS1vcHRpb25zIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmN1c3RvbS1kYXRlLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udHJvbC1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm90LWFwcHJvdmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjODk4OTg5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogICNjN2YzY2M7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9vcGVyYXRpb24tY29udHJvbHNcIjtcblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmN2Y4Zjk7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLCAnc2Fucy1zZXJpZic7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzU3ZGZiO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuIl19 */"]
      });
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
    }
  }]);
})();
//# sourceMappingURL=default~pages-maintenance-document-file-form-document-file-form-module~pages-maintenance-document-fo~c271ae65-es5.js.map