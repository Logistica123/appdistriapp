import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUbiListComponent } from './material-ubi-list.component';

describe('MaterialUbiListComponent', () => {
  let component: MaterialUbiListComponent;
  let fixture: ComponentFixture<MaterialUbiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialUbiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialUbiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
