import { TestBed } from '@angular/core/testing';

import { OrderOfflineManagerService } from './order-offline-manager.service';

describe('OrderOfflineManagerService', () => {
  let service: OrderOfflineManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderOfflineManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
