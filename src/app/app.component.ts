import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  City: any = ['New York', 'London', 'Kyiv', 'Lviv'];

  cityControl!: FormControl;

  constructor(private router: Router, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.cityControl = new FormControl('');
    this.cityControl.valueChanges.subscribe((value) => {
      this.router.navigate([value]);
    });
  }

  ngOnDestroy(): void {}
}
