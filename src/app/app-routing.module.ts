import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomePageComponent} from './home-page/home-page.component';
import {UserLoginComponent} from './core/user-login/user-login.component';
import {AuthGuard} from './core/guard/auth/auth.guard';

const routes: Routes = [
  // 登录页面
  {
    path: 'login',
    component: UserLoginComponent
  },
  // 惰性加载test模块
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  // 惰性加载test模块
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule',
    canLoad: [AuthGuard]
  },
  // 主页
  {
    path: 'home',
    component: HomePageComponent
  },
  // 默认路由:主页
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // 错误页面
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
