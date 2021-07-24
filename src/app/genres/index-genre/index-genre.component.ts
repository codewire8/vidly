import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genre',
  templateUrl: './index-genre.component.html',
  styleUrls: ['./index-genre.component.css'],
})
export class IndexGenreComponent implements OnInit {
  constructor(private genresService: GenresService) {}

  ngOnInit(): void {
    this.genresService.getAll().subscribe((genres) => {
      console.log(genres);
    });
  }
}
