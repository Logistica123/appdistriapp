import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, forkJoin, of, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {UploadedDocument} from '../../interfaces/UploadedDocument';

export interface PersonalPersonaSummary {
  id: number;
  nombre: string | null;
  email: string;
}

export interface PersonalLiquidacion {
  id: number;
  nombre: string;
  downloadUrl: string | null;
  absoluteDownloadUrl: string | null;
  mime: string | null;
  size: number | null;
  sizeLabel: string | null;
  fechaCarga: string | null;
  fechaVencimiento: string | null;
  tipoNombre: string | null;
  parentDocumentId: number | null;
  isAttachment: boolean;
}

interface PersonalRecordResponse {
  data?: Array<{
    id: number;
    nombre?: string | null;
    nombres?: string | null;
    apellidos?: string | null;
    email?: string | null;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  API_URL = environment.API_URL;
  PERSONAL_API_URL = environment.PERSONAL_API_URL || environment.API_URL;
  V1 = 'v1/app/';

  private updatedDocuments$ = new BehaviorSubject<boolean>(false);
  private personaSubject$ = new BehaviorSubject<PersonalPersonaSummary | null>(null);

  constructor(private http: HttpClient) {
  }

  getUpdatedDocuments$(): Observable<boolean> {
    return this.updatedDocuments$.asObservable();
  }

  setUpdatedDocuments$(updated: boolean) {
    this.updatedDocuments$.next(updated);
  }

  getPersona$(): Observable<PersonalPersonaSummary | null> {
    return this.personaSubject$.asObservable();
  }

  getPersonaSnapshot(): PersonalPersonaSummary | null {
    return this.personaSubject$.getValue();
  }

  ensurePersonaByEmail(email: string): Observable<PersonalPersonaSummary> {
    const normalizedEmail = (email ?? '').trim().toLowerCase();
    if (!normalizedEmail) {
      return throwError(() => new Error('No se pudo determinar el correo electrónico del conductor.'));
    }

    const cached = this.personaSubject$.getValue();
    if (cached && cached.email === normalizedEmail) {
      return of(cached);
    }

    const params = new HttpParams().set('email', normalizedEmail);
    return this.http
      .get<PersonalRecordResponse>(`${this.PERSONAL_API_URL}personal`, { params })
      .pipe(
        map((response) => {
          const persona = response?.data?.[0];
          if (!persona) {
            throw new Error('No se encontró un registro de personal para el correo indicado.');
          }
          const nombre =
            persona.nombre
            ?? [persona.nombres, persona.apellidos].filter(Boolean).join(' ').trim()
            ?? persona.email
            ?? normalizedEmail;

          return {
            id: persona.id,
            nombre: nombre || normalizedEmail,
            email: normalizedEmail,
          } as PersonalPersonaSummary;
        }),
        tap((persona) => this.personaSubject$.next(persona))
      );
  }

  getLiquidaciones(): Observable<PersonalLiquidacion[]> {
    const persona = this.personaSubject$.getValue();
    if (!persona) {
      return throwError(() => new Error('No se ha cargado el registro de personal.'));
    }

    return this.http
      .get<{ data?: Array<any> }>(`${this.PERSONAL_API_URL}personal/${persona.id}/liquidaciones`)
      .pipe(
        map((response) => {
          const items = response?.data ?? [];
          return items.map((item) => this.normalizeLiquidacion(item));
        })
      );
  }

  uploadLiquidaciones(files: File[], fechaVencimiento?: string | null): Observable<unknown[]> {
    const persona = this.personaSubject$.getValue();
    if (!persona) {
      return throwError(() => new Error('No se ha cargado el registro de personal.'));
    }

    if (!files || files.length === 0) {
      return of([]);
    }

    const uploads = files.map((file) => {
      if (!this.isPdf(file)) {
        return throwError(() => new Error('El archivo debe estar en formato PDF.'));
      }

      const formData = new FormData();
      const safeName = file.name?.trim().length ? file.name.trim() : `liquidacion-${Date.now()}`;
      formData.append('archivo', file, safeName);
      formData.append('nombre', safeName);
      formData.append('esLiquidacion', '1');
      if (fechaVencimiento) {
        formData.append('fechaVencimiento', fechaVencimiento);
      }

      return this.http.post(`${this.PERSONAL_API_URL}personal/${persona.id}/documentos`, formData);
    });

    return forkJoin(uploads);
  }

  private normalizeLiquidacion(data: any, fallbackName?: string, file?: File): PersonalLiquidacion {
    const id = Number(data?.id ?? Date.now());
    const rawName = (data?.nombre ?? fallbackName ?? `Liquidación ${id}`).trim();
    const downloadUrl = data?.downloadUrl ?? data?.download_url ?? null;
    const absoluteUrlSource = data?.absoluteDownloadUrl ?? data?.absolute_download_url ?? downloadUrl;
    const absoluteDownloadUrl = this.resolveAbsoluteUrl(absoluteUrlSource ?? downloadUrl);

    const parentIdRaw = data?.parentDocumentId ?? data?.parent_document_id ?? null;
    const parsedParentId =
      typeof parentIdRaw === 'number'
        ? parentIdRaw
        : parentIdRaw !== null && parentIdRaw !== undefined && parentIdRaw !== ''
          ? Number(parentIdRaw)
          : null;
    const parentDocumentId = Number.isFinite(parsedParentId as number) ? (parsedParentId as number) : null;
    const isAttachment = Boolean(
      data?.isAttachment ??
        data?.is_attachment ??
        (parentDocumentId !== null && !Number.isNaN(parentDocumentId))
    );

    const size: number | null = typeof data?.size === 'number' ? data.size : file?.size ?? null;
    const sizeLabel = data?.sizeLabel ?? (size ? this.formatSize(size) : null);

    const fechaVencimiento = data?.fechaVencimiento ?? data?.fecha_vencimiento ?? null;
    const fechaCarga = data?.fechaCarga ?? data?.fecha_carga ?? fechaVencimiento ?? null;

    return {
      id,
      nombre: rawName,
      downloadUrl: downloadUrl ?? absoluteDownloadUrl,
      absoluteDownloadUrl,
      mime: data?.mime ?? file?.type ?? null,
      size,
      sizeLabel,
      fechaCarga,
      fechaVencimiento,
      tipoNombre: data?.tipoNombre ?? data?.tipo_nombre ?? 'Liquidación',
      parentDocumentId,
      isAttachment,
    };
  }

  private resolveAbsoluteUrl(path: string | null): string | null {
    if (!path) {
      return null;
    }

    try {
      return new URL(path, this.PERSONAL_API_URL).toString();
    } catch {
      return path;
    }
  }

  private formatSize(bytes: number): string {
    if (!bytes || bytes <= 0) {
      return '—';
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

  uploadSingleLiquidacion(file: File, parentDocumentId?: number, fechaVencimiento?: string | null): Observable<PersonalLiquidacion> {
    const persona = this.personaSubject$.getValue();
    if (!persona) {
      return throwError(() => new Error('No se ha cargado el registro de personal.'));
    }

    if (!this.isPdf(file)) {
      return throwError(() => new Error('El archivo debe estar en formato PDF.'));
    }

    const formData = new FormData();
    const safeName = file.name?.trim().length
      ? file.name.trim()
      : `liquidacion-${Date.now()}`;

    formData.append('archivo', file, safeName);
    formData.append('nombre', safeName);
    formData.append('esLiquidacion', '1');
    if (typeof parentDocumentId === 'number' && !Number.isNaN(parentDocumentId)) {
      formData.append('parentDocumentId', String(parentDocumentId));
    }
    if (fechaVencimiento) {
      formData.append('fechaVencimiento', fechaVencimiento);
    }

    return this.http
      .post<{ data?: any }>(`${this.PERSONAL_API_URL}personal/${persona.id}/documentos`, formData)
      .pipe(map(response => this.normalizeLiquidacion(response?.data, safeName, file)));
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

  replaceLiquidacion(liquidacionId: number, file: File): Observable<unknown> {
    const persona = this.personaSubject$.getValue();
    if (!persona) {
      return throwError(() => new Error('No se ha cargado el registro de personal.'));
    }

    const formData = new FormData();
    const safeName = file.name?.trim().length ? file.name.trim() : `liquidacion-${Date.now()}`;
    formData.append('archivo', file, safeName);
    formData.append('nombre', safeName);
    formData.append('esLiquidacion', '1');

    return this.http.put(`${this.PERSONAL_API_URL}personal/${persona.id}/documentos/${liquidacionId}`, formData);
  }

  deleteLiquidacion(liquidacionId: number): Observable<unknown> {
    const persona = this.personaSubject$.getValue();
    if (!persona) {
      return throwError(() => new Error('No se ha cargado el registro de personal.'));
    }

    return this.http.delete(`${this.PERSONAL_API_URL}personal/${persona.id}/documentos/${liquidacionId}`);
  }

  /**
   * Métodos heredados que ya no forman parte del nuevo flujo.
   * Se mantienen para evitar errores de compilación en componentes legacy.
   */
  getDocumentTypes(): Observable<{ document_types: any[] }> {
    console.warn('[DocumentService] getDocumentTypes() está deprecado en el nuevo flujo de liquidaciones.');
    return of({ document_types: [] });
  }

  getDocumentsByDocumentType(documentType: number): Observable<{ documents: any[] }> {
    console.warn('[DocumentService] getDocumentsByDocumentType() está deprecado en el nuevo flujo de liquidaciones.', documentType);
    return of({ documents: [] });
  }

  getUploadedDocuments(): Observable<{ uploaded_documents: any[] }> {
    console.warn('[DocumentService] getUploadedDocuments() está deprecado en el nuevo flujo de liquidaciones.');
    return of({ uploaded_documents: [] });
  }

  storeUploadedDocument(body: unknown): Observable<unknown> {
    console.warn('[DocumentService] storeUploadedDocument() está deprecado en el nuevo flujo de liquidaciones.', body);
    return throwError(() => new Error('La carga de documentos se realiza desde uploadLiquidaciones().'));
  }

  deleteUploadedDocument(uploadedDocument: UploadedDocument): Observable<unknown> {
    console.warn('[DocumentService] deleteUploadedDocument() está deprecado en el nuevo flujo de liquidaciones.', uploadedDocument);
    return throwError(() => new Error('La eliminación de documentos no está disponible en esta versión.'));
  }
}
