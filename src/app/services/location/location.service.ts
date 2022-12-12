import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LOCATION_KEY } from 'src/app/app.const';
import { LocationInterface } from './models/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  saveCurrentLocation(): Observable<LocationInterface> {
    return new Observable<LocationInterface>((sub) => {
      navigator.geolocation.getCurrentPosition(res => {
        const location: LocationInterface = { latitude: res.coords.latitude, longitude: res.coords.longitude };
        localStorage.setItem(LOCATION_KEY, JSON.stringify(location));
        sub.next(location);
      });
    });
  }

  retrieve(): LocationInterface {
    return JSON.parse(localStorage.getItem(LOCATION_KEY))
  }
}
