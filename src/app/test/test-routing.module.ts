import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableTestComponent} from './table-test/table-test.component';
import {CalendarTestComponent} from './calendar-test/calendar-test.component';
import {TestRootComponent} from './test-root/test-root.component';
import {StepTestComponent} from './step-test/step-test.component';
import {AuthGuard} from '../core/guard/auth/auth.guard';

const routes: Routes = [
  // 多重路由
  {
    path: 'step',
    component: StepTestComponent,
    outlet: 'popup'
  },
  {
    path: '', // 原始路由路径为: path: 'test'
    canActivateChild: [AuthGuard],
    component: TestRootComponent,
    children: [
      {
        path: 'calender',
        component: CalendarTestComponent
      },
      {
        path: 'table',
        component: TableTestComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
