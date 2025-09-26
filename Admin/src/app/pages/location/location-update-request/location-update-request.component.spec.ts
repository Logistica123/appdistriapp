import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationUpdateRequestComponent } from './location-update-request.component';

describe('LocationUpdateRequestComponent', () => {
  let component: LocationUpdateRequestComponent;
  let fixture: ComponentFixture<LocationUpdateRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationUpdateRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationUpdateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
