import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service'; // Importa el servicio
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
  standalone: true,
  imports: [FormsModule], // Importa el servicio
  providers: [AuthService],
})
export class InicioSesionComponent {
  user: any = {
    // Declara el objeto user
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.user.email, this.user.password).subscribe({
      // Llama al servicio
      next: (data) => {
        console.log('Token JWT:', data.token); // Verifica el token (opcional)
        localStorage.setItem('token', data.token); // Guarda el token
        this.router.navigate(['/']); // Redirige al usuario
      },
      error: (error) => {
        console.error('Error en el login:', error);
        alert('Credenciales incorrectas'); // Muestra un mensaje de error
      },
    });
  }
}
