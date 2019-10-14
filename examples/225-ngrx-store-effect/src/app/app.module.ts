import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// Import components
import {AppComponent} from './app.component';

// Import Store stuff
import {StoreModule} from '@ngrx/store';
import {citiesReducer} from './store/cities.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

// Import Effects stuff
import {EffectsModule} from '@ngrx/effects';
import {CitiesEffects} from './store/cities.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({cities: citiesReducer}),
    StoreDevtoolsModule.instrument(
      {maxAge: 25, logOnly: environment.production}),
    // Add the EffectsModule with an array of effects
    EffectsModule.forRoot([CitiesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
