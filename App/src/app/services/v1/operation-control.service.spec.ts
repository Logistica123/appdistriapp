import { TestBed } from '@angular/core/testing';

import { OperationControlService } from './operation-control.service';

describe('OperationControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperationControlService = TestBed.get(OperationControlService);
    expect(service).toBeTruthy();
  });
});
