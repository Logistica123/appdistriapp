import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';
import {DocumentFormPage} from './document-form.page';
import {Router} from '@angular/router';

describe('DocumentFormPage', () => {
  let component: DocumentFormPage;
  let fixture: ComponentFixture<DocumentFormPage>;

  beforeEach(waitForAsync(() => {
    const routerStub = {
      navigateByUrl: () => {}
    } as Partial<Router>;

    TestBed.configureTestingModule({
      declarations: [ DocumentFormPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: Router, useValue: routerStub },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
