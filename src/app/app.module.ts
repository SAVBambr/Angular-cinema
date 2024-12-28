import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgIf } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { HomeModule } from './pages/home/home.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomeModule,
    AppRoutingModule,
    RouterModule.forRoot([]), 
    CommonModule,
    RouterOutlet,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ButtonModule,
    NgIf,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
