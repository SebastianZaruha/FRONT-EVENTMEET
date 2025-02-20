import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cabecera-eventos',
  templateUrl: './cabecera-eventos.component.html',
  styleUrls: ['./cabecera-eventos.component.css'],
})
export class CabeceraEventosComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  filters: any = {
    location: '',
    date: '',
    maxPrice: null,
  };

  onFilterChange(filterKey: string, value: any) {
    // Cambiar el filtro seleccionado
    this.filters[filterKey] = this.filters[filterKey] === value ? '' : value; // Deselect if clicked again
    this.filtersChanged.emit(this.filters); // Emitir filtros actualizados
  }
}
