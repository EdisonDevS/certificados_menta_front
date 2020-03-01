import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisCertificadosPage } from './mis-certificados.page';

describe('MisCertificadosPage', () => {
  let component: MisCertificadosPage;
  let fixture: ComponentFixture<MisCertificadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCertificadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisCertificadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
