import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movieCreationDTO } from '../movies.model';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveChanges(movieCreationDTO: movieCreationDTO) {
    console.log(movieCreationDTO);
    this.router.navigate(['/']);
  }
}
