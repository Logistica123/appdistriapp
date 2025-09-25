import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TollControlListPage } from './toll-control-list.page';

describe('TollControlListPage', () => {
  let component: TollControlListPage;
  let fixture: ComponentFixture<TollControlListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TollControlListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TollControlListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
