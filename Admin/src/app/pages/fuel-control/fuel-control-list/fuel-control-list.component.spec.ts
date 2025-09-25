import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelControlListComponent } from './fuel-control-list.component';

describe('FuelControlListComponent', () => {
  let component: FuelControlListComponent;
  let fixture: ComponentFixture<FuelControlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelControlListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelControlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
