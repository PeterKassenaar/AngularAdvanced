import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { RoutingNavBarComponent } from './components/routing-nav-bar/routing-nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RoutingNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'haarlem-routing-app';
}
