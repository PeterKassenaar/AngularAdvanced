import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Additional modules
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// Routing
import {AppRoutingModule} from './app-routing.module';

// Components - TODO: move to separate (lazy loaded) modules
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

// Interceptors
import {JwtInterceptor} from './shared/interceptors/jwt.interceptor';
import {ErrorInterceptor} from './shared/interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // hook up our Interceptors. They are handled in the order in which they appear
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
