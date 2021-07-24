import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parseWebApiErrors } from 'src/app/utilities/utils';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private genreService: GenresService) {}

  form: FormGroup;

  ngOnInit(): void {}

  saveChanges(genreCreationDTO: genreCreationDTO) {
    this.genreService.create(genreCreationDTO).subscribe(
      () => {
        this.router.navigate(['/genres']);
      },
      (error) => (this.errors = parseWebApiErrors(error))
    );
  }
}
