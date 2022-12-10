import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather/weather.service";
import {LOCATION_KEY} from "../../app.const";
import {LocationInterface} from "../../services/weather/models/location.interface";
import {Weather} from "../../services/weather/models/weather.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentWeather$: Observable<Weather>;

  constructor(private weatherService: WeatherService) {
    const location: LocationInterface = JSON.parse(localStorage.getItem(LOCATION_KEY));
    this.currentWeather$ = this.weatherService.getCurrentWeather(location.latitude, location.longitude);
  }

}
