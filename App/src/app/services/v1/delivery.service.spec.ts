import { TestBed } from '@angular/core/testing';

import { DeliveryService } from './delivery.service';

describe('DeliveryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveryService = TestBed.inject(DeliveryService);
    expect(service).toBeTruthy();
  });
});
