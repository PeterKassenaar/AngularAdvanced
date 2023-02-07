import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CustomerDetailComponent} from "../customer-detail/customer-detail.component";
import {CustomerService} from "../shared/customer.service";

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent {

  customers: string[] = this.customerService.customers
  // 1.  ViewChildren
  // It queries the DOM and returns a QueryList<T> of the found elements.
  // We can loop over the elements and do stuff with it.
  @ViewChildren(CustomerDetailComponent) details!: QueryList<CustomerDetailComponent>
  allCustomers: string[] = [];

  constructor(private customerService: CustomerService) {
  }

  // 2. It loops over the collection of CustomerDetailComponent's and adds every name found to
  // the array allCustomers (even if this is silly, b/c we put the names in there ourselves).
  // The point here is that we have programmatically access to the DOM and to the properties of
  // the child component.
  showCustomers() {
    this.clear();
    console.log('children:', this.details);
    this.details.forEach(child => {
      console.log('name:', child.customer)
      this.allCustomers.push(child.customer)
    })
  }

  clear(){
    this.allCustomers = []
  }
}
