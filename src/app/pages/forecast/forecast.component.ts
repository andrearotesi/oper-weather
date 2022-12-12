import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather/weather.service";
import {Weather} from "../../services/weather/models/weather.model";
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  forecast: Weather[] = [];

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    const location = this.locationService.retrieve();
    this.weatherService.getNextFiveDaysForecast(location.latitude, location.longitude)
    .subscribe((res: Weather[]) => {
      this.forecast = res;
    });
  }

}
