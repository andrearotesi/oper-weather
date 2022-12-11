import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherInfoComponent} from "../components/weather-info/weather-info.component";
import {HomeComponent} from "./home/home.component";
import {ForecastComponent} from "./forecast/forecast.component";
import {ErrorComponent} from "./error/error.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {ForecastItemComponent} from "./forecast/forecast-item/forecast-item.component";



@NgModule({
  declarations: [
    HomeComponent,
    ForecastComponent,
    ErrorComponent,
    WeatherInfoComponent,
    ForecastItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PagesModule { }
