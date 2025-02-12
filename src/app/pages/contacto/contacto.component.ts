import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CabeceraEventosComponent } from '../../cabecera-eventos/cabecera-eventos.component';
import { FooterComponent } from '../../footer/footer.component';
import { ContactComponent } from '../../formulario-contacto/formulario-contacto.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CabeceraContactoComponent } from '../../cabecera-contacto/cabecera-contacto.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    CabeceraContactoComponent,
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {}
