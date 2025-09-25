import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrbanDistributionOrderItemComponent } from './urban-distribution-order-item.component';

describe('UrbanDistributionOrderItemComponent', () => {
  let component: UrbanDistributionOrderItemComponent;
  let fixture: ComponentFixture<UrbanDistributionOrderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanDistributionOrderItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrbanDistributionOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
