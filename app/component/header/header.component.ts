import { Component, Input } from '@angular/core';
import { Header } from './header.bean';
@Component({
  moduleId: module.id,
  selector: 'mangues-header',
  templateUrl: './header.html'
})
export class HeaderComponent {
     @Input()
     bean: Header;
}
