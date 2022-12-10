import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Weather} from "./models/weather.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  static URL = 'https://api.openweathermap.org/data/2.5';
  static APP_ID = '5a4b2d457ecbef9eb2a71e480b947604';

  constructor(private http: HttpClient) { }

  /**
   * Fetches the current weather data based on the provided location
   */
  getCurrentWeather(latitude: number, longitude: number): Observable<Weather> {
    return this.http.get(`${WeatherService.URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WeatherService.APP_ID}`)
      .pipe(
        map((data) => {
          return new Weather(data);
        })
      );
  }


  /**
   * Fetches the weather data for the next 5 days
   */
  getFiveDayForecast(latitude: number, longitude: number): Observable<Weather> {
    return this.http.get(`${WeatherService.URL}/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${WeatherService.APP_ID}`)
      .pipe(
        map((data) => {
          return new Weather(data);
        })
      );
  }
}
