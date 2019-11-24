import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from '../services/current-weather.service';
import { showUp } from '../animations/showUp.animation';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  animations: [showUp]
})
export class CurrentWeatherComponent implements OnInit {

  constructor(private weatherService: CurrentWeatherService) { }

  ngOnInit() {
    this.weatherService.weather$.subscribe(console.log);
  }

}
