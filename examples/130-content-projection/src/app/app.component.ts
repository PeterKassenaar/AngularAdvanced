import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	onSubmitCard1(event){
	  console.log('Card 1 submitted!, with data: ', event);
    }

    onChecked(value){
		console.log('Newsletter checked: ', value);
	}

}
