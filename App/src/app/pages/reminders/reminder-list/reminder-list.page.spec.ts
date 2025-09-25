import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReminderListPage } from './reminder-list.page';

describe('ReminderListPage', () => {
  let component: ReminderListPage;
  let fixture: ComponentFixture<ReminderListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReminderListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
