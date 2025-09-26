import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletWithdrawalRequestListPage } from './wallet-withdrawal-request-list.page';

describe('WalletWithdrawalRequestListPage', () => {
  let component: WalletWithdrawalRequestListPage;
  let fixture: ComponentFixture<WalletWithdrawalRequestListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletWithdrawalRequestListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletWithdrawalRequestListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
