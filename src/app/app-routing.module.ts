import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ForecastComponent} from "./pages/forecast/forecast.component";
import {ErrorComponent} from "./pages/error/error.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'four-days',
    component: ForecastComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
