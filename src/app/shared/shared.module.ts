import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { TestComponent } from './components/test/test.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
  ],
  declarations: [
    TabbarComponent,
    TestComponent,
  ],
  exports: [
    TabbarComponent,
    TestComponent,
  ]
})
export class SharedModule { }