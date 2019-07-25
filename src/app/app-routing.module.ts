import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CenterComponent } from './pages/center/center.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'center', component: CenterComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
