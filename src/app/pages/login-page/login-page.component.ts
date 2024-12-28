import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { catchError, concatAll, EMPTY, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-login-page',
  standalone: true,
  providers: [AuthService],
  imports: [FormsModule, InputTextModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public login: string = '';
  public password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.login, this.password).pipe(
      tap((token) => {
        if(token){
          localStorage.setItem('token', token);
          this.router.navigate(['/profile']);
        }
      }),
      catchError((err) => {
        return EMPTY;
      }),
      untilDestroyed(this)
    ).subscribe();
  }


  goToRegister(){
    this.router.navigate(['/register']); 
  }

  goToProfile(){
    this.router.navigate(['/profile']); 
  }

}
