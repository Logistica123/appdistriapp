import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TollControlListComponent } from './toll-control-list.component';

describe('TollControlListComponent', () => {
  let component: TollControlListComponent;
  let fixture: ComponentFixture<TollControlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TollControlListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TollControlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
