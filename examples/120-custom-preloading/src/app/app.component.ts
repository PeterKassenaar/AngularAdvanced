import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { filter, map } from 'rxjs/operators';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {
		// 1a. subscribing to router events
		// this.router.events.subscribe(event => {
		// 	console.log(event);
		// });
		// 1b. subscribing, using RxJS operators to manipulate the event
		// this.router.events
		// 	.pipe(
		// 		filter(event => event instanceof NavigationStart),
		// 		map(
		// 			(e: NavigationStart) =>
		// 				'started navigiation to url ::' + e.url
		// 		)
		// 	)
		// 	.subscribe(res => console.log(res));
	}
}
