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
    name: '',
    email: '',
    password: '',
    direction: '',
  };

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  register(): void {
    this.registerService
      .register(
        this.user.name,
        this.user.email,
        this.user.password,
        this.user.direction
      )
      .subscribe({
        // Envía los parámetros individualmente
        next: (data) => {
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Registration failed', err);
          alert(err.message);
        },
      });
  }
}
