import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private LOGIN_URL = 'http://localhost:3000/v1/users';
  private tokenKey = 'authToken';

  constructor(private httpClent: HttpClient, private router: Router) {}

  register(nick: string, email: string, password: string, location: string) {
    return this.httpClent
      .post(this.LOGIN_URL, { nick, email, password, location })
      .pipe(
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
}
