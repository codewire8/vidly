import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moviesInTheaters = [
      {
        title: 'No Sudden Move',
        releaseDate: new Date('2016-11-14'),
        price: 1400.99,
        poster: 'https://www.joblo.com/assets/images/joblo/posters/2021/06/no-sudden-move_thumb.jpg'
      },
      {
        title: 'Shang-Chi',
        releaseDate: new Date('2017-06-22'),
        price: 1500.99,
        poster: 'https://www.joblo.com/assets/images/joblo/posters/2021/06/Shang-Chi-poster-4062076_thumb.jpg'
      },
    ];
    this.moviesFutureReleases = [];
  }
  moviesInTheaters;
  moviesFutureReleases;

}
