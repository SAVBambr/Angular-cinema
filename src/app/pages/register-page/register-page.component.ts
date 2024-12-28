import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { User } from '../../shared/models/book';
import { catchError, EMPTY, take, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'register-page',
  standalone: true,
  providers: [AuthService],
  imports: [FormsModule, InputTextModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  name: string = '';
  email: string = '';
  login: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }

    const user = <User>{
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password,
      cartBooks: [],
      reviews: []
    };

    this.authService.register(user).pipe(
      tap(() => {
        alert('Успешная регистрация');
        this.router.navigate(['/login']); 
      }),
      catchError((error) => {
        return EMPTY;
      }),
      untilDestroyed(this)
    ).subscribe();
  }
}
