import { TestBed } from '@angular/core/testing';

import { DeliveryImageService } from './delivery-image.service';

describe('DeliveryImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveryImageService = TestBed.get(DeliveryImageService);
    expect(service).toBeTruthy();
  });
});
