import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditUrbanDistributionComponent } from './edit-urban-distribution.component';

describe('EditUrbanDistributionComponent', () => {
  let component: EditUrbanDistributionComponent;
  let fixture: ComponentFixture<EditUrbanDistributionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUrbanDistributionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditUrbanDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
