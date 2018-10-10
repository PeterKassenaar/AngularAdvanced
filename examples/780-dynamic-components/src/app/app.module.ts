import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Components
import {AppComponent} from './app.component';
import {AlertComponent} from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  entryComponents: [AlertComponent], // add this component
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
