import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InteractPage } from './interact.page';

describe('InteractPage', () => {
  let component: InteractPage;
  let fixture: ComponentFixture<InteractPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InteractPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
