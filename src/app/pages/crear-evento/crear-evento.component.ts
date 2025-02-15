import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { CrearComponent } from "../../crear/crear.component";
import { CabeceraContactoComponent } from "../../cabecera-contacto/cabecera-contacto.component";

@Component({
  selector: 'app-crear-evento',
  imports: [NavbarComponent, FooterComponent, CrearComponent, CabeceraContactoComponent],
  templateUrl: './crear-evento.component.html',
  styleUrl: './crear-evento.component.css',
})
export class CrearEventoComponent {}
