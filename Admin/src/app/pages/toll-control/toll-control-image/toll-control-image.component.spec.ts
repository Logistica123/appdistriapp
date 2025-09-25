import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TollControlImageComponent } from './toll-control-image.component';

describe('TollControlImageComponent', () => {
  let component: TollControlImageComponent;
  let fixture: ComponentFixture<TollControlImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TollControlImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TollControlImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
