import {Component, Input} from '@angular/core';

@Component({
	selector   : 'app-input',
	templateUrl: './input.component.html',
	styles     : []
})
export class InputComponent {
	@Input() msg: string;
}
