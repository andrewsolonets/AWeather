import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherReportComponent,
  },
  {
    path: ':locationName',
    component: WeatherReportComponent,
  },
];

@NgModule({
  declarations: [WeatherReportComponent],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
