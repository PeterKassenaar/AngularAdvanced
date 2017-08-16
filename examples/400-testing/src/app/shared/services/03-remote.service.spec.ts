import {TestBed, async, inject} from '@angular/core/testing';
import {HttpModule, XHRBackend, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {RemoteService} from "./03-remote.service";
import 'rxjs/add/operator/map';

/*
describe('04 - Simple HTTP Remote Service', () => {
	let remoteService, mockBackend, mockResponse;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports  : [HttpModule],
			providers: [
				RemoteService,
				MockBackend,
				{provide: XHRBackend, useClass: MockBackend}
			]
		});
		remoteService = TestBed.get(RemoteService);
		mockBackend   = TestBed.get(MockBackend);
		mockResponse  = new ResponseOptions([{
			name : 'Peter',
			email: 'info@kassenaar.com'
		}, {
			name : 'Sandra',
			email: 'sandra@kassenaar.nl'
		}])
	});

	it('RemoteService should be defined', () => {
		expect(remoteService).toBeDefined();
	});

	it('MockBackend should be defined', () => {
		expect(mockBackend).toBeDefined();
	});

	it('Should return people.json', async(() => {
		// Create mock backend connection
		mockBackend.connections.subscribe((conn: MockConnection) => {
			conn.mockRespond(new Response(mockResponse))
		});

		remoteService.getPeople().subscribe((result) => {
			expect(result).toBeDefined();
		});
	}));

	it('Should return Peter as the first name', async(() => {
		mockBackend.connections.subscribe((conn: MockConnection) => {
			conn.mockRespond(new Response(mockResponse))
		});
		remoteService.getFirstName().subscribe((result) => {
			expect(result[0].name).toEqual('Peter');
		});
	}))
});
*/
