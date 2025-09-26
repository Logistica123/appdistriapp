import { TestBed } from '@angular/core/testing';

import { OfflineOrderManagerService } from './offline-order-manager.service';

describe('OfflineOrderManagerService', () => {
  let service: OfflineOrderManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineOrderManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
