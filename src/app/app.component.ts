import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { UntilDestroy } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Library.Frontend';
  login: string | null = null;


  /*searchTerm: string = ''; // Переменная для текста поиска
  filteredCards: any[] = []; // Массив для фильтрованных карточек*/


  constructor(private authService: AuthService, private route: Router){
    authService.getLogin().pipe(
      tap((login) => {
        //this.login = login;
      })
    ).subscribe()
  }

  logout(){
    this.authService.logout();
  }

  goToRegister() {
    this .route.navigate(['/register'])
  }

}
