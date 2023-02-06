import {Component} from '@angular/core';

// this is the 'smart' component. It holds a list of customers,
// which are passed to standalone view components.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers: string[] = [
    'KPN',
    'Ziggo',
    'Vodafone',
    'T-mobile'
  ]
  selectedCustomer: string = '';

  onSelect(customer: string) {
    this.selectedCustomer = customer
  }

// reset customer
  clear() {
    this.selectedCustomer = '';
  }
}
