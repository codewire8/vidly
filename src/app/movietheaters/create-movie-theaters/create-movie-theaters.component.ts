import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie-theaters',
  templateUrl: './create-movie-theaters.component.html',
  styleUrls: ['./create-movie-theaters.component.css'],
})
export class CreateMovieTheatersComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveChanges() {
    this.router.navigate(['/movietheaters']);
  }
}
