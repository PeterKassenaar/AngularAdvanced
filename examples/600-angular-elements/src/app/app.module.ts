import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { CalcComponent } from './calc/calc.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  // No 'bootstrap' here, as our component
  // is not included in an Angular app.
  // Instead, we're using entryComponents
  imports: [BrowserModule],
  declarations: [CalcComponent],
  entryComponents: [CalcComponent]
})
export class AppModule {
  // make sure to inject the injector inside constructor()
  constructor(private injector: Injector) {}
  // Bootstrap the module yourself
  ngDoBootstrap() {
    const pkCalculator = createCustomElement(CalcComponent, {
      injector: this.injector
    });
    customElements.define('pk-calc', pkCalculator);
  }
}
