import {TestBed, async} from "@angular/core/testing";
import {AsyncService} from "./02-async.service";

/*describe('03-Simple Async Service', ()=>{
    let service;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[AsyncService]
        });
        service = TestBed.get(AsyncService);
    });


    // This will not work as expected.
	// Problem: the expect()-block is executed before the async service has returned
	/!*fit('should return Hi Peter from the async service', ()=>{
		service.greetAsync('Peter')
			.then(result =>{
				expect(result).toEqual('Hi, Petertest');
			})
	});*!/
    // solution: wrap your call in Angular async-function.
	// Jasmine will then wait for the async function to resolve and *then* run the test
    it('should return Hi Peter from the async service', async(()=>{
        service.greetAsync('Peter')
			.then((result)=>{
            	expect(result).toEqual('Hi, Peter');
        })
    }))
});*/
