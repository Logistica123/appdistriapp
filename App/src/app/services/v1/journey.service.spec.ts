import { TestBed } from '@angular/core/testing';

import { JourneyService } from './journey.service';

describe('JourneyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JourneyService = TestBed.inject(JourneyService);
    expect(service).toBeTruthy();
  });
});
