import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlAnimComponent } from './control-anim.component';

describe('ControlAnimComponent', () => {
  let component: ControlAnimComponent;
  let fixture: ComponentFixture<ControlAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlAnimComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
