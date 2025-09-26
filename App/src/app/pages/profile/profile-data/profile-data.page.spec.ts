import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileDataPage } from './profile-data.page';

describe('ProfileDataPage', () => {
  let component: ProfileDataPage;
  let fixture: ComponentFixture<ProfileDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
