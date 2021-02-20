import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from '../interfaces/movie';
import { Genre } from '../interfaces/genre';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieArray: Movie[] = []
  watchlistArray: Movie[] = []
  genreArray: Genre[] = []

  constructor(private http: HttpClient) { }

  apiKey: string = "b7c1d24c6344d255a94091d79d6ac5af";

  getMovieTitles(filterTitle: string) {
     return this.http.get("https://api.themoviedb.org/3/search/movie?", {
       params: { api_key: this.apiKey, query: filterTitle, include_adult: "false", language: "en-US", original_language: "en" }
     });
   }

  getMovieId(movieId: number) {
    return this.http.get("https://api.themoviedb.org/3/movie/" + movieId + "?", {
      params: { api_key: this.apiKey }
    });
  }

  getMovieFilters(filterGenre: string, filterRatingGTE: string, filterRatingLTE: string, filterReleaseYear: string) {
    return this.http.get("https://api.themoviedb.org/3/discover/movie?", {
      params: { api_key: this.apiKey, with_genres: filterGenre, "vote_average.gte": filterRatingGTE, "vote_average.lte": filterRatingLTE, year: filterReleaseYear, include_adult: "false", sort_by: "popularity.desc", language: "en-US", original_language: "en" }
    }); 
  }

  getGenreArray() {
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list?", {
      params: { api_key: this.apiKey }
    }); 
  }
}