import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  UserTokenPayload,
  CompanyTokenPayload,
  User,
} from '../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly apiUrl: string = 'http://localhost:3000/v1';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {} // Inject

  login(email: string, password: string, loginUrl: string): Observable<any> {
    return this.http
      .post(`${this.apiUrl}${loginUrl}`, { email, password })
      .pipe(
        map((data: any) => {
          if (data && data.token) {
            localStorage.setItem('token', data.token);
            const decodedToken = this.decodeToken(data.token);
            if (decodedToken) {
              localStorage.setItem('user', JSON.stringify(decodedToken));
            }
            return data;
          } else {
            throw new Error('Token not received');
          }
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  
  getUser(): UserTokenPayload | CompanyTokenPayload | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  decodeToken(token: string): any | null {
    // Could also be UserTokenPayload | CompanyTokenPayload | null if you type your tokens
    try {
      const decodedToken = this.jwtHelper.decodeToken(token); // Use injected service
      return decodedToken;
    } catch (error) {
      console.error('Invalid token:', error);
      return null;
    }
  }

  private handleError(error: any) {
    console.error('Error:', error);
    return throwError(
      () =>
        new Error(
          error.message || 'Something bad happened; please try again later.'
        )
    );
  }
}