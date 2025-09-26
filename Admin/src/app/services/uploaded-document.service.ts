import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UploadedDocument } from '../models/UploadedDocument';

@Injectable({
  providedIn: 'root'
})
export class UploadedDocumentService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getUploadedDocuments() {
    return this.http.get(`${this.API_URL}${this.V1}uploaded-documents`);
  }

  getUploadedDocumentsCount() {
    return this.http.get(`${this.API_URL}${this.V1}uploaded-documents/count`);
  }

  downloadUploadedDocument(uploadedDocument: UploadedDocument) {
    return this.http.get(`${this.API_URL}${this.V1}uploaded-documents/${uploadedDocument.id}/download`, {responseType: 'blob'});
  }
}
