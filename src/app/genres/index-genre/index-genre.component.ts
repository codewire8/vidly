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
    const genres = this.genresService.getAll();
    console.log(genres)
  }
}
