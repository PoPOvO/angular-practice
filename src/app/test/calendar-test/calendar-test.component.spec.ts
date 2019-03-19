import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarTestComponent } from './calendar-test.component';

describe('CalendarTestComponent', () => {
  let component: CalendarTestComponent;
  let fixture: ComponentFixture<CalendarTestComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
