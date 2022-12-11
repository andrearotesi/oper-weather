import {Component, Input} from '@angular/core';
import {Weather} from "../../../services/weather/models/weather.model";

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent {

  @Input() data: Weather;

}
