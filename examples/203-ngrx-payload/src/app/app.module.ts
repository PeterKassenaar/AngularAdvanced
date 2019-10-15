import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// 0. Declare components
import {AppComponent} from './app.component';
import {ExtraComponent} from './components/extra/extra.component';

// 1. import store stuff
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './store/counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // 2. Add the StoreModule to the AppModule,
    // to make the store known inside the application
    StoreModule.forRoot({count: counterReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
