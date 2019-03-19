import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import { TestModule } from './test/test.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { UserLoginComponent } from './core/user-login/user-login.component';

registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomePageComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    // TestModule, //删除掉该模块
    // AdminModule, //删除并惰性加载
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
