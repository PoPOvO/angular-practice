import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html'
})
export class TableTestComponent implements OnInit {
  listOfSelection = [
    {
      text    : 'Select All Row',
      onSelect: () => {
        this.checkAll(true);
      }
    },
    {
      text    : 'Select Odd Row',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => this.mapOfCheckedId[data.id] = index % 2 !== 0);
        this.refreshStatus();
      }
    },
    {
      text    : 'Select Even Row',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => this.mapOfCheckedId[data.id] = index % 2 === 0);
        this.refreshStatus();
      }
    }
  ];
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData = [];
  listOfAllData = [];
  mapOfCheckedId = {};

  currentPageDataChange($event: Array<{ id: number, name: string; age: number; address: string}>): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[ item.id ]);
    this.isIndeterminate = this.listOfDisplayData.some(item => this.mapOfCheckedId[ item.id ]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[ item.id ] = value);
    this.refreshStatus();
  }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfAllData.push({
        id      : i,
        name    : `Edward King ${i}`,
        age     : 32,
        address : `London, Park Lane no. ${i}`
      });
    }
  }
}
