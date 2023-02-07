import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { HostBindingComponent } from './host-binding/host-binding.component';
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComponent,
    ViewChildrenComponent,
    HostListenerComponent,
    HostBindingComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
