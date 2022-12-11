import {Condition} from "./condition.model";

export class Weather {
  city: string;
  conditions: Condition[] = [];
  temperature: number;
  temp_min: number;
  temp_max: number;
  date: Date;

  constructor(data: any | undefined) {
    this.city = data ? data.name : null;
    this.conditions = data ? data.weather : [];
    this.date = data ? new Date(data.dt_txt) : null;
    this.temperature = data ? Math.round(data.main.temp * 10) / 10 : null;
    this.temp_min = data ? Math.round(data.main.temp_min * 10) / 10 : null;
    this.temp_max = data ? Math.round(data.main.temp_max * 10) / 10 : null;
  }
}