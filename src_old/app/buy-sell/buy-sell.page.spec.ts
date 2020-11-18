import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuySellPage } from './buy-sell.page';

describe('BuySellPage', () => {
  let component: BuySellPage;
  let fixture: ComponentFixture<BuySellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuySellPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuySellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
