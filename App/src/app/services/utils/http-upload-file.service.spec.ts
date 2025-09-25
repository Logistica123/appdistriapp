import { TestBed } from '@angular/core/testing';

import { HttpUploadFileService } from './http-upload-file.service';

describe('HttpUploadFileService', () => {
  let service: HttpUploadFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpUploadFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
