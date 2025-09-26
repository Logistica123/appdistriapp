import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUbiEditComponent } from './material-ubi-edit.component';

describe('MaterialUbiEditComponent', () => {
  let component: MaterialUbiEditComponent;
  let fixture: ComponentFixture<MaterialUbiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialUbiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialUbiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
