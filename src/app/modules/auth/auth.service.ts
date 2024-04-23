import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public signedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.updateFlag();
  }

  doSignIn(email: string, pass: string): void {
    this.signedIn = false;
    this.getSignInToken(email, pass).subscribe({
      next: res => {
        this.saveToken(res.token);
        this.updateFlag();
        void this.router.navigate(['/blogs']);
      },
      error: err => {
        // TODO: show error
      }
    });
  }

  loadToken(): string | null {
    return localStorage.getItem('token');
  }
  
  private updateFlag(): void {
    const token = this.loadToken();
    if (!token) {
      this.signedIn = false;
    } else {
      this.signedIn = true;
    }
  }

  private getSignInToken(email: string, pass: string): Observable<{token: string}> {
    const payload = {
      email: email,
      password: pass
    }
    return this.http.post<{token: string}>(API_URL + '/sign-in', payload);
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  
}
