import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTabsPage } from './wallet-tabs.page';

describe('WalletTabsPage', () => {
  let component: WalletTabsPage;
  let fixture: ComponentFixture<WalletTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
