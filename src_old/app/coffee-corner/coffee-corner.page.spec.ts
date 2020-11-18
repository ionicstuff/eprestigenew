import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoffeeCornerPage } from './coffee-corner.page';

describe('CoffeeCornerPage', () => {
  let component: CoffeeCornerPage;
  let fixture: ComponentFixture<CoffeeCornerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeCornerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoffeeCornerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
