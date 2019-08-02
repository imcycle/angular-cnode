import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CollectPageComponent } from './pages/collect-page/collect-page.component';
import { CenterPageComponent } from './pages/center-page/center-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomePageComponent,
    CollectPageComponent,
    CenterPageComponent,
    ArticlePageComponent,
    Error404PageComponent,
    TestPageComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
