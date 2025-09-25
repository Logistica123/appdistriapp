import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliveryPrioritySelectComponent } from './delivery-priority-select.component';

describe('DeliveryPrioritySelectComponent', () => {
  let component: DeliveryPrioritySelectComponent;
  let fixture: ComponentFixture<DeliveryPrioritySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPrioritySelectComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryPrioritySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
