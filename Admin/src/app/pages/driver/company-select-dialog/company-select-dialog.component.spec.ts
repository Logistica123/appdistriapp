import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySelectDialogComponent } from './company-select-dialog.component';

describe('CompanySelectDialogComponent', () => {
  let component: CompanySelectDialogComponent;
  let fixture: ComponentFixture<CompanySelectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySelectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
