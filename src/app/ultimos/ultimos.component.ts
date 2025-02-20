import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventService } from '../../app/core/services/event..service'; // Importar el servicio

@Component({
  selector: 'app-ultimos',
  templateUrl: './ultimos.component.html',
  styleUrls: ['./ultimos.component.css'],
  imports: [CommonModule],
})
export class UltimosComponent implements OnInit {
  events: any[] = []; // Lista de eventos filtrados

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    // Cargar todos los eventos al inicio
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
      },
      error: (err) => {
        console.error('Error al cargar eventos:', err);
      },
    });
  }

  // Método para aplicar los filtros
  onFiltersChanged(filters: any): void {
    this.eventService.filterEvents(filters).subscribe({
      next: (filteredEvents) => {
        this.events = filteredEvents; // Actualizar los eventos visibles
      },
      error: (err) => {
        console.error('Error al filtrar eventos:', err);
      },
    });
  }
}