import { Component, Input } from '@angular/core';
import {News} from './news.bean'
@Component({
  moduleId: module.id,
  selector: 'mangues-adapter',
  templateUrl:'./item.news.html'
})
export class AdapterComponent {
  @Input()
  item:News;
}
