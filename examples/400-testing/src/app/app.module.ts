import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { GreetingService } from './shared/services/01-greeting.service';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { CardComponent } from './card/card.component';
import { CarComponent } from './car/car.component';
import {
  CardContent,
  CardFooter,
  CardHeader
} from './card/card.component.spec';
import { SpyComponent } from './spy/spy.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    SpyComponent,
    InputComponent,
    OutputComponent,
    CardComponent,
    CardHeader,
    CardFooter,
    CardContent,
    CarComponent
  ],
  imports: [BrowserModule],
  providers: [GreetingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
