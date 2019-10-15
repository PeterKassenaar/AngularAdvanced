// app.routing.loader.ts
import {PreloadingStrategy, Route} from '@angular/router';

import {Observable, of} from 'rxjs';

export class MyCustomPreloader implements PreloadingStrategy {
  // tslint:disable-next-line:ban-types
  preload(route: Route, load: Function): Observable<any> {
    // only preload the route if data attribute is set and preload===true
    return route.data && route.data.preload ? load() : of(null);
  }
}
