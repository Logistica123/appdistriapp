import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrbanDistributionIndicatorsComponent } from './urban-distribution-indicators.component';

describe('UrbanDistributionIndicatorsComponent', () => {
  let component: UrbanDistributionIndicatorsComponent;
  let fixture: ComponentFixture<UrbanDistributionIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanDistributionIndicatorsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrbanDistributionIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
