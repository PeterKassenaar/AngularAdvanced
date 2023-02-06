import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

// This is a standalone component. It works outside an ngModule. It recieves a
// list of customers and emits a selected customer.
@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  @Input() customers!: string[]
  @Output() select = new EventEmitter<string>()
}
