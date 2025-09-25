import { TestBed } from '@angular/core/testing';

import { MaterialUbiService } from './material-ubi.service';

describe('MaterialUbiService', () => {
  let service: MaterialUbiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialUbiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
