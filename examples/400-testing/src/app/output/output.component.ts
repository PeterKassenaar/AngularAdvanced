import {Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector   : 'app-output',
	templateUrl: './output.component.html'
})
export class OutputComponent {

	@Output() msg: EventEmitter<string> = new EventEmitter<string>();

	sendMsg(msg: string) {
		this.msg.emit(msg);
	}
}
