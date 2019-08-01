import { NgModule } from '@angular/core';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
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