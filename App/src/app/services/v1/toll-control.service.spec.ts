import { TestBed } from '@angular/core/testing';

import { TollControlService } from './toll-control.service';

describe('TollControlService', () => {
  let service: TollControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TollControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
