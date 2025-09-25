import { TestBed } from '@angular/core/testing';

import { OperationControlImageService } from './operation-control-image.service';

describe('OperationControlImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperationControlImageService = TestBed.get(OperationControlImageService);
    expect(service).toBeTruthy();
  });
});
