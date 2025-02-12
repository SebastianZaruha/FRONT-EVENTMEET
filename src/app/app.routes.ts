import { Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { HomeComponent } from './pages/home/home.component';
import InicioSesionComponent from './authentication/inicio-sesion/inicio-sesion.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eventos', component: EventsComponent },
  {
    path: 'eventos/:id',
    component: EventDetailComponent,
  },
  {
    path: 'login',
    component: InicioSesionComponent,
    canActivate: [AuthenticatedGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
// , canActivate: [AuthGuard]   -> añadir esto para la pagina de modificar datos de usuario
