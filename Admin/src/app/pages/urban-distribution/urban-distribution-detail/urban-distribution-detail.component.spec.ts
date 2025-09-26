import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanDistributionDetailComponent } from './urban-distribution-detail.component';

describe('UrbanDistributionDetailComponent', () => {
  let component: UrbanDistributionDetailComponent;
  let fixture: ComponentFixture<UrbanDistributionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanDistributionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanDistributionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
