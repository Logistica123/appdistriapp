import {Component, OnInit} from '@angular/core';
import {DocumentType} from '../../../interfaces/DocumentType';
import {ModalController} from '@ionic/angular';
import {DocumentService} from '../../../services/v1/document.service';
import {DocumentFileFormPage} from '../document-file-form/document-file-form.page';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.page.html',
  styleUrls: ['./document-form.page.scss'],
})
export class DocumentFormPage implements OnInit {
  documentTypes: DocumentType[] = [];
  documentTypeFC = new FormControl();
  loading = false;

  constructor(private modalController: ModalController,
              private router: Router,
              private documentService: DocumentService) {
  }

  ngOnInit() {
    this.getDocumentTypes();
  }

  getDocumentTypes() {
    this.loading = true;
    this.documentService.getDocumentTypes()
      .subscribe((response: any) => {
          this.documentTypes = response.document_types;
          this.loading = false;
        },
        error => {
          this.loading = false;
        });
  }

  async addDocument() {
    const modal = await this.modalController.create({
      component: DocumentFileFormPage,
      componentProps: {
        documentTypeId: this.documentTypeFC.value
      }
    });
    await modal.present();

    modal.onDidDismiss().then(result => {
      if (result?.data?.success) {
        //
      }
    });
  }

  navigateBack() {
    this.router.navigateByUrl('document-list');
  }
}
