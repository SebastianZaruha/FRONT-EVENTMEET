import { Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'eventos/:id', component: EventDetailComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
