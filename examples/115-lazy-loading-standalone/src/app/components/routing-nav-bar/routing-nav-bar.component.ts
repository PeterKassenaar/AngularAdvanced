import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-routing-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './routing-nav-bar.component.html',
  styleUrls: ['./routing-nav-bar.component.css']
})
export class RoutingNavBarComponent {}
