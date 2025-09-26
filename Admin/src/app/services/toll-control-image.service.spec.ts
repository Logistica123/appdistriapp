import { TestBed } from '@angular/core/testing';

import { TollControlImageService } from './toll-control-image.service';

describe('TollControlImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TollControlImageService = TestBed.get(TollControlImageService);
    expect(service).toBeTruthy();
  });
});
