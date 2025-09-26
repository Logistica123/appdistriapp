import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotDeliveredComponent } from './not-delivered.component';

describe('NotDeliveredComponent', () => {
  let component: NotDeliveredComponent;
  let fixture: ComponentFixture<NotDeliveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotDeliveredComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
