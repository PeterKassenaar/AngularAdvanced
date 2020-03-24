// app.routing.loader.ts - actually a service!
import {PreloadingStrategy, Route} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyCustomPreloader implements PreloadingStrategy {
  // tslint:disable-next-line:ban-types
  preload(route: Route, load: Function): Observable<any> {
    // only preload the route if data attribute is set and preload===true
    return route.data && route.data.preload ? load() : of(null);
  }
}
