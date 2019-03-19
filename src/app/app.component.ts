import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';

  // 打印路由配置
  constructor(private route: Router) {
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(this.route.config, replacer, 2));
  }

  clearNameRouting() {
    this.route.navigate([{ outlets: { popup: null }}]);
  }
}
