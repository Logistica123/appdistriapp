import { TestBed } from '@angular/core/testing';

import { FuelControlService } from './fuel-control.service';

describe('FuelControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuelControlService = TestBed.inject(FuelControlService);
    expect(service).toBeTruthy();
  });
});
