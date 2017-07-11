import {Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector   : 'app-newsletter',
	templateUrl: './newsletter.component.html',
	styles     : []
})
export class NewsletterComponent {

	@Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

	onChange(value: boolean) {
		this.checked.emit(value)
	}
}
