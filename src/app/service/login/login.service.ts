import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // 用户是否登录的状态，因为该Service是单例的，因此是应用级别的，如果外部调用登录方法成功后将该属性设置为true
  login = false;
  // 被路由守卫阻挡的路由配置的url，登陆成功后重定向使用，这里初始化为主页
  redirectUrl = '';
  userLoginUrl = '/user/login';

  /**
   * 用户登录请求
   * @param data 请求参数
   */
  userLogin(data: any): Promise<object> {
    // return this.http.post(this.userLoginUrl, data).toPromise();
    return of({data: '', msg: '登录成功', code: 1000}).toPromise();
  }

  constructor(private http: HttpClient) {
  }
}
