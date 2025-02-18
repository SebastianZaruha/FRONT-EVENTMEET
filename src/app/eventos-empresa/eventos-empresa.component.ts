import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos-empresa',
  imports: [CommonModule],
  templateUrl: './eventos-empresa.component.html',
  styleUrl: './eventos-empresa.component.css',
})
export class EventosEmpresaComponent {
  isMenuHidden() {
    return false;
  }
}
