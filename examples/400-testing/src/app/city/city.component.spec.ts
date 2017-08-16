import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CityComponent} from './city.component';
import {By} from '@angular/platform-browser';

/*describe('CityComponent', () => {
	let component: CityComponent;
	let fixture: ComponentFixture<CityComponent>;

	beforeEach(async(() => {
			TestBed.configureTestingModule({
				declarations: [CityComponent]
			})
				.compileComponents();

			fixture   = TestBed.createComponent(CityComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		})
	);

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	/!*it('city should have the name Amsterdam', ()=>{
		component.setCity('Amsterdam');
		expect(component.city).toEqual('Amsterdam');
	});*!/

	/!*it('should have rendered Amsterdam on the page', ()=>{
		const de = fixture.debugElement.query(By.css('h1'));
		const element = de.nativeElement;
		component.setCity('Amsterdam');
		// fixture.detectChanges();
		expect(element.textContent).toContain('Amsterdam');
	});*!/
});*/
