import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandeNessicoPage } from './demande-nessico.page';

describe('DemandeNessicoPage', () => {
  let component: DemandeNessicoPage;
  let fixture: ComponentFixture<DemandeNessicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeNessicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandeNessicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
