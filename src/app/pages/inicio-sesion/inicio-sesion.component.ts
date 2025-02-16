import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';

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
  isCompany: boolean = false; // Determina si el usuario es empresa

  constructor(private authService: AuthService, private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    // Decide la ruta de login dependiendo de si es empresa o usuario normal
    const loginUrl = this.isCompany ? '/companies/login' : '/users/login';

    this.authService
      .login(this.user.email, this.user.password, loginUrl)
      .subscribe({
        next: (data) => {
          console.log('Token JWT:', data.token);
          localStorage.setItem('token', data.token);
          this.router.navigate(['/']); // Redirige a la página principal
        },
        error: (error) => {
          console.error('Error en el login:', error);
          alert('Credenciales incorrectas.');
        },
      });
  }
}
