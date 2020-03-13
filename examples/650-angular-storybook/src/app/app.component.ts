import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Winter is coming';
  content = '"Winter Is Coming" is the motto of House Stark, one of the Great Houses of Westeros. The meaning behind these words is one of warning and constant vigilance. The Starks, being the lords of the North, strive to always be prepared for the coming of winter, which hits their lands the hardest. ';
  url = 'https://gameofthrones.fandom.com/wiki/Winter_Is_Coming_(motto)';
  img = '../assets/winter-is-coming.jpg';
  btnClass = 'btn btn-primary';
}
