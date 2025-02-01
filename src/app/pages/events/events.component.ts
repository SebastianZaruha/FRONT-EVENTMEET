import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CabeceraComponent } from '../../cabecera/cabecera.component';

@Component({
  selector: 'app-events',
  imports: [NavbarComponent, CabeceraComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {}
