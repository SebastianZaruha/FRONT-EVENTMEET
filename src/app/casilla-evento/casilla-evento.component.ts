import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casilla-evento',
  templateUrl: './casilla-evento.component.html',
  styleUrl: './casilla-evento.component.css',
  imports: [CommonModule],
})
export class CasillaEventoComponent {
  @Input() events: any[] = [];
}
