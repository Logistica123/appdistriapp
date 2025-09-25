import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilePaymentPage } from './profile-payment.page';

describe('ProfilePaymentPage', () => {
  let component: ProfilePaymentPage;
  let fixture: ComponentFixture<ProfilePaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
