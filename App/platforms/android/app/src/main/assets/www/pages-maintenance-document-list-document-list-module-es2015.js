(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maintenance-document-list-document-list-module"],{

/***/ "eKv6":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/maintenance/document-list/document-list-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DocumentListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentListPageRoutingModule", function() { return DocumentListPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _document_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-list.page */ "wayh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _document_list_page__WEBPACK_IMPORTED_MODULE_1__["DocumentListPage"]
    }
];
class DocumentListPageRoutingModule {
}
DocumentListPageRoutingModule.ɵfac = function DocumentListPageRoutingModule_Factory(t) { return new (t || DocumentListPageRoutingModule)(); };
DocumentListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DocumentListPageRoutingModule });
DocumentListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DocumentListPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "f16g":
/*!*************************************************!*\
  !*** ./src/app/services/v1/document.service.ts ***!
  \*************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class DocumentService {
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.PERSONAL_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].PERSONAL_API_URL;
        this.V1 = 'v1/app/';
        this.updatedDocuments$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.personaSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    getUpdatedDocuments$() {
        return this.updatedDocuments$.asObservable();
    }
    setUpdatedDocuments$(updated) {
        this.updatedDocuments$.next(updated);
    }
    getPersona$() {
        return this.personaSubject$.asObservable();
    }
    getPersonaSnapshot() {
        return this.personaSubject$.getValue();
    }
    ensurePersonaByEmail(email) {
        const normalizedEmail = (email !== null && email !== void 0 ? email : '').trim().toLowerCase();
        if (!normalizedEmail) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(() => new Error('No se pudo determinar el correo electrónico del conductor.'));
        }
        const cached = this.personaSubject$.getValue();
        if (cached && cached.email === normalizedEmail) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(cached);
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('email', normalizedEmail);
        return this.http
            .get(`${this.PERSONAL_API_URL}personal`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            var _a, _b, _c, _d;
            const persona = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a[0];
            if (!persona) {
                throw new Error('No se encontró un registro de personal para el correo indicado.');
            }
            const nombre = (_d = (_c = (_b = persona.nombre) !== null && _b !== void 0 ? _b : [persona.nombres, persona.apellidos].filter(Boolean).join(' ').trim()) !== null && _c !== void 0 ? _c : persona.email) !== null && _d !== void 0 ? _d : normalizedEmail;
            return {
                id: persona.id,
                nombre: nombre || normalizedEmail,
                email: normalizedEmail,
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((persona) => this.personaSubject$.next(persona)));
    }
    getLiquidaciones() {
        const persona = this.personaSubject$.getValue();
        if (!persona) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(() => new Error('No se ha cargado el registro de personal.'));
        }
        return this.http
            .get(`${this.PERSONAL_API_URL}personal/${persona.id}/liquidaciones`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => { var _a; return (_a = response === null || response === void 0 ? void 0 : response.data) !== null && _a !== void 0 ? _a : []; }));
    }
    uploadLiquidaciones(files) {
        const persona = this.personaSubject$.getValue();
        if (!persona) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(() => new Error('No se ha cargado el registro de personal.'));
        }
        if (!files || files.length === 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        const uploads = files.map((file) => {
            var _a;
            const formData = new FormData();
            const safeName = ((_a = file.name) === null || _a === void 0 ? void 0 : _a.trim().length) ? file.name.trim() : `liquidacion-${Date.now()}`;
            formData.append('archivo', file, safeName);
            formData.append('nombre', safeName);
            formData.append('esLiquidacion', '1');
            return this.http.post(`${this.PERSONAL_API_URL}personal/${persona.id}/documentos`, formData);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(uploads);
    }
    /**
     * Métodos heredados que ya no forman parte del nuevo flujo.
     * Se mantienen para evitar errores de compilación en componentes legacy.
     */
    getDocumentTypes() {
        console.warn('[DocumentService] getDocumentTypes() está deprecado en el nuevo flujo de liquidaciones.');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ document_types: [] });
    }
    getDocumentsByDocumentType(documentType) {
        console.warn('[DocumentService] getDocumentsByDocumentType() está deprecado en el nuevo flujo de liquidaciones.', documentType);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ documents: [] });
    }
    getUploadedDocuments() {
        console.warn('[DocumentService] getUploadedDocuments() está deprecado en el nuevo flujo de liquidaciones.');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ uploaded_documents: [] });
    }
    storeUploadedDocument(body) {
        console.warn('[DocumentService] storeUploadedDocument() está deprecado en el nuevo flujo de liquidaciones.', body);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(() => new Error('La carga de documentos se realiza desde uploadLiquidaciones().'));
    }
    deleteUploadedDocument(uploadedDocument) {
        console.warn('[DocumentService] deleteUploadedDocument() está deprecado en el nuevo flujo de liquidaciones.', uploadedDocument);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(() => new Error('La eliminación de documentos no está disponible en esta versión.'));
    }
}
DocumentService.ɵfac = function DocumentService_Factory(t) { return new (t || DocumentService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DocumentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DocumentService, factory: DocumentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "poPZ":
/*!*************************************************************************!*\
  !*** ./src/app/pages/maintenance/document-list/document-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: DocumentListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentListPageModule", function() { return DocumentListPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _document_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./document-list-routing.module */ "eKv6");
/* harmony import */ var _document_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document-list.page */ "wayh");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class DocumentListPageModule {
}
DocumentListPageModule.ɵfac = function DocumentListPageModule_Factory(t) { return new (t || DocumentListPageModule)(); };
DocumentListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DocumentListPageModule });
DocumentListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _document_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentListPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DocumentListPageModule, { declarations: [_document_list_page__WEBPACK_IMPORTED_MODULE_4__["DocumentListPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _document_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentListPageRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]] }); })();


/***/ }),

/***/ "wayh":
/*!***********************************************************************!*\
  !*** ./src/app/pages/maintenance/document-list/document-list.page.ts ***!
  \***********************************************************************/
/*! exports provided: DocumentListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentListPage", function() { return DocumentListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_v1_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v1/document.service */ "f16g");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["fileInput"];
function DocumentListPage_ion_progress_bar_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-progress-bar", 13);
} }
function DocumentListPage_ion_note_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-note", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
} }
function DocumentListPage_ion_note_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-note", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListPage_ion_note_16_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.clearSelectedFiles(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Limpiar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r2.selectedFiles.length, " archivo", ctx_r2.selectedFiles.length === 1 ? "" : "s", " seleccionado", ctx_r2.selectedFiles.length === 1 ? "" : "s", ". ");
} }
function DocumentListPage_ion_card_19_ion_note_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.errorMessage, " ");
} }
function DocumentListPage_ion_card_19_ion_list_6_ion_item_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const liquidacion_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](liquidacion_r12.tipoNombre);
} }
function DocumentListPage_ion_card_19_ion_list_6_ion_item_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const liquidacion_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00B7 ", liquidacion_r12.sizeLabel, "");
} }
function DocumentListPage_ion_card_19_ion_list_6_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DocumentListPage_ion_card_19_ion_list_6_ion_item_1_p_4_Template, 2, 1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DocumentListPage_ion_card_19_ion_list_6_ion_item_1_span_8_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListPage_ion_card_19_ion_list_6_ion_item_1_Template_ion_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const liquidacion_r12 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.openLiquidacion(liquidacion_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const liquidacion_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](liquidacion_r12.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", liquidacion_r12.tipoNombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", liquidacion_r12.fechaCarga ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, liquidacion_r12.fechaCarga, "dd/MM/yyyy") : "Sin fecha", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", liquidacion_r12.sizeLabel);
} }
function DocumentListPage_ion_card_19_ion_list_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DocumentListPage_ion_card_19_ion_list_6_ion_item_1_Template, 11, 7, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.liquidaciones);
} }
function DocumentListPage_ion_card_19_ion_note_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A\u00FAn no hay liquidaciones cargadas. Seleccion\u00E1 archivos para subirlos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DocumentListPage_ion_card_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DocumentListPage_ion_card_19_ion_note_5_Template, 2, 1, "ion-note", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DocumentListPage_ion_card_19_ion_list_6_Template, 2, 1, "ion-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DocumentListPage_ion_card_19_ion_note_7_Template, 2, 0, "ion-note", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Liquidaciones de ", ctx_r4.persona == null ? null : ctx_r4.persona.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.errorMessage && (!ctx_r4.liquidaciones || ctx_r4.liquidaciones.length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.loading && ctx_r4.liquidaciones.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.loading && ctx_r4.liquidaciones.length === 0 && !ctx_r4.errorMessage);
} }
function DocumentListPage_ion_note_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-note", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.errorMessage, " ");
} }
class DocumentListPage {
    constructor(documentService, storage) {
        this.documentService = documentService;
        this.storage = storage;
        this.liquidaciones = [];
        this.loading = true;
        this.uploading = false;
        this.persona = null;
        this.selectedFiles = [];
        this.errorMessage = null;
    }
    ngOnInit() {
        this.updatedDocumentsSubscription = this.documentService.getUpdatedDocuments$()
            .subscribe((updated) => {
            if (updated) {
                this.getDocuments();
                this.documentService.setUpdatedDocuments$(false);
            }
        });
        this.loadPersona();
    }
    ngOnDestroy() {
        if (this.updatedDocumentsSubscription) {
            this.updatedDocumentsSubscription.unsubscribe();
        }
    }
    get hasPersonaLoaded() {
        return Boolean(this.persona);
    }
    loadPersona() {
        this.loading = true;
        this.storage.get('senderId')
            .then((email) => {
            if (!email) {
                this.errorMessage = 'No se pudo identificar al conductor. Inicia sesión nuevamente.';
                this.loading = false;
                return;
            }
            this.documentService.ensurePersonaByEmail(String(email))
                .subscribe({
                next: (persona) => {
                    this.persona = persona;
                    this.errorMessage = null;
                    this.getDocuments();
                },
                error: (err) => {
                    var _a;
                    this.errorMessage = (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : 'No se pudo recuperar la información del personal.';
                    this.loading = false;
                },
            });
        })
            .catch(() => {
            this.errorMessage = 'No se pudo acceder a la información almacenada. Inicia sesión nuevamente.';
            this.loading = false;
        });
    }
    getDocuments(event) {
        var _a, _b;
        if (!this.hasPersonaLoaded) {
            this.loading = false;
            (_b = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
            return;
        }
        this.loading = true;
        this.documentService.getLiquidaciones()
            .subscribe({
            next: (liquidaciones) => {
                this.liquidaciones = liquidaciones;
                this.errorMessage = null;
            },
            error: (err) => {
                var _a, _b, _c;
                this.errorMessage = (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : 'No se pudieron cargar las liquidaciones.';
                this.loading = false;
                (_c = (_b = event === null || event === void 0 ? void 0 : event.detail) === null || _b === void 0 ? void 0 : _b.complete) === null || _c === void 0 ? void 0 : _c.call(_b);
            },
            complete: () => {
                var _a, _b;
                this.loading = false;
                (_b = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
            },
        });
    }
    triggerFileSelection() {
        if (!this.fileInputRef) {
            return;
        }
        this.fileInputRef.nativeElement.click();
    }
    onFilesSelected(event) {
        const input = event.target;
        if (!input.files) {
            return;
        }
        this.selectedFiles = Array.from(input.files);
    }
    clearSelectedFiles() {
        this.selectedFiles = [];
        if (this.fileInputRef) {
            this.fileInputRef.nativeElement.value = '';
        }
    }
    uploadSelectedFiles() {
        if (!this.selectedFiles.length) {
            return;
        }
        this.uploading = true;
        this.documentService.uploadLiquidaciones(this.selectedFiles)
            .subscribe({
            next: () => {
                // noop
            },
            error: (err) => {
                var _a;
                this.errorMessage = (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : 'No se pudieron subir las liquidaciones.';
                this.uploading = false;
            },
            complete: () => {
                this.errorMessage = null;
                this.documentService.setUpdatedDocuments$(true);
                this.clearSelectedFiles();
                this.uploading = false;
            },
        });
    }
    openLiquidacion(liquidacion) {
        const target = liquidacion.absoluteDownloadUrl || liquidacion.downloadUrl;
        if (!target) {
            this.errorMessage = 'No se encontró la URL de descarga para este archivo.';
            return;
        }
        window.open(target, '_blank');
    }
    doRefresh(event) {
        this.getDocuments(event);
    }
}
DocumentListPage.ɵfac = function DocumentListPage_Factory(t) { return new (t || DocumentListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_v1_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"])); };
DocumentListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentListPage, selectors: [["app-document-list"]], viewQuery: function DocumentListPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInputRef = _t.first);
    } }, decls: 21, vars: 7, consts: [["slot", "start"], ["autoHide", "false"], [1, "ion-padding"], ["slot", "fixed", 3, "ionRefresh"], ["class", "ion-margin-top", "type", "indeterminate", 4, "ngIf"], ["class", "ion-text-center ion-padding", "color", "danger", 4, "ngIf"], [1, "ion-text-center", "ion-padding-bottom"], [1, "custom-button", 3, "disabled", "click"], ["color", "primary", 3, "disabled", "click"], ["class", "ion-margin-top", 4, "ngIf"], ["type", "file", "hidden", "", "multiple", "", "accept", ".pdf,.png,.jpg,.jpeg,.doc,.docx,.xls,.xlsx", 3, "change"], ["fileInput", ""], [4, "ngIf"], ["type", "indeterminate", 1, "ion-margin-top"], ["color", "danger", 1, "ion-text-center", "ion-padding"], [1, "ion-margin-top"], ["fill", "clear", "size", "small", 3, "click"], [4, "ngFor", "ngForOf"], ["fill", "clear", "slot", "end", 3, "click"], ["slot", "icon-only", "name", "download"]], template: function DocumentListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MANTENIMIENTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-refresher", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function DocumentListPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DocumentListPage_ion_progress_bar_9_Template, 1, 0, "ion-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DocumentListPage_ion_note_10_Template, 2, 1, "ion-note", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListPage_Template_ion_button_click_12_listener() { return ctx.triggerFileSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Seleccionar archivos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListPage_Template_ion_button_click_14_listener() { return ctx.uploadSelectedFiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Subir liquidaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DocumentListPage_ion_note_16_Template, 4, 3, "ion-note", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentListPage_Template_input_change_17_listener($event) { return ctx.onFilesSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DocumentListPage_ion_card_19_Template, 8, 4, "ion-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DocumentListPage_ion_note_20_Template, 2, 1, "ion-note", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading || ctx.uploading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.errorMessage && !ctx.hasPersonaLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.uploading || !ctx.hasPersonaLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.uploading || ctx.selectedFiles.length === 0 || !ctx.hasPersonaLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFiles.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.persona);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.errorMessage && ctx.liquidaciones.length > 0);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonNote"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color);\n  font-family: var(--ion-font-family);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-gradient);\n  --color: #ffffff;\n}\n\nion-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.05);\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f8f9fc;\n  margin-bottom: 8px;\n  border-radius: 8px;\n}\n\nion-button.custom-button[_ngcontent-%COMP%] {\n  --border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RvY3VtZW50LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFDQSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSwyQ0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGIiwiZmlsZSI6ImRvY3VtZW50LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZjO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaW9uLWJ1dHRvbi5jdXN0b20tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG59XG4iXX0= */"] });


/***/ })

}]);