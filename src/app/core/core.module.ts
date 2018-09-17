import { ApiService } from './services/api.service';
import { JwtService } from './services/jwt.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptors';
import { LoadGuard } from './guards/load-guard';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LoginComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    AuthGuard,
    LoadGuard,
    AuthService,
    JwtService,
    ApiService,
    DataService
  ]
})
export class CoreModule { }
