import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather/weather.service";
import {LOCATION_KEY} from "../../app.const";
import {LocationInterface} from "../../services/weather/models/location.interface";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) {
    const location: LocationInterface = JSON.parse(localStorage.getItem(LOCATION_KEY));
    this.weatherService.getFiveDayForecast(location.latitude, location.longitude).subscribe();
  }

  ngOnInit(): void {
  }

}
