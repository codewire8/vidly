import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: movieDTO = {
    title: 'Spider Man',
    inTheaters: true,
    summary: 'something',
    releaseDate: new Date(),
    trailer: 'ghgasdxhgsuydg',
    poster: 'https://m.media-amazon.com/images/M/MV5BNTMxOGI4OGMtMTgwMy00NmFjLWIyOTUtYjQ0OGQ4Mjk0YjNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg',
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {});
  }

  saveChanges(movieCreationDTO: movieCreationDTO) {

  }
}
