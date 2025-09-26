import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DocumentService} from '../../../services/v1/document.service';
import {Document} from '../../../interfaces/Document';
import {FormControl} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {CameraService} from '../../../services/utils/camera.service';
import {Storage} from '@ionic/storage';
import {HttpUploadFileService} from '../../../services/utils/http-upload-file.service';
import {ToastComponent} from '../../../components/toast/toast.component';
import {CameraPhotoFile} from '../../../interfaces/CameraPhotoFile';
import {ImageDetailComponent} from '../../../components/modals/image-detail/image-detail.component';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from '../../../services/v1/auth.service';
import {FileChooserService} from '../../../services/utils/file-chooser.service';

@Component({
  selector: 'app-document-file-form',
  templateUrl: './document-file-form.page.html',
  styleUrls: ['./document-file-form.page.scss'],
})
export class DocumentFileFormPage implements OnInit, OnDestroy {
  @Input() documentTypeId: number;
  documents: Document[] = [];
  documentFormControl = new FormControl();
  loading = false;

  files: CameraPhotoFile[] = [];
  documentFiles: CameraPhotoFile[] = [];
  uploadedDocumentId: number;

  uploadedFilesIndexes: number[] = [];
  uploadingErrorFilesIndexes: number[] = [];
  uploadingFileIndex: number;

  uploadedDocumentFilesIndexes: number[] = [];
  uploadingErrorDocumentFilesIndexes: number[] = [];
  uploadingDocumentFileIndex: number;

  authToken: string;
  submitting = false;
  documentsUpdated = false;

  constructor(private documentService: DocumentService,
              private modalController: ModalController,
              private cameraService: CameraService,
              public sanitizer: DomSanitizer,
              private httpUploadFileService: HttpUploadFileService,
              private storage: Storage,
              private authService: AuthService,
              private toastComponent: ToastComponent,
              private fileChooserService: FileChooserService) {
  }

  ngOnInit() {
    this.getDocumentsByDocumentType();

    this.authService.getAuthToken().then(authToken => {
      this.authToken = authToken;
    });
  }

  ngOnDestroy(): void {
    if (this.documentsUpdated) {
      this.documentService.setUpdatedDocuments$(this.documentsUpdated);
    }
  }

  getDocumentsByDocumentType() {
    this.loading = true;
    this.documentService.getDocumentsByDocumentType(this.documentTypeId)
      .subscribe((response: any) => {
        this.documents = response.documents;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  takePicture() {
    this.cameraService.takePicture().then((cameraPhotoFile: CameraPhotoFile) => {
      this.files.push(cameraPhotoFile);
    }).catch(err => {
      this.toastComponent.presentToast(
        `No se pudo acceder a la cámara (error: ${err})`,
        'middle',
        3000,
      );
    });
  }


  chooseFile() {
    this.fileChooserService.chooseFile().then((documentFile: CameraPhotoFile) => {
      this.documentFiles.push(documentFile);
    }).catch(err => {
      alert(JSON.stringify(err));
      this.toastComponent.presentToast(
        `No se pudo seleccionar el archivo (error: ${err})`,
        'middle',
        3000,
      );
    });
  }

  async viewControlImageDetail(file: CameraPhotoFile) {
    const modal = await this.modalController.create({
      component: ImageDetailComponent,
      componentProps: {file}
    });
    await modal.present();
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
      .subscribe((response: any) => {
        this.documentsUpdated = true;
        this.uploadedDocumentId = response.uploaded_document.id;
        if (this.files.length > 0 || this.documentFiles.length > 0) {
          this.checkFiles();
        } else {
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

  async uploadFiles() {
    let i = 0;
    this.uploadingFileIndex = i;
    for (const file of this.files) {
      await this.uploadFile(file.file)
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
      await this.uploadFile(file.file)
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
  }

  uploadFile(file): Promise<any> {
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
    this.modalController.dismiss({success});
  }
}
