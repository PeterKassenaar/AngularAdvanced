import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CustomerDetailComponent} from "../customer-detail/customer-detail.component";
import {CustomerService} from "../shared/customer.service";

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {
  // 1. The properties of this component
  customers: string[] = this.customerService.customers
  firstCustomer: string = ''

  // 2. An element inside THIS component. We get access to the props of this element.
  // So we use ViewChild if we programmatically want access to an element to change its properties
  @ViewChild('heading', {static: false}) heading!: ElementRef

  // 3. A Component inside this component - via @ViewChild we get access to the
  // properties and methods of the first component found.
  // @ViewChild always returns one (1) component, the first one found (even if there are, as
  // in this situation, 4 matches).
  @ViewChild(CustomerDetailComponent, {static: false}) customerDetail!: CustomerDetailComponent

  constructor(private customerService: CustomerService) {
  }

  showFirstCustomer() {
    // 4. log customerDetail to see what it looks like
    console.log(this.customerDetail);

    // 5. call a method on the customerDetail component
    this.customerDetail.showCustomer();

    // 6. Access a property on the customerDetail component (even if this is
    // silly, b/c we passed in the customer ourselve).
    this.firstCustomer = this.customerDetail.customer
  }

  toggleColor() {
    this.heading.nativeElement.style['backgroundColor'] =
      this.heading.nativeElement.style['backgroundColor'] === 'red' ? '' : 'red'
    console.log(this.heading.nativeElement.style['backgroundColor']);
  }

}
