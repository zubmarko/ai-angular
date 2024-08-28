import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private STORAGE_KEY = 'isAuthenticated';
  private isAuthenticated: boolean;

  constructor() {
    this.isAuthenticated = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || 'false');
  }

  login(username: string, password: string): Observable<void | never> {
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.isAuthenticated));

      debugger
      return of();  // Successfully resolved
    } else {
      return throwError('Invalid credentials');  // Rejected with an error message
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem(this.STORAGE_KEY);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
