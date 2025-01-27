import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DiversosComponent } from './diversos/diversos.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    CabeceraComponent,
    DiversosComponent,
    TestimoniosComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Front-EventMeet';
  ngOnInit(): void {
    initFlowbite();
  }
}
