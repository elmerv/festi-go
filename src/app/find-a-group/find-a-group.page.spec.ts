import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindAGroupPage } from './find-a-group.page';

describe('FindAGroupPage', () => {
  let component: FindAGroupPage;
  let fixture: ComponentFixture<FindAGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindAGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
