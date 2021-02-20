import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Genre } from 'src/app/interfaces/genre';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../interfaces/movie';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  constructor(private service: MovieService) {}
  @Input() i: number = 21;
  popupIndex: number = 21;
  releaseyear: any;

  newGenres: any[] = [];

  @Input() singleMovie: Movie = {
    title: '',
    id: 0,
    overview: '',
    release_date: '',
    vote_average: 0,
    genre_ids: [],
    backdrop_path: '',
    poster_path: '',
    watchlist: false,
  };
  get genreArray(): Genre[] {
    return this.service.genreArray;
  }
  @Output() isOnWatchListMovie = new EventEmitter<any>();

  ngOnInit(): void {
    let releaseyear = this.singleMovie.release_date.slice(0, 4);
    let movieGenres = this.singleMovie.genre_ids
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

  isWatchList() {
    this.isOnWatchListMovie.emit();
  }
  showPopup() {
    this.popupIndex = this.i;
  }
  closePopup() {
    this.popupIndex = 21;
  }
}
