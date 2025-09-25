import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDriverValuesDialogComponent } from './edit-driver-values-dialog.component';

describe('EditDriverValuesDialogComponent', () => {
  let component: EditDriverValuesDialogComponent;
  let fixture: ComponentFixture<EditDriverValuesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDriverValuesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDriverValuesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
