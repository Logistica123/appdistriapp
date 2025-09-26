import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllOrdersMapPage } from './all-orders-map.page';

describe('AllOrdersMapPage', () => {
  let component: AllOrdersMapPage;
  let fixture: ComponentFixture<AllOrdersMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOrdersMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllOrdersMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
