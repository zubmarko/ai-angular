import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private STORAGE_KEY = 'username';
  private isAuthenticated: boolean = false;
  username: string | null = null;

  constructor(private router: Router) {
    this.username = localStorage.getItem(this.STORAGE_KEY);
  }

  login(username: string, password: string): Observable<void | never> {
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      this.setUsername(username);

      this.router.navigate(['/statistics']);
      return of();  // Successfully resolved
    } else {
      return throwError('Invalid credentials');  // Rejected with an error message
    }
  }

  getUsername(): string | null {
    return this.username;
  }

  setUsername(username: string): void {
    this.username = username;
    localStorage.setItem(this.STORAGE_KEY, username);
  }

  isAuthenticatedUser(): boolean {
    return !!this.username; // Returns true if username exists
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.username = null;
    this.router.navigate(['/login']);
  }
}
