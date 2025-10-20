(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-maintenance-document-file-form-document-file-form-module~pages-maintenance-document-fo~c271ae65"],{

/***/ "LlRr":
/*!********************************************************!*\
  !*** ./src/app/services/utils/file-chooser.service.ts ***!
  \********************************************************/
/*! exports provided: FileChooserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileChooserService", function() { return FileChooserService; });
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "RzHS");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");







class FileChooserService {
    constructor(fileChooser, filePath, file) {
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.file = file;
    }
    chooseFile() {
        return new Promise((resolve, reject) => {
            this.fileChooser.open()
                .then(uri => {
                this.filePath.resolveNativePath(uri).then(filePath => {
                    const filename = filePath.substring(filePath.lastIndexOf('/') + 1);
                    const path = filePath.substring(0, filePath.lastIndexOf('/') + 1);
                    // if (filename.indexOf(' ') > -1) {
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
                    this.readFile(path, filename).then(documentFile => {
                        resolve(documentFile);
                    }).catch(err => {
                        reject(err);
                    });
                }).catch(err => {
                    reject(err);
                });
            }).catch(err => {
                reject(err);
            });
        });
    }
    readFile(path, filename) {
        return new Promise((resolve, reject) => {
            this.file.readAsDataURL(path, filename)
                .then(res => {
                const documentFile = {
                    file: path + '/' + filename,
                    src: res,
                    filename,
                    path
                };
                resolve(documentFile);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    copyFile(path, fileName, newPath, newFileName) {
        return new Promise((resolve, reject) => {
            this.file.copyFile(path, fileName, newPath, newFileName.split(' ').join('_'))
                .then(() => {
                resolve(newFileName);
            }).catch(err => {
                reject(err);
            });
        });
    }
}
FileChooserService.ɵfac = function FileChooserService_Factory(t) { return new (t || FileChooserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_0__["FileChooser"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_1__["FilePath"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"])); };
FileChooserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FileChooserService, factory: FileChooserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RXuc":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/maintenance/document-file-form/document-file-form.page.ts ***!
  \*********************************************************************************/
/*! exports provided: DocumentFileFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFileFormPage", function() { return DocumentFileFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_v1_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/v1/document.service */ "f16g");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_utils_camera_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/utils/camera.service */ "uHbY");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/utils/http-upload-file.service */ "DDL3");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/toast/toast.component */ "COqc");
/* harmony import */ var _components_modals_image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/modals/image-detail/image-detail.component */ "mdCS");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_v1_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/v1/auth.service */ "HNOL");
/* harmony import */ var _services_utils_file_chooser_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/utils/file-chooser.service */ "LlRr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
























function DocumentFileFormPage_ion_progress_bar_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 12);
} }
function DocumentFileFormPage_ion_list_9_ion_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-radio", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](document_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", document_r7.id);
} }
function DocumentFileFormPage_ion_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-radio-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Tipo de documento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, DocumentFileFormPage_ion_list_9_ion_item_4_Template, 4, 2, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.documentFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.documents);
} }
function DocumentFileFormPage_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_div_10_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r8.takePicture(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Tomar foto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_div_10_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r10.chooseFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Seleccionar documento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DocumentFileFormPage_ion_col_13_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_ion_col_13_ion_icon_2_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18); const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r16.deleteImage(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DocumentFileFormPage_ion_col_13_ion_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-icon", 25);
} }
function DocumentFileFormPage_ion_col_13_ion_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 26);
} }
function DocumentFileFormPage_ion_col_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_ion_col_13_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20); const file_r11 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r19.viewControlImageDetail(file_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DocumentFileFormPage_ion_col_13_ion_icon_2_Template, 1, 0, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, DocumentFileFormPage_ion_col_13_ion_icon_3_Template, 1, 0, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, DocumentFileFormPage_ion_col_13_ion_progress_bar_4_Template, 1, 0, "ion-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r3.sanitizer.bypassSecurityTrustUrl(file_r11.src), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.uploadedFilesIndexes.indexOf(i_r12) <= -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.uploadedFilesIndexes.indexOf(i_r12) > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.uploadingFileIndex === i_r12);
} }
function DocumentFileFormPage_ion_row_15_ion_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 26);
} }
function DocumentFileFormPage_ion_row_15_ion_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_ion_row_15_ion_icon_6_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28); const i_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r26.deleteDocumentFile(i_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DocumentFileFormPage_ion_row_15_ion_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-icon", 32);
} }
function DocumentFileFormPage_ion_row_15_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const file_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", file_r21.filename, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r4.uploadingFileIndex === i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r4.uploadedDocumentFilesIndexes.indexOf(i_r22) <= -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r4.uploadedDocumentFilesIndexes.indexOf(i_r22) > -1);
} }
function DocumentFileFormPage_ion_progress_bar_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 26);
} }
class DocumentFileFormPage {
    constructor(documentService, modalController, cameraService, sanitizer, httpUploadFileService, storage, authService, toastComponent, fileChooserService) {
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
    ngOnInit() {
        this.getDocumentsByDocumentType();
        this.authService.getAuthToken().then(authToken => {
            this.authToken = authToken;
        });
    }
    ngOnDestroy() {
        if (this.documentsUpdated) {
            this.documentService.setUpdatedDocuments$(this.documentsUpdated);
        }
    }
    getDocumentsByDocumentType() {
        this.loading = true;
        this.documentService.getDocumentsByDocumentType(this.documentTypeId)
            .subscribe((response) => {
            this.documents = response.documents;
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }
    takePicture() {
        this.cameraService.takePicture().then((cameraPhotoFile) => {
            this.files.push(cameraPhotoFile);
        }).catch(err => {
            this.toastComponent.presentToast(`No se pudo acceder a la cámara (error: ${err})`, 'middle', 3000);
        });
    }
    chooseFile() {
        this.fileChooserService.chooseFile().then((documentFile) => {
            this.documentFiles.push(documentFile);
        }).catch(err => {
            alert(JSON.stringify(err));
            this.toastComponent.presentToast(`No se pudo seleccionar el archivo (error: ${err})`, 'middle', 3000);
        });
    }
    viewControlImageDetail(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modals_image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_8__["ImageDetailComponent"],
                componentProps: { file }
            });
            yield modal.present();
        });
    }
    deleteImage(i) {
        this.files.splice(i, 1);
    }
    deleteDocumentFile(i) {
        this.documentFiles.splice(i, 1);
    }
    submit() {
        const body = {
            document_id: this.documentFormControl.value
        };
        this.documentService.storeUploadedDocument(body)
            .subscribe((response) => {
            this.documentsUpdated = true;
            this.uploadedDocumentId = response.uploaded_document.id;
            if (this.files.length > 0 || this.documentFiles.length > 0) {
                this.checkFiles();
            }
            else {
                this.closeModal();
            }
        }, error => {
        }, () => {
        });
    }
    checkFiles() {
        this.uploadedFilesIndexes = [];
        this.uploadingErrorFilesIndexes = [];
        this.uploadedDocumentFilesIndexes = [];
        this.uploadingErrorDocumentFilesIndexes = [];
        this.uploadFiles().then(() => {
            this.closeModal();
        });
    }
    closeModal() {
        this.submitting = false;
        this.dismiss(true);
    }
    uploadFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let i = 0;
            this.uploadingFileIndex = i;
            for (const file of this.files) {
                yield this.uploadFile(file.file)
                    .then(() => {
                    this.uploadedFilesIndexes.push(i);
                })
                    .catch(err => {
                    this.uploadingErrorFilesIndexes.push(i);
                }).finally(() => {
                    i++;
                    this.uploadingFileIndex = i;
                });
            }
            for (const file of this.documentFiles) {
                yield this.uploadFile(file.file)
                    .then(() => {
                    this.uploadedDocumentFilesIndexes.push(i);
                })
                    .catch(err => {
                    this.uploadingErrorDocumentFilesIndexes.push(i);
                }).finally(() => {
                    i++;
                    this.uploadingDocumentFileIndex = i;
                });
            }
        });
    }
    uploadFile(file) {
        return new Promise((resolve, reject) => {
            const body = {
                uploaded_document_id: this.uploadedDocumentId.toString()
            };
            this.httpUploadFileService.uploadFile('document-files', file, this.authToken, body)
                .then(() => {
                resolve(true);
            })
                .catch(err => {
                reject(err);
                this.toastComponent.presentToast('No se pudo cargar el archivo. Intente nuevamente', 'medium', 2500);
            });
        });
    }
    dismiss(success) {
        this.modalController.dismiss({ success });
    }
}
DocumentFileFormPage.ɵfac = function DocumentFileFormPage_Factory(t) { return new (t || DocumentFileFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_v1_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_camera_service__WEBPACK_IMPORTED_MODULE_4__["CameraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_http_upload_file_service__WEBPACK_IMPORTED_MODULE_6__["HttpUploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_v1_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_7__["ToastComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_utils_file_chooser_service__WEBPACK_IMPORTED_MODULE_11__["FileChooserService"])); };
DocumentFileFormPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: DocumentFileFormPage, selectors: [["app-document-file-form"]], inputs: { documentTypeId: "documentTypeId" }, decls: 20, vars: 7, consts: [["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], ["class", "ion-margin-top", "type", "indeterminate", 4, "ngIf"], [4, "ngIf"], ["class", "ion-text-center", 4, "ngIf"], [1, "ion-text-center"], ["size", "6", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "ion-padding", "ion-text-center"], ["type", "indeterminate", 4, "ngIf"], [1, "custom-button", 3, "disabled", "click"], ["type", "indeterminate", 1, "ion-margin-top"], [3, "formControl"], ["lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none"], [3, "value"], [1, "custom-secondary-button", 3, "click"], ["name", "camera"], ["name", "document-attach"], ["size", "6"], ["alt", "control-image", 1, "control-image", 3, "src", "click"], ["name", "trash", "class", "delete-icon", 3, "click", 4, "ngIf"], ["name", "checkmark", "class", "checkmark-icon", "color", "success", 4, "ngIf"], ["name", "trash", 1, "delete-icon", 3, "click"], ["name", "checkmark", "color", "success", 1, "checkmark-icon"], ["type", "indeterminate"], ["size", "9"], ["size", "3"], ["name", "trash", 3, "click", 4, "ngIf"], ["name", "checkmark", "color", "success", 4, "ngIf"], ["name", "trash", 3, "click"], ["name", "checkmark", "color", "success"]], template: function DocumentFileFormPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_Template_ion_button_click_3_listener() { return ctx.dismiss(false); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentFileFormPage_Template_ion_button_click_18_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, " Aceptar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: white;\n}\n\nion-item-sliding[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 0 7px 2px lightgrey;\n  --background: #f4f5f8;\n}\n\nion-item-options[_ngcontent-%COMP%] {\n  background: #f4f5f8;\n}\n\n.custom-date-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n}\n\n.form-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: block;\n  font-size: 0.85em;\n  text-align: left;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.control-image[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 150px;\n  width: 100%;\n}\n\n.not-approved[_ngcontent-%COMP%] {\n  --background: #898989;\n  color: white;\n  box-shadow: none;\n}\n\n.approved[_ngcontent-%COMP%] {\n  --background: #c7f3cc;\n  color: black;\n  box-shadow: none;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #f7f8f9;\n  font-family: NunitoSans, \"sans-serif\";\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #757dfb;\n  --color: white;\n}\n\nion-list[_ngcontent-%COMP%] {\n  --background: transparent;\n  background: transparent;\n  padding: 0;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL29wZXJhdGlvbi1jb250cm9scy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vZG9jdW1lbnQtZmlsZS1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBQXJEQTtFQUNFLHFCQUFBO0VBQ0EscUNBQUE7QUF3REY7O0FBckRBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBd0RGOztBQXJEQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBd0RGOztBQXJEQTtFQUNFLHlCQUFBO0FBd0RGIiwiZmlsZSI6ImRvY3VtZW50LWZpbGUtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc1N2RmYjtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4IGxpZ2h0Z3JleTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG5pb24taXRlbS1vcHRpb25zIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmN1c3RvbS1kYXRlLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udHJvbC1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm90LWFwcHJvdmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjODk4OTg5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcHByb3ZlZCB7XG4gIC0tYmFja2dyb3VuZDogICNjN2YzY2M7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9vcGVyYXRpb24tY29udHJvbHNcIjtcblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmN2Y4Zjk7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLCAnc2Fucy1zZXJpZic7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzU3ZGZiO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class DocumentService {
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL;
        this.V1 = 'v1/app/';
        this.updatedDocuments$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    getDocumentTypes() {
        return this.http.get(`${this.API_URL}${this.V1}document-types`);
    }
    getDocumentsByDocumentType(documentType) {
        return this.http.get(`${this.API_URL}${this.V1}document-types/${documentType}/documents`);
    }
    getUploadedDocuments() {
        return this.http.get(`${this.API_URL}${this.V1}uploaded-documents`);
    }
    storeUploadedDocument(body) {
        return this.http.post(`${this.API_URL}${this.V1}uploaded-documents`, body);
    }
    deleteUploadedDocument(uploadedDocument) {
        return this.http.delete(`${this.API_URL}${this.V1}uploaded-documents/${uploadedDocument.id}`);
    }
    getUpdatedDocuments$() {
        return this.updatedDocuments$.asObservable();
    }
    setUpdatedDocuments$(updated) {
        this.updatedDocuments$.next(updated);
    }
}
DocumentService.ɵfac = function DocumentService_Factory(t) { return new (t || DocumentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DocumentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DocumentService, factory: DocumentService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default~pages-maintenance-document-file-form-document-file-form-module~pages-maintenance-document-fo~c271ae65-es2015.js.map