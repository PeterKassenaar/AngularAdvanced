import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieTemplateComponent} from './movie-template/movie-template.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  // 'Private API'  for this module
  declarations: [MovieListComponent, MovieTemplateComponent],
  // 'Public API' for this module
  exports: [MovieListComponent]
})
export class MoviesModule {
}
