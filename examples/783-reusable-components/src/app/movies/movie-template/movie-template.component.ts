import {Component, Input} from '@angular/core';
import {Movie} from "../../shared/models/movie.interface";

@Component({
  selector: 'app-movie-template',
  templateUrl: './movie-template.component.html',
  styleUrls:['./movie-template.component.css']
})
export class MovieTemplateComponent {
  @Input() movie! : Movie;
}
