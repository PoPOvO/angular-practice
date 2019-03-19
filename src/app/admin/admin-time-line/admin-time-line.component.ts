import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {AdminService} from '../../service/admin/admin.service';
import {Router} from '@angular/router';
import {CanComponentDeactivate} from '../../core/guard/can-deactivate.guard';

@Component({
  selector: 'app-admin-time-line',
  templateUrl: './admin-time-line.component.html'
})
export class AdminTimeLineComponent implements CanComponentDeactivate {
  inputValue;
  isSave = false;

  // 外部调用，
  canDeactivate(redirectUrl): Observable<boolean> | boolean {
    if (this.isSave || !this.inputValue) {
      return true;
    }

    console.log(redirectUrl);
    this.modalService.confirm({
      nzTitle: '确认',
      nzContent: '页面有未保存的修改，是否保存？',
      nzOnOk: () => {
        this.save();
        this.route.navigate([redirectUrl]);
        return true;
      }
    });
  }

  // 对输入框数据进行保存
  save() {
    this.adminService.saveTimeLineData(this.inputValue).then((res) => {
      this.isSave = true;
    });
  }

  constructor(
    private modalService: NzModalService,
    private adminService: AdminService,
    private msg: NzMessageService,
    private route: Router
  ) {}
}
