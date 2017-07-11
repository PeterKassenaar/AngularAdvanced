import {Component, Output, EventEmitter} from '@angular/core';


@Component({
	selector   : 'app-card1',
	templateUrl: './card1.component.html',
	styles     : []
})
export class Card1Component {

	// Example: we can submit events to the parent component and handle them there.
	@Output() submitted: EventEmitter<string> = new EventEmitter<string>();

	constructor() {
	}

	onSubmit(msg) {
		this.submitted.emit(msg);
	}

}
