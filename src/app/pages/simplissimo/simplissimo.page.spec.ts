import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimplissimoPage } from './simplissimo.page';

describe('SimplissimoPage', () => {
  let component: SimplissimoPage;
  let fixture: ComponentFixture<SimplissimoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplissimoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimplissimoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
