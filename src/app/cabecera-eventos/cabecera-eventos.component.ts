import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabecera-eventos',
  imports: [NgIf, FormsModule],
  templateUrl: './cabecera-eventos.component.html',
  styleUrl: './cabecera-eventos.component.css',
})
export class CabeceraEventosComponent {
  // Estados de los filtros
  isLugarFilterVisible = false;
  isFechaFilterVisible = false;
  isHoraFilterVisible = false;
  isPrecioFilterVisible = false;

  // Filtros seleccionados
  filters = {
    location: '',
    date: '',
    interests: '',
    maxPrice: null,
  };

  // Evento Output para enviar filtros al componente padre
  @Output() filtersChanged = new EventEmitter<{
    location: string;
    date: string;
    interests: string;
    maxPrice: number | null;
  }>();

  // Métodos para alternar la visibilidad de cada filtro
  toggleLugarFilter() {
    this.isLugarFilterVisible = !this.isLugarFilterVisible;
    this.closeOtherFilters('lugar');
  }

  toggleFechaFilter() {
    this.isFechaFilterVisible = !this.isFechaFilterVisible;
    this.closeOtherFilters('fecha');
  }

  toggleHoraFilter() {
    this.isHoraFilterVisible = !this.isHoraFilterVisible;
    this.closeOtherFilters('hora');
  }

  togglePrecioFilter() {
    this.isPrecioFilterVisible = !this.isPrecioFilterVisible;
    this.closeOtherFilters('precio');
  }

  // Cierra otros filtros si se abre uno nuevo
  closeOtherFilters(filter: string) {
    if (filter !== 'lugar') this.isLugarFilterVisible = false;
    if (filter !== 'fecha') this.isFechaFilterVisible = false;
    if (filter !== 'hora') this.isHoraFilterVisible = false;
    if (filter !== 'precio') this.isPrecioFilterVisible = false;
  }

  // Método para aplicar filtros y emitirlos al componente padre
  applyFilters() {
    this.filtersChanged.emit(this.filters); // Emite los filtros seleccionados
  }
}
