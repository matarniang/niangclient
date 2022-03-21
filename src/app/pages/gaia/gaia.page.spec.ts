import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaiaPage } from './gaia.page';

describe('GaiaPage', () => {
  let component: GaiaPage;
  let fixture: ComponentFixture<GaiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
