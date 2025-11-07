import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';
import {DocumentListPage} from './document-list.page';
import {DocumentService} from '../../../services/v1/document.service';
import {of} from 'rxjs';
import {Storage} from '@ionic/storage';

describe('DocumentListPage', () => {
  let component: DocumentListPage;
  let fixture: ComponentFixture<DocumentListPage>;

  beforeEach(waitForAsync(() => {
    const documentServiceStub = {
      getUpdatedDocuments$: () => of(false),
      setUpdatedDocuments$: () => {},
      ensurePersonaByEmail: () => of({ id: 1, nombre: 'Test Persona', email: 'test@example.com' }),
      getLiquidaciones: () => of([]),
      uploadLiquidaciones: () => of([]),
    } as Partial<DocumentService>;

    const storageStub = {
      get: () => Promise.resolve('test@example.com'),
    } as Partial<Storage>;

    TestBed.configureTestingModule({
      declarations: [ DocumentListPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: DocumentService, useValue: documentServiceStub },
        { provide: Storage, useValue: storageStub },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
