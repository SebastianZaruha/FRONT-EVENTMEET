import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CabeceraContactoComponent } from '../../cabecera-contacto/cabecera-contacto.component';
import { FooterComponent } from '../../footer/footer.component';
import { ContactComponent } from '../../formulario-contacto/formulario-contacto.component';
import { NavbarComponent } from '../../navbar/navbar.component';

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
