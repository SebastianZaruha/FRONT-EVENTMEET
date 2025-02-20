import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { CabeceraContactoComponent } from "../cabecera-contacto/cabecera-contacto.component";

@Component({
  selector: 'app-eventos-empresa',
  imports: [CommonModule, FooterComponent, NavbarComponent, CabeceraContactoComponent],
  templateUrl: './eventos-empresa.component.html',
  styleUrl: './eventos-empresa.component.css',
})
export class EventosEmpresaComponent {
  isMenuHidden() {
    return true;
  }
}
