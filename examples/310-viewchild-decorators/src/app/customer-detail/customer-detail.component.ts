import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {
  @Input() customer: string = ''

  // This method is called from the parent component
  showCustomer() {
    console.log('Logged from the DetailComponent: ', this.customer);
  }
}
