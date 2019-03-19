import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminRootComponent} from './admin-root/admin-root.component';
import {AdminTimeLineComponent} from './admin-time-line/admin-time-line.component';
import {AuthGuard} from '../core/guard/auth/auth.guard';
import {CanDeactivateGuard} from '../core/guard/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminRootComponent,
    children: [
      {
        canActivate: [AuthGuard],
        canDeactivate: [CanDeactivateGuard],
        path: '',
        component: AdminTimeLineComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
