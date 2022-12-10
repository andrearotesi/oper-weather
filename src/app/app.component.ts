import {Component, OnInit} from '@angular/core';
import {LOCATION_KEY} from "./app.const";
import {Location} from "./services/weather/models/location.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // On start, save current location on localStorage
    navigator.geolocation.getCurrentPosition(res => {
      const location: Location = { latitude: res.coords.latitude, longitude: res.coords.longitude };
      localStorage.setItem(LOCATION_KEY, JSON.stringify(location));
    });
  }

}