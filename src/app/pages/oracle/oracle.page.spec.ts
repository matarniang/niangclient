import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OraclePage } from './oracle.page';

describe('OraclePage', () => {
  let component: OraclePage;
  let fixture: ComponentFixture<OraclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OraclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OraclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
