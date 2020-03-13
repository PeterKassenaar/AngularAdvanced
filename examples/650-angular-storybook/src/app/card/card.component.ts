import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
      `
      :host {
        text-align: center;
        background: white;
        display: block;
        padding: .45rem .65rem;
        border-radius: 3px;
        max-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }

      h1 {
        color: #851842;
      }

      h2 {
        color: #c85f7f;
      }

      img {
        max-width: 400px;
      }

      p {
        text-align: left;
      }
    `
  ]
})
export class CardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() content = 'please submit some content for this card';
  @Input() img: string;
  @Input() btnClass: string;

  @Output() btnClicked = new EventEmitter<boolean>();

  handleClick() {
    this.btnClicked.emit(true);
  }
}
