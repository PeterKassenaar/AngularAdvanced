import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { of } from 'rxjs/Observable';

@Injectable()
export class AsyncService {
  greetAsync(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Hi, ${name}`);
      }, 100);
    });
  }

  // greetAsyncObservable(name: string): Observable<string> {
  //   // return of(`Hi, ${name}`);
  // }
}
