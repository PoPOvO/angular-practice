import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {LoginService} from '../../service/login/login.service';

/**
 * 用户登录
 */
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnInit {
  validateForm: FormGroup;

  login(): void {
    this.loginService.userLogin(this.validateForm.getRawValue()).then((res) => {
      console.log('login响应结果', res);
      // 登录成功后，将登录成功的标志设置为true，这个登录会是应用级别的
      this.loginService.login = true;
      // 登录成功导航到正确的页面
      this.router.navigate([this.loginService.redirectUrl]).then(() => {
        this.msg.success('登录成功！');
      });
    });
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private msg: NzMessageService,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    // 如果已经登录过则无需登录
    if (this.loginService.login) {
      this.router.navigate([this.loginService.redirectUrl]);
    }

    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
}
