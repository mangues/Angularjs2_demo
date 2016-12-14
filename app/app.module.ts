import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ListViewComponent } from './component/listview/listview.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ListViewComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
