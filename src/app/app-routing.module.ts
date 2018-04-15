import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AnotherComponent} from "./components/another/another.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'other',
    component: AnotherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
