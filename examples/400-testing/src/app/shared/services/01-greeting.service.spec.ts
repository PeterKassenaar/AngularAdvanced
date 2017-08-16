// greeting.service.spec.ts
import {GreetingService}from './01-greeting.service';
import {TestBed, inject} from '@angular/core/testing';

//******************************
// (un)comment the tests you want to run
//******************************

/**
 * 1. First Test Suite: testing a simple, single service. No DI.
 */
/*describe('01 - Test Plain Greeting Service', () => {
    let greetingService;
    beforeEach(() => {
        greetingService = new GreetingService();
    });

    it('should have generated the greeting service', () => {
        expect(greetingService).toBeTruthy()
    });
    it('should return Hi, Peter', () => {
        let msg = greetingService.greet('Peter');
        expect(msg).toEqual('Hi, Peter');
    });
});*/

/**
 * 2. Second Test Suite: testing a single service as a module, with TestBed.
 */
/*describe('02 - Test Greeting service via TestBed', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GreetingService]
        });

        service = TestBed.get(GreetingService);
    });

    // Alternative notation, use separate injector instead of TestBed.get()
    // beforeEach(inject([GreetingService], (svc: GreetingService) => {
    //     service = svc;
    // }));

    it('Should have generated the service via TestBed', () => {
        expect(service).toBeTruthy();
    });

    it('Should return Hi, Sandra', () => {
        expect(service.greet('Sandra')).toEqual('Hi, Sandra');
    });
});*/
