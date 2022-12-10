import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
