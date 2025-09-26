import {DocumentType} from './DocumentType';

export interface Document {
  id: number;
  name: string;
  document_type_id: number;
  document_type: DocumentType;
}
