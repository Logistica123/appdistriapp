import {Document} from './Document';
import {DocumentFile} from './DocumentFile';

export interface UploadedDocument {
  id: number;
  created_at: string;
  document: Document;
  document_files: DocumentFile[];
}
