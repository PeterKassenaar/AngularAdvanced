import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerDetailComponent} from "../customer-detail/customer-detail.component";
import {CustomerService} from "../shared/customer.service";
// Since this is a standalone component, it acts like a module on its own.
// Therefore the CommonModule and CustomerDetailComponent are in the list import:[]
// There is NO NEED to further configure or make the customerService known, since
// this service already has the providedIn:'root' option
@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, CustomerDetailComponent],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customers: string[] = this.customerService.customers;
  selectedCustomer: string = '';

  constructor(private customerService: CustomerService) {
  }

  // pass selected customer to detail component
  onSelect(customer: string) {
    this.selectedCustomer = customer
  }

  // reset customer
  clear() {
    this.selectedCustomer = '';
  }
}
