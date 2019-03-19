import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TableTestComponent } from './table-test/table-test.component';
import { CalendarTestComponent } from './calendar-test/calendar-test.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { TestRootComponent } from './test-root/test-root.component';
import { StepTestComponent } from './step-test/step-test.component';

@NgModule({
  declarations: [TableTestComponent, CalendarTestComponent, TestRootComponent, StepTestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule
  ]
})
export class TestModule { }
