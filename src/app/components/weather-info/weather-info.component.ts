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

  handleNgClass(): string {
    // returns the correct classes based on the multiple conditions.
    // function is easier to read than a messy ngClass (in this case)
    let classes = this.minimal ? 'text-center minimal' : 'center';
    if (this.toggleMinimal) {
      // show pointer only if toggle is enabled
      classes = classes.concat(' pointer');
    }
    return classes;
  }
}
