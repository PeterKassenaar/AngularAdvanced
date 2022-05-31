import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from "rxjs";

/**
 * @title Basic progress-spinner
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  response!: Observable<any>;

  constructor(private http: HttpClient) {
  }


  localError() {
    // this error will be intercepted and handled by the global-error-handler in the CoreModule
    throw Error( 'The app component has thrown an error!');
  }

  // Some dummy Http-requests to https://httpstat.us.
  // This is a super simple service for generating different HTTP codes.
  // It's useful for testing how your own scripts deal with varying responses.
  failingRequest() {
    this.http.get('https://httpstat.us/404?sleep=2000')
      .subscribe(); //   We don't do anything here, just subscribe to get a response
    //.toPromise(); // OLD/deprecated - to be removed in future versions. Don't use .toPromise() anymore.
  }

  successfulRequest() {
    // show simple response in the UI
    this.response = this.http.get('https://httpstat.us/200?sleep=2000')
  }
}
