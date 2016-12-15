import { Component } from '@angular/core';
import { Header } from './component/header/header.bean';
import { News } from './component/listview/news.bean';
@Component({
  selector: 'my-app',
//  template: `<h1 [style.color]="color">Hello,Angular<b>{{sb}}</b></h1>
//             <button (click)="roulette()">ROULETTE</button>`,
     template: `<mangues-header [bean]="header"></mangues-header>
                <mangues-listview></mangues-listview>`,
})
export class AppComponent  {
   header: Header = { title: '简云',
                    login: 'http://www.baidu.com' ,
                    register:'http://www.qq.com'};
}
