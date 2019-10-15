import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// custom modules
import {CustomerModule} from './customer/customer.module';
import {ProductsModule} from './products/products.module';

// components
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    ProductsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
