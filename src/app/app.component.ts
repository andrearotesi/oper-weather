import {Component, OnInit} from '@angular/core';
import {LOCATION_KEY} from "./app.const";
import {LocationInterface} from "./services/location.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // On start, save current location on localStorage
    let location = JSON.parse(localStorage.getItem(LOCATION_KEY));
    if (!location) {
      navigator.geolocation.getCurrentPosition(res => {
        location = { latitude: res.coords.latitude, longitude: res.coords.longitude };
        localStorage.setItem(LOCATION_KEY, JSON.stringify(location));
      });
    }
  }

}
