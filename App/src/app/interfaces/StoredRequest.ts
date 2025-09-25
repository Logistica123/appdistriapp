export interface StoredRequest {
  method: string;
  body: any;
  time: number;
  id: string;
  attempts: number;
  type: 'request' | 'file';
  action: string;
  file?: string;
  authToken?: string;
  pUid?: string;
  pId?: number;
}
