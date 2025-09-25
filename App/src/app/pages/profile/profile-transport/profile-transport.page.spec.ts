import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileTransportPage } from './profile-transport.page';

describe('ProfileTransportPage', () => {
  let component: ProfileTransportPage;
  let fixture: ComponentFixture<ProfileTransportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTransportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileTransportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
