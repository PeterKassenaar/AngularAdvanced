// Credits: https://netbasal.com/understanding-angular-structural-directives-659acd0f67e
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  images: string[];

  ngOnInit() {
    this.images = [
      '../assets/img/Den Haag.jpg',
      '../assets/img/Hengelo.jpg',
      '../assets/img/Enschede.jpg',
      '../assets/img/Groningen.jpg',
    ];
  }
}
