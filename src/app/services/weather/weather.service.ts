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

  getCurrentWeather(latitude: number, longitude: number): Observable<Weather> {
    // Fetches the current weather data based on the provided location
    return this.http.get(`${WeatherService.URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WeatherService.APP_ID}`)
      .pipe(
        map((data) => {
          return new Weather(data);
        })
      );
  }


  getNextFiveDaysForecast(latitude: number, longitude: number): Observable<Weather[]> {
    // Fetches the weather data for the next 5 days (once per day), excluding today.
    return this.http.get(`${WeatherService.URL}/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${WeatherService.APP_ID}`)
      .pipe(
        map((data: any) => {
          let response: Weather[] = [];
          let today = new Date().getDate();
          data.list.forEach(item => {
            let date = new Date(item.dt_txt).getDate();
            // Check that weather data for a given day hasn't already been added
            if (date !== today && !response.find(resItem => resItem.date.getDate() === date)) {
              response.push(new Weather(item));
            }
          });
          return response;
        })
      );
  }
}
