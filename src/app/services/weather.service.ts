import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherForCity(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherBaseApi, {
      params: new HttpParams()
        .set('q', city)
        .set('appId', environment.AppId)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }
}
