import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css'],
})
export class MovieFilterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  movies = [
    {
      title: 'No Sudden Move',
      poster:
        'https://www.joblo.com/assets/images/joblo/posters/2021/06/no-sudden-move_thumb.jpg',
    },
    {
      title: 'Shang-Chi',
      poster:
        'https://www.joblo.com/assets/images/joblo/posters/2021/06/Shang-Chi-poster-4062076_thumb.jpg',
    },
  ];

  originalMovies = this.movies;

  genres = [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Comedy' },
  ];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false,
    });

    this.form.valueChanges.subscribe((values) => {
      this.movies = this.originalMovies;
      this.filterMovies(values);
    });
  }

  filterMovies(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(
        (movie) => movie.title.indexOf(values.title) !== -1
      );
    }
  }

  clearForm() {
    this.form.reset();
  }
}
