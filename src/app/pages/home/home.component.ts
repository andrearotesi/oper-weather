import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather/weather.service";
import {LOCATION_KEY} from "../../app.const";
import {Weather} from "../../services/weather/models/weather.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import { LocationInterface } from 'src/app/services/location.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // No need to unsubscribe, everything is handled by the async pipe
  currentWeather$: Observable<Weather>;

  constructor(
    private weatherService: WeatherService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const location: LocationInterface = JSON.parse(localStorage.getItem(LOCATION_KEY));
    if (location) {
      this.currentWeather$ = this.weatherService.getCurrentWeather(location.latitude, location.longitude);
    }
  }

  navigateToForecast(): void {
    this.router.navigate(['five-days']);
  }

}
