import { TestBed } from '@angular/core/testing';

import { FileChooserService } from './file-chooser.service';

describe('FileChooserService', () => {
  let service: FileChooserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileChooserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
