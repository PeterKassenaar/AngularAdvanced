// Testing a remote Http (API) service with mocking.
// Credits: https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712

import {TestBed, getTestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Person, RemoteService} from "./03-remote.service";
import 'rxjs/add/operator/map';

/*
describe('04- Simple HTTP Remote Service', () => {
  // 1. our variables
  let injector: TestBed;
  let remoteService: RemoteService;
  let httpMock: HttpTestingController;
  let mockUsers: Person[];

  // 2. Setup in the beforeEach() block
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RemoteService]
    });
    // 2a. Assign variables.
    injector = getTestBed();
    remoteService = injector.get(RemoteService);
    httpMock = injector.get(HttpTestingController);
    // 2b. Our mocked response
    mockUsers = [{
      name: 'Peter',
      email: 'info@kassenaar.com'
    }, {
      name: 'Sandra',
      email: 'sandra@kassenaar.nl'
    }]
  });

  // 3. In afterEach() we run HttpTestingController#verify to make sure that
  // there are no outstanding requests. Not mandatory.
  afterEach(() => {
    httpMock.verify()
  });

  // 4. Our tests
  it('should be defined', () => {
    expect(remoteService).toBeDefined();
  });

  // 5. The call to the 'backend'
  it('should return an Observable<User[]>', () => {
    // Make an HTTP GET request
    remoteService.getPeople()
      .subscribe(users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(mockUsers);
      });
    // verify and flush our request
    const req = httpMock.expectOne(remoteService.url);
    expect(req.request.method).toBe("GET"); // just to be safe. Not mandatory. Useful for testing http methods.

    // About .flush(): resolve the request by returning a body
    // plus additional HTTP information (such as response headers) if provided.
    // Both successful and unsuccessful responses can be delivered via flush().
    // https://angular.io/api/common/http/testing/TestRequest.
    // Only after a flush() the .subscribe expecations are evaluated and available!
    req.flush(mockUsers);

    // Finally, verify if there are no outstanding requests.
    // It is (also) done by our afterEach(), so no need to include it here. But uncomment
    // the next line if you don't have an afterEach().
    // httpMock.verify()
  });

  it('should return the first name', () => {
    remoteService.getFirstName().subscribe(name => {
      expect(name).toBe('Peter')
    });
    // verify and flush our request
    const req = httpMock.expectOne(remoteService.url);
    req.flush(mockUsers);
  })
  // end testsuite
});
*/
