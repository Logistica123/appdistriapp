import { TestBed } from '@angular/core/testing';

import { RequestSyncOrderService } from './request-sync-order.service';

describe('RequestSyncOrderService', () => {
  let service: RequestSyncOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestSyncOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
