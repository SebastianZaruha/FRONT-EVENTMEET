import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private LOGIN_URL = 'http://localhost:3000/login';
  private tokenKey = 'authToken';
  constructor(private httpClent: HttpClient, private router: Router) {}

  login(user: string, password: string): Observable<any> {
    return this.httpClent.post(this.LOGIN_URL, { email: user, password }).pipe(
      tap((response) => {
      if ((response as any).token) {
        console.log((response as any).token);
        this.setToken((response as any).token);
      }
      })
    );
  }
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    } else {
      return null;
    }
  }
  isAuthenticaded(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}
