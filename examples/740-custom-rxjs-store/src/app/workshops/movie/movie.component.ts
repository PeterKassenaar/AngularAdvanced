import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '../../store/store';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

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

  constructor(private store: Store, private http: HttpClient) { }

  ngOnInit(): void {
    // workshop 2 - movies, initialization
    this.movie$ = this.store.select('movies');
  }

  searchMovies(keyword: string) {
    // search for- and send movies to the store
    this.http.get(`${this.url}s=${keyword}`)
      .pipe(
        map((movies: any) => movies.Search), // Map out movies.Search array, b/c this API wraps its results this way.
        tap(movies => this.store.set('movies', movies)), // Update the store. Can also be done in the .subscribe() method
        map((movies: any[]) => movies.forEach(movie => {
          // Search for details, by looping over every movie. The current
          // results are already displayed, since we 'tapped' the first results to the store.
          return this.http.get(`${this.url}i=${movie.imdbID}`)
            .pipe(
              tap(movieDetails => {
                setTimeout(() => {
                  this.store.updateMovies('movies', movieDetails);
                }, (Math.random() * 2000)); // simulate random delay
              })
            ).subscribe();
        }))
      ).subscribe(); // hmm, not elegant, 2 subscribes. Sincere question: How can this be done better?
  }
}
