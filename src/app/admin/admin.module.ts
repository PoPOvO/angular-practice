import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminRootComponent } from './admin-root/admin-root.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AdminTimeLineComponent } from './admin-time-line/admin-time-line.component';

@NgModule({
  declarations: [AdminRootComponent, AdminTimeLineComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
