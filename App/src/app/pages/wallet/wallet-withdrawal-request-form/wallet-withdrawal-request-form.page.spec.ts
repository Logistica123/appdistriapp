import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletWithdrawalRequestFormPage } from './wallet-withdrawal-request-form.page';

describe('WalletWithdrawalRequestFormPage', () => {
  let component: WalletWithdrawalRequestFormPage;
  let fixture: ComponentFixture<WalletWithdrawalRequestFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletWithdrawalRequestFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletWithdrawalRequestFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
