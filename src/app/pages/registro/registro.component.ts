import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../../core/services/register.service';
import { User } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  imports: [FormsModule, CommonModule],
})
export class RegistroComponent {
  user: User = {
    nick: '',
    email: '',
    password: '',
    location: '',
    role: '',
    points: 0,
    status: ''
  };

  isPasswordInvalid: boolean = false;
  isSubmitting: boolean = false;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  // Valida la contraseña en tiempo real
  checkPassword(): void {
    this.isPasswordInvalid = this.user.password.trim().length < 6;
  }

  // Valida todos los campos del formulario
  isFormInvalid(): boolean {
    return (
      !this.user.nick.trim() ||
      !this.user.email.trim() ||
      !this.user.password.trim() ||
      this.isPasswordInvalid
    );
  }

  register(): void {
    // Verifica todos los campos y la contraseña
    if (this.isFormInvalid()) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    this.isSubmitting = true;

    this.registerService
      .register(
        this.user.nick.trim(),
        this.user.email.trim(),
        this.user.password.trim(),
        this.user.location.trim()
      )
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.isSubmitting = false;
          console.error('Registration failed', err);
          alert(err.message);
        },
      });
  }
}
