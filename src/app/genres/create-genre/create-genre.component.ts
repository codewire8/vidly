import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required, Validators.minLength(3), Validators.pattern('^([A-Z][a-z]*((\\s[A-Za-z])?[a-z]*)*)$')],
        },
      ],
    });
  }

  saveChanges() {
    this.router.navigate(['/genres']);
  }

  getErrorMessage() {
    let field = this.form.get('name');

    if (field?.hasError('required')) {
      return 'The name field is required';
    }

    if (field?.hasError('minlength')) {
      return 'The minimum length is 3';
    }

    if (field?.hasError('pattern')) {
      return 'The first letter must be uppercase';
    }

    return '';
  }
}
