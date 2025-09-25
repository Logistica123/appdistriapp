import { TestBed } from '@angular/core/testing';

import { DriverGeopositionService } from './driver-geoposition.service';

describe('DriverGeopositionService', () => {
  let service: DriverGeopositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverGeopositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
