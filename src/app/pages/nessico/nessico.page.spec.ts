import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NessicoPage } from './nessico.page';

describe('NessicoPage', () => {
  let component: NessicoPage;
  let fixture: ComponentFixture<NessicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NessicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NessicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
