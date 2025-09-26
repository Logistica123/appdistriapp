import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DocumentFile } from '../models/DocumentFile';

@Injectable({
  providedIn: 'root'
})
export class DocumentFileService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  downloadDocumentFile(documentFile: DocumentFile) {
    return this.http.get(`${this.API_URL}${this.V1}document-files/${documentFile.id}/download`, {responseType: 'blob'});
  }
}
