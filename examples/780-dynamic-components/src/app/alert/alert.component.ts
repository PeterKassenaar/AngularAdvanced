import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  @Input() type = 'success';
  @Input() msg = '';
  @Output() closed = new EventEmitter<boolean>();

  close() {
    this.closed.emit(true);
  }
}
