import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export default class InicioSesionComponent {
  user: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  login(): void {
    this.authService.login(this.user, this.password).subscribe((next) => {
      this.router.navigate(['/']);
      error: (err: any) => console.error('Login failed', err);
    });
  }
}
