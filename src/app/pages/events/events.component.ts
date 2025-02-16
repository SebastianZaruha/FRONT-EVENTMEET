import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuscarMapaComponent } from '../../buscar-mapa/buscar-mapa.component';
import { CabeceraEventosComponent } from '../../cabecera-eventos/cabecera-eventos.component';
import { CasillaEventoComponent } from '../../casilla-evento/casilla-evento.component';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { UltimosComponent } from '../../ultimos/ultimos.component';

@Component({
  selector: 'app-events',
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    CabeceraEventosComponent,
    UltimosComponent,
    CasillaEventoComponent,
    FooterComponent,
    BuscarMapaComponent,
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {}
