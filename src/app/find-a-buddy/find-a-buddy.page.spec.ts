import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindABuddyPage } from './find-a-buddy.page';

describe('FindABuddyPage', () => {
  let component: FindABuddyPage;
  let fixture: ComponentFixture<FindABuddyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindABuddyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindABuddyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
