import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationControlDetailComponent } from './operation-control-detail.component';

describe('OperationControlDetailComponent', () => {
  let component: OperationControlDetailComponent;
  let fixture: ComponentFixture<OperationControlDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationControlDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationControlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
