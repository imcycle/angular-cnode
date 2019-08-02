import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';


import { TabbarComponent } from './components/tabbar/tabbar.component';
import { ArticlecardComponent } from './components/articlecard/articlecard.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
  ],
  declarations: [
    TabbarComponent,
    ArticlecardComponent,
    TestComponent,
  ],
  exports: [
    TabbarComponent,
    ArticlecardComponent,
    TestComponent,
  ]
})
export class SharedModule { }

