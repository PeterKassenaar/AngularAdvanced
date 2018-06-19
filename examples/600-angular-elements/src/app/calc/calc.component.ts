import {
  Component,
  EventEmitter,
  ViewEncapsulation,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'pk-calc',
  template: `
    <input type="number" #val1 [value]="value1" placeholder="value 1">
    <input type="number" #val2 [value]="value2" placeholder="value 2">
    <button (click)="add(+val1.value, +val2.value)">+</button>
    <button (click)="subtract(+val1.value, +val2.value)">-</button>
    <button (click)="multiply(+val1.value, +val2.value)">*</button>
    <button (click)="divide(+val1.value, +val2.value)">/</button>
    <div *ngIf="show">
      <hr>
      <h2>{{ result }} </h2>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class CalcComponent {
  @Input() value1 = 10;
  @Input() value2 = 10;
  @Input() show = false;
  @Output() calc = new EventEmitter<number>();

  result: number;

  // calculator :: add
  add(val1, val2) {
    this.result = val1 + val2;
    this.calc.emit(this.result);
  }

  // calculator :: subtract
  subtract(val1, val2) {
    this.result = val1 - val2;
    this.calc.emit(this.result);
  }

  // calculator :: divide
  divide(val1, val2) {
    if (val2 === 0) {
      // no divide by zero
      this.result = -1;
      this.calc.emit(-1);
    } else {
      this.result = val1 / val2;
      this.calc.emit(this.result);
    }
  }

  // calculator :: multiply
  multiply(val1, val2) {
    this.result = val1 * val2;
    this.calc.emit(this.result);
  }
}
