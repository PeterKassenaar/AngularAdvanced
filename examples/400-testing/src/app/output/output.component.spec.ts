import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OutputComponent} from './output.component';

/*describe('OutputComponent', () => {
	let component: OutputComponent;
	let fixture: ComponentFixture<OutputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OutputComponent]
		})
			.compileComponents();

		fixture   = TestBed.createComponent(OutputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('OutputCompnent should be created', () => {
		expect(component).toBeTruthy();
	});

	/!*it('should fire the msg event', ()=>{
		// 1st strategy : subscribe to the msg event
		component.msg.subscribe(msg =>{
			expect(msg).toBe('Hi, there');
		});
		// emit the actual event with a value
		component.sendMsg('Hi, there');
	});*!/

	/!*it('should spy on the msg event', ()=>{
		// 2nd strategy : create a Jasmine Spy, watch the 'emit' event.
		spyOn(component.msg, 'emit');
		const button = fixture.debugElement.nativeElement.querySelector('button');
		button.click();
		expect(component.msg.emit).toHaveBeenCalledWith('Hi, there');
	})*!/
});*/
