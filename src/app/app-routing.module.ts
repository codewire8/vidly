import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexGenreComponent } from './genres/index-genre/index-genre.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genres', component: IndexGenreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
