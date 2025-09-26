import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationControlListComponent } from './operation-control-list.component';

describe('OperationControlListComponent', () => {
  let component: OperationControlListComponent;
  let fixture: ComponentFixture<OperationControlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationControlListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationControlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
