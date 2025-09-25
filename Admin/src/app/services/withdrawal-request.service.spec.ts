import { TestBed } from '@angular/core/testing';

import { WithdrawalRequestService } from './withdrawal-request.service';

describe('WithdrawalRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WithdrawalRequestService = TestBed.get(WithdrawalRequestService);
    expect(service).toBeTruthy();
  });
});
