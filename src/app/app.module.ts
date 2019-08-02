import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CollectPageComponent } from './pages/collect-page/collect-page.component';
import { CenterPageComponent } from './pages/center-page/center-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomePageComponent,
    CollectPageComponent,
    CenterPageComponent,
    Error404PageComponent,
    TestPageComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
