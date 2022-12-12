import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather/weather.service";
import {LOCATION_KEY} from "../../app.const";
import {LocationInterface} from "../../services/weather/models/location.interface";
import {Weather} from "../../services/weather/models/weather.model";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  forecast: Weather[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    const location: LocationInterface = JSON.parse(localStorage.getItem(LOCATION_KEY));
    this.weatherService.getNextFiveDaysForecast(location.latitude, location.longitude)
      .subscribe((res: Weather[]) => {
        this.forecast = res;
      });
  }

}
