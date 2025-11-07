import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DocumentService, PersonalLiquidacion, PersonalPersonaSummary } from '../../services/v1/document.service';

type LiquidacionCard = { main: PersonalLiquidacion; attachments: PersonalLiquidacion[] };

@Component({
  selector: 'app-liquidation-list',
  templateUrl: './liquidation-list.page.html',
  styleUrls: ['./liquidation-list.page.scss'],
})
export class LiquidationListPage implements OnInit {
  @ViewChild('fileInput') fileInputRef?: ElementRef<HTMLInputElement>;
  @ViewChild('replaceInput') replaceInputRef?: ElementRef<HTMLInputElement>;

  liquidaciones: PersonalLiquidacion[] = [];
  private allLiquidaciones: PersonalLiquidacion[] = [];
  cards: LiquidacionCard[] = [];
  private cardSource: LiquidacionCard[] = [];
  monthOptions: Array<{ value: string; label: string }> = [{ value: '', label: 'Todos los meses' }];
  fortnightOptions: Array<{ value: string; label: string }> = [
    { value: '', label: 'Todas las quincenas' },
    { value: 'Q1', label: 'Primera quincena (1-15)' },
    { value: 'Q2', label: 'Segunda quincena (16-fin)' },
  ];
  selectedMonth = '';
  selectedFortnight = '';
  loading = false;
  errorMessage: string | null = null;
  persona: PersonalPersonaSummary | null = null;
  selectedFiles: File[] = [];
  uploading = false;
  uploadError: string | null = null;
  uploadFeedback: string | null = null;
  quickUploadTarget: PersonalLiquidacion | null = null;
  quickUploadingIds = new Set<number>();
  deletingIds = new Set<number>();
  private hiddenLiquidacionIds = new Set<number>();
  private readonly HIDDEN_STORAGE_KEY_PREFIX = 'liquidaciones-hidden:';
  private readonly monthFormatter = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' });

  constructor(
    private documentService: DocumentService,
    private storage: Storage,
  ) {}

  ngOnInit(): void {
    this.loadPersona();
  }

  get hasPersonaLoaded(): boolean {
    return Boolean(this.persona);
  }

  async loadPersona(): Promise<void> {
    this.loading = true;
    this.errorMessage = null;

    const cachedPersona = this.documentService.getPersonaSnapshot();
    if (cachedPersona) {
      this.persona = cachedPersona;
      this.resetLiquidacionesState();
      this.loadHiddenLiquidaciones(cachedPersona.id)
        .catch(() => undefined)
        .finally(() => this.getLiquidaciones());
      return;
    }

    try {
      const storedEmail = await this.storage.get('senderId');

      if (!storedEmail) {
        this.errorMessage = 'No pudimos identificar tu usuario. Iniciá sesión nuevamente.';
        this.loading = false;
        return;
      }

      this.documentService.ensurePersonaByEmail(String(storedEmail)).subscribe({
        next: (persona) => {
          this.persona = persona;
          this.resetLiquidacionesState();
          this.loadHiddenLiquidaciones(persona.id)
            .catch(() => undefined)
            .finally(() => this.getLiquidaciones());
        },
        error: (err) => {
          this.errorMessage = err?.message ?? 'No pudimos obtener tus datos en Personal.';
          this.loading = false;
        },
      });
    } catch (error) {
      this.errorMessage = 'No pudimos acceder a la información almacenada. Iniciá sesión nuevamente.';
      this.loading = false;
    }
  }

  getLiquidaciones(event?: CustomEvent): void {
    if (!this.hasPersonaLoaded) {
      this.loading = false;
      event?.detail?.complete?.();
      return;
    }

    this.loading = true;
    this.errorMessage = null;

    this.documentService.getLiquidaciones().subscribe({
      next: (liquidaciones) => {
        this.allLiquidaciones = liquidaciones ?? [];
        this.errorMessage = null;
        this.applyHiddenFilter();
      },
      error: (err) => {
        this.errorMessage = err?.message ?? 'No pudimos cargar tus liquidaciones.';
        this.loading = false;
        event?.detail?.complete?.();
      },
      complete: () => {
        this.loading = false;
        event?.detail?.complete?.();
      },
    });
  }

  openLiquidacion(liquidacion: PersonalLiquidacion): void {
    const target = liquidacion.absoluteDownloadUrl || liquidacion.downloadUrl;

    if (!target) {
      this.errorMessage = 'No encontramos la descarga asociada a este archivo.';
      return;
    }

    window.open(target, '_blank');
  }

  doRefresh(event: CustomEvent): void {
    if (!this.hasPersonaLoaded) {
      this.loadPersona();
      event?.detail?.complete?.();
      return;
    }

    this.getLiquidaciones(event);
  }

  triggerFileSelection(): void {
    this.fileInputRef?.nativeElement.click();
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }

  const files = Array.from(input.files);
    const invalid = files.find((file) => !this.isPdf(file));
    if (invalid) {
      this.uploadError = 'El archivo a subir debe ser PDF.';
      this.uploadFeedback = null;
      this.clearSelectedFiles();
      input.value = '';
      return;
    }

    this.selectedFiles = files;
    this.uploadError = null;
    this.uploadFeedback = null;
  }

  private isPdf(file: File): boolean {
    const mime = file.type?.toLowerCase() ?? '';
    if (mime === 'application/pdf') {
      return true;
    }

    if (file.name?.toLowerCase().endsWith('.pdf')) {
      return true;
    }

    return false;
  }

  clearSelectedFiles(preserveFeedback = false): void {
    this.selectedFiles = [];
    this.uploadError = null;

    if (!preserveFeedback) {
      this.uploadFeedback = null;
    }

    if (this.fileInputRef) {
      this.fileInputRef.nativeElement.value = '';
    }
  }

  uploadSelectedFiles(): void {
    if (!this.selectedFiles.length || this.uploading) {
      return;
    }

    this.uploading = true;
    this.uploadError = null;
    this.uploadFeedback = null;

    const targetDate = this.resolveTargetDateForUpload();

    this.documentService.uploadLiquidaciones(this.selectedFiles, targetDate).subscribe({
      next: () => {
        this.uploadFeedback = 'Liquidaciones subidas correctamente.';
        this.clearSelectedFiles(true);
        this.getLiquidaciones();
      },
      error: (err) => {
        this.uploadError = this.resolveHttpError(err) ?? 'No se pudieron subir las liquidaciones.';
        this.uploading = false;
      },
      complete: () => {
        this.uploading = false;
      },
    });
  }

  triggerReplaceLiquidacion(liquidacion: PersonalLiquidacion): void {
    if (this.quickUploadingIds.has(liquidacion.id)) {
      return;
    }

    this.quickUploadTarget = liquidacion;
    if (this.replaceInputRef) {
      this.replaceInputRef.nativeElement.value = '';
      this.replaceInputRef.nativeElement.click();
    }
  }

  onReplaceSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file || !this.quickUploadTarget) {
      this.replaceInputRef && (this.replaceInputRef.nativeElement.value = '');
      return;
    }

    if (!this.isPdf(file)) {
      this.uploadError = 'El archivo a subir debe ser PDF.';
      this.uploadFeedback = null;
      this.replaceInputRef && (this.replaceInputRef.nativeElement.value = '');
      return;
    }

    const target = this.quickUploadTarget;
    this.quickUploadingIds.add(target.id);
    this.uploadError = null;
    this.uploadFeedback = null;

    const targetDate = target.fechaVencimiento ?? this.resolveTargetDateForUpload();

    this.documentService.uploadSingleLiquidacion(file, target.id, targetDate).subscribe({
      next: (newDoc) => {
        const attachment = newDoc ?? {
          id: Date.now(),
          nombre: file.name,
          downloadUrl: null,
          absoluteDownloadUrl: null,
          mime: file.type ?? null,
          size: file.size ?? null,
          sizeLabel: file.size ? this.formatSize(file.size) : null,
          fechaCarga: targetDate ?? null,
          fechaVencimiento: targetDate ?? null,
          tipoNombre: 'Liquidación',
          parentDocumentId: target.id,
          isAttachment: true,
        };

        this.uploadFeedback = `Liquidación "${attachment.nombre}" enviada.`;
        this.documentService.setUpdatedDocuments$(true);
        this.quickUploadingIds.delete(target.id);
        this.quickUploadTarget = null;
        this.getLiquidaciones();
      },
      error: (err) => {
        this.uploadError = this.resolveHttpError(err) ?? 'No se pudo enviar la liquidación.';
        this.quickUploadingIds.delete(target.id);
        this.quickUploadTarget = null;
      },
      complete: () => {
        this.quickUploadingIds.delete(target.id);
        this.quickUploadTarget = null;
      },
    });
  }

  deleteLiquidacion(liquidacion: PersonalLiquidacion, relatedAttachments: PersonalLiquidacion[] = []): void {
    if (this.deletingIds.has(liquidacion.id)) {
      return;
    }

    const confirmed = confirm(`¿Eliminar "${liquidacion.nombre}" de DistriApp?`);
    if (!confirmed) {
      return;
    }

    const idsToHide = new Set<number>([liquidacion.id]);
    relatedAttachments?.forEach((attachment) => idsToHide.add(attachment.id));

    idsToHide.forEach((id) => this.deletingIds.add(id));
    this.uploadError = null;
    this.uploadFeedback = null;

    this.hideLiquidaciones(Array.from(idsToHide))
      .then(() => {
        const hiddenCount = idsToHide.size;
        const message =
          hiddenCount > 1
            ? `Se ocultaron ${hiddenCount} archivos en DistriApp.`
            : `Liquidación "${liquidacion.nombre}" oculta en DistriApp.`;
        this.uploadFeedback = `${message} El archivo seguirá disponible en Personal.`;
        this.documentService.setUpdatedDocuments$(true);
      })
      .catch((err) => {
        console.error(err);
        this.uploadError = 'No se pudo ocultar la liquidación en DistriApp.';
      })
      .finally(() => {
        idsToHide.forEach((id) => this.deletingIds.delete(id));
      });
  }

  private hiddenStorageKey(personaId: number): string {
    return `${this.HIDDEN_STORAGE_KEY_PREFIX}${personaId}`;
  }

  private resetLiquidacionesState(): void {
    this.allLiquidaciones = [];
    this.liquidaciones = [];
    this.cardSource = [];
    this.cards = [];
    this.updateFilterOptions([]);
  }

  private async loadHiddenLiquidaciones(personaId: number): Promise<void> {
    this.hiddenLiquidacionIds = new Set<number>();

    try {
      const stored = await this.storage.get(this.hiddenStorageKey(personaId));
      if (Array.isArray(stored)) {
        const parsedIds = stored
          .map((value) => Number(value))
          .filter((id) => Number.isFinite(id) && id > 0);
        this.hiddenLiquidacionIds = new Set<number>(parsedIds);
      }
    } catch (error) {
      console.warn('[LiquidationList] No se pudieron cargar liquidaciones ocultas', error);
      this.hiddenLiquidacionIds = new Set<number>();
    }

    this.applyHiddenFilter();
  }

  private async persistHiddenLiquidaciones(): Promise<void> {
    if (!this.persona) {
      return;
    }

    const key = this.hiddenStorageKey(this.persona.id);
    await this.storage.set(key, Array.from(this.hiddenLiquidacionIds));
  }

  private async hideLiquidaciones(ids: number[]): Promise<void> {
    if (!ids.length) {
      return;
    }

    ids.forEach((id) => this.hiddenLiquidacionIds.add(id));
    await this.persistHiddenLiquidaciones();
    this.applyHiddenFilter();
  }

  private applyHiddenFilter(): void {
    const source = this.allLiquidaciones ?? [];
    const visible = source.filter((doc) => !this.hiddenLiquidacionIds.has(doc.id));
    this.liquidaciones = visible;
    this.updateFilterOptions(visible);
    this.rebuildDisplayCards(visible);
  }

  private rebuildDisplayCards(sourceDocs: PersonalLiquidacion[] = this.liquidaciones): void {
    if (!sourceDocs) {
      this.cards = [];
      return;
    }

    const attachmentsByParent = new Map<number, PersonalLiquidacion[]>();
    const mainDocuments: PersonalLiquidacion[] = [];
    const orphanAttachments: PersonalLiquidacion[] = [];

    sourceDocs.forEach((doc) => {
      const parentId =
        typeof doc.parentDocumentId === 'number' && !Number.isNaN(doc.parentDocumentId)
          ? doc.parentDocumentId
          : null;
      const isAttachment = doc.isAttachment ?? Boolean(parentId);

      if (isAttachment) {
        if (parentId !== null) {
          const existing = attachmentsByParent.get(parentId) ?? [];
          existing.push(doc);
          attachmentsByParent.set(parentId, existing);
        } else {
          orphanAttachments.push(doc);
        }
      } else {
        mainDocuments.push(doc);
      }
    });

    mainDocuments.sort((a, b) => this.sortByMostRecent(a, b));
    attachmentsByParent.forEach((attachments, key) => {
      attachments.sort((a, b) => this.sortByMostRecent(a, b));
      attachmentsByParent.set(key, attachments);
    });

    const cards: LiquidacionCard[] = [];

    mainDocuments.forEach((doc) => {
      cards.push({
        main: doc,
        attachments: attachmentsByParent.get(doc.id) ?? [],
      });
    });

    orphanAttachments
      .sort((a, b) => this.sortByMostRecent(a, b))
      .forEach((attachment) => {
        cards.push({
          main: attachment,
          attachments: [],
        });
      });

    this.cardSource = cards;
    this.applyCardsFilter();
  }

  private applyCardsFilter(): void {
    const filtered = this.cardSource.filter((card) => this.matchesFilters(card.main));
    this.cards = filtered;
  }

  private matchesFilters(doc: PersonalLiquidacion): boolean {
    const period = this.resolveDocPeriod(doc);

    if (this.selectedMonth) {
      if (this.selectedMonth === 'unknown') {
        if (period.monthKey !== 'unknown') {
          return false;
        }
      } else if (period.monthKey !== this.selectedMonth) {
        return false;
      }
    }

    if (this.selectedFortnight) {
      if (this.selectedFortnight === 'NO_DATE') {
        if (period.fortnightKey !== 'NO_DATE') {
          return false;
        }
      } else if (period.fortnightKey !== this.selectedFortnight) {
        return false;
      }
    }

    return true;
  }

  private resolveDocDate(doc: PersonalLiquidacion): Date | null {
    const raw = doc.fechaVencimiento ?? doc.fechaCarga ?? null;
    if (!raw) {
      return null;
    }

    const date = new Date(raw);
    if (Number.isNaN(date.getTime())) {
      return null;
    }

    return date;
  }

  private resolveDocPeriod(doc: PersonalLiquidacion): {
    monthKey: string;
    monthLabel: string;
    fortnightKey: string;
    fortnightLabel: string;
    date: Date | null;
  } {
    const date = this.resolveDocDate(doc);

    if (!date) {
      return {
        monthKey: 'unknown',
        monthLabel: 'Sin fecha',
        fortnightKey: 'NO_DATE',
        fortnightLabel: 'Sin fecha definida',
        date: null,
      };
    }

    const monthKey = `${date.getFullYear()}-${this.pad(date.getMonth() + 1)}`;
    const monthLabel = this.capitalize(this.monthFormatter.format(date));
    const isFirstFortnight = date.getDate() <= 15;

    return {
      monthKey,
      monthLabel,
      fortnightKey: isFirstFortnight ? 'Q1' : 'Q2',
      fortnightLabel: isFirstFortnight ? 'Primera quincena (1-15)' : 'Segunda quincena (16-fin)',
      date,
    };
  }

  private updateFilterOptions(docs: PersonalLiquidacion[]): void {
    const monthMap = new Map<string, string>();
    let hasUnknown = false;
    let hasQ1 = false;
    let hasQ2 = false;
    let hasNoDate = false;

    docs.forEach((doc) => {
      const period = this.resolveDocPeriod(doc);
      if (period.monthKey === 'unknown') {
        hasUnknown = true;
      } else {
        monthMap.set(period.monthKey, period.monthLabel);
      }

      switch (period.fortnightKey) {
        case 'Q1':
          hasQ1 = true;
          break;
        case 'Q2':
          hasQ2 = true;
          break;
        default:
          hasNoDate = true;
          break;
      }
    });

    const monthOptions: Array<{ value: string; label: string }> = [{ value: '', label: 'Todos los meses' }];

    const sortedMonths = Array.from(monthMap.entries()).sort((a, b) => this.getMonthOrderValue(b[0]) - this.getMonthOrderValue(a[0]));
    sortedMonths.forEach(([key, label]) => {
      monthOptions.push({ value: key, label });
    });

    if (hasUnknown) {
      monthOptions.push({ value: 'unknown', label: 'Sin fecha' });
    }

    this.monthOptions = monthOptions;
    if (!this.monthOptions.some((option) => option.value === this.selectedMonth)) {
      this.selectedMonth = '';
    }

    const fortnightOptions: Array<{ value: string; label: string }> = [{ value: '', label: 'Todas las quincenas' }];
    if (hasQ1 || docs.length === 0) {
      fortnightOptions.push({ value: 'Q1', label: 'Primera quincena (1-15)' });
    }
    if (hasQ2 || docs.length === 0) {
      fortnightOptions.push({ value: 'Q2', label: 'Segunda quincena (16-fin)' });
    }
    if (hasNoDate) {
      fortnightOptions.push({ value: 'NO_DATE', label: 'Sin fecha definida' });
    }

    this.fortnightOptions = fortnightOptions;
    if (!this.fortnightOptions.some((option) => option.value === this.selectedFortnight)) {
      this.selectedFortnight = '';
    }
  }

  private getMonthOrderValue(key: string): number {
    if (!/^\d{4}-\d{2}$/.test(key)) {
      return Number.NEGATIVE_INFINITY;
    }

    const year = Number(key.slice(0, 4));
    const month = Number(key.slice(5));
    if (Number.isNaN(year) || Number.isNaN(month)) {
      return Number.NEGATIVE_INFINITY;
    }

    return year * 12 + month;
  }

  private resolveTargetDateForUpload(): string | null {
    if (!this.selectedMonth || this.selectedMonth === 'unknown') {
      return null;
    }

    if (this.selectedFortnight === 'NO_DATE') {
      return null;
    }

    let year: number | null = null;
    let month: number | null = null;

    if (/^\d{4}-\d{2}$/.test(this.selectedMonth)) {
      year = Number(this.selectedMonth.slice(0, 4));
      month = Number(this.selectedMonth.slice(5));
    } else if (/^\d{2}$/.test(this.selectedMonth)) {
      const now = new Date();
      year = now.getFullYear();
      month = Number(this.selectedMonth);
    }

    if (year === null || month === null || Number.isNaN(year) || Number.isNaN(month) || month < 1 || month > 12) {
      return null;
    }

    let day = 1;
    if (this.selectedFortnight === 'Q1') {
      day = 15;
    } else if (this.selectedFortnight === 'Q2') {
      day = new Date(year, month, 0).getDate();
    }

    return `${year}-${this.pad(month)}-${this.pad(day)}`;
  }

  private pad(value: number): string {
    return String(value).padStart(2, '0');
  }

  private capitalize(value: string): string {
    if (!value) {
      return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  onMonthFilterChange(value: string): void {
    this.selectedMonth = value ?? '';
    if (!this.selectedMonth) {
      this.selectedFortnight = '';
    } else if (this.selectedMonth === 'unknown') {
      if (this.fortnightOptions.some((option) => option.value === 'NO_DATE')) {
        this.selectedFortnight = 'NO_DATE';
      } else {
        this.selectedFortnight = '';
      }
    }
    this.applyCardsFilter();
  }

  onFortnightFilterChange(value: string): void {
    this.selectedFortnight = value ?? '';
    this.applyCardsFilter();
  }

  getPeriodLabel(doc: PersonalLiquidacion): string | null {
    const period = this.resolveDocPeriod(doc);
    if (period.monthKey === 'unknown') {
      return period.fortnightKey === 'NO_DATE' ? 'Sin fecha asignada' : period.fortnightLabel;
    }

    if (period.fortnightKey === 'NO_DATE') {
      return period.monthLabel;
    }

    return `${period.monthLabel} · ${period.fortnightLabel}`;
  }

  private sortByMostRecent(a: PersonalLiquidacion, b: PersonalLiquidacion): number {
    const parseTime = (item: PersonalLiquidacion): number => {
      const date = this.resolveDocDate(item);
      if (date) {
        return date.getTime();
      }
      return 0;
    };

    const timeA = parseTime(a);
    const timeB = parseTime(b);

    if (timeA !== timeB) {
      return timeB - timeA;
    }

    return (b.id ?? 0) - (a.id ?? 0);
  }

  private formatSize(bytes: number | null): string | null {
    if (!bytes || bytes <= 0) {
      return null;
    }

    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let size = bytes;
    let index = 0;

    while (size >= 1024 && index < units.length - 1) {
      size /= 1024;
      index++;
    }

    return index === 0 ? `${Math.round(size)} ${units[index]}` : `${size.toFixed(1)} ${units[index]}`;
  }

  private resolveHttpError(err: unknown): string | null {
    if (!err) {
      return null;
    }

    const anyErr = err as { message?: string; error?: any };
    const fallback = anyErr?.message ?? null;

    const payload = anyErr?.error;

    if (!payload) {
      return fallback;
    }

    if (typeof payload === 'string') {
      return payload;
    }

    if (payload?.message && !payload?.errors) {
      return payload.message;
    }

    const errors = payload?.errors;
    if (errors && typeof errors === 'object') {
      for (const key of Object.keys(errors)) {
        const messages = errors[key];
        if (Array.isArray(messages) && messages.length) {
          return messages[0];
        }
      }
    }

    return fallback;
  }
}
