import { TestBed } from '@angular/core/testing';

import { SuggestionService } from './suggestion.service';

describe('SuggestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuggestionService = TestBed.inject(SuggestionService);
    expect(service).toBeTruthy();
  });
});
