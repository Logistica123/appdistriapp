import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelControlImageComponent } from './fuel-control-image.component';

describe('FuelControlImageComponent', () => {
  let component: FuelControlImageComponent;
  let fixture: ComponentFixture<FuelControlImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelControlImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelControlImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
