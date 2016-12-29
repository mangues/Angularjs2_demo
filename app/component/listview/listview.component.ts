import { Component, Input } from '@angular/core';
import { News } from './news.bean';
@Component({
  moduleId: module.id,
  selector: 'mangues-listview',
  templateUrl: './list.html'
})
export class ListViewComponent {
  @Input()
  items:News[];
}
