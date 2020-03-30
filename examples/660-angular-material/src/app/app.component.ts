import {Component} from '@angular/core';
import {MatSliderChange} from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sliderValue: number;

  onSliderChange(event: MatSliderChange) {
    this.sliderValue = event.value;
  }
}
