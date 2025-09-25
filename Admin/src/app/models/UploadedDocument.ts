import { Driver } from './Driver';
import { DocumentFile } from './DocumentFile';
import { Document } from './Document';

export interface UploadedDocument {
  id: number;
  created_at: string;
  driver: Driver;
  document: Document;
  document_files: DocumentFile[];
}
