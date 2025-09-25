import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DocumentService} from '../../../services/v1/document.service';
import {UploadedDocument} from '../../../interfaces/UploadedDocument';
import {DocumentFileImageDetailComponent} from '../../../components/modals/document-file-image-detail/document-file-image-detail.component';
import {DocumentFile} from '../../../interfaces/DocumentFile';
import {HttpUploadFileService} from '../../../services/utils/http-upload-file.service';
import {AuthService} from '../../../services/v1/auth.service';
import {ToastComponent} from '../../../components/toast/toast.component';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.page.html',
  styleUrls: ['./document-list.page.scss'],
})
export class DocumentListPage implements OnInit, OnDestroy {
  uploadedDocuments: UploadedDocument[] = [];
  loading = true;
  authToken: string;
  downloading = false;
  submitting = false;
  updatedDocumentsSubscription: any;

  constructor(private router: Router,
              private documentService: DocumentService,
              private httpUploadFileService: HttpUploadFileService,
              private authService: AuthService,
              private alertController: AlertController,
              private toastComponent: ToastComponent,
              private modalController: ModalController) {
  }

  ngOnInit() {
    this.authService.getAuthToken().then(authToken => {
      this.authToken = authToken;
    });

    this.updatedDocumentsSubscription = this.documentService.getUpdatedDocuments$()
      .subscribe(updated => {
        this.getDocuments();
      });
  }

  ngOnDestroy(): void {
    if (this.updatedDocumentsSubscription) {
      this.updatedDocumentsSubscription.unsubscribe();
    }
  }

  async addDocument() {
    this.router.navigateByUrl('document-form');
  }

  getDocuments() {
    this.loading = true;
    this.documentService.getUploadedDocuments()
      .subscribe((response: any) => {
        this.uploadedDocuments = response.uploaded_documents;
      }, error => {
        this.loading = false;
        //
      }, () => {
        this.loading = false;
        //
      });
  }

  downloadFile(documentFile: DocumentFile) {
    this.downloading = true;
    console.log(documentFile);
    this.httpUploadFileService.downloadFile(
      `document-files/${documentFile.id}/download`,
      {}, this.authToken,
      documentFile.filename,
      documentFile.mime
    )
      .then(() => {
        this.downloading = false;
      }).catch(err => {
      this.downloading = false;
      this.toastComponent.presentToast(
        `No se pudo descargar el archivo. Intente nuevamente`,
        'middle',
        3000,
      );
    });
  }

  async viewDetail(uploadedDocument: UploadedDocument) {
    const modal = await this.modalController.create({
      component: DocumentFileImageDetailComponent,
      cssClass: 'modal-document-image-view',
      componentProps: {
        documentFiles: uploadedDocument.document_files
      }
    });
    await modal.present();
  }

  async presentDeleteDocumentAlertConfirm(uploadedDocument: UploadedDocument) {
    const alert = await this.alertController.create({
      header: '¿Desea eliminar el registro?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //
          }
        }, {
          text: 'Sí',
          handler: () => {
            this.deleteUploadedDocument(uploadedDocument);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteUploadedDocument(uploadedDocument: UploadedDocument) {
    this.submitting = true;
    this.documentService.deleteUploadedDocument(uploadedDocument)
      .subscribe((response: any) => {
        this.uploadedDocuments = this.uploadedDocuments.filter(item => item.id !== uploadedDocument.id);
        this.submitting = false;
      }, error => {
        this.submitting = false;
      });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getDocuments();
      event.target.complete();
    }, 2000);
  }

}
