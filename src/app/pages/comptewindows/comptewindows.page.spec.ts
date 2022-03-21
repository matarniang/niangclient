import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComptewindowsPage } from './comptewindows.page';

describe('ComptewindowsPage', () => {
  let component: ComptewindowsPage;
  let fixture: ComponentFixture<ComptewindowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptewindowsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComptewindowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
