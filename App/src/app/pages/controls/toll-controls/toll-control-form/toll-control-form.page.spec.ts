import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TollControlFormPage } from './toll-control-form.page';

describe('TollControlFormPage', () => {
  let component: TollControlFormPage;
  let fixture: ComponentFixture<TollControlFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TollControlFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TollControlFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
