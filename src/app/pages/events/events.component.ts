import { Component, OnInit } from '@angular/core';
import { BuscarMapaComponent } from "../../buscar-mapa/buscar-mapa.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { CabeceraEventosComponent } from "../../cabecera-eventos/cabecera-eventos.component";
import { UltimosComponent } from "../../ultimos/ultimos.component";
import { CasillaEventoComponent } from "../../casilla-evento/casilla-evento.component";
import { FooterComponent } from "../../footer/footer.component";
import { EventService } from '../../core/services/event..service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  imports: [
    BuscarMapaComponent,
    NavbarComponent,
    CabeceraEventosComponent,
    UltimosComponent,
    CasillaEventoComponent,
    FooterComponent,
  ],
})
export class EventsComponent implements OnInit {
  eventos: any[] = []; // Todos los eventos (datos originales)
  filteredEventos: any[] = []; // Eventos que se muestran (filtrados o no)

  constructor(private eventosService: EventService) {}

  ngOnInit(): void {
    // Llama al servicio para obtener los eventos desde la base de datos
    this.eventosService.getEvents().subscribe((data) => {
      this.eventos = data; // Carga los eventos originales
      this.filteredEventos = [...this.eventos]; // Por defecto, muestra todos los eventos
    });
  }

  // Método que se llama al aplicar los filtros
  onFiltersChanged(filters: any) {
    this.filteredEventos = this.eventos.filter((evento) => {
      return (
        (!filters.location ||
          evento.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())) &&
        (!filters.date || evento.date === filters.date) &&
        (!filters.interests || evento.interests?.includes(filters.interests)) &&
        (!filters.maxPrice || evento.price <= filters.maxPrice)
      );
    });
  }
}