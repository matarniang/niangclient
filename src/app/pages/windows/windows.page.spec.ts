import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WindowsPage } from './windows.page';

describe('WindowsPage', () => {
  let component: WindowsPage;
  let fixture: ComponentFixture<WindowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WindowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
