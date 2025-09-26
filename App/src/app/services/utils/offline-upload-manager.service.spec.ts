import { TestBed } from '@angular/core/testing';

import { OfflineUploadManagerService } from './offline-upload-manager.service';

describe('OfflineUploadManagerService', () => {
  let service: OfflineUploadManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineUploadManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
