import { NgFor } from '@angular/common';
import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../app/core/services/event..service'; // Importar el servicio
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ultimos',
  imports: [CommonModule],
  templateUrl: './ultimos.component.html',
  styleUrl: './ultimos.component.css',
})
export class UltimosComponent {
  @Input() data: any;
  @Output() dataEventEmit = new EventEmitter();

  cardsData: { image: string }[] = [];
  events: any[] = []; // Aquí guardaremos los eventos

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
      },
      error: (error) => {
        console.error('Error al obtener eventos:', error);
      },
    });
  }
}
