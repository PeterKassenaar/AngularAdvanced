// app.resolver.service.ts
import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpleResolverService implements Resolve<Observable<string>> {

  // Creating a resolver is all about implementing
  // the Resolve interface with a specific type
  resolve(): Observable<string> {
    return of('Hello World').pipe(
      delay(2000)
    );
  }
}
