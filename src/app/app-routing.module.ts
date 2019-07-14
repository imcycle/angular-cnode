import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CenterComponent } from './pages/center/center.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'center', component: CenterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
