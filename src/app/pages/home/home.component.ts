import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CabeceraComponent } from '../../cabecera/cabecera.component';
import { DiversosComponent } from '../../diversos/diversos.component';
import { FooterComponent } from '../../footer/footer.component';
import { MapComponent } from '../../map/map.component';
import { TestimoniosComponent } from '../../testimonios/testimonios.component';
import { UltimosComponent } from '../../ultimos/ultimos.component';
import { UnirseComponent } from '../../unirse/unirse.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    NavbarComponent,
    FooterComponent,
    TestimoniosComponent,
    MapComponent,
    UnirseComponent,
    DiversosComponent,
    CabeceraComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
