import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css'],
})
export class ActorsAutocompleteComponent implements OnInit {
  constructor() {}

  control: FormControl = new FormControl();

  actors = [
    {
      name: 'Tom Holland',
      picture:
        'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX67_CR0,0,67,98_AL_.jpg',
    },
    {
      name: 'Tom Hanks',
      picture:
        'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg',
    },
    {
      name: 'Keanu Reeves',
      picture:
        'https://m.media-amazon.com/images/M/MV5BYTkzODI4MDMtNDNmZC00NDZlLWFmNTktNDRhOWE2YzhlZTQ2XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_UY317_CR19,0,214,317_AL_.jpg',
    },
  ];

  selectedActors = [];
  originalActors = this.actors;
  columnsToDisplay = ['picture', 'name', 'character', 'actions'];
  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(
        (actor) => actor.name.indexOf(value) !== -1
      );
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  remove(actor) {
    const index = this.selectedActors.findIndex((a) => a.name === actor.name);
    this.selectedActors.splice(index, 1);
    this.table.renderRows();
  }
}
