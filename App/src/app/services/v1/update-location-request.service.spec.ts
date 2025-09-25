import { TestBed } from '@angular/core/testing';

import { UpdateLocationRequestService } from './update-location-request.service';

describe('UpdateLocationRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateLocationRequestService = TestBed.get(UpdateLocationRequestService);
    expect(service).toBeTruthy();
  });
});
