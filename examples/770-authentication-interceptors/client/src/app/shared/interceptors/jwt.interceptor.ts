// jwt.interceptor.ts - catch every http-request and add token to the request
// more info on interceptors: https://alligator.io/angular/httpclient-interceptors/

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 1. add authorization header with jwt token if available
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      // 2. HttpRequest objects are immutable, so in order to modify them,
      // we need to first make a copy, then modify the copy and call .handle()
      // on the modified copy. The request object’s .clone() method comes in handy to do just that.
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(request);
  }
}
