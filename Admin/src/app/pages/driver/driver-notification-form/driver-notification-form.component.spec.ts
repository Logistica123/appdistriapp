import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverNotificationFormComponent } from './driver-notification-form.component';

describe('DriverNotificationFormComponent', () => {
  let component: DriverNotificationFormComponent;
  let fixture: ComponentFixture<DriverNotificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverNotificationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverNotificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
