import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera-eventos',
  imports: [NgIf],
  templateUrl: './cabecera-eventos.component.html',
  styleUrl: './cabecera-eventos.component.css',
})
export class CabeceraEventosComponent {
  // Estados de los filtros
  isLugarFilterVisible = false;
  isFechaFilterVisible = false;
  isHoraFilterVisible = false;
  isPersonasFilterVisible = false;
  isPrecioFilterVisible = false;

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

  togglePersonasFilter() {
    this.isPersonasFilterVisible = !this.isPersonasFilterVisible;
    this.closeOtherFilters('personas');
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
    if (filter !== 'personas') this.isPersonasFilterVisible = false;
    if (filter !== 'precio') this.isPrecioFilterVisible = false;
  }
}
