import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

// our custom store
import {Store} from './store/store';

// Components
import {CounterComponent} from './workshops/counter/counter.component';
import {MovieComponent} from './workshops/movie/movie.component';
import {TodoComponent} from './todo/todo.component';

// Routing stuff
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MovieComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {
}
