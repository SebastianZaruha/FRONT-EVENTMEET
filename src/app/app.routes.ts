import { Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { AuthGuard } from './core/guards/auth.guard'; // Importa AuthGuard
import { AuthenticatedGuard } from './core/guards/authenticated.guard'; // Importa AuthenticatedGuard
import { RegistroComponent } from './pages/registro/registro.component';
import { EventdetailComponent } from './pages/eventdetail/eventdetail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal, accesible para todos
  {
    path: 'eventos',
    component: EventsComponent,
  },
  {
    path: 'eventos/:id',
    component: EventdetailComponent,
    canActivate: [AuthGuard], // Requiere autenticación para ver detalles del evento
  },
  {
    path: 'login',
    component: InicioSesionComponent,
    canActivate: [AuthenticatedGuard], // Solo accesible si NO estás logueado
  },
  { path: 'register', component: RegistroComponent }, // Registro, generalmente accesible para todos
  {
    path: 'contacto',
    component: ContactoComponent,
    canActivate: [AuthGuard], // Requiere autenticación para contactar
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Ruta comodín para redirigir a la página principal
];
