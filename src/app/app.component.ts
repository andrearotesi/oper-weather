import {Component, OnInit} from '@angular/core';
import { LocationService } from './services/location/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading = false;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    // On start, save current location on localStorage
    let location = this.locationService.retrieve();
    if (!location) {
      this.isLoading = true;
      this.locationService.saveCurrentLocation().subscribe(res => this.isLoading = false);
    }
  }

}
