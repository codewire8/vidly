import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movieTheatersCreationDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-create-movie-theaters',
  templateUrl: './create-movie-theaters.component.html',
  styleUrls: ['./create-movie-theaters.component.css'],
})
export class CreateMovieTheatersComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveChanges(movieTheater: movieTheatersCreationDTO) {
    console.log(movieTheater);
    // this.router.navigate(['/movietheaters']);
  }
}
