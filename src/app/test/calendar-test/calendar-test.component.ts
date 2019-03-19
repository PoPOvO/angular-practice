import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-test',
  templateUrl: './calendar-test.component.html'
})
export class CalendarTestComponent {
  selectedValue = new Date('2017-01-25');

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
  }
}
