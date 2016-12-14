import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
//  template: `<h1 [style.color]="color">Hello,Angular<b>{{sb}}</b></h1>
//             <button (click)="roulette()">ROULETTE</button>`,
     template: `<mangues-header></mangues-header>
                <mangues-listview></mangues-listview>`,
})
export class AppComponent  {

}
