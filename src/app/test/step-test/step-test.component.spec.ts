import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepTestComponent } from './step-test.component';

describe('StepTestComponent', () => {
  let component: StepTestComponent;
  let fixture: ComponentFixture<StepTestComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
