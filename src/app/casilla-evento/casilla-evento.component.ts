import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-casilla-evento',
  templateUrl: './casilla-evento.component.html',
  styleUrls: ['./casilla-evento.component.css'],
  imports: [CommonModule],
})
export class CasillaEventoComponent {
  @Input() events: any[] = []; // Lista de eventos recibida como entrada
}
