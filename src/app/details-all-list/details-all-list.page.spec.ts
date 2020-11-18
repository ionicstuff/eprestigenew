import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsAllListPage } from './details-all-list.page';

describe('DetailsAllListPage', () => {
  let component: DetailsAllListPage;
  let fixture: ComponentFixture<DetailsAllListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAllListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsAllListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
