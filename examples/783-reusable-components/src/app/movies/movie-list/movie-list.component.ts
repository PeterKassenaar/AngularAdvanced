import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../../shared/models/movie.interface";
import {MovieService} from "../../shared/services/movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent {

  movie$! :Observable<Movie[]>
  constructor(private movieService : MovieService) {
    // If you don't have access to API/internet, uncomment the following line.
    // It wil then use mock data from the service.
    // this.movie$ = this.movieService.getMovies();
  }

  getMovies(keyword: string) {
    this.movie$ = this.movieService.searchMovies(keyword)
  }
}
