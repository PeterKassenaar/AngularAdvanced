// movie interface - returned from OMDb API, via movie.service.ts
export interface MovieInfo {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
