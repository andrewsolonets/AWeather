import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  City: any = ['New York', 'London', 'Kyiv', 'Lviv'];

  cityControl!: FormControl;

  constructor(private router: Router) {}

  onChange(value: any) {
    console.log(value.target.value.toLowerCase());
    this.router.navigate([value.target.value.toLowerCase()]);
  }

  ngOnInit(): void {
    this.cityControl = new FormControl('');
    this.cityControl.valueChanges.subscribe((value) => {
      console.log(value);
      this.router.navigate([value]);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
