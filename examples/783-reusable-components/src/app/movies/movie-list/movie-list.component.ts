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
    // this.movie$ = this.movieService.getMovies();
  }

  getMovies(keyword: string) {
    this.movie$ = this.movieService.searchMovies(keyword)
  }
}
