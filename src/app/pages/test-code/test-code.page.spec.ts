import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestCodePage } from './test-code.page';

describe('TestCodePage', () => {
  let component: TestCodePage;
  let fixture: ComponentFixture<TestCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
