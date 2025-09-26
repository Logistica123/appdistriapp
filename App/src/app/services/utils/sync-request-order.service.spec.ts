import { TestBed } from '@angular/core/testing';

import { SyncRequestOrderService } from './sync-request-order.service';

describe('SyncRequestOrderService', () => {
  let service: SyncRequestOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncRequestOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
