import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-component',
  templateUrl: './big-component.component.html',
  styleUrls: ['./big-component.component.css']
})
export class BigComponent implements OnInit {

  items : string[]=[];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i< 500; i++){
      let newItem = 'Item ' + i;
      this.items.push(newItem)
    }
  }
}
