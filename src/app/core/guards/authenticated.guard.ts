import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const AuthenticatedGuard: CanActivateFn = (route, state) => {
  const authServide = inject(AuthService);
  const router = inject(Router);

  return authServide.isAuthenticaded() ? router.navigate(['/']) : true;
};
