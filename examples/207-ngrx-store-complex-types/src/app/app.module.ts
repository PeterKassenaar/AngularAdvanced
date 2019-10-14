import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Import components
import {AppComponent} from './app.component';

// Import Store stuff
import {StoreModule} from '@ngrx/store';
import {citiesReducer} from './store/cities.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({cities: citiesReducer}),
    StoreDevtoolsModule.instrument(
      {maxAge: 25, logOnly: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
