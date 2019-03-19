import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminTimeLineComponent } from './admin-time-line.component';

describe('AdminTimeLineComponent', () => {
  let component: AdminTimeLineComponent;
  let fixture: ComponentFixture<AdminTimeLineComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTimeLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
