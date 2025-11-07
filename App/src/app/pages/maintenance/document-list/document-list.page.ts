import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DocumentService, PersonalLiquidacion, PersonalPersonaSummary} from '../../../services/v1/document.service';
import {Subscription} from 'rxjs';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.page.html',
  styleUrls: ['./document-list.page.scss'],
})
export class DocumentListPage implements OnInit, OnDestroy {
  @ViewChild('fileInput') fileInputRef: ElementRef<HTMLInputElement>;

  liquidaciones: PersonalLiquidacion[] = [];
  loading = true;
  uploading = false;
  persona: PersonalPersonaSummary | null = null;
  selectedFiles: File[] = [];
  errorMessage: string | null = null;
  updatedDocumentsSubscription: Subscription;

  constructor(
    private documentService: DocumentService,
    private storage: Storage,
  ) {
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

  ngOnDestroy(): void {
    if (this.updatedDocumentsSubscription) {
      this.updatedDocumentsSubscription.unsubscribe();
    }
  }

  get hasPersonaLoaded(): boolean {
    return Boolean(this.persona);
  }

  private loadPersona() {
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
              this.errorMessage = err?.message ?? 'No se pudo recuperar la información del personal.';
              this.loading = false;
            },
          });
      })
      .catch(() => {
        this.errorMessage = 'No se pudo acceder a la información almacenada. Inicia sesión nuevamente.';
        this.loading = false;
      });
  }

  getDocuments(event?: CustomEvent) {
    if (!this.hasPersonaLoaded) {
      this.loading = false;
      event?.detail?.complete?.();
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
          this.errorMessage = err?.message ?? 'No se pudieron cargar las liquidaciones.';
          this.loading = false;
          event?.detail?.complete?.();
        },
        complete: () => {
          this.loading = false;
          event?.detail?.complete?.();
        },
      });
  }

  triggerFileSelection() {
    if (!this.fileInputRef) {
      return;
    }

    this.fileInputRef.nativeElement.click();
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
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
          this.errorMessage = err?.message ?? 'No se pudieron subir las liquidaciones.';
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

  openLiquidacion(liquidacion: PersonalLiquidacion) {
    const target = liquidacion.absoluteDownloadUrl || liquidacion.downloadUrl;
    if (!target) {
      this.errorMessage = 'No se encontró la URL de descarga para este archivo.';
      return;
    }

    window.open(target, '_blank');
  }

  doRefresh(event: CustomEvent) {
    this.getDocuments(event);
  }
}
