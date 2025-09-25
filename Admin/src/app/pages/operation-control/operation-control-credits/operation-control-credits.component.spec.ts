import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationControlCreditsComponent } from './operation-control-credits.component';

describe('OperationControlCreditsComponent', () => {
  let component: OperationControlCreditsComponent;
  let fixture: ComponentFixture<OperationControlCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationControlCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationControlCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
