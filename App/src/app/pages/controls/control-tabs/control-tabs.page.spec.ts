import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlTabsPage } from './control-tabs.page';

describe('ControlTabsPage', () => {
  let component: ControlTabsPage;
  let fixture: ComponentFixture<ControlTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
