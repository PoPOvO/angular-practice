import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  ActivatedRoute,
  Router,
  CanActivateChild,
  CanLoad, Route, UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../../../service/login/login.service';

/**
 * 控制登录权限的路由守卫
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin(state.url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }

  // 检测用户是否登录
  checkLogin(redirectUrl: string): boolean {
    if (this.loginService.login) {
      return true;
    }

    // 当用户没有登录，将其重定向到登录页面，并记录登录后重定向的url
    this.route.navigate(['login']);
    this.loginService.redirectUrl = redirectUrl;
    return false;
  }

  constructor(
   private loginService: LoginService,
   private route: Router
  ) {}

  // 在用户成功登录后才加载路由配置的模块
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    // 直接调用登录检测方法，登录后加载
    return this.checkLogin(route.path);
  }
}
