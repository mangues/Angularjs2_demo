import { Component } from '@angular/core';
import { Header } from './component/header/header.bean';
import { News } from './component/listview/news.bean';
@Component({
  selector: 'my-app',
//  template: `<h1 [style.color]="color">Hello,Angular<b>{{sb}}</b></h1>
//             <button (click)="roulette()">ROULETTE</button>`,
     template: `<mangues-header [bean]="header"></mangues-header>
                <mangues-listview [items]="news"></mangues-listview>`,
})
export class AppComponent  {
   url: string = './item.news.html'
   header: Header = { title: '简云', login: 'http://www.baidu.com' ,register:'http://www.qq.com'};
   news:News[]=[{title:'想知道宁泽涛每天游多少圈？送他 Misfit 最新款 Speedo Shine',
                content:'就算你敢带着 Apple Watch 下水游泳，它也不能记录你游了多少圈。 夏天刚来时就不停地听到有人提起“有没有在我游泳的时候可以帮忙数圈的设备”，今天 Misfit 终于赶在夏天结束之前推出可追踪游泳运动的新款 Shine。这款新设备是 Misfit 与泳衣品牌 Speedo （速比涛）合作推出，因此被命名为 Speedo Shine。',
                author:'mangues',time:'4',url:"http://www.baidu.com"},
                {title:'半数用户弃用 Apple Music？苹果发话了',
                             content:'前不久，苹果公司高级副总裁 Eddy Cue 还在宣称 Apple Music 试用期用户超 1100 万，最近就有一份来自 MusicWatch 的调查报告，让人大跌眼镜。MusicWatch 针对美国 5000 名 13 岁以上人群进行抽样调查，得出数据：约有 77% 的 iOS 用户知道 Apple Music，只有 11% 的用户正在使用它；而在已经注册 Apple Music 三个月免费试用服务的用户中，48% 表示已经弃用，61% 称已关闭 iTunes 中的自动订阅功能。',
                             author:'mangues',time:'4',url:"http://www.baidu.com"},
                {title:'关于新 Apple TV，这里有几点你应该知道的',
                content:'新版的 Apple TV 之前一直有传闻将在 WWDC 上亮相，可是事与愿违。下一代 iPhone 即将于下月与大家见面，新版 Apple TV 将同新 iPhone 一起亮相的传言又是四起。而且现在的传言中还加入了新料。据 9to5Mac 的消息，Apple TV 不仅要在九月亮相，其诸多细节也一并被曝出',
                author:'mangues',time:'4',url:"http://www.baidu.com"}]
}
