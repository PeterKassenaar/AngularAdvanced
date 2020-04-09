import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Store} from '../../store/store';
import {HttpClient} from '@angular/common/http';
import {map, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  // ****************
  // workshops - 2
  // Create/add a movie property in the store
  // Create actions to search for movies and display results. Also search for movie details
  // ****************
  movie$: Observable<any[]>; // TODO: create a movie model class or -interface
  url = 'https://www.omdbapi.com/?apikey=f1f56c8e&'; // Please register your own API key.

  constructor(private store: Store, private http: HttpClient) {
  }

  ngOnInit(): void {
    // workshop 2 - movies, initialization
    this.movie$ = this.store.select('movies');
  }

  searchMovies(keyword: string): void {
    // search for- and send movies to the store. BETTER solution: move this to a service.
    this.http.get(`${this.url}s=${keyword}`)
      .pipe(
        map((movies: any) => movies.Search), // Map out movies.Search array, b/c this API wraps its results this way.
        tap(movies => this.store.set('movies', movies)), // Update the store with list of 10 movies.
        // tslint:disable-next-line:max-line-length
        switchMap((movies: any[]) => combineLatest( // fetch details, using combineLatest() static function. Credits: Stefan de Waard, SdeWaard@ilionx.com
          movies.map((movie: any) => {
            return this.http.get(`${this.url}i=${movie.imdbID}`)
              .pipe(
                tap((movieDetails: any) => {
                  setTimeout(() => {
                    this.store.updateMovies('movies', movieDetails);
                  }, (Math.random() * 2000)); // simulate random delay to update the specific movie.
                })
              );
          }) // end movie array mapping
          ) // end combineLatest()
        ) // end switchMap()
      ).subscribe(); // We DO need a manual .subscribe() here, otherwise the http-calls wouldn't be fired!
  }

  // reset the movie property on the store
  clear() {
    this.store.set('movies', []);
  }
}
