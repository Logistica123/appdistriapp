import { TestBed } from '@angular/core/testing';

import { UploadedDocumentService } from './uploaded-document.service';

describe('UploadedDocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadedDocumentService = TestBed.get(UploadedDocumentService);
    expect(service).toBeTruthy();
  });
});
