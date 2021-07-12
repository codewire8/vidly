import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexGenreComponent } from './genres/index-genre/index-genre.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { CreateMovieTheatersComponent } from './movietheaters/create-movie-theaters/create-movie-theaters.component';
import { IndexMovieTheatersComponent } from './movietheaters/index-movie-theaters/index-movie-theaters.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'genres', component: IndexGenreComponent },
  { path: 'genres/create', component: CreateGenreComponent },

  { path: 'actors', component: IndexActorsComponent },
  { path: 'actors/create', component: CreateActorComponent },

  { path: 'movietheaters', component: IndexMovieTheatersComponent },
  { path: 'movietheaters/create', component: CreateMovieTheatersComponent },

  { path: 'movies/create', component: CreateMovieComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
