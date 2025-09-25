import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedDocumentDetailComponent } from './uploaded-document-detail.component';

describe('UploadedDocumentDetailComponent', () => {
  let component: UploadedDocumentDetailComponent;
  let fixture: ComponentFixture<UploadedDocumentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadedDocumentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadedDocumentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
