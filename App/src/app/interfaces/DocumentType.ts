import {Document} from './Document';

export interface DocumentType {
  id: number;
  type: string;
  documents: Document[];
}
