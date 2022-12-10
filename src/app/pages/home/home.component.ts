import {Component} from '@angular/core';
import {WeatherService} from "../../services/weather/weather.service";
import {LOCATION_KEY} from "../../app.const";
import {LocationInterface} from "../../services/weather/models/location.interface";
import {Weather} from "../../services/weather/models/weather.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // No need to unsubscribe, everything is handled by the async pipe
  currentWeather$: Observable<Weather>;

  constructor(
    private weatherService: WeatherService,
    private router: Router
  ) {
    const location: LocationInterface = JSON.parse(localStorage.getItem(LOCATION_KEY));
    this.currentWeather$ = this.weatherService.getCurrentWeather(location.latitude, location.longitude);
  }

  navigateToForecast(): void {
    this.router.navigate(['four-days']);
  }

}
