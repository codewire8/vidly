import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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

  title = 'vidly';
  movies;

  duplicateNumber(n: number) {
    return n * 2;
  }
}
