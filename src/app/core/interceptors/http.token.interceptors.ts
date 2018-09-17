import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor() {}

  private isWithCredentials(): boolean {
    return !environment.production;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'AUTOENTRY': 'true'
    };

    const request = req.clone({ setHeaders: headersConfig, withCredentials: this.isWithCredentials() });

    return next.handle(request);
  }
}
