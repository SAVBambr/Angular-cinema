import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environment';
import { User, UserLogin } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  getLogin(): Observable<string>{
    return this.http.get(`${environment.apiHost}${this.apiUrl}/getName`, { responseType: 'text'});
  }

  login(login: string, password: string) {
    const user = <UserLogin> {
      login: login,
      password: password
    }

    return this.http.post(`${environment.apiHost}${this.apiUrl}/login`, user, { responseType: 'text'});
  }

  register(user: User) : Observable<string> {
    return this.http.post<string>(`${environment.apiHost}${this.apiUrl}/register`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
