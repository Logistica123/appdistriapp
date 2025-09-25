import { TestBed } from '@angular/core/testing';

import { UbiService } from './ubi.service';

describe('UbiService', () => {
  let service: UbiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
