import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.movies = [
        {
          title: 'Spider Man',
          releaseDate: new Date('2016-11-14'),
          price: 1400.99,
        },
        {
          title: 'Moana',
          releaseDate: new Date('2017-06-22'),
          price: 1500.99,
        },
      ];
    }, 1000);
  }
  movies;

}
