import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  saveAdminTimeLineDataUrl = '/admin/time-line';

  /**
   * 保存time-line视图中用户的编辑数据
   * @param data 数据
   */
  saveTimeLineData(data: any) {
    // return this.http.post(this.saveAdminTimeLineDataUrl, data).toPromise();
    return of({data: '', msg: '保存成功', code: 1000}).toPromise();
  }

  constructor(private http: HttpClient) {
  }
}
