import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardComponent} from './card.component';
import {Component} from '@angular/core';
import {NO_ERRORS_SCHEMA} from '@angular/core';

//****************************************
// Mocking Components - different strategies
// 1st strategy - simply override nested components with empty classes
// this works, but it is not very flexible/scalable
@Component({
	selector: 'card-header',
	template: ''
})
export class CardHeader {
}

@Component({
	selector: 'card-content',
	template: ''
})
export class CardContent {
}

@Component({
	selector: 'card-footer',
	template: ''
})
export class CardFooter {
}

//*************************************************

/*describe('CardComponent', () => {
	let component: CardComponent;
	let fixture: ComponentFixture<CardComponent>;

	beforeEach(async(() => {
			TestBed.configureTestingModule({
				// declarations: [CardComponent],
				declarations: [CardComponent, CardHeader, CardContent, CardFooter],
				// schemas     : [NO_ERRORS_SCHEMA] // ignore alle errors, just go on.
			})
				.compileComponents();
			fixture   = TestBed.createComponent(CardComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		})
	);

	it('CardComponent should be created', () => {
		expect(component).toBeTruthy();
	});
});*/
