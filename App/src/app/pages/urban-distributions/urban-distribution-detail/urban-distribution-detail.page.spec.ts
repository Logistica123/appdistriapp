import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrbanDistributionDetailPage } from './urban-distribution-detail.page';

describe('UrbanDistributionDetailPage', () => {
  let component: UrbanDistributionDetailPage;
  let fixture: ComponentFixture<UrbanDistributionDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanDistributionDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrbanDistributionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
