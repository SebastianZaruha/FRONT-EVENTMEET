import { Component } from '@angular/core';
import { EventService } from '../../app/core/services/event..service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CabeceraEventosComponent } from '../cabecera-eventos/cabecera-eventos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-casilla-evento',
  templateUrl: './casilla-evento.component.html',
  styleUrls: ['./casilla-evento.component.css'],
  imports: [CommonModule, FormsModule, CabeceraEventosComponent],
})
export class CasillaEventoComponent {
  filteredEvents: any[] = [];

  constructor(private eventService: EventService) {}

  // Método para recibir los filtros y actualizar la lista de eventos
  onFiltersChanged(filters: {
    location: string;
    date: string;
    interests: string;
    maxPrice: number | null | undefined;
  }) {
    const validFilters = {
      ...filters,
      maxPrice: filters.maxPrice ?? undefined,
    };
    this.eventService.filterEvents(validFilters).subscribe(
      (events) => {
        this.filteredEvents = events;
      },
      (error) => {
        console.error('Error fetching filtered events:', error);
      }
    );
  }
}
