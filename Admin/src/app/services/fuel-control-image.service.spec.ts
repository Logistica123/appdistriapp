import { TestBed } from '@angular/core/testing';

import { FuelControlImageService } from './fuel-control-image.service';

describe('FuelControlImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuelControlImageService = TestBed.get(FuelControlImageService);
    expect(service).toBeTruthy();
  });
});
