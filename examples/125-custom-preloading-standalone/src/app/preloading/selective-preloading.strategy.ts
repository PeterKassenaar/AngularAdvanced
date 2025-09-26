import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

/**
 * SelectivePreloadingStrategy
 * ---------------------------
 * What this file does:
 * - It implements Angular's PreloadingStrategy to control which lazy routes are
 *   preloaded in the background after the initial app load.
 * - This specific strategy preloads only the routes that explicitly opt-in via
 *   route.data.preload === true. See `app.routes.ts` for more details.
 *
 * Why is this file necessary?
 * - This example app uses standalone routing with lazy-loaded components
 *   (via loadComponent). Preloading improves perceived performance by warming
 *   up lazy routes. We keep this strategy in the repo to demonstrate how to
 *   implement and wire a custom preloading strategy with standalone APIs.
 *
 * Where is it used?
 * - It is registered in `app.config.ts` using provideRouter with the
 *   withPreloading(SelectivePreloadingStrategy) feature:
 *     provideRouter(routes, withPreloading(SelectivePreloadingStrategy))
 * - The decision to preload a specific route is controlled in app.routes.ts by
 *   setting data: { preload: true } on that route.
 *
 * ************************************
 * Note on standalone routing:
 * - In standalone applications you configure the router via provideRouter(...),
 *   and you enable preloading with withPreloading(SomeStrategy). This replaces
 *   the older RouterModule.forRoot(...) patterns. You can still use built-in
 *   strategies like PreloadAllModules, but for fine-grained control, a custom
 *   strategy like this is preferred!
 */
@Injectable({ providedIn: 'root' })
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  /**
   * Called by the router for every lazy route.
   * @param route The route configuration.
   * @param load A function that triggers loading the route's code-split chunk.
   * @returns Observable emitting the loaded module/component when preloaded,
   *          or of(null) to skip preloading.
   */
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload'] === true) {
      return load();
    }
    // Skip preloading if not opted-in (or explicitly false/omitted)
    return of(null);
  }
}
