import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreationDTO } from '../actors.models';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css'],
})
export class FormActorComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Input()
  model: actorCreationDTO;

  @Output()
  onSaveChanges = new EventEmitter<actorCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      dateOfBirth: '',
      picture: '',
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(image) {
    this.form.get('picture')?.setValue(image);
  }
}
