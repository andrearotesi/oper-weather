import {TempUtils} from "../../../utils/temp.utils";
import {Condition} from "./condition.model";

export class Weather {
  city: string;
  conditions: Condition[] = [];
  temperature: number;
  temp_min: number;
  temp_max: number;

  constructor(data: any | undefined) {
    this.city = data ? data.name : null;
    this.conditions = data ? data.weather : [];
    this.temperature = data ? TempUtils.kelvinToCelsius(data.main.temp) : null;
    this.temp_min = data ? TempUtils.kelvinToCelsius(data.main.temp_min) : null;
    this.temp_max = data ? TempUtils.kelvinToCelsius(data.main.temp_max) : null;
  }
}