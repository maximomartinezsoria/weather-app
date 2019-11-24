import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-geolocation-button',
  templateUrl: './geolocation-button.component.html',
  styleUrls: ['./geolocation-button.component.scss']
})
export class GeolocationButtonComponent implements OnInit {

  public coords$;
  public active: boolean = false;

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit() {
    this.coords$ = this.geolocationService.coords$;
    this.geolocationService.permission$.then(status => {
      this.active = (status == 'granted');

      if(this.active) this.geolocationService.requestGeolocation();
    });
  }

  requestLocation() {
    return this.geolocationService.requestGeolocation();
  }

}
