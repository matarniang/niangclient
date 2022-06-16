import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandeOraclePage } from './demande-oracle.page';

describe('DemandeOraclePage', () => {
  let component: DemandeOraclePage;
  let fixture: ComponentFixture<DemandeOraclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeOraclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandeOraclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
