import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {UploadedDocument} from '../../interfaces/UploadedDocument';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  private updatedDocuments$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
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

  deleteUploadedDocument(uploadedDocument: UploadedDocument) {
    return this.http.delete(`${this.API_URL}${this.V1}uploaded-documents/${uploadedDocument.id}`);
  }

  getUpdatedDocuments$(): Observable<boolean> {
    return this.updatedDocuments$.asObservable();
  }

  setUpdatedDocuments$(updated: boolean) {
    this.updatedDocuments$.next(updated);
  }
}
