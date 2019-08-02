import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { CollectPageComponent } from './pages/collect-page/collect-page.component';
import { CenterPageComponent } from './pages/center-page/center-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'collect', component: CollectPageComponent },
  { path: 'center', component: CenterPageComponent },
  { path: 'article/:id', component: ArticlePageComponent },
  { path: '404', component: Error404PageComponent },
  { path: 'test', component: TestPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
