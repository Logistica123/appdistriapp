import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationControlEditComponent } from './operation-control-edit.component';

describe('OperationControlEditComponent', () => {
  let component: OperationControlEditComponent;
  let fixture: ComponentFixture<OperationControlEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationControlEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationControlEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
