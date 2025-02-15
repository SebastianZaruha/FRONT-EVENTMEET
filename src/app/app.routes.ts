import { Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { RegistroComponent } from './pages/registro/registro.component';
import { EventdetailComponent } from './pages/eventdetail/eventdetail.component'; // Si es el componente correcto

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eventos', component: EventsComponent, canActivate: [AuthGuard] },
  {
    path: 'eventos/:id',
    component: EventdetailComponent,
    canActivate: [AuthGuard],
  }, // Usa el componente correcto
  {
    path: 'login',
    component: InicioSesionComponent,
    canActivate: [AuthenticatedGuard],
  },
  { path: 'register', component: RegistroComponent },
  { path: 'contacto', component: ContactoComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
