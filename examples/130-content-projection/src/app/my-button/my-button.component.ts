import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class MyButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
