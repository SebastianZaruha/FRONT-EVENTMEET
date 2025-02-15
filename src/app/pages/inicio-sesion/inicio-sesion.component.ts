import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
  standalone: true,
  imports: [FormsModule],
  providers: [AuthService],
})
export class InicioSesionComponent {
  user: any = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.user.email, this.user.password).subscribe({
      next: (data) => {
        console.log('Token JWT:', data.token);
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']); // Redirige al usuario
      },
      error: (error) => {
        console.error('Error en el login:', error);
        alert('Credenciales incorrectas');
      },
    });
  }
}
