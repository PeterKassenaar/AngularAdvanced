import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-very-big',
  standalone: true,
  imports: [NgFor],
  templateUrl: './very-big.component.html'
})
export class VeryBigComponent {
  lines = Array.from({ length: 500 }, (_, i) => i + 1);
}
