import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/interfaces/genre';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {

  constructor(private service: MovieService) { }

  newGenres: any[] = [];

  get genreArray(): Genre[] {
    return this.service.genreArray;
  }

  @Input() wlMovie: Movie = {
    title: "",
    id: 0,
    overview: "",
    release_date: "",
    vote_average: 0,
    genre_ids: [],
    backdrop_path: "",
    poster_path: "",
    watchlist: false
  }
  @Input() index: any;
  
  ngOnInit(): void {
    let movieGenres = this.wlMovie.genre_ids
    this.genreArray.forEach((item) => {
      movieGenres.forEach((id: any) => {
        if (item.id === id) {
          this.newGenres.push(item.name);
        }
      });
    });
    if (this.newGenres.length === 0) {
      this.newGenres.push("N/A")
    }
  }

  removeFromWatchlist(index: any) {
    this.wlMovie.watchlist = false
    this.service.watchlistArray.splice(index, 1);
  }
}
