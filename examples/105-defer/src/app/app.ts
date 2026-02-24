import {Component} from '@angular/core';
import {Comments} from './comments/comments';

@Component({
  selector: 'app-root',
  imports: [
    Comments
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected show: boolean = false;
}
