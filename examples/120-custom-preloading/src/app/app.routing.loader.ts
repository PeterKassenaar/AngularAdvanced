// app.routing.loader.ts
import { PreloadingStrategy, Route } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class MyCustomPreloader implements PreloadingStrategy {
	preload(route: Route, load: Function): Observable<any> {
		// only preload the route if data attribute is set and preload===true
		return route.data && route.data.preload ? load() : Observable.of(null);
	}
}
