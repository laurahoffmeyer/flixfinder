import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { WatchlistPageComponent } from './components/watchlist-page/watchlist-page.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieListComponent } from './components/movie-list/movie-list.component'

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    WatchlistPageComponent,
    MoviesComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
