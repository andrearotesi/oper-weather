import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather/weather.service";
import {LOCATION_KEY} from "../../app.const";
import {Weather} from "../../services/weather/models/weather.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import { LocationInterface } from 'src/app/services/location/models/location.interface';
import { LocationService } from 'src/app/services/location/location.service';

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
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const location = this.locationService.retrieve();
    this.currentWeather$ = this.weatherService.getCurrentWeather(location.latitude, location.longitude);
  }

  navigateToForecast(): void {
    this.router.navigate(['five-days']);
  }

}
