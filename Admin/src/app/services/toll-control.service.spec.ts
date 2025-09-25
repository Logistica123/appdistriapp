import { TestBed } from '@angular/core/testing';

import { TollControlService } from './toll-control.service';

describe('TollControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TollControlService = TestBed.get(TollControlService);
    expect(service).toBeTruthy();
  });
});
