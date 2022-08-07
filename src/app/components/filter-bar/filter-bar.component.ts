import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css'],
})
export class FilterBarComponent implements OnInit {
  genders: string = 'unknown';
  gendersOptions = [
    {
      value: 'unknown',
      name: 'Seleccione una opción',
    },
    {
      value: 'female',
      name: 'Mujer',
    },
    {
      value: 'male',
      name: 'Hombre',
    },
    {
      value: 'genderless',
      name: 'Sin género',
    },
  ];
  status: string = 'unknown';
  statusOptions = [
    {
      value: 'unknown',
      name: 'Seleccione una opción',
    },
    {
      value: 'alive',
      name: 'Vivo',
    },
    {
      value: 'dead',
      name: 'Muerto',
    },
  ];

  @Output() filterGender = new EventEmitter<string>();
  @Output() filterStatus = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onSelectGender() {
    this.filterGender.emit('gender:' + this.genders);
  }

  onSelectStatus() {
    this.filterStatus.emit('status:' + this.status);
  }
}
