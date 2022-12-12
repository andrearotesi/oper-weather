import { Component, Input } from '@angular/core';
import {Weather} from "../../services/weather/models/weather.model";

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent {

  @Input() data: Weather;
  @Input() minimal = false;
  // If true, enables minimal mode toggling on click
  @Input() toggleMinimal = false;
}
