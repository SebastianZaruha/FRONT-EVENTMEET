import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'ecentos/:id', component: EventsComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
