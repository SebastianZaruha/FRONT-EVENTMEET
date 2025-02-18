import { Component } from '@angular/core';
import { CabeceraContactoComponent } from "../../cabecera-contacto/cabecera-contacto.component";
import { EventosEmpresaComponent } from "../../eventos-empresa/eventos-empresa.component";
import { FooterComponent } from "../../footer/footer.component";
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-pagina-empresas',
  imports: [
    NavbarComponent,
    FooterComponent,
    EventosEmpresaComponent,
    CabeceraContactoComponent,
  ],
  templateUrl: './pagina-empresas.component.html',
  styleUrl: './pagina-empresas.component.css',
})
export class PaginaEmpresasComponent {
  navigateToLogin(){
    console.log('Navigate to login');
  }
}
