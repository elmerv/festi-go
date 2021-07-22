import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Event1Page } from './event1.page';

describe('Event1Page', () => {
  let component: Event1Page;
  let fixture: ComponentFixture<Event1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Event1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Event1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
