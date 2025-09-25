import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanDistributionListComponent } from './urban-distribution-list.component';

describe('UrbanDistributionListComponent', () => {
  let component: UrbanDistributionListComponent;
  let fixture: ComponentFixture<UrbanDistributionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanDistributionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanDistributionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
