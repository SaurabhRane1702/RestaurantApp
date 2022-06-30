import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestauaurantAppComponent } from './restauaurant-app/restauaurant-app.component';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauaurantAppComponent,
    RestaurantDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
