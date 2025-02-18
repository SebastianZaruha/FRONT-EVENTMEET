import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.authService.decodeToken(token); // Assuming you have a decodeToken method
      console.log(decodedToken)
      if (decodedToken) {
        return true; // Allow access if token is valid
      }
    }
    this.router.navigate(['/login']); // Redirect to login if token is invalid or missing
    return false;
  }
}
