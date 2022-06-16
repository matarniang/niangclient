import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandeWindowsPage } from './demande-windows.page';

describe('DemandeWindowsPage', () => {
  let component: DemandeWindowsPage;
  let fixture: ComponentFixture<DemandeWindowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeWindowsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandeWindowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
